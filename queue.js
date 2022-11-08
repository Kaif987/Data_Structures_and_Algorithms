class queue{
    constructor(){
        this.items = []
    }

    isEmpty(){
        return !this.items.length
    }

    enqueue(element){
        this.items.push(element)
    }

    dequeue(){
        this.items.pop()
    }

    front(){
        return this.items[this.items.length - 1]
    }

    printQueue(){
        console.log(this.items)
    }
}

const queue1 = new queue()
queue1.enqueue(22)
queue1.enqueue(288)
console.log(queue1.front())
queue1.printQueue()

