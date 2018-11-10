"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNuclideConsoleMessages = getNuclideConsoleMessages;
exports.configure = exports.appender = void 0;

<<<<<<< HEAD
var _RxMin = require("rxjs/bundles/Rx.min.js");
=======
var _rxjsCompatUmdMin = require("rxjs-compat/bundles/rxjs-compat.umd.min.js");
>>>>>>> Update

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 *
 * 
 * @format
 */
let sub = null;

function getSubject() {
  if (sub == null) {
<<<<<<< HEAD
    sub = new _RxMin.Subject();
=======
    sub = new _rxjsCompatUmdMin.Subject();
>>>>>>> Update
  }

  return sub;
}

function getNuclideConsoleMessages() {
  return getSubject().asObservable();
}

function consoleAppender() {
  return loggingEvent => {
    getSubject().next(loggingEvent);
  };
}

const appender = consoleAppender;
exports.appender = appender;
const configure = consoleAppender;
exports.configure = configure;