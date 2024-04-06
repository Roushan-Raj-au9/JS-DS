let data = 123

const reverse = (num) => {
    let isNegative = false;
    let store = 0;

    if(num < 0){
        isNegative = true;
        num = -1 * num;
    }

    while(num > 0){
        store = (store * 10) + (num % 10);
        num = Math.floor(num / 10)
    }

    if(isNegative === true){
        store = -1 * store;
    }

    return store;
}

let result = reverse(data)
console.log("result >>> ", result)