"use strict";

// A Quick
var assign = Object.assign || require('./src/utils/object.assign.polyfill');

var commandLineArgumentsResolver = require('./src/resolvers/CommandLineArgumentsResolver');
var environmentVariablesResolver = require('./src/resolvers/EnvironmentVariablesResolver');
var jsonResolver = require('./src/resolvers/JSONResolver');

module.exports.CommandLineArgumentsResolver = commandLineArgumentsResolver;
module.exports.EnvironmentVariablesResolver = environmentVariablesResolver;
module.exports.JSONResolver = jsonResolver;

module.exports.resolve = function() {
    var args = [].slice.call(arguments);
    if (args.length === 0) {
        args = [environmentVariablesResolver, commandLineArgumentsResolver];
    }
    var objects = args.map(function(resolver) { return resolver.call(); });
    return assign.apply(null, objects);
};

console.log(module.exports.resolve());