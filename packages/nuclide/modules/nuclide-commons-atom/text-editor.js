"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.existingEditorForUri = existingEditorForUri;
exports.existingEditorForBuffer = existingEditorForBuffer;
exports.getViewOfEditor = getViewOfEditor;
exports.getScrollTop = getScrollTop;
exports.setScrollTop = setScrollTop;
exports.setPositionAndScroll = setPositionAndScroll;
exports.getCursorPositions = getCursorPositions;
exports.observeEditorDestroy = observeEditorDestroy;
exports.enforceReadOnlyEditor = enforceReadOnlyEditor;
exports.enforceSoftWrap = enforceSoftWrap;
exports.isValidTextEditor = isValidTextEditor;
exports.centerScrollToBufferLine = centerScrollToBufferLine;

var _atom = require("atom");

<<<<<<< HEAD
function _UniversalDisposable() {
  const data = _interopRequireDefault(require("../nuclide-commons/UniversalDisposable"));

  _UniversalDisposable = function () {
    return data;
  };

  return data;
}

var _RxMin = require("rxjs/bundles/Rx.min.js");
=======
var _rxjsCompatUmdMin = require("rxjs-compat/bundles/rxjs-compat.umd.min.js");
>>>>>>> Update

function _event() {
  const data = require("../nuclide-commons/event");

  _event = function () {
    return data;
  };

  return data;
}

<<<<<<< HEAD
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

=======
>>>>>>> Update
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 * @format
 */

/**
 * Returns a text editor that has the given path open, or null if none exists. If there are multiple
 * text editors for this path, one is chosen arbitrarily.
 */
function existingEditorForUri(path) {
  // This isn't ideal but realistically iterating through even a few hundred editors shouldn't be a
  // real problem. And if you have more than a few hundred you probably have bigger problems.
  for (const editor of atom.workspace.getTextEditors()) {
    if (editor.getPath() === path) {
      return editor;
    }
  }

  return null;
}
/**
 * Returns a text editor that has the given buffer open, or null if none exists. If there are
 * multiple text editors for this buffer, one is chosen arbitrarily.
 */


function existingEditorForBuffer(buffer) {
  // This isn't ideal but realistically iterating through even a few hundred editors shouldn't be a
  // real problem. And if you have more than a few hundred you probably have bigger problems.
  for (const editor of atom.workspace.getTextEditors()) {
    if (editor.getBuffer() === buffer) {
      return editor;
    }
  }

  return null;
}

function getViewOfEditor(editor) {
  return atom.views.getView(editor);
}

function getScrollTop(editor) {
  return getViewOfEditor(editor).getScrollTop();
}

function setScrollTop(editor, scrollTop) {
  getViewOfEditor(editor).setScrollTop(scrollTop);
}
/**
 * Does a best effort to set an editor pane to a given cursor position & scroll.
 * Does not ensure that the current cursor position is visible.
 *
 * Can be used with editor.getCursorBufferPosition() & getScrollTop() to restore
 * an editors cursor and scroll.
 */


function setPositionAndScroll(editor, position, scrollTop) {
  editor.setCursorBufferPosition(position, {
    autoscroll: false
  });
  setScrollTop(editor, scrollTop);
}

function getCursorPositions(editor) {
<<<<<<< HEAD
  return _RxMin.Observable.defer(() => {
=======
  return _rxjsCompatUmdMin.Observable.defer(() => {
>>>>>>> Update
    // This will behave strangely in the face of multiple cursors. Consider supporting multiple
    // cursors in the future.
    const cursor = editor.getCursors()[0];

    if (!(cursor != null)) {
      throw new Error("Invariant violation: \"cursor != null\"");
    }

<<<<<<< HEAD
    return _RxMin.Observable.merge(_RxMin.Observable.of(cursor.getBufferPosition()), (0, _event().observableFromSubscribeFunction)(cursor.onDidChangePosition.bind(cursor)).map(event => event.newBufferPosition));
=======
    return _rxjsCompatUmdMin.Observable.merge(_rxjsCompatUmdMin.Observable.of(cursor.getBufferPosition()), (0, _event().observableFromSubscribeFunction)(cursor.onDidChangePosition.bind(cursor)).map(event => event.newBufferPosition));
>>>>>>> Update
  });
}

function observeEditorDestroy(editor) {
  return (0, _event().observableFromSubscribeFunction)(editor.onDidDestroy.bind(editor)).map(event => editor).take(1);
<<<<<<< HEAD
} // As of the introduction of atom.workspace.buildTextEditor(), it is no longer possible to
// subclass TextEditor to create a ReadOnlyTextEditor. Instead, the way to achieve this effect
// is to create an ordinary TextEditor and then override any methods that would allow it to
// change its contents.
// TODO: https://github.com/atom/atom/issues/9237.


function enforceReadOnlyEditor(textEditor, readOnlyExceptions = ['append', 'setText']) {
  // Cancel insert events to prevent typing in the text editor and disallow editing (read-only).
  const willInsertTextDisposable = textEditor.onWillInsertText(event => {
    event.cancel();
  });
  return new (_UniversalDisposable().default)(willInsertTextDisposable, // `setText` & `append` are the only exceptions that's used to set the read-only text.
  enforceReadOnlyBuffer(textEditor.getBuffer(), readOnlyExceptions));
}

function enforceReadOnlyBuffer(textBuffer, readOnlyExceptions = []) {
  const noop = () => {}; // All user edits use `transact` - so, mocking this will effectively make the editor read-only.


  const originalApplyChange = textBuffer.applyChange;
  const originalReadOnlyExceptionFunctions = {};
  textBuffer.applyChange = noop;
  readOnlyExceptions.forEach(passReadOnlyException);

  function passReadOnlyException(functionName) {
    const buffer = textBuffer;
    const originalFunction = buffer[functionName];
    originalReadOnlyExceptionFunctions[functionName] = originalFunction;

    buffer[functionName] = function () {
      textBuffer.applyChange = originalApplyChange;
      const result = originalFunction.apply(textBuffer, arguments);
      textBuffer.applyChange = noop;
      return result;
    };
  }

  return new (_UniversalDisposable().default)(() => {
    textBuffer.applyChange = originalApplyChange;
    const buffer = textBuffer;
    readOnlyExceptions.forEach(functionName => buffer[functionName] = originalReadOnlyExceptionFunctions[functionName]);
  });
=======
} // Use atom readOnly attribute to set read-only state.


function enforceReadOnlyEditor(textEditor, readOnlyExceptions = ['append', 'setText']) {
  textEditor.getElement().setAttribute('readonly', '');
  return {
    dispose() {
      textEditor.getElement().removeAttribute('readonly');
    }

  };
>>>>>>> Update
} // Turn off soft wrap setting for these editors so diffs properly align.
// Some text editor register sometimes override the set soft wrapping
// after mounting an editor to the workspace - here, that's watched and reset to `false`.


function enforceSoftWrap(editor, enforcedSoftWrap) {
  editor.setSoftWrapped(enforcedSoftWrap);
  return editor.onDidChangeSoftWrapped(softWrapped => {
    if (softWrapped !== enforcedSoftWrap) {
      // Reset the overridden softWrap to `false` once the operation completes.
      process.nextTick(() => {
        if (!editor.isDestroyed()) {
          editor.setSoftWrapped(enforcedSoftWrap);
        }
      });
    }
  });
}
/**
 * Checks if an object (typically an Atom pane) is a TextEditor.
 * Could be replaced with atom.workspace.isValidTextEditor,
 * but Flow doesn't support %checks in methods yet.
 */


function isValidTextEditor(item) {
  return item instanceof _atom.TextEditor;
}

function centerScrollToBufferLine(textEditorElement, bufferLineNumber) {
  const textEditor = textEditorElement.getModel();
  const pixelPositionTop = textEditorElement.pixelPositionForBufferPosition([bufferLineNumber, 0]).top; // Manually calculate the scroll location, instead of using
  // `textEditor.scrollToBufferPosition([lineNumber, 0], {center: true})`
  // because that API to wouldn't center the line if it was in the visible screen range.

  const scrollTop = pixelPositionTop + textEditor.getLineHeightInPixels() / 2 - textEditorElement.clientHeight / 2;
  textEditorElement.setScrollTop(Math.max(scrollTop, 1));
  textEditorElement.focus();
  textEditor.setCursorBufferPosition([bufferLineNumber, 0], {
    autoscroll: false
  });
}