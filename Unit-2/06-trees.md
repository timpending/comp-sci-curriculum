# Trees

Trees are a common data structure in programming which are __hierarchical__ as opposed to __linear__. Trees are used to model all sorts of things, many of which you've interacted with already such as *filesystems* and the *HTML DOM* in web browsers.

Trees also have powerful specializations, such as Binary Search Trees, which are used to search ordered data; and Tries which are commonly used to encode dictionaries and spell checking algorithms.

## Objectives

* Describe Trees using specific vocabulary.
* Implement a Tree in JavaScript
* Implement some basic tree algorithms, specifically:
  * Depth First Search
  * Breadth First Search

## Linear vs Hierarchical Data Structures

So far the data structures we have seen are linear and/or sequential data structures that have a single starting point, and a single ending point. These linear structures follow a single path from start to end. This single path contains all the elements in the data structure. Linear data structures include arrays, linked lists, queues, and stacks.

[Trees](https://en.wikipedia.org/wiki/Tree_(data_structure) are a data structure used to show hierarchical data. Like Linked Lists, these are modeled as a set of __nodes__ and __references__. Unlike Linked Lists, a node in a tree may have any number of __next references__, which we call __children__. All trees have a single starting point, called the __root node__ and nodes that have no children are called __leaf nodes__.

A Family Tree is a close analogy to trees in the computer science sense. In a family tree a __a parent node__ represents __both__ the mother and father. A leaf node would be a person without children in the biological sense of the word.

When thinking about trees, visualize them with the root at the top. Consider this tree:

![Binary Tree](http://www.cs.cmu.edu/~adamchik/15-121/lectures/Trees/pix/tree1.bmp)

> `8` here is the __root node__. The __root node__ has two __children__ `5` and `4`. This tree has four __leaf nodes__ `9`, `1`, `2`, and `3`, all of which have no children.

## Properties of Trees

In order for a set of __nodes__ and __children__ to be considered a __tree__ it must satisfy some  properties:

* Every node must have exactly one parent,
* Except for the root node which cannot have a parent.

This means that in a Tree there is always a __single path__ from the __root node__ to any other node in the tree.

## Vocabulary

Trees have a lot of __domain specific language__, you may see these terms used:

- Root - node at the top of the tree.
- Parent - node above a node.
- Child - node below a node.
- Link - connection from a node to another node.
- Grandparent - parent of parent.
- Grandchild - child of child.
- Sibling - children of same parent.
- Leaf Node - node that does not have a child.
- Internal Node - node that has a child.
- Ancestor/Descendent - the child or child of a child at any depth.
- Height/Max Depth - Number of edges in longest path from X to a leaf.
- Depth - length of the path from root to node X or number of edges in path from root to node X.

## Practice

For each of these facts, write a paragraph which proves it:

* The __height__ of a tree is equal longest path from root to leaf.
* In a tree with N nodes, there will always be N-1 edges.
* There is always a __single path__ from the __root node__ to any other node in the tree.


## Exercise

# Binary Tree In JavaScript

Make the `binary_tree.test.js` tests pass.  This assignment will require you to implement a binary tree with the following methods.

- `insertIteratively`: inserts a node in the proper location using iteration
- `insertRecursively`: inserts a node in the proper location using recursion
- `containsIteratively`: checks to see if the tree contains a node iteratively
- `containsRecursively`: checks to see if the tree contains a node recursively
- `findLowest`: finds the lowest value in the tree
- `findHighest`: finds the lowest value in the tree
- `breadthFirstSearch`: traverses through the tree and returns an array of all of the values using Breadth First Search (from left to right) - you can read more about it [here](https://en.wikipedia.org/wiki/Tree_traversal#Breadth-first)
- `DFSPreOrder`: traverses through the tree and returns an array of all of the values using Depth First Search Pre-order - you can read more [here](https://en.wikipedia.org/wiki/Tree_traversal#Depth-first)
- `DFSInOrder`: traverses through the tree and returns an array of all of the values using Depth First Search In-order - you can read more [here](https://en.wikipedia.org/wiki/Tree_traversal#Depth-first)
- `DFSPostOrder`: traverses through the tree and returns an array of all of the values using Depth First Search Post-order - you can read more [here](https://en.wikipedia.org/wiki/Tree_traversal#Depth-first)
- `size `: calculates how many nodes are in the tree (do this without adding a size property to your tree! Use a traversal method to calculate this!)

# Depth and breadth search

Make the tests in `bfs-dfs` all pass.

### Stretch

`remove`: removes a node from a binary tree. Remember that this method must take into account if the node has any children and if the node is a leaf. [Here](https://www.youtube.com/watch?v=3TOl3Fv4394) is a great video that explains this process.

Also do all of these:

- https://github.com/gSchool/maze-solvability
- https://github.com/gSchool/text-tree-parser
- https://github.com/gSchool/csv-to-tree
