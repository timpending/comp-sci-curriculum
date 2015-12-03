# Big-O Notation And Linked Lists

Big-O notation is how developers discuss the complexity of an algorithm as a way to understand how fast a program will run given it's input. Big-O notation deals with the **worst** case scenario for the algorithm.  In other words, if the program **may** run quickly, but there is a chance it could take a long time given some input, then the Big-O runtime will deal with the longer case.

To put it yet another way, Big-O runtime deals with asymptotic approximations of the complexity of the algorithm.  It tends to care much more about how complex a program is when the input size is very large because that is typically when the performance matters the most.

## Objectives

* Learn about big O and see some examples of algorithms and big O
* Explore runtimes for different functions in the Chrome console
* Prepare you for interview questions relating to data structures, algorithmic efficiency and optimization

Watch [this video on asymptotic complexity from CS50](https://www.youtube.com/watch?v=iOq5kSKqeR4).

## Big-O Definition

Here's the technical definition of big-O notation. If it's difficult to comprehend, don't worry! We'll show plenty of examples below. The rigorous definition is a helpful point of reference, however, especially as you begin to familiarize yourself with the concept.

Suppose you have two mathematical functions, `f(x)` and `g(x)`. A function `f(x)` is said to be `O(g(x))` (pronounced 'Big O of g(x)') if there exists some positive constant `C` such that `|f(x)| &leq; C * |g(x)|` for `x` sufficiently large.

When we talk about Big O in this class, `f(x)` will typically roughly correspond to the runtime of some javascript function (or, if you prefer, the number of operations that function needs to perform), while `g(x)` will roughly correspond to the size of that function's input.

Huh? What does that mean? Let's get down to brass tacks, and look at some examples.

## Big-O Examples

The best way to get started with big-O notation is to start with some examples:

```javascript
// O(n)

function square(arr) {
  return arr.map(function(el) {
    return el * el;
  });
}
```

The above example is O(n) run time, which means given a input of size n (the length of the array is equal to n), the runtime of the application will be linear in relationship to the input size.  In other words, if every x * x operation takes some unit of time, we can expect n of those operations to take place.

Let's take a look at this even more concretely. The following function takes in two arguments: a callback and an array. It returns the time it takes your computer to execute the code in the callback.

```javascript
function testPerformance(callback, arr) {
  var t0 = performance.now();
  callback(arr);
  var t1 = performance.now();
  return t1 - t0;
}
``` 

**Exercise** Create an array of length 1,000,000, where each entry is the number 2. Then test the performance of `square` on this array, using `testPerformance`.

If you run `testPerformance` many times on the same arguments, you should see different outputs. This makes sense; as you saw in the CS50 video, the time it takes to run a certain block of code is highly variable not just across machines, but also for a given machine.

Even so, it can be helpful to plot several data points and look for trends. 

**Exercise** Repeat the previous exercise for arrays of 2 million, 3 million, and so on up to 10 million. Then record the times you get in [this table](https://www.desmos.com/calculator/i64rd3xdsv), and you'll wind up with a nice little graph of your data. What sort of trend do you see?

**Bonus** If you want to decrease the variability in the times output by your performance test, what could you do?

Below is another example. In terms of big-O, what do you think the runtime of this function is?

```javascript
function squareAndDouble(arr) {
  var tempArr = arr.map(function(el) {
    return el * el;
  });
  return tempArr.map(function(el) {
    return 2 * el;
  });
}
```

**EXERCISE** Make an educated guess about the runtime of this function. Then do some performance testing and graph your results. Do you stand by your guess?

![](http://giphy.com/embed/105vP29Bs1YTYI)

In the above example the runtime is **O(n + n)** or **O(2 * n)**. The runtime is O(2 * n) because the first `arr.map` iterates over all n elements in the array, and the second `tempArr.map` also iterates over all n elements in the array.  However, the runtime is actually O(n), because in big-O notation, constants are ignored.

**RULE: Big-O notation ignores constants.**

```javascript
// O(1)

function print50nums() {
  for (var i = 0; i < 50; i++) {
    console.log(i);
  }
}
```

The runtime of the above example is not bound by a variable sized input.  Instead it is bound by the constant 50.  The runtime of the program is O(50), but since constants do not matter in big-O notation, we simplify it to O(1).

```javascript
// O(1)

function print500000nums() {
  for (var i = 0; i < 500000; i++) {
    console.log(i);
  }
}
```
The example above is still O(1) because 500,000 is still a constant number of iterations.

**EXERCISE**

What is the runtime of the following two examples (do some performance testing if you're unsure!):


```javascript
function doStuff(a,b) {
  var x = 50;
  var y = 30;
  var sum = x + y;
  var square = sum * sum;
  var z = -250;
  square += z;
  return a * a + b * b * b + square;
}
```

```javascript
function sumValuesAndRemoveOdds(arr) {
  var i = 0;
  while (i < arr.length) {
    var sum = 0;
    var j = i;
    while (j < arr.length) {
      sum += arr[j];
      j += 1;
    }
    arr[i] = sum;
    i += 1;
  }

  var newArr = [];

  i = 0;

  while (i < arr.length) {
    if (arr[i] % 2 === 0) {
      newArr.push(arr[i]);
    }
    i += 1;
  }

  return newArr;
}
```
![](http://images.contentful.com/7h71s48744nc/3naPsJv6IE0KewGmqUOMUu/a00a2a2cbe0c580cfce1b502c1ebdc9f/a-beautiful-mind.jpg)

In the above exercises, the first program is O(1) because all all operations in the program do not depend on input size.

The second exercise above is O(n*n + n).  The first n*n (n^2) comes from the while loop that iterates over all of the elements in the array and has another while loop inside that also iterates over all elements in the array.  The second n comes from the final while loop that iterates over all elements and remvoes odds.  The expression can also be simplified further.  Any time there is addition in the big O notation, the worst case runtime is kept. All other values are dropped. In this case, the runtime would just be O(n^2).

**RULE: When big-O values are added, keep the worst case runtime, and drop all other additional values.**

**EXERCISE**:

<!-- add non-named functions -->

**EXERCISE**

<!-- add link, show functions -->

<!-- Add addendum on logs and factorials -->

**EXERCISE**:

Reduce the following big-O expressions. If they can't be reduced, explain why.

1. O(5555593939) + O(n^2) + O(n * n * n)
2. O(93939283940) + O(8274920484) + O(12)
3. O(n * n)
4. O(3n + 2n + 5n + 9n)
5. O(n^3 + n) + O(2^n)
6. O(n * log(n) + log(n))
7. O(n^n)

Which is the faster big O runtime (Make sure to reduce both expressions first):

1. O(n + n^2 + 5) or O(3n + 70000000)
2. O(n * log(n)) or O(n^2)
3. O(n^n) or (n^50000)
4. O(1) or O(9999999999999)
5. O(n * n * 5 * n) or O(n^2)

CHALLENGES 

1. Prove, using the definition of big-O, why constants don't matter in the notation (e.g. why O(2n) is the same as O(n)).

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
