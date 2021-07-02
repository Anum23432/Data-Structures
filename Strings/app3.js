// Suppose you are given a string: ‘Karachi’. Convert it to ‘Kolachi’ 
// (Hint: Need to look at appropriate indices and replace them)

let str = "Karachi";
String.prototype.replaceAt = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }
 
    return this.substring(0, index) + replacement + this.substring(index + 1);
}

str = str.replaceAt(1 , 'o');
console.log(str);
// now we want to change r to l

String.prototype.replaceAt = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }
 
 return this.substring(0, index) + replacement + this.substring(index + 1);
}
str = str.replaceAt(2,'l');
console.log(str);
