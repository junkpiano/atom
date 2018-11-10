"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.grepReplace = grepReplace;

function _replaceInFile() {
  const data = _interopRequireDefault(require("./replaceInFile"));

  _replaceInFile = function () {
    return data;
  };

  return data;
}

<<<<<<< HEAD
var _RxMin = require("rxjs/bundles/Rx.min.js");
=======
var _rxjsCompatUmdMin = require("rxjs-compat/bundles/rxjs-compat.umd.min.js");
>>>>>>> Update

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 *
 *  strict-local
 * @format
 */
function grepReplace(filePaths, regex, replacementText, concurrency = 4) {
<<<<<<< HEAD
  return _RxMin.Observable.from(filePaths).mergeMap(filePath => (0, _replaceInFile().default)(filePath, regex, replacementText).map(replacements => ({
=======
  return _rxjsCompatUmdMin.Observable.from(filePaths).mergeMap(filePath => (0, _replaceInFile().default)(filePath, regex, replacementText).map(replacements => ({
>>>>>>> Update
    type: 'success',
    filePath,
    replacements
  })).catch(err => {
<<<<<<< HEAD
    return _RxMin.Observable.of({
=======
    return _rxjsCompatUmdMin.Observable.of({
>>>>>>> Update
      type: 'error',
      filePath,
      message: err.message
    });
  }), concurrency).publish();
}