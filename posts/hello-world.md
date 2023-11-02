---
title: "Hello World"
date: "2020-12-08"
subtitle: "Recursion - how to not get overwhelmed.(not ready yet)"
---

# Hello world!

```javascript
console.log("Hello World!");
```

![moon](../images/moon.jpeg)

1.What is recursion?
Process of function calling itself

2.In what type of situation would you need to use recursion?
when you have to perform the same type of operation multiple times

3.What do you need?
Base case -what is it and why do you need it? The basic answer is - since the function is calling itself it could go on indefinitely, so we need base case- it terminates the call if certain condition is met

4.bubbling up and mental model

- the outlook of the recursive call of the function;
- how all of the function calls "bubbles up" giving you the right answer

  5.performance and big O notation
  it is widely known that recursive functions are much slower than regular functions, most commonly have a runtime of O(2^n)
  //O(n^2) => runtime of an algorithm grows exponentially with the size of the input
  //simply => {
  1.For each unit increase in the input size, the number of operations required roughly doubled.
  2.As a result, the runtime of the algorithm becomes increasingly slow as the input size grows
  }

Exponential time complexity algorithms like O(2^n) can become very slow for relatively small inputs and are often impractical for large inputs. Therefore, it's crucial to either optimize such algorithms using techniques like memoization or explore alternative algorithms with better time complexities when dealing with larger datasets.

6.To sum up- it has could help you write less bulky code but the cost is high- it could cause the performance issues
