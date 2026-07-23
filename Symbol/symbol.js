// symbol uniquely identifies our value
// let id1 = Symbol("id");
// let id2 = Symbol("id");



// alert(id1 == id2);


// alert doesnt convert symbol into string
// let id = Symbol("id");
// alert(id); 



// let user = {
//     "name" :"John",
// }
// console.log(user);
// let id = Symbol("id");
// user[id] = 1;
// alert(user[id]);




// let id = Symbol("id");
// let user = {
//   name: "John",
//   age: 30,
//   [id]: 123
// };

// for (let key in user) alert(key);

// alert("Direct : " + user[id]);



// let id = Symbol("id");
// let user ={
//     "name" : "Dhruv",
//     "age" : 21,
//     [id] : 123,
// }
// console.log(user);

// let clone = Object.assign({},user);
// console.log(clone);
// console.log(clone[id]);
// console.log(user[id] === clone[id]);
// console.log(user === clone);