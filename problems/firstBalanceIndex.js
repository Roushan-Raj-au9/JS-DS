//          0, 1, 2, 3,  4, 5, 
let lst = [-7, 1, 5, 2, -4, 3];
// Output: 3 (index)

function findBalanceIndex(lst) {
    for (let i = 0; i < lst.length; i++) {
        let leftSum = lst.slice(0, i).reduce((acc, curr) => acc + curr, 0);
        let rightSum = lst.slice(i + 1).reduce((acc, curr) => acc + curr, 0);
        if (leftSum === rightSum) {
            return i;
        }
    }
    return -1; // If no such index is found
}

const balanceIndex = findBalanceIndex(lst);
console.log("Output:", balanceIndex); // Output: 3
