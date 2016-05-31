var Node = require('../node');
var chai = require('chai');

var should = chai.should();

describe('The Node', () => {
  it('should create a node', () => {
    var node = new Node('foobar');

    node.show().should.be.equal('foobar');
  })
})
