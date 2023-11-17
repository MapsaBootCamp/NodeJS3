import EventEmitter from 'events';

const eventCustom = new EventEmitter(); /// instance

class EventCustomClass extends EventEmitter {
  listen(port, callback) {
    this.counter = 0;
    if (port < 0) return callback('port baiad mosbat bashe');
    callback(null);
    this.marazSalam = setInterval(() => {
      this.counter++;
      if (this.counter > 5) {
        this.unListen();
      }
      this.emit('sayHello', this.counter);
    }, 5000);
  }

  unListen() {
    clearInterval(this.marazSalam);
  }
}

const eventObj = new EventCustomClass();
eventObj.listen(3000, (err) => {
  if (err) {
    console.log(err);
  }
  eventObj.on('sayHello', (count) => {
    console.log('Salam', count);
  });
});

eventCustom.emit('changeShalgham');

setTimeout(() => {
  eventCustom.emit('changeShalgham');
}, 5000);

setTimeout(() => {
  eventCustom.emit('sayHello', 'Mammad');
}, 5000);

eventCustom.on('changeShalgham', () => {
  console.log('pofak beja shalgham');
});

eventCustom.on('changeShalgham', () => {
  console.log('hamoon shalgham');
});

eventCustom.on('sayHello', (userName) => {
  console.log(`Salam ${userName}`);
});

eventCustom.emit('sayHello', 'Gholam');
