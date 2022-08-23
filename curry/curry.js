// Арность

function a(a) {
} // 1  арная

function b(a, b) {
}

{
} // 2  арная


//Обычная функция
const sum = (a, b, c) => a + b + c

sum(2, 2, 2); // 6


// Реализация каррирования

function curry(f) {
  return function curried(..args) {
    if (args.length >= f.length) {
      return f.apply(this, args)
    } else {
      return (...args2) => {
        return curried.apply(this, args.concat(args2))
      }
    }
  }
}

// Изолента  мире функция

const Isolenta = curry(sum)
const PlusTwo = Isolenta(2); // sum (2, b, c)

console.log(PlusTwo(2, 2)); // 6
