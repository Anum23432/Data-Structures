// You need to place 7 at the 3rd index of the array:
//  [3, 8, 10, 12, 45, 34, 34, 34, 2, 2, 0] .
//  How’d you do that?

let arr = [3, 8, 10, 12, 45, 34, 34, 34, 2, 2, 0];
arr.splice(3, 0 , 7);
for(let i = 0; i <= arr.length; i++){
    console.log(arr[i]);
}