"use strict";

module.exports = _client => {
  const remoteModule = {};
  remoteModule.HgRepositorySubscriptions = class {
    static create(arg0) {
      return _client.callRemoteFunction("HgRepositorySubscriptions/create", "promise", _client.marshalArguments(Array.from(arguments), [{
        name: "workingDirectory",
        type: {
          kind: "string"
        }
      }])).then(value => {
        return _client.unmarshal(value, {
          kind: "named",
          name: "HgRepositorySubscriptions"
        });
      });
    }

    constructor() {
      throw Error("constructors are not supported for remote objects");
    }

<<<<<<< HEAD
=======
    observeWatchmanHealth() {
      return _client.callRemoteMethod(_client.marshal(this, {
        kind: "named",
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 185
        },
        name: "HgRepositorySubscriptions"
      }), "observeWatchmanHealth", "observable", _client.marshalArguments(Array.from(arguments), [])).map(value => {
        return _client.unmarshal(value, {
          kind: "boolean"
        });
      }).publish();
    }

>>>>>>> Update
    observeFilesDidChange() {
      return _client.callRemoteMethod(_client.marshal(this, {
        kind: "named",
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 348
=======
          line: 185
>>>>>>> Update
        },
        name: "HgRepositorySubscriptions"
      }), "observeFilesDidChange", "observable", _client.marshalArguments(Array.from(arguments), [])).map(value => {
        return _client.unmarshal(value, {
          kind: "array",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        });
      }).publish();
    }

    observeHgCommitsDidChange() {
      return _client.callRemoteMethod(_client.marshal(this, {
        kind: "named",
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 348
=======
          line: 185
>>>>>>> Update
        },
        name: "HgRepositorySubscriptions"
      }), "observeHgCommitsDidChange", "observable", _client.marshalArguments(Array.from(arguments), [])).map(value => {
        return _client.unmarshal(value, {
          kind: "void"
        });
      }).publish();
    }

    observeHgRepoStateDidChange() {
      return _client.callRemoteMethod(_client.marshal(this, {
        kind: "named",
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 348
=======
          line: 185
>>>>>>> Update
        },
        name: "HgRepositorySubscriptions"
      }), "observeHgRepoStateDidChange", "observable", _client.marshalArguments(Array.from(arguments), [])).map(value => {
        return _client.unmarshal(value, {
          kind: "void"
        });
      }).publish();
    }

    observeHgConflictStateDidChange() {
      return _client.callRemoteMethod(_client.marshal(this, {
        kind: "named",
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 348
=======
          line: 185
>>>>>>> Update
        },
        name: "HgRepositorySubscriptions"
      }), "observeHgConflictStateDidChange", "observable", _client.marshalArguments(Array.from(arguments), [])).map(value => {
        return _client.unmarshal(value, {
          kind: "boolean"
        });
      }).publish();
    }

    observeHgOperationProgressDidChange() {
      return _client.callRemoteMethod(_client.marshal(this, {
        kind: "named",
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 348
=======
          line: 185
>>>>>>> Update
        },
        name: "HgRepositorySubscriptions"
      }), "observeHgOperationProgressDidChange", "observable", _client.marshalArguments(Array.from(arguments), [])).map(value => {
        return _client.unmarshal(value, {
          kind: "any"
        });
      }).publish();
    }

    observeActiveBookmarkDidChange() {
      return _client.callRemoteMethod(_client.marshal(this, {
        kind: "named",
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 348
=======
          line: 185
>>>>>>> Update
        },
        name: "HgRepositorySubscriptions"
      }), "observeActiveBookmarkDidChange", "observable", _client.marshalArguments(Array.from(arguments), [])).map(value => {
        return _client.unmarshal(value, {
          kind: "void"
        });
      }).publish();
    }

    observeLockFilesDidChange() {
      return _client.callRemoteMethod(_client.marshal(this, {
        kind: "named",
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 348
=======
          line: 185
>>>>>>> Update
        },
        name: "HgRepositorySubscriptions"
      }), "observeLockFilesDidChange", "observable", _client.marshalArguments(Array.from(arguments), [])).map(value => {
        return _client.unmarshal(value, {
          kind: "map",
          keyType: {
            kind: "string"
          },
          valueType: {
            kind: "boolean"
          }
        });
      }).publish();
    }

    observeBookmarksDidChange() {
      return _client.callRemoteMethod(_client.marshal(this, {
        kind: "named",
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 348
=======
          line: 185
>>>>>>> Update
        },
        name: "HgRepositorySubscriptions"
      }), "observeBookmarksDidChange", "observable", _client.marshalArguments(Array.from(arguments), [])).map(value => {
        return _client.unmarshal(value, {
          kind: "void"
        });
      }).publish();
    }

    dispose() {
      return _client.disposeRemoteObject(this);
    }

  };

  remoteModule.createRepositorySubscriptions = function (arg0) {
    return _client.callRemoteFunction("HgService/createRepositorySubscriptions", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "named",
        name: "HgRepositorySubscriptions"
      });
    });
  };

  remoteModule.fetchStatuses = function (arg0, arg1) {
    return _client.callRemoteFunction("HgService/fetchStatuses", "observable", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "toRevision",
      type: {
        kind: "nullable",
        type: {
          kind: "string"
        }
      }
    }])).map(value => {
      return _client.unmarshal(value, {
        kind: "map",
        keyType: {
          kind: "named",
          name: "NuclideUri"
        },
        valueType: {
          kind: "named",
          name: "StatusCodeIdValue"
        }
      });
    }).publish();
  };

  remoteModule.fetchStackStatuses = function (arg0) {
    return _client.callRemoteFunction("HgService/fetchStackStatuses", "observable", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }])).map(value => {
      return _client.unmarshal(value, {
        kind: "map",
        keyType: {
          kind: "named",
          name: "NuclideUri"
        },
        valueType: {
          kind: "named",
          name: "StatusCodeIdValue"
        }
      });
    }).publish();
  };

  remoteModule.fetchHeadStatuses = function (arg0) {
    return _client.callRemoteFunction("HgService/fetchHeadStatuses", "observable", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }])).map(value => {
      return _client.unmarshal(value, {
        kind: "map",
        keyType: {
          kind: "named",
          name: "NuclideUri"
        },
        valueType: {
          kind: "named",
          name: "StatusCodeIdValue"
        }
      });
    }).publish();
  };

  remoteModule.getAdditionalLogFiles = function (arg0, arg1) {
    return _client.callRemoteFunction("HgService/getAdditionalLogFiles", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "deadline",
      type: {
        kind: "named",
        name: "DeadlineRequest"
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "array",
        type: {
          kind: "named",
          name: "AdditionalLogFile"
        }
      });
    });
  };

  remoteModule.fetchDiffInfo = function (arg0, arg1) {
    return _client.callRemoteFunction("HgService/fetchDiffInfo", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "filePaths",
      type: {
        kind: "array",
        type: {
          kind: "named",
          name: "NuclideUri"
        }
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "nullable",
        type: {
          kind: "map",
          keyType: {
            kind: "named",
            name: "NuclideUri"
          },
          valueType: {
            kind: "named",
            name: "DiffInfo"
          }
        }
      });
    });
  };

  remoteModule.getLockFilesInstantaneousExistance = function (arg0) {
    return _client.callRemoteFunction("HgService/getLockFilesInstantaneousExistance", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "string"
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "map",
        keyType: {
          kind: "string"
        },
        valueType: {
          kind: "boolean"
        }
      });
    });
  };

  remoteModule.createBookmark = function (arg0, arg1, arg2) {
    return _client.callRemoteFunction("HgService/createBookmark", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "name",
      type: {
        kind: "string"
      }
    }, {
      name: "revision",
      type: {
        kind: "nullable",
        type: {
          kind: "string"
        }
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "void"
      });
    });
  };

  remoteModule.deleteBookmark = function (arg0, arg1) {
    return _client.callRemoteFunction("HgService/deleteBookmark", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "name",
      type: {
        kind: "string"
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "void"
      });
    });
  };

  remoteModule.renameBookmark = function (arg0, arg1, arg2) {
    return _client.callRemoteFunction("HgService/renameBookmark", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "name",
      type: {
        kind: "string"
      }
    }, {
      name: "nextName",
      type: {
        kind: "string"
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "void"
      });
    });
  };

  remoteModule.fetchActiveBookmark = function (arg0) {
    return _client.callRemoteFunction("HgService/fetchActiveBookmark", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "string"
      });
    });
  };

  remoteModule.fetchBookmarks = function (arg0) {
    return _client.callRemoteFunction("HgService/fetchBookmarks", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "array",
        type: {
          kind: "named",
          name: "BookmarkInfo"
        }
      });
    });
  };

  remoteModule.fetchFileContentAtRevision = function (arg0, arg1, arg2) {
    return _client.callRemoteFunction("HgService/fetchFileContentAtRevision", "observable", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "filePath",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "revision",
      type: {
        kind: "string"
      }
    }])).map(value => {
      return _client.unmarshal(value, {
        kind: "string"
      });
    }).publish();
  };

  remoteModule.batchFetchFileContentsAtRevision = function (arg0, arg1, arg2) {
    return _client.callRemoteFunction("HgService/batchFetchFileContentsAtRevision", "observable", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "filePaths",
      type: {
        kind: "array",
        type: {
          kind: "named",
          name: "NuclideUri"
        }
      }
    }, {
      name: "revision",
      type: {
        kind: "string"
      }
    }])).map(value => {
      return _client.unmarshal(value, {
        kind: "map",
        keyType: {
          kind: "named",
          name: "NuclideUri"
        },
        valueType: {
          kind: "string"
        }
      });
    }).publish();
  };

  remoteModule.fetchFilesChangedAtRevision = function (arg0, arg1) {
    return _client.callRemoteFunction("HgService/fetchFilesChangedAtRevision", "observable", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "revision",
      type: {
        kind: "string"
      }
    }])).map(value => {
      return _client.unmarshal(value, {
        kind: "named",
        name: "RevisionFileChanges"
      });
    }).publish();
  };

  remoteModule.fetchRevisionInfoBetweenHeadAndBase = function (arg0) {
    return _client.callRemoteFunction("HgService/fetchRevisionInfoBetweenHeadAndBase", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "array",
        type: {
          kind: "named",
          name: "RevisionInfo"
        }
      });
    });
  };

<<<<<<< HEAD
=======
  remoteModule.fetchHeadRevisionInfo = function (arg0) {
    return _client.callRemoteFunction("HgService/fetchHeadRevisionInfo", "observable", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }])).map(value => {
      return _client.unmarshal(value, {
        kind: "array",
        type: {
          kind: "named",
          name: "RevisionInfo"
        }
      });
    }).publish();
  };

>>>>>>> Update
  remoteModule.fetchSmartlogRevisions = function (arg0) {
    return _client.callRemoteFunction("HgService/fetchSmartlogRevisions", "observable", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }])).map(value => {
      return _client.unmarshal(value, {
        kind: "array",
        type: {
          kind: "named",
          name: "RevisionInfo"
        }
      });
    }).publish();
  };

  remoteModule.getBaseRevision = function (arg0) {
    return _client.callRemoteFunction("HgService/getBaseRevision", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "named",
        name: "RevisionInfo"
      });
    });
  };

  remoteModule.getBlameAtHead = function (arg0, arg1) {
    return _client.callRemoteFunction("HgService/getBlameAtHead", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "filePath",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "array",
        type: {
          kind: "nullable",
          type: {
            kind: "named",
            name: "RevisionInfo"
          }
        }
      });
    });
  };

  remoteModule.getConfigValueAsync = function (arg0, arg1) {
    return _client.callRemoteFunction("HgService/getConfigValueAsync", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "key",
      type: {
        kind: "string"
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "nullable",
        type: {
          kind: "string"
        }
      });
    });
  };

  remoteModule.getDifferentialRevisionForChangeSetId = function (arg0, arg1) {
    return _client.callRemoteFunction("HgService/getDifferentialRevisionForChangeSetId", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "changeSetId",
      type: {
        kind: "string"
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "nullable",
        type: {
          kind: "string"
        }
      });
    });
  };

  remoteModule.getSmartlog = function (arg0, arg1, arg2) {
    return _client.callRemoteFunction("HgService/getSmartlog", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "ttyOutput",
      type: {
        kind: "boolean"
      }
    }, {
      name: "concise",
      type: {
        kind: "boolean"
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "named",
        name: "AsyncExecuteRet"
      });
    });
  };

  remoteModule.commit = function (arg0, arg1, arg2) {
    return _client.callRemoteFunction("HgService/commit", "observable", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "message",
      type: {
        kind: "string"
      }
    }, {
      name: "filePaths",
      type: {
        kind: "nullable",
        type: {
          kind: "array",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }
      }
    }])).map(value => {
      return _client.unmarshal(value, {
        kind: "named",
        name: "LegacyProcessMessage"
      });
    }).publish();
  };

  remoteModule.editCommitMessage = function (arg0, arg1, arg2) {
    return _client.callRemoteFunction("HgService/editCommitMessage", "observable", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "revision",
      type: {
        kind: "string"
      }
    }, {
      name: "message",
      type: {
        kind: "string"
      }
    }])).map(value => {
      return _client.unmarshal(value, {
        kind: "named",
        name: "LegacyProcessMessage"
      });
    }).publish();
  };

  remoteModule.amend = function (arg0, arg1, arg2, arg3) {
    return _client.callRemoteFunction("HgService/amend", "observable", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "message",
      type: {
        kind: "nullable",
        type: {
          kind: "string"
        }
      }
    }, {
      name: "amendMode",
      type: {
        kind: "named",
        name: "AmendModeValue"
      }
    }, {
      name: "filePaths",
      type: {
        kind: "nullable",
        type: {
          kind: "array",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }
      }
    }])).map(value => {
      return _client.unmarshal(value, {
        kind: "named",
        name: "LegacyProcessMessage"
      });
    }).publish();
  };

  remoteModule.restack = function (arg0) {
    return _client.callRemoteFunction("HgService/restack", "observable", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }])).map(value => {
      return _client.unmarshal(value, {
        kind: "named",
        name: "LegacyProcessMessage"
      });
    }).publish();
  };

  remoteModule.revert = function (arg0, arg1, arg2) {
    return _client.callRemoteFunction("HgService/revert", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "filePaths",
      type: {
        kind: "array",
        type: {
          kind: "named",
          name: "NuclideUri"
        }
      }
    }, {
      name: "toRevision",
      type: {
        kind: "nullable",
        type: {
          kind: "string"
        }
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "void"
      });
    });
  };

  remoteModule.checkout = function (arg0, arg1, arg2, arg3) {
    return _client.callRemoteFunction("HgService/checkout", "observable", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "revision",
      type: {
        kind: "string"
      }
    }, {
      name: "create",
      type: {
        kind: "boolean"
      }
    }, {
      name: "options",
      type: {
        kind: "nullable",
        type: {
          kind: "named",
          name: "CheckoutOptions"
        }
      }
    }])).map(value => {
      return _client.unmarshal(value, {
        kind: "named",
        name: "LegacyProcessMessage"
      });
    }).publish();
  };

  remoteModule.show = function (arg0, arg1) {
    return _client.callRemoteFunction("HgService/show", "observable", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "revision",
      type: {
        kind: "number"
      }
    }])).map(value => {
      return _client.unmarshal(value, {
        kind: "named",
        name: "RevisionShowInfo"
      });
    }).publish();
  };

  remoteModule.diff = function (arg0, arg1, arg2, arg3, arg4, arg5) {
    return _client.callRemoteFunction("HgService/diff", "observable", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "revision",
      type: {
        kind: "string"
      }
    }, {
      name: "unified",
      type: {
        kind: "nullable",
        type: {
          kind: "number"
        }
      }
    }, {
      name: "diffCommitted",
      type: {
        kind: "nullable",
        type: {
          kind: "boolean"
        }
      }
    }, {
      name: "noPrefix",
      type: {
        kind: "nullable",
        type: {
          kind: "boolean"
        }
      }
    }, {
      name: "noDates",
      type: {
        kind: "nullable",
        type: {
          kind: "boolean"
        }
      }
    }])).map(value => {
      return _client.unmarshal(value, {
        kind: "string"
      });
    }).publish();
  };

  remoteModule.purge = function (arg0) {
    return _client.callRemoteFunction("HgService/purge", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "void"
      });
    });
  };

  remoteModule.uncommit = function (arg0) {
    return _client.callRemoteFunction("HgService/uncommit", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "void"
      });
    });
  };

  remoteModule.strip = function (arg0, arg1) {
    return _client.callRemoteFunction("HgService/strip", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "revision",
      type: {
        kind: "string"
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "void"
      });
    });
  };

  remoteModule.checkoutForkBase = function (arg0) {
    return _client.callRemoteFunction("HgService/checkoutForkBase", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "void"
      });
    });
  };

  remoteModule.rename = function (arg0, arg1, arg2, arg3) {
    return _client.callRemoteFunction("HgService/rename", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "filePaths",
      type: {
        kind: "array",
        type: {
          kind: "named",
          name: "NuclideUri"
        }
      }
    }, {
      name: "destPath",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "after",
      type: {
        kind: "nullable",
        type: {
          kind: "boolean"
        }
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "void"
      });
    });
  };

  remoteModule.remove = function (arg0, arg1, arg2) {
    return _client.callRemoteFunction("HgService/remove", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "filePaths",
      type: {
        kind: "array",
        type: {
          kind: "named",
          name: "NuclideUri"
        }
      }
    }, {
      name: "after",
      type: {
        kind: "nullable",
        type: {
          kind: "boolean"
        }
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "void"
      });
    });
  };

  remoteModule.forget = function (arg0, arg1) {
    return _client.callRemoteFunction("HgService/forget", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "filePaths",
      type: {
        kind: "array",
        type: {
          kind: "named",
          name: "NuclideUri"
        }
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "void"
      });
    });
  };

  remoteModule.add = function (arg0, arg1) {
    return _client.callRemoteFunction("HgService/add", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "filePaths",
      type: {
        kind: "array",
        type: {
          kind: "named",
          name: "NuclideUri"
        }
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "void"
      });
    });
  };

  remoteModule.getTemplateCommitMessage = function (arg0) {
    return _client.callRemoteFunction("HgService/getTemplateCommitMessage", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "nullable",
        type: {
          kind: "string"
        }
      });
    });
  };

  remoteModule.getHeadCommitMessage = function (arg0) {
    return _client.callRemoteFunction("HgService/getHeadCommitMessage", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "nullable",
        type: {
          kind: "string"
        }
      });
    });
  };

  remoteModule.log = function (arg0, arg1, arg2) {
    return _client.callRemoteFunction("HgService/log", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "filePaths",
      type: {
        kind: "array",
        type: {
          kind: "named",
          name: "NuclideUri"
        }
      }
    }, {
      name: "limit",
      type: {
        kind: "nullable",
        type: {
          kind: "number"
        }
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "named",
        name: "VcsLogResponse"
      });
    });
  };

  remoteModule.fetchMergeConflicts = function (arg0) {
    return _client.callRemoteFunction("HgService/fetchMergeConflicts", "observable", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }])).map(value => {
      return _client.unmarshal(value, {
        kind: "nullable",
        type: {
          kind: "named",
          name: "MergeConflicts"
        }
      });
    }).publish();
  };

  remoteModule.markConflictedFile = function (arg0, arg1, arg2) {
    return _client.callRemoteFunction("HgService/markConflictedFile", "observable", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "filePath",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "resolved",
      type: {
        kind: "boolean"
      }
    }])).map(value => {
      return _client.unmarshal(value, {
        kind: "named",
        name: "LegacyProcessMessage"
      });
    }).publish();
  };

  remoteModule.continueOperation = function (arg0, arg1) {
    return _client.callRemoteFunction("HgService/continueOperation", "observable", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "args",
      type: {
        kind: "array",
        type: {
          kind: "string"
        }
      }
    }])).map(value => {
      return _client.unmarshal(value, {
        kind: "named",
        name: "LegacyProcessMessage"
      });
    }).publish();
  };

  remoteModule.abortOperation = function (arg0, arg1) {
    return _client.callRemoteFunction("HgService/abortOperation", "observable", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "commandWithOptions",
      type: {
        kind: "array",
        type: {
          kind: "string"
        }
      }
    }])).map(value => {
      return _client.unmarshal(value, {
        kind: "string"
      });
    }).publish();
  };

  remoteModule.resolveAllFiles = function (arg0) {
    return _client.callRemoteFunction("HgService/resolveAllFiles", "observable", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }])).map(value => {
      return _client.unmarshal(value, {
        kind: "named",
        name: "LegacyProcessMessage"
      });
    }).publish();
  };

  remoteModule.rebase = function (arg0, arg1, arg2) {
    return _client.callRemoteFunction("HgService/rebase", "observable", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "destination",
      type: {
        kind: "string"
      }
    }, {
      name: "source",
      type: {
        kind: "nullable",
        type: {
          kind: "string"
        }
      }
    }])).map(value => {
      return _client.unmarshal(value, {
        kind: "named",
        name: "LegacyProcessMessage"
      });
    }).publish();
  };

  remoteModule.reorderWithinStack = function (arg0, arg1) {
    return _client.callRemoteFunction("HgService/reorderWithinStack", "observable", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "orderedRevisions",
      type: {
        kind: "array",
        type: {
          kind: "string"
        }
      }
    }])).map(value => {
      return _client.unmarshal(value, {
        kind: "string"
      });
    }).publish();
  };

  remoteModule.pull = function (arg0, arg1) {
    return _client.callRemoteFunction("HgService/pull", "observable", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "options",
      type: {
        kind: "array",
        type: {
          kind: "string"
        }
      }
    }])).map(value => {
      return _client.unmarshal(value, {
        kind: "named",
        name: "LegacyProcessMessage"
      });
    }).publish();
  };

  remoteModule.copy = function (arg0, arg1, arg2, arg3) {
    return _client.callRemoteFunction("HgService/copy", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "filePaths",
      type: {
        kind: "array",
        type: {
          kind: "named",
          name: "NuclideUri"
        }
      }
    }, {
      name: "destPath",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "after",
      type: {
        kind: "nullable",
        type: {
          kind: "boolean"
        }
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "void"
      });
    });
  };

  remoteModule.getHeadId = function (arg0, arg1) {
    return _client.callRemoteFunction("HgService/getHeadId", "observable", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "useShortHash",
      type: {
        kind: "nullable",
        type: {
          kind: "boolean"
        }
      }
    }])).map(value => {
      return _client.unmarshal(value, {
        kind: "string"
      });
    }).publish();
  };

  remoteModule.getFullHashForRevision = function (arg0, arg1) {
    return _client.callRemoteFunction("HgService/getFullHashForRevision", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "rev",
      type: {
        kind: "string"
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "nullable",
        type: {
          kind: "string"
        }
      });
    });
  };

  remoteModule.fold = function (arg0, arg1, arg2, arg3) {
    return _client.callRemoteFunction("HgService/fold", "observable", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "from",
      type: {
        kind: "string"
      }
    }, {
      name: "to",
      type: {
        kind: "string"
      }
    }, {
      name: "message",
      type: {
        kind: "string"
      }
    }])).map(value => {
      return _client.unmarshal(value, {
        kind: "string"
      });
    }).publish();
  };

  remoteModule.importPatch = function (arg0, arg1, arg2) {
    return _client.callRemoteFunction("HgService/importPatch", "observable", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "patch",
      type: {
        kind: "string"
      }
    }, {
      name: "noCommit",
      type: {
        kind: "nullable",
        type: {
          kind: "boolean"
        }
      }
    }])).map(value => {
      return _client.unmarshal(value, {
        kind: "string"
      });
    }).publish();
  };

  remoteModule.runCommand = function (arg0, arg1) {
    return _client.callRemoteFunction("HgService/runCommand", "observable", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "args",
      type: {
        kind: "array",
        type: {
          kind: "string"
        }
      }
    }])).map(value => {
      return _client.unmarshal(value, {
        kind: "string"
      });
    }).publish();
  };

  remoteModule.observeExecution = function (arg0, arg1) {
    return _client.callRemoteFunction("HgService/observeExecution", "observable", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "args",
      type: {
        kind: "array",
        type: {
          kind: "string"
        }
      }
    }])).map(value => {
      return _client.unmarshal(value, {
        kind: "named",
        name: "LegacyProcessMessage"
      });
    }).publish();
  };

  remoteModule.addRemove = function (arg0) {
    return _client.callRemoteFunction("HgService/addRemove", "observable", _client.marshalArguments(Array.from(arguments), [{
      name: "workingDirectory",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }])).map(value => {
      return _client.unmarshal(value, {
        kind: "string"
      });
    }).publish();
  };

  remoteModule.gitDiffStrings = function (arg0, arg1) {
    return _client.callRemoteFunction("HgService/gitDiffStrings", "observable", _client.marshalArguments(Array.from(arguments), [{
      name: "oldContents",
      type: {
        kind: "string"
      }
    }, {
      name: "newContents",
      type: {
        kind: "string"
      }
    }])).map(value => {
      return _client.unmarshal(value, {
        kind: "string"
      });
    }).publish();
  };

  return remoteModule;
};

Object.defineProperty(module.exports, "defs", {
  value: {
    Object: {
      kind: "alias",
      name: "Object",
      location: {
        type: "builtin"
      }
    },
    Date: {
      kind: "alias",
      name: "Date",
      location: {
        type: "builtin"
      }
    },
    RegExp: {
      kind: "alias",
      name: "RegExp",
      location: {
        type: "builtin"
      }
    },
    Buffer: {
      kind: "alias",
      name: "Buffer",
      location: {
        type: "builtin"
      }
    },
    "fs.Stats": {
      kind: "alias",
      name: "fs.Stats",
      location: {
        type: "builtin"
      }
    },
    NuclideUri: {
      kind: "alias",
      name: "NuclideUri",
      location: {
        type: "builtin"
      }
    },
    atom$Point: {
      kind: "alias",
      name: "atom$Point",
      location: {
        type: "builtin"
      }
    },
    atom$Range: {
      kind: "alias",
      name: "atom$Range",
      location: {
        type: "builtin"
      }
    },
<<<<<<< HEAD
=======
    HgRepositorySubscriptions: {
      kind: "interface",
      name: "HgRepositorySubscriptions",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 185
      },
      staticMethods: {
        create: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 204
          },
          kind: "function",
          argumentTypes: [{
            name: "workingDirectory",
            type: {
              kind: "string"
            }
          }],
          returnType: {
            kind: "promise",
            type: {
              kind: "named",
              name: "HgRepositorySubscriptions"
            }
          }
        }
      },
      instanceMethods: {
        dispose: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 231
          },
          kind: "function",
          argumentTypes: [],
          returnType: {
            kind: "promise",
            type: {
              kind: "void"
            }
          }
        },
        observeWatchmanHealth: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 482
          },
          kind: "function",
          argumentTypes: [],
          returnType: {
            kind: "observable",
            type: {
              kind: "boolean"
            }
          }
        },
        observeFilesDidChange: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 491
          },
          kind: "function",
          argumentTypes: [],
          returnType: {
            kind: "observable",
            type: {
              kind: "array",
              type: {
                kind: "named",
                name: "NuclideUri"
              }
            }
          }
        },
        observeHgCommitsDidChange: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 499
          },
          kind: "function",
          argumentTypes: [],
          returnType: {
            kind: "observable",
            type: {
              kind: "void"
            }
          }
        },
        observeHgRepoStateDidChange: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 513
          },
          kind: "function",
          argumentTypes: [],
          returnType: {
            kind: "observable",
            type: {
              kind: "void"
            }
          }
        },
        observeHgConflictStateDidChange: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 520
          },
          kind: "function",
          argumentTypes: [],
          returnType: {
            kind: "observable",
            type: {
              kind: "boolean"
            }
          }
        },
        observeHgOperationProgressDidChange: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 528
          },
          kind: "function",
          argumentTypes: [],
          returnType: {
            kind: "observable",
            type: {
              kind: "any"
            }
          }
        },
        observeActiveBookmarkDidChange: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 559
          },
          kind: "function",
          argumentTypes: [],
          returnType: {
            kind: "observable",
            type: {
              kind: "void"
            }
          }
        },
        observeLockFilesDidChange: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 566
          },
          kind: "function",
          argumentTypes: [],
          returnType: {
            kind: "observable",
            type: {
              kind: "map",
              keyType: {
                kind: "string"
              },
              valueType: {
                kind: "boolean"
              }
            }
          }
        },
        observeBookmarksDidChange: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 573
          },
          kind: "function",
          argumentTypes: [],
          returnType: {
            kind: "observable",
            type: {
              kind: "void"
            }
          }
        }
      }
    },
    createRepositorySubscriptions: {
      kind: "function",
      name: "createRepositorySubscriptions",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 578
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 578
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "named",
            name: "HgRepositorySubscriptions"
          }
        }
      }
    },
>>>>>>> Update
    StatusCodeIdValue: {
      kind: "alias",
      location: {
        type: "source",
<<<<<<< HEAD
        fileName: "HgService.js",
        line: 103
=======
        fileName: "types.js",
        line: 18
>>>>>>> Update
      },
      name: "StatusCodeIdValue",
      definition: {
        kind: "union",
        types: [{
          kind: "string-literal",
          value: "A"
        }, {
          kind: "string-literal",
          value: "C"
        }, {
          kind: "string-literal",
          value: "I"
        }, {
          kind: "string-literal",
          value: "M"
        }, {
          kind: "string-literal",
          value: "!"
        }, {
          kind: "string-literal",
          value: "R"
        }, {
          kind: "string-literal",
          value: "?"
        }, {
          kind: "string-literal",
          value: "U"
        }]
      }
    },
<<<<<<< HEAD
    MergeConflictStatusValue: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 105
      },
      name: "MergeConflictStatusValue",
      definition: {
        kind: "union",
        types: [{
          kind: "string-literal",
          value: "both changed"
        }, {
          kind: "string-literal",
          value: "deleted in theirs"
        }, {
          kind: "string-literal",
          value: "deleted in ours"
        }, {
          kind: "string-literal",
          value: "resolved"
        }]
      }
    },
    MergeConflictStatusCodeId: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 111
      },
      name: "MergeConflictStatusCodeId",
      definition: {
        kind: "union",
        types: [{
          kind: "string-literal",
          value: "R"
        }, {
          kind: "string-literal",
          value: "U"
        }]
      }
    },
    StatusCodeNumberValue: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 121
      },
      name: "StatusCodeNumberValue",
      definition: {
        kind: "union",
        types: [{
          kind: "number-literal",
          value: 1
        }, {
          kind: "number-literal",
          value: 2
        }, {
          kind: "number-literal",
          value: 3
        }, {
          kind: "number-literal",
          value: 4
        }, {
          kind: "number-literal",
          value: 5
        }, {
          kind: "number-literal",
          value: 6
        }, {
          kind: "number-literal",
          value: 7
        }, {
          kind: "number-literal",
          value: 8
        }]
=======
    fetchStatuses: {
      kind: "function",
      name: "fetchStatuses",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 591
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 591
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "toRevision",
          type: {
            kind: "nullable",
            type: {
              kind: "string"
            }
          }
        }],
        returnType: {
          kind: "observable",
          type: {
            kind: "map",
            keyType: {
              kind: "named",
              name: "NuclideUri"
            },
            valueType: {
              kind: "named",
              name: "StatusCodeIdValue"
            }
          }
        }
      }
    },
    fetchStackStatuses: {
      kind: "function",
      name: "fetchStackStatuses",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 622
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 622
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }],
        returnType: {
          kind: "observable",
          type: {
            kind: "map",
            keyType: {
              kind: "named",
              name: "NuclideUri"
            },
            valueType: {
              kind: "named",
              name: "StatusCodeIdValue"
            }
          }
        }
      }
    },
    fetchHeadStatuses: {
      kind: "function",
      name: "fetchHeadStatuses",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 641
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 641
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }],
        returnType: {
          kind: "observable",
          type: {
            kind: "map",
            keyType: {
              kind: "named",
              name: "NuclideUri"
            },
            valueType: {
              kind: "named",
              name: "StatusCodeIdValue"
            }
          }
        }
      }
    },
    AdditionalLogFile: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "rpc-types.js",
        line: 31
      },
      name: "AdditionalLogFile",
      definition: {
        kind: "object",
        fields: [{
          name: "title",
          type: {
            kind: "string"
          },
          optional: false
        }, {
          name: "data",
          type: {
            kind: "string"
          },
          optional: true
        }, {
          name: "dataBuffer",
          type: {
            kind: "named",
            name: "Buffer"
          },
          optional: true
        }]
      }
    },
    DeadlineRequest: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "promise.js",
        line: 210
      },
      name: "DeadlineRequest",
      definition: {
        kind: "number"
      }
    },
    getAdditionalLogFiles: {
      kind: "function",
      name: "getAdditionalLogFiles",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 650
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 650
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "deadline",
          type: {
            kind: "named",
            name: "DeadlineRequest"
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "array",
            type: {
              kind: "named",
              name: "AdditionalLogFile"
            }
          }
        }
>>>>>>> Update
      }
    },
    LineDiff: {
      kind: "alias",
      location: {
        type: "source",
<<<<<<< HEAD
        fileName: "HgService.js",
        line: 123
=======
        fileName: "types.js",
        line: 38
>>>>>>> Update
      },
      name: "LineDiff",
      definition: {
        kind: "object",
        fields: [{
          name: "oldStart",
          type: {
            kind: "number"
          },
          optional: false
        }, {
          name: "oldLines",
          type: {
            kind: "number"
          },
          optional: false
        }, {
          name: "newStart",
          type: {
            kind: "number"
          },
          optional: false
        }, {
          name: "newLines",
          type: {
            kind: "number"
          },
          optional: false
<<<<<<< HEAD
        }]
      }
    },
    BookmarkInfo: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 130
      },
      name: "BookmarkInfo",
      definition: {
        kind: "object",
        fields: [{
          name: "active",
          type: {
            kind: "boolean"
          },
          optional: false
        }, {
          name: "bookmark",
          type: {
            kind: "string"
          },
          optional: false
        }, {
          name: "node",
          type: {
            kind: "string"
          },
          optional: false
=======
        }, {
          name: "oldText",
          type: {
            kind: "string"
          },
          optional: true
>>>>>>> Update
        }]
      }
    },
    DiffInfo: {
      kind: "alias",
      location: {
        type: "source",
<<<<<<< HEAD
        fileName: "HgService.js",
        line: 136
=======
        fileName: "types.js",
        line: 52
>>>>>>> Update
      },
      name: "DiffInfo",
      definition: {
        kind: "object",
        fields: [{
          name: "added",
          type: {
            kind: "number"
          },
          optional: false
        }, {
          name: "deleted",
          type: {
            kind: "number"
          },
          optional: false
        }, {
          name: "lineDiffs",
          type: {
            kind: "array",
            type: {
              kind: "named",
              name: "LineDiff"
            }
          },
          optional: false
        }]
      }
    },
<<<<<<< HEAD
    CommitPhaseType: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 142
      },
      name: "CommitPhaseType",
      definition: {
        kind: "union",
        types: [{
          kind: "string-literal",
          value: "public"
        }, {
          kind: "string-literal",
          value: "draft"
        }, {
          kind: "string-literal",
          value: "secret"
        }]
      }
    },
    SuccessorTypeValue: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 144
      },
      name: "SuccessorTypeValue",
      definition: {
        kind: "union",
        types: [{
          kind: "string-literal",
          value: "public"
        }, {
          kind: "string-literal",
          value: "amend"
        }, {
          kind: "string-literal",
          value: "rebase"
        }, {
          kind: "string-literal",
          value: "split"
        }, {
          kind: "string-literal",
          value: "fold"
        }, {
          kind: "string-literal",
          value: "histedit"
        }, {
          kind: "string-literal",
          value: "rewritten"
        }]
      }
    },
    HisteditActionsValue: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 153
      },
      name: "HisteditActionsValue",
      definition: {
        kind: "string-literal",
        value: "pick"
      }
    },
    RevisionSuccessorInfo: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 155
      },
      name: "RevisionSuccessorInfo",
      definition: {
        kind: "object",
        fields: [{
          name: "hash",
          type: {
            kind: "string"
          },
          optional: false
        }, {
          name: "type",
          type: {
            kind: "named",
            name: "SuccessorTypeValue"
          },
          optional: false
        }]
      }
    },
    RevisionInfo: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 160
      },
      name: "RevisionInfo",
      definition: {
        kind: "object",
        fields: [{
          name: "author",
          type: {
            kind: "string"
          },
          optional: false
        }, {
          name: "bookmarks",
          type: {
            kind: "array",
            type: {
              kind: "string"
            }
          },
          optional: false
        }, {
          name: "branch",
          type: {
            kind: "string"
          },
          optional: false
        }, {
          name: "date",
          type: {
            kind: "named",
            name: "Date"
          },
          optional: false
        }, {
          name: "description",
          type: {
            kind: "string"
          },
          optional: false
        }, {
          name: "hash",
          type: {
            kind: "string"
          },
          optional: false
        }, {
          name: "id",
          type: {
            kind: "number"
          },
          optional: false
        }, {
          name: "isHead",
          type: {
            kind: "boolean"
          },
          optional: false
        }, {
          name: "remoteBookmarks",
          type: {
            kind: "array",
            type: {
              kind: "string"
            }
          },
          optional: false
        }, {
          name: "parents",
          type: {
            kind: "array",
            type: {
              kind: "string"
            }
          },
          optional: false
        }, {
          name: "phase",
          type: {
            kind: "named",
            name: "CommitPhaseType"
          },
          optional: false
        }, {
          name: "successorInfo",
          type: {
            kind: "nullable",
            type: {
              kind: "named",
              name: "RevisionSuccessorInfo"
            }
          },
          optional: false
        }, {
          name: "tags",
          type: {
            kind: "array",
            type: {
              kind: "string"
            }
          },
          optional: false
        }, {
          name: "title",
          type: {
            kind: "string"
          },
          optional: false
        }, {
          name: "files",
          type: {
            kind: "array",
            type: {
              kind: "string"
            }
          },
          optional: false
        }]
      }
    },
    RevisionShowInfo: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 178
      },
      name: "RevisionShowInfo",
      definition: {
        kind: "object",
        fields: [{
          name: "diff",
          type: {
            kind: "string"
          },
          optional: false
        }]
      }
    },
    RevisionInfoFetched: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 182
      },
      name: "RevisionInfoFetched",
      definition: {
        kind: "object",
        fields: [{
          name: "revisions",
          type: {
            kind: "array",
            type: {
              kind: "named",
              name: "RevisionInfo"
            }
          },
          optional: false
        }, {
          name: "fromFilesystem",
          type: {
            kind: "boolean"
          },
          optional: false
        }]
      }
    },
    AsyncExecuteRet: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 187
      },
      name: "AsyncExecuteRet",
      definition: {
        kind: "object",
        fields: [{
          name: "command",
          type: {
            kind: "string"
          },
          optional: true
        }, {
          name: "errorMessage",
          type: {
            kind: "string"
          },
          optional: true
        }, {
          name: "exitCode",
          type: {
            kind: "number"
          },
          optional: false
        }, {
          name: "stderr",
          type: {
            kind: "string"
          },
          optional: false
        }, {
          name: "stdout",
          type: {
            kind: "string"
          },
          optional: false
        }]
      }
    },
    RevisionFileCopy: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 195
      },
      name: "RevisionFileCopy",
      definition: {
        kind: "object",
        fields: [{
          name: "from",
          type: {
            kind: "named",
            name: "NuclideUri"
          },
          optional: false
        }, {
          name: "to",
          type: {
            kind: "named",
            name: "NuclideUri"
          },
          optional: false
        }]
      }
    },
    RevisionFileChanges: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 200
      },
      name: "RevisionFileChanges",
      definition: {
        kind: "object",
        fields: [{
          name: "all",
          type: {
            kind: "array",
            type: {
              kind: "named",
              name: "NuclideUri"
            }
          },
          optional: false
        }, {
          name: "added",
          type: {
            kind: "array",
            type: {
              kind: "named",
              name: "NuclideUri"
            }
          },
          optional: false
        }, {
          name: "deleted",
          type: {
            kind: "array",
            type: {
              kind: "named",
              name: "NuclideUri"
            }
          },
          optional: false
        }, {
          name: "copied",
          type: {
            kind: "array",
            type: {
              kind: "named",
              name: "RevisionFileCopy"
            }
          },
          optional: false
        }, {
          name: "modified",
          type: {
            kind: "array",
            type: {
              kind: "named",
              name: "NuclideUri"
            }
          },
          optional: false
        }]
      }
    },
    VcsLogEntry: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 208
      },
      name: "VcsLogEntry",
      definition: {
        kind: "object",
        fields: [{
          name: "node",
          type: {
            kind: "string"
          },
          optional: false
        }, {
          name: "author",
          type: {
            kind: "string"
          },
          optional: false
        }, {
          name: "desc",
          type: {
            kind: "string"
          },
          optional: false
        }, {
          name: "date",
          type: {
            kind: "tuple",
            types: [{
              kind: "number"
            }, {
              kind: "number"
            }]
          },
          optional: false
        }]
      }
    },
    VcsLogResponse: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 215
      },
      name: "VcsLogResponse",
      definition: {
        kind: "object",
        fields: [{
          name: "entries",
          type: {
            kind: "array",
            type: {
              kind: "named",
              name: "VcsLogEntry"
            }
          },
          optional: false
        }]
      }
    },
    MergeConflictSideFileData: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 220
      },
      name: "MergeConflictSideFileData",
      definition: {
        kind: "object",
        fields: [{
          name: "contents",
          type: {
            kind: "nullable",
            type: {
              kind: "string"
            }
          },
          optional: false
        }, {
          name: "exists",
          type: {
            kind: "boolean"
          },
          optional: false
        }, {
          name: "isexec",
          type: {
            kind: "nullable",
            type: {
              kind: "boolean"
            }
          },
          optional: false
        }, {
          name: "issymlink",
          type: {
            kind: "nullable",
            type: {
              kind: "boolean"
            }
          },
          optional: false
        }]
      }
    },
    MergeConflictOutputFileData: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 228
      },
      name: "MergeConflictOutputFileData",
      definition: {
        kind: "intersection",
        types: [{
          kind: "named",
          name: "MergeConflictSideFileData"
        }, {
          kind: "object",
          fields: [{
            name: "path",
            type: {
              kind: "named",
              name: "NuclideUri"
            },
            optional: false
          }]
        }],
        flattened: {
          kind: "object",
          fields: [{
            name: "contents",
            type: {
              kind: "nullable",
              type: {
                kind: "string"
              }
            },
            optional: false
          }, {
            name: "exists",
            type: {
              kind: "boolean"
            },
            optional: false
          }, {
            name: "isexec",
            type: {
              kind: "nullable",
              type: {
                kind: "boolean"
              }
            },
            optional: false
          }, {
            name: "issymlink",
            type: {
              kind: "nullable",
              type: {
                kind: "boolean"
              }
            },
            optional: false
          }, {
            name: "path",
            type: {
              kind: "named",
              name: "NuclideUri"
            },
            optional: false
          }]
        }
      }
    },
    MergeConflictFileData: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 232
      },
      name: "MergeConflictFileData",
      definition: {
        kind: "object",
        fields: [{
          name: "base",
          type: {
            kind: "named",
            name: "MergeConflictSideFileData"
          },
          optional: false
        }, {
          name: "local",
          type: {
            kind: "named",
            name: "MergeConflictSideFileData"
          },
          optional: false
        }, {
          name: "other",
          type: {
            kind: "named",
            name: "MergeConflictSideFileData"
          },
          optional: false
        }, {
          name: "output",
          type: {
            kind: "named",
            name: "MergeConflictOutputFileData"
          },
          optional: false
        }, {
          name: "status",
          type: {
            kind: "named",
            name: "MergeConflictStatusValue"
          },
          optional: false
        }, {
          name: "conflictCount",
          type: {
            kind: "number"
          },
          optional: true
        }]
      }
    },
    MergeConflicts: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 241
      },
      name: "MergeConflicts",
      definition: {
        kind: "object",
        fields: [{
          name: "conflicts",
          type: {
            kind: "array",
            type: {
              kind: "named",
              name: "MergeConflictFileData"
            }
          },
          optional: false
        }, {
          name: "command",
          type: {
            kind: "string"
          },
          optional: false
        }, {
          name: "command_details",
          type: {
            kind: "object",
            fields: [{
              name: "cmd",
              type: {
                kind: "string"
              },
              optional: false
            }, {
              name: "to_abort",
              type: {
                kind: "string"
              },
              optional: false
            }, {
              name: "to_continue",
              type: {
                kind: "string"
              },
              optional: false
            }]
          },
          optional: false
        }]
      }
    },
    CheckoutSideName: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 251
      },
      name: "CheckoutSideName",
      definition: {
        kind: "union",
        types: [{
          kind: "string-literal",
          value: "ours"
        }, {
          kind: "string-literal",
          value: "theirs"
        }]
      }
    },
    AmendModeValue: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 253
      },
      name: "AmendModeValue",
      definition: {
        kind: "union",
        types: [{
          kind: "string-literal",
          value: "Clean"
        }, {
          kind: "string-literal",
          value: "Rebase"
        }, {
          kind: "string-literal",
          value: "Fixup"
        }]
      }
    },
    CheckoutOptions: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 255
      },
      name: "CheckoutOptions",
      definition: {
        kind: "object",
        fields: [{
          name: "clean",
          type: {
            kind: "boolean-literal",
            value: true
          },
          optional: true
        }]
      }
    },
    OperationProgressState: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 259
      },
      name: "OperationProgressState",
      definition: {
        kind: "object",
        fields: [{
          name: "active",
          type: {
            kind: "nullable",
            type: {
              kind: "boolean"
            }
          },
          optional: false
        }, {
          name: "estimate_sec",
          type: {
            kind: "nullable",
            type: {
              kind: "number"
            }
          },
          optional: false
        }, {
          name: "estimate_str",
          type: {
            kind: "nullable",
            type: {
              kind: "string"
            }
          },
          optional: false
        }, {
          name: "item",
          type: {
            kind: "nullable",
            type: {
              kind: "string"
            }
          },
          optional: false
        }, {
          name: "pos",
          type: {
            kind: "nullable",
            type: {
              kind: "number"
            }
          },
          optional: false
        }, {
          name: "speed_str",
          type: {
            kind: "nullable",
            type: {
              kind: "string"
            }
          },
          optional: false
        }, {
          name: "topic",
          type: {
            kind: "nullable",
            type: {
              kind: "string"
            }
          },
          optional: false
        }, {
          name: "total",
          type: {
            kind: "nullable",
            type: {
              kind: "number"
            }
          },
          optional: false
        }, {
          name: "unit",
          type: {
            kind: "nullable",
            type: {
              kind: "string"
            }
          },
          optional: false
        }, {
          name: "units_per_sec",
          type: {
            kind: "nullable",
            type: {
              kind: "number"
            }
          },
          optional: false
        }]
      }
    },
    OperationProgress: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 271
      },
      name: "OperationProgress",
      definition: {
        kind: "object",
        fields: [{
          name: "topics",
          type: {
            kind: "array",
            type: {
              kind: "string"
            }
          },
          optional: false
        }, {
          name: "state",
          type: {
            kind: "named",
            name: "Object"
          },
          optional: false
        }]
      }
    },
    HgRepositorySubscriptions: {
      kind: "interface",
      name: "HgRepositorySubscriptions",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 348
      },
      staticMethods: {
        create: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 366
          },
          kind: "function",
          argumentTypes: [{
            name: "workingDirectory",
            type: {
              kind: "string"
            }
          }],
          returnType: {
            kind: "promise",
            type: {
              kind: "named",
              name: "HgRepositorySubscriptions"
            }
          }
        }
      },
      instanceMethods: {
        dispose: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 392
          },
          kind: "function",
          argumentTypes: [],
          returnType: {
            kind: "promise",
            type: {
              kind: "void"
            }
          }
        },
        observeFilesDidChange: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 646
          },
          kind: "function",
          argumentTypes: [],
          returnType: {
            kind: "observable",
            type: {
              kind: "array",
              type: {
                kind: "named",
                name: "NuclideUri"
              }
            }
          }
        },
        observeHgCommitsDidChange: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 654
          },
          kind: "function",
          argumentTypes: [],
          returnType: {
            kind: "observable",
            type: {
              kind: "void"
            }
          }
        },
        observeHgRepoStateDidChange: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 668
          },
          kind: "function",
          argumentTypes: [],
          returnType: {
            kind: "observable",
            type: {
              kind: "void"
            }
          }
        },
        observeHgConflictStateDidChange: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 675
          },
          kind: "function",
          argumentTypes: [],
          returnType: {
            kind: "observable",
            type: {
              kind: "boolean"
            }
          }
        },
        observeHgOperationProgressDidChange: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 683
          },
          kind: "function",
          argumentTypes: [],
          returnType: {
            kind: "observable",
            type: {
              kind: "any"
            }
          }
        },
        observeActiveBookmarkDidChange: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 714
          },
          kind: "function",
          argumentTypes: [],
          returnType: {
            kind: "observable",
            type: {
              kind: "void"
            }
          }
        },
        observeLockFilesDidChange: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 721
          },
          kind: "function",
          argumentTypes: [],
          returnType: {
            kind: "observable",
            type: {
              kind: "map",
              keyType: {
                kind: "string"
              },
              valueType: {
                kind: "boolean"
              }
            }
          }
        },
        observeBookmarksDidChange: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 728
          },
          kind: "function",
          argumentTypes: [],
          returnType: {
            kind: "observable",
            type: {
              kind: "void"
            }
          }
        }
      }
    },
    createRepositorySubscriptions: {
      kind: "function",
      name: "createRepositorySubscriptions",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 733
=======
    fetchDiffInfo: {
      kind: "function",
      name: "fetchDiffInfo",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 735
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 735
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "filePaths",
          type: {
            kind: "array",
            type: {
              kind: "named",
              name: "NuclideUri"
            }
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "nullable",
            type: {
              kind: "map",
              keyType: {
                kind: "named",
                name: "NuclideUri"
              },
              valueType: {
                kind: "named",
                name: "DiffInfo"
              }
            }
          }
        }
      }
    },
    getLockFilesInstantaneousExistance: {
      kind: "function",
      name: "getLockFilesInstantaneousExistance",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 771
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 771
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "string"
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "map",
            keyType: {
              kind: "string"
            },
            valueType: {
              kind: "boolean"
            }
          }
        }
      }
    },
    createBookmark: {
      kind: "function",
      name: "createBookmark",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 784
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 733
=======
          line: 784
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
<<<<<<< HEAD
=======
        }, {
          name: "name",
          type: {
            kind: "string"
          }
        }, {
          name: "revision",
          type: {
            kind: "nullable",
            type: {
              kind: "string"
            }
          }
>>>>>>> Update
        }],
        returnType: {
          kind: "promise",
          type: {
<<<<<<< HEAD
            kind: "named",
            name: "HgRepositorySubscriptions"
=======
            kind: "void"
>>>>>>> Update
          }
        }
      }
    },
<<<<<<< HEAD
    fetchStatuses: {
      kind: "function",
      name: "fetchStatuses",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 746
=======
    deleteBookmark: {
      kind: "function",
      name: "deleteBookmark",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 799
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 746
=======
          line: 799
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
<<<<<<< HEAD
          name: "toRevision",
          type: {
            kind: "nullable",
            type: {
              kind: "string"
            }
          }
        }],
        returnType: {
          kind: "observable",
          type: {
            kind: "map",
            keyType: {
              kind: "named",
              name: "NuclideUri"
            },
            valueType: {
              kind: "named",
              name: "StatusCodeIdValue"
            }
=======
          name: "name",
          type: {
            kind: "string"
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "void"
>>>>>>> Update
          }
        }
      }
    },
<<<<<<< HEAD
    fetchStackStatuses: {
      kind: "function",
      name: "fetchStackStatuses",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 777
=======
    renameBookmark: {
      kind: "function",
      name: "renameBookmark",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 809
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 777
=======
          line: 809
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
<<<<<<< HEAD
        }],
        returnType: {
          kind: "observable",
          type: {
            kind: "map",
            keyType: {
              kind: "named",
              name: "NuclideUri"
            },
            valueType: {
              kind: "named",
              name: "StatusCodeIdValue"
            }
=======
        }, {
          name: "name",
          type: {
            kind: "string"
          }
        }, {
          name: "nextName",
          type: {
            kind: "string"
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "void"
>>>>>>> Update
          }
        }
      }
    },
<<<<<<< HEAD
    fetchHeadStatuses: {
      kind: "function",
      name: "fetchHeadStatuses",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 796
=======
    fetchActiveBookmark: {
      kind: "function",
      name: "fetchActiveBookmark",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 824
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 796
=======
          line: 824
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }],
        returnType: {
<<<<<<< HEAD
          kind: "observable",
          type: {
            kind: "map",
            keyType: {
              kind: "named",
              name: "NuclideUri"
            },
            valueType: {
              kind: "named",
              name: "StatusCodeIdValue"
            }
=======
          kind: "promise",
          type: {
            kind: "string"
>>>>>>> Update
          }
        }
      }
    },
<<<<<<< HEAD
    AdditionalLogFile: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "rpc-types.js",
        line: 31
      },
      name: "AdditionalLogFile",
      definition: {
        kind: "object",
        fields: [{
          name: "title",
=======
    BookmarkInfo: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "types.js",
        line: 46
      },
      name: "BookmarkInfo",
      definition: {
        kind: "object",
        fields: [{
          name: "active",
          type: {
            kind: "boolean"
          },
          optional: false
        }, {
          name: "bookmark",
>>>>>>> Update
          type: {
            kind: "string"
          },
          optional: false
        }, {
<<<<<<< HEAD
          name: "data",
=======
          name: "node",
>>>>>>> Update
          type: {
            kind: "string"
          },
          optional: false
        }]
      }
    },
<<<<<<< HEAD
    DeadlineRequest: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "promise.js",
        line: 210
      },
      name: "DeadlineRequest",
      definition: {
        kind: "number"
      }
    },
    getAdditionalLogFiles: {
      kind: "function",
      name: "getAdditionalLogFiles",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 805
=======
    fetchBookmarks: {
      kind: "function",
      name: "fetchBookmarks",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 835
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 805
=======
          line: 835
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
<<<<<<< HEAD
        }, {
          name: "deadline",
          type: {
            kind: "named",
            name: "DeadlineRequest"
          }
=======
>>>>>>> Update
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "array",
            type: {
              kind: "named",
<<<<<<< HEAD
              name: "AdditionalLogFile"
=======
              name: "BookmarkInfo"
>>>>>>> Update
            }
          }
        }
      }
    },
<<<<<<< HEAD
    fetchDiffInfo: {
      kind: "function",
      name: "fetchDiffInfo",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 890
=======
    fetchFileContentAtRevision: {
      kind: "function",
      name: "fetchFileContentAtRevision",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 852
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 890
=======
          line: 852
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
<<<<<<< HEAD
          name: "filePaths",
          type: {
            kind: "array",
            type: {
              kind: "named",
              name: "NuclideUri"
            }
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "nullable",
            type: {
              kind: "map",
              keyType: {
                kind: "named",
                name: "NuclideUri"
              },
              valueType: {
                kind: "named",
                name: "DiffInfo"
              }
            }
=======
          name: "filePath",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "revision",
          type: {
            kind: "string"
          }
        }],
        returnType: {
          kind: "observable",
          type: {
            kind: "string"
>>>>>>> Update
          }
        }
      }
    },
<<<<<<< HEAD
    getLockFilesInstantaneousExistance: {
      kind: "function",
      name: "getLockFilesInstantaneousExistance",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 926
=======
    batchFetchFileContentsAtRevision: {
      kind: "function",
      name: "batchFetchFileContentsAtRevision",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 864
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 926
=======
          line: 864
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
<<<<<<< HEAD
=======
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "filePaths",
          type: {
            kind: "array",
            type: {
              kind: "named",
              name: "NuclideUri"
            }
          }
        }, {
          name: "revision",
          type: {
>>>>>>> Update
            kind: "string"
          }
        }],
        returnType: {
<<<<<<< HEAD
          kind: "promise",
          type: {
            kind: "map",
            keyType: {
              kind: "string"
            },
            valueType: {
              kind: "boolean"
=======
          kind: "observable",
          type: {
            kind: "map",
            keyType: {
              kind: "named",
              name: "NuclideUri"
            },
            valueType: {
              kind: "string"
>>>>>>> Update
            }
          }
        }
      }
    },
<<<<<<< HEAD
    createBookmark: {
      kind: "function",
      name: "createBookmark",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 939
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 939
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "name",
          type: {
            kind: "string"
          }
        }, {
          name: "revision",
          type: {
            kind: "nullable",
            type: {
              kind: "string"
            }
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "void"
          }
        }
      }
    },
    deleteBookmark: {
      kind: "function",
      name: "deleteBookmark",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 954
=======
    RevisionFileCopy: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "types.js",
        line: 112
      },
      name: "RevisionFileCopy",
      definition: {
        kind: "object",
        fields: [{
          name: "from",
          type: {
            kind: "named",
            name: "NuclideUri"
          },
          optional: false
        }, {
          name: "to",
          type: {
            kind: "named",
            name: "NuclideUri"
          },
          optional: false
        }]
      }
    },
    RevisionFileChanges: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "types.js",
        line: 117
      },
      name: "RevisionFileChanges",
      definition: {
        kind: "object",
        fields: [{
          name: "all",
          type: {
            kind: "array",
            type: {
              kind: "named",
              name: "NuclideUri"
            }
          },
          optional: false
        }, {
          name: "added",
          type: {
            kind: "array",
            type: {
              kind: "named",
              name: "NuclideUri"
            }
          },
          optional: false
        }, {
          name: "deleted",
          type: {
            kind: "array",
            type: {
              kind: "named",
              name: "NuclideUri"
            }
          },
          optional: false
        }, {
          name: "copied",
          type: {
            kind: "array",
            type: {
              kind: "named",
              name: "RevisionFileCopy"
            }
          },
          optional: false
        }, {
          name: "modified",
          type: {
            kind: "array",
            type: {
              kind: "named",
              name: "NuclideUri"
            }
          },
          optional: false
        }]
      }
    },
    fetchFilesChangedAtRevision: {
      kind: "function",
      name: "fetchFilesChangedAtRevision",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 876
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 954
=======
          line: 876
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
<<<<<<< HEAD
          name: "name",
=======
          name: "revision",
>>>>>>> Update
          type: {
            kind: "string"
          }
        }],
        returnType: {
<<<<<<< HEAD
          kind: "promise",
          type: {
            kind: "void"
=======
          kind: "observable",
          type: {
            kind: "named",
            name: "RevisionFileChanges"
>>>>>>> Update
          }
        }
      }
    },
<<<<<<< HEAD
    renameBookmark: {
      kind: "function",
      name: "renameBookmark",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 964
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 964
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "name",
          type: {
            kind: "string"
          }
        }, {
          name: "nextName",
          type: {
            kind: "string"
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "void"
          }
        }
      }
    },
    fetchActiveBookmark: {
      kind: "function",
      name: "fetchActiveBookmark",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 979
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 979
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "string"
          }
        }
      }
    },
    fetchBookmarks: {
      kind: "function",
      name: "fetchBookmarks",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 990
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 990
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "array",
            type: {
              kind: "named",
              name: "BookmarkInfo"
            }
          }
        }
      }
    },
    fetchFileContentAtRevision: {
      kind: "function",
      name: "fetchFileContentAtRevision",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 1007
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 1007
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "filePath",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "revision",
          type: {
            kind: "string"
          }
        }],
        returnType: {
          kind: "observable",
          type: {
            kind: "string"
          }
        }
      }
    },
    batchFetchFileContentsAtRevision: {
      kind: "function",
      name: "batchFetchFileContentsAtRevision",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 1019
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 1019
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "filePaths",
          type: {
            kind: "array",
            type: {
              kind: "named",
              name: "NuclideUri"
            }
          }
        }, {
          name: "revision",
          type: {
            kind: "string"
          }
        }],
        returnType: {
          kind: "observable",
          type: {
            kind: "map",
            keyType: {
              kind: "named",
              name: "NuclideUri"
            },
            valueType: {
              kind: "string"
            }
          }
        }
      }
    },
    fetchFilesChangedAtRevision: {
      kind: "function",
      name: "fetchFilesChangedAtRevision",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 1031
=======
    CommitPhaseType: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "types.js",
        line: 58
      },
      name: "CommitPhaseType",
      definition: {
        kind: "union",
        types: [{
          kind: "string-literal",
          value: "public"
        }, {
          kind: "string-literal",
          value: "draft"
        }, {
          kind: "string-literal",
          value: "secret"
        }]
      }
    },
    SuccessorTypeValue: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "types.js",
        line: 60
      },
      name: "SuccessorTypeValue",
      definition: {
        kind: "union",
        types: [{
          kind: "string-literal",
          value: "public"
        }, {
          kind: "string-literal",
          value: "amend"
        }, {
          kind: "string-literal",
          value: "rebase"
        }, {
          kind: "string-literal",
          value: "split"
        }, {
          kind: "string-literal",
          value: "fold"
        }, {
          kind: "string-literal",
          value: "histedit"
        }, {
          kind: "string-literal",
          value: "rewritten"
        }]
      }
    },
    RevisionSuccessorInfo: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "types.js",
        line: 71
      },
      name: "RevisionSuccessorInfo",
      definition: {
        kind: "object",
        fields: [{
          name: "hash",
          type: {
            kind: "string"
          },
          optional: false
        }, {
          name: "type",
          type: {
            kind: "named",
            name: "SuccessorTypeValue"
          },
          optional: false
        }]
      }
    },
    RevisionInfo: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "types.js",
        line: 76
      },
      name: "RevisionInfo",
      definition: {
        kind: "object",
        fields: [{
          name: "author",
          type: {
            kind: "string"
          },
          optional: false
        }, {
          name: "bookmarks",
          type: {
            kind: "array",
            type: {
              kind: "string"
            }
          },
          optional: false
        }, {
          name: "branch",
          type: {
            kind: "string"
          },
          optional: false
        }, {
          name: "date",
          type: {
            kind: "named",
            name: "Date"
          },
          optional: false
        }, {
          name: "description",
          type: {
            kind: "string"
          },
          optional: false
        }, {
          name: "hash",
          type: {
            kind: "string"
          },
          optional: false
        }, {
          name: "id",
          type: {
            kind: "number"
          },
          optional: false
        }, {
          name: "isHead",
          type: {
            kind: "boolean"
          },
          optional: false
        }, {
          name: "remoteBookmarks",
          type: {
            kind: "array",
            type: {
              kind: "string"
            }
          },
          optional: false
        }, {
          name: "parents",
          type: {
            kind: "array",
            type: {
              kind: "string"
            }
          },
          optional: false
        }, {
          name: "phase",
          type: {
            kind: "named",
            name: "CommitPhaseType"
          },
          optional: false
        }, {
          name: "successorInfo",
          type: {
            kind: "nullable",
            type: {
              kind: "named",
              name: "RevisionSuccessorInfo"
            }
          },
          optional: false
        }, {
          name: "tags",
          type: {
            kind: "array",
            type: {
              kind: "string"
            }
          },
          optional: false
        }, {
          name: "title",
          type: {
            kind: "string"
          },
          optional: false
        }, {
          name: "files",
          type: {
            kind: "array",
            type: {
              kind: "string"
            }
          },
          optional: false
        }, {
          name: "previousHashes",
          type: {
            kind: "array",
            type: {
              kind: "string"
            }
          },
          optional: true
        }]
      }
    },
    fetchRevisionInfoBetweenHeadAndBase: {
      kind: "function",
      name: "fetchRevisionInfoBetweenHeadAndBase",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 889
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 1031
=======
          line: 889
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
<<<<<<< HEAD
        }, {
          name: "revision",
          type: {
            kind: "string"
          }
        }],
        returnType: {
          kind: "observable",
          type: {
            kind: "named",
            name: "RevisionFileChanges"
=======
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "array",
            type: {
              kind: "named",
              name: "RevisionInfo"
            }
>>>>>>> Update
          }
        }
      }
    },
<<<<<<< HEAD
    fetchRevisionInfoBetweenHeadAndBase: {
      kind: "function",
      name: "fetchRevisionInfoBetweenHeadAndBase",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 1044
=======
    fetchHeadRevisionInfo: {
      kind: "function",
      name: "fetchHeadRevisionInfo",
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 901
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 1044
=======
          line: 901
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }],
        returnType: {
<<<<<<< HEAD
          kind: "promise",
=======
          kind: "observable",
>>>>>>> Update
          type: {
            kind: "array",
            type: {
              kind: "named",
              name: "RevisionInfo"
            }
          }
        }
      }
    },
    fetchSmartlogRevisions: {
      kind: "function",
      name: "fetchSmartlogRevisions",
      location: {
        type: "source",
        fileName: "HgService.js",
<<<<<<< HEAD
        line: 1056
=======
        line: 907
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 1056
=======
          line: 907
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }],
        returnType: {
          kind: "observable",
          type: {
            kind: "array",
            type: {
              kind: "named",
              name: "RevisionInfo"
            }
          }
        }
      }
    },
    getBaseRevision: {
      kind: "function",
      name: "getBaseRevision",
      location: {
        type: "source",
        fileName: "HgService.js",
<<<<<<< HEAD
        line: 1065
=======
        line: 916
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 1065
=======
          line: 916
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "named",
            name: "RevisionInfo"
          }
        }
      }
    },
    getBlameAtHead: {
      kind: "function",
      name: "getBlameAtHead",
      location: {
        type: "source",
        fileName: "HgService.js",
<<<<<<< HEAD
        line: 1081
=======
        line: 932
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 1081
=======
          line: 932
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "filePath",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "array",
            type: {
              kind: "nullable",
              type: {
                kind: "named",
                name: "RevisionInfo"
              }
            }
          }
        }
      }
    },
    getConfigValueAsync: {
      kind: "function",
      name: "getConfigValueAsync",
      location: {
        type: "source",
        fileName: "HgService.js",
<<<<<<< HEAD
        line: 1138
=======
        line: 989
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 1138
=======
          line: 989
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "key",
          type: {
            kind: "string"
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "nullable",
            type: {
              kind: "string"
            }
          }
        }
      }
    },
    getDifferentialRevisionForChangeSetId: {
      kind: "function",
      name: "getDifferentialRevisionForChangeSetId",
      location: {
        type: "source",
        fileName: "HgService.js",
<<<<<<< HEAD
        line: 1162
=======
        line: 1013
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 1162
=======
          line: 1013
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "changeSetId",
          type: {
            kind: "string"
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "nullable",
            type: {
              kind: "string"
            }
          }
        }
      }
    },
<<<<<<< HEAD
=======
    AsyncExecuteRet: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "types.js",
        line: 104
      },
      name: "AsyncExecuteRet",
      definition: {
        kind: "object",
        fields: [{
          name: "command",
          type: {
            kind: "string"
          },
          optional: true
        }, {
          name: "errorMessage",
          type: {
            kind: "string"
          },
          optional: true
        }, {
          name: "exitCode",
          type: {
            kind: "number"
          },
          optional: false
        }, {
          name: "stderr",
          type: {
            kind: "string"
          },
          optional: false
        }, {
          name: "stdout",
          type: {
            kind: "string"
          },
          optional: false
        }]
      }
    },
>>>>>>> Update
    getSmartlog: {
      kind: "function",
      name: "getSmartlog",
      location: {
        type: "source",
        fileName: "HgService.js",
<<<<<<< HEAD
        line: 1198
=======
        line: 1049
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 1198
=======
          line: 1049
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "ttyOutput",
          type: {
            kind: "boolean"
          }
        }, {
          name: "concise",
          type: {
            kind: "boolean"
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "named",
            name: "AsyncExecuteRet"
          }
        }
      }
    },
    ProcessExitMessage: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "process.js",
<<<<<<< HEAD
        line: 679
=======
        line: 691
>>>>>>> Update
      },
      name: "ProcessExitMessage",
      definition: {
        kind: "object",
        fields: [{
          name: "kind",
          type: {
            kind: "string-literal",
            value: "exit"
          },
          optional: false
        }, {
          name: "exitCode",
          type: {
            kind: "nullable",
            type: {
              kind: "number"
            }
          },
          optional: false
        }, {
          name: "signal",
          type: {
            kind: "nullable",
            type: {
              kind: "string"
            }
          },
          optional: false
        }]
      }
    },
    ProcessMessage: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "process.js",
<<<<<<< HEAD
        line: 685
=======
        line: 697
>>>>>>> Update
      },
      name: "ProcessMessage",
      definition: {
        kind: "union",
        types: [{
          kind: "object",
          fields: [{
            name: "kind",
            type: {
              kind: "string-literal",
              value: "stdout"
            },
            optional: false
          }, {
            name: "data",
            type: {
              kind: "string"
            },
            optional: false
          }]
        }, {
          kind: "object",
          fields: [{
            name: "kind",
            type: {
              kind: "string-literal",
              value: "stderr"
            },
            optional: false
          }, {
            name: "data",
            type: {
              kind: "string"
            },
            optional: false
          }]
        }, {
          kind: "object",
          fields: [{
            name: "kind",
            type: {
              kind: "string-literal",
              value: "exit"
            },
            optional: false
          }, {
            name: "exitCode",
            type: {
              kind: "nullable",
              type: {
                kind: "number"
              }
            },
            optional: false
          }, {
            name: "signal",
            type: {
              kind: "nullable",
              type: {
                kind: "string"
              }
            },
            optional: false
          }]
        }],
        discriminantField: "kind"
      }
    },
    LegacyProcessMessage: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "process.js",
<<<<<<< HEAD
        line: 698
=======
        line: 710
>>>>>>> Update
      },
      name: "LegacyProcessMessage",
      definition: {
        kind: "union",
        types: [{
          kind: "object",
          fields: [{
            name: "kind",
            type: {
              kind: "string-literal",
              value: "stdout"
            },
            optional: false
          }, {
            name: "data",
            type: {
              kind: "string"
            },
            optional: false
          }]
        }, {
          kind: "object",
          fields: [{
            name: "kind",
            type: {
              kind: "string-literal",
              value: "stderr"
            },
            optional: false
          }, {
            name: "data",
            type: {
              kind: "string"
            },
            optional: false
          }]
        }, {
          kind: "object",
          fields: [{
            name: "kind",
            type: {
              kind: "string-literal",
              value: "exit"
            },
            optional: false
          }, {
            name: "exitCode",
            type: {
              kind: "nullable",
              type: {
                kind: "number"
              }
            },
            optional: false
          }, {
            name: "signal",
            type: {
              kind: "nullable",
              type: {
                kind: "string"
              }
            },
            optional: false
          }]
        }, {
          kind: "object",
          fields: [{
            name: "kind",
            type: {
              kind: "string-literal",
              value: "error"
            },
            optional: false
          }, {
            name: "error",
            type: {
              kind: "named",
              name: "Object"
            },
            optional: false
          }]
        }],
        discriminantField: "kind"
      }
    },
    commit: {
      kind: "function",
      name: "commit",
      location: {
        type: "source",
        fileName: "HgService.js",
<<<<<<< HEAD
        line: 1247
=======
        line: 1093
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 1247
=======
          line: 1093
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "message",
          type: {
            kind: "string"
          }
        }, {
          name: "filePaths",
          type: {
            kind: "nullable",
            type: {
              kind: "array",
              type: {
                kind: "named",
                name: "NuclideUri"
              }
            }
          }
        }],
        returnType: {
          kind: "observable",
          type: {
            kind: "named",
            name: "LegacyProcessMessage"
          }
        }
      }
    },
    editCommitMessage: {
      kind: "function",
      name: "editCommitMessage",
      location: {
        type: "source",
        fileName: "HgService.js",
<<<<<<< HEAD
        line: 1265
=======
        line: 1111
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 1265
=======
          line: 1111
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "revision",
          type: {
            kind: "string"
          }
        }, {
          name: "message",
          type: {
            kind: "string"
          }
        }],
        returnType: {
          kind: "observable",
          type: {
            kind: "named",
            name: "LegacyProcessMessage"
          }
        }
      }
    },
<<<<<<< HEAD
=======
    AmendModeValue: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "types.js",
        line: 170
      },
      name: "AmendModeValue",
      definition: {
        kind: "union",
        types: [{
          kind: "string-literal",
          value: "Clean"
        }, {
          kind: "string-literal",
          value: "Rebase"
        }, {
          kind: "string-literal",
          value: "Fixup"
        }]
      }
    },
>>>>>>> Update
    amend: {
      kind: "function",
      name: "amend",
      location: {
        type: "source",
        fileName: "HgService.js",
<<<<<<< HEAD
        line: 1286
=======
        line: 1132
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 1286
=======
          line: 1132
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "message",
          type: {
            kind: "nullable",
            type: {
              kind: "string"
            }
          }
        }, {
          name: "amendMode",
          type: {
            kind: "named",
            name: "AmendModeValue"
          }
        }, {
          name: "filePaths",
          type: {
            kind: "nullable",
            type: {
              kind: "array",
              type: {
                kind: "named",
                name: "NuclideUri"
              }
            }
          }
        }],
        returnType: {
          kind: "observable",
          type: {
            kind: "named",
            name: "LegacyProcessMessage"
          }
        }
      }
    },
    restack: {
      kind: "function",
      name: "restack",
      location: {
        type: "source",
        fileName: "HgService.js",
<<<<<<< HEAD
        line: 1311
=======
        line: 1157
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 1311
=======
          line: 1157
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }],
        returnType: {
          kind: "observable",
          type: {
            kind: "named",
            name: "LegacyProcessMessage"
          }
        }
      }
    },
    revert: {
      kind: "function",
      name: "revert",
      location: {
        type: "source",
        fileName: "HgService.js",
<<<<<<< HEAD
        line: 1321
=======
        line: 1167
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 1321
=======
          line: 1167
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "filePaths",
          type: {
            kind: "array",
            type: {
              kind: "named",
              name: "NuclideUri"
            }
          }
        }, {
          name: "toRevision",
          type: {
            kind: "nullable",
            type: {
              kind: "string"
            }
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "void"
          }
        }
      }
    },
<<<<<<< HEAD
=======
    CheckoutOptions: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "types.js",
        line: 172
      },
      name: "CheckoutOptions",
      definition: {
        kind: "object",
        fields: [{
          name: "clean",
          type: {
            kind: "boolean-literal",
            value: true
          },
          optional: true
        }]
      }
    },
>>>>>>> Update
    checkout: {
      kind: "function",
      name: "checkout",
      location: {
        type: "source",
        fileName: "HgService.js",
<<<<<<< HEAD
        line: 1361
=======
        line: 1207
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 1361
=======
          line: 1207
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "revision",
          type: {
            kind: "string"
          }
        }, {
          name: "create",
          type: {
            kind: "boolean"
          }
        }, {
          name: "options",
          type: {
            kind: "nullable",
            type: {
              kind: "named",
              name: "CheckoutOptions"
            }
          }
        }],
        returnType: {
          kind: "observable",
          type: {
            kind: "named",
            name: "LegacyProcessMessage"
          }
        }
      }
    },
<<<<<<< HEAD
=======
    RevisionShowInfo: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "types.js",
        line: 95
      },
      name: "RevisionShowInfo",
      definition: {
        kind: "object",
        fields: [{
          name: "diff",
          type: {
            kind: "string"
          },
          optional: false
        }]
      }
    },
>>>>>>> Update
    show: {
      kind: "function",
      name: "show",
      location: {
        type: "source",
        fileName: "HgService.js",
<<<<<<< HEAD
        line: 1378
=======
        line: 1224
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 1378
=======
          line: 1224
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "revision",
          type: {
            kind: "number"
          }
        }],
        returnType: {
          kind: "observable",
          type: {
            kind: "named",
            name: "RevisionShowInfo"
          }
        }
      }
    },
    diff: {
      kind: "function",
      name: "diff",
      location: {
        type: "source",
        fileName: "HgService.js",
<<<<<<< HEAD
        line: 1393
=======
        line: 1239
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 1393
=======
          line: 1239
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "revision",
          type: {
            kind: "string"
          }
        }, {
          name: "unified",
          type: {
            kind: "nullable",
            type: {
              kind: "number"
            }
          }
        }, {
          name: "diffCommitted",
          type: {
            kind: "nullable",
            type: {
              kind: "boolean"
            }
          }
        }, {
          name: "noPrefix",
          type: {
            kind: "nullable",
            type: {
              kind: "boolean"
            }
          }
        }, {
          name: "noDates",
          type: {
            kind: "nullable",
            type: {
              kind: "boolean"
            }
          }
        }],
        returnType: {
          kind: "observable",
          type: {
            kind: "string"
          }
        }
      }
    },
    purge: {
      kind: "function",
      name: "purge",
      location: {
        type: "source",
        fileName: "HgService.js",
<<<<<<< HEAD
        line: 1420
=======
        line: 1266
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 1420
=======
          line: 1266
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "void"
          }
        }
      }
    },
    uncommit: {
      kind: "function",
      name: "uncommit",
      location: {
        type: "source",
        fileName: "HgService.js",
<<<<<<< HEAD
        line: 1427
=======
        line: 1273
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 1427
=======
          line: 1273
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "void"
          }
        }
      }
    },
    strip: {
      kind: "function",
      name: "strip",
      location: {
        type: "source",
        fileName: "HgService.js",
<<<<<<< HEAD
        line: 1434
=======
        line: 1280
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 1434
=======
          line: 1280
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "revision",
          type: {
            kind: "string"
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "void"
          }
        }
      }
    },
    checkoutForkBase: {
      kind: "function",
      name: "checkoutForkBase",
      location: {
        type: "source",
        fileName: "HgService.js",
<<<<<<< HEAD
        line: 1445
=======
        line: 1291
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 1445
=======
          line: 1291
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "void"
          }
        }
      }
    },
    rename: {
      kind: "function",
      name: "rename",
      location: {
        type: "source",
        fileName: "HgService.js",
<<<<<<< HEAD
        line: 1470
=======
        line: 1316
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 1470
=======
          line: 1316
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "filePaths",
          type: {
            kind: "array",
            type: {
              kind: "named",
              name: "NuclideUri"
            }
          }
        }, {
          name: "destPath",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "after",
          type: {
            kind: "nullable",
            type: {
              kind: "boolean"
            }
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "void"
          }
        }
      }
    },
    remove: {
      kind: "function",
      name: "remove",
      location: {
        type: "source",
        fileName: "HgService.js",
<<<<<<< HEAD
        line: 1498
=======
        line: 1344
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 1498
=======
          line: 1344
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "filePaths",
          type: {
            kind: "array",
            type: {
              kind: "named",
              name: "NuclideUri"
            }
          }
        }, {
          name: "after",
          type: {
            kind: "nullable",
            type: {
              kind: "boolean"
            }
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "void"
          }
        }
      }
    },
    forget: {
      kind: "function",
      name: "forget",
      location: {
        type: "source",
        fileName: "HgService.js",
<<<<<<< HEAD
        line: 1524
=======
        line: 1370
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 1524
=======
          line: 1370
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "filePaths",
          type: {
            kind: "array",
            type: {
              kind: "named",
              name: "NuclideUri"
            }
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "void"
          }
        }
      }
    },
    add: {
      kind: "function",
      name: "add",
      location: {
        type: "source",
        fileName: "HgService.js",
<<<<<<< HEAD
        line: 1540
=======
        line: 1386
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 1540
=======
          line: 1386
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "filePaths",
          type: {
            kind: "array",
            type: {
              kind: "named",
              name: "NuclideUri"
            }
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "void"
          }
        }
      }
    },
    getTemplateCommitMessage: {
      kind: "function",
      name: "getTemplateCommitMessage",
      location: {
        type: "source",
        fileName: "HgService.js",
<<<<<<< HEAD
        line: 1547
=======
        line: 1393
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 1547
=======
          line: 1393
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "nullable",
            type: {
              kind: "string"
            }
          }
        }
      }
    },
    getHeadCommitMessage: {
      kind: "function",
      name: "getHeadCommitMessage",
      location: {
        type: "source",
        fileName: "HgService.js",
<<<<<<< HEAD
        line: 1566
=======
        line: 1412
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 1566
=======
          line: 1412
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }],
        returnType: {
          kind: "promise",
          type: {
<<<<<<< HEAD
            kind: "nullable",
            type: {
              kind: "string"
            }
          }
        }
=======
            kind: "nullable",
            type: {
              kind: "string"
            }
          }
        }
      }
    },
    VcsLogEntry: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "types.js",
        line: 125
      },
      name: "VcsLogEntry",
      definition: {
        kind: "object",
        fields: [{
          name: "node",
          type: {
            kind: "string"
          },
          optional: false
        }, {
          name: "author",
          type: {
            kind: "string"
          },
          optional: false
        }, {
          name: "desc",
          type: {
            kind: "string"
          },
          optional: false
        }, {
          name: "date",
          type: {
            kind: "tuple",
            types: [{
              kind: "number"
            }, {
              kind: "number"
            }]
          },
          optional: false
        }]
      }
    },
    VcsLogResponse: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "types.js",
        line: 132
      },
      name: "VcsLogResponse",
      definition: {
        kind: "object",
        fields: [{
          name: "entries",
          type: {
            kind: "array",
            type: {
              kind: "named",
              name: "VcsLogEntry"
            }
          },
          optional: false
        }]
>>>>>>> Update
      }
    },
    log: {
      kind: "function",
      name: "log",
      location: {
        type: "source",
        fileName: "HgService.js",
<<<<<<< HEAD
        line: 1594
=======
        line: 1440
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 1594
=======
          line: 1440
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "filePaths",
          type: {
            kind: "array",
            type: {
              kind: "named",
              name: "NuclideUri"
            }
          }
        }, {
          name: "limit",
          type: {
            kind: "nullable",
            type: {
              kind: "number"
            }
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "named",
            name: "VcsLogResponse"
          }
        }
      }
    },
<<<<<<< HEAD
=======
    MergeConflictSideFileData: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "types.js",
        line: 137
      },
      name: "MergeConflictSideFileData",
      definition: {
        kind: "object",
        fields: [{
          name: "contents",
          type: {
            kind: "nullable",
            type: {
              kind: "string"
            }
          },
          optional: false
        }, {
          name: "exists",
          type: {
            kind: "boolean"
          },
          optional: false
        }, {
          name: "isexec",
          type: {
            kind: "nullable",
            type: {
              kind: "boolean"
            }
          },
          optional: false
        }, {
          name: "issymlink",
          type: {
            kind: "nullable",
            type: {
              kind: "boolean"
            }
          },
          optional: false
        }]
      }
    },
    MergeConflictOutputFileData: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "types.js",
        line: 145
      },
      name: "MergeConflictOutputFileData",
      definition: {
        kind: "intersection",
        types: [{
          kind: "named",
          name: "MergeConflictSideFileData"
        }, {
          kind: "object",
          fields: [{
            name: "path",
            type: {
              kind: "named",
              name: "NuclideUri"
            },
            optional: false
          }]
        }],
        flattened: {
          kind: "object",
          fields: [{
            name: "contents",
            type: {
              kind: "nullable",
              type: {
                kind: "string"
              }
            },
            optional: false
          }, {
            name: "exists",
            type: {
              kind: "boolean"
            },
            optional: false
          }, {
            name: "isexec",
            type: {
              kind: "nullable",
              type: {
                kind: "boolean"
              }
            },
            optional: false
          }, {
            name: "issymlink",
            type: {
              kind: "nullable",
              type: {
                kind: "boolean"
              }
            },
            optional: false
          }, {
            name: "path",
            type: {
              kind: "named",
              name: "NuclideUri"
            },
            optional: false
          }]
        }
      }
    },
    MergeConflictStatusValue: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "types.js",
        line: 20
      },
      name: "MergeConflictStatusValue",
      definition: {
        kind: "union",
        types: [{
          kind: "string-literal",
          value: "both changed"
        }, {
          kind: "string-literal",
          value: "deleted in theirs"
        }, {
          kind: "string-literal",
          value: "deleted in ours"
        }, {
          kind: "string-literal",
          value: "resolved"
        }]
      }
    },
    MergeConflictFileData: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "types.js",
        line: 149
      },
      name: "MergeConflictFileData",
      definition: {
        kind: "object",
        fields: [{
          name: "base",
          type: {
            kind: "named",
            name: "MergeConflictSideFileData"
          },
          optional: false
        }, {
          name: "local",
          type: {
            kind: "named",
            name: "MergeConflictSideFileData"
          },
          optional: false
        }, {
          name: "other",
          type: {
            kind: "named",
            name: "MergeConflictSideFileData"
          },
          optional: false
        }, {
          name: "output",
          type: {
            kind: "named",
            name: "MergeConflictOutputFileData"
          },
          optional: false
        }, {
          name: "status",
          type: {
            kind: "named",
            name: "MergeConflictStatusValue"
          },
          optional: false
        }, {
          name: "conflictCount",
          type: {
            kind: "number"
          },
          optional: true
        }]
      }
    },
    MergeConflicts: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "types.js",
        line: 158
      },
      name: "MergeConflicts",
      definition: {
        kind: "object",
        fields: [{
          name: "conflicts",
          type: {
            kind: "array",
            type: {
              kind: "named",
              name: "MergeConflictFileData"
            }
          },
          optional: false
        }, {
          name: "command",
          type: {
            kind: "string"
          },
          optional: false
        }, {
          name: "command_details",
          type: {
            kind: "object",
            fields: [{
              name: "cmd",
              type: {
                kind: "string"
              },
              optional: false
            }, {
              name: "to_abort",
              type: {
                kind: "string"
              },
              optional: false
            }, {
              name: "to_continue",
              type: {
                kind: "string"
              },
              optional: false
            }]
          },
          optional: false
        }]
      }
    },
>>>>>>> Update
    fetchMergeConflicts: {
      kind: "function",
      name: "fetchMergeConflicts",
      location: {
        type: "source",
        fileName: "HgService.js",
<<<<<<< HEAD
        line: 1618
=======
        line: 1464
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 1618
=======
          line: 1464
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }],
        returnType: {
          kind: "observable",
          type: {
            kind: "nullable",
            type: {
              kind: "named",
              name: "MergeConflicts"
            }
          }
        }
      }
    },
    markConflictedFile: {
      kind: "function",
      name: "markConflictedFile",
      location: {
        type: "source",
        fileName: "HgService.js",
<<<<<<< HEAD
        line: 1666
=======
        line: 1512
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 1666
=======
          line: 1512
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "filePath",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "resolved",
          type: {
            kind: "boolean"
          }
        }],
        returnType: {
          kind: "observable",
          type: {
            kind: "named",
            name: "LegacyProcessMessage"
          }
        }
      }
    },
    continueOperation: {
      kind: "function",
      name: "continueOperation",
      location: {
        type: "source",
        fileName: "HgService.js",
<<<<<<< HEAD
        line: 1681
=======
        line: 1527
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 1681
=======
          line: 1527
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "args",
          type: {
            kind: "array",
            type: {
              kind: "string"
            }
          }
        }],
        returnType: {
          kind: "observable",
          type: {
            kind: "named",
            name: "LegacyProcessMessage"
          }
        }
      }
    },
    abortOperation: {
      kind: "function",
      name: "abortOperation",
      location: {
        type: "source",
        fileName: "HgService.js",
<<<<<<< HEAD
        line: 1693
=======
        line: 1539
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 1693
=======
          line: 1539
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "commandWithOptions",
          type: {
            kind: "array",
            type: {
              kind: "string"
            }
          }
        }],
        returnType: {
          kind: "observable",
          type: {
            kind: "string"
          }
        }
      }
    },
    resolveAllFiles: {
      kind: "function",
      name: "resolveAllFiles",
      location: {
        type: "source",
        fileName: "HgService.js",
<<<<<<< HEAD
        line: 1703
=======
        line: 1549
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 1703
=======
          line: 1549
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }],
        returnType: {
          kind: "observable",
          type: {
            kind: "named",
            name: "LegacyProcessMessage"
          }
        }
      }
    },
    rebase: {
      kind: "function",
      name: "rebase",
      location: {
        type: "source",
        fileName: "HgService.js",
<<<<<<< HEAD
        line: 1713
=======
        line: 1559
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 1713
=======
          line: 1559
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "destination",
          type: {
            kind: "string"
          }
        }, {
          name: "source",
          type: {
            kind: "nullable",
            type: {
              kind: "string"
            }
          }
        }],
        returnType: {
          kind: "observable",
          type: {
            kind: "named",
            name: "LegacyProcessMessage"
          }
        }
      }
    },
    reorderWithinStack: {
      kind: "function",
      name: "reorderWithinStack",
      location: {
        type: "source",
        fileName: "HgService.js",
<<<<<<< HEAD
        line: 1736
=======
        line: 1582
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 1736
=======
          line: 1582
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "orderedRevisions",
          type: {
            kind: "array",
            type: {
              kind: "string"
            }
          }
        }],
        returnType: {
          kind: "observable",
          type: {
            kind: "string"
          }
        }
      }
    },
    pull: {
      kind: "function",
      name: "pull",
      location: {
        type: "source",
        fileName: "HgService.js",
<<<<<<< HEAD
        line: 1761
=======
        line: 1607
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 1761
=======
          line: 1607
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "options",
          type: {
            kind: "array",
            type: {
              kind: "string"
            }
          }
        }],
        returnType: {
          kind: "observable",
          type: {
            kind: "named",
            name: "LegacyProcessMessage"
          }
        }
      }
    },
    copy: {
      kind: "function",
      name: "copy",
      location: {
        type: "source",
        fileName: "HgService.js",
<<<<<<< HEAD
        line: 1779
=======
        line: 1625
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 1779
=======
          line: 1625
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "filePaths",
          type: {
            kind: "array",
            type: {
              kind: "named",
              name: "NuclideUri"
            }
          }
        }, {
          name: "destPath",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "after",
          type: {
            kind: "nullable",
            type: {
              kind: "boolean"
            }
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "void"
          }
        }
      }
    },
    getHeadId: {
      kind: "function",
      name: "getHeadId",
      location: {
        type: "source",
        fileName: "HgService.js",
<<<<<<< HEAD
        line: 1806
=======
        line: 1652
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 1806
=======
          line: 1652
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "useShortHash",
          type: {
            kind: "nullable",
            type: {
              kind: "boolean"
            }
          }
        }],
        returnType: {
          kind: "observable",
          type: {
            kind: "string"
          }
        }
      }
    },
    getFullHashForRevision: {
      kind: "function",
      name: "getFullHashForRevision",
      location: {
        type: "source",
        fileName: "HgService.js",
<<<<<<< HEAD
        line: 1821
=======
        line: 1667
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 1821
=======
          line: 1667
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "rev",
          type: {
            kind: "string"
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "nullable",
            type: {
              kind: "string"
            }
          }
        }
      }
    },
    fold: {
      kind: "function",
      name: "fold",
      location: {
        type: "source",
        fileName: "HgService.js",
<<<<<<< HEAD
        line: 1838
=======
        line: 1684
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 1838
=======
          line: 1684
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "from",
          type: {
            kind: "string"
          }
        }, {
          name: "to",
          type: {
            kind: "string"
          }
        }, {
          name: "message",
          type: {
            kind: "string"
          }
        }],
        returnType: {
          kind: "observable",
          type: {
            kind: "string"
          }
        }
      }
    },
    importPatch: {
      kind: "function",
      name: "importPatch",
      location: {
        type: "source",
        fileName: "HgService.js",
<<<<<<< HEAD
        line: 1857
=======
        line: 1703
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 1857
=======
          line: 1703
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "patch",
          type: {
            kind: "string"
          }
        }, {
          name: "noCommit",
          type: {
            kind: "nullable",
            type: {
              kind: "boolean"
            }
          }
        }],
        returnType: {
          kind: "observable",
          type: {
            kind: "string"
          }
        }
      }
    },
    runCommand: {
      kind: "function",
      name: "runCommand",
      location: {
        type: "source",
        fileName: "HgService.js",
<<<<<<< HEAD
        line: 1874
=======
        line: 1720
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 1874
=======
          line: 1720
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "args",
          type: {
            kind: "array",
            type: {
              kind: "string"
            }
          }
        }],
        returnType: {
          kind: "observable",
          type: {
            kind: "string"
          }
        }
      }
    },
    observeExecution: {
      kind: "function",
      name: "observeExecution",
      location: {
        type: "source",
        fileName: "HgService.js",
<<<<<<< HEAD
        line: 1884
=======
        line: 1730
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 1884
=======
          line: 1730
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "args",
          type: {
            kind: "array",
            type: {
              kind: "string"
            }
          }
        }],
        returnType: {
          kind: "observable",
          type: {
            kind: "named",
            name: "LegacyProcessMessage"
          }
        }
      }
    },
    addRemove: {
      kind: "function",
      name: "addRemove",
      location: {
        type: "source",
        fileName: "HgService.js",
<<<<<<< HEAD
        line: 1894
=======
        line: 1740
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 1894
=======
          line: 1740
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "workingDirectory",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }],
        returnType: {
          kind: "observable",
          type: {
            kind: "string"
          }
        }
      }
    },
    gitDiffStrings: {
      kind: "function",
      name: "gitDiffStrings",
      location: {
        type: "source",
        fileName: "HgService.js",
<<<<<<< HEAD
        line: 1905
=======
        line: 1751
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
<<<<<<< HEAD
          line: 1905
=======
          line: 1751
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "oldContents",
          type: {
            kind: "string"
          }
        }, {
          name: "newContents",
          type: {
            kind: "string"
          }
        }],
        returnType: {
          kind: "observable",
          type: {
            kind: "string"
          }
        }
      }
    }
  }
});