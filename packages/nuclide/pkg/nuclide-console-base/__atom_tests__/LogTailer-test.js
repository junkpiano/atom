"use strict";

function _LogTailer() {
  const data = require("../lib/LogTailer");

  _LogTailer = function () {
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
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 *
 * 
 * @format
 * @emails oncall+nuclide
 */
beforeEach(() => {
  jest.restoreAllMocks();
});
describe('LogTailer', () => {
  it('invokes the running callback when there\'s no "starting" status', () => {
    const logTailer = new (_LogTailer().LogTailer)({
      name: 'test',
<<<<<<< HEAD
      messages: _RxMin.Observable.never(),
=======
      messages: _rxjsCompatUmdMin.Observable.never(),
>>>>>>> Update
      trackingEvents: {
        start: 'logtailer-test-start',
        stop: 'logtailer-test-stop',
        restart: 'logtailer-test-restart'
      }
    });
    const handleRunning = jest.fn();
    logTailer.start({
      onRunning: handleRunning
    });
    expect(handleRunning).toHaveBeenCalled();
  });
  it('invokes the running callback when there\'s a "starting" status', () => {
<<<<<<< HEAD
    const ready = new _RxMin.Subject();
    const logTailer = new (_LogTailer().LogTailer)({
      name: 'test',
      messages: _RxMin.Observable.never(),
=======
    const ready = new _rxjsCompatUmdMin.Subject();
    const logTailer = new (_LogTailer().LogTailer)({
      name: 'test',
      messages: _rxjsCompatUmdMin.Observable.never(),
>>>>>>> Update
      ready,
      trackingEvents: {
        start: 'logtailer-test-start',
        stop: 'logtailer-test-stop',
        restart: 'logtailer-test-restart'
      }
    });
    const handleRunning = jest.fn();
    logTailer.start({
      onRunning: handleRunning
    });
    expect(handleRunning).not.toHaveBeenCalled();
    ready.next();
    expect(handleRunning).toHaveBeenCalled();
  });
  it("doesn't show an error notification when every start call has a running callback", () => {
    jest.spyOn(atom.notifications, 'addError').mockImplementation(() => {});
<<<<<<< HEAD
    const ready = new _RxMin.Subject();
    const messages = new _RxMin.Subject();
=======
    const ready = new _rxjsCompatUmdMin.Subject();
    const messages = new _rxjsCompatUmdMin.Subject();
>>>>>>> Update
    const err = new Error('Uh oh');
    const logTailer = new (_LogTailer().LogTailer)({
      name: 'test',
      messages,
      ready,
      trackingEvents: {
        start: 'logtailer-test-start',
        stop: 'logtailer-test-stop',
        restart: 'logtailer-test-restart'
      }
    });
    const handleRunning = jest.fn();
    const handleRunning2 = jest.fn();
    logTailer.start({
      onRunning: handleRunning
    });
    logTailer.start({
      onRunning: handleRunning2
    });
    messages.error(err);
    expect(handleRunning).toHaveBeenCalledWith(err);
    expect(handleRunning2).toHaveBeenCalledWith(err);
    expect(atom.notifications.addError).not.toHaveBeenCalled();
  });
  it("shows an error notification when a running callback isn't registered", () => {
    jest.spyOn(atom.notifications, 'addError').mockImplementation(() => {});
<<<<<<< HEAD
    const ready = new _RxMin.Subject();
    const messages = new _RxMin.Subject();
=======
    const ready = new _rxjsCompatUmdMin.Subject();
    const messages = new _rxjsCompatUmdMin.Subject();
>>>>>>> Update
    const err = new Error('Uh oh');
    const logTailer = new (_LogTailer().LogTailer)({
      name: 'test',
      messages,
      ready,
      trackingEvents: {
        start: 'logtailer-test-start',
        stop: 'logtailer-test-stop',
        restart: 'logtailer-test-restart'
      }
    });
    const handleRunning = jest.fn();
    logTailer.start({
      onRunning: handleRunning
    });
    logTailer.start();
    messages.error(err);
    expect(handleRunning).toHaveBeenCalledWith(err);
    expect(atom.notifications.addError).toHaveBeenCalled();
  });
  it('invokes the running callback with a cancellation error when stopped before ready', () => {
    const logTailer = new (_LogTailer().LogTailer)({
      name: 'test',
<<<<<<< HEAD
      messages: _RxMin.Observable.never(),
      ready: _RxMin.Observable.never(),
=======
      messages: _rxjsCompatUmdMin.Observable.never(),
      ready: _rxjsCompatUmdMin.Observable.never(),
>>>>>>> Update
      trackingEvents: {
        start: 'logtailer-test-start',
        stop: 'logtailer-test-stop',
        restart: 'logtailer-test-restart'
      }
    });
    const handleRunning = jest.fn();
    logTailer.start({
      onRunning: handleRunning
    });
    logTailer.stop();
    expect(handleRunning).toHaveBeenCalled();
    const err = handleRunning.mock.calls[0][0];
    expect(err.name).toBe('ProcessCancelledError');
  });
  it('invokes the running callback with a cancellation error when the source completes before ever' + ' becoming ready', () => {
<<<<<<< HEAD
    const messages = new _RxMin.Subject();
    const logTailer = new (_LogTailer().LogTailer)({
      name: 'test',
      messages,
      ready: _RxMin.Observable.never(),
=======
    const messages = new _rxjsCompatUmdMin.Subject();
    const logTailer = new (_LogTailer().LogTailer)({
      name: 'test',
      messages,
      ready: _rxjsCompatUmdMin.Observable.never(),
>>>>>>> Update
      trackingEvents: {
        start: 'logtailer-test-start',
        stop: 'logtailer-test-stop',
        restart: 'logtailer-test-restart'
      }
    });
    const handleRunning = jest.fn();
    logTailer.start({
      onRunning: handleRunning
    });
    messages.complete();
    expect(handleRunning).toHaveBeenCalled();
    const err = handleRunning.mock.calls[0][0];
    expect(err.name).toBe('ProcessCancelledError');
  });
  it("invokes the running callback immediately if it's already running", () => {
<<<<<<< HEAD
    const ready = new _RxMin.Subject();
    const logTailer = new (_LogTailer().LogTailer)({
      name: 'test',
      messages: _RxMin.Observable.never(),
=======
    const ready = new _rxjsCompatUmdMin.Subject();
    const logTailer = new (_LogTailer().LogTailer)({
      name: 'test',
      messages: _rxjsCompatUmdMin.Observable.never(),
>>>>>>> Update
      ready,
      trackingEvents: {
        start: 'logtailer-test-start',
        stop: 'logtailer-test-stop',
        restart: 'logtailer-test-restart'
      }
    });
    const handleRunning = jest.fn();
    logTailer.start();
    ready.next();
    logTailer.start({
      onRunning: handleRunning
    });
    expect(handleRunning).toHaveBeenCalled();
  });
  it("shows an error notification if there's an error after it starts running", () => {
    jest.spyOn(atom.notifications, 'addError').mockImplementation(() => {});
<<<<<<< HEAD
    const ready = new _RxMin.Subject();
    const messages = new _RxMin.Subject();
=======
    const ready = new _rxjsCompatUmdMin.Subject();
    const messages = new _rxjsCompatUmdMin.Subject();
>>>>>>> Update
    const logTailer = new (_LogTailer().LogTailer)({
      name: 'test',
      messages,
      ready,
      trackingEvents: {
        start: 'logtailer-test-start',
        stop: 'logtailer-test-stop',
        restart: 'logtailer-test-restart'
      }
    });
    const handleRunning = jest.fn();
    logTailer.start({
      onRunning: handleRunning
    });
    logTailer.start();
    ready.next();
    messages.error(new Error('Uh oh'));
    expect(handleRunning).toHaveBeenCalledWith();
    expect(atom.notifications.addError).toHaveBeenCalled();
  });
  it('uses the error handler', () => {
    jest.spyOn(atom.notifications, 'addError').mockImplementation(() => {});
    const handleError = jest.fn();
<<<<<<< HEAD
    const messages = new _RxMin.Subject();
=======
    const messages = new _rxjsCompatUmdMin.Subject();
>>>>>>> Update
    const logTailer = new (_LogTailer().LogTailer)({
      name: 'test',
      messages,
      handleError,
      trackingEvents: {
        start: 'logtailer-test-start',
        stop: 'logtailer-test-stop',
        restart: 'logtailer-test-restart'
      }
    });
    logTailer.start();
    messages.error(new Error('Uh oh'));
    expect(handleError).toHaveBeenCalled();
    expect(atom.notifications.addError).not.toHaveBeenCalled();
  });
  it('uses the default error handling when the error is re-thrown by the handler', () => {
    jest.spyOn(atom.notifications, 'addError').mockImplementation(() => {});
    const handleError = jest.fn().mockImplementation(err => {
      throw err;
    });
<<<<<<< HEAD
    const messages = new _RxMin.Subject();
=======
    const messages = new _rxjsCompatUmdMin.Subject();
>>>>>>> Update
    const logTailer = new (_LogTailer().LogTailer)({
      name: 'test',
      messages,
      handleError,
      trackingEvents: {
        start: 'logtailer-test-start',
        stop: 'logtailer-test-stop',
        restart: 'logtailer-test-restart'
      }
    });
    logTailer.start();
    messages.error(new Error('Uh oh'));
    expect(handleError).toHaveBeenCalled();
    expect(atom.notifications.addError).toHaveBeenCalled();
  });
  it("doesn't use the default notification when the error handler throws a new error", () => {
    jest.spyOn(atom.notifications, 'addError').mockImplementation(() => {});
    const handleError = jest.fn().mockImplementation(() => {
      throw new Error('Unexpected');
    });
<<<<<<< HEAD
    const messages = new _RxMin.Subject();
=======
    const messages = new _rxjsCompatUmdMin.Subject();
>>>>>>> Update
    const logTailer = new (_LogTailer().LogTailer)({
      name: 'test',
      messages,
      handleError,
      trackingEvents: {
        start: 'logtailer-test-start',
        stop: 'logtailer-test-stop',
        restart: 'logtailer-test-restart'
      }
    });
    logTailer.start();
    messages.error(new Error('Uh oh'));
    expect(handleError).toHaveBeenCalled();
    expect(atom.notifications.addError).not.toHaveBeenCalled();
  });
});