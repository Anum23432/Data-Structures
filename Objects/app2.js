// Now, using the same object, change the userName to your name,
//  fatherName to your father’s name, and className to your class.

let userObject = {

    userName: "Philip",
    
    fatherName: "Norman",
    
    className: "four",
    
    };

    // update name
userObject.userName = "Anum";
console.log(userObject);

// update fathername
userObject.fatherName = "Khaleeq Hashmi";
console.log(userObject);

// update class
userObject.className = "web dev";
console.log(userObject);

// now traversing after changes

for(let key in userObject){

    console.log(`${key}: ${userObject[key]}`);
    
}