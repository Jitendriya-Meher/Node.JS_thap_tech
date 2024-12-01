const fs = require('fs');
const path = require('path');

const fileName = 'test.txt';
const filePath = path.join(__dirname, fileName);

console.log('filepath: ', filePath);

const fileData = 'Hii, i am Jitendriya Meher. version 2.0 .';

//* fs.writeFile(): Writes data to a file, replacing the file if it already exists.
//! syntax: fs.writeFile(path, data, options, callback);

//? path: File path to write to.
//? data: Content to write.
//? options: Optional. Specifies encoding ('utf8'), mode, or flag.
//? callback: A function with an err parameter.

const writeFile = fs.writeFile(
    fileName,
    fileData,
    'utf-8',
    (err) => {
        if (err) {
            console.log(`error writing ${fileName}`, err.message);
        }
        else{
            console.log(`success writing ${fileName}`);
        }
    }
);

console.log('writing file ', writeFile);


//* fs.readFile(): Reads the contents of a file asynchronously and returns the data as a buffer or string.
//! syntax: fs.readFile(path, options, callback);

//? path: File path to read from.
//? options: Optional. An object or string specifying the encoding ('utf8') or flag ('r' for reading).
//? callback: A function with parameters (err, data).

const readFile = fs.readFile(
    fileName,
    'utf-8',
    (err,data) => {
        if (err) {
            console.log(`error readFile ${fileName}`, err.message);
        }
        else{
            console.log(`success readFile ${fileName} :`, data);
        }
    }
);

console.log('readFile file ', readFile);

//* fs.appendFile(): Appends data to a file. If the file doesn’t exist, it is created.
//! syntax: fs.appendFile(path, data, options, callback);

const appendData = '\nHii, How are you doing? \nI am fine.'

fs.appendFile(
    filePath,
    appendData,
    'utf-8',
    (err) => {
        if(err){
            console.log("error in appendFile");
        }
        else{
            console.log("success in appendFile");
        }
    }
);


//* fs.unlink(): Deletes a file asynchronously.
//! syntax: fs.unlink(path, callback);

fs.unlink(filePath, (err) => {
  if (err) console.error(err);
  else console.log("File has been Deleted");
});