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
            while(current.next){
                current = current.next
            }
            current.next = newNode
        }
        this.size++
    }

    insertAtNode(element, index){
        if(index < 0 || index > this.size){
            console.log("Enter a valid index")
            return 
        }
        const node = new Node(element)
        let current, prev;
        
        if(index === 0){
            node.next = this.head
            this.head = node
        }else{
            let it = 0
            current = this.head
            while(it < index){
                it++
                prev = current
                current = current.next
            }
            prev.next = node
            node.next = current
        }
        this.size++
    }

    // remove from index
    removeAtIndex(index){
        if(index < 0 || index >= this.size){
            console.log("Please enter a valid index")
        }
        let prev, curr;
        curr = this.head
        prev = curr

        if(index === 0){
            this.head = curr.next
        }else{
            let it = 0
            while(it < index){
                curr = curr.next
                prev = curr
            }
            prev.next = current.next
        }
        this.size--
    }
    removeElement(element){
        let curr = this.head
        let prev = null;
        while(curr !== null){
            if(curr.element === element){
                if(prev === null){
                    this.head = null
                }else{
                    prev.next = curr.next
                }
                this.size--
                return curr.element
            }
            prev = curr;
            curr = curr.next
        }
        return -1
    }
}

const linkedList = new LinkedList()
linkedList.add(24)
linkedList.add(33)
linkedList.insertAtNode(53, 2)
linkedList.removeElement(24)


console.log(linkedList)
