const fs = require('fs'); //file system
//const os = require('os'); //os module
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
var command = process.argv[2];
console.log('Command: ', command);
console.log('process: ', process.argv);
console.log('Yargs: ', argv);

if (command == 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note added');
        notes.logNote(note);
    } else {
        console.log('Note Title already taken');
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    var noteRead = notes.getNote(argv.title);
    if (noteRead) {
        console.log('Note found');
        notes.logNote(noteRead);
    } else {
        console.log('Note not found');
    }
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note does not exist';
    console.log(message);
} else {
    console.log('command not recognized');
}