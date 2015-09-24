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

![Binary Tree](http://www.cs.cmu.edu/~adamchik/15-121/lectures/Trees/pix/tree1.bmp)

### So where do we see trees in the real world?

Everywhere! Including:

- The file system on your disk is hierarchical data
- Organizing data for quick search insertion deletion, (BST is O(log n))
- Storing dictionary for spellchecking - Trie
- You can see some more [here](http://stackoverflow.com/questions/577659/real-world-examples-of-tree-structures)

### Binary Tree

A tree in which each node can have at most 2 children is called a binary tree.

### Binary Search Tree

A special type of binary tree which maintains a sorted ordering of nodes. A binary search tree maintains the property that for any node, the child to its left is a smaller value and the child to its right is a larger value than itself.  The binary search tree sorted ordering gives us a nice structure for very fast search.  Specifically, if we are looking for a value X and there are N nodes, we only have to look at log(N) numbers of nodes on average.

### Trie

Trees can also have nodes with text in them. In computer science, a trie, also called digital tree and sometimes radix tree or prefix tree (as they can be searched by prefixes), is an ordered tree data structure that is used to store strings. Unlike a binary search tree, no node in the tree stores the key associated with that node; instead, its position in the tree defines the key with which it is associated. All the descendants of a node have a common prefix of the string associated with that node, and the root is associated with the empty string

![Trie](https://www.cs.duke.edu/courses/fall12/cps100/Recitations/images/trie.jpg)

Tries are exceptionally powerful and used in dictionary lookups, such as one found on a mobile telephone or for autocompletion and spell-checking.

### Other types of trees

####  AVL Tree

AVL (or height-balanced) binary search tree is any node-based binary search tree that automatically keeps its height (maximal number of levels below the root) small in the face of arbitrary item insertions and deletions

#### B Tree

B-tree is a tree data structure that keeps data sorted and allows searches, sequential access, insertions, and deletions in logarithmic time. Unlike a binary tree, a node in the B-tree can have much more than two children (Comer 1979, p. 123). Unlike self-balancing binary search trees, the B-tree is optimized for systems that read and write large blocks of data. It is commonly used in databases and filesystems to make lookup of data faster.

## Resources

[https://github.com/gSchool/BinarySearchTreeRuby](https://github.com/gSchool/BinarySearchTreeRuby)

[http://visualgo.net/bst.html](http://visualgo.net/bst.html)
