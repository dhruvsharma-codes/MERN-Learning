// strings are used for sorting text, strings are immutable.

// let str = "dhruv";
// console.log(str);
// console.log(typeof str);



// string template
// let text = `He's often called "Johnny"`;
// console.log(text);



// template lateral
// let name = "Dhruv";
// console.log(`Hello, ${name}`);



// string methods



// finding length
// let text = "abcdefghjojadnkndkdkb";
// console.log(text.length);

// gives character at the position
// let text = "dhruv sharma";
// console.log(text.charAt(3));

// gives code of character the method return utf-16 code
// let text = "Hello World";
// console.log(text.charCodeAt(3));

// gives point value at position
// let text = "Hello";
// console.log(text.codePointAt(2));

// at gives character at index value that we point
// let text = "Hello";
// console.log(text.at(2));

// it also gives character at position
// let text = "dhruv";
// console.log(text[0]);

// concat combine two strings
// let text1 = "Dhruv";
// let text2 = "Sharma";
// console.log(text1.concat(" " ,text2));

// slice is used to slice out 
// let text = "dkkdnwdbwkdbwkdbwkdb";
// console.log(text.slice(0,5));
// start from 7 then rest
// console.log(text.slice(7));

// we cannot use -ve indexing in substring if we use it converts it into 0
// let text = "dkkdnwdbwkdbwkdbwkdb";
// console.log(text.substring(0,5));

// uppercase and lowercase is used to uppercase and lowercase characters
// let text = "Dhruv Sharma";
// console.log(text.toLowerCase());
// console.log(text.toUpperCase());

// trim remove whitespaces
// let text = "     Hello";
// console.log(text.trim());

// trimstart remove space from start trimend from last
// let text1 = "    dhruv       sharma";
// let text2 = "              dhruv                 "
// console.log(text1.trimStart());
// console.log(text2.trimEnd());

// padstart padding at start padend padding at end
// let text = "5";
// console.log(text.padStart(4,"-"));
// console.log(text.padEnd(4,"-"));

// number of copies we want
// let text = "Hello!";
// console.log(text.repeat(5));

// replace the word we want to replace on change in original string
// let text = "Hello my name is dhruv";
// console.log(text.replace("dhruv","Dhruv"));
// console.log(text);

// convert string into array
// let text = "Dhruv";
// console.log(text.split(""));
// console.log(text.split(" "));
// console.log(text.split(","));



// searching method 



// index of first occurence
// let text = "hello everyone!";
// console.log(text.indexOf("everyone"));

// index of last occurence
// let text = "hello everyone";
// console.log(text.lastIndexOf("everyone"));

// search return position of string
// let text = "Please locate where 'locate' occurs!";
// console.log(text.search("locate"));

// match return matching value
// let text = "The rain in SPAIN stays mainly in the plain";
// console.log(text.match("ain"));

// matchAll return all values
// let text = "The rain in SPAIN stays mainly in the plain";
// console.log(Array.from(text.matchAll("ain")));

// include searches the value if he finds then gives true
// let text = "Hello world, welcome to the universe.";
// console.log(text.includes("world"));

// return true if string begins with specific value return true for this code
// let text = "Hello world, welcome to the universe.";
// console.log(text.startsWith("Hello"));
// return false if string begins with specific value return false for this code
// console.log(text.startsWith("world"));


// ends with specific string
// let text = "Hello world, welcome to the universe";
// console.log(text.endsWith("universe"));

