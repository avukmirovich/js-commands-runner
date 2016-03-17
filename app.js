var run = require('./command-runner');

var cmds = ['echo 1', 'echo 2', 'curl http://ya.ru', 'echo 4', 'echo 5'];

run(cmds);
