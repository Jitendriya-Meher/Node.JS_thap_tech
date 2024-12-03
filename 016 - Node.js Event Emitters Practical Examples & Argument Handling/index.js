const EventEmitter = require('events');

const emitter = new EventEmitter();


emitter.on('greet' , () => {
    console.log('Hello , World ! ');
});

emitter.emit('greet');


emitter.on('greet2' , (name) => {
    console.log(`Hello , ${name}`);
});

emitter.emit('greet2', 'Jitendriya');


emitter.on('greet3' , (name,title) => {
    console.log(`Hello , ${name} ${title}`);
});

emitter.emit('greet3', 'Jitendriya', 'Meher');


emitter.on('sum' , (arr) => {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    console.log('sum', sum);
});

emitter.emit('sum', [1,2,3,4,5]);


emitter.on('greet4' , (arg) => {
    console.log(`Hello , ${arg.name} ${arg.title}`);
});

emitter.emit('greet4', {
    name:'Jitendriya', 
    title:'Meher'
});
