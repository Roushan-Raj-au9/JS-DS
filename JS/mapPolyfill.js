let arr = [1,2,3,4,5]

Array.prototype.customMap = function(callback){
    let newArr = [];

    for(let i = 0; i < this.length; i++){
        newArr.push(callback(this[i], i, this))
    }

    return newArr;
}

let result = arr.customMap((val, i, array) => val * 3 )

console.log("result >>> ", result)