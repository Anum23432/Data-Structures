// Implement following methods:
// clear: a method that clears stack
// toString: a method that converts all members of stack into string

class Stack {
    constructor(){
        this.items = [1,2,3];
    }
    
    //   toString method
    toStringMethod(){
        let string;
        string = this.items.toString();
        console.log(string);
        }
        // clear method
    clear(){
        this.items = [];
     this.size =0;  
      console.log('stack cleared..');
       return this.items}
}
// calling functions
let myStack = new Stack();
myStack.toStringMethod();
myStack.clear();
