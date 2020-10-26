const hello = name => `Hello ${name}, you beautiful baby`
console.log(hello('Han'))

const person = (name,age) => `Your name is ${name} and you're ${age} years old`
console.log(person('Snooky', 9))

//simplify function using fat arrow
const sayHello = (firstName, lastName) => `Hello, ${firstName} ${lastName}!`
sayHello('Johann','Folta')

//Complete the following program so that the square1() and square2() functions work properly.
// Square the given number x
const square1 = number => let(i = 0; i <= 10; i++){
  Math.sqrt(number)
}
// Square the given number x
// const square2 = x => Math.sqrt(x)
//
// console.log(square1(0)); // Must show 0
// console.log(square1(2)); // Must show 4
// console.log(square1(5)); // Must show 25
//
// console.log(square2(0)); // Must show 0
// console.log(square2(2)); // Must show 4
// console.log(square2(5)); // Must show 25
