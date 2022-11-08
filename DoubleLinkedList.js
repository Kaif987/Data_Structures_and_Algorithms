class Node{
    constructor(value){
        this.element = value
        this.prev = null
        this.next = null
    }
}

class DoubleLinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    add(value){
        const node = new Node(value)
        if(this.head === null){
            this.head = node
        }else{
            let current = this.head
            while(current.next){
                current = current.next
            }
            current.next = node 
            node.prev = current
        }
        this.size++
    }

    insertNodeAt(element, index){
        if(index < 0 || index > this.size){
            console.log("enter a valid index")
            return 
        }
        const node = new Node(element)
        

        if(index === 0){
            if(this.head){
                this.head.prev = node
            } 
            node.next = this.head
            this.head = node 
        }else{
            let it = 0
            let current = this.head
            let prev;
            while(it < index){
                prev = current
                current = current.next
                it++
            }
            node.prev = prev
            node .next = current
            prev.next = node
            current.prev = node 
        }
        this.size++
    }

    removeElement(value){
        if(this.head === null){
            return 
        }

        if(this.head.element === value){
            this.head = this.head.next || null
        }else{
            let current = this.head
            let prev = current
            while(current.next){
                if(current.element === value){
                    prev.next = current.next
                    current.prev = prev
                    return 
                }
                prev = current
                current = current.next
            }
            return -1 
        }
        this.size-- 
    }

    removeAtIndex(index){
        if(index < 0 || index > this.size) {
            console.log("please enter valid index")
            return
        }

        if(index == 0){
            if(this.head.next) this.head.next.prev = null
            this.head = this.head.next || null
        }else{
            let it = 0
            current = this.head
            while(it < index){
                it++
                prev = current
                current = current.next
            }
            if(current.prev) prev.next = current.next
            if(current.next) current.next.prev = prev 
        }
        this.size--
    }

    search(value){
        let current = this.head
        let index = 0
        while(current.next){
            if(current.element === value){
                return index
            }
            current = current.next
            index++
        }
        return -1
    }
}

const doubleLinkedList = new DoubleLinkedList()
doubleLinkedList.add(44)
doubleLinkedList.add(23)
doubleLinkedList.add(74)
console.log(doubleLinkedList.search(23))


console.log(doubleLinkedList)