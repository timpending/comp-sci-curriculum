# Linked Lists

A linked list is a data structure consisting of a group of nodes which together represent a sequence. Under the simplest form, each node is composed of a data and a reference (in other words, a link) to the next node in the sequence

## Singly Linked List

In a singly linked list each node in the list stores the contents of the node and a pointer or reference to the next node in the list.

![http://www.lisha.ufsc.br/teaching/sce/ine6511-2003-2/work/gp/lists_files/image001.gif](http://www.lisha.ufsc.br/teaching/sce/ine6511-2003-2/work/gp/lists_files/image001.gif)

### Ruby Arrays vs. C Arrays!
In C, arrays are not dynamic.  You must decide exactly how long an array will be when you create it. Elements must all be of the same type

`int examplearray[99];`

If you wanted to insert an element into the beginning or middle of the array, you would have to manually move elements over one by one.
How is that different than Ruby arrays?  Since Ruby is written in C, how do you think Ruby arrays are actually implemented?

### Yay for linked lists!
A Linked List (or Singly Linked List) is another way of organizing a list of elements.

Instead of requesting n contiguous memory locations, you just create n nodes (or vertices) and link them yourself. Each node can be stored anywhere in memory, and you also store where to find the next element in the list in each node.

There is also a version called a Doubly Linked List that has links going in both directions. So, instead of each node only having a reference to the next, they also have a reference to the previous node

![](http://geeksforgeeks.org/wp-content/uploads/2009/09/SortedLinked-List.gif)

> The principal benefit of a linked list over a conventional array is that the list elements can easily be inserted or removed without reallocation or reorganization of the entire structure because the data items need not be stored contiguously in memory or on disk, while an array has to be declared in the source code, before compiling and running the program. Linked lists allow insertion and removal of nodes at any point in the list, and can do so with a constant number of operations if the link previous to the link being added or removed is maintained during list traversal.

On the other hand, simple linked lists by themselves do not allow random access to the data, or any form of efficient indexing. Thus, many basic operations — such as obtaining the last node of the list (assuming that the last node is not maintained as separate node reference in the list structure), or finding a node that contains a given datum, or locating the place where a new node should be inserted — may require sequential scanning of most or all of the list elements. The advantages and disadvantages of using linked lists are given below.


### Linked List Exercise
Implement the following methods on your own linked list:

* Push(append)
* Unshift(prepend)
* To_String
* Length
* Find
* Insert_After
* Delete
* Reverse

## Bonus Challenges

* Write a method to find the *kth* to last node in a linked list
* Write a sort method that will sort a given linked list(assume all the values are numbers)
* Write a method that will merge to linked lists . Assume the lists are already sorted.

```
class Node
  attr_accessor :value, :next_node
  def initialize(value)
    @value = value
  end
end

class LinkedList
  def initialize(value)
    node = Node.new(value)
    @head = node
    @tail = node
  end

  def append(value)
    @tail.next_node = Node.new(value)
    @tail = @tail.next_node
  end

  def to_s(current_node=@head)
    return current_node.value if current_node.next_node.nil?
    return "#{current_node.value} > #{to_s(current_node.next_node)}"
  end

  def prepend(value)
    new_node = Node.new(value)
    new_node.next_node = @head
    @head = new_node
  end

  def find(value,current_node=@head)
    return current_node if current_node.value == value
    return nil if current_node.next_node.nil?
    find(value, current_node.next_node)
  end

  def find_before(value,current_node=@head)
    return nil if @head.value == value
    return current_node if current_node.next_node.value == value
    find_before(value, current_node.next_node)
  end

  def insert_after(before_value, new_value)
    if @tail.value == before_value
      append(new_value)
    else
      before_node = find(before_value)
      swap = before_node.next_node
      new_node = Node.new(new_value)
      before_node.next_node = new_node
      new_node.next_node = swap
    end
  end

  def delete(value)
      before_node = find_before(value)
      if before_node.nil?
        swap = @head.next_node
        @head.next_node = nil
        @head = swap
      else
        before_node.next_node = before_node.next_node.next_node
      end
  end
end

list = LinkedList.new("I")
list.append("Love")
list.append("Momo")
p list.to_s
list.prepend("Hello")
p list.to_s

p list.find("Momo")
list.insert_after("I", "Really")
p list.to_s
list.insert_after("Momo", "Choi")
p list.to_s

p list.find_before("Momo")
list.delete("Really")
p list.to_s

list.delete("Hello")
p list.to_s

list.delete("Momo")
p list.to_s
```

```
describe LinkedList do
  describe "#reverse" do
    it "reverses two nodes" do
      list = LinkedList.new(1)
      list.append(2)

      expect(list.reverse.to_s).to eq("2 > 1")
    end

    it "reverses three nodes" do
      list = LinkedList.new(1)
      list.append(2)
      list.append(3)

      expect(list.reverse.to_s).to eq("3 > 2 > 1")
    end

    it "reverses a lot of nodes" do
      list = LinkedList.new(1)
      list.append(2)
      list.append(3)
      list.append(4)
      list.append(5)

      expect(list.reverse.to_s).to eq("5 > 4 > 3 > 2 > 1")
    end
  end
end
```

## Exercises:
* https://github.com/gSchool/linked_lists
* https://github.com/gSchool/ruby-oop-warmup-linked-list
