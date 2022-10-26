class Node {
    constructor(value){
        this.element = value
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.size = null
    }
    
    // add element
    add(element){
        const newNode = new Node(element)
        let current;
        if(this.head === null){
            this.head = newNode
        }else{
            current = this.head
            while(current){
                current = 
            }
        }
    }
    
}

const firstNode = new Node(12)
console.log(firstNode)