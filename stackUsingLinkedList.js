class Node{
    constructor(element){
        this.element = element
        this.next = null
    }
}

class Stack{
    constructor(){
        this.front = null
    }

    push(element){
        const tempNode = new Node(element)
        tempNode.next = this.front
        this.front = tempNode
    }

    pop(){
        if(this.front == null){
            return "Underflow"
        }
        this.front = this.front.next
    }

    peek(){
        return this.front.element
    }

    isEmpty(){
        return !this.front
    }
}

const stack = new Stack()

stack.push(23)
stack.push(33)
stack.push(2)
stack.push(3)
stack.push(23)
stack.pop()


console.log(stack.isEmpty())