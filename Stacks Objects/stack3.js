// Implement following methods:
// isEmpty: a method that checks whether the given 
// stack is empty or not. It will return a boolean
// isFull: a method that checks whether the given 
// stack is full or not. Hint: Compare the length of array with size


class Stack {
    constructor(){
        this.items = [];
        this.size = 0;

    }
    // is empty method
isEmpty() {
    if (this.size == 0){

        console.log("Empty Stack.");

    }else{
        console.log("Not Empty");
    }
}
// isFull method
isFull() {
    if(this.size == items){
        console.log("Full Stack.");

    }else{
        console.log("Not Full..");

    }
}
// for printing
printStack() {
      for(let i = 0; i<this.items.length;i++){
          console.log(this.items[i]);
      }
}
}
// calling function
let myStack = new Stack();
myStack.isEmpty();
myStack.printStack();
myStack.isFull();
myStack.printStack();