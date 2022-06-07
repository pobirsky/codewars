// In mathematics, Pascal's triangle is a triangular array of the binomial coefficients expressed with formula
// where n denotes a row of the triangle, and k is a position of a term in the row.
// Write a function that, given a depth n, returns n top rows of Pascal's Triangle flattened into a one-dimensional list/array.
//
// Example:
//   n = 1: [1]
// n = 2: [1,  1, 1]
// n = 4: [1,  1, 1,  1, 2, 1,  1, 3, 3, 1]
// Note
// Beware of overflow. Requested terms of a triangle are guaranteed to fit into the returned type, but depending on seleced method of calculations, intermediate values can be larger.

const factorial = (n) => {
  if (n < 2) return 1;
  return n * factorial(n - 1);
}

function pascalsTriangle(n) {
  let result = [];
  for (let i = 0; i < n; i += 1)
    for (let e = 0; e <= i; e += 1)
      result.push(Math.round(factorial(i) / (factorial(e) * factorial(i - e))));
  return result;
}
