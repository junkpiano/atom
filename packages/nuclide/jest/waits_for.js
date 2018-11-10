"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
<<<<<<< HEAD
exports.default = void 0;
=======
exports.waitsForAsync = exports.default = void 0;
>>>>>>> Update

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 *
<<<<<<< HEAD
 *  strict
 * @format
 */

/*
 * Async implementation of Jasmine's waitsFor()
 */
var waitsFor = async function waitsFor(fn, message, timeout = 4500) {
  const error = new Error(message != null ? message : 'Expected the function to start returning "true" but it never did.');
  const startTime = Date.now(); // eslint-disable-next-line no-await-in-loop

  while (!Boolean((await fn()))) {
=======
 * 
 * @format
 */
// remove references to this file from stack trace, so we can get
// a nice code frame in test failures that looks like this:
//       60 |
//       61 | test('stack trace points to the callsite, not the implementation', async () => {
//     > 62 |   const fail = () => waitsFor(() => false);
//
// Rather than everything pointing to this file.
const removeImplementationFromStackTrace = e => {
  const regexp = new RegExp(`\\s+at waitsFor.*${__filename}.*\\n`);
  e.stack = e.stack.replace(regexp, '\n');
};
/*
 * Async implementation of Jasmine's waitsFor()
 */


const waitsFor = async (fn, message, timeout = global[Symbol.for('WAITS_FOR_TIMEOUT')] || 4500) => {
  const errorMessage = (message != null ? typeof message === 'function' ? message() : message : 'Expected the function to start returning "true" but it never did.') + ` Timeout = ${timeout}`; // Error must be created right away, so we keep the stack trace.
  // (we would lose it if we threw it from a promise/async loop)

  const error = new Error(errorMessage);
  removeImplementationFromStackTrace(error);
  const startTime = Date.now();
  let returnValue; // eslint-disable-next-line no-await-in-loop

  while (!Boolean(returnValue = await fn())) {
>>>>>>> Update
    if (Date.now() - startTime > timeout) {
      throw error;
    } // eslint-disable-next-line no-await-in-loop


    await new Promise(resolve => setTimeout(resolve, 40));
  }
<<<<<<< HEAD
};

exports.default = waitsFor;
=======

  if (returnValue == null) {
    throw new Error('value must be present');
  }

  return returnValue;
};

var _default = waitsFor; // Same function but flow compatible with returning a promise
// from the passed fn

exports.default = _default;

const waitsForAsync = async (fn, message, timeout) => {
  const result = await waitsFor(fn, message, timeout);
  return result;
};

exports.waitsForAsync = waitsForAsync;
>>>>>>> Update
