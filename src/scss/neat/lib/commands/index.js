(function() {
  var Neat, combine, resolve;

  resolve = require('path').resolve;

  Neat = require('../neat');

  combine = require("../utils/exports").combine;

  module.exports = combine(/\.cmd$/, Neat.paths.map(function(p) {
    return "" + p + "/lib/commands";
  }));

}).call(this);
