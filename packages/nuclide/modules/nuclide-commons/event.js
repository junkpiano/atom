"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.attachEvent = attachEvent;
exports.observableFromSubscribeFunction = observableFromSubscribeFunction;

function _UniversalDisposable() {
  const data = _interopRequireDefault(require("./UniversalDisposable"));

  _UniversalDisposable = function () {
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
 * Add an event listener an return a disposable for removing it. Note that this function assumes
 * node EventEmitter semantics: namely, that adding the same combination of eventName and callback
 * adds a second listener.
 */
function attachEvent(emitter, eventName, callback) {
  emitter.addListener(eventName, callback);
  return new (_UniversalDisposable().default)(() => {
    emitter.removeListener(eventName, callback);
  });
}

function observableFromSubscribeFunction(fn) {
<<<<<<< HEAD
  return _RxMin.Observable.create(observer => {
    const disposable = fn(observer.next.bind(observer));
    return () => {
      disposable.dispose();
    };
  });
=======
  return _rxjsCompatUmdMin.Observable.create(observer => new (_UniversalDisposable().default)(fn(observer.next.bind(observer))));
>>>>>>> Update
}