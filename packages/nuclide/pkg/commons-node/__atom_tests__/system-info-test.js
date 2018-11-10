"use strict";

function _systemInfo() {
<<<<<<< HEAD
  const data = require("../system-info");
=======
  const data = require("../../../modules/nuclide-commons/system-info");
>>>>>>> Update

  _systemInfo = function () {
    return data;
  };

  return data;
}

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 *
 * @emails oncall+nuclide
 *  strict-local
 * @format
 */
test('isRunningInTest', () => {
  expect((0, _systemInfo().isRunningInTest)()).toBe(true);
});