// normal function
function add(num1, num2, num3){
    return num1 + num2 + num3;
}

const result = add(5,5,5);
console.log("result: " + result);

//currying
function add2(num1){
    return function(num2){
        return function(num3){
            return num1 + num2 + num3;
        }
    }
}

let output = add2(10)(20)(30);
console.log("output: " + output);


// Currying is a method which takes a function and returns a new function with different ability to take parameters. It works on the principles of closures

// Currying is transformation of a function from callable like f(a,b,c) to f(a)(b)(c)

// Currying does not call the function , instead it just transforms it
