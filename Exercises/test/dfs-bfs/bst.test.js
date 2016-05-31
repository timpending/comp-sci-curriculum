var Bst = require('../tree');
var chai = require('chai');

var should = chai.should();

describe('The Binary Search Tree', () => {
  it('should create a empty tree on initialization', () => {
    var bst = new Bst();

    should.equal(bst.root, null);
  });

  describe('Inserting into the tree', () => {
    var bst;

    it('should insert the node into the root if the tree has no current nodes', () => {
      var bst = new Bst();

      bst.insert('foo');
      bst.root.show().should.be.equal('foo');
    });

    before('creating a bst with a single node of 10', () => {
      bst = new Bst();

      bst.insert(10);
    });

    it('given a binary search tree with a single node, inserting a new node that is smaller should appear on the left', () => {
      bst.insert(5);

      bst.root.left.show().should.be.equal(5);
    });

    it('adding 15 should appear on the right now', () => {
      bst.insert(15);

      bst.root.right.show().should.be.equal(15);
    });

    it('adding 1 should be in the appropriate spot', () => {
      bst.insert(1);

      bst.root.left.left.show().should.be.equal(1);
    });

    it('adding 6 should be in the appropriate spot', () => {
      bst.insert(6);

      bst.root.left.right.show().should.be.equal(6);
    });

    it('adding 11 should be in the appropriate spot', () => {
      bst.insert(11);

      bst.root.right.left.show().should.be.equal(11);
    });

    it('adding 16 should be in the appropriate spot', () => {
      bst.insert(16);

      bst.root.right.right.show().should.be.equal(16);
    });
  });
});
