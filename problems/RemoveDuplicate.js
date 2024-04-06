const arr = [1, 2, 3, 2, 4, 1, 5, 6, 4];

// let result = [...new Set(arr)]
// console.log("result >> ", result)

const uniqueElements = arr.filter((item, index) => arr.indexOf(item) === index);

console.log("uniqueElements >> ", uniqueElements)