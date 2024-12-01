const crypto = require('crypto');

const randomValue = crypto.randomBytes(16);

console.log('randomValue = ',randomValue);

console.log('randomValue = ',randomValue.toString());

console.log('randomValue = ',randomValue.toString('hex'));


const hashValue = crypto.createHash('sha256').update('jiksss').digest('hex');

console.log('hashValue = ',hashValue);