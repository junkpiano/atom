"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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
class GatedCursorControl {
  constructor(inner) {
    this._inner = inner;
    this._enabled = false;
  }

  setEnabled(enabled) {
    this._enabled = enabled;
  }

  queryCursorPosition() {
    if (this._enabled) {
      this._inner.queryCursorPosition();
    }
  }

  gotoXY(col, row) {
    if (this._enabled) {
      this._inner.gotoXY(col, row);
    }
  }

  cursorLeft(cols) {
    if (this._enabled) {
      this._inner.cursorLeft(cols);
    }
  }

  cursorRight(cols) {
    if (this._enabled) {
      this._inner.cursorRight(cols);
    }
  }

  clearEOL() {
    if (this._inner) {
      this._inner.clearEOL();
    }
  }

  boldVideo() {
    if (this._inner) {
      this._inner.boldVideo();
    }
  }

  normalVideo() {
    if (this._inner) {
      this._inner.normalVideo();
    }
  }

}

exports.default = GatedCursorControl;