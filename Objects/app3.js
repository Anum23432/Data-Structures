// 3. Suppose you have an array of objects:

let books = [

{

name: "The Lean Startup",

topics: ["entrepreneurship","startups"],

},

{

name: "War and Peace",

topics: ["peace", "politics"],

}];

// Now you need to print the name and topics separately,
//  how would you do that?

for(let i = 0; i < books.length; i++){
    console.log(books[i].name);
    console.log(books[i].topics);
}