// Consider a string ‘Node.js’given to you. I want the last 
// three characters removed. How’d you do that?

let str = "Node.js";
//  we can remove by subString() method...
str = str.substring(0,str.length-3);
console.log(str);