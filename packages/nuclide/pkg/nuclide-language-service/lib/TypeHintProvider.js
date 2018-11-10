"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypeHintProvider = void 0;

function _nuclideRemoteConnection() {
  const data = require("../../nuclide-remote-connection");

  _nuclideRemoteConnection = function () {
    return data;
  };

  return data;
}

function _nuclideOpenFiles() {
  const data = require("../../nuclide-open-files");

  _nuclideOpenFiles = function () {
    return data;
  };

  return data;
}

function _nuclideAnalytics() {
<<<<<<< HEAD
  const data = require("../../nuclide-analytics");
=======
  const data = require("../../../modules/nuclide-analytics");
>>>>>>> Update

  _nuclideAnalytics = function () {
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
 *  strict-local
 * @format
 */
class TypeHintProvider {
<<<<<<< HEAD
  constructor(name, selector, priority, analyticsEventName, connectionToLanguageService) {
    this.providerName = name;
    this.selector = selector;
    this.inclusionPriority = priority;
=======
  constructor(name, grammarScopes, priority, analyticsEventName, connectionToLanguageService) {
    this.providerName = name;
    this.grammarScopes = grammarScopes;
    this.priority = priority;
>>>>>>> Update
    this._analyticsEventName = analyticsEventName;
    this._connectionToLanguageService = connectionToLanguageService;
  }

<<<<<<< HEAD
  static register(name, selector, config, connectionToLanguageService) {
    return atom.packages.serviceHub.provide('nuclide-type-hint.provider', config.version, new TypeHintProvider(name, selector, config.priority, config.analyticsEventName, connectionToLanguageService));
=======
  static register(name, grammarScopes, config, connectionToLanguageService) {
    return atom.packages.serviceHub.provide('nuclide-type-hint.provider', config.version, new TypeHintProvider(name, grammarScopes, config.priority, config.analyticsEventName, connectionToLanguageService));
>>>>>>> Update
  }

  async typeHint(editor, position) {
    return (0, _nuclideAnalytics().trackTiming)(this._analyticsEventName, async () => {
      const fileVersion = await (0, _nuclideOpenFiles().getFileVersionOfEditor)(editor);

      const languageService = this._connectionToLanguageService.getForUri(editor.getPath());

      if (languageService == null || fileVersion == null) {
        return null;
      }

      return (await languageService).typeHint(fileVersion, position);
    });
  }

}

exports.TypeHintProvider = TypeHintProvider;