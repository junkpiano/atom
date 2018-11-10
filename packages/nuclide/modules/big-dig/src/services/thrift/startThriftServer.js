"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startThriftServer = startThriftServer;

function _escapeStringRegexp() {
  const data = _interopRequireDefault(require("escape-string-regexp"));

  _escapeStringRegexp = function () {
    return data;
  };

  return data;
}

function _log4js() {
  const data = require("log4js");

  _log4js = function () {
    return data;
  };

  return data;
}

function _analytics() {
  const data = require("../../../../nuclide-commons/analytics");

  _analytics = function () {
    return data;
  };

  return data;
}

<<<<<<< HEAD
=======
function _fsPromise() {
  const data = _interopRequireDefault(require("../../../../nuclide-commons/fsPromise"));

  _fsPromise = function () {
    return data;
  };

  return data;
}

>>>>>>> Update
function _serverPort() {
  const data = require("../../../../nuclide-commons/serverPort");

  _serverPort = function () {
    return data;
  };

  return data;
}

<<<<<<< HEAD
var _RxMin = require("rxjs/bundles/Rx.min.js");
=======
var _rxjsCompatUmdMin = require("rxjs-compat/bundles/rxjs-compat.umd.min.js");
>>>>>>> Update

function _process() {
  const data = require("../../../../nuclide-commons/process");

  _process = function () {
    return data;
  };

  return data;
}

var _net = _interopRequireDefault(require("net"));

<<<<<<< HEAD
=======
function _uuid() {
  const data = _interopRequireDefault(require("uuid"));

  _uuid = function () {
    return data;
  };

  return data;
}

>>>>>>> Update
function _configUtils() {
  const data = require("./config-utils");

  _configUtils = function () {
    return data;
  };

  return data;
}

function _which() {
  const data = _interopRequireDefault(require("../../../../nuclide-commons/which"));

  _which = function () {
    return data;
  };

  return data;
}

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
<<<<<<< HEAD
const logger = (0, _log4js().getLogger)('thrift-service-server');
const cache = new Map();

function startThriftServer(originalConfig) {
  return _RxMin.Observable.defer(() => {
    const configId = (0, _configUtils().genConfigId)(originalConfig);
    let thriftServer = cache.get(configId);

    if (thriftServer == null) {
      thriftServer = _RxMin.Observable.defer(() => validateConfig(originalConfig)).switchMap(validationResult => {
        if (!validationResult.valid) {
          return _RxMin.Observable.throw(new Error(validationResult.error));
        }

        return _RxMin.Observable.defer(() => replacePlaceholders(originalConfig)).switchMap(config => mayKillOldServerProcess(config).map(_ => config)).switchMap(config => _RxMin.Observable.merge(observeServerProcess(config).do(logProcessMessage(configId)).ignoreElements(), observeServerStatus(config.remotePort).do(() => logger.info(`(${config.name}) `, 'Thrift Server is ready')).map(() => config.remotePort)));
      }).finally(() => {
=======
// @fb-only: import {getEnv} from './fb-env';
const IPC_PATH_PLACEHOLDER = '{IPC_PATH}';
const PORT_PLACEHOLDER = '{PORT}';
const SERVICES_PATH_PLACEHOLDER = '{BIG_DIG_SERVICES_PATH}';
const logger = (0, _log4js().getLogger)('thrift-service-server');
const cache = new Map();

function startThriftServer(serverConfig) {
  return _rxjsCompatUmdMin.Observable.defer(() => {
    const configId = (0, _configUtils().genConfigId)(serverConfig);
    let thriftServer = cache.get(configId);

    if (thriftServer == null) {
      const logTag = `${serverConfig.name}-${_uuid().default.v4()}`;
      logger.info('Starting Thrift Server', logTag, serverConfig);
      thriftServer = _rxjsCompatUmdMin.Observable.defer(() => replacePlaceholders(serverConfig)).switchMap(config => mayKillOldServerProcess(config).map(_ => config)).switchMap(config => _rxjsCompatUmdMin.Observable.merge(observeServerProcess(config).do(logProcessMessage(logTag)).ignoreElements(), observeServerStatus(config).do(() => logger.info(logTag, 'Thrift Server is ready', config))).map(_ => getConnectionOptions(config))).finally(() => {
>>>>>>> Update
        cache.delete(configId);
        logger.info('Thrift Server has been closed ', configId);
      }).publishReplay(1).refCount();
      cache.set(configId, thriftServer);
    }

    return thriftServer;
  }).publish();
}

<<<<<<< HEAD
async function replacePlaceholders(config) {
  return replaceEnvironmentPlaceholder((await replaceRemotePortPlaceholder(config)));
}

function replaceEnvironmentPlaceholder(config) {
  const replace = value => value.replace('{BIG_DIG_SERVICES_PATH}', _path.default.join(__dirname, '../../../'));

  return Object.assign({}, config, {
    remoteCommand: replace(config.remoteCommand),
    remoteCommandArgs: config.remoteCommandArgs.map(replace)
  });
}

async function replaceRemotePortPlaceholder(config) {
  if (config.remotePort === 0) {
    const remotePort = await (0, _serverPort().getAvailableServerPort)();
    const remoteCommandArgs = config.remoteCommandArgs.map(arg => arg.replace('{PORT}', String(remotePort)));
    return Object.assign({}, config, {
      remotePort,
      remoteCommandArgs
    });
  }

  return config;
}

function mayKillOldServerProcess(config) {
  return _RxMin.Observable.defer(async () => {
=======
async function replacePlaceholders(serverConfig) {
  const replaceBigDigServicesPath = value => value.replace(SERVICES_PATH_PLACEHOLDER, _path.default.join(__dirname, '../../../'));

  const remoteCommand = replaceBigDigServicesPath(serverConfig.remoteCommand);
  const remoteCommandArgs = serverConfig.remoteCommandArgs.map(replaceBigDigServicesPath);
  const hasValidCommand = (await (0, _which().default)(remoteCommand)) != null;

  if (!hasValidCommand) {
    throw new Error(`Remote command is invalid: ${remoteCommand}`);
  }

  switch (serverConfig.remoteConnection.type) {
    case 'tcp':
      if (serverConfig.remoteConnection.port === 0) {
        const hasPlaceholderForPort = serverConfig.remoteCommandArgs.find(arg => arg.includes(PORT_PLACEHOLDER)) != null;

        if (!hasPlaceholderForPort) {
          throw new Error(`Expected placeholder "${PORT_PLACEHOLDER}" for remote port`);
        }

        const remotePort = await (0, _serverPort().getAvailableServerPort)();
        return Object.assign({}, serverConfig, {
          remoteConnection: {
            type: 'tcp',
            port: remotePort
          },
          remoteCommandArgs: remoteCommandArgs.map(arg => arg.replace(PORT_PLACEHOLDER, String(remotePort)))
        });
      }

      break;

    case 'ipcSocket':
      if (serverConfig.remoteConnection.path.length === 0) {
        const hasPlaceholderForIpcPath = serverConfig.remoteCommandArgs.find(arg => arg.includes(IPC_PATH_PLACEHOLDER)) != null;

        if (!hasPlaceholderForIpcPath) {
          throw new Error(`Expected placeholder "${IPC_PATH_PLACEHOLDER}" for remote IPC socket path`);
        }

        const ipcSocketPath = _path.default.join((await _fsPromise().default.tempdir()), 'socket');

        return Object.assign({}, serverConfig, {
          remoteConnection: {
            type: 'ipcSocket',
            path: ipcSocketPath
          },
          remoteCommandArgs: remoteCommandArgs.map(arg => arg.replace(IPC_PATH_PLACEHOLDER, String(ipcSocketPath)))
        });
      }

      break;

    default:
      serverConfig.remoteConnection.type;
      throw new Error('Invalid remote connection type');
  }

  return Object.assign({}, serverConfig, {
    remoteCommand,
    remoteCommandArgs
  });
}

function mayKillOldServerProcess(config) {
  return _rxjsCompatUmdMin.Observable.defer(async () => {
>>>>>>> Update
    if (!config.killOldThriftServerProcess) {
      return;
    }

    const processes = await (0, _process().psTree)();
    processes.filter(processInfo => processInfo.commandWithArgs.search(`${(0, _escapeStringRegexp().default)(config.remoteCommand)}.*${(0, _escapeStringRegexp().default)(config.remoteCommandArgs.join(' '))}`) > -1).forEach(processInfo => {
      logger.info(`Old ${(0, _configUtils().genConfigId)(config)} (pid ${processInfo.pid}) was killed`);
      (0, _analytics().track)('thrift-service-server:kill-server');
      (0, _process().killPid)(processInfo.pid);
    });
  });
}

function observeServerProcess(config) {
  return (0, _process().observeProcess)(config.remoteCommand, config.remoteCommandArgs, {
    isExitError: () => true,
    detached: false,
    killTreeWhenDone: true,
<<<<<<< HEAD
    env: Object.assign({}, process.env)
=======
    // @fb-only: env: getEnv(),
    env: process.env // @oss-only

>>>>>>> Update
  });
}
/**
 * Streams `true` when thrift server is listening in the given port.
 * If server is not ready, it tries to reconnects.
 */


<<<<<<< HEAD
function observeServerStatus(port) {
  const maxAttempts = 10;
  return _RxMin.Observable.create(observer => {
    let ready = false;

    const client = _net.default.connect({
      port
    }).on('connect', () => {
=======
function observeServerStatus(config) {
  const maxAttempts = 10;
  return _rxjsCompatUmdMin.Observable.create(observer => {
    let ready = false;

    const client = _net.default.connect( // $FlowIgnore
    getConnectionOptions(config)).on('connect', () => {
>>>>>>> Update
      client.destroy();
      ready = true;
      observer.next(ready);
    }).on('error', () => {
      client.destroy();

      if (!ready) {
        observer.error(new Error('Occurred an error when connecting to the thrift server'));
      }
    }).once('close', () => {
      if (!ready) {
        observer.error(new Error('Connection closed but server is not ready'));
      }
    });
  }).retryWhen(throwOrRetry(maxAttempts));
}

function throwOrRetry(maxAttempts) {
  return errorStream => errorStream.switchMap((error, i) => {
    const attempt = i + 1;

    if (attempt > maxAttempts) {
      throw error;
    }

    logger.error(`(${attempt}/${maxAttempts}) Retrying to connect to thrift server after error `, error);
<<<<<<< HEAD
    return _RxMin.Observable.timer(attempt * 1000);
=======
    return _rxjsCompatUmdMin.Observable.timer(attempt * 1000);
>>>>>>> Update
  });
}

function logProcessMessage(name) {
  return message => {
    switch (message.kind) {
      case 'stdout':
        logger.info(`(${name}) `, message.data);
        return;

      case 'stderr':
        if (message.data.includes('[ERROR]')) {
          logger.error(`(${name}) `, message.data);
        } else {
          logger.info(`(${name}) `, message.data);
        }

        return;

      case 'exit':
        logger.info(`(${name}) `, 'Exited with code ', message.exitCode);
        return;
    }
  };
}

<<<<<<< HEAD
async function validateConfig(config) {
  if (config.remotePort === 0) {
    const hasPlaceholderForPort = config.remoteCommandArgs.find(arg => arg.includes('{PORT}')) != null;

    if (!hasPlaceholderForPort) {
      return {
        valid: false,
        error: 'Expected placeholder "{PORT}" for remote port'
      };
    }
  }

  const hasValidCommand = (await (0, _which().default)(replaceEnvironmentPlaceholder(config).remoteCommand)) != null;

  if (!hasValidCommand) {
    return {
      valid: false,
      error: `Remote command not found: ${config.remoteCommand}`
    };
  }

  return {
    valid: true
  };
=======
function getConnectionOptions(config) {
  switch (config.remoteConnection.type) {
    case 'tcp':
      return {
        port: config.remoteConnection.port,
        useIPv4: false
      };

    case 'ipcSocket':
      return {
        path: config.remoteConnection.path
      };

    default:
      config.remoteConnection.type;
      throw new Error('Invalid remote connection type');
  }
>>>>>>> Update
}