// Pose you’re given an array [ [1, 2], [3, 4], [5, 6] ].
// Print all the members of this two-dimensional array using
// for loop and while nested loops

// let arr = [[1,2] , [3,4], [5,6]];
// for (let i = 0; i < arr.length; i++) {
//     for(let j = 0; j < arr[i].length ; j++){
//         console.log(arr[i][j]);
//     }  
// }
// Suppose you’re given an array of animals [[‘cat’, ‘rabbit’],
// [‘pigeon’, ‘parrot’], [‘goldfish’, ‘whale’]].  Now, 
// when you encounter ‘car or ‘rabbit’ inside a nested loop,
// print ‘pet animals’ in the console. Also, if you encounter
// ‘pigeon’ or ‘parrot’, print ‘pet birds’. Also, when you encounter 
// ‘goldfish’ or ‘whale’, print ‘fish

let animals = [["cat" , "rabbit"] , ["pigeon" , "parrot"] , ["goldfish" , "whale"]];
for( let i = 0; i < animals.length; ++i ){
    for(let j = 0; j < animals[i].length ; ++j){
        
    
        if(animals[i][j] == "cat" || animals[i][j] == "rabbit"){
            console.log(animals[i][j]);
            console.log("pet animals");
            
        }
        else if(animals[i][j] == "pigeon" || animals[i][j] == "parrot"){
            console.log(animals[i][j]);
            console.log("pet birds");

            
        }
        else if(animals[i][j] == "goldfish" || animals[i][j] == "whale"){
            console.log(animals[i][j]);
            console.log("fish");
            
        }
    }
       
    }
    

