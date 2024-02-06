// Practise of JavaScript Coding
// Reminder to run JS code in the terminal: node JS.js

// let myVar = 5;
// console.log(myVar);

// const pi = 3.14;
// let radius = 12;
// var circumference = pi*2*radius;


// console.log(pi);
// console.log(radius);
// console.log(circumference);

// let globalVar = "My Global Variable";

// for (let i =0; i < 5; i++){
//     let localVar = "My Local Variable";
//     console.log(i);
// }

// let name = "Bilbo Baggins";
// let home = "Bag End";

// console.log(`${name} lives at ${home}`);

// let firstName = "Mike";
// let email = "mike@email.com";

// // Write your code here

// let message =  `Dear ${firstName},
// Thank you for subscribing!
// Your email: ${email}`;

// console.log(message);

// let name = "Jeff";
// let myString = 'Hello, my name is ' + name;

// console.log(name);
// console.log(name.length);
// console.log(myString);

// let fruits = ['apples', 'oranges', 'bananas'];
// let myHtml = '<ol>';

// for (let i= 0; i < fruits.length; i++){
//     myHtml += `<li>${fruits[i]}</li>`;
// }
// myHtml += '</ol>';

// console.log(myHtml);

// FizzBuzz

// for (let i = 1; i <= 100; i++){
//     if (i % 3 === 0 && i % 5 === 0){ 
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0){
//         console.log("Fizz");
//     } else if (i % 5 === 0){
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }


// Given a number as an input, print out every integer from 1 to that number. 
//However, when the integer is divisible by 2, print out "Fizz"; when it's divisible by 3, 
// print out "Buzz"; when it's divisible by both 2 and 3, print out "Fizz Buzz".

// function fizzBuzz(num) {
//     for (let i = 1; i <= num; i++) {
//         if (i % 2 === 0 && i % 3 === 0) 
//             console.log("Fizz Buzz");

//         else if (i % 3 === 0) {
//             console.log("Buzz");
//         }

//         else if (i % 2 === 0) {
//             console.log("Fizz");
//         } 
        
//         else if (i % 5 === 0)
//             console.log(i);
        
//         else {
//             console.log(i);
//         }
//     }
// }

// fizzBuzz(6);

// let listOfNumbers = [1,2,3,4,5];

// for (let i = 0; i < listOfNumbers.length; i++){
//     console.log(listOfNumbers[i]);
// }
// console.log(listOfNumbers);
// console.log(listOfNumbers.length);

// i++ means i = i + 1
// i-- means i = i - 1

// i-- means i = i - 1
// --i means i = i - 1

// let num = 10;
// console.log(num);

// num ++;
// console.log(num);

// num --;
// console.log(num);

// let title = "this is a title of a book";

// let upperTitle = title.replace(/\b\w/g, function(char) {
//     return char.toUpperCase();
//    });
   
//    console.log(upperTitle);
//    console.log(title[0]);
//    console.log(title.indexOf("i")); // 2


// let title = "this is a title of a book";
// let characterToCount = 'p';
// let count = 0;

// for (let i = 0; i < title.length; i++) {
//     if (title[i] === characterToCount) {
//         count++;
//     }
// }

// console.log("Number of '" + characterToCount + "' characters in title:", count);
   



// let upperTitle = title.toUpperCase();
// console.log(upperTitle);

// let fruits = ['apples', 'oranges', 'bananas', 'cherries'];
// let numberOfFruits = fruits.length;	
// let i = 0;
// while (i < numberOfFruits) {
//     console.log(fruits[i] + ' are delicious!');
//     i++;
// }

// console.log('I love fruit!');

let fruits = ['apples', 'pears', 'cherries', 'bananas', 'peaches', 'oranges'];
let lastItem = fruits.pop();
console.log(lastItem);
console.log(fruits);

let NewLength = fruits.push('kiwi');
console.log(NewLength);
console.log(fruits);

fruits.sort()
console.log(fruits);

let hasApples = fruits.includes('apples');
let hasMangoes = fruits.includes('mangoes');
console.log(hasApples);
console.log(hasMangoes);

console.log(fruits);

fruits.splice(0, 0, 'mangoes');
console.log(hasMangoes);
console.log(fruits);
console.log(hasMangoes);
console.log(fruits);