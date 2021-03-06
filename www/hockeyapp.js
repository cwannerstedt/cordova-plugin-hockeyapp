var exec = require('cordova/exec');

var hockeyapp = {
    start: function(success, failure, token, autoSend) {
        autoSend = (autoSend === true || autoSend === "true") ? true : false;
        exec(success, failure, "HockeyApp", "start", [ token, autoSend.toString() ]);
    },
    feedback: function(success, failure) {
        exec(success, failure, "HockeyApp", "feedback", []);
    },
    forceCrash: function(success, failure) {
        exec(success, failure, "HockeyApp", "forceCrash", []);
    },
    checkForUpdate: function(success, failure) {
        exec(success, failure, "HockeyApp", "checkForUpdate", []);
    }
};

module.exports = hockeyapp;
