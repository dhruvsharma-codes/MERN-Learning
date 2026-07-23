// garbage collection works on mark and sweep algorithm if we remove the reference object then system automatically cleans the unused code
// let user = {
//     "name"  : "dhruv",
// }
// console.log(user);
// user = null;
// console.log(user);



let user = {
    "name" : "dhruv",
}
let admin = user;

console.log(user);
console.log(admin);
user = null;

console.log(user);
console.log(admin);
