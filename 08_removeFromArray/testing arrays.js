const sampleArray = [1, 2, 3, 4, 5];
const fruits = ['apple', 'banana', 'cherry'];
console.log('=== 1. ADDING/REMOVING ELEMENTS ===\n');

let arr1=[1, 2, 3];
arr1.push(7);
console.log('push(4):',arr1);

let arr2=[1, 2, 3];
let popped = arr2.pop();
console.log('pop():',arr2,'removed',popped);

let arr3 = [2,3];
arr3.unshift(1);
console.log('unshift(1):', arr3)

let arr4=[1, 2, 3];
let shifted = arr4.shift();
console.log('shift():',arr4, 'removed', shifted);

let arr5=[1, 2, 5];
arr5.splice(2,0,3,4);
console.log('splice(2,0,3,4):',arr5);
