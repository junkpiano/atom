"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hoveringOrAiming = hoveringOrAiming;

function _event() {
  const data = require("../../../../nuclide-commons/event");

  _event = function () {
    return data;
  };

  return data;
}

<<<<<<< HEAD
var _RxMin = require("rxjs/bundles/Rx.min.js");
=======
var _rxjsCompatUmdMin = require("rxjs-compat/bundles/rxjs-compat.umd.min.js");
>>>>>>> Update

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
const VECTOR_DURATION = 100;

const distance = (a, b) => {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
};

const eventToPoint = e => ({
  x: e.clientX,
  y: e.clientY
}); // Combine mouseenter and mouseleave to create an observable of hovering state.


function areHovering(element, editorElement) {
<<<<<<< HEAD
  return _RxMin.Observable.merge(_RxMin.Observable.fromEvent(element, 'mouseenter').mapTo(true), _RxMin.Observable.fromEvent(element, 'mouseleave').mapTo(false), editorScrolled(editorElement).mapTo(false));
=======
  return _rxjsCompatUmdMin.Observable.merge(_rxjsCompatUmdMin.Observable.fromEvent(element, 'mouseenter').mapTo(true), _rxjsCompatUmdMin.Observable.fromEvent(element, 'mouseleave').mapTo(false), editorScrolled(editorElement).mapTo(false));
>>>>>>> Update
}

function findCorners(node) {
  const {
    left,
    width,
    top,
    height
  } = node.getBoundingClientRect();
  return [{
    x: left,
    y: top
  }, // Top left
  {
    x: left + width,
    y: top
  }, // Top right
  {
    x: left,
    y: top + height
  }, // Bottom left
  {
    x: left + width,
    y: top + height
  }];
}

function areAiming(from, to) {
  const [topLeft, topRight, bottomLeft, bottomRight] = findCorners(to);
  const toBelowFrom = to.getBoundingClientRect().top >= from.getBoundingClientRect().bottom; // For now we assume that `to` is always to the right of `from` and that
  // `from` is always strictly above or below `to`. A more robust solution would
  // be to find the two corner of `to` that form the largest angle from the
  // center of `from`

  const [cornerA, cornerB] = toBelowFrom ? [topRight, bottomLeft] : [topLeft, bottomRight];
<<<<<<< HEAD
  return _RxMin.Observable.fromEvent(document, 'mousemove').map(eventToPoint).auditTime(VECTOR_DURATION).map(mouse => distance(mouse, cornerA) + distance(mouse, cornerB)).pairwise().map(([prevDist, currentDist]) => prevDist > currentDist).distinctUntilChanged();
=======
  return _rxjsCompatUmdMin.Observable.fromEvent(document, 'mousemove').map(eventToPoint).auditTime(VECTOR_DURATION).map(mouse => distance(mouse, cornerA) + distance(mouse, cornerB)).pairwise().map(([prevDist, currentDist]) => prevDist > currentDist).distinctUntilChanged();
>>>>>>> Update
}

function editorScrolled(editorElement) {
  return (0, _event().observableFromSubscribeFunction)(cb => editorElement.onDidChangeScrollTop(cb));
}

function hoveringOrAiming(from, to, editorElement) {
<<<<<<< HEAD
  return _RxMin.Observable.concat(areHovering(from, editorElement).startWith(true).takeWhile(Boolean), _RxMin.Observable.combineLatest(areAiming(from, to).startWith(true), areHovering(to, editorElement).startWith(false), editorScrolled(editorElement).mapTo(true).startWith(false), (aiming, hovering, scrolled) => {
=======
  return _rxjsCompatUmdMin.Observable.concat(areHovering(from, editorElement).startWith(true).takeWhile(Boolean), _rxjsCompatUmdMin.Observable.combineLatest(areAiming(from, to).startWith(true), areHovering(to, editorElement).startWith(false), editorScrolled(editorElement).mapTo(true).startWith(false), (aiming, hovering, scrolled) => {
>>>>>>> Update
    return (aiming || hovering) && !scrolled;
  })).distinctUntilChanged();
}