// lets create a function basically function is a resualble block of code
'use strict';
// function shwoMessage(){
//     alert("Hello Js");
// }
// shwoMessage();



// this is called function expression
// let fun = function showData(){
//     alert("Show my Data");
// }
// fun();



// const btn = document.getElementById("btn");

// btn.addEventListener("click", function () {
//     console.log("Hello!");
// });





// let username = "Dhruv";
// function showUser(a,b){
//       let message = 'Hello, ' + username;
//       alert(message);
//     console.log("Hello," + username);
// }
// showUser();




// let username = "Dhruv";
// function showUser(){
//     username = "John";
//     let message = "Hello," + username;
//     alert(message);
// }

// alert( username );

// showUser();

// alert( username );



// this function access global username when concat outside function and when we declare same variable in function then it is only accessible in function block not outside
// let username = "dhruv";

// function showName(){
//     let username = "John";
//     let message = "Hello, " + username;
//     alert(message);
// }
// showName();
// alert("hello, " + username);


// parameterized function
// function showText(from,text){
//     alert(from + ":" + text);
// }
// showText("From","Dhruv");





// this function gives undefined
// function show(text){
// alert(text);
// }
// show();





// this function gives undefined if undefined we can modify it using if statement
// function show(text){
//     if(text === undefined){
//         text = 'Empty Message';
//     }
// alert(text);
// }
// show();




// function showCount(count){
// alert(count ?? 'Unknown')
// }
// showCount(0);
// showCount(null);
// showCount(undefined);




// function Sum(a,b){
//     return a+b;
// }
// // console.log(Sum(12,22));
// let result = Sum(12,24);
// alert(result);



// function checkAge(age){
//     if(age > 18){
//         return true;
//     }
//     else{
//         confirm("Do you have Permission");
//     }
// }

// let age = prompt("How old are you: ",18);

// if(checkAge(age)){
//     alert("Access Granted");
// }
// else{
//     alert("Access Denied");
// }

