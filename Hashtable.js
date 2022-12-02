class HashTable{
    constructor(){
        this.table = new Array(124)
        this.size = 0
    }

    _hash(key){
        let hash = 0
        for(let i= 0; i < key.length; i++){
            hash += key.charCodeAt(i)
        }
        return (hash % this.table.length)
    }

    set(key, value){
        const index = this._hash(key)
        if(this.table[index]){
            for(let i = 0; i < this.table[index].length; i++){
                if(this.table[index][i][0] === key){
                    this.table[index][i][1] === value
                    return 
                }
            }
        }else{
            this.table[index] = []
            this.table[index].push([key, value])
        }
        this.size++
    }

    get(key){
        const index = this._hash(key)
        if(this.table[index]){
            for(let i = 0; i < this.table[index].length; i++){
                if(this.table[index][i][0] == key){
                    return this.table[index][i]
                }
            }
        }
        return undefined
    }

    remove(key){
        const index = this._hash(key)
        if(this.table[index] && this.table[index].length){
            for(let i = 0; i < this.table[index].length; i++){
                if(this.table[index][i][0] === key){
                    this.table[index].splice(i,1)
                    this.size--
                    return true
                }
            }
        }else{
            return false
        }
    }
}

const ht = new HashTable()
ht.set("hello", 100)
ht.remove("hello")
console.log(ht.get("hello"))
