const hello = name => `Hello ${name}, you beautiful baby`
console.log(hello('Han'))

const person = (name,age) => `Your name is ${name} and you're ${age} years old`
console.log(person('Snooky', 9))

//simplify function using fat arrow
const sayHello = (firstName, lastName) => `Hello, ${firstName} ${lastName}!`
sayHello('Johann','Folta')

//Complete the following program so that the square1() and square2() functions work properly.
// Square the given number x
// const square1 = number => let(i = 0; i <= 10; i++){
//   Math.sqrt(number)
// }
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


//Let's pretend the JavaScript Math.min() function doesn't exist.
//Complete the following program so that the min() function returns the minimum of its two received numbers.
const min = (num1, num2) => {
  if (num1 <= num2) {
    return num1
  } else if (num2 <= num1) {
    return num2
  }
}
console.log(min(4.5, 5)); // Must show 4.5
console.log(min(19, 9));  // Must show 9
console.log(min(1, 1));   // Must show 1


// Write a program containing two functions to calculate the circumference and area of a circle defined by its radius. Test it using user input.
const circumference = (radius) => {2*Math.PI*radius}
const area = (radius) => {Math.PI*radius*2}
// Here are some tips for solving this exercise:

// Circumference and area calculation formulas should be part of your secondary school memories... Or a Google click away :)
// The value of number π (Pi) is obtained with Math.PI in JavaScript.
// You might want to use the exponentiation operator ** to perform computations.
