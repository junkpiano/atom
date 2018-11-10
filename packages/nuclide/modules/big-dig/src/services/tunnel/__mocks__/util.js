"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TestTransportFactory = TestTransportFactory;

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
function TestTransportFactory(msgs) {
  const messages = msgs != null ? msgs : [];
  return {
    send: jest.fn(),
    onMessage: () => {
<<<<<<< HEAD
      return _RxMin.Observable.from(messages);
=======
      return _rxjsCompatUmdMin.Observable.from(messages);
>>>>>>> Update
    }
  };
}