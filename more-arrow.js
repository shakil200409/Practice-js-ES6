// Double parameter
const difference = (x, y) => x - y;
const multiply = (a = 1, b = 1, c = 1) => a * b * c;

console.log(difference(10, 8));
console.log(multiply(2, 45));

// Single parameter
const getAge = (person) => person.age;
const student = {
  name: "Shakil",
  age: 20,
  class: "Diploma",
};
const age = getAge(student);
console.log(age);

const getThird = (numbers) => numbers[2];
console.log(getThird([12, 20, 58, 37, 45]));

// No parameter
const getPI = () => Math.PI;

console.log(getPI());

// Large Arrow function
const doMath = (x, y, z) => {
  const sum = x + y + z;
  const sub = z - y;
  const mul = x * z;
  const div = mul / sub;
  const result = sum + div;
  return result;
};

console.log(doMath(2, 4, 10));
