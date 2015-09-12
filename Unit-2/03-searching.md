## Some common searching algorithms

#### Linear Search

Linear search or sequential search is a method for finding a particular value in a list, that consists of checking every one of its elements, one at a time and in sequence, until the desired one is found. Linear search is the simplest search algorithm; it is a special case of brute-force search.

Linear search runs on average at O(n)

#### Binary Search

The key here is that we have a array of n element

Binary search or half-interval search algorithm finds the position of a specified input value (the search "key") within an array sorted by key value. For binary search, the array should be arranged in ascending or descending order. In each step, the algorithm compares the search key value with the key value of the middle element of the array. If the keys match, then a matching element has been found and its index, or position, is returned. Otherwise, if the search key is less than the middle element's key, then the algorithm repeats its action on the sub-array to the left of the middle element or, if the search key is greater, on the sub-array to the right. If the remaining array to be searched is empty, then the key cannot be found in the array and a special "not found" indication is returned.

Binary search runs on average at O(log n) -> THIS IS FAST!

## Graph Traversal

Graph traversal is the problem of visiting all the nodes in a graph in a particular manner, updating and/or checking their values along the way. Tree traversal is a special case of graph traversal. Graph traversal is very challenging! The two algorithms we used for traversal are DFS (Depth First Search) and BFS (Breadth First Search)

#### Depth First Search for a Tree (DFS)

One of the most common ways of searching through a graph is using DFS or Depth First Search.

Depth-first search (DFS) is an algorithm for traversing or searching tree or graph data structures. One starts at the root (selecting some arbitrary node as the root in the case of a graph) and explores as far as possible along each branch before backtracking.

Here is an example of DFS in a tree:

![http://upload.wikimedia.org/wikipedia/commons/7/7f/Depth-First-Search.gif](http://upload.wikimedia.org/wikipedia/commons/7/7f/Depth-First-Search.gif)

Sure...but what happens when we are just traversing a graph? This becomes much more difficult! If you're interested in learning how this is done, check out [this](https://www.youtube.com/watch?v=iaBEKo5sM7w) video (make sure you are familiar with the __stack__ data structure).

#### Breadth First Search for a Tree (BFS)

Breadth-first search (BFS) is a strategy for searching in a graph when search is limited to essentially two operations: (a) visit and inspect a node of a graph; (b) gain access to visit the nodes that neighbor the currently visited node. The BFS begins at a root node and inspects all the neighboring nodes. Then for each of those neighbor nodes in turn, it inspects their neighbor nodes which were unvisited, and so on.

Here is an example of BFS in a tree:

![http://upload.wikimedia.org/wikipedia/commons/5/5d/Breadth-First-Search-Algorithm.gif](http://upload.wikimedia.org/wikipedia/commons/5/5d/Breadth-First-Search-Algorithm.gif)

That's cool...but what happens when we are just traversing a graph? This is a serious challenge! If you're interested in learning how this is done, check out [this](https://www.youtube.com/watch?v=QRq6p9s8NVg)   video (make sure you are familiar with the __queue__ data structure).

### So which one is better? BFS or DFS?

From a stackoverflow post [here](http://stackoverflow.com/questions/3332947/when-is-it-practical-to-use-dfs-vs-bfs):

That heavily depends on the structure of the search tree and the number and location of solutions (aka searched-for items). If you know a solution is not far from the root of the tree, a breadth first search (BFS) might be better. If the tree is very deep and solutions are rare, depth first search (DFS) might take an extremely long time, but BFS could be faster. If the tree is very wide, a BFS might need too much memory, so it might be completely impractical. If solutions are frequent but located deep in the tree, BFS could be impractical. If the search tree is very deep you will need to restrict the search depth for depth first search (DFS), anyway (for example with iterative deepening).


### Ok... So I've made it this far, but I'm not good at math so how can I ever learn this stuff?

Sure, there is a decent ammount of math relating to these data structures, algorithms and their runtimes, but a knowledge of calculus or linear algebra is not necessary to answer questions about these algorithms or even understand them conceptually. The most important thing you can take away from this readme is an understanding of __what__ these algorithms and data structures look like and how they work. Without a fundamental knowledge of these algorithms and data structures you have no chance of implementing them let alone understanding them. __MOST IMPORTANTLY - Don't ever let something as silly as thinking "I'm not good at math" stop you from learning about this fascinating area of computer science! Anyone can learn this stuff!__

### So I made it here...what's next?

Once you feel like you have a good understanding of how these data structures and algorithms work, the next step is to try to implement them on your own. Like most coding problems, start by __thinking__ about a solution. Draw some diagrams, write some pseudocode, but by no means jump into Sublime.




## Resources:
* Overview of selected data structures, operations, and their complexity: [http://bigocheatsheet.com/](http://bigocheatsheet.com/)
* The classic Algorithms textbook by Cormen, Leierson, Rivest, and Stein: [http://mitpress.mit.edu/books/introduction-algorithms](http://mitpress.mit.edu/books/introduction-algorithms)
* Good introduction to complexity analysis by Dionysis Zindros [http://discrete.gr/complexity/](http://discrete.gr/complexity/)
* MIT notes on Big O: [http://web.mit.edu/16.070/www/lecture/big_o.pdf](http://web.mit.edu/16.070/www/lecture/big_o.pdf)
* Harvard CS50 Shorts [https://www.youtube.com/playlist?list=PLhQjrBD2T380dhmG9KMjsOQogweyjEeVQ](https://www.youtube.com/playlist?list=PLhQjrBD2T380dhmG9KMjsOQogweyjEeVQ)


https://github.com/gSchool/searching-algorithms
https://github.com/gSchool/fullstack-curriculum/blob/65b3e0072cfe426ea7cda401d0cbdbd783c41090/weekly-g6/week-24/day-2.md
