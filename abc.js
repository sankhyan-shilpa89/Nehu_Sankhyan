// var a = 8;
// {
//   let a = 9;
//   console.log ("print", a);
// }

// let message;
// message = "HELLO!";
// message = "WORLD!"; // value changed
// console.log(message);//retuns changed value

// let HELLO = "HELLO JS!";
// let message;
// //copy'HELLO JS!' from hello into the message
// message = HELLO;
// //now two variables hold the same data
// console.log(HELLO); //HELLO JS!
// console.log(message); //HELLO JS!

// function CarModel(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
// }
// var myCar = new CarModel("Honda", "Civic", 2025);

// var myVariable = "hello";
// var myvariable = "js";

// console.log(myVariable); //hello
// console.log(myvariable); //js

// myVariable = "Hello,js!";
// console.log(myVariable);

// ("use strict");
// myVariable = "Hello,js!";
// console.log(myVariable); //error thrown

// function test() {
//   var x = 1;
//   let y = 5;
//   if (true) {
//     var x = 3;
//     let y = 4;
//     console.log(x); //3
//     console.log(y); //4
//   }
//   console.log(x); //3
//   console.log(y); //5
// }
// test();

// const COLOR_RED = "#F00";
// const COLOR_GREEN = "0F0";
// const COLOR_BLUE = "#00F";
// const COLOR_ORANGE = "#FF7F00";
// //...when we need to pick a color
// let color = COLOR_ORANGE;
// console.log(color);

// let x = 10;
// function foo() {
//   let x = 20; //local variable shadows the outer variable
//   console.log(x); //print 20
// }
// foo();
// console.log(x); //prints 10

// let x;//undefined variables
// let y = null;//assigned but null value
// console.log(x);
// console.log(y);

//variables in camelcase
//let myFavouriteColor = "pink";
//console.log(myFavouriteColor);

//define a data types
// let myString = "Hello,world!";
// let myNumber = 14;
// let myBoolean = true;
// let myNull = null;
// let myUndefined = undefined;
// let mySymbol = Symbol("mySymbol");
// let myBigInt = 12334567n;

// console.log(typeof myString);
// console.log(typeof myNumber);
// console.log(typeof myBoolean);
// console.log(typeof myNull);
// console.log(typeof myUndefined);
// console.log(typeof mySymbol);
// console.log(typeof myBigInt);

//Number system
// let myInteger = 45;
// let myFloat = 125.56789;
// console.log(typeof myInteger);
// console.log(typeof myFloat);

//simple & fixed number data type
// let myNumber = 1.3 + 3.4;
// console.log(myNumber.toFixed(3));

//SINGLE,DOUBLE AND BACKTICKS IN string
// let mySingleQuoteString = 'Hello,world!';
// let myDoubleQuoteString = "Hello,world!";
// let myBackticksQuoteString = `Hello,world!`;
// console.log(mySingleQuoteString);
// console.log(myDoubleQuoteString);
// console.log(myBackticksQuoteString);

// let myName = "Shilpa";
// let myTemplateLiteralString = `Hello,${myName}!`;
// console.log(myTemplateLiteralString);

//Boolean DATA TYPE
// let myNumber = 50;
// if (myNumber > 15) {
//   console.log("number is greater than 20");
// } else {
//   console.log("number is less than or equal to 20");
// }

//NULL
// let myVariable = null;
// console.log(myVariable);
// console.log(typeof myVariable);

//UNDEFINED DATA TYPES
// let age = 19;
// age = undefined;
// console.log(age);

//NaN
// let myNaN = 0 / 0;
// console.log(myNaN);
// console.log(typeof myNaN);
// console.log(Number.isNaN(myNaN));

//BigInt
// let myBigInt = 1234567899n;
// console.log(myBigInt);
// console.log(typeof myBigInt);

//Premitive and object
// let myNumber = 45;
// console.log(myNumber);
// console.log(typeof myNumber);

// let myObject = {
//   name: "Raman",
//   age: 17,
//   isStudent: true,
// };
// console.log(myObject);
// console.log(typeof myObject);

//numerical values
//let billion = 1_000_000_000;
//console.log(typeof billion);

//let billion=1e9;
//console.log(7.3e9);
//1e3=1*1000//e3means*1000
//1.23e6=1.23*1000000//e6 means *1000000

//now let's write something very small as a regular number.
//say,1 microsecond(one billion of a second):
//using "e" can help.if we'd like to avoid writing the zeroes explicity
//let ms=1e-6;
//console.log(1e-6);

//STRING METHODS:-
// let text = "This is code of the javascript.";

// let textLength = text.length;
// let textInUpperCase = text.toUpperCase();
// let wordPosition = text.indexOf("the");
// let replacedText = text.replace("code", "this");
// console.log(textLength);

// let str = "Notebook";
// console.log(str[1]);
//console.log(str.charAt(1));

// function sum(a, b) {
//   return a + b;
// }
// console.log(`1+2=${sum(1, 2)}.`);
// //spanning multiple lines
// let guestList = `Guests:
// *abcd
// *efdg
// *ijkl
// `;
// console.log(guestList);

// let str1 = 'Hello\nworld'; //two lines using a "newline symbol"
// let str2 = `Hello
// world`;
// console.log(str1==str2);

// Backslash(escape character)
//console.log(`The backslash:\\`);

// let str = `Hello`;
// console.log(str[1000]);
// console.log(str.charAt(1000));
//we can also iterate over characters using for..of:
// for (let char of "Hello") {
//   console.log(char);
// }

//String is immutable
//using a string method does not mutate the string
// let msg = "mobile";
// console.log(msg);
// msg.toUpperCase();
// console.log(msg);

//using an array method mutates the array
// let pen = [];
// console.log(pen);
// pen.push("coding");
// console.log(pen);

//uppercase & lowercase
// console.log("Computer".toUpperCase());
// console.log("Notebook".toLowerCase());
// //or,if we want a single character lower cased
// console.log("Computer"[4].toLowerCase());
// console.log("Notebook"[3].toUpperCase());

//string indexOf()method
// let str = "widget with id";
// console.log(str.indexOf("widget"));
// console.log(str.indexOf("Widget"));
// console.log(str.indexOf("id"));

// //running indexOf in a loop
// let str = "As sly as a fox,as strong as an ox";
// let target = "as";
// let pos = 0;
// while (true) {
//   let foundPos = str.indexOf(target.pos);
//   if (foundPos == -1) break;
//   console.log(`Found at ${foundPos}`);
//   pos = foundPos + 1;
// }

//lastIndexOf() string method
// const paragraph = "this is my js code which is written in vs code ";
// const searchTerm = "dog";
// console.log(
//   `The index of the first"${searchTerm}"from thr end is ${paragraph.lastIndexOf(
//     searchTerm
//   )}`
// );

//Unary operand
// let x = 1;
// x = -x;
// console.log(x);

//Binary operand
// let x = 1;
// y = 3;
// console.log(x - y);

// //Remainder/modulo operator
// console.log(5 % 2);
// console.log(2 % 2);

//Exponentiation operator
// console.log(3 ** 9);
// console.log(5 ** 2);
// console.log(2 ** 4);
// console.log(4 ** (8 / 9));
// console.log(4 ** (2 / 6));

//Concatenate strings in javascript
// let s='my'+'String';
// console.log(s);
//using the built-in concat() method
// let a = "concat";
// console.log(a.concat("String"));
// //string conversion
// console.log("1" + 2);
// console.log(1 + "2");
// //order of operations still applies
// console.log(1 + 2 + "1");

//unary(+) operator
// console.log(+true);
// console.log(+"");
// console.log(+"7");
//example:-
// let apples = "5";
// let oranges = "7";
// console.log(+apples + +oranges);
// console.log(Number(apples) + Number(oranges));

// let a, b, c;
// a = b = c = 2 + 3; //chained assignment right to left
// console.log(a);
// console.log(b);
// console.log(c);

// //increment & decrement
// let counter = 2;
// counter++;
// console.log(counter);

// let counter = 2;
// counter--;
// console.log(counter);

// //Prefix & postfix position counter
// let counter = 1;
// let a = ++counter;
// console.log(a);//prefix

// let counter = 2;
// let a = counter++;
// console.log(a);//postfix

// //we advice a style of "one line-one action":
// let counter = 1;
// console.log(2 * counter);
// counter++;

//Bitwise operator:-
// console.log(1100 & 1011);
// console.log(1100 | 1011);

// let a = 1,
//   b = 2,
//   c = 3;
// // let result = (a++, ++b, c++, a + b + c);
// // console.log(result);
// console.log(a);
// console.log(b);
// console.log(c);

//how to perform exponentiation operation:-
// let result1 = 2 ** 3;
// console.log(result1);
// let result2 = Math.pow(2, 3);
// console.log(result2);

// //NaN:-
// let result = 0 / 0;
// console.log(result);
// console.log(typeof result);
// console.log(Number.isNaN(result));

//round off
// let num = 12.34567;
// let roundedNum = num.toFixed(3);
// console.log(roundedNum);

//equality & strict equality operators
// console.log(5 == "5");
// // console.log(5 === "5");
// console.log(true == "5");
// console.log(true === "5");
