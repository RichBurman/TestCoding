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

// Storing Values

// Operator	Description	Example	Same As
// =	Assignment	let x = 5;	x = 5
// +=	Addition Assignment	x += 3	x = x + 3
// -=	Subtraction Assignment	x -= 3	x = x - 3
// *=	Multiplication Assignment	x *= 3	x = x * 3
// /=	Division Assignment	x /= 3	x = x / 3
// %=	Remainder Assignment	x %= 3	x = x % 3
// **=	Exponentiation Assignment	x **= 3	x = x ** 3

// Example 1

// let x = 10; 

// x += 1;   // 10 + 1 = 11
// x -= 1;   // 10 - 1 = 9
// x *= 2;   // 10 * 2 = 20
// x /= 2;   // 10 / 2 = 5
// x %= 3;   // 10 % 3 = 1 (returns the remainder of 10/3 = 1)
// x **= 3;  // 10 ** 3 = 1000 

// javascript code

// let num = 10;
// console.log(num);
// num += 10;
// console.log(num);
// let numB = 10;
// console.log(numB);
// numB *= 10;
// console.log(numB);

// PEMDAS and Operator Precedence 

// PEMDAS is an acronym that stands for Parentheses, Exponents, Multiplication, Division, Addition, Subtraction.

// With arithmetic operators it's important to remember the order of operations, PEMDAS. 
// In JavaScript the rules are the same as in the mathematics you learned growing up, that is, there is a predecence to each operator. In order:

// PE: Parentheses and exponents
// MD: Multiplication and Division
// AS: Addition and subtraction

// Example 1

// let x = 2;
// let y = 3;
// let z = 4;

// console.log(x + y * z);  // 2 + 12 = 14
// console.log((x+y) * z);  // 5 * 4 = 20


// Operator	Description	Usage	Example
// +	Addition	result = a + b	2 + 2 = 4
// -	Subtraction	result = a - b	2 - 2 = 0
// *	Multiplication	result = a * b	2 * 5 = 10
// /	Division	result = a / b	10 / 2 = 5
// **	Exponentiation	result = a ** b	2 ** 3 = 8  // 2 to the power of 3 which means 2 * 2 * 2 
// %	Modulo (returns the remainder)	result = a % b	10 % 4 = 2 // 10 divided by 4 leaves a remainder of 2

// Incrementing and Decrementing

// i++ // increment by 1
// ++i // increment by 1
// i-- // decrement by 1
// --i // decrement by 1

// Without Increment Operator:

// let x = 1;
// x = x + 1;
// With Increment Operator:

// let x = 1;
// x++;

// Adding up 
// for (let x = 0; x < 10; x++){
//     console.log(x);
//   }


// Subtracting down
//   for (let x = 10; x >= 0; x--){
//     console.log(x);
//   }

// You can use the increment and decrement operators to declare a new variable and increment/decrement the original one simultaneously, too, 
// by using them either as a prefix or a postfix. If used postfix, with operator after operand (for example, x++), 
// the increment operator increments and returns the value before incrementing. 
//If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing. 
// The following examples are from the MDN website article on incrementing:

// Postfixing:

// let x = 3;
// y = x++;

// // y = 3
// // x = 4
// Prefixing:

// let x = 3;
// y = ++x;

// // y = 4
// // x = 4


// // Example 1

// let num = 10;
// console.log(num);
// num++;
// console.log(num);
// num--;
// console.log(num);

// Comparison Operators

// // example 1

// let canVote = false;
// let age = 19;

// if (age >= 18) {
//   canVote = true;
// }
// console.log(canVote);  // true

// Operator	Description	JavaScript Example	Returns
// ==	Equal to (loose equality)	console.log(1 == 1)	true
// ===	Equal to (strict equality)	console.log(1 === "1")	false
// !=	Not equal to (loose equality)	console.log(1 != 1)	false
// !==	Not equal to (strict equality)	console.log(1 !== "1")	true
// >	Greater than	console.log(2 > 1)	true
// <	Less than	console.log(2 < 1)	false
// >=	Greater than or equal to	console.log(2 >= 1)	true
// <=	Less than or equal to	console.log(2 <= 1)	false


// example 2

// let varOne = 1 === 2; 
// console.log(varOne);

// let varTwo = 1 !== 2;
// console.log(varTwo);

// let varThree = 1 > 2;
// console.log(varThree);

// let varFour = 1 <= 2;
// console.log(varFour);

// Determining Truth 

// && (AND): returns true only if all operands are true
// || (OR): returns true if any of the operands are true
// ! (NOT): negates the operand it's used on

// example 1

let usernameCorrect = true;
let passwordCorrect = false;
let connected = true;
let ready = usernameCorrect && passwordCorrect && connected;

if (ready) {
  console.log('Ready to go!');
}


// The && Operator: this operator returns true only if all operands are true.

// a	b	a && b
// true	true	true
// true	false	false
// false	true	false
// false	false	false

// The || Operator: this operator returns true if any of the operands are true.

// a	b	a || b
// true	true	true
// true	false	true
// false	true	true
// false	false	false

// The ! Operator: this operator negates the operand it's used on.

// a	!a
// true	false
// false	true

// example 2

// let passport = true;
// let ticket = true;
// let weapons = false;
// let a = 10;
// let b = 5;

// let either = a > 10 || b <= 5 ; // either a is greater than 10 or b is less than or equal to 5

// let getOnFlight = passport && ticket && !weapons; // you can get on the flight if you have a passport and a ticket and no weapons

// console.log(either); // true
// console.log(getOnFlight); // true

// Equality vs Strict Equality

// Equality (==): this operator checks if the operands are equal, and if they are, returns true.
// Strict Equality (===): this operator checks if the operands are equal and of the same type, and if they are, returns true.
// is checks whether the operands are equal and of the same type, and if they are, returns true.


// == (Loose Equality): Compares values after coercing them to compatible types
// === (Strict Equality): Compares values without type coercion, comparing the data type as well

// example 1

// let a = 1;
// let b = "1";

// a == b   // true
// a === b  // false

// When using ==, the first number is coerced to a string before the comparison takes place, 
// which causes JavaScript to determine that 1 (a number) and "1" (a string) are equal. 
// In reality, they are not equal. The two values were coerced to the same type. 
// The strict equality operator does not do this, and thus returns false because a string and a number are different data types. 
// In short, you should always use strict equality (===) for testing equality in JavaScript unless you have a specfic reason not to.

// The Object.is() operator takes two parameters which are the two objects to compare, 
// and returns a boolean depending on whether they are the same object.

// // example 2

// let varA = '10';
// let varB = 10;

// let varC = "";
// let varD = 0;
// let varE = 1;

// console.log(varA == varB);
// console.log(varA === varB);
// console.log(varC == varD);
// console.log(varC === varD);
// console.log(varC == varE);

// If/Else Statements


// // if (condition) {
//   // code if true
// } else {
//     // code if false
//   }

// example 1 

// let a = 1;
// let b = 2;
// let firstGreater;

// if (a > b) {
//   firstGreater = true; 
// } else {
//   firstGreater = false;
// }
// console.log(firstGreater);


// example 2 

// let a = 10;
// let b = 20;
// let result;

// // Write your if statement here:

// if (a < b) {
//     result = 'a is smaller';
// }
// else {
//     result = 'a is not smaller';
// }


// console.log(result);

// Terinary Expressions is a shortcut for if/else statements

// Standard conditional statement:

// if (condition) {
  // code if true
// } else {
  // code if false
// }
// Equivalent ternary expression:

// Boolean Expression ? code if true : code if false

// condition ? code if true : code if false

// // example 1

// this is the shorthand version of if/else statements

// // let memberType = 'basic'; 
// let price = memberType === 'basic' ? 5 : 10;

// this is the long-hand version of if/else statements

// // let memberType = 'basic';
// let price;

// if (memberType === 'basic') {
//   price = 5;
// } else {
//   price = 10;
// }

// Expressions can be chained together using else if:

// // let memberType = 'elite';
// let price = memberType === 'basic' ? 5
// : memberType === 'pro' ? 10
// : memberType === 'elite' ? 20
// : 0;

// // example 2

// let a = 10;
// let b = 20;
// let result;

// // Write your code below this line. 

// result = (a < b) ? 'a is smaller' : 'a is not smaller';

// console.log(result);

// If/Else If/Else Statements

// Example 1

// if (condition 1) {
//     // condition 1 true code
//   } else if (condition 2) {
//     // condition 2 true code
//   } else if (condition 3) {
//     // condition 3 true code
//   } else if (condition n) {
//     // condition n true code
//   } else {
//     // default code
//   }

// Example 2

// let memberType = 'elite';
// let price;

// if (memberType === 'basic') {
//   price = 5;
// } else if (memberType === 'pro') {
//   price = 10;
// } else if (memberType === 'elite') {
//   price = 20;
// } else {
//   price = 0;
// }
// console.log(price);  // 20

// // example 3

// // javascript code

// let age = 15;
// let result;

// if (age > 21) {
//     result = "drink whiskey";
// } else if (age >= 18) {
//     result = "drink beer";
// } else if (age > 12) {
//     result = "drink cola";
// } 
// else {
//     result = "drink apple juice";
// }

// console.log(result);

// Switch Statements

// swtich statements are used to perform different actions based on different conditions. 

// // switch (expression) {
//   case 'value1':
//     // code block 1
//     break;
//   case 'value2':
//     // code block 2
//     break;
//   case 'valuen':
//     // code block n
//     break;
//   default:
//     // default result
// }


// // let day;
// let dayNumber = 2;

// switch (dayNumber) {
//   case 0:
//     day = 'Sunday';
//     break;
//   case 1:
//     day = 'Monday';
//     break;
//   case 2:
//     day = 'Tuesday';
//     break;
//   case 3:
//     day = 'Wednesday';
//     break;
//   case 4:
//     day = 'Thursday';
//     break;
//   case 5:
//     day = 'Friday';
//     break;
//   case 6:
//     day = 'Saturday';
//     break;
//   default:
//     day = 'Invalid day number';
// }

// console.log(day);  // Tuesday

// example 2

// function findDayOfWeek(dayNumber) {
//     switch (dayNumber) {
//       case 0:
//         return 'Sunday';
//       case 1:
//         return 'Monday';
//       case 2:
//         return 'Tuesday';
//       case 3:
//         return 'Wednesday';
//       case 4:
//         return 'Thursday';
//       case 5:
//         return 'Friday';
//       case 6:
//         return 'Saturday';
//       default:
//         return 'Invalid day number';
//     }
//   }
//   let day = findDayOfWeek(2);
//   console.log(day);  // Tuesday

// example 3

// let result = ''; // Do not change this. You assign to this variable within the switch statement.
// let errorType = "page";

// // write your code here

// switch (errorType) {
//     case "username":
//         result =  "That username is incorrect, please try again.";
//         break;
//     case "password":
//         result = "Incorrect password, please try again.";
//         break;
//     case "page":
//         result = "Sorry this page doesn't exist.";
//         break;
//     default:
//         result = "Error message unknown";
// }

// console.log(result);


