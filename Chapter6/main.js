// const pen = {
//   type: "ballpoint",
//   color: "blue",
//   brand: "Bic"
// }
// console.log(pen.type);  // "ballpoint"
// console.log(pen.color); // "blue"
// console.log(pen.brand); // "Bic"

// TODO: create the character object here
const serena = {
  name: 'Serena',
  strength: 100,
  health:100,
  xp:50,
  weapon:'Moon Crystal',
  describe(){
    return(`${this.name} aka Sailor Moon is the princess of the Moon Kingdon her health is ${this.health} and her weapon is ${this.weapon} `)
}
}
// serena is harmed by an arrow
serena.health -= 20;

// serena equips a strength necklace
serena.strength += 10;

// serena learn a new skill
serena.xp += 15;

console.log(serena.describe());


//Complete the following program to add the dog object definition.

const dog = {
  name:'Snooky',
  species:'Victorian Bulldog',
  size:'XLovable',
  bark(){
    return `woof woof`
  }
}

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);


//BANK ACCOUNT
const bankAccount = {
  name:'Han Folta',
  balance:89000000,
  credit:564000000,
  describe(){
    return `${this.name} your balance is $ ${this.balance}`
  }
}
console.log(bankAccount.describe());
