//* 1  ToNumber

// there are some rules based on that conversion happens like below:

// --> Undefined --->  return NaN
// --> Null --->  return +0
// --> Boolean --->  return 1 if true, return 0 if false

console.log(10 - null); // 10
// console.log(10 - 0);  ---> (internally it converts null to 0)

console.log(10 - undefined); // NaN
// console.log(10 - Nan); ----> (internally it converts undefined to NaN)

console.log(10 - true);  // 9
// console.log(10 - 1);  --->  (internally it converts true to 1)

console.log(10 - false);  // 10
// console.log(10 - 0);  --->  (internally it converts false to 0)

console.log(1 - "453");  // -452
// console.log(1 - 453);  --->  (internally it converts "453" to 453 and minus sign remains there)

console.log(1 - "453ab56");  //NaN
// console.log(1 - NaN);  ---> (internally it try to convert "453ab56" this into number but it is not valid number so it will get as NaN)


//* 2  ToPrimitive

let obj = {};
console.log(obj.toString()); // [object Object]

// we can overwrite this as by default is return [object Object]
let obj2 = {
    toString(){
        return "Hi Roushan"
    }
};
console.log(obj2.toString()); // Hi Roushan

let obj3 = {};
console.log(10 - obj3); // NaN
// obj3.valueOf -> object, toString -> [object object]

console.log(obj3 - obj3); // NaN

let obj4 = { x: 7, y: 10 };
console.log(100 - obj4); // NaN

let obj5 = { 
    x: 7, 
    y: 10, 
    valueOf(){
        return 99
    } 
};
console.log(100 - obj5); // 1

let obj6 = { 
    x: 7, 
    y: 10, 
    toString(){
        return "90"
    } 
};
console.log(100 - obj6); // 10

// let obj7 = { 
//     x: 7, 
//     y: 10, 
//     toString(){
//         return {}
//     } 
// };
// console.log(100 - obj7); // TypeError



//* 3  Addition Operator
let obj11 = {};
console.log("100" + obj11); // 100[object object]
// "100" "[object object]" ---> 100[object object]

console.log(100 + obj11); // 100[object object]


//* 4  Corner Case

console.log("" + 0)      // 0
console.log("" + (-0))  // 0

console.log("" + [])   // ""
console.log("" + {})   // [object object]

console.log("" + [1,2,3]) // 1,2,3

console.log("" + [null, undefined]) // ,

console.log("" + [1,2,null,3]) // 1,2,,3

console.log(5 - []) // 5  (because empty [] means 0)
console.log([] - 5) // -5
console.log([""] - 5) // -5
console.log(["0"] - 5) // -5
console.log([6] - 5) // 1



