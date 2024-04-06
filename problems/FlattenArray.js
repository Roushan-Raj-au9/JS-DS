let arr = [[1], [2], 3, 4, [5]]

let result = arr.reduce((acc, curr) => {
    if(Array.isArray(curr)){
        return [...acc, ...curr]
    }

    return [...acc, curr]
    
}, [])

console.log("result: ", result)