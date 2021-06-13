const EventEmitter = require('events')
const cat = new EventEmitter();
cat.setMaxListeners(2);

cat.on('meow', () => {
    console.log('Cat might be hungry');
})

cat.on('meow', () => {
    console.log('Cat might want to go outside');
})

cat.on('meow', () => {
    console.log('Cat might want to be petted');
})

console.log(cat.eventNames());

cat.emit('meow');
cat.removeAllListeners();
cat.emit('meow');