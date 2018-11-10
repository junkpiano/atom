"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LockableHeight = void 0;

var React = _interopRequireWildcard(require("react"));

<<<<<<< HEAD
=======
function _nullthrows() {
  const data = _interopRequireDefault(require("nullthrows"));

  _nullthrows = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

>>>>>>> Update
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
class LockableHeight extends React.Component {
<<<<<<< HEAD
  constructor(props) {
    super(props);
    this.state = {
      lockedHeight: null
    };
=======
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this._root = React.createRef(), this.state = {
      lockedHeight: null
    }, _temp;
>>>>>>> Update
  }

  componentDidMount() {
    if (this.props.isLocked) {
      this.setState({
        lockedHeight: 0
      });
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.isLocked !== nextProps.isLocked) {
<<<<<<< HEAD
      const lockedHeight = nextProps.isLocked ? this._currentHeight() : null;
      this.setState({
        lockedHeight
=======
      this.setState({
        lockedHeight: nextProps.isLocked ? (0, _nullthrows().default)(this._root.current).clientHeight : null
>>>>>>> Update
      });
    }
  }

<<<<<<< HEAD
  _currentHeight() {
    const computedStyle = window.getComputedStyle(this._root);
    return computedStyle.height;
  }

=======
>>>>>>> Update
  render() {
    let style = {};
    let className = null;

    if (this.props.isLocked) {
      const {
        lockedHeight
<<<<<<< HEAD
      } = this.state; // Flexbox supercedes the height attributes, so we use min/max heigh.
=======
      } = this.state; // Flexbox supercedes the height attributes, so we use min/max height.
>>>>>>> Update

      style = {
        maxHeight: lockedHeight,
        minHeight: lockedHeight
      };
      className = 'nuclide-file-tree-locked-height';
    }

    return React.createElement("div", {
      style: style,
      className: className,
<<<<<<< HEAD
      ref: node => {
        // $FlowFixMe(>=0.53.0) Flow suppress
        this._root = node;
      }
=======
      ref: this._root
>>>>>>> Update
    }, this.props.children);
  }

}

exports.LockableHeight = LockableHeight;