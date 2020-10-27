const movies = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];
// console.log(movies[3])

for (const items  of movies) {
  console.log(items);
}

let babies = ['Han', 'Snooky', 'Hoho']
for(const baby of babies) {
  console.log(`${baby} is the cutest baby`);
}


const musketeers = ["Athos", "Porthos", "Aramis"]

for(let i=0; i < musketeers.legth; i++){
  console.log(musketeers[i]) //`${i} is on of 3 Musketeers!`
}

musketeers.push("D'Artagnan")
console.log(musketeers)

musketeers.forEach(index => {
  console.log(`${index} is a musketeer`)
})

musketeers.shift(2,1)
console.log(musketeers);

for(const member of musketeers){
  console.log(member);
}


//Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).

const values = [3, 11, 7, 2, 9, 10]

for(const value of values){
  responce = (value + values.length)
  console.log(responce)
}


//Write a program that creates the following array, then calculates and shows the array's maximum value.

const values = [3, 11, 7, 2, 9, 10]
if(values[i] <= values[i]){

}else (values[i] => values[i]){

}


//Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".
