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
}

const heap = new MinHeap()
heap.insert(10)
heap.insert(23)
console.log(heap)