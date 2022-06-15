// Give the summation of all even numbers in a Fibonacci sequence up to, but not including, the number passed to your function. Or, in other words, sum all the even Fibonacci numbers that are lower than the given number n (n is not the nth element of Fibonnacci sequence) without including n.
//
// The Fibonacci sequence is a series of numbers where the next value is the addition of the previous two values. The series starts with 0 and 1:
//
// 0 1 1 2 3 5 8 13 21...
//
// For example:

// fibonacci(0)==0
// fibonacci(33)==10
// fibonacci(25997544)==19544084

function fibonacci(max) {
  const fib = [0, 1];
  for (let i = 1; fib[i - 1] + fib[i] < max; i += 1) {
    fib.push(fib[i - 1] + fib[i])
  }
  return fib.reduce((a, b) => a + (b % 2 === 0 ? b : 0), 0);
}
