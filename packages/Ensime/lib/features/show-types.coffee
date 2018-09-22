{bufferPositionFromMouseEvent, pixelPositionFromMouseEvent, getElementsByClass} = require '../utils'
SubAtom = require('sub-atom')
{goToPosition} = require './go-to'
log = require('loglevel').getLogger('ensime.show-types')

# This one lives as one per file for all instances with an instanceLookup.
class ShowTypes
  constructor: (@editor, @clientLookup) ->
    @disposables = new SubAtom
    @locked = false

    @editorView = atom.views.getView(@editor)
    @editorElement = @editorView.rootElement

    atom.config.observe 'Ensime.enableTypeTooltip', (enabled) =>
      if(enabled)
        @disposables.add @editorElement, 'mousemove', '.scroll-view', (e) =>
          @clearExprTypeTimeout()
          @exprTypeTimeout = setTimeout (=>
            @showExpressionType e
          ), 100

        @disposables.add @editorElement, 'mouseout', '.scroll-view', (e) =>
          @clearExprTypeTimeout()

        @disposables.add @editor.onDidDestroy =>
          @deactivate()
          
        @disposables.add atom.config.observe 'Ensime.richTypeTooltip', (@richTypeTooltip) =>
      else
        @deactivate()
        # @disposables.dispose()

  # get expression type under mouse cursor and show it
  showExpressionType: (e) ->
    {formatTypeAsString, formatTypeAsHtml, typeConstructorFromName} = require '../atom-formatting'
    
    return if @marker? or @locked

    pixelPt = pixelPositionFromMouseEvent(@editor, e)
    bufferPt = bufferPositionFromMouseEvent(@editor, e)
    
    offset = @editor.getBuffer().characterIndexForPosition(bufferPt)

    client = @clientLookup()
    client?.getSymbolAtPoint(@editor.getPath(), offset).then((msg) =>
      @marker?.destroy()
      
      return if(msg.type.fullName == "<none>")
    
      @marker = @editor.markBufferPosition(bufferPt)
      if(@marker)
        typeFormatter =
          if @richTypeTooltip then formatTypeAsHtml else formatTypeAsString
        
        TypeHoverElement = require '../views/type-hover-element'
        element = new TypeHoverElement().initialize(typeFormatter(msg.type))
        
        @domListener?.destroy()
        DOMListener = require 'dom-listener'
        @domListener = new DOMListener(element)
        @domListener.add "a", 'click', (event) =>
          a = event.target
          qualifiedName = decodeURIComponent(a.dataset.qualifiedName)
          log.debug("asking for symbol by name: ", qualifiedName)
          client.symbolByName(qualifiedName).then (response) =>
            if(response.declPos)
              goToPosition(response.declPos)
              @unstickAndHide()
          
          
        @overlayDecoration = @editor.decorateMarker(@marker, {
          type: 'overlay'
          item: element
          class: "ensime"
        })
        
        @stickCommand?.dispose()
        @stickCommand = atom.commands.add 'atom-workspace', "ensime:lock-type-hover", =>
          @locked = true
          @stickCommand.dispose()
          @unstickCommand?.dispose()
          @unstickCommand = atom.commands.add 'atom-workspace', "core:cancel", =>
            @unstickAndHide()
    ).catch (err) ->
      # Do nothing, this happens when hovering on "stuff"
      
  unstickAndHide: ->
    @unstickCommand.dispose()
    @locked = false
    @hideExpressionType()

  deactivate: ->
    @clearExprTypeTimeout()
    @disposables.dispose()
    @stickCommand?.dispose()
    @unstickCommand?.dispose()
    @domListener?.destroy()

  # helper function to hide tooltip and stop timeout
  clearExprTypeTimeout: ->
    if @exprTypeTimeout?
      clearTimeout @exprTypeTimeout
      @exprTypeTimeout = null
    @hideExpressionType()

  hideExpressionType: ->
    return if @locked or not @marker
    @marker?.destroy()
    @marker = null
    @openerDisposable?.dispose()

module.exports = ShowTypes
