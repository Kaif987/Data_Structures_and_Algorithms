const {LinkedList}  = require("./linked_list")


class Queue{
    constructor(){
        this.items = new LinkedList()
    }

    isEmpty(){
        return !this.items.size
    }

    enqueue(element){
        this.items.add(element)
    }

    dequeue(){
        this.items.removeAtIndex(0)
    }

    front(){
        return this.items.head
    }

    printQueue(){
        console.log(this.items)
    }
}

const queue = new Queue()

queue.enqueue(23)
queue.enqueue(44)
queue.enqueue(56)
queue.dequeue()
queue.printQueue()