# Linked Lists

A linked list is a data structure consisting of a group of nodes which together represent a sequence. Under the simplest form, each node is composed of a data value and a reference (in other words, a link) to the next node in the sequence

## Singly Linked List

In a singly linked list each node in the list stores the contents of the node and a pointer or reference to the next node in the list.

![http://www.lisha.ufsc.br/teaching/sce/ine6511-2003-2/work/gp/lists_files/image001.gif](http://www.lisha.ufsc.br/teaching/sce/ine6511-2003-2/work/gp/lists_files/image001.gif)

### Dynamic vs. Contiguous Arrays
In C and C++, arrays are not dynamic.  You must decide exactly how long an array will be when you create it. Elements must all be of the same type

`int examplearray[99];`

Arrays in C and C++ have one advantage though: looking up any element is quick.  When you create an array of elements, the memory you request is contiguous.  In other words, `examplearray[0]` and `examplearry[1]` are stored right next to each other in memory.  In fact all items in the array are stored next to each other in a line.  Looking up a single item is very fast if you know the index.  The computer just finds the start of the array in memory and then jumps directly from that address to the index you're looking for.  This property makes arrays great for random access but not so great for other tasks.

If you wanted to insert an element into the beginning or middle of the array, you would have to manually move elements over one by one.

### Yay for linked lists!
A Linked List (or Singly Linked List) is another way of organizing a list of elements.

Instead of requesting n contiguous memory locations, you just create n nodes (or vertices) and link them yourself. Each node can be stored anywhere in memory, and you also store where to find the next element in the list in each node.

![](http://geeksforgeeks.org/wp-content/uploads/2009/09/SortedLinked-List.gif)

> The principal benefit of a linked list over a conventional array is that the list elements can easily be inserted or removed without reallocation or reorganization of the entire structure because the data items need not be stored contiguously in memory or on disk, while an array has to be declared in the source code, before compiling and running the program. Linked lists allow insertion and removal of nodes at any point in the list, and can do so with a constant number of operations if the link previous to the link being added or removed is maintained during list traversal.

On the other hand, simple linked lists by themselves do not allow random access to the data, or any form of efficient indexing. Thus, many basic operations — such as obtaining the last node of the list (assuming that the last node is not maintained as separate node reference in the list structure), or finding a node that contains a given datum, or locating the place where a new node should be inserted — may require sequential scanning of most or all of the list elements. The advantages and disadvantages of using linked lists are given below.

### Exercise

Implement `add` and `removeLast` functions for the stubbed out linked list implementation in the Exercises folder. Your methods should pass the included tests (run the tests with mocha).

## Resources:

* Read [Linked Lists in JavaScript](http://www.nczonline.net/blog/2009/04/13/computer-science-in-javascript-linked-list/)
