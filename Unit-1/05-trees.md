# Trees

So far the data structures we have seen are linear and/or sequential data structures that have a logical start and end. These include arrays, linked lists, queues, and stacks. Trees are  used to show hierarchical data (and organizational tree, a family tree. When you think about trees, visualize them as upside down with the root at top and going upside down.

In a tree, a collection of entities called nodes are linked together to simulate a hierarchy. It is a non linear data structure and the top most node in the tree is called the root. Nodes can contain any type of data and may contain a link or reference to other nodes which can be called its children

Some tree vocabulary:

- Root - node at the top of the tree
- Parent - node above a node
- Child - nodes below a node
- Grandparent - parent of parent
- Grandchild - child of child
- Sibling - children of same parent
- Leaf - node that does not have a child
- Internal - node that has a child
- Cousin/Uncle - you get the hint…..
- Ancestor/Descendent - same kind of idea….
- Height - Number of edges in longest path from X to a leaf
- Depth - length of the path from root to node X or number of edges in path from root to node X

Some tree facts:

- Height of a tree = longest path of root to leaf
- Link - connection from a node to another node
- In a tree with N nodes, there will always be N-1 edges.



### So where do we see trees in the real world?

Everywhere! Including:

- The file system on your disk is hierarchical data
- Organizing data for quick search insertion deletion, (BST is O(log n))
- Storing dictionary for spellchecking - Trie
- You can see some more [here](http://stackoverflow.com/questions/577659/real-world-examples-of-tree-structures)

### Binary Tree

A tree in which each node can have at most 2 children is called a binary tree.

![Binary Tree](http://www.cs.cmu.edu/~adamchik/15-121/lectures/Trees/pix/tree1.bmp)

### Binary Search Tree

![Binary Search Tree](https://upload.wikimedia.org/wikipedia/commons/d/da/Binary_search_tree.svg)

**Based on these two differences - what do you think a binary search tree is?**

A special type of binary tree which maintains a sorted ordering of nodes. A binary search tree maintains the property that for any node, the child to its left is a smaller value and the child to its right is a larger value than itself.  The binary search tree sorted ordering gives us a nice structure for very fast search.  Specifically, if we are looking for a value X and there are N nodes, we only have to look at log(N) numbers of nodes on average.

### Depth First Search for a Tree (DFS)

One of the most common ways of searching through a tree is using DFS or Depth First Search.

Here is an example of DFS Pre-order for a tree:

![http://upload.wikimedia.org/wikipedia/commons/7/7f/Depth-First-Search.gif](http://upload.wikimedia.org/wikipedia/commons/7/7f/Depth-First-Search.gif)

### Pre-order vs In-order vs Post-order

For DFS, there are actually three ways to perform the operation! As we see in the gif above, the process for searching through the tree looks like this:

1. Create an array called `data` to store our results
2. Create a variable called `current` and set it equal to the root
3. Define a function called `search` that takes in a node as a parameter. Inside of the function
    - push into your `data` array the parameter passed into the function
    - if there is a node to the left, call the `search` function again passing in the node to the left
    - if there is a node to the right, call the `search` function again passing in the node to the right
4. Call the `search` function passing in the value of `current`
4. Return the array

To see the differences between these three, you can read more [here](https://en.wikipedia.org/wiki/Tree_traversal#Depth-first) and [here](// http://datastructuresnotes.blogspot.com/2009/02/binary-tree-traversal-preorder-inorder.html
) 

### Breadth First Search for a Tree (BFS)

Breadth-first search (BFS) is a strategy for searching in a tree in level order. BFS begins at a root node and inspects all the neighboring nodes. Then for each of those neighbor nodes in turn, it inspects their neighbor nodes which were unvisited, and so on. This is commonly implemented with a queue. 

Here is an example of BFS in a tree:

![http://upload.wikimedia.org/wikipedia/commons/5/5d/Breadth-First-Search-Algorithm.gif](http://upload.wikimedia.org/wikipedia/commons/5/5d/Breadth-First-Search-Algorithm.gif)

Here is some potential step by step pseudo code for implementing BFS (with a return value of an array of all the nodes - this can also be done with a callback for additional functionality)

1. Create an array called `data` to store our results
2. Create a variable called `node` and set its value to be the root
3. Add this variable to your queue
4. Loop through your queue (as long as there is something in it)
    - remove the first item in your queue (remember it is a FIFO structure)
    - push into the `data` array the value what has been dequeued
    - if there is a node to the left, add that node to the queue
    - if there is a node to the right, add that node to the queue
5. Return the array of data

#### So which one is better? BFS or DFS?

From a stackoverflow post [here](http://stackoverflow.com/questions/3332947/when-is-it-practical-to-use-dfs-vs-bfs):

That heavily depends on the structure of the search tree and the number and location of solutions (aka searched-for items). If you know a solution is not far from the root of the tree, a breadth first search (BFS) might be better. If the tree is very deep and solutions are rare, depth first search (DFS) might take an extremely long time, but BFS could be faster. If the tree is very wide, a BFS might need too much memory, so it might be completely impractical. If solutions are frequent but located deep in the tree, BFS could be impractical. If the search tree is very deep you will need to restrict the search depth for depth first search (DFS), anyway (for example with iterative deepening).

### Trie

Trees can also have nodes with text in them. In computer science, a trie, also called digital tree and sometimes radix tree or prefix tree (as they can be searched by prefixes), is an ordered tree data structure that is used to store strings. Unlike a binary search tree, no node in the tree stores the key associated with that node; instead, its position in the tree defines the key with which it is associated. All the descendants of a node have a common prefix of the string associated with that node, and the root is associated with the empty string

![Trie](http://www.cs.duke.edu/courses/fall12/cps100/Recitations/images/trie.jpg)

Tries are exceptionally powerful and used in dictionary lookups, such as one found on a mobile telephone or for autocompletion and spell-checking.

### Other types of trees

####  AVL Tree

AVL (or height-balanced) binary search tree is any node-based binary search tree that automatically keeps its height (maximal number of levels below the root) small in the face of arbitrary item insertions and deletions

#### B Tree

B-tree is a tree data structure that keeps data sorted and allows searches, sequential access, insertions, and deletions in logarithmic time. Unlike a binary tree, a node in the B-tree can have much more than two children (Comer 1979, p. 123). Unlike self-balancing binary search trees, the B-tree is optimized for systems that read and write large blocks of data. It is commonly used in databases and filesystems to make lookup of data faster.

## Resources + Exercises

[https://github.com/gSchool/binary-tree-js/tree/master](https://github.com/gSchool/binary-tree-js/tree/master)

[https://github.com/gSchool/BinarySearchTreeRuby](https://github.com/gSchool/BinarySearchTreeRuby)

[http://visualgo.net/bst.html](http://visualgo.net/bst.html)
