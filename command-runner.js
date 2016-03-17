var exec = require('child_process').exec;

module.exports = function(commands) {
    var currentIndex = 0;

    function runCmd() {
        if (currentIndex === commands.length) {
            return;
        }

        exec(commands[currentIndex], function(err, stdout) {
            if (err) {
                console.error(err);
            }

            console.log('Command ' + (currentIndex + 1) + ' called');

            currentIndex++;
            runCmd();
        });
    }

    runCmd();
};
