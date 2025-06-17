//Q.1:-if a number is divisible by 11
// let x = 20;
// if (x % 11 === 0) {
//   console.log("Divisible by 11");
// } else {
//   console.log("Not divisible by 11");
// }

// //Q.2:-Login system check
// let username = "admin";
// let password = "1234";
// if (username == "admin" && password === "1234") {
//   console.log("Login successful");
// } else {
//   console.log("Login failed");
// }

//Q.3:-Grade based on marks
// let marks = 90;
// if (marks >= 95) {
// //   console.log("Grade:A");
// // } else if (marks >= 75) {
// //   console.log("Grade:B");
// // } else if (marks >= 50) {
// //   console.log("Grade:C");
// // } else {
// //   console.log("Grade:F");
// // }

// // //Q.4:-check if a character is vowel
// // let ch = "s";
// // if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
// //   console.log("Vowel");
// // } else {
// //   console.log("Consonant");
// // }

// //Q.5:-check if number is 5-digit
// // let num = 789067;
// // if (num >= 10000 && num <= 9999) {
// //   console.log("5-digit number");
// // } else {
// //   console.log("not a 5-digit number");
// // }

// //Q.6:-check if number is float or integer
// // let num = 789.9;
// // if (Number.isInteger(num)) {
// //   console.log("Integer");
// // } else {
// //   console.log("Float");
// // }

// //Q.7:-check if person  is child,adult or senior
// // let age = 78;
// // if (age < 18) {
// //   console.log("child");
// // } else if (age < 60) {
// //   console.log("adult");
// // } else {
// //   console.log("senior");
// // }

// //Q.8:-check if a number ends with 0
// // let num = 349;
// // if (num % 10 === 0) {
// //   console.log("ends with 0");
// // } else {
// //   console.log("does't end with 0");
// // }

// //Q.9:-movie ticket pricing by age group
// // let age = 20;
// // if (age <= 5) {
// //   console.log("free ticket");
// // } else if (age <= 12) {
// //   console.log("child rate:50Rs/");
// // } else if (age <= 45) {
// //   console.log("adult rate:150Rs/");
// // } else {
// //   console.log("senior rate:250Rs/");
// // }

// //Q.10:-student result summary with subjects
// let marks = {
//   math: 92,
//   english: 69,
//   economics: 78,
//   geography: 90,
//   physical: 95,
// };
// let avg =
//   (marks.math +
//     marks.english +
//     marks.economics +
//     marks.geography +
//     marks.physical) /
//   5;
// if (avg >= 75) {
//   console.log("Distinction");
// } else if (avg >= 50) {
//   console.log("passed");
// } else {
//   console.log("failed");
// }

//Q.11:-job eligibility by qualification and age
// let qualification = "Graduate";
// let age = 20;
// if (
//   (qualification === "Graduate" || qualification === "Postgraduate") &&
//   age >= 20
// ) {
//   console.log("Eligible for the job");
// } else {
//   console.log("Not eligible");
// }

//Q.12:-find the largest of three numbers
// let a = 3,
//   b = 7,
//   c = 8;
// if (a > b && a > c) {
//   console.log("a is largest");
// } else if (b > c) {
//   console.log("b is largest");
// } else {
//   console.log("c is largest");
// }

//Q.13:-check if input is a number
// let input = 90;
// if (typeof input === "number") {
//   console.log("this is a number ");
// } else {
//   console.log("Not a number");
// }

//Q.14:-check if a string is empty
// let str = "abcd";
// if (str === "") {
//   console.log("string is empty");
// } else {
//   console.log("string is not empty");
// }

//Q.15:-check if password length is valid
// let password = "abcd@1";
// if (password.length >= 8) {
//   console.log("password is strong");
// } else {
//   console.log("password invalid");
// }

//Q.16:-check if number is betweeb 700 and 800
// let num = 890;
// if (num >= 650 && num <= 800) {
//   console.log("within range");
// } else {
//   console.log("out of range");
// }

//Q.17:-check if string starts with capital letter
// let name = "John";
// if (name.charAt(0) === name.charAt(0).toUpperCase()) {
//   console.log("Starts with capital letter");
// } else {
//   console.log("Does not start with capital letter");
// }

//Q.18:-check if two arrays have the same length
// let arr1 = [3, 4, 5];
// let arr2 = [8, 9];
// if (arr1.length === arr2.length) {
//   console.log("same length");
// } else {
//   console.log("different lengths");
// }

//Q.19:-check if the input is boolean
// let value = true;
// if (typeof value === "boolean") {
//   console.log("Boolean value");
// } else {
//   console.log("not a boolean value");
// }

//Q.20:-check if a file is an image format
let file = "photo.png";
if (file.endsWith(".jpg") || file.endsWith(".jpeg") || file.endsWith(".png")) {
  console.log("it is an image file");
} else {
  console.log("not an image");
}
