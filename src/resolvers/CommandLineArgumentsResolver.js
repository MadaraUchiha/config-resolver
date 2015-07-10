'use strict';

var minimist = require('minimist');

module.exports = function() {
    return minimist(process.argv.slice(2));
};