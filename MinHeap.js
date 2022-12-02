class MinHeap{
    constructor(){
        this.heap = [null]
    }

    findSmallest(){
        return this.heap[1]
    }

    insert(element){
        this.heap.push(element)

        if(this.heap.length > 1){
            let current = this.heap.length - 1
            
            while(current > 1 && this.heap[Math.floor(current / 2)] > this.heap[current]){
                [this.heap[Math.floor(current / 2)], this.heap[current]] = [this.heap[current], this.heap[Math.floor(current / 2)]]
                current = current / 2
            }
        }
    }

    remove(){
        let smallest = this.heap[1]
        
        if(this.heap.length > 2){
            this.heap[1] = this.heap[this.heap.length - 1]
            this.heap.splice(this.heap.length - 1)

            if(this.heap.length === 3){
                if(this.heap[1] > this.heap[2]){
                    [this.heap[1] , this.heap[2]] = [this.heap[2], this.heap[1]]
                }
                return smallest  
            }

            let current = 1
            let leftChildNode = current * 2
            let rightChildNode = current * 2 + 1

            while(this.heap[leftChildNode]
            && this.heap[rightChildNode] && 
            (this.heap[current] > leftChildNode) || (this.heap[current] > this.heap[rightChildNode]) 
            ){
                if(this.heap[leftChildNode] < this.heap[rightChildNode]){
                    [this.heap[current], this.heap[leftChildNode]] = [this.heap[leftChildNode], this.heap[rightChildNode]]
                    current = leftChildNode
                }else{
                    [this.heap[current], this.heap[rightChildNode]] = [this.heap[rightChildNode], this.heap[current]]
                }
                leftChildNode = current * 2
                rightChildNode = current * 2 + 1
            }
        }
        else if(this.heap.length === 2){
            this.heap.splice(1,1) 
        }
        else {
            return null
        }
        return smallest
    }

}

const heap = new MinHeap()
heap.insert(10)
heap.insert(23)
heap.remove()
heap.remove()
heap.remove()

console.log(heap)