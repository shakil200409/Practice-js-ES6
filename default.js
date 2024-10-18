// Without any default value
function add(num1, num2) {
  const add = num1 + num2;
  console.log(num1, num2, add);
  return add;
}

// console.log(add(5,7));
// console.log(add(5));
// console.log(add());

// With default value
function sum(num1 = 0, num2 = 0) {
  const sum = num1 + num2;
  console.log(num1, num2, sum);
  return sum;
}

// console.log(sum(5,7));
// console.log(sum(5));
// console.log(sum());

// For string
function fullName(name1 = "", name2 = "") {
  const fullName = name1 + " " + name2;
  console.log(name1, name2, fullName);
  return fullName;
}

// console.log(fullName('Akkel', 'Ali'));
// console.log(fullName('Akkel'));
// console.log(fullName());
