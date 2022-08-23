const isCorrectBracketSequences = (string) => {
  let stack = [];

  let brackets = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  const isClosedBracket = (ch) => [')', '}', ']'].includes(ch);

  for (let i = 0; i < string.length; i += 1) {
    const current = string[i];

    if (isClosedBracket(current)) {
      if (brackets[current] !== stack.pop()) return false;
    } else {
      stack.push(current);
    }
  }
  return stack.length === 0;
}

console.log(isCorrectBracketSequences('([])')); // true
console.log(isCorrectBracketSequences('([(){{}}])')) // true
console.log(isCorrectBracketSequences('([{{]}])')) // false
console.log(isCorrectBracketSequences('())')) //false
console.log(isCorrectBracketSequences('()}')) // false
