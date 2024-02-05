#!/usr/bin/node
const fs = require('fs');

// Check if the file path is provided
if (process.argv.length !== 3) {
    console.error('Usage: node 0-readme.js <file_path>');
    process.exit(1);
}

// Get the file path from command line argument
const filePath = process.argv[2];

// Read the content of the file
fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});
