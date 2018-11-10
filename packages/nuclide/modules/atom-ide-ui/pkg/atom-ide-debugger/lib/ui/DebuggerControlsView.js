"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _event() {
  const data = require("../../../../../nuclide-commons/event");

  _event = function () {
    return data;
  };

  return data;
}

function _UniversalDisposable() {
  const data = _interopRequireDefault(require("../../../../../nuclide-commons/UniversalDisposable"));

  _UniversalDisposable = function () {
    return data;
  };

  return data;
}

var React = _interopRequireWildcard(require("react"));

<<<<<<< HEAD
function _TruncatedButton() {
  const data = _interopRequireDefault(require("../../../../../nuclide-commons-ui/TruncatedButton"));

  _TruncatedButton = function () {
    return data;
  };

  return data;
}

var _RxMin = require("rxjs/bundles/Rx.min.js");
=======
var _rxjsCompatUmdMin = require("rxjs-compat/bundles/rxjs-compat.umd.min.js");
>>>>>>> Update

function _DebuggerSteppingComponent() {
  const data = _interopRequireDefault(require("./DebuggerSteppingComponent"));

  _DebuggerSteppingComponent = function () {
    return data;
  };

  return data;
}

function _constants() {
  const data = require("../constants");

  _constants = function () {
    return data;
  };

  return data;
}

function _DebuggerControllerView() {
  const data = _interopRequireDefault(require("./DebuggerControllerView"));

  _DebuggerControllerView = function () {
    return data;
  };

  return data;
}

<<<<<<< HEAD
function _goToLocation() {
  const data = require("../../../../../nuclide-commons-atom/go-to-location");

  _goToLocation = function () {
=======
function _DebuggerAddTargetButton() {
  const data = require("./DebuggerAddTargetButton");

  _DebuggerAddTargetButton = function () {
>>>>>>> Update
    return data;
  };

  return data;
}

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
const DEVICE_PANEL_URL = 'atom://nuclide/devices';

=======
>>>>>>> Update
class DebuggerControlsView extends React.PureComponent {
  constructor(props) {
    super(props);
    this._disposables = new (_UniversalDisposable().default)();
    this.state = {
<<<<<<< HEAD
      mode: _constants().DebuggerMode.STOPPED,
      hasDevicePanelService: false
=======
      mode: _constants().DebuggerMode.STOPPED
>>>>>>> Update
    };
  }

  componentDidMount() {
    const {
      service
    } = this.props;

<<<<<<< HEAD
    this._disposables.add(_RxMin.Observable.merge((0, _event().observableFromSubscribeFunction)(service.onDidChangeProcessMode.bind(service)), (0, _event().observableFromSubscribeFunction)(service.viewModel.onDidChangeDebuggerFocus.bind(service.viewModel))).startWith(null).subscribe(() => {
=======
    this._disposables.add(_rxjsCompatUmdMin.Observable.merge((0, _event().observableFromSubscribeFunction)(service.onDidChangeProcessMode.bind(service)), (0, _event().observableFromSubscribeFunction)(service.viewModel.onDidChangeDebuggerFocus.bind(service.viewModel))).startWith(null).subscribe(() => {
>>>>>>> Update
      const {
        viewModel
      } = this.props.service;
      const {
        focusedProcess
      } = viewModel;
      this.setState({
        mode: focusedProcess == null ? _constants().DebuggerMode.STOPPED : focusedProcess.debuggerMode
      });
<<<<<<< HEAD
    }), atom.packages.serviceHub.consume('nuclide.devices', '0.0.0', provider => this.setState({
      hasDevicePanelService: true
    })));
=======
    }));
>>>>>>> Update
  }

  componentWillUnmount() {
    this._dispose();
  }

  _dispose() {
    this._disposables.dispose();
  }

  render() {
    const {
      service
    } = this.props;
    const {
      mode
    } = this.state;
    const debuggerStoppedNotice = mode !== _constants().DebuggerMode.STOPPED ? null : React.createElement("div", {
      className: "debugger-pane-content"
    }, React.createElement("div", {
      className: "debugger-state-notice"
<<<<<<< HEAD
    }, React.createElement("span", null, "The debugger is not attached.")));
    const debuggerRunningNotice = mode !== _constants().DebuggerMode.RUNNING ? null : React.createElement("div", {
      className: "debugger-pane-content"
    }, React.createElement("div", {
      className: "debugger-state-notice"
    }, (service.viewModel.focusedProcess == null || service.viewModel.focusedProcess.configuration.processName == null ? 'The debug target' : service.viewModel.focusedProcess.configuration.processName) + ' is currently running.'));
    const debuggerNotice = mode !== _constants().DebuggerMode.STOPPED ? null : React.createElement("div", {
      className: "padded"
    }, React.createElement(_TruncatedButton().default, {
      onClick: () => atom.commands.dispatch(atom.views.getView(atom.workspace), 'debugger:show-attach-dialog'),
      icon: "nuclicon-debugger",
      label: "Attach debugger..."
    }), React.createElement(_TruncatedButton().default, {
      onClick: () => atom.commands.dispatch(atom.views.getView(atom.workspace), 'debugger:show-launch-dialog'),
      icon: "nuclicon-debugger",
      label: "Launch debugger..."
    }), this.state.hasDevicePanelService ? React.createElement(_TruncatedButton().default, {
      onClick: () => (0, _goToLocation().goToLocation)(DEVICE_PANEL_URL),
      icon: "device-mobile",
      label: "Manage devices..."
    }) : null);
=======
    }, "The debugger is not attached."), React.createElement("div", {
      className: "debugger-state-notice"
    }, (0, _DebuggerAddTargetButton().AddTargetButton)('debugger-buttongroup-center')));

    const running = mode === _constants().DebuggerMode.RUNNING;

    const paused = mode === _constants().DebuggerMode.PAUSED;

    const debuggerRunningNotice = !running && !paused ? null : React.createElement("div", {
      className: "debugger-pane-content"
    }, React.createElement("div", {
      className: "debugger-state-notice"
    }, (service.viewModel.focusedProcess == null || service.viewModel.focusedProcess.configuration.processName == null ? 'The debug target' : service.viewModel.focusedProcess.configuration.processName) + ` is ${running ? 'running' : 'paused'}.`));
>>>>>>> Update
    return React.createElement("div", {
      className: "debugger-container-new"
    }, React.createElement("div", {
      className: "debugger-section-header"
    }, React.createElement(_DebuggerControllerView().default, {
      service: service
    })), React.createElement("div", {
      className: "debugger-section-header debugger-controls-section"
    }, React.createElement(_DebuggerSteppingComponent().default, {
      service: service
<<<<<<< HEAD
    })), debuggerRunningNotice, debuggerStoppedNotice, debuggerNotice);
=======
    })), debuggerRunningNotice, debuggerStoppedNotice);
>>>>>>> Update
  }

}

exports.default = DebuggerControlsView;