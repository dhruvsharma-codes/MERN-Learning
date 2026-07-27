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



/* OBJECTS

* an object ia a key value pair.
* there are two ways to write object using object constructor eg: let obj = new object(); or using object literal eg: let obj = {};

*/
// let obj = {
//     "name" : "Dhruv",
//     "age" : 21,
// }
// console.log(obj);
// console.log(obj.name);
// console.log(obj.age);

// if we want to add
// obj.isAdmin = true;
// console.log(obj);


// let user = {
//     "name" : "dhruv",
//     "age" : 21,
//     "gender" : "male",
// }
// console.log(user);
// for(let key in user){
//     console.log(key);

    // values
    // console.log(user[key])
// }


/* Object cloning */
// if we copy object like this then we have same refernce if we delte admin user is also deleted.
// let user = {
//     "name" : "dhruv",
//     "age" : 21,
// }
// console.log(user);
// let admin = user;
// console.log(admin);


// now we use different mwthod to clone; this create two different references
// let user = {
//     "name" : "dhruv",
//     "age" : 21,
// }
// let clone = {};
// for(let key in user){
//     clone[key] = user[key];
// }
// console.log(clone);
// clone.name = "peter";
// console.log(clone);
// console.log(user);


// we can also use object assign to assign 
// let user = { name: "John" };

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };

// Object.assign(user, permissions1, permissions2);

// console.log(user);
// alert(user.name); 
// alert(user.canView); 
// alert(user.canEdit); 



/* OBJECT USING THIS KEYWORD

* Here during the execution of user.sayHi(), the value of this will be user.
* Technically, it’s also possible to access the object without this, by referencing it via the outer variable:…But such code is unreliable. If we decide to copy user to another variable, e.g. admin = user and overwrite user with something else, then it will access the wrong object.

*/
// let user = {
//     "name" : "dhruv",
//     "age" : 21,

    // this is a method
//     sayHi(){
//         console.log(this.name);
//     }
// }
// user.sayHi();


// The rule is simple: if obj.f() is called, then this is obj during the call of f. So it’s either user or admin in the example above.
// let user = {
//     "name" : "dhruv"
// }
// let admin = {
//     "name" : "admin"
// }
// function sayHi(){
//     console.log(this.name);
// }

// user.f = sayHi;
// admin.f = sayHi;

// user.f();
// admin.f();



/* CONSTRUCTOR

* The regular {...} syntax allows us to create one object. But often we need to create many similar objects, like multiple users or menu items and so on.
* That can be done using constructor functions and the "new" operator.

*/
// function User(name,age){
//     this.name = name;
//     this.age = age
// }
// let user1 = new User("Dhruv",21);
// let user2 = new User("John",21);
// console.log(user1);
// console.log(user2);



/* SYMBOL

* A “symbol” represents a unique identifier.
* A value of this type can be created using Symbol().
* symbols are not converted to string if we using alert.

*/
// let id = Symbol();
// console.log(id);
// console.log(typeof id);

// id is a symbol with description id.
// let id = Symbol("id");
// console.log(id);

// treat different if id description is also same is also same.
// let id1 = Symbol("id");
// let id2 = Symbol("id");
// console.log(id1 == id2);


// let id = Symbol("id");
// alert(id.toString());

// symbol accessing
// let user = {
//     "name" : "dhruv",
//     "age" : 21,
// }
// let id = Symbol("id");
// user[id] = 1;

// console.log(user);
// we cannot access id like this
// console.log(user.id);

// we have to use square brackets
// console.log(user[id]);


// for in loop cannot show key symbol.
// let id = Symbol("id");
// let user = {
//   name: "John",
//   age: 30,
//   [id]: 123
// };
// for (let key in user) alert(key);

// we can access directly
// alert("Direct : " + user[id]);



// let id = Symbol("id");
// let user = {
//   [id]: 123
// };
// let clone = Object.assign({},user);
// console.log(clone[id]);
// console.log(user[id]);
// console.log(user[id] == clone[id]);
// console.log(user == clone);



/* NUMBERS

* javascript has only two types of number integer,float.

*/
/* Methods */

// tostring:- convert number to string
// let num = 123;
// console.log(typeof num);
// let str = num.toString();
// console.log(typeof str);
// console.log(num === str);


// toexponential:- return string and add exponential value.
// let num = 9.566;
// console.log(num.toExponential());
// console.log(num.toExponential(2));
// console.log(num.toExponential(4));


// tofixed:- return string with specific number of decimal.
// let x = 9.656;
// console.log(x.toFixed(0));
// console.log(x.toFixed(2));
// console.log(x.toFixed(4));
// console.log(x.toFixed(6));


// toprecision:- return string with a number with specified length.
// let x = 9.656;
// console.log(x.toPrecision());
// console.log(x.toPrecision(2));
// console.log(x.toPrecision(4));
// console.log(x.toPrecision(6));


// Number method:- to covert variable to number.
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number("10"));
// console.log(Number("  10"));
// console.log(Number("10  "));
// console.log(Number(" 10  "));
// console.log(Number("10.33"));
// console.log(Number("10,33"));
// console.log(Number("10 33"));
// console.log(Number("John"));


// parseInt return a whole number with no decimal and first number.
// console.log(parseInt("-10"));
// console.log(parseInt("-10.33"));
// console.log(parseInt("10"));
// console.log(parseInt("10.33"));
// console.log(parseInt("10 20 30"));
// console.log(parseInt("10 years"));
// console.log(parseInt("years 10"));


// parse float return a number.
// console.log(parseFloat("10"));
// console.log(parseFloat("10.33"));
// console.log(parseFloat("10 20 30"));
// console.log(parseFloat("10 years"));
// console.log(parseFloat("years 10"));


// isInteger returns true if argument is integer
// console.log(Number.isInteger(10));
// console.log(Number.isInteger(10.5));


// isfinite return true if value is finite
// console.log(Number.isFinite(123));
// console.log(Number.isFinite(Infinity));


// The Number.isNaN() method returns true if the argument is NaN (Not a Number).
// console.log(Number.isNaN(123));
// console.log(Number.isNaN("123"));
// console.log(Number.isNaN(NaN));



/* Strings

* In JavaScript, the textual data is stored as strings.

*/
// let str1 = 'single-quote';
// console.log(str1);
// let str2 = "double-quote";
// console.log(str2);
// let str3 = `backtick`;
// console.log(str3);


// template lateral for dynamic data
// function sum(a,b){
//     return a+b;
// }
// alert(`1 + 2 = ${sum(1,2)}`);



/* String methods */
// length
// let text = "rtyuihcbdns";
// console.log(text.length);

// char at index
// let text = "rtyuihcbdns";
// console.log(text[3]);

// at
// let text = "rtyuihcbdns";
// console.log(text.at(2));

// charat
// let text = "rtyuihcbdns";
// console.log(text.charAt(5));

// charcodeat
// let text = "artyuihcbdns";
// console.log(text.charCodeAt(5));

// codepointat
// let text = "rtyuihcbdns";
// console.log(text.codePointAt(0));

// concat
// let text1 = "dhruv";
// let text2 = "sharma";
// console.log(text1.concat(" ",text2))

// slice
// let text = "rtyuihcbdns";
// console.log(text.slice(0,5));
// console.log(text.slice(5));
// console.log(text.slice(-5));
// console.log(text.slice(-8,-2));

// substr
// let text = "rtyuihcbdns";
// console.log(text.substring(0,4));
// console.log(text.substring(4));
// console.log(text.substring(-4));

// touppercase, tolowercase
// let text = "rtyuihcbdns";
// console.log(text.toUpperCase());
// let text2 = "TFGVBNNWWW";
// console.log(text2.toLowerCase());

// trim,trimstart,trimend
// let text1 = "   text      ";
// console.log(text1);
// console.log(text1.trim());
// let text2 = "   text      ";
// console.log(text2);
// console.log(text2.trimStart());
// let text3 = "      text          ";
// console.log(text3);
// console.log(text3.trimEnd());

// padend,padstart
// let text1 = "5";
// console.log(text1);
// console.log(text1.padStart(4,"-"));
// let text2 = "5";
// console.log(text2);
// console.log(text2.padEnd(4,"-"));

// repeat
// let text = "hello";
// console.log(text);
// console.log(text.repeat(3));

// replace,replaceall
// let text = "hello I am c++ c++";
// console.log(text);
// console.log(text.replace("c++","Js"));
// let text = "hello I am c++ c++";
// console.log(text);
// console.log(text.replaceAll("c++","Js"));

// split:- string to array
// let text = "hello I am c++ c++";
// console.log(text);
// console.log(text.split());

// indexof,lastindexof
// let text = "Please locate where locate occurs!";
// let index = text.indexOf("locate");
// console.log(index);
// let text = "Please locate where locate occurs!";
// let lastindex = text.lastIndexOf("locate");
// console.log(lastindex);

// search
// let text = "Please locate where 'locate' occurs!";
// let search = text.search("locate");
// console.log(search);

// match,matchall
// let text1 = "The rain in SPAIN stays mainly in the plain";
// console.log(text1.match("ain"));
// let text2 = "The rain in SPAIN stays mainly in the plain";
// let match = text2.matchAll("ain");
// console.log(match);

// includes
// let text = "Hello world, welcome to the universe.";
// console.log(text.includes("world"));

// startwith,endwith
// let text = "Hello world, welcome to the universe.";
// console.log(text.startsWith("Hello"));
// let text2 = "Hello world, welcome to the universe.";
// console.log(text2.endsWith("Hello"));