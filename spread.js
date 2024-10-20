const max = Math.max(4, 6,78,65,95,15,38,54);
console.log(max);

const numbers = [5,8,9,35,47,56,14];
// console.log(Math.max(numbers));
// console.log(numbers);

// Spread Operator: 3 dots before the array name
// console.log(...numbers);
console.log(Math.max(...numbers));


// Another feature
const friends = [1,5,5,6,88,65,41,23];
const bondu= friends;
console.log(friends, bondu);
bondu.push(37);
console.log(bondu, friends);