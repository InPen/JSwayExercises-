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
  function describe(){
    return('Serena aka Sailor Moon is the princess of the Moon Kingdon ')
  }
}
// serena is harmed by an arrow
serena.health -= 20;

// serena equips a strength necklace
serena.strength += 10;

// serena learn a new skill
serena.xp += 15;

console.log(serena.describe());
