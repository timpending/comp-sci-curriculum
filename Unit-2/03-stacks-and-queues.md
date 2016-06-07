# Stacks and Queues

## Stacks

[Stack](https://en.wikipedia.org/wiki/Stack_(abstract_data_type)) - when both insertion and removal happen from the same end we call this a LIFO (last-in-first-out) structure.

![http://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Data_stack.svg/2000px-Data_stack.svg.png](http://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Data_stack.svg/2000px-Data_stack.svg.png)

You can think of a stack simply as some items stacked on top of each other just like these cups!

![http://files.mom.me/photos/2012/05/22/6-3681-stacked_cups-1337654706.jpg](http://files.mom.me/photos/2012/05/22/6-3681-stacked_cups-1337654706.jpg)

### Examples

Where do we see stacks in the real world?

- How about the [call stack](http://en.wikipedia.org/wiki/Call_stack)?
- The 'undo' command in a text editor can be modeled with a stack.
- We use stacks to help in the implementation of more complex data structures and algorithms
- A stack is an extremely useful and efficient data structure for solving algorithms like figuring out a palindrome.
- Typical application areas include compilers, operating systems, handling of program memory (nested function calls)


## Queues

[Queue](https://en.wikipedia.org/wiki/Queue_(abstract_data_type)) - when insertion must happen from rear/tail end of queue and removal must happen from front/head, we call this a FIFO (first-in-first-out) structure.

A Queue is list or collection with the restriction that insertion can be performed at one end and deletion can be performed at the other front

![http://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Data_Queue.svg/2000px-Data_Queue.svg.png](http://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Data_Queue.svg/2000px-Data_Queue.svg.png)

Queue operations - (all [O(1) / Constant Time](https://en.wikipedia.org/wiki/Time_complexity#Constant_time)):
- insertion - enqueue/push/insert
- deletion -  dequeue/pop/remove/delete
- front/peek - find the head element (just return the element at front)
- isEmpty - check if empty
- IsFull - if there is a limited size

![http://goodmenproject.com/wp-content/uploads/2012/09/Screen-Shot-2012-09-15-at-9.16.04-AM.png](http://goodmenproject.com/wp-content/uploads/2012/09/Screen-Shot-2012-09-15-at-9.16.04-AM.png)

### Examples

Where do we use queues?

- Batch processing: For operations where various entities are stored and held to be processed later, the queue performs the function of a buffer.
- Typical application areas include print job scheduling, operating systems (process scheduling).

And remember, the regular Array structure in Javascript is a Stack (first in, last out) and can also be used as a Queue (first in, first out) depending on the calls you make.

## Exercises

Use your linked list implementation to create an implementation of a stack and queue.  There's a test suite for queues in the Exercises folder.
