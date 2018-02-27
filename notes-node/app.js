const fs = require('fs'); //file system
//const os = require('os'); //os module
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs
    .command('add', 'Add a new note', {
        title: {
            describe: 'Title of Note',
            demand: true,
            alias: 't'
        },
        body: {
            describe: 'Body of Note',
            demand: true,
            alias: 'b'
        }
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note with title', {
        title: {
            describe: 'Title of note to read',
            demand: true,
            alias: 't'
        }
    })
    .command('remove', 'Remove a note with title', {
        title: {
            describe: 'Title of note to remove',
            demand: true,
            alias: 't'
        }
    })
    .help()
    .argv;
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
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach(element => notes.logNote(element));
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