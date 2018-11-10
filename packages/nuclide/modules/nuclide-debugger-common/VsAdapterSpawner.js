"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _process() {
  const data = require("../nuclide-commons/process");

  _process = function () {
    return data;
  };

  return data;
}

<<<<<<< HEAD
var _RxMin = require("rxjs/bundles/Rx.min.js");
=======
var _rxjsCompatUmdMin = require("rxjs-compat/bundles/rxjs-compat.umd.min.js");
>>>>>>> Update

/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 *  strict-local
 * @format
 */
class VsAdapterSpawner {
  constructor() {
<<<<<<< HEAD
    this._stdin = new _RxMin.Subject();
  }

  spawnAdapter(adapter) {
    const environment = _RxMin.Observable.fromPromise((0, _process().getOriginalEnvironment)());

    return _RxMin.Observable.forkJoin(this._stdin.buffer(environment), environment).switchMap(([stdinBuffer, env]) => {
=======
    this._stdin = new _rxjsCompatUmdMin.Subject();
  }

  spawnAdapter(adapter) {
    const environment = _rxjsCompatUmdMin.Observable.fromPromise((0, _process().getOriginalEnvironment)());

    return _rxjsCompatUmdMin.Observable.forkJoin(this._stdin.buffer(environment), environment).switchMap(([stdinBuffer, env]) => {
>>>>>>> Update
      const options = {
        stdio: ['pipe', // stdin
        'pipe', // stdout
        'pipe'],
        env: Object.assign({}, env, {
          ELECTRON_RUN_AS_NODE: 1
        }, adapter.env),
<<<<<<< HEAD
        input: _RxMin.Observable.from(stdinBuffer).concat(this._stdin),
=======
        input: _rxjsCompatUmdMin.Observable.from(stdinBuffer).concat(this._stdin),
>>>>>>> Update
        killTreeWhenDone: true,
        killTreeSignal: 'SIGKILL',
        isExitError: () => false,
        cwd: adapter.cwd == null ? undefined : adapter.cwd
      };

      if (adapter.command === 'node') {
        adapter.command = process.execPath;
<<<<<<< HEAD
=======
      } else if (adapter.command === 'sudo' && adapter.args[0] === 'node') {
        adapter.args[0] = process.execPath;
>>>>>>> Update
      }

      return (0, _process().observeProcessRaw)(adapter.command, adapter.args, options);
    }).publish();
  }

  async write(input) {
    this._stdin.next(input);
  }

  async dispose() {
    this._stdin.complete();
  }

}

exports.default = VsAdapterSpawner;