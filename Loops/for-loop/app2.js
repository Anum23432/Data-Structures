// Suppose you are given an array: [1, 8, 7, 3, 2, 9, 10, 12].
// You need to find out whether a number is prime or not 
// (Hint: a prime number is a number that is divisible by 1 and itself).
// What approach would you take to do that? Support it with the
// relevant code.

let num = [1, 8, 7, 3, 2, 9, 10 ,12];
function isPrime(num){
    for (let i = 0; i < num.length; i++)
    if(num % i == 0){
        console.log("false.")
    }
    else {
        console.log("prime numbers.")
    }    


}