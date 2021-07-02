// Given an array [0, 3, 4, 5, 6, 9, 0], 
// place 1 at the start of this array

let arr = [0, 3, 4, 5, 6, 9, 0];
arr.unshift(1);
console.log(arr);
for( let i =0; i <= arr.length; i++){
    console.log(arr[i]);
}