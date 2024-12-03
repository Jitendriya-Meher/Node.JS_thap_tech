const fs = require("fs/promises");
const path = require('path');

const filePath = path.join(__dirname, 'test.txt');

const writeFileEx = async () => {

    try{
        const res = await fs.writeFile(
            filePath,
            'hii i am jitendriya',
            'utf-8'
        );
        console.log('write file = ',res);
    }
    catch(err){
        console.log('writing reading', err.message);
    }

}

writeFileEx();

const readFileEX = async () => {

    try{
        const res = await fs.readFile(filePath, 'utf-8');
        console.log('read file = ',res);
    }
    catch(err){
        console.log('error reading', err.message);
    }

}

readFileEX();


const appendFileEx = async () => {

    try{
        const res = await fs.appendFile(
            filePath,
            '\nhii i am jitendriya 2.0',
            'utf-8'
        );
        console.log('append file = ',res);
    }
    catch(err){
        console.log('append error', err.message);
    }

}

appendFileEx();


const deleteFileEx = async () => {

    try{
        const res = await fs.unlink(
            filePath
        );
        console.log('delete file = ',res);
    }
    catch(err){
        console.log('delete error', err.message);
    }

}

deleteFileEx();