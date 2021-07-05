// You are given a object of user’s details as:
 

 let userObject = {

userName: "Philip",

fatherName: "Norman",

className: "four",

};

 

// Your task is to traverse the object and print its properties
//  (both names and values)

for(let key in userObject){

    console.log(`${key}: ${userObject[key]}`);
    
}