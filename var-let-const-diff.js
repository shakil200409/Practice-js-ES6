/**
 * You can't change/ ReAssign the value of variable with const.
 * But You can use the variable to create another variable.
 * In an Array, you can't reAssign it but change the value inside it
 * Same thing goes to Object
 */
const money = 25;

// money = 50; 
const rich = money + 25;
console.log(rich);


/**
 * You can Change or ReAssign the value of a let variable
 * Also you can use it anywhere.
 */
let count = 0;
count = count + 10;
console.log(count);
let numb = count + 100;
console.log(numb);
