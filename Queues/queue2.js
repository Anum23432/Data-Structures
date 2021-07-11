// Implement following methods. Don’t forget to increase and decrease
//  the size when you add or remove an element from the queue.
// enqueue: a method through that you can add a value to the queue
// peek: a method through which you can get the value on the top of queue
// dequeue: a method through which you can remove the first element of the queue

class Queue {
    constructor(){
        this.items = [];
        this.size = 5;
    }
    // by built-in method
    enqueue(item) {
        // this.items.push(item);
        if(this.items.length+1 > this.size){
            console.log('overflow');
            }
        else{
            this.items.push(item);
            }
    }
    // by customised method
    enqueueCustomised(item){
        this.items.length=this.items.length+1;
        for(let i=0; i<this.items.length; i++){
            this.items[this.items.length-1]=item;
    }
}
    peek() {
        console.log(this.items[0]);
   }
//    by built-in method
   dequeue() {
    // this.items.shift();
    if(this.items.length==0){
        console.log("underflow");
    }
    else{
        this.items.shift();
    }  

}
// by customised method
dequeueCustomised() {
    for(let i=0; i<this.items.length; i++){
        this.items[i]= this.items[this.items.length+1];
    }
    this.items.length= this.items.length-1;
}
printQueue(){
for(let i = 0; i<this.items.length;i++){
    console.log(this.items[i]);
}
}
}
// calling functions...
let myQueue = new Queue();
myQueue.enqueue("kiran");
myQueue.enqueue("sana");
myQueue.enqueue("ali");
myQueue.enqueue("afeera");
myQueue.printQueue();
myQueue.dequeue();
myQueue.printQueue();
myQueue.enqueueCustomised("ifra");
myQueue.printQueue();
myQueue.dequeueCustomised();
myQueue.printQueue();
myQueue.peek();