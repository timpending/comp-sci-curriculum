# Data Structures

A data structure is a way to store and organize data in a computer, so that it can be used efficiently. The key word here is "efficiently". At the end of the day, we are only interested in data structures that are efficient (we will discuss how we measure efficiency later).

## Objectives
* Learn the concepts behind data structures and algorithms
* Get to a point where you can understand the data structure or algorithm and start thinking how to implement them in your language of choice
* Get you excited and interested about a really cool part of computer science! And if not....understand just why companies ask questions about this stuff.
* Understand more about how computers work and what goes on behind the scenes, especially with memory

With the definition and objectives out of the way, let's think about a data structure we have used since the beginning of our coding journey. How about an Array? An array is a very simple data structure, but what does it do well? What does it not do well? Start here [http://stackoverflow.com/questions/8423493/what-is-the-performance-of-objects-arrays-in-javascript-specifically-for-googl](http://stackoverflow.com/questions/8423493/what-is-the-performance-of-objects-arrays-in-javascript-specifically-for-googl).

### How should you decide which DS to use?

Some questions you have to ask and decisions you have to make are:

- What needs to be stored?
- What are the cost of operations?
- What is the potential memory usage?
- What is the ease of implementation (not always the best question...)?

## Some common data structures

Once again, the most important takeaway you can get from this document is an understand of just __what__ these data structures are. This is called ADT or Abstract Data Structure. When learning about a data structure, the more important thing to remember is that you want to strive to gain an understanding of just __WHAT__ it is before you even think about how to implement one. The descriptions of the following data structures will focus mostly on the definition, application and value. The implementation will be left up to you! Let's start with one of the simplest data structures - linked lists

### Linked Lists

A linked list is a data structure consisting of a group of nodes which together represent a sequence. Under the simplest form, each node is composed of a data and a reference (in other words, a link) to the next node in the sequence

#### Singly Linked List

n a singly linked list each node in the list stores the contents of the node and a pointer or reference to the next node in the list.

![http://www.lisha.ufsc.br/teaching/sce/ine6511-2003-2/work/gp/lists_files/image001.gif](http://www.lisha.ufsc.br/teaching/sce/ine6511-2003-2/work/gp/lists_files/image001.gif)

#### Doubly Linked List

A doubly-linked list is a linked data structure that consists of a set of sequentially linked records called nodes. Each node contains two fields, called links, that are references to the previous and to the next node in the sequence of nodes.

![https://www.cs.auckland.ac.nz/~jmor159/PLDS210/fig/dllist.gif](https://www.cs.auckland.ac.nz/~jmor159/PLDS210/fig/dllist.gif)

### Stacks

Stack - both insertion and removal happen from same end we call this a LIFO (last-in-first-out) structure

![http://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Data_stack.svg/2000px-Data_stack.svg.png](http://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Data_stack.svg/2000px-Data_stack.svg.png)

You can think of a stack simply as some items stacked on top of each other just like these cups!

![http://files.mom.me/photos/2012/05/22/6-3681-stacked_cups-1337654706.jpg](http://files.mom.me/photos/2012/05/22/6-3681-stacked_cups-1337654706.jpg)

### Where do we see stacks in the real world?

- How about the call stack? Remember what that is? [http://en.wikipedia.org/wiki/Call_stack](http://en.wikipedia.org/wiki/Call_stack)
- We use stacks to help in the implementation of more complex data structures and algorithms
- A stack is an extremely useful and efficient data structure for solving algorithms like figuring out a palindrome.
- Typical application areas include compilers, operating systems, handling of program memory (nested function calls)

### Queues

Queue - insertion must happen from rear/tail end of queue and removal must happen from front/head. We call this a FIFO (first-in-first-out) structure

Queue - list or collection with the restriction that insertion ca be performed at one end and deletion can be performed at the other front

Queue operations - These are all O(1)

insertion - enqueue/push/insert
deletion -  dequeue/pop/remove/delete
front/peek - find the head element (just return the element at front)
isEmpty - check if empty
IsFull - if there is a limited size

![http://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Data_Queue.svg/2000px-Data_Queue.svg.png](http://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Data_Queue.svg/2000px-Data_Queue.svg.png)

Or a real life example of a queue

![http://goodmenproject.com/wp-content/uploads/2012/09/Screen-Shot-2012-09-15-at-9.16.04-AM.png](http://goodmenproject.com/wp-content/uploads/2012/09/Screen-Shot-2012-09-15-at-9.16.04-AM.png)

### Where do we use queues?

- Batch processing: For operations where various entities are stored and held to be processed later, the queue performs the function of a buffer.
- Typical application areas include print job scheduling, operating systems (process scheduling).

And remember, the regular Array structure in Javascript is a Stack (first in, last out) and can also be used as a Queue (first in, first out) depending on the calls you make.


### Trees

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

A tree in which each node can have at most 2 children is called a binary tree. This tree gives us a nice structure for very fast search (binary search).

### Trie

Trees can also have nodes with text in them. In computer science, a trie, also called digital tree and sometimes radix tree or prefix tree (as they can be searched by prefixes), is an ordered tree data structure that is used to store strings. Unlike a binary search tree, no node in the tree stores the key associated with that node; instead, its position in the tree defines the key with which it is associated. All the descendants of a node have a common prefix of the string associated with that node, and the root is associated with the empty string

![Trie](https://www.cs.duke.edu/courses/fall12/cps100/Recitations/images/trie.jpg)

Tries are exceptionally powerful and used in dictionary lookups, such as one found on a mobile telephone or for autocompletion and spell-checking.

### Other types of trees

#### B Tree

B-tree is a tree data structure that keeps data sorted and allows searches, sequential access, insertions, and deletions in logarithmic time. The B-tree is a generalization of a binary search tree in that a node can have more than two children (Comer 1979, p. 123). Unlike self-balancing binary search trees, the B-tree is optimized for systems that read and write large blocks of data. It is commonly used in databases and filesystems.

####  AVL Tree

AVL (or height-balanced) binary search tree is any node-based binary search tree that automatically keeps its height (maximal number of levels below the root) small in the face of arbitrary item insertions and deletions

## Graphs

Also a non-linear data structure, a hierarchical structure!

A graph is a collection of objects we call nodes or vertices connect to each other through a set of edges. In a tree there are rules dictating edges, in a graph we have none! In a tree, all nodes must be accessible from the root. So in short, a tree is just a type of graph.

In a graph there are no rules. It has a set of nodes and edges. So if you think about it some more, a tree is a special kind of graph!

##### If you want to get more into the math....

Graph = A graph G is an ordered pair of a set V or vertices and a set of E edges G = (V , E). V is the first object and E is the second

(V, E) is not equal to (E, V) if E is not equal to V

{V, E} is an unordered pair

Nodes can be named V1….Vn

V = {V1, V2…..Vn}

##### moving on...

There are lots of different types of graphs, but here are a few examples.

- Undirected Graph

![http://penguin.ewu.edu/class/cscd320/Topic/Graph/SuppProb/Sahni_17-20a.gif](http://penguin.ewu.edu/class/cscd320/Topic/Graph/SuppProb/Sahni_17-20a.gif)

- Directed Graph

![directed graph](http://upload.wikimedia.org/wikipedia/commons/a/a0/CPT-Graphs-directed-weighted-ex2.svg)

If you're interested in learning more about graphs, check out [this](https://www.youtube.com/watch?v=gXgEDyodOJU&list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P&index=38) video


### Where do we see graphs in the real world?

A social network is an undirected graph -> The Facebook graph API!

* Let's think some more about that? How do you suggest friends? Suggest friends of friends who are not connected (nodes that are not linked).

How about some more examples?

- Interlinked Web Pages - A directed graph! A webpage is a URL, if the page contains a link to another, it has

- Web Crawling - browse pages to collect + store data. Web crawling = Graph Traversal (act of visiting all nodes in a graph).  

-  Graphs are the fundamental data structure for technologies like GPS/Maps how do you pick the best route from one city to another?

Weighted vs. Unweighted Graphs
Some connections are more weighted
roads between cities (are of different lengths)
label edges with weights

Unweighted - weighted where weight is the same (all 1)

Some more examples of weighted vs unweighted and directed vs undirected graphs:

- Intercity Network - Weighted, Undirected graph
- Social Network - Unweighted, Undirected graph
- World Wide Web - Unweighted, Directed graph
- Intracity - Weighted, Directed graph
