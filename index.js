const terminalCommands = require('./terminal-commands');

console.log('Creating a new file...');
terminalCommands.touch('new-file.txt');

console.log('Creating a new directory...');
terminalCommands.mkdir('TEST');

console.log('Contents of the current directory');
console.log('\n');
terminalCommands.ls();


