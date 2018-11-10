"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTasks = getTasks;
exports.runTask = runTask;

function _BuckTaskRunner() {
  const data = require("../../nuclide-buck/lib/BuckTaskRunner");

  _BuckTaskRunner = function () {
    return data;
  };

  return data;
}

function _types() {
  const data = require("./types");

  _types = function () {
    return data;
  };

  return data;
}

function _nuclideUri() {
  const data = _interopRequireDefault(require("../../../modules/nuclide-commons/nuclideUri"));

  _nuclideUri = function () {
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
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 *
 *  strict-local
 * @format
 */
// eslint-disable-next-line nuclide-internal/no-cross-atom-imports
<<<<<<< HEAD
function getTasks(buckRoot, ruleType, device, debuggerAvailable) {
  // $FlowIgnore typecast
  const iosDeployable = device;
  const tasks = new Set(['build']);

  if (iosDeployable.buildOnly !== true) {
=======
function getTasks(buckRoot, ruleType, buildOnly, debuggerAvailable) {
  const tasks = new Set(['build']);

  if (!buildOnly) {
>>>>>>> Update
    if (_types().RUNNABLE_RULE_TYPES.has(ruleType)) {
      tasks.add('run');
    }

    if (!_nuclideUri().default.isRemote(buckRoot)) {
      tasks.add('test');
    }

    if (debuggerAvailable) {
<<<<<<< HEAD
      tasks.add('debug');
=======
      tasks.add('build-launch-debug');
>>>>>>> Update
    }
  }

  return tasks;
}

function runTask(builder, taskType, ruleType, buildTarget, settings, device, buckRoot, debuggerCallback) {
<<<<<<< HEAD
  // $FlowIgnore typecast
  const iosDeployable = device;
  const {
    arch,
    udid,
    type
  } = iosDeployable;
  const iosPlatform = type === 'simulator' ? 'iphonesimulator' : 'iphoneos';
=======
  const {
    udid,
    type
  } = device;
  let {
    arch
  } = device;
  const iosPlatform = type === 'simulator' ? 'iphonesimulator' : 'iphoneos'; // iPhone XS returns this as architecture, but we still want to build for arm64

  if (arch.startsWith('arm64e')) {
    arch = 'arm64';
  }

>>>>>>> Update
  const flavor = `${iosPlatform}-${arch}`;
  const newTarget = Object.assign({}, buildTarget, {
    flavors: buildTarget.flavors.concat([flavor])
  });

  if (_nuclideUri().default.isRemote(buckRoot)) {
    let runRemoteTask;

    try {
      // $FlowFB
      const remoteWorkflow = require("./fb-RemoteWorkflow");

      runRemoteTask = () => {
<<<<<<< HEAD
        return remoteWorkflow.runRemoteTask(buckRoot, builder, taskType, ruleType, buildTarget, settings, iosDeployable, flavor);
=======
        return remoteWorkflow.runRemoteTask(buckRoot, builder, taskType, ruleType, buildTarget, settings, device, flavor);
>>>>>>> Update
      };
    } catch (_) {
      runRemoteTask = () => {
        throw new Error('Remote workflow currently unsupported for this target.');
      };
    }

    return runRemoteTask();
  } else {
    const subcommand = _getLocalSubcommand(taskType, ruleType);

    if (subcommand === 'install' || subcommand === 'test') {
<<<<<<< HEAD
      startLogger(iosDeployable);
    }

    const debug = taskType === 'debug';
=======
      startLogger(device);
    }

    const debug = taskType === 'build-launch-debug';
>>>>>>> Update
    return builder.runSubcommand(buckRoot, subcommand, newTarget, settings, debug, udid, debug ? debuggerCallback : null);
  }
}

function _getLocalSubcommand(taskType, ruleType) {
  if (taskType === 'run' || (0, _BuckTaskRunner().isDebugTask)(taskType)) {
    switch (ruleType) {
      case 'apple_bundle':
        return 'install';

      case 'apple_test':
        return 'test';

      default:
        throw new Error('Unsupported rule type');
    }
  }

  return (0, _BuckTaskRunner().getBuckSubcommandForTaskType)(taskType);
}

<<<<<<< HEAD
function startLogger(iosDeployable) {
  return _RxMin.Observable.create(observer => {
    if (iosDeployable.type === 'simulator') {
=======
function startLogger(device) {
  return _rxjsCompatUmdMin.Observable.create(observer => {
    if (device.type === 'simulator') {
>>>>>>> Update
      atom.commands.dispatch(atom.views.getView(atom.workspace), 'nuclide-ios-simulator-logs:start');
    }

    observer.complete();
  });
}