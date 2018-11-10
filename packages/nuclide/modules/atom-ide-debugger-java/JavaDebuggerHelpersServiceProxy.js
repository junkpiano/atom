"use strict";

module.exports = _client => {
  const remoteModule = {};

  remoteModule.getPortForJavaDebugger = function () {
    return _client.callRemoteFunction("JavaDebuggerHelpersService/getPortForJavaDebugger", "promise", _client.marshalArguments(Array.from(arguments), [])).then(value => {
      return _client.unmarshal(value, {
        kind: "number"
      });
    });
  };

  remoteModule.getJavaVSAdapterExecutableInfo = function (arg0) {
    return _client.callRemoteFunction("JavaDebuggerHelpersService/getJavaVSAdapterExecutableInfo", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "debug",
      type: {
        kind: "boolean"
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "named",
        name: "VSAdapterExecutableInfo"
      });
    });
  };

<<<<<<< HEAD
  remoteModule.prepareForTerminalLaunch = function (arg0) {
    return _client.callRemoteFunction("JavaDebuggerHelpersService/prepareForTerminalLaunch", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "config",
      type: {
        kind: "named",
        name: "JavaLaunchTargetConfig"
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "named",
        name: "TerminalLaunchInfo"
      });
    });
  };

  remoteModule.javaDebugWaitForJdwpProcessStart = function (arg0) {
    return _client.callRemoteFunction("JavaDebuggerHelpersService/javaDebugWaitForJdwpProcessStart", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "jvmSuspendArgs",
      type: {
        kind: "string"
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "void"
      });
    });
  };

  remoteModule.javaDebugWaitForJdwpProcessExit = function (arg0) {
    return _client.callRemoteFunction("JavaDebuggerHelpersService/javaDebugWaitForJdwpProcessExit", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "jvmSuspendArgs",
      type: {
        kind: "string"
      }
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "void"
      });
    });
  };

  remoteModule.getSdkVersionSourcePath = function (arg0) {
=======
  remoteModule.getSdkVersionSourcePath = function (arg0, arg1) {
>>>>>>> Update
    return _client.callRemoteFunction("JavaDebuggerHelpersService/getSdkVersionSourcePath", "promise", _client.marshalArguments(Array.from(arguments), [{
      name: "sdkVersion",
      type: {
        kind: "string"
      }
<<<<<<< HEAD
=======
    }, {
      name: "options",
      type: {
        kind: "object",
        fields: [{
          name: "useSdkManager",
          type: {
            kind: "boolean"
          },
          optional: false
        }]
      }
>>>>>>> Update
    }])).then(value => {
      return _client.unmarshal(value, {
        kind: "nullable",
        type: {
          kind: "named",
          name: "NuclideUri"
        }
      });
    });
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
    JavaLaunchTargetConfig: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "JavaDebuggerHelpersService.js",
<<<<<<< HEAD
        line: 24
=======
        line: 23
>>>>>>> Update
      },
      name: "JavaLaunchTargetConfig",
      definition: {
        kind: "object",
        fields: [{
          name: "debugMode",
          type: {
            kind: "string-literal",
            value: "launch"
          },
          optional: false
        }, {
          name: "entryPointClass",
          type: {
            kind: "string"
          },
          optional: false
        }, {
          name: "classPath",
          type: {
            kind: "string"
          },
          optional: false
        }, {
          name: "runArgs",
          type: {
            kind: "nullable",
            type: {
              kind: "array",
              type: {
                kind: "string"
              }
            }
          },
          optional: true
        }]
      }
    },
    JavaAttachPortTargetConfig: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "JavaDebuggerHelpersService.js",
<<<<<<< HEAD
        line: 31
=======
        line: 30
>>>>>>> Update
      },
      name: "JavaAttachPortTargetConfig",
      definition: {
        kind: "object",
        fields: [{
          name: "debugMode",
          type: {
            kind: "string-literal",
            value: "attach"
          },
          optional: false
        }, {
          name: "machineName",
          type: {
            kind: "string"
          },
          optional: false
        }, {
          name: "port",
          type: {
            kind: "number"
          },
          optional: false
        }, {
          name: "packageName",
          type: {
            kind: "string"
          },
          optional: false
        }, {
          name: "deviceSerial",
          type: {
            kind: "string"
          },
          optional: false
        }]
      }
    },
    JavaTargetConfig: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "JavaDebuggerHelpersService.js",
<<<<<<< HEAD
        line: 39
=======
        line: 38
>>>>>>> Update
      },
      name: "JavaTargetConfig",
      definition: {
        kind: "union",
        types: [{
          kind: "object",
          fields: [{
            name: "debugMode",
            type: {
              kind: "string-literal",
              value: "launch"
            },
            optional: false
          }, {
            name: "entryPointClass",
            type: {
              kind: "string"
            },
            optional: false
          }, {
            name: "classPath",
            type: {
              kind: "string"
            },
            optional: false
          }, {
            name: "runArgs",
            type: {
              kind: "nullable",
              type: {
                kind: "array",
                type: {
                  kind: "string"
                }
              }
            },
            optional: true
          }]
        }, {
          kind: "object",
          fields: [{
            name: "debugMode",
            type: {
              kind: "string-literal",
              value: "attach"
            },
            optional: false
          }, {
            name: "machineName",
            type: {
              kind: "string"
            },
            optional: false
          }, {
            name: "port",
            type: {
              kind: "number"
            },
            optional: false
          }, {
            name: "packageName",
            type: {
              kind: "string"
            },
            optional: false
          }, {
            name: "deviceSerial",
            type: {
              kind: "string"
            },
            optional: false
          }]
        }],
        discriminantField: "debugMode"
      }
    },
    TerminalLaunchInfo: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "JavaDebuggerHelpersService.js",
<<<<<<< HEAD
        line: 43
=======
        line: 42
>>>>>>> Update
      },
      name: "TerminalLaunchInfo",
      definition: {
        kind: "object",
        fields: [{
          name: "launchCommand",
          type: {
            kind: "string"
          },
          optional: false
        }, {
          name: "launchCwd",
          type: {
            kind: "named",
            name: "NuclideUri"
          },
          optional: false
        }, {
          name: "targetExecutable",
          type: {
            kind: "named",
            name: "NuclideUri"
          },
          optional: false
        }, {
          name: "launchArgs",
          type: {
            kind: "array",
            type: {
              kind: "string"
            }
          },
          optional: false
        }, {
          name: "attachPort",
          type: {
            kind: "number"
          },
          optional: false
        }, {
          name: "attachHost",
          type: {
            kind: "string"
          },
          optional: false
        }]
      }
    },
    getPortForJavaDebugger: {
      kind: "function",
      name: "getPortForJavaDebugger",
      location: {
        type: "source",
        fileName: "JavaDebuggerHelpersService.js",
<<<<<<< HEAD
        line: 58
=======
        line: 53
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "JavaDebuggerHelpersService.js",
<<<<<<< HEAD
          line: 58
=======
          line: 53
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [],
        returnType: {
          kind: "promise",
          type: {
            kind: "number"
          }
        }
      }
    },
    VSAdapterExecutableInfo: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "types.js",
        line: 35
      },
      name: "VSAdapterExecutableInfo",
      definition: {
        kind: "object",
        fields: [{
          name: "command",
          type: {
            kind: "string"
          },
          optional: false
        }, {
          name: "args",
          type: {
            kind: "array",
            type: {
              kind: "string"
            }
          },
          optional: false
        }, {
          name: "cwd",
          type: {
            kind: "string"
          },
          optional: true
        }, {
          name: "env",
          type: {
            kind: "object",
            fields: []
          },
          optional: true
        }]
      }
    },
    getJavaVSAdapterExecutableInfo: {
      kind: "function",
      name: "getJavaVSAdapterExecutableInfo",
      location: {
        type: "source",
        fileName: "JavaDebuggerHelpersService.js",
<<<<<<< HEAD
        line: 62
=======
        line: 57
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "JavaDebuggerHelpersService.js",
<<<<<<< HEAD
          line: 62
=======
          line: 57
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "debug",
          type: {
            kind: "boolean"
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "named",
            name: "VSAdapterExecutableInfo"
          }
        }
      }
    },
<<<<<<< HEAD
    prepareForTerminalLaunch: {
      kind: "function",
      name: "prepareForTerminalLaunch",
      location: {
        type: "source",
        fileName: "JavaDebuggerHelpersService.js",
        line: 71
      },
      type: {
        location: {
          type: "source",
          fileName: "JavaDebuggerHelpersService.js",
          line: 71
        },
        kind: "function",
        argumentTypes: [{
          name: "config",
          type: {
            kind: "named",
            name: "JavaLaunchTargetConfig"
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "named",
            name: "TerminalLaunchInfo"
          }
        }
      }
    },
    javaDebugWaitForJdwpProcessStart: {
      kind: "function",
      name: "javaDebugWaitForJdwpProcessStart",
      location: {
        type: "source",
        fileName: "JavaDebuggerHelpersService.js",
        line: 99
      },
      type: {
        location: {
          type: "source",
          fileName: "JavaDebuggerHelpersService.js",
          line: 99
        },
        kind: "function",
        argumentTypes: [{
          name: "jvmSuspendArgs",
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
    javaDebugWaitForJdwpProcessExit: {
      kind: "function",
      name: "javaDebugWaitForJdwpProcessExit",
      location: {
        type: "source",
        fileName: "JavaDebuggerHelpersService.js",
        line: 119
      },
      type: {
        location: {
          type: "source",
          fileName: "JavaDebuggerHelpersService.js",
          line: 119
        },
        kind: "function",
        argumentTypes: [{
          name: "jvmSuspendArgs",
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
=======
>>>>>>> Update
    getSdkVersionSourcePath: {
      kind: "function",
      name: "getSdkVersionSourcePath",
      location: {
        type: "source",
        fileName: "JavaDebuggerHelpersService.js",
<<<<<<< HEAD
        line: 228
=======
        line: 131
>>>>>>> Update
      },
      type: {
        location: {
          type: "source",
          fileName: "JavaDebuggerHelpersService.js",
<<<<<<< HEAD
          line: 228
=======
          line: 131
>>>>>>> Update
        },
        kind: "function",
        argumentTypes: [{
          name: "sdkVersion",
          type: {
            kind: "string"
          }
<<<<<<< HEAD
=======
        }, {
          name: "options",
          type: {
            kind: "object",
            fields: [{
              name: "useSdkManager",
              type: {
                kind: "boolean"
              },
              optional: false
            }]
          }
>>>>>>> Update
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "nullable",
            type: {
              kind: "named",
              name: "NuclideUri"
            }
          }
        }
      }
    }
  }
});