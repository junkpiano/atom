"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gitDiffStrings = gitDiffStrings;

function _fsPromise() {
  const data = _interopRequireDefault(require("../../../modules/nuclide-commons/fsPromise"));

  _fsPromise = function () {
    return data;
  };

  return data;
}

<<<<<<< HEAD
var _RxMin = require("rxjs/bundles/Rx.min.js");
=======
var _rxjsCompatUmdMin = require("rxjs-compat/bundles/rxjs-compat.umd.min.js");
>>>>>>> Update

function _process() {
  const data = require("../../../modules/nuclide-commons/process");

  _process = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
function gitDiffStrings(oldString, newString) {
  return makeTempFiles(oldString, newString).switchMap(([oldTempFile, newTempFile]) => (0, _process().runCommandDetailed)('git', ['diff', '--unified=0', '--no-index', oldTempFile, newTempFile], {
    killTreeWhenDone: true
  }).map(({
    stdout
  }) => stdout).catch(e => {
    // git diff returns with exit code 1 if there was a difference between
    // the files being compared
<<<<<<< HEAD
    return _RxMin.Observable.of(e.stdout);
=======
    return _rxjsCompatUmdMin.Observable.of(e.stdout);
>>>>>>> Update
  }).finally(() => {
    _fsPromise().default.unlink(oldTempFile);

    _fsPromise().default.unlink(newTempFile);
  }));
}

function makeTempFiles(oldString, newString) {
  let oldFilePath;
  let newFilePath;
<<<<<<< HEAD
  return _RxMin.Observable.forkJoin(_RxMin.Observable.fromPromise(_fsPromise().default.tempfile()).map(filePath => {
=======
  return _rxjsCompatUmdMin.Observable.forkJoin(_rxjsCompatUmdMin.Observable.fromPromise(_fsPromise().default.tempfile()).map(filePath => {
>>>>>>> Update
    oldFilePath = filePath.trim();
    return oldFilePath;
  }).switchMap(filePath => {
    return writeContentsToFile(oldString, filePath).map(() => filePath);
<<<<<<< HEAD
  }), _RxMin.Observable.fromPromise(_fsPromise().default.tempfile()).map(filePath => {
=======
  }), _rxjsCompatUmdMin.Observable.fromPromise(_fsPromise().default.tempfile()).map(filePath => {
>>>>>>> Update
    newFilePath = filePath.trim();
    return newFilePath;
  }).switchMap(filePath => {
    return writeContentsToFile(newString, filePath).map(() => filePath);
  })).catch(error => {
    if (oldFilePath != null) {
      _fsPromise().default.unlink(oldFilePath);
    }

    if (newFilePath != null) {
      _fsPromise().default.unlink(newFilePath);
    }

<<<<<<< HEAD
    return _RxMin.Observable.throw(error);
=======
    return _rxjsCompatUmdMin.Observable.throw(error);
>>>>>>> Update
  });
}

function writeContentsToFile(contents, filePath) {
<<<<<<< HEAD
  return _RxMin.Observable.fromPromise(_fsPromise().default.writeFile(filePath, contents));
=======
  return _rxjsCompatUmdMin.Observable.fromPromise(_fsPromise().default.writeFile(filePath, contents));
>>>>>>> Update
}