'use strict';

module.exports = function() {
    var args = [].slice.call(arguments);
    return args.reduce(function(result, current) {
        Object.keys(current).forEach(function(key) {
            result[key] = current[key];
        });
        return result;
    });
};