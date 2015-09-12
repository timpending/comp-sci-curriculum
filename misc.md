https://gist.github.com/mjhea0/9d357f64734b5386448f

https://students.galvanize.com/cohorts/19/daily_plans/2015-08-19


# Good things to know

### Memory Management and other differences between languages

So....what's the difference between Ruby and Java? PHP and C? Javascript and C++? One of the main differences is that some of these languages are compiled (C, C++, Java) and others are interpreted (Ruby, PHP)!

Don't know what a compiler is or what it does? Check out [this](https://www.youtube.com/watch?v=CSZLNYF4Klo&list=PLhQjrBD2T380dhmG9KMjsOQogweyjEeVQ&index=13) quick video for a good introduction.

### A little more on memory

##### Garbage collector

In computer science, garbage collection (GC) is a form of automatic memory management. The garbage collector, or just collector, attempts to reclaim garbage, or memory occupied by objects that are no longer in use by the program. Garbage collection was invented by John McCarthy around 1959.

Garbage collection is often portrayed as the opposite of manual memory management, which requires the programmer to specify which objects to deallocate and return to the memory system. However, many systems use a combination of approaches, including other techniques such as stack allocation and region inference. Like other memory management techniques, garbage collection may take a significant proportion of total processing time in a program and can thus have significant influence on performance.

How does memory management work in JavaScript? Read about it [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management)

#### Pointers

In lower level languages, when we want to access a variable we need to know its memory __address__ (you can think of this as a house address). A computer program can find a variable as long as it knows its memory address. Pointers provide us a way to deal directly with these addresses. A pointer is a programming language object, whose value refers directly to (or "points to") another value stored elsewhere in the computer memory using its address.

However, pointers can be very challenging to manage and even used dangerously (overused) so that many higher level languages hide them entirely.

Read more about pointers [here](http://en.wikipedia.org/wiki/Pointer_%28computer_programming%29)

Here is an example of a linked list with pointers (how you would implement this in a lower level language)

![http://courses.cs.vt.edu/~csonline/DataStructures/Lessons/OrderedListImplementationView/linked_list.gif](http://courses.cs.vt.edu/~csonline/DataStructures/Lessons/OrderedListImplementationView/linked_list.gif)

#### Stack + Heap

One of the most essential concepts in memory management is the Stack and the Heap.

The stack is the memory set aside as scratch space for a thread of execution. When a function is called, a block is reserved on the top of the stack for local variables and some bookkeeping data. When that function returns, the block becomes unused and can be used the next time a function is called. The stack is always reserved in a LIFO (last in first out) order; the most recently reserved block is always the next block to be freed. This makes it really simple to keep track of the stack; freeing a block from the stack is nothing more than adjusting one pointer.

The heap is memory set aside for dynamic allocation. Unlike the stack, there's no enforced pattern to the allocation and deallocation of blocks from the heap; you can allocate a block at any time and free it at any time. This makes it much more complex to keep track of which parts of the heap are allocated or free at any given time; there are many custom heap allocators available to tune heap performance for different usage patterns.

Here is a nice visual:

![stack and heap](http://techinerd.com/wp-content/uploads/2014/05/stack_heap.jpg)


Read [more](http://stackoverflow.com/questions/79923/what-and-where-are-the-stack-and-heap) on StackOverflow

#### Bits + Bytes

At the smallest scale in the computer, information is stored as bits and bytes. We will explore this a bit more later, but for know just know that 8 bits make up a byte.

Read some more [here](https://web.stanford.edu/class/cs101/bits-bytes.html)

#### Threads

In computer science, a thread of execution is the smallest sequence of programmed instructions that can be managed independently by a scheduler (typically as part of an operating system). The implementation of threads and processes differs from one operating system to another, but in most cases, a thread is a component of a process. Multiple threads can exist within the same process and share resources such as memory, while different processes do not share these resources - this is known as multi-threading.

If you want to learn more about this, check out this [video](https://www.youtube.com/watch?v=3YD66bHehhQ&list=PLhQjrBD2T380dhmG9KMjsOQogweyjEeVQ&index=48)



### Binary

<table>
<tr>
  <td>Position</td>
  <td>2^7</td>
  <td>2^6</td>
  <td>2^5</td>
  <td>2^4</td>
  <td>2^3</td>
  <td>2^2</td>
  <td>2^1</td>
  <td>2^0</td>
</tr>
<tr>
  <td>Amount</td>
  <td>128</td>
  <td>64</td>
  <td>32</td>
  <td>16</td>
  <td>8</td>
  <td>4</td>
  <td>2</td>
  <td>1</td>
</tr>
<tr>
  <td>Binary</td>
  <td>0</td>
  <td>1</td>
  <td>0</td>
  <td>0</td>
  <td>0</td>
  <td>1</td>
  <td>1</td>
  <td>1</td>
</tr>
<tr>
  <td>Count</td>
  <td></td>
  <td>64</td>
  <td></td>
  <td></td>
  <td></td>
  <td>4</td>
  <td>2</td>
  <td>1</td>
</tr>
</table>

With this table in mind:

`01000111 = 64 + 4 + 2 + 1`

`01000111 = 71`

Here is another example

<table>
<tr>
  <td>Binary</td>
  <td>1</td>
  <td>1</td>
  <td>0</td>
  <td>1</td>
  <td>0</td>
  <td>1</td>
  <td>1</td>
  <td>1</td>
</tr>
<tr>
  <td>Count</td>
  <td>128</td>
  <td>64</td>
  <td></td>
  <td>16</td>
  <td></td>
  <td>4</td>
  <td>2</td>
  <td>1</td>
</tr>
</table>

`11010111 = 128 + 64 + 16 + 4 + 2 + 1`

`11010111 = 215`

### What about addition?

What is `10010101 + 11110010?`
<table>
<tr>
<td>Binary One</td>
<td>1</td>
<td>0</td>
<td>0</td>
<td>1</td>
<td>0</td>
<td>1</td>
<td>0</td>
<td>1</td>
</tr>

<tr>
<td>Binary Two</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>0</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>

<tr>
<td>Sum</td>
<td>2</td>
<td>1</td>
<td>1</td>
<td>2</td>
<td>0</td>
<td>1</td>
<td>1</td>
<td>1</td>
</tr>
</table>

We now take this sum and multiple the total binary amounts by their respective base 2 amount

<table>
<tr>
<td>Sum</td>
<td>2</td>
<td>1</td>
<td>1</td>
<td>2</td>
<td>0</td>
<td>1</td>
<td>1</td>
<td>1</td>
</tr>

<tr>
  <td>Amount</td>
  <td>128</td>
  <td>64</td>
  <td>32</td>
  <td>16</td>
  <td>8</td>
  <td>4</td>
  <td>2</td>
  <td>1</td>
</tr>

<tr>
<tr>
  <td>Total</td>
  <td>128 * 2</td>
  <td>64 * 1</td>
  <td>32 * 1</td>
  <td>16 * 2</td>
  <td>8 * 0</td>
  <td>4 * 1</td>
  <td>2 * 1</td>
  <td>1 * 1</td>
</tr>
</table>


`10010101 + 11110010` =  `128* 2	 + 64 *1 + 	+  32 *1	+  16* 2	+  8 * 0	+  4 *1	+  2 * 1	 + 1 *1`

`10010101 + 11110010` = `256 + 64 + 32 + 32 + 4 +2 +1`

`10010101 + 11110010` = `391`

Try subtraction! It works too!

### ASCII

So computers are really good at processing numbers quickly, but a computer only really understands zeros and ones. What about letters? How do we translate binary into characters? In english we have 26 letters in the alphabet, so we assign these from 0 to 25 and give them binary values! But..that's not enough. What about uppercase letters? We want our computer to do that so we need an additional 26...and what about special characters? There are 32 of those (you can count them if you don't believe me), and the space bar also.

So where do we start? Do we start from 0? Or 20? or 40? In the early 1960s this was a big issue. Different computer manufactures would use different encoding schemes which made communication extremely difficult. So the American National Standards Institute (ANSI) set out to develop a common scheme and in 1963 they came out with ASCII which was designed as a __7__ bit encoding which means that each character is represented by a set of 7 0s or 1s, which means that we have 2^7 or 128 possible characters. We go from `0000000` (0) to `1111111` (127) in this scheme.

- 26 - lowercase characters
- 26 - uppercase characters
- 10  - digit characters
- 32 -  punctuation characters
- 1 - space character

So we're at 95....what's left?

So back in days of ASCII development, teletype machines (typewriters used to send messages across a network) were very common. These machines had additional characters to control them (new line key, carriage return key, backspace key etc.). These characters are called control characters and they make up the rest of the numbers.

Here is what an ASCII table looks like

![http://www.asciitable.com/index/asciifull.gif](http://upload.wikimedia.org/wikipedia/commons/d/dd/ASCII-Table.svg)

If you look at the table you can see the that capital letters always have a 0 in the 2^5 spot where lowercase letters always have 1 there. This was intentional and a smart way to distinguish easily between uppercase and lowercase letters


### Ok...nice history lesson, but why do I care about this?

Believe it or not, we use this quite a bit, this is what our .charCodeAt function does in JavaScript! Try typing `"A".charCodeAt(0);` in chrome console and see what you get? Then look up the value in an ASCII table and you will see it corresponds to `01000001`. You can use `charCode` to do manipulation with letters and strings which is very useful!

### UTF

Unfortunately, ASCII does not cover a large amount of special characters, so we use a character encoding called UTF-8. UTF-8 has become the dominant character encoding for the World Wide Web, accounting for 81.4% of all Web pages in November 2014 (with most popular East Asian encoding at 1.4% and all of them combined under 5%). The Internet Mail Consortium (IMC) recommends that all e-mail programs be able to display and create mail using UTF-8.[5] The W3C recommends UTF-8 as default encoding in their main standards (XML and HTML).

Here is what a UTF table looks like - [http://www.utf8-chartable.de/](http://www.utf8-chartable.de/)
