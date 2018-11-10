"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.activate = activate;
exports.deactivate = deactivate;
<<<<<<< HEAD
exports.consumeOutputService = consumeOutputService;
=======
exports.consumeConsole = consumeConsole;
>>>>>>> Update

function _Activation() {
  const data = _interopRequireDefault(require("./Activation"));

  _Activation = function () {
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
let activation = null;

function activate(state) {
  if (!(activation == null)) {
    throw new Error("Invariant violation: \"activation == null\"");
  }

  activation = new (_Activation().default)(state);
}

function deactivate() {
  if (!activation) {
    throw new Error("Invariant violation: \"activation\"");
  }

  activation.dispose();
  activation = null;
}

<<<<<<< HEAD
function consumeOutputService(api) {
=======
function consumeConsole(consoleService) {
>>>>>>> Update
  if (!activation) {
    throw new Error("Invariant violation: \"activation\"");
  }

<<<<<<< HEAD
  activation.consumeOutputService(api);
=======
  activation.consumeConsole(consoleService);
>>>>>>> Update
}