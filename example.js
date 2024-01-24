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

// Strings

// let quotes1 = "This string's got a single quote in it." // this is a valid string
// let quotes2 = 'The developer said, "Strings are awesome!"'; // this is a valid string

// Special String Characters 

// Horizontal tab: \t
// Newline: \n
//Carriage return: \r
// Single quote: \'
// Double quote: \"
// Backslash: \\


// Template Literals

// let name = "John";
// let lastBroughtProduct = "biscuits";

// let message = `${name} has bought ${lastBroughtProduct} in the past month.`;

// console.log(message);

// let fourthItem = 'Item 4';
// let myHtml = `
//   <ol class="item-list">
//     <li>Item 1</li>
//     <li>Item 2</li>
//     <li>Item 3</li>
//     <li>${fourthItem}</li>
//   </ol>
// `;

// console.log(myHtml);

// // Example 1

// let firstName = "Mike";
// let email = "mike@email.com";

// // Write your code here

// let message = `Dear ${firstName},
// Thank you for subscribing!
// Your email: ${email}`;
// console.log(message);

// // Example 2

// let name = "Jeff";
// console.log("Hello, my name is " + name);

// // example 3

// let username = "Jack";

// let message = "Welcome back " + username + "! You are now logged in.";
// console.log(message);

// // example 4

// let title = "This is the Title of a Book";
// let lowerTitle = title.toLowerCase();
// console.log(lowerTitle);

// let title = "caps lock is cruise control for cool";
// let upperTitle = title.toUpperCase();
// console.log(upperTitle);

// let myString = "Which letter is the best?";
// console.log(myString[0]);  // W
// console.log(myString[1]);  // h
// console.log(myString[2]);  // i
// console.log(myString[3]);  // c
// console.log(myString[4]);  // h

// // or going backwards!
// let len = myString.length;
// console.log(myString[len - 1]);  // ?
// console.log(myString[len - 2]);  // t
// console.log(myString[len - 3]);  // s
// console.log(myString[len - 4]);  // e
// console.log(myString[len - 5]);  // b

// String Methods 

// // length	Returns the length of a string (number of characters)
// charAt()	Returns the character at the specified index (position) 
// charCodeAt()	Returns the Unicode of the character at the specified index 
// concat()	Joins two or more strings, and returns a new joined strings
// endsWith()	Checks whether a string ends with specified string/characters
// fromCharCode()	Converts Unicode values to characters
// includes()	Checks whether a string contains the specified string/characters
// indexOf()	Returns the position of the first found occurrence of a specified value in a string
// lastIndexOf()	Returns the position of the last found occurrence of a specified value in a string
// localeCompare()	Compares two strings in the current locale
// match()	Searches a string for a match against a regular expression, and returns the matches
// repeat()	Returns a new string with a specified number of copies of an existing string
// replace()	Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
// search()	Searches a string for a specified value, or regular expression, and returns the position of the match
// slice()	Extracts a part of a string and returns a new string
// split()	Splits a string into an array of substrings
// startsWith()	Checks whether a string begins with specified characters
// substr()	Extracts the characters from a string, beginning at a specified start position, and through the specified number of character
// substring()	Extracts the characters from a string, between two specified indices
// toLocaleLowerCase()	Converts a string to lowercase letters, according to the host's locale
// toLocaleUpperCase()	Converts a string to uppercase letters, according to the host's locale
// toLowerCase()	Converts a string to lowercase letters
// toString()	Returns the value of a String object
// toUpperCase()	Converts a string to uppercase letters
// trim()	Removes whitespace from both ends of a string
// valueOf()	Returns the primitive value of a String object


// // Example 1

// // These variables will be sliced and concatinated
// // to form the emailAddress variable:
// let fullName = 'Andrew Martin';
// let domainName = 'gmail';
// let tld = 'com';

// // Define the emailAddress variable here.
// // Remember to use the slice() and toLowerCase() string methods:

// let emailAddress = fullName.slice(0, 6).toLowerCase() + '.' + fullName.slice(7).toLowerCase() + '@' + domainName + '.' + tld;

// // This will log the emailAddress variable to the console
// console.log(emailAddress);

// // Data Types

// // typeof 1;                        // "number"
// typeof 'Hello world!';           // "string"
// typeof true;                     // "boolean"
// typeof ['a', 'b', 'c'];          // "object"
// typeof {name: 'John', age: 30};  // "object"

// // // Example 1

// let itmOne = 10;
// let itmTwo = '20';
// let itmThree = true;

// console.log(typeof itmOne); //  this is a number
// console.log(typeof itmTwo); // this is a string
// console.log(typeof itmThree); // this is a boolean
// console.log(typeof (itmOne + itmTwo)); // this is a string because of the concatenation

// Numbers

// // Example 1

// let myNumber = 123;

// myNumber += 1;  // Adds 1, now myNumber is 124

// // Declare another variable and multiply them
// let multiplier = 2;
// let product = myNumber * multiplier;
// console.log(product);  // 248
// console.log(typeof product);  // "number"

// // Number("123");       // 123
// Number(null);        // 0
// Number(true);        // 1
// Number("Hello!");    // NaN (Not a Number)
// Number(1.8e308);     // Infinity
// Number(-1.8e308);    // -Infinity

// Numbers also have a number of methods and properties available for manipulating them and retrieving information about them. 
// A table of the methods you'll most likely use in your everyday JavaScript development is below:

// Method/Property	Purpose	Usage	Result
// Number.isNaN()	Returns whether the passed value is Not a Number	isNaN("Hello!");	true
// Number.isFinite()	Returns whether the passed value is finite	isFinite(Infinity);	false
// Number.isInteger()	Returns whether the passed value is an integer	isInteger(123);	true
// Number.parseFloat()	Attempts to convert the passed value to a float	parseFloat("123.45");	123.45
// Number.parseInt()	Attempts to convert the passed value to an integer	parseInt("123.45");	123
// The following are instance methods which operate on a Number instance
// toFixed()	Returns a string representing the number with the passed number of decimal places	123.45.toFixed(4);	"123.4500"
// toPrecision()	Returns a string representing the number with the passed precision	123.45.toPrecision(4);	"123.5"
// toString()	Returns a string representing the number in the specified base (10 by default)	123.45.toString();	"123.45"


// Example 2 

// let first = "42";
// let second = "24.7";

// let result = first + second;
// console.log(result)
// /*
// The console.log above will log "4224.7" to the console, because 
// it is concatinating strings instead of adding the values together
// */

// let result2 = parseInt(first) + parseInt(second);
// console.log(result2)
// /* 
// The console.log above will log 66 to the console, because both 
// string values are converted to number types. However the second 
// value has a decimal point, which means its value is rounded down to make a whole number because parseInt() was used, not parseFloat()
// */

// let result3 = parseInt(first) + parseFloat(second)
// console.log(result3)
// /* 
// The console.log above will log 66.7 to the console. because now 
// the second value is parsed to a float which allows for the decimal
// point. 
// */


// Null and Undefined

// null is used when you want to explicitly represent "nothing". 
//It is often used as the indication that an object could exist, but currently explicitly does not. 
// This is not the same as undefined, which means that an object does exist but it doesn't have any value associated with it.

// example 1

// let myVar = null;
// console.log(Boolean(myVar));  // false

// if (myVar) {
//   // will not run; null is falsy
// }

// example 2

// let x;
// if (typeof x === "undefined") {
//   // this will execute
// }

// example 3

// javascript code

// let admin = null;
// console.log(admin);
// let passwordRequired;
// console.log(passwordRequired);

// Infinity, -Infinity and NaN

// Infinity is a special numeric value that represents infinity.
// -Infinity is a special numeric value that represents negative infinity.
// NaN is a special numeric value that represents Not-a-Number.

// // example 1

// let finite = isFinite(12345);
// let infinite = isFinite(1.9e308);

// console.log(finite);    // true
// console.log(infinite);  // false

// // example 2

// let passingString = isNaN("hello!");
// let passingNumber = isNaN(12345);
// let passingNumberAsString = isNaN('12345');

// console.log(passingString);          // true
// console.log(passingNumber);          // false
// console.log(passingNumberAsString);  // false ('12345' is coerced to a Number)

// example 3

// javascript code

// let notANumber = isNaN('a');
// console.log(notANumber);

// let isANumber = isNaN(95);
// console.log(isANumber);

// let finiteNumber = isFinite(45);
// console.log(finiteNumber);

// let notAFiniteNumber = isFinite(1/0);
// console.log(notAFiniteNumber);

// example 4

// javascript code

// let num100 = 100;
// let str100 = "100";
// console.log(num100 == str100);
// console.log(num100 === str100);
// console.log(num100 + str100);
// console.log(num100 + Number(str100));

// Storing values with operators

