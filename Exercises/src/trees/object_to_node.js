/*

  A tree can be represented by a single root node that has child nodes,
  which in turn have child nodes etc...

       A
      /\
    B   C
   /\
  D E

  You can represent trees with objects and arrays in various different ways.
  One way looks like this:

  {
    name: 'a',
    children: [
      {
        name: 'b',
        children: [
          {
            name: 'd',
            children: []
          },
          {
            name: 'e',
            children: []
          },
        ]
      },
      {
        name: 'c',
        children: []
      }
    ]
  }

  Your job is to turn an object with the format above into a tree of nodes.

  Imlement this depth-first, using recursion.

*/

var Node = require('./node');
var object = {
  name: 'a',
  children: [
    {
      name: 'b',
      children: [
        {
          name: 'd',
          children: []
        },
        {
          name: 'e',
          children: []
        },
      ]
    },
    {
      name: 'c',
      children: []
    }
  ]
}

//Start on the above file- you'll want to use the class from that file!
//It has properties already set up for you, such as 'name' and 'children'.
//It also has a method, addChild(), which is essential.


//Make sure that this function calls new Node()
var objectToNode = function(object) {
  var node = new Node(object['name']);
  object.children.forEach((chil)=>{
    node.addChild(objectToNode(chil))
  })
  return node
};

// console.log(`node: ${objectToNode(object)}`);

var nodeCount = function(object){
  let count = 1
  var node = new Node(object['name']);
  object.children.forEach((chil)=>{
    if (chil.children.length == 0){
      count++
    } else {
      count+=nodeCount(chil);
    }
    node.addChild(objectToNode(chil))
  })
  return count
};

console.log(nodeCount(object));
// console.log(`nodeCount: ${objectToNode(object)}`);

var treeHeight = function(object){
  let height = 0;
  var node = new Node(object['name']);
  object.children.forEach((chil)=>{
    node.addChild(objectToNode(chil))
    height++
  })
  return height
};

// console.log(`treeHeight: ${treeHeight(object)}`);

module.exports = objectToNode;
