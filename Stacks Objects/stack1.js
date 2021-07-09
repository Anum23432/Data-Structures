// Implement Stack using an array. Initialize it with an array 
// which will be used to store values 
// and a size property that will be used to track the size of stack.

class Stack {
    constructor(){
        this.items = [2,4,6,8,10];
    }
    // for printing
    printStack() {
        for(let i = 0; i<this.items.length;i++){ /*for initialization*/
            console.log(this.items[i]);
        }
    }
    // for checking size
    size() {
       this.size = this.items.length;
       console.log(this.size);

    }
}
let myStack = new Stack();
myStack.printStack();
myStack.size();
