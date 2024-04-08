let arr = [1,2,3,4,5]

Array.prototype.customFilter = function(callback){
    let newArr = []

    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArr.push(this[i])
        }
    }

    return newArr;
}

let result = arr.customFilter((val, i, array) => val > 3)

console.log("result >>> ", result)