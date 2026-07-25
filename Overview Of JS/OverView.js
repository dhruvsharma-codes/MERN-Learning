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