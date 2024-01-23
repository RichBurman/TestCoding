/**
 * This is where I store my JavaScript coding notes and examples.
 */


// to run this file, type node example.js in the terminal
// JavaScript is a programming language that is used to create interactive effects within web browsers.

// Variables in JavaScript

/* There are three ways to declare a variable in JavaScript, and each has a slightly different use case. All three methods follow the same syntax, but use a different keyword: // */


// let myVar = "a variable"; // let is used to declare a variable that can be reassigned later in the program.
// const myVar = "a variable"; // const is used to declare a variable that cannot be reassigned later in the program.
// var myVar = "a variable"; // var is used to declare a variable that can be reassigned later in the program. var is the original keyword used to declare variables in JavaScript, but it has largely been replaced by let and const.


// Variables declared with let have three defining characteristics:

// They have block scope, which means they are only defined within the confines of their own code block (bounded by {curly braces})
// They cannot be redeclared within the same scope. In other words:
// let myVar = "a variable";
// let myVar = "a different variable";  // this will throw a SyntaxError. myVar is already declared.
// They can be reassigned, regardless of scope. In other words:
// let myVar = "a variable";
// myVar = "a different variable";  // We're not redeclaring it, rather giving the same variable a new value.

// Example 1

// Create your variables here.

// const pi = 3.14;
// let radius = 12;
// var circumference = pi*2*radius;

// console.log(pi);
// console.log(radius);
// console.log(circumference);

// Important note: When you declare a variable with const, you must assign it a value on the same line. Otherwise, you will get a SyntaxError.
// Example 2

// let globalVar = "My global variable"
// // globalVar has global scope

// for (let i = 0; i < 5; i++) {
//   let localVar = "myLocalVar";
//   console.log(i);

//   // Both i and localVar have local scope
// }

// Example 3

// // This is needed for the unit tests, do not remove it or you will fail!
// "use strict";

// const company = "Big Bucks co."; // this is a global variable
// let profit = 900; // this is a global variable
// let financeManager = "Richard"; // this is a global variable

// if (profit < 1000) { // this is a local variable
// 	var richardFired = true; // this is a local variable
// 	financeManager = "Fay"; // this is a local variable
// } 

// console.log(company); // this is a global variable
// console.log(financeManager); // this is a global variable
// console.log(richardFired); // this is a global variable


