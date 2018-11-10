"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
<<<<<<< HEAD
=======
exports.getBoundedThreadedFileMessages = getBoundedThreadedFileMessages;
>>>>>>> Update
exports.getFileMessages = getFileMessages;
exports.getFileMessageUpdates = getFileMessageUpdates;
exports.getUiConfig = exports.getSupportedMessageKinds = exports.getMessages = void 0;

<<<<<<< HEAD
=======
function _minBy2() {
  const data = _interopRequireDefault(require("lodash/minBy"));

  _minBy2 = function () {
    return data;
  };

  return data;
}

>>>>>>> Update
function _reselect() {
  const data = require("reselect");

  _reselect = function () {
    return data;
  };

  return data;
}

<<<<<<< HEAD
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
const MAX_MESSAGE_COUNT = 1000;
=======
function _collection() {
  const data = require("../../../../../nuclide-commons/collection");

  _collection = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MAX_MESSAGE_COUNT_PER_FILE = 1000;
>>>>>>> Update

const getMessagesState = state => state.messages;

const getProviders = state => state.providers;
<<<<<<< HEAD
/**
 * Gets the current diagnostic messages for the file.
 * Prefer to get updates via ::onFileMessagesDidUpdate.
 */


function getFileMessages(state, filePath) {
  const messages = [];

  for (const providerMessages of state.messages.values()) {
    const messagesForFile = providerMessages.get(filePath);

    if (messagesForFile == null) {
      continue;
    }

    messages.push(...messagesForFile);
  }

  return messages;
}

function getFileMessageUpdates(state, filePath) {
  const fileMessages = getFileMessages(state, filePath);
  return {
    filePath,
    // Excessive numbers of items cause performance issues in the gutter, table, and decorations.
    // Truncate the number of items MAX_RESULTS_COUNT.
    messages: fileMessages.slice(0, MAX_MESSAGE_COUNT),
    // Include the total number of messages without truncation
    totalMessages: fileMessages.length
=======

function* getThreadedFileMessages(state, filePath) {
  const providerToMessages = new Map();

  for (const [provider, messages] of state.messages) {
    const fileMessages = messages.get(filePath);

    if (fileMessages != null && fileMessages.length > 0) {
      providerToMessages.set(provider, fileMessages);
    }
  }

  const providerToCurrentIndex = new (_collection().DefaultMap)(() => 0);

  while (providerToMessages.size) {
    // "Peek" at the next message from each provider, and store them so we can
    const nextMessageCandidates = Array.from(providerToMessages.entries()).map(([provider, messages]) => [provider, messages[providerToCurrentIndex.get(provider)]]); // Pick the "closest" (lowest row and column pair) of the options we generated

    const [closestProvider, closestMessage] = (0, _minBy2().default)(nextMessageCandidates, ([provider, message]) => {
      const range = message && message.range;
      return range ? range.start.row + range.start.column / Number.MAX_SAFE_INTEGER : 0;
    }); // Advance this provider's index forward one. First, get "i"

    const closestProviderIndex = providerToCurrentIndex.get(closestProvider);
    const closestProviderMessages = providerToMessages.get(closestProvider);

    if (closestProviderMessages != null && closestProviderIndex < closestProviderMessages.length - 1) {
      // "i++"
      providerToCurrentIndex.set(closestProvider, closestProviderIndex + 1);
    } else {
      // We've exhausted the messages for this provider. Remove it from future
      // consideration.
      providerToMessages.delete(closestProvider);
    }

    yield closestMessage;
  }
}

function* getBoundedThreadedFileMessages(state, filePath) {
  yield* (0, _collection().takeIterable)(getThreadedFileMessages(state, filePath), MAX_MESSAGE_COUNT_PER_FILE);
}
/**
 * Gets the current diagnostic messages for the file.
 * Prefer to get updates via ::onFileMessagesDidUpdate.
 */


function getFileMessages(state, filePath) {
  return Array.from(getThreadedFileMessages(state, filePath));
}

function getFileMessageUpdates(state, filePath) {
  return {
    filePath,
    // Excessive numbers of items cause performance issues in the gutter, table, and decorations.
    // Truncate the number of items MAX_MESSAGE_COUNT_PER_FILE.
    messages: Array.from(getBoundedThreadedFileMessages(state, filePath)),
    // Include the total number of messages without truncation
    totalMessages: getFileMessageCount(state, filePath)
>>>>>>> Update
  };
}
/**
 * Gets all current diagnostic messages.
 * Prefer to get updates via ::onAllMessagesDidUpdate.
 */


const getMessages = (0, _reselect().createSelector)([getMessagesState], messagesState => {
  const messages = []; // Get all file messages.

  for (const providerMessages of messagesState.values()) {
    for (const fileMessages of providerMessages.values()) {
      messages.push(...fileMessages);
    }
  }

  return messages;
});
exports.getMessages = getMessages;
const getSupportedMessageKinds = (0, _reselect().createSelector)([getProviders], providers => {
  const kinds = new Set(['lint']); // Lint is always supported.

  providers.forEach(provider => {
    if (provider.supportedMessageKinds != null) {
      provider.supportedMessageKinds.forEach(kind => {
        kinds.add(kind);
      });
    }
  });
  return kinds;
});
exports.getSupportedMessageKinds = getSupportedMessageKinds;
const getUiConfig = (0, _reselect().createSelector)([getProviders], providers => {
  const config = [];
  providers.forEach(provider => {
    if (provider.name != null && provider.uiSettings != null && provider.uiSettings.length > 0) {
      config.push({
        providerName: provider.name,
        settings: provider.uiSettings
      });
    }
  });
  return config;
});
<<<<<<< HEAD
exports.getUiConfig = getUiConfig;
=======
exports.getUiConfig = getUiConfig;

function getFileMessageCount(state, filePath) {
  let messageCount = 0;

  for (const providerMessages of state.messages.values()) {
    const messagesForFile = providerMessages.get(filePath);

    if (messagesForFile == null) {
      continue;
    }

    messageCount += messagesForFile.length;
  }

  return messageCount;
}
>>>>>>> Update
