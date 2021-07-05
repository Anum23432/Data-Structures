// 4. Take the above array of objects and add a book 
// of your choice to it with the same properties

let books = [

    {
    
    name: "The Lean Startup",
    
    topics: ["entrepreneurship","startups"],
    
    },
    
    {
    
    name: "War and Peace",
    
    topics: ["peace", "politics"],
    
    }];

    // so here we are using push method but customised..

    function insertAtEnd(name) {
          books.length = books.length+1;
    books[books.length-1] = {name : "Harry Potter" , topics : ["magic" , "fantasy"]};
    }

    insertAtEnd(books);
    console.log(books);
    
       

    // customised insertion at start

    function insertAtStart(name){
        books.length = books.length+1;
        for(i = books.length-1; i > 0; i--){
              books[i] = books[i-1];
        }
        books[0] = { name : "Business", topics : ["Assets" , "business skills"]
        };
    }
    insertAtStart(books);
    console.log(books);

     // traversal again
     for(let i = 0; i < books.length; i++){
        console.log(books[i].name);
        console.log(books[i].topics);
    }