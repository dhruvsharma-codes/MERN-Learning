"use strict";

/* INTRO OF JS

* JavaScript was initially created to “make web pages alive”. 
* The programs in this language are called scripts.
* Today, JavaScript can execute not only in the browser, but also on the server, or actually on any device that has a special program called "the JavaScript engine".

*/



/* HOW DO ENGINES WORK

Engines are complicated. But the basics are easy.
* The engine (embedded if it’s a browser) reads the script.
* Then it converts the script to machine code.
* And then the machine code runs, pretty fast.

 */



/* WHAT MAKES JS UNIQUE

* Full integration with HTML/CSS.
* Simple things are done simply.
* Supported by all major browsers and enabled by default.

 */



// JS FUNDAMENTALS

/* BASIC CODE SYNTAX

* This is the core javascript code it runs in browser console.
* we can write js script using two ways firstly in html page using script tag or create an external js file and attach it with html page.
* I have given example of both external and internal js.
* external js has high priority or we can say specificity then inetrnal js.

*/
// console.log("Hello World");
// alert("I am External JavaScript");


/* USE STRICT

* "use strict" is a special directive in JavaScript that enables Strict Mode. Strict Mode makes JavaScript more secure by catching common mistakes and preventing unsafe actions.
* in modern js by if we use classes or modules in our code use strict is enabled automatically we didn't need to write anything.
* use strict helps to find errors easily.
*/
// this code simply runs without giving any error
// x = 12;
// console.log(x);

// by using use strict it makes our code secure by giving reference error because we didn't use let , var or const to define x.
// "use strict"
// x = 12;
// console.log(x);



/* VARIABLES

* A variable is a “named storage” for data. 
* we can declare a variable in three ways using var,let or const, basically var is old way in modern js we mostly use const or let.
* Case sensitive Variables named apple and APPLE are two different variables.
* let can reassign a value but not redeclare and const cannot do both.
* we can copy one variable value to another using assignment operator.
* var is function scoped and let and const is blocked scope.

*/
// this is reassignment
// let a = 10;
// console.log(a);
// a = 20; 
// console.log(a);

// this is not reassigned or redecalre
// const a = 10;
// console.log(a);
// a = 20; 
// console.log(a);

// copy using assignment operator
// let a = 10;
// let c;
// console.log("value of a:-", a);
// c = a;
// console.log("value of c:-", c);
// console.log(a == c);

// blocked scope not accessed outside the block gives reference error
// {
//     let a = 10;
//     console.log(a);
// }
// console.log(a);

// function scoped accessed anywhere in function but not outside function also gives reference error
// function show(){
//     var a = 12;
//     console.log(a);
// }
// show();
//     console.log(a);




/* DATATYPES

* A value in JavaScript is always of a certain type. For example, a string or a number.
* Programming languages that allow such things, such as JavaScript, are called “dynamically typed”, meaning that there exist data types, but variables are not bound to any of them.
* there are two types of datatypes primitive and non primitive.

*/
/*  PRIMITIVE DATATYPE */
// Number represents both int and float
// let n = 12;
// console.log(typeof n);
// let n1 = 12.324;
// console.log(typeof n1);

// Bignint represents big numbers
// let n = 1234747374784n;
// console.log(typeof n);

// string is sequence of characetr surrouned by quotes, we can write string in three ways double quotes, single and backtips expression with template lateral
// let str = "dhruv";
// console.log(typeof str);
// let str1 = 'dhruv';
// console.log(typeof str1);
// let str3 = "dhruv";
// console.log(`hi ${str3}`, typeof str3);

// Boolean type has only two values: true and false.
// let isMonday = true;
// console.log(typeof isMonday);
// let age = 6 > 10;
// console.log(age, typeof age);

// Null means empty value
// let name1 = null;
// console.log(name1, typeof name1);

// Undefined means If a variable is declared, but not assigned, then its value is undefined
// let n;
// console.log(n, typeof n);

// symbol is a unique identifier
// let sym = Symbol("id");
// console.log(typeof sym);


/*  NON-PRIMITIVE DATATYPE */
// object is a key value pair.
// let obj = {
//     "name" : "dhruv",
//     "age" : 21,
// }
// console.log(obj,typeof obj);

// function is a reusable block of code 
// function show(){
//     console.log("function");
// }
// show();



/* INTERACTION :- ALERT,PROMPT,CONFIRM

* Alert:- It shows a message and waits for the user to press “OK”.
* Prompt:- The function prompt accepts two arguments,It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.
* The function confirm shows a modal window with a question and two buttons: OK and Cancel.

*/
// alert("Hello I am JS.");

// let age = prompt("How old are you",10);
// alert(`You are ${age} years old.`);

// let isBoss = confirm("Are you the Boss.");
// alert(isBoss);

// let name = prompt("Enter your name:","");
// alert(`Hi, I am ${name}`);



/* TYPE CONVERSION

* Most of the time, operators and functions automatically convert the values given to them to the right type.
* For example, alert automatically converts any value to a string to show it. Mathematical operations convert values to numbers.

*/
/* String Conversion*/
// let age = 12;
// console.log(typeof age);
// value = String(age);
// console.log(typeof value);

// let value = true;
// console.log(typeof value);
// value = String(value);
// console.log(typeof value);


/* Number Conversion*/
// let a = "123";
// console.log(typeof a);
// a = Number(a);
// console.log(typeof a);


// let age = Number("an arbitrary string instead of a number");
// console.log(age);

// alert(Number("123"));
// alert(Number("12sd3"));
// alert(Number(true));
// alert(Number(false));


/* Boolean Conversion*/
// alert(Boolean(1));
// alert(Boolean(0));
// alert(Boolean("Hello"));
// alert(Boolean(""));



/* OPERATORS

* operators are used to perform specific tasks like doing canculations, comparing values , assigning value or so on.
* operators has various types arithmetic operators, comparison operators, logical operators and assignment operators.

*/
/*Arithmetic Operators */

// addition
// let a = 10;
// let b = 20;
// console.log(a+b);

// substraction
// let a = 20;
// let b = 5;
// console.log(a-b);

// multiplying
// let a = 20;
// let b = 5;
// console.log(a*b);

// division
// let a = 20;
// let b = 5;
// console.log(a/b);

// modulus
// let a = 20;
// let b = 5;
// let c = 15;
// console.log(a%b);
// console.log(a%c);
// console.log(c%b);

// increment
// let a = 12;
// post increment
// a++;
// console.log(a);
// pre increment
// console.log(++a);

// decrement
// let a = 12;
// post decrement
// a--;
// console.log(a);
// pre decrement
// console.log(--a);

// exponiation
// let x = 5;
// console.log(x**2);


/*Assignment Operators */
// =
// let x = 5;
// console.log(x);
// let y = x;
// console.log(y);

// +=
// let x = 12;
// x+=5;
// console.log(x);

// let y = 12;
// let x = 10;
// x+=y;
// console.log(x);


/*Assignment Operators */
// ==
// console.log(12 == 12);
// console.log(12 == "12");
// console.log(12 == "42");

// ===
// console.log(12 === 12);
// console.log(12 === "12");
// console.log(12 === "42");

// =!
// console.log(12 != 12);
// console.log(12 != "12");
// console.log(12 != "42");

// ==!
// console.log(12 !== 12);
// console.log(12 !== "12");
// console.log(12 !== "42");

// >
// console.log(12>22);
// console.log(43>22);

// <
// console.log(12<22);
// console.log(43<22);


/*Logical Operators */
// or(||)
// let a = 10;
// let b = 20;
// console.log((a > b) || (b > a));

// and(&&)
// let a = 10;
// let b = 20;
// console.log((a > b) && (b > a));

// not(!)
// let a = 10;
// let b = 20;
// console.log(!(a > b) && (b > a));


/*

* The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code and else if not true executed.

*/
// let age = 22;
// if(age>18){
//     console.log("You can vote");
// }


// let age = 12;
// if(age>18){
//     console.log("You can vote");
// }
// else{
//     console.log("You cannot vote");
// }


// let company = prompt("Which company created javascript");
// if(company == "netscape"){
//     alert("Right");
// }
// else{
//     alert("Wrong!");
// }


/* NULLISH OPERATOR

* The nullish coalescing operator is written as two question marks ??.
* As it treats null and undefined similarly, we’ll use a special term here, in this article. For brevity, we’ll say that a value is “defined” when it’s neither null nor undefined.
* || returns the first truthy value.
* ?? returns the first defined value.

*/
// let user;
// console.log(user ?? "Dhruv");

// let user = "John";
// console.log(user ?? "Dhruv");

// let user = null;
// console.log(user ?? "John");

// let user1;
// let user2;
// console.log(user1 ?? user2);

// let user1 = null;
// let user2 = null;
// console.log(user1 ?? user2);

// let user1 = null;
// let user2;
// console.log(user1 ?? user2);

// let user1;
// let user2 = null;
// console.log(user1 ?? user2);

// let firstName = null;
// let lastName = null;
// let nickName = "Supercoder";
// alert(firstName ?? lastName ?? nickName ?? "Anonymous");



/* LOOPS

* loops are used for repetitive tasks.
 
*/
// while return truthy value
// let i = 0;
// while(i<5){
//     console.log(i);
//     i++;
// }


// do while first execute the body, then check the condition, and, while it’s truthy, execute it again and again.
// let i = 0;
// do{
//     console.log(i);
//     i++;
// }
// while(i<5);


// The for loop is more complex, but it’s also the most commonly used loop.its a shorthand
// for(let i = 0; i < 5; i++){
//     console.log(i);
// }

// for(let i = 0; i < 10; i++){
//     if(i % 2 == 0) continue;
//     alert(i);
// }


/* SWITCH

* A switch statement can replace multiple if checks.
* It gives a more descriptive way to compare a value with multiple variants.

*/
// let a = 2 + 2;
// switch(a){
//     case 1:
//         console.log("Not need")
//         break;
//     case 2:
//         console.log("You are near");
//         break;
//     case 3:
//         console.log("To small");
//         break;
//     case 4:
//         console.log("Exactly");
//         break;
//     case 5:
//         console.log("To big");
//         break;
//     default:
//         console.log( "I don't know such values" );                    
// }

// let day = 2;
// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("I don't know.");  
// }


/* FUNCTION

* function is a reusable block of code.

*/
// this is function declaration
// function showMessage(){
//     console.log("Hi");
// }
// showMessage();
// showMessage();
// showMessage();

// function showMessage(){
//     let message = "Hello I am JavaScript";
//     console.log(message);
// }
// showMessage();
// this shows function works in block and not accessed outside block
// console.log(message);

// let name = "dhruv";
// function showName(){
//     let message = "Hello, " + name;
//     alert(message);
// }
// showName();

// let name = "John";
// function showUser(){
//     let userName = "Dhruv";
//     let message = "hello" + userName;
//     alert(message);
// }
// showUser();
// alert(name);


/* Function with Parameters */
// simple parameter function
// function ShowMessage(from,text){
//     alert(from + ":" + text);
// }
// ShowMessage("John","Hello I am JS.");

// if we didnt give argument and we get undefined value
// function show(text){
// if(text === undefined){
//     text = "empty message";
//     alert(text);
// }
// }
// show();

// function sum(a,b){
//     return a+b;
// }
// let result = sum(1,2);
// alert(result);

// function checkAge(age){
//     if(age>=18){
//         return true;
//     }
//     else{
//         confirm("Do you have permission with your parents?");
//     }
// }
// let age = prompt("How old are you",18);
// if(checkAge(age)){
//     alert("Acess Granted");
// }
// else{
//     alert("Access Denied");
// }


/* ARROW FUNCTION

* simple and consise syntax.

*/
// let sum = (a,b)=> a+b;
// alert(sum(12,22));

// let sum = (a,b)=>{
//     let result = a + b;
//     return result;
// }
// alert(sum(12,12));

