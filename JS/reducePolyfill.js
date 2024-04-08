let arr = [1,2,3,4,5]

Array.prototype.customReduce = function(callback, initialValue = null){
    let accumulator = initialValue;

    for(let i = 0; i < this.length; i++){
        accumulator = callback(accumulator, this[i], this)
    }

    return accumulator;
}

let result = arr.customReduce((prev, curr) => prev + curr);

console.log("result >>> ", result)