const path = require('path');

// __dirname and __filename:

// __dirname gives the directory of the current file.
// __filename gives the full path of the current file including its name.

console.log('dir name :',__dirname);
console.log('file name :',__filename);

// path.join()

// Combines segments into a single path, handling slashes appropriately.

const filePath = path.join('folder','students','data.txt');
console.log('file path join :',filePath);

// path.parse()

// Parses the path string into an object with properties: root, dir, base, ext, and name

const parsePath = path.parse(filePath);
console.log('parsePath = ', parsePath);

// path.resolve()

// Resolves a sequence of paths into an absolute path.

const resolvePath = path.resolve(filePath);
console.log('resolvePath =',resolvePath);

// path.extname()

// Extracts the file extension from a path.

const extname = path.extname(filePath);
console.log('extname = ',extname);

// path.basename()

// Extracts the last part of a path (file name).

const basename = path.basename(filePath);
console.log('basename = ',basename);

// path.dirname()

// Extracts the directory path of the file.

const dirname = path.dirname(filePath);
console.log('dirname = ',dirname);

// The path.sep property in Node.js provides the platform-specific path segment separator:

// On Windows, the path separator is \.
// On POSIX systems (like Linux and macOS), the path separator is /.

const pathSeparator = path.sep;
console.log('pathSeparator = ',pathSeparator);