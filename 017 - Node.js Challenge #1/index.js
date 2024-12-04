const EventEmitter = require('events');
const emitter = new EventEmitter();

const eventsSummery = {
    'user-login':0,
    'user-logout':0,
    'user-update':0,
    'user-purchase':0
}

emitter.on('user-login', (name) =>{
    console.log(`User ${name} logged in`);
    eventsSummery['user-login']++;
});

emitter.on('user-logout', (name) =>{
    console.log(`User ${name} logged out`);
    eventsSummery['user-logout']++;
});

emitter.on('user-update', (name,change) =>{
    console.log(`User ${name} Updated ${change}`);
    eventsSummery['user-update']++;
});

emitter.on('user-purchase', (name,item) =>{
    console.log(`User ${name} purchase ${item}`);
    eventsSummery['user-purchase']++;
});

emitter.on('summery', () => {
    console.log('event summery =', eventsSummery)
})

emitter.emit('summery');

emitter.emit('user-login','Jitendriya');
emitter.emit('user-purchase','Jitendriya','Laptop');
emitter.emit('user-update','Jitendriya','email');
emitter.emit('user-update','Jitendriya','address');
emitter.emit('user-logout','Jitendriya');

emitter.emit('summery');