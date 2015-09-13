
Below you will see four common sorting algorithms and some links to see them in action. One of the best ways to learn these algorithms is to try to implement them yourself. Use sticky notes, a pen and paper, cups, colored blocks or whatever you find best and try to recreate these sorting scenarios. Not only will this help you tremendously in your understanding of the algorithm, but it is __essential__ to have a fundamental knowledge before trying to implement them.

### Bubble Sort

For each element in the list, look at the element and the one to the right, if the left > right, swap them. Keep swapping until we are at the end of the array. Then move onto the next element in the array and repeat this. Bubble sort can be easily implemented using multiple loops (at least two) or recursion.

For bubble sort, The worst case is if we have backwards list (then it takes n passthroughs - 1)

![http://upload.wikimedia.org/wikipedia/commons/0/06/Bubble-sort.gif](http://upload.wikimedia.org/wikipedia/commons/0/06/Bubble-sort.gif)

We know for sure that after 1 pass the right most element is sorted correctly, and after 2 passes the right 2 elements are sorted correctly

How can we make bubble sort even smarter? We can always count to see the number of swaps and if there are none we know it's sorted.

Bubble sort is NOT an efficient algorithm, it's worst case performance is O(n^2), because you have to make n iterations through a list checking all n elements each pass so n * n = n^2. This runtime means that as the number of elements sorted increase, the runtime increase quadratically. But efficiency isn't a major concern or if you are sorting a small number of elements, it's a great way to start.



### Insertion Sort

![http://upload.wikimedia.org/wikipedia/commons/9/9c/Insertion-sort-example.gif](http://upload.wikimedia.org/wikipedia/commons/9/9c/Insertion-sort-example.gif)

Divide the list into 2 portions, sorted and unsorted. At each set, move an unsorted to the sorted until the entire list is sorted. We just move elements in the sorted list to the right if they are greater than the new item.

Worst case of insertion sort -> O(n^2)

Best case of insertion sort -> O(n)

## Merge Sort

Similar to quick sort, This is one of the most efficient ways of sorting an array. It has three steps, divide, conquer(sort) and then combine(merge).

![http://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif](http://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif)

And here is an example of the process

![http://www.personal.kent.edu/~rmuhamma/Algorithms/MyAlgorithms/Sorting/Gifs/mergeSort.gif](http://www.personal.kent.edu/~rmuhamma/Algorithms/MyAlgorithms/Sorting/Gifs/mergeSort.gif)

## Quick Sort

Watch [Alex explain quick sort](https://www.youtube.com/watch?v=XE4VP_8Y0BU&feature=iv&src_vid=M5c_RFKVkko&annotation_id=annotation_155416) on Computerphile.

# Exercies:
- Implement bubble sort (https://github.com/gschool/bubble_sort)
- Implement merge sort (https://github.com/gSchool/js_merge_sort)
