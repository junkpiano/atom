/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 *
 * @noflow
 * @format
 */
'use strict';

/* eslint nuclide-internal/no-commonjs: 0 */

const path = require('path');
const p = nuclidePath => path.resolve(__dirname, '..', nuclidePath);

module.exports = {
  displayName: 'e2e',
  reporters: require('./reporters.config'),
  rootDir: p(''),
  roots: [p('')],
  runner: '@jest-runner/nuclide-e2e',
  setupFiles: [p('jest/e2e/setup.js')],
  setupTestFrameworkScriptFile: p('jest/e2e/setupTestFrameworkScriptFile.js'),
  testMatch: ['**/__e2e_tests__/**/*.js?(x)'],
  testPathIgnorePatterns: ['/node_modules/'],
};
