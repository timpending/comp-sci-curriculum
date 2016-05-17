# Searching Algorithms

## Linear Search

[Linear search](https://en.wikipedia.org/wiki/Linear_search) (or sequential) search is a method for finding a particular value in an array, that consists of checking every one of its elements, one at a time and in sequence, until the desired one is found. Linear search is the simplest search algorithm; it is a type of [brute-force search](https://en.wikipedia.org/wiki/Brute-force_search).

Linear search runs on average at [O(n)](https://en.wikipedia.org/wiki/Time_complexity#Linear_time).

## Binary Search

The key here is that we have a array of n element(s).

[Binary search](https://en.wikipedia.org/wiki/Binary_search_algorithm) or half-interval search finds the position of a specified input value (the search "key") within an array sorted by key value.

For binary search, the array should be arranged in ascending or descending order. In each step, the algorithm compares the search key value with the key value of the middle element of the array. If the keys match, then a matching element has been found and its index, or position, is returned. Otherwise, if the search key is less than the middle element's key, then the algorithm repeats its action on the sub-array to the left of the middle element or, if the search key is greater, on the sub-array to the right. If the remaining array to be searched is empty, then the key cannot be found in the array and a special "not found" indication is returned.

Binary search runs on average at [O(log n)](https://en.wikipedia.org/wiki/Time_complexity#Logarithmic_time) -> THIS IS [FAST](http://stackoverflow.com/a/2307314/1799408)!

## Resources:

[https://github.com/gSchool/searching-algorithms](https://github.com/gSchool/searching-algorithms)

### Other links

[Visualization](https://www.cs.usfca.edu/~galles/visualization/DFS.html)
