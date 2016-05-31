# Graphs

---

# Objectives

* Define and describe the relationships depicted in a Graph
* Articulate real world examples of graphs
* Define and describe ways to store a graph in memory

---

## Linear Data Structures Recap

So far we've talked about ***linear data structures***:

* Array
* Linked List
* Stack
* Queue

In all these structures, data is arranged in a sequential manner.

---

### Non-linear Data Structures Recap

We've also talked about a ***non-linear data structure***:

* Tree

<img src="https://upload.wikimedia.org/wikipedia/commons/d/da/Binary_search_tree.svg" style="background: white !important" />

A tree is a hierarchical structure.

---

# What are the properties of a tree?

---

## Tree

* A tree with N nodes has exactly (N-1) edges
* One edge for each parent/child relationship
* All nodes in a tree have a parent, **except** the root node
* All nodes must be reachable from the root
* There must be exactly one path from the root to a given node

---

# Graphs

* Seen all throughout computer science
* Model real world interconnected relationships very well

---

## Graph

* Just like trees, a graph is a collection of objects or entities we call **nodes** or **vertices**
* These nodes are connected together with a set of **edges**
* Unlike a tree, there are _no_ rules dictating the connection between nodes.

<img height="175" src="http://i.imgur.com/8lvkfF9.png" style="background: white !important">

---

### A tree is a _type_ of graph with rules dictating the connection between nodes.

---

## Graph Theory

* Graphs are studied _extensively_ in mathematics
* In computer science, we study and implement this same concept

>A graph `G` is an ordered pair of a set `V` of vertices and a set `E` of edges.

`G = (V, E)`

----

## Ordered Pair

> a pair of mathematical objects, in which the order **matters**

`(V, E)`

Because order matters, `V` is the first object in the pair, and `E` is the second object in the pair

Ordered pair, written with parenthesis:

`(a, b) != (b, a)`

`if a != b`

----

## Unordered pair

> a set of two elements

Order is not important here.

Unordered pair, written with curly braces, also known as a set:

`{a, b} == {b, a}`

---

## Draw this graph

<img height="175" src="http://i.imgur.com/8lvkfF9.png" style="background: white !important">

* Label the vertices in the graph from v1 to v6
* Write the set notation for the vertices in the graph

---

## Edges

Edges in graph can be either **undirected** or **directed**

<img src="http://www.cprogramming.com/tutorial/computersciencetheory/graph.jpg" style="background: white !important">

**Undirected**: Connected vertices represent an unordered pair. No arrow. Direction is implied in both directions.

`{A, B}`

**Directed**: Connected vertices represent an ordered pair. There is an arrow pointing from one vertex to another.

`(A, B), (B, A)`

---

## Undirected Edges

In this example all the edges are undirected (There are no arrows pointing in either direction).

This means connected vertices can be represented as an unordered pair. Order does not matter, and there is a relationship in both directions.

<img height="175" src="http://i.imgur.com/8lvkfF9.png" style="background: white !important">

If we were to label the vertex with 1 as v1 and the vertex 2 as v2, the edge would be represented as `{v1, v2}`

---

## Undirected Edges

<img height="175" src="http://i.imgur.com/8lvkfF9.png" style="background: white !important">

* List all edges in the graph

---

## Directed Edges

In this example all the edges are directed (The arrows are pointing in a specific direction).

This means connected vertices can be represented as an ordered pair. Order matters, and the relationship is from one vertex to another, but not vice versa (unless there are 2 edges).

<img height="175" src="http://i.imgur.com/aIgNHkF.png" style="background: white !important">

If we were to label the vertex with 1 as v1 and the vertex 2 as v2, the edge would be represented as `(v1, v2)`

---

## Directed Edges

<img height="175" src="http://i.imgur.com/aIgNHkF.png" style="background: white !important">

* List all edges in the graph

---

### It is possible to have a graph that has both **undirected** _and_ **directed** edges, but we will only study graphs in which all edges are either directed or undirected

---

## Types of graphs

* A graph with all _directed_ edges is called a directed graph or **digraph**
* A graph with all _undirected_ edges is called an **undirected graph**

---

## What type of graph is this?

<img height="175" src="http://i.imgur.com/aIgNHkF.png" style="background: white !important">

---

## What type of graph is this?

<img height="175" src="http://i.imgur.com/8lvkfF9.png" style="background: white !important">

---

### Graphs can be used to represent any collection of objects having some kind of pairwise relationship

---

## A Social Network

![](https://s3.amazonaws.com/ka-cs-algorithms/social_network.png)

* Undirected graph, because a friendship is a mutual relationship (in most cases 😃)
* Once a system is modeled as a graph, a lot of problems can be solved by applying standard algorithms in graph theory

---

## Suggesting friends

* Suggest friends for Audrey

![](https://s3.amazonaws.com/ka-cs-algorithms/social_network_shortestpath.png)

* One possible approach is to suggest friends of friends who are not connected already

---

### Suggesting Friends: Graph Theory

![](https://s3.amazonaws.com/ka-cs-algorithms/social_network_shortestpath.png)

* This problem in Graph Theory terms would be to find all nodes having a shortest path length from a given node to equal 2.

[Wikipedia Shortest Path Problem](https://en.wikipedia.org/wiki/Shortest_path_problem)

---

## Interlinked Web Pages

<img src="http://i.imgur.com/vBOLar6.png" style="height:175px"/>

* A web page with a unique address (URL) is a node in the graph
* A directed edge is when one web page links to another
* This graph is directed, because the relationship between web pages is not mutual
* If page A links to page B, then it is not necessary that page B will also have a link to A

---

### Interlinked Web Pages: Graph Theory

<img src="http://i.imgur.com/vBOLar6.png" style="height:175px"/>

* Web crawlers: follow all links on a page, and store this information
* Search engines then use this data to provide quick and accurate results against queries
* In graph theory, web crawling would be an example of **graph traversal**, the act of visiting all nodes in a graph

---

### Graphs are used to solve a huge swath of problems:

* Accessible Data Storage (Binary Tree)
* Trees (DOM, XML, etc.)
* Flow Control
* Abstract Syntax Trees (Lexing, JS, etc.)
* Neural Network
etc.

---

# In some graphs, all edges may not be equal

---

## Weighted vs Unweighted

In a weighted graph, we assign values to each edge.

<img height="175" src="http://i.imgur.com/MTZDefT.png" style="background: white !important">

---

## City Network

![](https://s3.amazonaws.com/ka-cs-algorithms/undirected_road_map.png)

* In this case, the weight is the distance between cities
* This graph is undirected, so it is assumed there is a path between cities in both directions

---

### Shortest Distance

![](https://s3.amazonaws.com/ka-cs-algorithms/undirected_road_map.png)

* Find the shortest distance from New York to Reading
* If we were to only consider edges, it would appear to be the same, but if we account for weights (distance), the second path is shorter:
 * New York -> New Haven -> Providence -> Canton -> Weston -> Reading : 255
 * New York -> New Haven -> Hartford -> Sturbridge -> Weston -> Reading : 233

---

### Shortest Distance: Graph Theory

![](https://s3.amazonaws.com/ka-cs-algorithms/undirected_road_map.png)

* In graph theory, this would be a shortest path problem, accounting for edge weights

---

## Cyclic vs Acyclic

A graph is cyclic, if a path can be followed from a node back to the same node, without repeating edges. _At least 1 cycle_

<img height="175" src="http://i.imgur.com/aIgNHkF.png" style="background: white !important">

An acyclic graph is a graph with no cycles.

---

# What is one type of acyclic graph you've seen?

---

# A tree!

---

## Connected vs Disconnected

A disconnected graph is a graph made out of two or more sub-graphs, without a path between the sub-graphs

<img height="175" src="http://i.imgur.com/XiVi0vk.png" style="background: white !important">

* The roads in England and France can be considered a disconnected graph, since they aren't connected by land

---

# Describe the Graphs

---

![](http://www.xatlantis.ch/examples/graphics/graph1_example.png)

---

* Undirected
* Weighted
* Cyclic
* Connected

---

<img src="http://upload.wikimedia.org/wikipedia/commons/a/a0/CPT-Graphs-directed-weighted-ex2.svg" style="background: white;" />

---

* Directed
* Weighted
* Cyclic
* Connected

---

<img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Directed_acyclic_graph.svg" style="background: white;" />

---

* Directed
* Unweighted
* Acyclic
* Connected

---

## Representing a graph in memory

[visualgo](http://visualgo.net/graphds)

---

# Adjacency Matrix

---

### Adjacency Matrix: Undirected Graph

<img src="http://i.imgur.com/yjiu6g3.png" style="height: 300px;background: white;" />

* Use a 2 dimensional array N*N, where N is the number of vertices
* An edge between two vertices i, j, `A[i][j]` is represented as a 1, no edge is a zero

---

### Adjacency Matrix: Directed

<img src="http://i.imgur.com/UNrHEtS.png" style="height: 300px;background: white;" />

* We use 1 for the edge (i, j) and -1 for the edge from (j, i)

---

### Adjacency Matrix: Weighted Directed

<img src="http://i.imgur.com/SIKGgHb.png" style="height: 300px;background: white;" />

* We store the weight of the edge instead of 1

---

# Adjacency List

---

### Adjacency List: Unweighted Directed

<img src="http://i.imgur.com/0ro7KHC.png" style="height: 300px;background: white;" />

* In this case for each vertex we store a linked lists consisting of all of its successors.

---

# Complexity

---

## Complexity

The basic operations of a graph are:

* Adding an edge
* Deleting an edge
* Answering the question "is there an edge between i and j"
* Finding the successors of a given vertex
* Finding (if exists) a path between two vertices

Depending on the representation, these operations have different complexities

---

### Complexity: Adjacency Matrix

* Adding an edge – `O(1)`
* Deleting an edge – `O(1)`
* Answering the question "is there an edge between i and j" – `O(1)`
* Finding the successors of a given vertex – `O(n)`
* Finding (if exists) a path between two vertices – `O(n²)`

---

### Complexity: Adjacency List

* Adding an edge – `O(log(n))`
* Deleting an edge – `O(log(n))`
* Answering the question "is there an edge between i and j" – `O(log(n))`
* Finding the successors of a given vertex – `O(k)`, where "k" is the length of the lists containing the successors of i
* Finding (if exists) a path between two vertices – `O(n+m)` – where `m <= n`;

---

# Review

---

# What is a graph composed of?

---

# What is a directed graph?

---

# What is an undirected graph?

---

## What is the difference between a directed and undirected graph?

---

# What is a cyclic graph?

---

# What is an acyclic graph?

---

## What is the difference between a cyclic and acyclic graph?

---

## What is the difference between a connected and disconnected graph?

---

## What are 2 ways to store a graph in memory?

---

# Objectives

* Define and describe the relationships depicted in a Graph
* Articulate real world examples of graphs
* Define and describe ways to store a graph in memory

---

# Exercise

### Graphs in JavaScript

Run the tests in `test/graph` and make them pass.

You'll be updating `graph/graph.js` to:

- Calculate the size of the graph
- Calculate the number of edges in the graph
- Calculate the total weight of all nodes in the graph
- Given a value, find all neighbors of the node with the given value
- Given two values, find a path between them (array of nodes)
- Find all nodes in the graph that have no edges connecting them

[https://github.com/gSchool/graph-js/tree/master](https://github.com/gSchool/graph-js/tree/master)

### Graphs in python

[https://github.com/gSchool/graphs](https://github.com/gSchool/graphs)

---

# Resources

* [My Code School: Introduction to Graphs](https://www.youtube.com/watch?v=gXgEDyodOJU)
* [Khan Academy: Describing Graphs](https://www.khanacademy.org/computing/computer-science/algorithms/graph-representation/a/describing-graphs)
* [Computer Algorithms: Graphs and their Representation](http://www.stoimen.com/blog/2012/08/31/computer-algorithms-graphs-and-their-representation/)
