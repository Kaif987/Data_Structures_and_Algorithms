class Stack{
    constructor(){
        this.items = []
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        if(!this.items.length){
            console.log("Stack underflow")
            return "Underflow"
        }
        return this.items.pop()
    }

    peek(){
        return this.items[this.items.length - 1]
    }

    printStack(){
        let str  = ""
        for(let i = 0; i < this.items.length; i++){
            str += this.items[i] + " "
        }
        return str
    }
}

function evaluatePostFixExpression(str){
    const stack = new Stack()

    for(let i = 0; i < str.length; i++){
        const char = str[i]
        if(!isNaN(char)){
            const number = char.charCodeAt(0) - "0".charCodeAt(0)
            stack.push(number)
        }
        else{
            val1 = stack.pop()
            val2 = stack.pop()
            if(val1 == "Underflow" || val2 == "Underflow"){
                console.log("Cant perform postfix evaluation")
                return 
            }
            switch(char){
                case "+":
                    stack.push(val2 + val1)
                    break
                case "-":
                    stack.push(val2 - val1)
                    break
                case "/":
                    stack.push(val2 / val1)
                    break
                case "*":
                    stack.push(val2 * val1)
                    break    
            }
        }
    }
    return stack.pop()
}

console.log(evaluatePostFixExpression("235*+8-"))
console.log(evaluatePostFixExpression("23*+"));


// const stack = new Stack()
// stack.push(23)
// stack.push(66)
// stack.push(77)
// stack.pop()
// console.log(stack.printStack())