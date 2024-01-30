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


// Nested if/Else Statements

// example layout 

// if (condition) {
//   // nested code
//   // can be multiple lines
//   // all this executes if the condition is true
// } else {
//   // nested code
//   // otherwise, all this code executes
// }

// example 1

// if (condition) {

//   if (anotherCondition) {
//     // executes if both condition and anotherCondition are true
//   } else {
//     // executes if condition is true and anotherCondition is false
//   }

// } else {
//   // executes if condition is false
// }

// Example 2

// let user = true;
// let emailVerified = false;

// if(user) { // if user is true
//   if(emailVerified) { // if emailVerified is true
//     console.log('Welcome to our web-site'); // this will run
//   } else { // if emailVerified is false
//     console.log('Please verify your email'); // this will run
//   }
// }  else { // if user is false
//   console.log('You need to be a user to visit this page'); // this will run
// }

// For Loops are used to execute a block of code a number of times.

// // Example 1

// let fruits = ['apples', 'oranges', 'bananas', 'cherries'];
// let numberOfFruits = fruits.length;

// for (let i = 0; i < numberOfFruits; i++) {
//   console.log(fruits[i] + ' are delicious!');
// }

// console.log('I love fruit!');

// In the example we first declare an array of fruits, then store the array's length in a variable called numberOfFruits. 
// Knowing the length of the array, we decide we want to iterate through each fruit, 
// say it's delicious and then print "I love fruit!" when the loop is complete. 
// To do this the initializingExpression sets a variable i to 0, which is the first index in the array ('apples'). 
// The condition being checked is whether i is less than the total number of fruits (4), 
// and we need to use less than here rather than less than or equal to, 
// because when i is equal to 4 the loop will try to get fruits[4] which doesn't exist. 
// Remember that the indexes start with zero, so the fourth fruit is actually index 3. 
// After each iteration of the loop, the incrementingExpression increments i by one using the increment operator (++). 
// Finally, when i is no longer less than 4, loop iteration is complete so control returns to the global scope 
// and prints "I love fruit!".

// // Example 2

// let numbers = [42, 65, 0, 9, 73, 10, 11, 44];

// // Write your code here

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i] + 10);
// }

// While Loops

// Example 1

// let fruits = ['apples', 'oranges', 'bananas', 'cherries'];
// let numberOfFruits = fruits.length;

// let i = 0;
// while (i < numberOfFruits) {
//   console.log(fruits[i] + ' are delicious!');
//   i++;
// }

// console.log('I love fruit!');

// Example 2

// let i = 0; // initializingExpression
// while (i <= 10) { // condition
//     console.log(i); // code block
//     i += 1; // incrementingExpression
// } // loop ends

// Do/While Loops

// A while loop does not guarantee that the code within its statement block will execute. 
// If the condition is never evaluated to true, 
// the code will never be executed. Consider this example:

// Example 1

// let i = 10;
// while (i < 10) {
//   console.log('checking i...');
//   console.log('i is', i);
// }
// console.log('Loop complete');

// Here, the console.log will never happen because i is assigned above as 10 which makes the while condition false from the start. 
// Sometimes you might want the code to always be executed at least once, though. 
// For this purpose you have the do ... while loop:

//Example 2

// let i = 10;
// do {
//   console.log('checking i...');
//   console.log('i is', i);
// } while (i < 10);
// console.log('Loop complete');


// In this case, the loop will always be executed at least once because the do statement comes before the while condition is checked. 
// This is a handy trick to have up your sleeve if you need to guarantee that a piece of code always get executed at least once 
// while it's still able to be controlled by a while loop that checks a condition on every subsequent iteration.

// // Example 3

// // javascript code

// let attemptedUploads = 0;
// do {
//     console.log("Attempting upload...");
//     attemptedUploads++;
// } while (attemptedUploads < 5);

// console.log("Upload attempts exceeded maximum");

// Break and Continue

// break: breaks out of the loop entirely.
// continue: continues with the next iteration of the loop, effectively "skipping" an iteration.

// Example 1

// let i = 0;
// while (i <= 1000000) {
//   if (i === 5) {
//     console.log('Breaking!');
//     break;
//   }
//   console.log(i);
//   i++;
// }
// console.log('Loop has been broken.');

// // Example 2 

// for (let i = 0; i <= 1000000; i++) { // same as while loop above
//   if (i === 5) {
//     console.log('Breaking!');
//     break;
//   }
//   console.log(i);
// }
// console.log('Loop has been broken.');

// Example 3

// for (let i = 0; i <= 10; i++) { // same as while loop above
//   if (i % 2 !== 0) { // if i is not even
//     continue; // skip the rest of the loop body
//   }
//   console.log(i); // 0, 2, 4, 6, 8, 10
// }
// console.log('Loop complete.'); // this will still run

// Labelling


// let i = 0;
// iLoop:
//   while (i <= 1000000) {
//     let j = 0;
//     jLoop:
//       while (j <= 100) {
//         if (j === 3) {
//           console.log('Breaking the outer loop from the inner loop.');
//           break iLoop;
//         }
//         console.log('j is', j);
//         j++;
//       }

//     if (i === 5) {
//       console.log('Breaking!');
//       break;
//     }

//     console.log('i is', i);
//     i++;
//   }
// console.log('Loop has been broken.');


// This example is a little more complex, but we can break it down: The outer loop is set to iterate from 0 to 1 million. 
// If it encounters 5, the if statement within the outer loop will break it. However, before it hits this if statement, 
// there is another while loop set to iterate a variable j from 0 to 100. 
// Within that loop is an if statement that checks each iteration to see if j === 3. 
// If that condition is true it will break the outer loop using the label iLoop!

// When the outer loop is originally created it is given a label of iLoop. 
// If we had simply used break; inside the inner loop rather than break iLoop;, 
// it would have broken the inner loop (the one labelled jLoop) and continued with the outer one. 
// The if statement checking whether i === 5 would still have broken the outer loop at that point, 
// but using a label allowed us to break it from inside another loop. 

// Example 2

// javascript code

// for (let x = 0; x <= 20; x++) {

//   if(x % 2 == 1){
//           continue;
//   }
  
//   if(x == 10) {
//       break;
//   }
//   console.log(x);
//   }
  
  // Nested Iteration - A loop nested inside another loop.

  // Example 1

  // for (let x = 0; x < 3; x++) {
  //   for (let y = 0; y < 3; y++) {
  //     let point = [x, y];
  //     console.log(point);
  //   }
  // }

  // Example 2

//   for (let x = 0; x < 4; x++) {
//     for (let y = 200; y < 204; y++){
//         console.log('Outer loop x:',x,'Inner loop y:', y);
//     }
// }

// Arrays

// Example 1

// let cars = ['Ford', 'Honda', 'Toyota', 'Tesla']; // array literal

// console.log(cars); // ['Ford', 'Honda', 'Toyota', 'Tesla'] // array literal

// console.log(cars[0]); // Ford // access the first element in the array

// for (let car = 0; car < 3; car++) { // loop through the array
//   console.log(cars[car]); // Ford, Honda, Toyota
// }

// Example 2

// If not sure how many items will be in the array, you can use the length property to find out:

// let lotsOfElements = ['a', 'b', 'c', 'd', 'e', 'f'];
// console.log(lotsOfElements.length);

// for (let i = 0; i < lotsOfElements.length; i++) {
//   console.log(lotsOfElements[i]);
// }

// Example 3

// let clothes = ["shirt", "shoes", "socks", "hat", "vest", "shorts", "skirt", "scarf"];

// let varOne = clothes[0];
// console.log(varOne);

// let varTwo = clothes[5];
// console.log(varTwo);

// let varThree = clothes[4];
// console.log(varThree);

// Array Methods 

// let fruits = ['apples', 'pears', 'cherries', 'bananas', 'peaches', 'oranges'];

// Popping and Pushing

// let lastItem = fruits.pop();

// console.log(lastItem);
// console.log(fruits);

// let newLength = fruits.push('mangoes');
// console.log(newLength);
// console.log(fruits);

// Shifting and Unshifting

// let firstItem = fruits.shift();

// console.log(firstItem);
// console.log(fruits);

// let newLength = fruits.unshift('mangoes');
// console.log(newLength);
// console.log(fruits);


// Deleting and splcing

// delete fruits[2];
// console.log(fruits);


// fruits.splice(2, 1);  // Remove one item starting at index 2
// console.log(fruits);

// Changing the values of specific elements

// Remove 'cherries', insert 'pineapples' and 'mangoes'
// 'bananas' is shifted to the right
// fruits.splice(2, 1, 'pineapples', 'mangoes');
// console.log(fruits);



// Insert 'pineapples' and 'mangoes' starting at index 2
// 'cherries' is shifted to the right
// fruits.splice(2, 0, 'pineapples', 'mangoes');
// console.log(fruits);


// If you simply want to change the value of an existing element, you can do it directly by replacing its index with the new value:

// fruits[2] = 'pineapples';
// console.log(fruits);

// Slicing, sorting and merging


// let subset = fruits.slice(2, 4); // Returns a new array containing the elements at index 2 and 3
// console.log(fruits); // ['apples', 'pears', 'cherries', 'bananas', 'peaches', 'oranges']
// console.log(subset); // ['cherries', 'bananas']

// Sorting

// fruits.sort(); // Sorts the array alphabetically
// console.log(fruits);

// Concat 

// let fruits = ['apples', 'pears', 'cherries', 'bananas', 'peaches', 'oranges'];
// let vegetables = ['carrots', 'peas', 'beans', 'lettuce'];
// let healthyFoods = fruits.concat(vegetables);

// console.log(fruits);
// console.log(vegetables);
// console.log(healthyFoods);

// Testing whether an array includes an element

// let fruits = ['apples', 'pears', 'cherries', 'bananas', 'peaches', 'oranges'];
// let hasApples = fruits.includes('apples');  // true
// let hasMangoes = fruits.includes('mangoes');  // false
// console.log(hasApples);
// console.log(hasMangoes);

// Mapping, filtering and reducing

// Mapping .map(): executes a given function on every single element of the array. An example might be capitalizing all the elements of an array, or multipling them all by some number.

// .filter(): filters the array down to only elements that meet specific criteria. An example might be filtering a list of names down to only names that begin with a certain letter.

// .reduce(): reduces all the array elements down to a single result based on a given formula. An example might be reducing an array of numbers down to their sum, by addng them all together.

// Example 1

// let crew = ["Jean-Luc", "Wesley", "Warf", "William", "Data", "Tasha"];
// console.log(crew);

// let lastCrewMember = crew.pop();
// console.log(lastCrewMember);
// console.log(crew);

// crew.sort();
// console.log(crew);

// let newCrew = crew.slice(1, 4);
// console.log(newCrew);

// newCrew.push('Guinan');
// console.log(newCrew);


// Objects 

// By wrapping a list of property:value pairs in curly braces ({}).

// let person = {name: 'John', age: 30};

// let car = {
//   color: 'white',
//   numberOfSeats: 5,
//   price: 20000
// }

// let object = {
//   property1: value1,
//   property2: value2,
//   property3: value1,
//   ...
//   propertyN: valueN
// }


// Example 1

// let spaceship = {
//   name : "Red Dwarf",
//   type : "Mining vessel",
//   owner : "Jupiter Mining Corporation",
//   captain : "Frank Hollister",
// };
// console.log(spaceship);

// Getting and Setting Object Properties

// Example 1 to get

// let person = {
//   firstName: 'John',
//   lastName: 'Smith',
//   age: 30,
//   location: 'USA'
// }

// console.log(person['firstName']);  // 'John'
// console.log(person.lastName);  // 'Smith'

// person['bestFriend'] = 'Mike'; // add a new property to the object
// console.log(person['bestFriend']);  // 'Mike' // access the new property

// person.wife = 'Mary'; // add a new property to the object
// console.log(person.wife);  // 'Mary' // access the new property

// console.log(person); // {firstName: 'John', lastName: 'Smith', age: 30, location: 'USA', bestFriend: 'Mike', wife: 'Mary'}

// Example 2 to Update

// let person = {
//   firstName: 'John',
//   lastName: 'Smith',
//   age: 30,
//   location: 'USA'
// };
// person['age'] = 31;
// console.log(person['age']);  // 31

// person.location = 'Spain';
// console.log(person.location);  // 'Spain'

// Example 3 to Delete

// let person = {
//   firstName: 'John',
//   lastName: 'Smith',
//   age: 30,
//   location: 'USA'
// };
// delete person['lastName'];
// delete person.age;
// console.log(person);

// Example 4

// let data = {
//   firstName: "Arthur",
//   lastName: "Dent",
//   species: "Human"
// };

// let firstName = data['firstName'];
// console.log(firstName);

// let species = data.species;
// console.log(species);

// data.age = 42

// console.log(data);

// Object Methods

// Objects in JavaScript have three types of methods:

// Static methods are methods that are called directly on the object, like Object.keys().
// Instance methods are methods that are called on an instance of an object, like 'Hello'.toUpperCase().
// Methods you create are methods that you create yourself and add to the object.

// Firstly we create an object

// let car = {
//   location: 'garage',
//   ignition: 'off',
//   fueled: true,
// };

// Static Methods

// console.log(Object.keys(car));
// returns ["location", "ignition", "fueled"]

// Unsupported on JavaScript Tutor
// console.log(Object.values(car));
// returns ["garage", "off", true]

// console.log(Object.entries(car));  
// returns [Array(2), Array(2), Array(2)]
// Expanded view of the three arrays:
// 0: (2) ["location", "garage"]
// 1: (2) ["ignition", "off"]
// 2: (2) ["fueled", true]


// Instance Methods

// console.log(car.hasOwnProperty('ignition'));  // true
// console.log(car.hasOwnProperty('drive'));  // false
// console.log(car.toString()); // [object Object]

// Methods You Create

// let car = {
//   location: 'garage',
//   ignition: 'off',
//   fueled: true,
//   start: function() { // this is a method
//     this.ignition = 'on'; // this refers to the object
//   }
// };

// console.log(car.ignition); // 'off'
// car.start(); // call the method
// console.log(car.ignition); // 'on'

// In a method, this refers to the object that owns the method. 
//If the method isn't owned by any object, then this refers to the global object.

// In an event (like when a user clicks on something), 
// this refers to the element that received the event (e.g. the thing they clicked on).

// To develop this idea further 

// let car = {
//   location: 'garage',
//   ignition: 'off',
//   fueled: true,
//   start: function() {
//     this.ignition = 'on';
//   },
//   drive: function() {
//     this.location = 'street';
//   },
//   park: function() {
//     this.location = 'garage';
//   },
//   refuel: function() {
//     this.location = 'gas station';
//     this.fueled = true;
//   },
//   stop: function() {
//     this.ignition = 'off';
//   },
// };

// car.start();
// console.log(car.ignition);
// car.drive();
// console.log(car.location);

// // Ran out of gas!
// car.fueled = false;
// car.refuel();
// console.log(car.location);
// console.log(car.fueled);

// // Let's go home
// car.drive();
// console.log(car.location);
// car.park();
// console.log(car.location);
// car.stop();
// console.log(car);

// Example 2


// let classroom = {
//   numOfStudents: 0,
//   schoolHours: false,
//   playtime: false,
//   openSchool: function() {
//       this.schoolHours = true;
//       this.numOfStudents = 20;
//   },
//   breakTime: function() {
//       if (this.schoolHours) {
//           this.playtime = true;
//       }
//   }
// };

// classroom.openSchool();
// console.log(classroom.numOfStudents);
// classroom.breakTime();
// console.log(classroom.playtime);

// Iterating Data Structures

// Example 1

// let food = ['pizza', 'steak', 'pasta', 'fruit salad', 'stir fry'];

// for (let i = 0; i < food.length; i++) {
//   console.log(food[i]);
// }

// Example 2 - same as above but using a loop

// let food = ['pizza', 'steak', 'pasta', 'fruit salad', 'stir fry'];
// for (let i of food) {
//   console.log(i);
// }

// Example 3

// let food = ['pizza', 'steak', 'pasta', 'fruit salad', 'stir fry'];
// for (let i in food) {
//   console.log('index', i, 'is', food[i]);
// }

// Taking this example further 

// let petNames = {
//   dog: 'Fido',
//   cat: 'Max',
//   fish: 'Bubbles',
//   python: 'Mr. Slithers',
// }

// for (let i in petNames){
//   console.log(petNames[i], 'is a', i); // Fido is a dog
// }

// Example 4 using object.entries 

// let petNames = {
//   dog: 'Fido',
//   cat: 'Max',
//   fish: 'Bubbles',
//   python: 'Mr. Slithers',
// }

// let pairs = Object.entries(petNames);
// for (let pair of pairs){
//   console.log(pair[1], 'is a', pair[0]);
// }

// To summarize the different iteration methods:

// Standard for loop: i is an array index
// for...of loop: i is an array element/value
// for...in on an array: i is an array index
// for...in on an object: i is an object property


// Example 5

// let gamerScores = {
//   john: 89,
//   paul: 725,
//   george: 553,
//   robert: 9302,
//   steve: 733,
// };
// // write your code here


// for(let gamer in gamerScores) {
//   console.log(`${gamer} scored ${gamerScores[gamer]}`); // To explain how this works - gamer is the key and gamerScores[gamer] is the value.
// }

// // Another example of this 

// let ages = {
//   alice: 25,
//   bob: 30,
//   charlie: 22,
//   david: 35,
//   emily: 28,
// };

// for (let person in ages) { // person is the key and ages[person] is the value
//   console.log(`${person} is ${ages[person]} years old`); // alice is 25 years old
// }

// If I wanted a list of the names and ages listed in order of age, I could do this:

// let ages = {
//   alice: 25,
//   bob: 30,
//   charlie: 22,
//   david: 35,
//   emily: 28,
// };

// // Create an array of [name, age] pairs
// let nameAgePairs = Object.entries(ages); // [['alice', 25], ['bob', 30], ['charlie', 22], ['david', 35], ['emily', 28]]

// // Sort the array based on ages
// nameAgePairs.sort((a, b) => a[1] - b[1]); // [['charlie', 22], ['alice', 25], ['emily', 28], ['bob', 30], ['david', 35]]. This works by comparing the second element of each pair (the age) and sorting them in ascending order.

// // Print the sorted list of names and ages
// for (let [name, age] of nameAgePairs) {
//   console.log(`${name} is ${age} years old`);
// }
  
// Nested Data Structures

// Example 1

// let company = {
//   name: 'Apple, Inc',
//   founded: 1976,
//   financials: {
//     incomeStatement: {
//       years: [2020, 2019, 2018],
//       revenue: [125, 120, 115],
//       costs: [100, 100, 100],
//       profit: [25, 20, 15]
//     },
//     balanceSheet: {
//       years: [2020, 2019, 2018],
//       assets: [200, 190, 180],
//       liabilties: [100, 95, 90],
//       equity: [100, 95, 90]
//     },
//     cashFlow: {
//       years: [2020, 2019, 2018],
//       operating: [75, 65, 55],
//       investing: [22, 20, 18],
//       financing: [-94, -80, -75]    
//     }
//   },
//   competitors: ['Microsoft', 'Amazon', 'Samsung']
// }

// console.log(company.name);
// console.log(company.competitors);
// console.log(company.competitors[0]);
// console.log(company.financials.incomeStatement.years);
// console.log(company.financials.incomeStatement.revenue[0]);
  

// Example 2

// javascript code

// let studentData = [
//   { 
//       name: "John Smith",
//       email : "john@gmail.com",
//       subjects : ["Math", "Psychology", "Physics", "Chemistry", "Biology"],
//   },
//   {
//       name: "Mary Jones",
//       email : "mary@gmail.com",
//       subjects : ["Fine Art", "Music", "Biology", "Geography", "Politics"]
//   }
// ];

// console.log(studentData);


// Function in JavaScript

// Example 1

// function printString() {
//   console.log('Hello world!');
// }

// printString();

// Example 2

// function printString(message) {
//   console.log(message);
// }
// printString('Hello from the function!');

// Example 3

// function addTwo(num1, num2) {
//   return num1 + num2;
// }
// addTwo(3, 5);

// Example 4

// function addTwo(num1, num2) {
//   return num1 + num2;
// }
// let sum = addTwo(3, 5);
// console.log(sum);  // 8

// Example 5

// // Define an array of arrays (nested data structure)
// let operands = [
//   [3, 5],
//   [8, 6],
//   [1, 2],
//   [9, -2]
// ];

// // Define a function with parameters
// function addTwo(num1, num2) {
//   return num1 + num2;
// }

// // Create an empty array to hold the sums
// let sums = [];

// // Use a for loop to iterate the operands and call addTwo()
// for (let pair of operands) {
//   let sum = addTwo(pair[0], pair[1]);  // array indexing + function call
//   sums.push(sum);  // array methods
// }

// // Log the sums
// console.log(sums);

// Approach to writing functions

// function buildHelloArray(num) {
//   let myArray = [];
//   for (let i = 0; i < num; i++) {
//     myArray.push('Hello');
//   }
//    return myArray;
// }

// let result = buildHelloArray(20);
// console.log(result);

// Example 2


// function addTwoNumbers(num1, num2) {
//   return num1 + num2;
// }

// result = addTwoNumbers(40, 2);
// console.log(result);

// Maths in JavaScript

// let result = Math.random();
// console.log(result);

// let someInteger = Math.floor(25.65); // rounds down
// console.log(someInteger);  // 25

// let someInteger = Math.ceil(25.65); // rounds up
// console.log(someInteger);  // 26

// let numbers = [];
// for (let i = 0; i < 10; i++) {
//   numbers.push(Math.floor(Math.random() * 100));
// }
// console.log(numbers);

// If you need standard rounding you can use the Math.round() function, 
// which returns the number you provide rounded to the nearest integer:

// console.log(Math.round(1.25));  // 1
// console.log(Math.round(1.65));  // 2

// Math.min() and Math.max() are useful for finding the minimum and maximum values in an array:

// console.log(Math.min(1, 2, 3));  // 1
// console.log(Math.max(1, 2, 3));  // 3

// // If one of the objects can't be converted, the result is NaN:
// console.log(Math.min(1, 2, 'Hello!'));  // NaN
// console.log(Math.max(1, 2, 'Hello!'));  // NaN

// // If you give .min() nothing, you get Infinity:
// console.log(Math.min());  // Infinity

// // If you give .max() nothing, you get -Infinity:
// console.log(Math.max());  // -Infinity

// Math.pow() is useful for calculating exponents:

// console.log(Math.pow(2, 4));  // 16
// console.log(Math.pow(3, 3));  // 27

// // Negative bases to fractional exponents return NaN:
// console.log(Math.pow(-7, 1/3));  // NaN

// Finally, to get the square root of a number you can use Math.sqrt():

// console.log(Math.sqrt(4));  // 2
// console.log(Math.sqrt(9));  // 3
// console.log(Math.sqrt(2));  // 1.4142135623730951

// console.log(Math.sqrt(0));  // 0
// console.log(Math.sqrt(-0));  // -0
// console.log(Math.sqrt(-1));  // NaN

// Example 2

// let maxNumber = Math.max(7, 4, 8, 11, 5, 2);
// console.log(maxNumber);

// let randomNumber = Math.floor(Math.random() * maxNumber);
// console.log(randomNumber);

// Working with Date Objects

// let date = new Date();
// console.log(date);  

// let rightNow = Date.now()
// console.log(rightNow); 

// let today = Date.now();
// let tomorrow = today + 86400000;  // 86400000 milliseconds in 1 day

// console.log(today);  // 1596477706417
// console.log(tomorrow);  // 1596564106417

// Human readable dates

// let today = Date.now();
// let tomorrow = today + 86400000;  // 86400000 milliseconds in 1 day

// let todayDate = new Date(today);
// let tomorrowDate = new Date(tomorrow);

// console.log(todayDate.toDateString());  // today date
// console.log(tomorrowDate.toDateString());  // Tomorrow date

// today = new Date();

// // Now we can operate on it:
// console.log(today.getFullYear());      // The 4 digit year
// console.log(today.getMonth());         // The month (0-11)
// console.log(today.getDate());          // The day of the month (1-31)
// console.log(today.getDay());           // The day of the week (0-6)
// console.log(today.getHours());         // The hour (0-23)
// console.log(today.getMinutes());       // The minute (0-59)
// console.log(today.getSeconds());       // The seconds (0-59)
// console.log(today.getMilliseconds());  // The milliseconds (0-999)

// // This provides the UTC date and time:

// today = new Date(today);

// // Now we can operate on it:
// console.log(today.getUTCFullYear());      // The 4 digit year
// console.log(today.getUTCMonth());         // The month (0-11)
// console.log(today.getUTCDate());          // The day of the month (1-31)
// console.log(today.getUTCDay());           // The day of the week (0-6)
// console.log(today.getUTCHours());         // The hour (0-23)
// console.log(today.getUTCMinutes());       // The minute (0-59)
// console.log(today.getUTCSeconds());       // The seconds (0-59)
// console.log(today.getUTCMilliseconds());  // The milliseconds (0-999)

// Example 2

// let today = 1597673635658;

// let date = new Date(today);
// let day = date.getDate();
// let month = date.getMonth();
// let year = date.getFullYear();

// console.log(day);
// console.log(month);
// console.log(year);


