"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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
 */
class MockHgRepositorySubscriptions {
  observeFilesDidChange() {
<<<<<<< HEAD
    return new _RxMin.Subject().publish();
  }

  observeHgIgnoreFileDidChange() {
    return new _RxMin.Subject().publish();
  }

  observeHgRepoStateDidChange() {
    return new _RxMin.Subject().publish();
  }

  observeHgCommitsDidChange() {
    return new _RxMin.Subject().publish();
  }

  observeHgConflictStateDidChange() {
    return new _RxMin.Subject().publish();
  }

  observeActiveBookmarkDidChange() {
    return new _RxMin.Subject().publish();
  }

  observeBookmarksDidChange() {
    return new _RxMin.Subject().publish();
=======
    return new _rxjsCompatUmdMin.Subject().publish();
  }

  observeHgIgnoreFileDidChange() {
    return new _rxjsCompatUmdMin.Subject().publish();
  }

  observeHgRepoStateDidChange() {
    return new _rxjsCompatUmdMin.Subject().publish();
  }

  observeHgCommitsDidChange() {
    return new _rxjsCompatUmdMin.Subject().publish();
  }

  observeHgConflictStateDidChange() {
    return new _rxjsCompatUmdMin.Subject().publish();
  }

  observeActiveBookmarkDidChange() {
    return new _rxjsCompatUmdMin.Subject().publish();
  }

  observeBookmarksDidChange() {
    return new _rxjsCompatUmdMin.Subject().publish();
>>>>>>> Update
  }

} // This class is meant to be stubbed out.


class MockHgService {
  createRepositorySubscriptions() {
    return Promise.resolve(new MockHgRepositorySubscriptions());
  }

  fetchStatuses(filePaths, options) {
<<<<<<< HEAD
    return new _RxMin.Subject().publish();
=======
    return new _rxjsCompatUmdMin.Subject().publish();
>>>>>>> Update
  }

  deleteBookmark(name) {
    return Promise.resolve();
  }

  renameBookmark(name, nextName) {
    return Promise.resolve();
  }

  fetchDiffInfo(filePaths) {
    return Promise.resolve(null);
  }

  fetchActiveBookmark() {
    return Promise.resolve('');
  }

  fetchBookmarks() {
    return Promise.resolve([]);
  }

  dispose() {
    return Promise.resolve();
  }

  getHeadId() {
<<<<<<< HEAD
    return new _RxMin.Observable();
=======
    return new _rxjsCompatUmdMin.Observable();
>>>>>>> Update
  }

  getFullHashForRevision() {
    return Promise.resolve(null);
  }

  fetchFileContentAtRevision(filePath, revision) {
<<<<<<< HEAD
    return new _RxMin.Subject().publish();
=======
    return new _rxjsCompatUmdMin.Subject().publish();
>>>>>>> Update
  }

}

exports.default = MockHgService;