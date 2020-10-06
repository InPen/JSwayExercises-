//CONDITIONALS
// const number = Number(prompt("Enter a number:"));
// if (number >= 0) {
//   console.log(`${number} is positive or zero`);
// }

// const weather = prompt("What's the weather like?");
// if (weather === "sunny") {
//   console.log("T-shirt time!");
// } else if (weather === "windy") {
//   console.log("Windbreaker life.");
// } else if (weather === "rainy") {
//   console.log("Bring that umbrella!");
// } else if (weather === "snowy") {
//   console.log("Just stay inside!");
// } else {
//   console.log("Not a valid weather type");
// }

// const x = "abc";
// switch (x) {
//   case "abc":
//     console.log("x = abc");
//   // break omitted: the next block is also run!
//   case "def":
//     console.log("x = def");
//     break;
// }


//Write a program that accepts a day name from the user, then shows the name of the following day.
//Incorrect inputs must be taken into account.

const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const dayOfWeek(prompt("What day of the week is today?:"))
if(dayOfWeek === week){
  console.log('then tommorow must be ${week[i]+1}');
} else {
  console.log('Uuum, yea that is not a day of the week, homie');
}
