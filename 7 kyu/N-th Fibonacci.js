// I love Fibonacci numbers in general, but I must admit I love some more than others.
// I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.
//
// For example:
// nthFibo(4) == 2
// Because 2 is the 4th number in the Fibonacci Sequence.
//
// For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.

//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

function nthFibo(n) {
  const result = [0];
  if (n === 1) return result[0];

  if (typeof n === 'number') {
    for (let i = 0; i < n; i += 1) {
      if (i === 0 || i === 1) {
        result.push(1);
      } else if (i > 1) {
        result.push(result[i] = result[i - 1] + result[i - 2]);
      }
    }
  }
  return result[n];
}

console.log(nthFibo(5))
