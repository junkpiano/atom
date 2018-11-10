"use strict";

function _nullthrows() {
  const data = _interopRequireDefault(require("nullthrows"));

  _nullthrows = function () {
    return data;
  };

  return data;
}

function _createPackage() {
  const data = _interopRequireDefault(require("../../../modules/nuclide-commons-atom/createPackage"));

  _createPackage = function () {
    return data;
  };

  return data;
}

function _UniversalDisposable() {
  const data = _interopRequireDefault(require("../../../modules/nuclide-commons/UniversalDisposable"));

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

function _ProjectionistFileFamilyProvider() {
  const data = _interopRequireDefault(require("./ProjectionistFileFamilyProvider"));

  _ProjectionistFileFamilyProvider = function () {
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
class Activation {
  constructor() {
<<<<<<< HEAD
    this._cwdApis = new _RxMin.BehaviorSubject(null);
=======
    this._cwdApis = new _rxjsCompatUmdMin.BehaviorSubject(null);
>>>>>>> Update
  }

  activate() {
    this._subscriptions = new (_UniversalDisposable().default)();
  }

  dispose() {
    (0, _nullthrows().default)(this._subscriptions).dispose();
  }

  consumeCwdApi(cwdApi) {
    this._cwdApis.next(cwdApi);
  }

  provideFileFamilyService() {
    return new (_ProjectionistFileFamilyProvider().default)(this._cwdApis.asObservable());
  }

}

(0, _createPackage().default)(module.exports, Activation);