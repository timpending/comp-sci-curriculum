'use strict'
class Queue {
  constructor() {
    this.dataStore = [];
  }

  enqueue (item) {
    this.dataStore.push(item);
  }

  dequeue () {
    return this.dataStore.shift();
  }

  front () {
    return this.dataStore[0];
  }

  back () {
    return this.dataStore[this.dataStore.length - 1];
  }

  toString () {
    var str;
    this.dataStore.forEach((item) => {
      if(!str) {
        str = item;
      }
      else {
        str += ' ' + item
      }
    });

    return str;
  }

  isEmpty () {
    return this.dataStore.length === 0;
  }
}

module.exports = Queue;
