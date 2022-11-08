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
                    this.head = curr.next
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

    // searching a value
    search(element){
        let curr =  this.head
        console.log(curr.element)
        let it = 0 
        while(curr !== null){
            if(curr.element === element){
                return it 
            }
            it++
            curr = curr.next
        }
        return -1
    }

    traverse(){
        let current = this.head
        while(current){
            console.log(current.element)
            current = current.next
        }
    }

}

const linkedList = new LinkedList()

linkedList.add(24)
linkedList.add(33)
linkedList.add(77)
linkedList.traverse()



