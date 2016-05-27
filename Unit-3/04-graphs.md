# Graphs

> A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph.

<img height="100" src="http://web.cecs.pdx.edu/~sheard/course/Cs163/Graphics/graph1.png">

[Wikipedia: Graph ADT](https://en.wikipedia.org/wiki/Graph_(abstract_data_type))

A graph is a non-linear, hierarchical structure.

A tree is a special type of graph with rules dictating edges, (e.g. a node can only have 1 incoming edge, and n outgoing edges, 2 outgoing edges in a binary tree) in a graph there are no restrictions on the number of incoming/outgoing edges.

Also in a tree, all nodes must be accessible from the root, this is not the case with graphs.

### This ain't your ancestors' graph!

* Not related to charts, bar graphs, etc.
* Used to define nodes with connecting edges.
* Sometimes referred to as a web outside of Computer Science.

### Used to solve a huge swath of problems:
  * Accessible Data Storage (Binary Tree)
  * Trees (DOM, XML, etc.)
  * Path Finding
  * Linguistics
  * Flow Control
  * Search Engine Ranking
  * Abstract Syntax Trees (Lexing, JS, etc.)
  * Neural Network
  * Bayesian Network
  * etc.

### Nodes and Edges
  * Values - the nodes in a graph have a value
  * Weights - the edges in between nodes _can_ have a weight
  * Directed / Undirected - edges can have an orientation or not (incoming/outgoing)
  * Cyclic / Acyclic - a graph with "cycles" is cyclic, a graph without cycles is acyclic. A cycle is loop, i.e. a node can find a path back to itself

## Types of Graphs

### Undirected Graph

An undirected graph is a graph in which edges have no orientation.

![](http://www.xatlantis.ch/examples/graphics/graph1_example.png)


### Directed Graph

A directed graph or digraph is a graph in which edges have orientations. 

![directed graph](http://upload.wikimedia.org/wikipedia/commons/a/a0/CPT-Graphs-directed-weighted-ex2.svg)

### Directed Acyclic Graph (DAG)

A finite directed graph with no directed cycles.

![](https://upload.wikimedia.org/wikipedia/commons/4/4b/Directed_acyclic_graph.svg)

If you're interested in learning more about graphs, check out [this](https://www.youtube.com/watch?v=gXgEDyodOJU&list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P&index=38) video


### Where do we see graphs in the real world?

A social network is an undirected graph -> The Facebook graph API!

Let's think some more about that:
* How do you suggest friends?
 * Suggest friends of friends who are not connected (nodes that are not linked).

More examples:

* Interlinked Web Pages - A directed graph! A webpage is a URL, if the page contains a link to another, it has
* Web Crawling - browse pages to collect + store data. Web crawling = Graph Traversal (act of visiting all nodes in a graph).  
* Graphs are the fundamental data structure for technologies like GPS/Maps how do you pick the best route from one city to another?

## Weighted vs. Unweighted Graphs

A weighted graph is a graph in which a number (the weight) is assigned to each edge. Such weights might represent for example costs, lengths or capacities, depending on the problem at hand. Some authors call such a graph a network.

In an unweighted graph all edges are equal (no weight assigned).

#### Some Examples:
- Intercity Network - Weighted, Undirected graph
- Social Network - Unweighted, Undirected graph
- World Wide Web - Unweighted, Directed graph
- Intracity - Weighted, Directed graph

## Complexity Analysis

* `V` = Vertices, `E` = Edges
* Time complexity changes based on the backing storage type. We're going to assume an Adjacency List.
* Add Vertex: `O(1)`
* Add Edge: `O(1)`
* Remove Vertex: `O(E)`
* Delete Edge: `O(E)`
* Query if Nodes are adjacent: `O(V)`
* Shortest Path: `O(E+VlogV)` (Dijkstra's)
* Min Span Tree: `O(V`<sup>`2`</sup>`)` (Prim's) 

## More examples:
  * Binary Tree
  * Linear Linked List
  * Finite State Machine ([regexper](http://regexper.com/))
  * Road System
  * Organization Charts

### Graph Exercises

#### Graphs in JavaScript

[https://github.com/gSchool/js_graph](https://github.com/gSchool/js_graph)

https://github.com/gSchool/graph-js/tree/master


#### Graphs in python
https://github.com/gSchool/graphs
