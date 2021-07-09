class Stack {
    constructor(){
        this.items = [];
    }
  
    push(item) {
        this.items.push(item);

    }

    pop() {
        this.items.pop();

    }

    peek() {
        return this.items[this.items.length-1]
    }

    isEmpty() {
        if (this.items.length == 0){

            return true;
        }else{
            return false;
        }
    }

    printStack() {
          for(let i = 0; i<this.items.length;i++){
              console.log(this.items[i]);
          }
    }
    

}
let myStack = new Stack();
myStack.push('Karachi');
myStack.push('Lahore');
myStack.printStack();
myStack.pop();
myStack.printStack();
