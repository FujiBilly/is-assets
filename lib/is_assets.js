'use strict';

const TypeMap = require('./type');

module.exports = function (data) {
  // return mapping value when receiving string params
  if (typeof data === 'string') {
    return TypeMap[data];
  }

  // return a mapping function when receiving object params
  return function(suffix) {
    const customMap = Object.assign({}, TypeMap, data);
    return customMap[suffix];
  }
}
