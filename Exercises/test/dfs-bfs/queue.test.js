var Queue = require('../queue');
var chai = require('chai');

var chai = chai.should();

describe('Queue', () => {
  var queue;

  it('should be able to create a queue', () => {
    queue = new Queue();

    queue.dataStore.should.be.a('array');
  });

  it('should be able to enqueue an item', () => {
    queue.enqueue('one');

    queue.dataStore[0].should.be.equal('one');
  });

  it('should remove the first item when multiple items are in the queue', () => {
    queue.enqueue('two');

    queue.dequeue().should.be.equal('one');
    queue.dataStore[0].should.be.equal('two');
  });

  it('should be able to peek at the front item', () => {
    queue.enqueue('three');

    queue.front().should.be.equal('two');
    queue.dataStore.length.should.be.equal(2);
  });

  it('should be able to peek at the back item', () => {
    queue.back().should.be.equal('three');
    queue.dataStore.length.should.be.equal(2);
  });

  it('should be able to print the queue out as a string', () => {
    queue.toString().should.be.equal('two three');
    queue.dataStore.length.should.be.equal(2);
  });

  it('should be able to tell if the queue is empty', () => {
    queue.isEmpty().should.be.false;
    queue.dataStore = [];
    queue.isEmpty().should.be.true;
  });
});
