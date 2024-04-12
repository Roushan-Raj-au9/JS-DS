// when we pass a function as a argument to other function is know as Callback;

// function sum(a, b) {
//     let result = a + b;
//     return result;
// }

function sum(a, b, callback) {
    let result = a + b;
    callback(result);
}

function display(data) {
    console.log("Result of the sum is : ", data)
}

function displayPassive(data) {
    console.log("Sum result is : ", data)
}

sum(5, 10, display);