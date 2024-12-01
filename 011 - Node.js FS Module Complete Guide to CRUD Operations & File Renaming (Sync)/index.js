const fs = require('fs');
const path = require('path');

const fileName = 'test.txt';
const filePath = path.join(__dirname, fileName);

console.log('filepath: ', filePath);

const fileData = 'Hii, i am Jitendriya Meher. version 2.0 .';


//* fs.writeFileSync(): Writes data to a file. If the file does not exist, it will be created. If the file exists, it overwrites the content.
//! syntax: fs.writeFileSync(filePath, data, options);
//? filePath: The file path to write to.
//? data: The content to write to the file.
//? options: Optional. Includes encoding ('utf8'), mode, or flags.
// utf-8 (short for "8-bit Unicode Transformation Format") Encodes characters from nearly all written languages, symbols, and emojis.


const writeFile = fs.writeFileSync(
    fileName,
    fileData,
    'utf-8'
);

console.log('writing file ', writeFile);

//* fs.readFileSync(): Reads a file's content and returns it as a string or Buffer.
//! syntax: const data = fs.readFileSync(filePath, options);
//? filePath: Path of the file to read.
//? options: Optional. Encoding ('utf8') to get data as a string.


const readFile = fs.readFileSync(
    filePath,
    'utf-8'
);

console.log('reading file = ', readFile);


//! Use .toString() if working with binary data (Buffer): For example, if you need both the raw binary data and its string representation.


//* fs.appendFileSync(): Appends data to a file. If the file does not exist, it creates the file.
//! syntax: fs.appendFileSync(filePath, data, options);
//? filePath: File path to append to.
//? data: Content to add to the file.
//? options: Optional. Encoding options ('utf8').


const appendData = '\nHii, How are you doing? \nI am fine.'

const appendFile = fs.appendFileSync(
    filePath,
    appendData,
    'utf-8'
);

console.log('appendFile = ', appendFile);


//* Rename File (fs.renameSync) : Renames a file from one name to another.
//! syntax: fs.renameSync(oldPath, newPath);
//? oldPath: Current file path.
//? newPath: New file path or name.

const newFileName = 'updatedTest.txt';
const newFilePath = path.join(__dirname, newFileName);

const renameFile = fs.renameSync(
    filePath,
    newFileName
);


//* Delete File (fs.unlinkSync()) : Deletes a file by its path.
//! syntax: fs.unlinkSync(filePath);
//? filePath: The path of the file to delete.

const deleteFile = fs.unlinkSync(newFilePath);

console.log('deleteFile : ',deleteFile);