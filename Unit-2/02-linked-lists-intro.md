# Linked Lists

A [linked list](https://en.wikipedia.org/wiki/Linked_list) is a data structure that helps keep an ordered list of data.  The linked list can be thought of as similar to other ordered data structures like arrays.  The key difference is how an array is stored verses a linked list.

## Objectives

By the end of this lesson you should be able to:

1. Implement a singly linked list using JavaScript
1. Write and describe basic algorithms associated with manipulating singly linked lists
1. Reverse a singly linked list in place iteratively and recursively

## Data Structures And Memory

Modern programming languages hide a lot of the complexity of dealing with a computer.  In languages like JavaScript and Ruby we never have to worry about memory allocation, but it is important to know what is going on behind the scenes when you use it.

### Arrays

The JavaScript array appears to hold an infinite amount of data simply by using the `push` method.  However, under the hood, there is a lot more going on.  When you first create an array, JavaScript allocates a certain amount of memory.

![](http://web.cs.ucla.edu/classes/winter12/cs111/scribe/1c/img4.jpg)

If you continue to push data, the allocated memory will eventually run out!  Once the memory runs out, JavaScript is still able to make the array larger, but the operation to make the array larger is [O(n)](https://en.wikipedia.org/wiki/Time_complexity#Linear_time).  The steps are as follows:

* Allocate more memory so we can fit the new item we want to push.
* If the array used to be of size z, an implementation might allocate 2 * z sized memory to leave some room to grow.
* For all n elements in the array, copy the values from the old memory to the new memory.
* Add the new value we want to push to the end of the new array.
* Update the size of the array.
* Delete the old memory

Since the algorithm above iterates over all items in the array, the runtime is O(n).

If the runtime of pushing is important to your program, you may want to use a different data structure.  One option is a **singly linked list**

###Singly Linked List

A singly linked list is stored in memory using references to other memory locations.  In the drawing below, the list looks as if it's all in a line; but, in fact, in memory, the list is scattered all over the place.  The first object could be at a very high memory address and the second object could be at a very low memory address.  The only thing that keeps the list together is the next pointers.  The next pointers are references to where the next element in the linked list list is located.

![](http://www.cs.usfca.edu/~srollins/courses/cs112-f07/web/notes/linkedlists/ll2.gif)

A nice thing about the singly linked list is that inserting at the end of the list is always [O(1)](https://en.wikipedia.org/wiki/Time_complexity#Constant_time).  Why is appending to a singly linked list O(1)? Because a variable, called the tail, is kept that points to the end of the list.  Whenever you need to add or remove an item from the end, you simply have to update the tail.

**EXERCISE**

Look at the implementation of `pop` in the singly linked list.  What is the runtime of `pop`?

### Doubly Linked Lists

A [doubly linked list](https://en.wikipedia.org/wiki/Doubly_linked_list) is a list where each node has two pointers - a next pointer and a previous pointer.  Keeping track of next and previous has some advantages.  For example, the `pop` method is now much easier.  Since we have access to the element before, the operations is [O(1)](https://en.wikipedia.org/wiki/Time_complexity#Constant_time).  Instead of O(n) with a singly linked list.

![https://www.cs.auckland.ac.nz/~jmor159/PLDS210/fig/dllist.gif](https://www.cs.auckland.ac.nz/~jmor159/PLDS210/fig/dllist.gif)

![](http://www.geeksforgeeks.org/wp-content/uploads/DLL3.jpg)

Here is an implementation of the push method for a doubly linked list (assuming a constructor function for Nodes):

```javascript
DoublyLinkedList.prototype.push = function(value) {
  var newNode = new Node(val);
  if (!this.head) {
    this.head = newNode;
    this.tail = this.head;
  } else {
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }
  this.length++;

  return this;
};
```

And here is an implementation of the pop method:

```javascript

DoublyLinkedList.prototype.pop = function() {
  if (!this.head) return undefined;

  // special case where the length of the list is 1
  // so the head and tail need to be set to null
  if (this.length === 1) {
    var returnValue = this.tail.value;
    this.length = 0;
    this.head = this.tail = null;
    return returnValue;
  }

  var oldTail = this.tail;
  this.tail = oldTail.previous;
  this.tail.next = null;
  oldTail.previous = null;
  var returnValue = oldTail.value;

  this.length--;

  return returnValue;
}
```

Notice that both `push` and `pop` are now constant time operations.

# EXERCISE

### Part 1 - Singly Linked Lists

The singly linked list is fully implemented in javascript.  To run just the tests for a singly linked list, run the  `singly_linked_list.test.js` in the exercises folder.

Try to understand the code for a singly linked list.  Do not move on to the doubly linked list section until a singly linked list makes sense.  If you are stuck on a function, implement more tests to verify how things are working.  Try using the singly linked list to get an idea of the interface.

**Stretch**

Implement reverse on a singly linked list.  Write tests first then make the tests pass.

### Part 2 - Doubly Linked Lists

You are given the start of an implementation for a doubly linked list.  Your goal is to implement the remaining functions and make the tests pass.

`__getNodeAt`: A function for internal use to find a node at an index.  When implementing the function try to think of the most efficient way of finding the index.  For example, if the list has 3000 elements and the index that we want is at index 2950, does it make more sense to find the node by starting from the front or from the back?

`get`: Gets the value of a node at an index.  This method should  use `__getNodeAt` internally.

`set`: Sets the value at an index.  This method should use `__getNodeAt` internally.

`insert`: Inserts a value at a position.  For example, if the list is [3,7,8], `insert(0,10)` results in a list of [10,3,7,8].

`unshift`: Adds a value to the front of the list

`shift`: removes a value from the front of the list

`remove`: removes a value at an index

### Part 3 - Practice Problems With Doubly Linked Lists

1. Write a reverse function that reverses the list in one pass.
1. Write a function to return the most frequent value in the linked list.
1. Write a function called rotate that takes 2 parameters.  The first is how many locations the list should rotate.  The second is true if the list should rotate forward and false if it should rotate backwards.  For example, if the list is 1,2,3,4,5,6,7 and `rotate(3,true)` is called, the list would become 5,6,7,1,2,3,4.  If `rotate(1,false)` is called on the same list, the new list would be 2,3,4,5,6,7,1.
1. Write a function that sorts the list (you can start with bubble sort, but try something more complicated like merge sort or quick sort).
1. Make another class that uses the `DoublyLinkedList` class.  The class should be a `SortedLinkList`.  The `SortedLinkList` will always maintain a sorted order for you.  For example, if the list contains 4,8,11,22,55 and `insert(13)` is called, the new list will be 4,8,11,13,22,55.  Since this is now a `SortedLinkList`, the following methods aren't needed: `push`, `pop`, `shift`, `unshift`.  Also, `set`, should be replaced with `insert`, which does not take an index.  Insert takes a value, only.

### Part 4

# Linked Lists

## Objectives

* Explain what a linked list is, and describe 3 types of linked lists
* Be comfortable implementing a basic linked list

### What is a linked list?

In it's simplest form, a singly linked list, it's an ordered list of nodes. The linked list itself will contain a pointer to the HEAD node and usually some other properties, like the length of the list. Every node element contains a pointer to the data contained at that node, and a pointer to the next element in the linked list. The last element in the list will have a null reference for it's 'next' value.

![singly linked list](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Singly-linked-list.svg/816px-Singly-linked-list.svg.png)
_A singly linked list whose nodes contain two fields: an integer value and a link to the next node_

#### Exercise

Implement `add` and `remove` functions to the stubbed out linked_list implementation here: https://github.com/gSchool/linked_list_practice

The tests are written for you already, you just need to make them all pass.

#### Doubly Linked Lists

A doubly linked list contains node which contain both a `next` and a `prev` value. This can be useful when you need to easily traverse both directions along the list, instead of solely moving forward.

![doubly linked lists](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Doubly-linked-list.svg/1220px-Doubly-linked-list.svg.png)
_A doubly linked list whose nodes contain three fields: an integer value, the link forward to the next node, and the link backward to the previous node_

#### Circular Linked Lists

A circular linked list is a list in which the tail element's `next` property is pointing to the `head` of the linked list.

![circular linked list](https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Circularly-linked-list.svg/700px-Circularly-linked-list.svg.png)

### Exercise

Add add/remove functionality to CircularLinkedLists and DoublyLinkedLists, there are stubs already there. Uncomment the specs, and make them pass!

_Bonus_: Add Sentinel nodes. (https://en.wikipedia.org/wiki/Sentinel_node)

_Bonus Bonus_: Add the ability to insert or delete nodes at arbitrary points in the list, instead of just at the end.
