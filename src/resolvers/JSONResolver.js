'use strict';

module.exports = function(pathToJsonFile) {
    return function() {
        return require(pathToJsonFile);
    }
};