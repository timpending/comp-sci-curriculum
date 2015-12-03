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

