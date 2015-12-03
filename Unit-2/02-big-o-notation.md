# Big-O Notation And Linked Lists

Big-O notation is how developers discuss the complexity of an algorithm as a way to understand how fast a program will run given it's input. Big-O notation deals with the **worst** case scenario for the algorithm.  In other words, if the program **may** run quickly, but there is a chance it could take a long time given some input, then the Big-O runtime will deal with the longer case.

To put it yet another way, Big-O runtime deals with asymptotic approximations of the complexity of the algorithm.  It tends to care much more about how complex a program is when the input size is very large because that is typically when the performance matters the most.

## Objectives

* Learn about big O and see some examples of algorithms and big O
* Prepare you for interview questions relating to data structures, algorithmic efficiency and optimization

Watch [this video on asymptotic complexity from CS50](https://www.youtube.com/watch?v=iOq5kSKqeR4).


## Big-O Examples

The best way to get started with big-O notation is to start with some examples:

```ruby
# O(n)

def square(arr)
  arr.map { |x| x * x }
end
```
The above example is O(n) run time, which means given a input of size n (the length of the array is equal to n), the runtime of the application will be linear in relationship to the input size.  In other words, if every x * x operation takes some unit of time, we can expect N of those operations to take place.

Below is another example of an O(n) algorithm:

```ruby
# O(n)

def squareAndDouble(arr)
  tempArr = arr.map{ |x| x * x }
  tempArr = tempArr.map{ |x| x * 2 }
end
```

In the above example the runtime is **O(n + n)** or **O(2 * n)**. The runtime is O(2 * n) because the first `arr.map` iterates over all n elements in the array, and the second `tempArr.map` also iterates over all n elements in the array.  However, the runtime is actually O(n), because in big-O notation, constants are ignored.

**RULE: Big-O notation ignores constants.**

```ruby
// O(1)

def print_nums
  50.times {|i| puts i}
end
```

The runtime of the above example is not bound by a variable sized input.  Instead it is bound by the constant 50.  The runtime of the program is O(50), but since constants do not matter in big-O notation, we simplify it to O(1).

```ruby
// O(1)

def print_nums
  500000.times {|i| puts i}
end
```
The example above is still O(1) because 500,000 is still a constant number of iterations.

**EXERCISE**

What is the runtime of the following two example:


```ruby
def do_stuff(a, b)
  x = 50
  y = 30
  sum = x + y
  square = sum * sum
  z = -250
  square += z
  a * a  + b * b * b + square
end
```


```ruby

def sumValuesAndRemoveOdds(arr)
  i = 0
  while (i < arr.length)
    sum = 0
    j = i
    while (j < arr.length)
      sum += arr[j]
      j += 1
    end
    arr[i] = sum
    i += 1
  end

  newArr = []

  i = 0

  while (i < arr.length)
    if arr[i] % 2 != 1
      newArr.push arr[i]
    end
    i += 1
  end

  newArr
end
```
![](http://i.stack.imgur.com/WcBRI.png)

In the above exercises, the first program is O(1) because all all operations in the program do not depend on input size.

The second exercise above is O(n*n + n).  The first n*n (n^2) comes from the while loop that iterates over all of the elements in the array and has another while loop inside that also iterates over all elements in the array.  The second n comes from the final while loop that iterates over all elements and remvoes odds.  The expression can also be simplified further.  Any time there is addition in the big O notation, the worst case runtime is kept. All other values are dropped. In this case, the runtime would just be O(n^2).

**RULE: When big-O values are added, keep the worst case runtime, and drop all other additional values.**

**EXERCISE**:

Reduce the following big-O expressions:

1. O(5555593939) + O(n^2) + O(n * n * n)
2. O(93939283940) + O(8274920484) + O(12)
3. O(3N + 2N + 5N + 9N)
4. O(N^3 * N)
5. O(n * m)
6. O(n * log(n) + log(n))
7. O(n^n)

Which is the faster big O runtime (Make sure to reduce both expressions first):

1. O(n + n^2 + 5) or O(3n + 70000000)
2. O(n * log(n)) or O(n^2)
3. O(n^n) or (n^50000)
4. O(1) or O(9999999999999)
5. O(n * n * 5 * n) or O(n^2)

## Singly Linked Lists

A linked list is a data structure that helps keep an order list of data.  The linked list can be thought of as similar to other ordered data structures like arrays.  The key difference is how an array is stored verses a linked list.

### Data Structures And Memory

Modern programming languages hide a lot of the complexity of dealing with a computer.  In ruby we never have to worry about memory allocation, but it is important to know what is going on behind the scenes when you use it.

**Arrays**

The ruby array appears to hold an infinite ammount of data simply by using the `push` method.  However, under the hood, there is a lot more going on.  When you first create an array, ruby allocates a certain amount of memory.

![](http://web.cs.ucla.edu/classes/winter12/cs111/scribe/1c/img4.jpg)

If you continue to push data, the allocated memory will eventually run out!  Once the memory runs out, ruby is still able to make the array larger, but the operation to make the array larger is O(n).  The steps are as follows:

* Allocate more memory so we can fit the new item we want to push.
	* If the array used to be of size z, an implementation might allocate 2 * z sized memory to leave some room to grow.
* For all n elements in the array, copy the values from the old memory to the new memory.
* Add the new value we want to push to the end of tne new array.
* Update the size of the array.
* Delete the old memory

Since the algorithm above iterates over all items in the array, the runtime is O(n).

If the runtime of pushing is important to your program, you may want to use a different data structure.  One option is a **singly linked list**

**Singly Linked List**

A singly linked list is stored in memory using references to other memory locations.  In drawing below, the list looks as if it's all in a line, but in fact, in memory, the list is skattered all over the place.  The first object could be at a very high memory address and the second object could be at a very low memory address.  The only thing that keeps the list together is the next pointers.  The next pointers are references to where the next element in the linked list list located.  

![](http://www.cs.usfca.edu/~srollins/courses/cs112-f07/web/notes/linkedlists/ll2.gif)

A nice thing about the singly linked list is that inserting at the end of the list is always O(1).  Why is that?  Because a variable is kept that points to the end of the list (or the tail).  Whenever you need to add or remove an item from the end, you simply have to update the tail.

**EXERCISE**

Look at the implementation of a [singly linked list](https://github.com/gSchool/SinglyLinkedListRuby).  First try to understand the code and the tests that are there.  A test is missing.  Add the tests!  Once you have that, fix some of the failing tests.

**Doubly Linked Lists**

![](http://www.geeksforgeeks.org/wp-content/uploads/DLL3.jpg)

A doubly linked list is a list where each node has two pointers.  A next pointer and a previous pointer.  Keeping track of next and previous has some advantages.  For example, the `pop` is method is now much easier.  Since we have access to the element before, the operations is O(1).  Instead of O(n) with a singly linked list.

Here is the push method for a doubly linked list

```ruby
  def push(value)
    if @head == nil
      @head = Node.new(value)
      @tail = @head
    else
      old_tail = @tail
      @tail = Node.new(value)
      old_tail.next = @tail
      @tail.previous = old_tail
    end
    @length += 1
    nil
  end
```

And here is the pop method:

```ruby
  def pop
    return nil if @length == 0

    # special case where the length of the list is 1
    # so the head and tail need to be set to nil
    if @length == 1
      return_value = @tail.value
      nil_node(@tail)
      @tail = nil
      @head = nil
      @length = 0
      return return_value
    end

    old_tail = @tail
    @tail = old_tail.previous
    @tail.next = nil

    return_value = old_tail.value

    @length -= 1

    # Making sure the old_tail has no references to nodes or
    # values.
    nil_node(old_tail)

    return_value
  end
```

Notice that both `push` and `pop` are now constant time operations.

**EXERCISE**

Look at the code for a doubly linked list [here](https://github.com/gSchool/DoublyLinkedListRuby).  Try to understand what is going on.  Add test cases to get full coverage.  Implement test cases for `delete_at`.  Next, implement the `delete_at` method.  


# Resources

* [Matt Garland's YouTube channel](https://www.youtube.com/channel/UCXKj1IJVDEHHHDOt49FhOOA) focused on simple visualizations of various CS concepts.

* (Matt Garland explains Big O)[https://www.youtube.com/watch?v=nMQyBh2FuaA]

### MIT Open Courseware

* [MIT's Overview of computational complexity](https://www.youtube.com/watch?v=moPtwq_cVH8)

* [MIT's Intro to Algorithms](https://www.youtube.com/watch?v=whjt_N9uYFI)

### My Code School

* [My Code School's channel of CS Concepts](https://www.youtube.com/channel/UClEEsT7DkdVO_fkrBw0OTrA)

* [My Code School's Intro to Asymptotic Notation](https://www.youtube.com/watch?v=OpebHLAf99Y)

### Carleton Moore

* [Carleton Moore's YouTube channel](https://www.youtube.com/channel/UCxVXiZ0KRSSIdxU6rqM_dfg)

* [Carleton Explains Big O](https://www.youtube.com/watch?v=chZNdhO6Ifw)

### UC Berkeley

* [Asymptotic Analysis](https://www.youtube.com/watch?v=V1xXmQkzkZI)
