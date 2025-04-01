// 1. concat()
const arr1 = ["Lorena", "RhinaMae"];
const arr2 = ["Bea", "Lander", "Asher"];
const joinedArray = arr1.concat(arr2);
console.log("Joined array:", joinedArray);


// 2. push()
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log("Fruits after push():", fruits);


// 3. unshift()
let array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log("Array1 after unshift():", array1);


// 4. pop()
fruits.pop();
console.log("Fruits after pop():", fruits);


// 5. shift()
let array2 = [1, 2, 3];
array2.shift();
console.log("Array2 after shift():", array2);


// 6. sort()
fruits.sort();
console.log("Fruits after sort():", fruits);


// 7. slice()
const slicedFruits = fruits.slice(1, 3);
console.log("Sliced fruits:", slicedFruits);


// 8. splice()
const months = ["June", "April", "August", "October"];
months.splice(1, 0, "July");
months.splice(4, 1, "September");

console.log("Months after splice():", months);
