"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCompilationDatabaseHandler = getCompilationDatabaseHandler;

<<<<<<< HEAD
=======
var _rxjsCompatUmdMin = require("rxjs-compat/bundles/rxjs-compat.umd.min.js");

>>>>>>> Update
function _SimpleCache() {
  const data = require("../../../modules/nuclide-commons/SimpleCache");

  _SimpleCache = function () {
    return data;
  };

  return data;
}

function ClangService() {
  const data = _interopRequireWildcard(require("../../nuclide-clang-rpc"));

  ClangService = function () {
    return data;
  };

  return data;
}

function BuckService() {
  const data = _interopRequireWildcard(require("./BuckServiceImpl"));

  BuckService = function () {
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

function _nuclideUri() {
  const data = _interopRequireDefault(require("../../../modules/nuclide-commons/nuclideUri"));

  _nuclideUri = function () {
    return data;
  };

  return data;
}

function _utils() {
  const data = require("../../nuclide-clang-rpc/lib/utils");

  _utils = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
const logger = (0, _log4js().getLogger)('nuclide-buck');
const BUCK_TIMEOUT = 10 * 60 * 1000;
const TARGET_KIND_REGEX = ['apple_binary', 'apple_library', 'apple_test', 'cxx_binary', 'cxx_library', 'cxx_test'].join('|');
/**
 * Facebook puts all headers in a <target>:__default_headers__ build target by default.
 * This target will never produce compilation flags, so make sure to ignore it.
 */

const DEFAULT_HEADERS_TARGET = '__default_headers__';

class BuckClangCompilationDatabaseHandler {
  // Ensure that we can clear targetCache for a given file.
  constructor(params) {
<<<<<<< HEAD
    this._targetCache = new (_SimpleCache().SimpleCache)();
=======
    this._targetCache = new (_SimpleCache().SimpleCache)({
      keyFactory: JSON.stringify
    });
>>>>>>> Update
    this._sourceCache = new (_SimpleCache().SimpleCache)();
    this._sourceToTargetKey = new Map();
    this._params = params;
  }

  resetForSource(src) {
    this._sourceCache.delete(src);

    const targetKey = this._sourceToTargetKey.get(src);

    if (targetKey != null) {
      this._targetCache.delete(targetKey);

      this._sourceToTargetKey.delete(src);
    }
  }

  reset() {
    this._sourceCache.clear();

    this._targetCache.clear();

    this._sourceToTargetKey.clear();
  }

  getCompilationDatabase(file) {
<<<<<<< HEAD
    return this._sourceCache.getOrCreate(file, async () => {
      if ((0, _utils().isHeaderFile)(file)) {
        const source = await ClangService().getRelatedSourceOrHeader(file);

        if (source != null) {
          logger.info(`${file} is a header, thus using ${source} for getting the compilation flags.`);
          return this.getCompilationDatabase(source);
        } else {
          logger.error(`Couldn't find a corresponding source file for ${file}, thus there are no compilation flags available.`);
          return {
            file: null,
            flagsFile: await (0, _utils().guessBuildFile)(file),
            libclangPath: null,
            warnings: [`I could not find a corresponding source file for ${file}.`]
          };
        }
      } else {
        return this._getCompilationDatabase(file);
=======
    return this._sourceCache.getOrCreate(file, () => {
      if ((0, _utils().isHeaderFile)(file)) {
        return _rxjsCompatUmdMin.Observable.fromPromise(ClangService().getRelatedSourceOrHeader(file)).switchMap(source => {
          if (source != null) {
            logger.info(`${file} is a header, thus using ${source} for getting the compilation flags.`);
            return this.getCompilationDatabase(source);
          } else {
            logger.error(`Couldn't find a corresponding source file for ${file}, thus there are no compilation flags available.`);
            return _rxjsCompatUmdMin.Observable.fromPromise((0, _utils().guessBuildFile)(file)).map(flagsFile => ({
              file: null,
              flagsFile,
              libclangPath: null,
              warnings: [`I could not find a corresponding source file for ${file}.`]
            })).publishLast().refCount();
          }
        });
      } else {
        return this._getCompilationDatabase(file).publishLast().refCount();
>>>>>>> Update
      }
    });
  }

<<<<<<< HEAD
  async _getCompilationDatabase(file) {
    const buckRoot = await BuckService().getRootForPath(file);
    return this._loadCompilationDatabaseFromBuck(file, buckRoot).catch(err => {
      logger.error('Error getting flags from Buck for file ', file, err);
      throw err;
    }).then(db => {
      if (db != null) {
        this._cacheFilesToCompilationDB(db);
      }

      return db;
    });
  }

  async _loadCompilationDatabaseFromBuck(src, buckRoot) {
    if (buckRoot == null) {
      return null;
    }

    let queryTarget = null;
    const extraArgs = this._params.args.length === 0 ? await BuckService()._getPreferredArgsForRepo(buckRoot) : this._params.args;

    try {
      const owners = (await BuckService().getOwners(buckRoot, src, extraArgs, TARGET_KIND_REGEX, false)).filter(x => x.indexOf(DEFAULT_HEADERS_TARGET) === -1); // Deprioritize Android-related targets because they build with gcc and
      // require gcc intrinsics that cause libclang to throw bad diagnostics.

      owners.sort((a, b) => {
        const aAndroid = a.endsWith('Android');
        const bAndroid = b.endsWith('Android');

        if (aAndroid && !bAndroid) {
          return 1;
        } else if (!aAndroid && bAndroid) {
          return -1;
        } else {
          return 0;
        }
      });
      queryTarget = owners[0];
    } catch (err) {
      logger.error('Failed getting the target from buck', err);
    }

    if (queryTarget == null) {
      // Even if we can't get flags, return a flagsFile to watch
      const buildFile = await (0, _utils().guessBuildFile)(src);

      if (buildFile != null) {
        return {
          flagsFile: buildFile,
          file: null,
          libclangPath: null,
          warnings: [`I could not find owner target of ${src}`, `Is there an error in ${buildFile}?`]
        };
      }

      return null;
    }

    const target = queryTarget;

    this._sourceToTargetKey.set(src, this._targetCache.keyForArgs([buckRoot, target, extraArgs]));

    return this._targetCache.getOrCreate([buckRoot, target, extraArgs], () => this._loadCompilationDatabaseForBuckTarget(buckRoot, target, extraArgs));
  }

  async _loadCompilationDatabaseForBuckTarget(buckProjectRoot, target, extraArgs) {
    const allFlavors = ['compilation-database', ...this._params.flavorsForTarget];

    if (this._params.useDefaultPlatform) {
      const platform = await BuckService().getDefaultPlatform(buckProjectRoot, target, extraArgs, false);

      if (platform != null) {
        allFlavors.push(platform);
      }
    }

    const buildTarget = target + '#' + allFlavors.join(',');
    const buildReport = await BuckService().build(buckProjectRoot, [// Small builds, like those used for a compilation database, can degrade overall
    // `buck build` performance by unnecessarily invalidating the Action Graph cache.
    // See https://buckbuild.com/concept/buckconfig.html#client.skip-action-graph-cache
    // for details on the importance of using skip-action-graph-cache=true.
    '--config', 'client.skip-action-graph-cache=true', buildTarget, ...extraArgs], {
      commandOptions: {
        timeout: BUCK_TIMEOUT
      }
    });

    if (!buildReport.success) {
      const error = new Error(`Failed to build ${buildTarget}`);
      logger.error(error);
      throw error;
    }

    const firstResult = Object.keys(buildReport.results)[0];
    let pathToCompilationDatabase = buildReport.results[firstResult].output;
    pathToCompilationDatabase = _nuclideUri().default.join(buckProjectRoot, pathToCompilationDatabase);
    const buildFile = await BuckService().getBuildFile(buckProjectRoot, target, extraArgs);
    const compilationDB = {
      file: pathToCompilationDatabase,
      flagsFile: buildFile,
      libclangPath: null,
      warnings: []
    };
    return this._processCompilationDb(compilationDB, buckProjectRoot, extraArgs);
=======
  _getCompilationDatabase(file) {
    return _rxjsCompatUmdMin.Observable.fromPromise(BuckService().getRootForPath(file)).switchMap(buckRoot => this._loadCompilationDatabaseFromBuck(file, buckRoot).catch(err => {
      logger.error('Error getting flags from Buck for file ', file, err);
      throw err;
    }).do(db => {
      if (db != null) {
        this._cacheFilesToCompilationDB(db);
      }
    }));
  }

  _loadCompilationDatabaseFromBuck(src, buckRoot) {
    if (buckRoot == null) {
      return _rxjsCompatUmdMin.Observable.of(null);
    }

    return (this._params.args.length === 0 ? _rxjsCompatUmdMin.Observable.fromPromise(BuckService()._getPreferredArgsForRepo(buckRoot)) : _rxjsCompatUmdMin.Observable.of(this._params.args)).switchMap(extraArgs => {
      return _rxjsCompatUmdMin.Observable.fromPromise(BuckService().getOwners(buckRoot, src, extraArgs, TARGET_KIND_REGEX, false)).map(owners => owners.filter(x => x.indexOf(DEFAULT_HEADERS_TARGET) === -1)).map(owners => {
        // Deprioritize Android-related targets because they build with gcc and
        // require gcc intrinsics that cause libclang to throw bad diagnostics.
        owners.sort((a, b) => {
          const aAndroid = a.endsWith('Android');
          const bAndroid = b.endsWith('Android');

          if (aAndroid && !bAndroid) {
            return 1;
          } else if (!aAndroid && bAndroid) {
            return -1;
          } else {
            return 0;
          }
        });
        return owners[0];
      }).switchMap(target => {
        if (target == null) {
          // Even if we can't get flags, return a flagsFile to watch
          return _rxjsCompatUmdMin.Observable.fromPromise((0, _utils().guessBuildFile)(src)).map(flagsFile => flagsFile != null ? {
            file: null,
            flagsFile,
            libclangPath: null,
            warnings: [`I could not find owner target of ${src}`, `Is there an error in ${flagsFile}?`]
          } : null);
        } else {
          this._sourceToTargetKey.set(src, this._targetCache.keyForArgs([buckRoot, target, extraArgs]));

          return this._targetCache.getOrCreate([buckRoot, target, extraArgs], () => this._loadCompilationDatabaseForBuckTarget(buckRoot, target, extraArgs).publishLast().refCount());
        }
      }).catch(err => {
        logger.error('Failed getting the target from buck', err);
        return _rxjsCompatUmdMin.Observable.of(null);
      });
    });
  }

  _loadCompilationDatabaseForBuckTarget(buckProjectRoot, target, extraArgs) {
    const flavors = ['compilation-database', ...this._params.flavorsForTarget];
    return (this._params.useDefaultPlatform ? _rxjsCompatUmdMin.Observable.fromPromise(BuckService().getDefaultPlatform(buckProjectRoot, target, extraArgs, false)).map(platform => flavors.concat([platform])) : _rxjsCompatUmdMin.Observable.of(flavors)).map(allFlavors => target + '#' + allFlavors.join(',')).switchMap(buildTarget => {
      return BuckService().build(buckProjectRoot, [// Small builds, like those used for a compilation database, can degrade overall
      // `buck build` performance by unnecessarily invalidating the Action Graph cache.
      // See https://buckbuild.com/concept/buckconfig.html#client.skip-action-graph-cache
      // for details on the importance of using skip-action-graph-cache=true.
      '--config', 'client.skip-action-graph-cache=true', buildTarget, ...extraArgs], {
        commandOptions: {
          timeout: BUCK_TIMEOUT
        }
      }).switchMap(buildReport => {
        if (!buildReport.success) {
          const error = new Error(`Failed to build ${buildTarget}`);
          logger.error(error);
          throw error;
        }

        const firstResult = Object.keys(buildReport.results)[0];
        let pathToCompilationDatabase = buildReport.results[firstResult].output;
        pathToCompilationDatabase = _nuclideUri().default.join(buckProjectRoot, pathToCompilationDatabase);
        return _rxjsCompatUmdMin.Observable.fromPromise(BuckService().getBuildFile(buckProjectRoot, target, extraArgs)).switchMap(buildFile => _rxjsCompatUmdMin.Observable.fromPromise(this._processCompilationDb({
          file: pathToCompilationDatabase,
          flagsFile: buildFile,
          libclangPath: null,
          target,
          warnings: []
        }, buckProjectRoot, extraArgs)));
      });
    });
>>>>>>> Update
  }

  async _processCompilationDb(db, buckRoot, args) {
    try {
      // $FlowFB
      const {
        createOmCompilationDb
      } = require("./fb/omCompilationDb");

      return await createOmCompilationDb(db, buckRoot, args);
    } catch (e) {}

    return db;
  }

  async _cacheFilesToCompilationDB(db) {
    const {
      file
    } = db;

    if (file == null) {
      return;
    }

    return new Promise((resolve, reject) => {
<<<<<<< HEAD
      ClangService().loadFilesFromCompilationDatabaseAndCacheThem(file, db.flagsFile).refCount().subscribe(path => this._sourceCache.set(path, Promise.resolve(db)), reject, // on error
=======
      // eslint-disable-next-line nuclide-internal/unused-subscription
      ClangService().loadFilesFromCompilationDatabaseAndCacheThem(file, db.flagsFile).refCount().subscribe(path => this._sourceCache.set(path, _rxjsCompatUmdMin.Observable.of(db)), reject, // on error
>>>>>>> Update
      resolve // on complete
      );
    });
  }

}

const compilationDatabaseHandlerCache = new (_SimpleCache().SimpleCache)({
  keyFactory: params => JSON.stringify(params)
});

function getCompilationDatabaseHandler(params) {
  return compilationDatabaseHandlerCache.getOrCreate(params, () => new BuckClangCompilationDatabaseHandler(params));
}