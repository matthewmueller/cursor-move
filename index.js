/**
 * Module dependencies
 */

var events = require('events');

/**
 * Export `Cursor`
 */

module.exports = Cursor;

/**
 * Initialize `Cursor`
 */

function Cursor(el) {
  if (!(this instanceof Cursor)) return new Cursor(el);
  this.fns = [];
  this.events = events(el, this);
  this.events.bind('mouseup', 'onmove');
  this.events.bind('touchend', 'onmove');
  this.events.bind('keyup', 'onmove');
}

/**
 * move
 */

Cursor.prototype.move = function(fn) {
  this.fns.push(fn);
  return this;
};

/**
 * onmove
 */

Cursor.prototype.onmove = function(e) {
  for (var i = 0, fn; fn = this.fns[i]; i++) fn(e);
};

/**
 * unbind
 */

Cursor.prototype.unbind = function() {
  this.events.unbind();
  return this;
};
