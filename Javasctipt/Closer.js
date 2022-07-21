const sayHi = (name) => {
  const greeting = 'hello, my name is';
  return `${greeting} ${name}`;
}

// console.log(greeting); // Reference Error;
sayHi('Jack');   // "Hello, my name is Jack"

//Closures

const createPhrase = (greeting) =>  {
  return (name) => `${greeting} ${name}`;
}

const sayHi2 = createPhrase('Hello');
console.log(sayHi2('Danil'));            // Hello Danil!
const sayBye = createPhrase('Bye');
console.log(sayBye('Max'));             // Bye Max!
