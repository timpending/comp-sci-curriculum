# Memory Management

So... What's the difference between Ruby and Java? PHP and C? Javascript and C++? One of the main differences is that some of these languages are compiled (C, C++, Java) and others are interpreted (Ruby, PHP)!

Don't know what a compiler is or what it does? Check out [this](https://www.youtube.com/watch?v=CSZLNYF4Klo&list=PLhQjrBD2T380dhmG9KMjsOQogweyjEeVQ&index=13) quick video for a good introduction.

There is another huge difference between C, C++ and all the other languages listed.  C and C++ do not include memory management for you.  You must manually allocate and deallocate memory as you use it.  As a programmer that is familiar with higher level languages such as ruby, PHP and even Java, this concept may be new to you.  In all of the higher level languages mentioned, memory is automatically allocated for you.  Here is an example:

```javascript
var num = 123
```
In the above JavaScript code, memory is allocated for a number.  But you do not have to write any extra code to make sure that memory exists; this is handled for you.  Additionally, when that memory is no longer needed, it will be automatically removed from your computer.  This process is known as __garbage collection__.

## Garbage collector

In computer science, garbage collection (GC) is a form of automatic memory management. The garbage collector, or just collector, attempts to reclaim garbage, or memory occupied by objects that are no longer in use by the program. Garbage collection was invented by John McCarthy around 1959.

Garbage collection is often portrayed as the opposite of manual memory management, which requires the programmer to specify which objects to deallocate and return to the memory system. However, many systems use a combination of approaches, including other techniques such as [stack allocation](https://en.wikipedia.org/wiki/Stack-based_memory_allocation) and [region inference](https://en.wikipedia.org/wiki/Region-based_memory_management). Like other memory management techniques, garbage collection may take a significant proportion of total processing time in a program and can thus have significant influence on performance.

> How does memory management work in JavaScript? Read about it [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management).

## Threads

In computer science, a thread of execution is the smallest sequence of programmed instructions that can be managed independently by a scheduler (typically as part of an operating system). The implementation of threads and processes differs from one operating system to another, but in most cases, a thread is a component of a process. Multiple threads can exist within the same process and share resources such as memory, while different processes do not share these resources - this is known as [multi-threading](https://en.wikipedia.org/wiki/Multithreading_%28computer_architecture%29).

> If you want to learn more about this, check out this [video](https://www.youtube.com/watch?v=3YD66bHehhQ&list=PLhQjrBD2T380dhmG9KMjsOQogweyjEeVQ&index=48).

## Bits & Bytes

At the smallest scale in the computer, information is stored as bits and bytes. We will explore this a bit more later, but for know just know that 8 bits make up a byte.

> Read more [here](https://web.stanford.edu/class/cs101/bits-bytes.html).

## Stack & Heap

Two of the most essential concepts in memory management are the __Stack__ and the __Heap__.

### Stack

The [stack](https://en.wikipedia.org/wiki/Stack_(abstract_data_type)) is the memory set aside as scratch space for a thread of execution.

For example, when a function is called, a block is reserved on the top of the stack for local variables and some bookkeeping data. When that function returns, the block becomes unused and can be used the next time a function is called. The stack is always reserved in a LIFO (last in first out) order; the most recently reserved block is always the next block to be freed. This makes it really simple to keep track of the stack; freeing a block from the stack is nothing more than adjusting one pointer.

### Heap

The [heap](https://en.wikipedia.org/wiki/Heap_(data_structure)) is memory set aside for dynamic allocation. Unlike the stack, there's no enforced pattern to the allocation and deallocation of blocks from the heap; you can allocate a block at any time and free it at any time. This makes it much more complex to keep track of which parts of the heap are allocated or free at any given time; there are many custom heap allocators available to tune heap performance for different usage patterns.

![stack and heap](https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/116/stacknheap.png)

> Read [more](http://stackoverflow.com/questions/79923/what-and-where-are-the-stack-and-heap) on StackOverflow.
> Read about [whether Javascript allocates memory in the heap or the stack for your variable](http://stackoverflow.com/questions/5326300/garbage-collection-with-node-js/5328761#5328761)
