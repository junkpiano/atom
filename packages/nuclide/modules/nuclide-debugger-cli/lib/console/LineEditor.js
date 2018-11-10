"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

<<<<<<< HEAD
function _ANSIInputStreamParser() {
  const data = require("./ANSIInputStreamParser");

  _ANSIInputStreamParser = function () {
    return data;
  };

  return data;
}

function _ANSIStreamOutput() {
  const data = require("./ANSIStreamOutput");

  _ANSIStreamOutput = function () {
    return data;
  };

  return data;
}

var _events = _interopRequireDefault(require("events"));

function _GatedCursorControl() {
  const data = _interopRequireDefault(require("./GatedCursorControl"));

  _GatedCursorControl = function () {
    return data;
  };

  return data;
}

=======
var _events = _interopRequireDefault(require("events"));

>>>>>>> Update
function _History() {
  const data = _interopRequireDefault(require("./History"));

  _History = function () {
    return data;
  };

  return data;
}

<<<<<<< HEAD
function _ANSIEscapeSequenceParser() {
  const data = _interopRequireDefault(require("./ANSIEscapeSequenceParser"));

  _ANSIEscapeSequenceParser = function () {
=======
function _blessed() {
  const data = _interopRequireDefault(require("blessed"));

  _blessed = function () {
>>>>>>> Update
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 *  strict
 * @format
 */
<<<<<<< HEAD
function onlyKeepSGR(seq) {
  // m is the terminator for Set Graphics Rendition
  return seq.final === 'm';
}

class LineEditor extends _events.default {
  // true if write is first one since entered command
  // NB cursor is always an index into _buffer (or one past the end)
  // even if the line is scrolled to the right. _repaint is responsible
  // for making sure the physical cursor is positioned correctly
  constructor(options, logger) {
    super();
    this._buffer = '';
    this._screenRows = 0;
    this._screenColumns = 0;
    this._cursor = 0;
    this._leftEdge = 0;
    this._logger = logger;
    this._parser = new (_ANSIInputStreamParser().ANSIInputStreamParser)();
    this._input = options.input != null ? options.input : process.stdin;
    this._output = options.output != null ? options.output : process.stdout; // $FlowFixMe isTTY exists

    this._tty = options.tty != null ? options.tty : this._input.isTTY;
    this._cursorPromises = new Set();
    const maxHistoryItems = options.maxHistoryItems != null ? options.maxHistoryItems : 50;
    const removeDups = options.removeHistoryDuplicates != null ? options.removeHistoryDuplicates : true;
    this._history = new (_History().default)(maxHistoryItems, removeDups);
    this._historyTextSave = '';
    this._editedSinceHistory = false;

    if (this._tty) {
      // We don't want this going through this.write because that will strip
      // out the sequences this generates.
      this._outputANSI = new (_ANSIStreamOutput().ANSIStreamOutput)(s => {
        this._output.write(s);

        return;
      });
      this._gatedOutputANSI = new (_GatedCursorControl().default)(this._outputANSI);
    }

    this._output.write('\n');

    this._installHooks();

    this._onResize();

    this.setPrompt('$ ');
    this._firstOut = true;
    this._borrowed = false;
    this._lastOutputColumn = 1;
    this._keyHandlers = new Map([['CTRL-A', () => this._home()], ['CTRL-B', () => this._left()], ['CTRL-C', () => this._sigint()], ['CTRL-D', () => this._deleteRight(true)], ['CTRL-E', () => this._end()], ['CTRL-F', () => this._right()], ['CTRL-K', () => this._deleteToEnd()], ['CTRL-N', () => this._historyNext()], ['CTRL-P', () => this._historyPrevious()], ['CTRL-T', () => this._swapChars()], ['CTRL-U', () => this._deleteLine()], ['CTRL-W', () => this._deleteToStart()], ['HOME', () => this._home()], ['END', () => this._end()], ['LEFT', () => this._left()], ['RIGHT', () => this._right()], ['DOWN', () => this._historyNext()], ['UP', () => this._historyPrevious()], ['BACKSPACE', () => this._backspace()], ['ENTER', () => this._enter()], ['DEL', () => this._deleteRight(false)], ['ESCAPE', () => this._deleteLine()]]);
  }

  close() {
    this._closePending = true;

    if (this._cursorPromises.size !== 0) {
      // we don't want to quit with cursor promises pending, because the TTY
      // driver will still send the response after the app exits, resulting
      // in garbage at the shell prompt
      return;
    }

    this._close();
  }

  _close() {
    if (this._onClose != null) {
      this._input.removeListener('close', this._onClose);

      this._onClose = null;
    }

    if (this._onData != null) {
      this._input.removeListener('data', this._onData);

      this._onData = null;
    }

    this.emit('close');
  }

  isTTY() {
    return this._tty;
  }

  setPrompt(prompt) {
    this._parsedPrompt = (0, _ANSIEscapeSequenceParser().default)(prompt, onlyKeepSGR);
  } // NOTE that writing is an async process because we have to wait for
  // transactions with the terminal (e.g. getting the cursor position)
  // We don't want the client to have to wait, so queue writes and manage
  // the async all internally.
  //
  // write() manages writing text to the screen from the application without
  // bothering the prompt, even text which contains (and not always ending in)
  // newlines.


  write(s) {
    if (this._writeQueue == null) {
      this._writeQueue = '';
    }

    this._writeQueue += s;

    if (!this._writing) {
      this._processWriteQueue();
    }
  }

  async _processWriteQueue() {
    this._writing = true;

    while (this._writeQueue != null) {
      const s = this._writeQueue;
      this._writeQueue = null; // await in loop is intentional here - while we're waiting, other
      // stuff to write could come in.
      // eslint-disable-next-line no-await-in-loop

      await this._write(s);
    }

    this._writing = false;
  }

  async _write(s) {
    if (this._tty && !this._borrowed) {
      // here we output the string (which may not have a newline terminator)
      // while maintaining the integrity of the prompt
      const cursor = this._outputANSI;

      if (!(cursor != null)) {
        throw new Error("Invariant violation: \"cursor != null\"");
      } // clear out prompt


      const here = await this._getCursorPosition();
      cursor.gotoXY(1, here.row);
      cursor.clearEOL();
      this._fieldRow = here.row;
      let col = this._lastOutputColumn;
      let row = here.row; // if this is the first write after the user hit 'enter' on a command,
      // we don't want to back up a line - this would put us over the prompt
      // rather than the clear line after it.

      if (!this._firstOut) {
        row--;
      }

      this._firstOut = false;
      cursor.gotoXY(col, row);

      const outputPiece = line => {
        const tabbed = line.split('\t');

        for (let i = 0; i < tabbed.length; i++) {
          // strip out any escape or control sequences other than SGR, which is
          // used for setting colors and other text attributes
          const parsed = (0, _ANSIEscapeSequenceParser().default)(tabbed[i], onlyKeepSGR);

          this._output.write(parsed.filteredText); // update the cursor position. the fact that screen cell indices are
          // 1-based makes the mod math a bit weird. Convert col to be zero-based first.


          col--;
          col += parsed.displayLength;
          row += Math.trunc(col / this._screenColumns);
          col %= this._screenColumns;

          if (i < tabbed.length - 1) {
            const target = col + 7 - col % 8;

            this._output.write(' '.repeat(target - col));

            col = target;
          }

          col++;
        }
      }; // NB we are assuming no control characters other than \r and \n here
      // anything else will interfere with column counting


      const lines = s.replace(/\r/g, '').split('\n');
      outputPiece(lines[0]);
      lines.shift();

      for (const line of lines) {
        this._output.write('\n');

        row++;
        col = 1;
        outputPiece(line);
      }

      this._lastOutputColumn = col;
      this._fieldRow = Math.min(this._screenRows, row + 1);

      this._output.write('\r\n');

      cursor.clearEOL();

      this._output.write(this._parsedPrompt.filteredText);

      this._repaint();
    } else {
      this._output.write(s);
    }

    this._writing = false;
  } // borrowTTY and returnTTY allow the user of console to take over complete
  // control of the TTY; for example, to implement paging of large amounts of
  // data.


  borrowTTY() {
    if (this._borrowed || !this._tty) {
      return null;
    }

    const cursorControl = this._gatedOutputANSI;

    if (!(cursorControl != null)) {
      throw new Error("Invariant violation: \"cursorControl != null\"");
    }

    this._borrowed = true;
    cursorControl.setEnabled(true);
    return cursorControl;
  }

  returnTTY() {
    if (!this._borrowed || !this._tty) {
      return false;
    }

    const cursorControl = this._gatedOutputANSI;

    if (!(cursorControl != null)) {
      throw new Error("Invariant violation: \"cursorControl != null\"");
    }

    this._borrowed = false;
    cursorControl.setEnabled(false);
    this.write(`\n${this._parsedPrompt.filteredText}`);

    this._repaint();

    return true;
  }

  async prompt() {
    this._output.write(`\r${this._parsedPrompt.filteredText}`);

    if (this._tty) {
      const cursorPos = await this._getCursorPosition();
      this._fieldRow = cursorPos.row;

      this._repaint();
    }
  }

  _onText(s) {
    if (this._borrowed) {
      for (const ch of s.toUpperCase()) {
        this.emit('key', ch);
      }

      return;
    }

    if (this._tty) {
      this._buffer = this._buffer.substr(0, this._cursor) + s + this._buffer.substr(this._cursor);
      this._cursor += s.length;

      this._textChanged();

      this._repaint();

      return;
    }

    let piece = s;

    while (true) {
      const ret = piece.indexOf('\n');

      if (ret === -1) {
        break;
      }

      this._buffer += piece.substr(0, ret);
      this.emit('line', this._buffer);
      this._buffer = '';
      piece = piece.substr(ret + 1);
    }

    this._buffer += piece;
  }

  _onKey(key) {
    const name = key.ctrl ? `CTRL-${key.key}` : key.key;

    if (this._borrowed) {
      this.emit('key', name);
      return;
    }

    const handler = this._keyHandlers.get(name);

    if (handler != null) {
      handler();
    }
=======
const MAX_SCROLLBACK = 2000;

class LineEditor extends _events.default {
  // the box containing the scrollback
  // the box containing the being edited command line
  // status line box
  // the entire scrollback
  // the top line of the output
  // if the outupt is scrolled all the way to the bottom
  // true if the next output should be on the same line (no ending \n)
  // true if there's output the user hasn't seen
  // if we're closing on an error, what to print after console is back to normal
  // the string being edited
  // the cursor position inside _buffer
  // a list of previously entered commands
  // the string that was being edited before the user starting scrolling through history
  // the logger
  constructor(options, logger) {
    super();
    this._fullscreen = false;
    this._handlers = new Map();
    this._closeError = null;
    this._logger = logger;
    this._tty = options.tty !== false;
    this._options = options;
    this._input = options.input || process.stdin;
    this._output = options.output || process.stdout;
    this._nextOutputSameLine = false;
  }

  isTTY() {
    return this._tty;
  }

  close(error) {
    this._closeError = error;
    this.emit('close');
  }

  setPrompt(prompt) {
    this._prompt = prompt;

    if (this._tty && this._fullscreen) {
      this._redrawConsole();
    }

    return;
  }

  enterFullScreen() {
    if (this._fullscreen) {
      return;
    }

    this._fullscreen = true;

    if (this._tty) {
      this._initializeBlessed(this._options);

      return;
    }

    this._initializeTTY(this._options);
  }

  _initializeBlessed(options) {
    const maxHistoryItems = options.maxHistoryItems != null ? options.maxHistoryItems : 50;
    const removeDups = options.removeHistoryDuplicates != null ? options.removeHistoryDuplicates : true;
    this._history = new (_History().default)(maxHistoryItems, removeDups);
    this._historyTextSave = '';
    this._program = _blessed().default.program({});
    this._screen = _blessed().default.screen({
      smartCSR: true,
      program: this._program,
      input: this._input,
      output: this._output
    });

    this._program.showCursor();

    this._outputBox = _blessed().default.box({
      top: 0,
      left: 0,
      width: '100%',
      height: '100%-2',
      scrollable: true,
      style: {
        fg: 'white',
        bg: 'black'
      },
      wrap: false,
      valign: 'bottom'
    });
    this._consoleBox = _blessed().default.box({
      top: '100%-2',
      left: 0,
      width: '100%',
      height: 1,
      content: '',
      style: {
        fg: 'green',
        bg: 'black'
      },
      tags: false
    });
    this._statusBox = _blessed().default.box({
      top: '100%-1',
      left: 0,
      width: '100%',
      height: 1,
      content: '',
      style: {
        fg: 'black',
        bg: 'gray'
      },
      align: 'right',
      tags: false
    });

    this._screen.append(this._outputBox);

    this._screen.append(this._consoleBox);

    this._screen.append(this._statusBox);

    this._handlers = new Map([['backspace', () => this._backspace()], ['delete', () => this._deleteRight(false)], ['down', () => this._historyNext()], ['end', () => this._end()], ['enter', () => this._enter()], ['home', () => this._home()], ['left', () => this._left()], ['pageup', () => this._pageUp()], ['pagedown', () => this._pageDown()], ['right', () => this._right()], ['space', () => this._inputChar(' ')], ['up', () => this._historyPrevious()], ['C-home', () => this._topOfOutput()], ['C-end', () => this._bottomOfOutput()], ['C-a', () => this._home()], ['C-c', () => this._sigint()], ['C-d', () => this._deleteRight(true)], ['C-e', () => this._end()], ['C-h', () => this._backspace()], ['C-k', () => this._deleteToEnd()], ['C-l', () => this._repaintScreen()], ['C-t', () => this._swapChars()], ['C-u', () => this._deleteLine()], ['C-w', () => this._deleteToStart()], ['\x7f', () => this._backspace()]]);

    this._screen.on('keypress', (ch, key) => {
      // key.name is the base name of a key. For a character with shift/ctrl/etc.,
      // it's still just the character 'a', 'b', 'c', etc.
      // key.full is the name of the key with modifiers. e.g. ctrl-c is 'C-c',
      // shift-c is 'S-c'.
      // key.ctrl, key.shift, etc. are booleans for which modifier keys are down.
      //
      // We don't want to go to the handlers array for normal or shifted
      // characters, but we do want to for control keys.
      if (key.name != null && key.name.length > 1 || key.ctrl === true) {
        const handler = this._handlers.get(key.full);

        if (handler != null) {
          handler();
        }

        return;
      }

      if (ch != null && ch >= ' ') {
        this._inputChar(ch);

        return;
      }
    });

    this._screen.on('resize', () => {
      this._repaintOutput();

      this._redrawConsole();
    });

    this._program.on('destroy', () => {
      if (this._closeError != null) {
        process.stderr.write(this._closeError);
      }
    });

    this._buffer = '';
    this.setPrompt('$ ');
    this._cursor = 0;
    this._scrollback = [];
    this._boxTop = 0;
    this._boxBottom = true;

    this._screen.render();
  }

  _initializeTTY(options) {
    this._input.on('data', data => this._onRawData(data));

    this._input.on('end', _ => this.close());
  }

  _redrawConsole() {
    // NB - 5 here gives a little context on the right of the cursor when
    // the user is near the right edge of the screen.
    const available = this._consoleBox.width - this._prompt.length - 5;
    const left = Math.max(0, this._cursor - available);

    const text = this._prompt + this._buffer.substr(left);

    this._consoleBox.setContent(text);

    this._screen.render();

    this._program.move(this._prompt.length + this._cursor - left, this._consoleBox.top);
  }

  _inputChar(ch) {
    this._logger.info(`Input character ${ch}`);

    this._buffer = this._buffer.substr(0, this._cursor) + ch + this._buffer.substr(this._cursor);

    this._logger.info(`Buffer is now ${this._buffer}`);

    this._cursor++;

    this._textChanged();

    this._redrawConsole();
>>>>>>> Update
  }

  _sigint() {
    this.emit('SIGINT');
  }

<<<<<<< HEAD
  _textChanged() {
    this._historyTextSave = this._buffer;

    this._history.resetSearch();
  }

  _home() {
    this._cursor = 0;

    this._repaint();
  }

  _end() {
    this._cursor = this._buffer === '' ? 0 : this._buffer.length;

    this._repaint();
=======
  _enter() {
    this.write(`${this._prompt}${this._buffer}\n`);

    this._history.addItem(this._buffer);

    this.emit('line', this._buffer);
    this._buffer = '';
    this._cursor = 0;

    this._textChanged();

    this._redrawConsole();
>>>>>>> Update
  }

  _left() {
    if (this._cursor > 0) {
      this._cursor--;

<<<<<<< HEAD
      this._repaint();
=======
      this._redrawConsole();
>>>>>>> Update
    }
  }

  _right() {
    if (this._cursor < this._buffer.length) {
      this._cursor++;

<<<<<<< HEAD
      this._repaint();
    }
  }

=======
      this._redrawConsole();
    }
  }

  _home() {
    this._cursor = 0;

    this._redrawConsole();
  }

  _end() {
    this._cursor = this._buffer === '' ? 0 : this._buffer.length;

    this._redrawConsole();
  }

>>>>>>> Update
  _deleteToEnd() {
    if (this._cursor < this._buffer.length) {
      this._buffer = this._buffer.substr(0, this._cursor);

      this._textChanged();

<<<<<<< HEAD
      this._repaint();
=======
      this._redrawConsole();
>>>>>>> Update
    }
  }

  _deleteToStart() {
    if (this._cursor > 0) {
      this._buffer = this._buffer.substr(this._cursor);
      this._cursor = 0;

      this._textChanged();

<<<<<<< HEAD
      this._repaint();
=======
      this._redrawConsole();
>>>>>>> Update
    }
  }

  _deleteLine() {
    if (this._buffer !== '') {
      this._buffer = '';
      this._cursor = 0;

      this._textChanged();

<<<<<<< HEAD
      this._repaint();
=======
      this._redrawConsole();
>>>>>>> Update
    }
  }

  _backspace() {
    if (this._cursor > 0) {
      this._buffer = this._buffer.substr(0, this._cursor - 1) + this._buffer.substr(this._cursor);
      this._cursor--;

      this._textChanged();

<<<<<<< HEAD
      this._repaint();
=======
      this._redrawConsole();
>>>>>>> Update
    }
  }

  _deleteRight(eofOnEmpty) {
    if (this._buffer === '' && eofOnEmpty) {
<<<<<<< HEAD
      this._output.write('\r\n');

=======
>>>>>>> Update
      this.close();
      return;
    }

    if (this._cursor < this._buffer.length) {
      this._buffer = this._buffer.substr(0, this._cursor) + this._buffer.substr(this._cursor + 1);

      this._textChanged();

<<<<<<< HEAD
      this._repaint();
=======
      this._redrawConsole();
>>>>>>> Update
    }
  }

  _swapChars() {
    if (this._cursor === 0 || this._buffer.length < 2) {
      return;
    }

    if (this._cursor === this._buffer.length) {
      this._cursor--;
    }

    this._buffer = this._buffer.substr(0, this._cursor - 1) + this._buffer.substr(this._cursor, 1) + this._buffer.substr(this._cursor - 1, 1) + this._buffer.substr(this._cursor + 1);
    this._cursor++;

    this._textChanged();

<<<<<<< HEAD
    this._repaint();
  }

  _enter() {
    this._output.write('\r\n');

    this._history.addItem(this._buffer);

    this.emit('line', this._buffer);
    this._buffer = '';
    this._cursor = 0;
    this._firstOut = true;

    this._textChanged();
  }

  _historyPrevious() {
    const item = this._history.previousItem();

    if (item != null) {
      this._buffer = item;
      this._cursor = item.length;

      this._repaint();
    }
  }

  _historyNext() {
    const item = this._history.nextItem();

    if (item != null) {
      this._buffer = item;
      this._cursor = item.length;
    } else {
      this._buffer = this._historyTextSave;
      this._cursor = this._buffer.length;
    }

    this._repaint();
  }

  _repaint() {
    if (!this._tty) {
      throw new Error("Invariant violation: \"this._tty\"");
    }

    const output = this._output;
    const outputANSI = this._outputANSI;

    if (!(output != null && outputANSI != null)) {
      throw new Error("Invariant violation: \"output != null && outputANSI != null\"");
    }

    const fieldStartCol = 1 + this._parsedPrompt.displayLength;

    if (this._fieldRow != null) {
      outputANSI.gotoXY(fieldStartCol, this._fieldRow);
      outputANSI.clearEOL();
    }

    let hwcursor = fieldStartCol + this._cursor - this._leftEdge;

    if (hwcursor < fieldStartCol) {
      this._leftEdge -= fieldStartCol - hwcursor;
    } else if (hwcursor >= this._screenColumns) {
      this._leftEdge += hwcursor - this._screenColumns + 1;
    }

    hwcursor = fieldStartCol + this._cursor - this._leftEdge;
    const textColumns = this._screenColumns - fieldStartCol;

    this._output.write(this._buffer.substr(this._leftEdge, textColumns));

    if (this._fieldRow != null) {
      outputANSI.gotoXY(hwcursor, this._fieldRow);
    }
  }

  async _getCursorPosition() {
    this._logger.info('console: _getCursorPosition');

    return new Promise((resolve, reject) => {
      if (!this._tty) {
        reject(new Error('_getCursorPosition called and not a TTY'));
        return;
      }

      if (this._closePending) {
        reject(new Error('requesting cursor position while closing the app'));
        return;
      }

      const completion = {
        timeout: null,
        resolve
      };
      const tmo = setTimeout(() => {
        reject(new Error('timeout before cursor position returned'));

        this._cursorPromises.delete(completion);
      }, 2000);
      completion.timeout = tmo;

      this._cursorPromises.add(completion);

      if (!(this._outputANSI != null)) {
        throw new Error("Invariant violation: \"this._outputANSI != null\"");
      }

      this._outputANSI.queryCursorPosition();
    });
  }

  _onCursorPosition(pos) {
    for (const completion of this._cursorPromises) {
      if (!(completion.timeout != null)) {
        throw new Error("Invariant violation: \"completion.timeout != null\"");
      }

      clearTimeout(completion.timeout);
      completion.resolve(pos);
    }

    this._cursorPromises.clear();

    if (this._closePending) {
      this._close();
    }
  }

  _onResize() {
    if (this._tty) {
      const output = this._output;

      if (!(output != null)) {
        throw new Error("Invariant violation: \"output != null\"");
      } // $FlowFixMe rows and columns exists if the stream is a TTY


      this._screenRows = output.rows; // $FlowFixMe rows and columns exists if the stream is a TTY

      this._screenColumns = output.columns;
    }
  }

  _installHooks() {
    this._input.setEncoding('utf8');

    this._onClose = () => {
      this.write('\n');
      this.close();
    };

    this._input.on('end', this._onClose);

    if (this._tty) {
      // $FlowFixMe has this call
      this._input.setRawMode(true);

      this._parser = new (_ANSIInputStreamParser().ANSIInputStreamParser)();

      this._onData = t => this._parser.next(t);

      this._input.on('data', this._onData);

      this._parser.on('text', s => this._onText(s));

      this._parser.on('key', k => this._onKey(k));

      this._parser.on('cursor', c => this._onCursorPosition(c));

      process.on('SIGWINCH', () => this._onResize());
      return;
    }

    this._onData = t => this._onText(t);

    this._input.on('data', this._onData);
=======
    this._redrawConsole();
  }

  _pageUp() {
    this._boxTop = Math.max(0, this._boxTop - this._outputBox.height + 1);

    this._updateScrollFlags();

    this._repaintOutput();
  }

  _pageDown() {
    this._boxTop = Math.min(this._scrollback.length - this._outputBox.height, this._boxTop + this._outputBox.height - 1);

    this._updateScrollFlags();

    this._repaintOutput();
  }

  _repaintScreen() {
    this._screen.realloc();

    this._repaintOutput();

    this._repaintStatus();

    this._redrawConsole();
  }

  _topOfOutput() {
    this._boxTop = 0;

    this._updateScrollFlags();

    this._repaintOutput();
  }

  _bottomOfOutput() {
    this._boxTop = Math.max(0, this._scrollback.length - this._outputBox.height);

    this._updateScrollFlags();

    this._repaintOutput();
  }

  _updateScrollFlags() {
    this._boxBottom = this._scrollback.length - this._boxTop <= this._outputBox.height;

    if (this._boxBottom) {
      this._more = false;
    }
  }

  write(s) {
    this._logger.info(`output [${s}]\n`);

    if (!this._tty || !this._fullscreen) {
      this._output.write(s);

      return;
    }

    const trailingNewline = s.endsWith('\n');
    const lines = s.split('\n');

    if (trailingNewline) {
      lines.splice(-1);
    }

    if (lines.length === 0) {
      return;
    }

    if (this._nextOutputSameLine && this._scrollback.length !== 0) {
      this._scrollback[this._scrollback.length - 1] += lines[0];
      lines.shift();
    }

    this._scrollback = this._scrollback.concat(lines).slice(-MAX_SCROLLBACK);
    this._nextOutputSameLine = !trailingNewline;

    if (!this._boxBottom) {
      this._more = true;
    }

    this._repaintOutput();
  }

  async prompt() {
    if (!this._tty) {
      this._output.write(this._prompt);
    }
  }

  _historyPrevious() {
    const item = this._history.previousItem();

    if (item != null) {
      this._buffer = item;
      this._cursor = item.length;

      this._redrawConsole();
    }
  }

  _historyNext() {
    const item = this._history.nextItem();

    if (item != null) {
      this._buffer = item;
      this._cursor = item.length;
    } else {
      this._buffer = this._historyTextSave;
      this._cursor = this._buffer.length;
    }

    this._redrawConsole();
  }

  _textChanged() {
    this._historyTextSave = this._buffer;

    this._history.resetSearch();
  }

  _repaintOutput() {
    // if we're pinned to the bottom, recompute the top
    if (this._boxBottom) {
      this._boxTop = Math.max(0, this._scrollback.length - this._outputBox.height);
    }

    this._outputBox.setContent(this._scrollback.slice(this._boxTop, this._boxTop + this._outputBox.height).join('\n'));

    this._repaintStatus();

    this._screen.render();
  }

  _repaintStatus() {
    const statusEmpty = '       ';
    const statusBottom = 'BOTTOM ';
    const statusMore = 'MORE...';

    const lpad = (str, width) => (str + ' '.repeat(width)).substr(0, width);

    const lastLine = Math.min(this._boxTop + this._outputBox.height, this._scrollback.length);
    const scroll = `Lines ${this._boxTop + 1}-${lastLine} of ${this._scrollback.length}`;
    const where = this._more ? statusMore : this._boxBottom ? statusBottom : statusEmpty;

    this._statusBox.setContent(`| ${lpad(scroll, 30)} | ${where}`);

    this._screen.render();
  } // non-tty support


  _onRawData(data) {
    data.toString('utf8').trim().split('\n').forEach(line => this.emit('line', line));
>>>>>>> Update
  }

}

exports.default = LineEditor;