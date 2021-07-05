// 5. Again consider the above array of objects, 
// and delete one of the objects that represent a book

let books = [

    {
    name : "Business",
    topics : ["Assets" , "business skills"]

    },

    {
    
    name: "The Lean Startup",
    
    topics: ["entrepreneurship","startups"],
    
    },
    
    {
    
    name: "War and Peace",
    
    topics: ["peace", "politics"],
    },
    {

    name : "Harry Potter" ,
    topics : ["magic" , "fantasy"],
    },

    
    ];

    // delete an item from end by customised method

    books.length = books .length-1;
    console.log(books);

    // delete an item from the start

    for(let i = 0; i < books.length-1; i++){
        books[i] = books[i+1];
    }
    books.length = books.length-1;
    console.log(books);

    // traversal 
    for(let i = 0; i < books.length; i++){
        console.log(books[i].name);
        console.log(books[i].topics);
    }