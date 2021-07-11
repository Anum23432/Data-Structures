class Queue {
    constructor(){
        this.items = [];
        this.size = 0;
    }
    // Adding items

    enqueue(item) {
        this.items.push(item);
    }
    // Adding item by custom method

    enqueueCustomised(items){
        this.items.length=this.items.length+1;
        for(let i=0; i<this.items.length; i++){
            this.items[this.items.length-1]=item;
    }
}
    // Removing item

    dequeue() {
        this.items.shift();

    }
    // Removing items by custom method

    dequeueCustomised() {
        for(let i=0; i<this.items.length; i++){
            this.items[i]= this.items[this.items.length+1];
        }
        this.items.length= this.items.length-1;
    }

    peek() {
         return this.items[this.items.length-1]
    }
    // checking queue if empty or full

    isEmpty() {
        if (this.items.length == 0){

            console.log("true");
        }else{
            console.log("false");
    }
    }

    isFull() {
        if (this.items.length == this.size) {
       console.log("full queue");
        }else{
       console.log("not full");
   }
}
    // printing queue

    printQueue() {
        for(let i = 0; i<this.items.length;i++){
            console.log(this.items[i]);
        }
        // while loop
        // i = 0;
        // while(i<this.items.length){
            // console.log(this.items[i]);
            // i++;
        // }
  }
}
    //  Calling function
let myQueue = new Queue();
myQueue.enqueue("Ali");
myQueue.enqueue("Ayesha");
myQueue.enqueue("nimra");
myQueue.printQueue();
myQueue.dequeue();
myQueue.peek();
myQueue.enqueueCustomised();
myQueue.dequeueCustomised();
myQueue.printQueue();
