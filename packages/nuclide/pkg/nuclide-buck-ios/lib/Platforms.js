"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSimulatorPlatform = getSimulatorPlatform;
exports.getDevicePlatform = getDevicePlatform;

<<<<<<< HEAD
=======
function _nullthrows() {
  const data = _interopRequireDefault(require("nullthrows"));

  _nullthrows = function () {
    return data;
  };

  return data;
}

>>>>>>> Update
function _Tasks() {
  const data = require("./Tasks");

  _Tasks = function () {
    return data;
  };

  return data;
}

<<<<<<< HEAD
var _RxMin = require("rxjs/bundles/Rx.min.js");
=======
var _rxjsCompatUmdMin = require("rxjs-compat/bundles/rxjs-compat.umd.min.js");
>>>>>>> Update

function fbsimctl() {
  const data = _interopRequireWildcard(require("../../nuclide-fbsimctl"));

  fbsimctl = function () {
    return data;
  };

  return data;
}

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

<<<<<<< HEAD
=======
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

>>>>>>> Update
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
function getSimulatorPlatform(buckRoot, ruleType, debuggerCallback) {
  return fbsimctl().observeIosDevices().filter(expected => !expected.isPending).map(expected => {
    // TODO: Come up with a way to surface the error in UI
    const simulators = expected.getOrDefault([]).filter(device => device.type === 'simulator');
    let deviceGroups;
<<<<<<< HEAD

    if (simulators.length === 0) {
      deviceGroups = BUILD_ONLY_SIMULATOR_GROUPS;
    } else {
      deviceGroups = Array.from(groupByOs(simulators).entries()).map(([os, simsForOs]) => ({
        name: os,
        devices: simsForOs.map(simulator => ({
          identifier: simulator.udid,
          name: simulator.name,
          udid: simulator.udid,
          arch: simulator.arch,
          type: 'simulator'
        }))
      }));
=======
    let devicesForIdentifiers;

    if (simulators.length === 0) {
      // No simulators installed, at least give user a chance to build.
      deviceGroups = [BUILD_ONLY_SIMULATORS.deviceGroup];
      devicesForIdentifiers = BUILD_ONLY_SIMULATORS.devicesForIdentifiers;
    } else {
      deviceGroups = groupByOs(simulators);
      devicesForIdentifiers = new Map(simulators.map(s => [s.udid, s]));
>>>>>>> Update
    }

    return {
      isMobile: true,
      name: 'Simulator',
<<<<<<< HEAD
      tasksForDevice: device => (0, _Tasks().getTasks)(buckRoot, ruleType, device, debuggerCallback != null),
      runTask: (builder, taskType, target, settings, device) => (0, _Tasks().runTask)(builder, taskType, ruleType, target, settings, device, buckRoot, debuggerCallback),
=======
      tasksForDevice: device => (0, _Tasks().getTasks)(buckRoot, ruleType, BUILD_ONLY_SIMULATORS.devicesForIdentifiers.has((0, _nullthrows().default)(device).identifier), debuggerCallback != null),
      runTask: (builder, taskType, target, settings, device) => (0, _Tasks().runTask)(builder, taskType, ruleType, target, settings, (0, _nullthrows().default)(devicesForIdentifiers.get((0, _nullthrows().default)(device).identifier)), buckRoot, debuggerCallback),
>>>>>>> Update
      deviceGroups
    };
  });
}

function getDevicePlatform(buckRoot, ruleType, debuggerCallback) {
  return fbsimctl().observeIosDevices().filter(expected => !expected.isPending).map(expected => {
    let deviceGroups = [];
    const devices = expected.getOrDefault([]);
    const physicalDevices = devices.filter(device => device.type === 'physical_device');
<<<<<<< HEAD

    if (physicalDevices.length > 0) {
      deviceGroups = Array.from(groupByOs(physicalDevices).entries()).map(([os, devicesForOs]) => ({
        name: os,
        devices: devicesForOs.map(device => ({
          identifier: device.udid,
          name: device.name,
          udid: device.udid,
          arch: device.arch,
          type: 'device'
        }))
      }));
    }

    deviceGroups.push(BUILD_ONLY_DEVICES_GROUP);
    return {
      isMobile: true,
      name: 'Device',
      tasksForDevice: device => (0, _Tasks().getTasks)(buckRoot, ruleType, device, debuggerCallback != null),
      runTask: (builder, taskType, target, settings, device) => (0, _Tasks().runTask)(builder, taskType, ruleType, target, settings, device, buckRoot, debuggerCallback),
=======
    const devicesForIdentifiers = new Map();

    if (physicalDevices.length > 0) {
      physicalDevices.forEach(d => {
        devicesForIdentifiers.set(d.udid, d);
      });
      deviceGroups = groupByOs(physicalDevices);
    } // Always give user a chance to build for all architectures.


    deviceGroups.push(BUILD_ONLY_DEVICES.deviceGroup);
    BUILD_ONLY_DEVICES.devicesForIdentifiers.forEach(d => {
      devicesForIdentifiers.set(d.udid, d);
    });
    return {
      isMobile: true,
      name: 'Device',
      tasksForDevice: device => (0, _Tasks().getTasks)(buckRoot, ruleType, BUILD_ONLY_DEVICES.devicesForIdentifiers.has((0, _nullthrows().default)(device).identifier), debuggerCallback != null),
      runTask: (builder, taskType, target, settings, device) => {
        return (0, _Tasks().runTask)(builder, taskType, ruleType, target, settings, (0, _nullthrows().default)(devicesForIdentifiers.get((0, _nullthrows().default)(device).identifier)), buckRoot, debuggerCallback);
      },
>>>>>>> Update
      deviceGroups
    };
  });
}

function groupByOs(devices) {
  const devicesByOs = devices.reduce((memo, device) => {
    let devicesForOs = memo.get(device.os);

    if (devicesForOs == null) {
      devicesForOs = [];
      memo.set(device.os, devicesForOs);
    }

<<<<<<< HEAD
    devicesForOs.push(device);
=======
    devicesForOs.push({
      identifier: device.udid,
      name: device.name
    });
>>>>>>> Update
    return memo;
  }, new Map());

  for (const devicesForOs of devicesByOs.values()) {
    devicesForOs.sort((a, b) => {
      return b.name.localeCompare(a.name);
    });
  }

<<<<<<< HEAD
  return devicesByOs;
}

const BUILD_ONLY_SIMULATOR_GROUPS = [{
  name: 'Generic',
  devices: [{
    identifier: 'build-only-x86_64',
    name: '64-bit',
    udid: '',
    arch: 'x86_64',
    type: 'simulator',
    buildOnly: true
  }, {
    identifier: 'build-only-i386',
    name: '32-bit',
    udid: '',
    arch: 'i386',
    type: 'simulator',
    buildOnly: true
  }]
}];
const BUILD_ONLY_DEVICES_GROUP = {
  name: 'Generic',
  devices: [{
    identifier: 'build-only-arm64',
    name: '64-bit',
    udid: '',
    arch: 'arm64',
    type: 'device',
    buildOnly: true
  }, {
    identifier: 'build-only-armv7',
    name: '32-bit',
    udid: '',
    arch: 'armv7',
    type: 'device',
    buildOnly: true
  }]
=======
  return Array.from(devicesByOs.entries()).map(([os, devicesForOs]) => ({
    name: os,
    devices: devicesForOs
  }));
}

const BUILD_ONLY_SIMULATORS = {
  deviceGroup: {
    name: 'Generic',
    devices: [{
      identifier: 'build-only-x86_64',
      name: '64-bit'
    }, {
      identifier: 'build-only-i386',
      name: '32-bit'
    }]
  },
  devicesForIdentifiers: new Map([['build-only-x86_64', {
    name: '64-bit',
    udid: 'build-only-x86_64',
    arch: 'x86_64',
    type: 'simulator',
    os: '',
    state: 'Booted'
  }], ['build-only-i386', {
    name: '32-bit',
    udid: 'build-only-i386',
    arch: 'i386',
    type: 'simulator',
    os: '',
    state: 'Booted'
  }]])
};
const BUILD_ONLY_DEVICES = {
  deviceGroup: {
    name: 'Generic',
    devices: [{
      identifier: 'build-only-arm64',
      name: '64-bit'
    }, {
      identifier: 'build-only-armv7',
      name: '32-bit'
    }]
  },
  devicesForIdentifiers: new Map([['build-only-arm64', {
    name: '64-bit',
    udid: 'build-only-arm64',
    arch: 'arm64',
    type: 'physical_device',
    os: '',
    state: 'Booted'
  }], ['build-only-armv7', {
    name: '32-bit',
    udid: 'build-only-armv7',
    arch: 'armv7',
    type: 'physical_device',
    os: '',
    state: 'Booted'
  }]])
>>>>>>> Update
};