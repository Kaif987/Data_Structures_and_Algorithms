// function depthFirstSearch(graph, source){
//     const stack = [source]
//     while(stack.length > 0){
//         const current = stack.pop()
//         console.log(current)
//         for(let neighbour of graph[current]){
//             stack.push(neighbour)
//         }
//     }
// }

function depthFirstSearch(graph, source){
    console.log(source)
    for(let neighbour of graph[source]){
        depthFirstSearch(graph, neighbour)
    }
}

function breadthFirstSearch(graph, source){
    const queue = [source]
    while(queue.length > 0){
        const current = queue.shift()
        console.log(current)
        for(let neighbour of graph[current]){
            queue.push(neighbour)
        }
    }
}


// depth first Has path function 
// function hasPath(graph, src, dest){
//     if(src === dest) return true
//     for(let neighbour of graph[src]){
//         if(hasPath(graph, neighbour, dest)){
//             return true
//         }
//     }
//     return false
// }

// breadth first has path function
function hasPath(graph, src, dest){
    const queue = [src]
    while(queue.length > 0){
        const current = queue.shift()
        if(current === dest){
            return true
        }
        for(let neighbour of graph[current]){
            queue.push(neighbour)
        }
    }
    return false
}



const graph = {
    a: ["c", "b"],
    b: ["d"],
    c: ["e"],
    d: ["f"],
    e: [],
    f: []
}

// depthFirstSearch(graph, "a")
console.log(hasPath(graph, "f" , "e"))
