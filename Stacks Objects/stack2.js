// Implement following methods. Don’t forget to increase and 
// decrease the size when you add or remove an element from 
// the stack


// push: a method through that you can add a value to the stack
// peek: a method through which you can get the value on the top of stack
// pop: a method through which you can remove the first element of the stack



// push method
class Stack {
    constructor(){
        this.items = ["Sindh","Punjab","Balochistan","Kpk"];
    }
  
    push(item) {
        this.items.push(item);

    }
// pop method
    pop() {
        this.items.pop();

    }
//  peek method
    peek() {
        return this.items[this.items.length-1]
    }
// printing stack
    printStack() {
        for(let i = 0; i<this.items.length;i++){ /*for initialization*/
            console.log(this.items[i]);
        }
    }
}
// calling functions.
let myStack = new Stack();
myStack.push("Gigit baltistan");
myStack.printStack();
myStack.pop();
myStack.printStack();
myStack.peek();
myStack.printStack();