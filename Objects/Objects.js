// let obj = new Object();
// console.log(typeof obj);



// Empty object
// let obj = {};
// console.log(obj);


// let obj = {
//     "name": "Dhruv",
//     "age" : 21,
// }
// console.log(obj);
// console.log(obj.name,obj.age);


// let user = {
//      "name": "Dhruv",
//     "age" : 21,
// }
// console.log(Object.keys(user));



// let user = {
//      "name": "Dhruv",
//     "age" : 21,
//     "address" : {
//         "street" : "122",
//         "landmark" : "",
//     }
// }
// console.log(user);
// console.log(user.name,user.age);
// console.log(user.address);
// console.log(user.address.street);




// let user = {
//      "name": "Dhruv",
//     "age" : 21,
//     "address" : {
//         "street" : "122",
//         "landmark" : "",
//     }
// }
// user.isAdmin = true;
// console.log(user);
// user.name = "Dhruv Sharma";
// console.log(user)
// delete user.isAdmin;
// console.log(user);




// in is used in objects if we want to check keys values like is the key exists or not
// let user = {
//     "name" : "Dhruv",
//     "age" : 21,
// }

// alert("age" in user)



// fro in is used in objects
// let user = {
//     "name" : "Dhruv",
//     "age" : 21,
// }

// for (let key in user){
//     console.log(user[key]);
// }



// print keys 
// let user = {
//   name: "John",
//   surname: "Smith"
// };
// user.age = 25; 
// console.log(user);

// // non-integer properties are listed in the creation order
// for (let prop in user) {
//   alert( prop );
// }




// coping objects in simple variables if we copy from one variable to another it creates two different copies means if we delete one then only one is delted another remains same but in case of objects if we copy  like this then they have same storage
// let message = "Hello!";
// phrase = message;

// console.log(phrase);
// console.log(message);

// delete phrase;
// // console.log(phrase);
// console.log(message);




// let user = {
//     "name" : "Dhruv",
// }
// console.log(user);
// let admin = user;
// console.log(admin);
// delete admin.name;
// console.log(admin);
// console.log(user);




// best way of cloning using loop
// let user = {
//     "name" : "Dhruv",
//     "age" : 21,
// }

// console.log(user);

// let clone = {};

// for (let key in user){
//     clone[key] = user[key];
// }
// console.log(clone);

// clone.name = "Peter";
// console.log(clone);
// console.log(user);
// delete clone.name;
// console.log(user);
// console.log(clone);



// object assign using obj.assign
// let user = {
//     "name" : "Dhruv",
// }
// let permission1 = {"canView" : true};
// let permission2 = {"canEdit" : true}

// Object.assign(user,permission1,permission2);
// console.log(user);



// let user = {
//     "name" : "Dhruv",
//     "Address":{
//         "city" : "Mohali",
//     }
// }
// console.log(user.name);
// console.log(user.Address.city);

// let clone = structuredClone(user);

// clone.Address.city = "Delhi";
// console.log(user.Address.city);
// console.log(clone.Address.city);
