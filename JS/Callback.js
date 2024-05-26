// when we pass a function as a argument to other function is know as Callback;
// or we can say the function we pass as an argument is known as callbacks

// when a function accepts other function as an argument  is known as HOF (higher order function)
// or we can say HOF are those function, which takes function as an argument

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