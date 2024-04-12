//JS is Dynamically typed language

//Primitive data types
// string
// number
// boolean
// null
// undefined

//* null is a empty value which you assign to variable to suggest no value
//? It is going to be used for nil checks or nulls checks
//! type of null is going to be object
//TODO-  everything in js is an object

let d = null;
console.log("typeof d >>> ", typeof d); // "object"

let e;
console.log("typeof e >>> ", typeof e); // "undefined"

console.log("typeof typeof null >>> ", typeof typeof null); // string //* typeof typeof everything will be string because at first typeof value return will be inside string quotes

console.log('typeof("object") >>> ', typeof ("object"))  //string

console.log("typeof typeof undefined >>> ", typeof typeof undefined); // string

//! coercion
//! conversion

//* implicit coercion
let a = "2";
let b = 2;
console.log(a == b); //true  -- here it is just checking value not the type 
console.log(b == a); //true 
//TODO - In above both case this is going to convert a string into number due to rule of coercion whenever there will be string and number.
console.log(a === b); //false -- here it will check value and type both


//* explicit coercion
console.log('typeof +"2" >>> ', typeof +"2") // number

console.log('+abc >>> ', +"abc") //NaN (Not a Number) //! type of NaN is number

console.log('+"abc" === +"abc" >>> ', +"abc" === +"abc"); // false

console.log("NaN == NaN >>> ", NaN == NaN) // false

//TODO -- Numberic conversion happens for all -,+,*,/
//TODO -- string conversion happens when + is used and one of the operand is string
console.log('"abc" + 1 >>> ', "abc" + 1); //abc1
console.log('1 + "abc" >>> ', 1 + "abc"); //1abc
//? In above both like case -- implicit conversion of your number into a string, whenever there is a number & a string and there is a + (plus) operator in between them, you are going to convert the number into  a sting

console.log('"1" - 1 >>> ', "1" - 1); // 0   //! string would be converted to an integer
console.log('-"1" + 1 >>> ', -"1" + 1); // 0 //! (here minus(-) sign will be retained) string would be converted to an integer



//! Arrays in js

let arr = []; // this is shorthand to create a new array but internally it is doing new Array(0); 
let arr1 = new Array(0);

let lst = [1, 2, 3];
let lst2 = lst;
lst = [];
console.log("lst ... ", lst) // []  //* here after doing lst = [] it starts pointing to new reference (or new memory block)
console.log("lst2 ... ", lst2) // [1, 2, 3]  //* but lst2 still pointing to same reference (or same memory block)

//TODO --- in order to empty both array in above case to lst.length = 0
let lst3 = [1, 2, 3];
let lst4 = lst3;
lst3.length = 0;

console.log("After lst3.length = 0 --- lst3 ... ", lst3) // []
console.log("After lst.length = 0 --- lst4 ... ", lst4); // []



//! Objects in js

let obj = {}; // this is shorthand to create a new Object but internally it is doing new Object(); 
let obj1 = new Object();

let dog = {
    name: 'pablo',
    breed: 'lab'
}

console.log("dog.name >>> ", dog.name);       // pablo
console.log("dog['name'] >>> ", dog["name"]); // pablo



//! Hoisting

var num = 1;
function outer() {
    var num = 2;
    function inner() {
        // var num; (var num = 3, num) will be hoisted here 
        num++;  // here it will be 'undefined++' so it will be 'NaN'
        console.log("num after doing num++ >>>> ", num); // NaN
        var num = 3; // num =3;
        console.log("num after re-assigning  >>>> ", num); // 3
    }
    inner();
}
outer();


//! Call

function greet(message) {
    console.log(`Hi ${this.name}, ${message}`)
}

const person = {
    name: 'John'
}

greet.call(person, 'Good Morning')


//! Apply
function greet(message) {
    console.log(`Hi ${this.name}, ${message}`)
}

const person2 = {
    name: 'Raj'
}

greet.apply(person2, ['Good Evening'])


//! Bind
function greet(message) {
    console.log(`Hi ${this.name}, ${message}`)
}

const person3 = {
    name: 'Sam'
}

let newPerson = greet.bind(person3, 'Good Night')
newPerson();



console.log(Math.max(1, 2, 3, 4)); // 4

console.log(Math.max([1, 2, 3, 4])); // NaN

console.log(Math.max.apply(null, [1, 2, 3, 4])); // 4 //* using apply method as it takes array as a parameter


//! Proto
// TODO: -- ' __proto__ ' is used to point to other object (or to inherit the property we use it)
var aa = {
    x: 10,
    calculate: function (z) {
        return this.x + this.y + z;
    }
};

var bb = {
    y: 20,
    __proto__: aa  //* after doing this now it will inherit all the properties of object aa
};

console.log("bb.x >> ", bb.x) // 10
console.log("bb.calculate >> ", bb.calculate(50)) // 10




//! Prototype

//* Is an object which is available in functions(Constructor functions) and it is used for inheritence;

function Foo(y) {
    this.y = y;
}

Foo.prototype.x = 10;

Foo.prototype.calculate = function (z) {
    return this.x + this.y + z;
}

var foo = new Foo(5);
console.log(foo.calculate(20))

/**
 * *proto is a key which is going to point to another object
 * *proto of your created instance is going to point to prototype of the Constructor funciton or the parent funciton
 */

function Dog(name, breed) {
    this.name = name;
    this.breed = breed;
    // this.fn = function () { }
}

Dog.prototype.barks = function () {
    console.log("woof woof");
};

var d1 = new Dog("Bully", "bulldog");
var d2 = new Dog("Bully1", "bulldog");

d1.barks();
d2.barks();


//TODO ---> d2.__proto__.barks ===  Dog.prototype.barks  //true



//? when we do {K: 10}.toString() // [object object]
var as = {};
var bs = { key: 'b' };
var cs = { key: 'c' };

as[bs] = 123;  // bs value is object so, key in as will be object: 123
as[cs] = 456; // cs value is object so, key in as will be object: 456

/**
 * internally js convert the key to .toString() 
 ** as[{ key: 'b' }.toString()] = 123
 ** as[{ key: 'c' }.toString()] = 456
 * 
 ** and when we do object.toString() it return [object object] like: { key: 'b' }.toString() // [object object]
 */

console.log("a[b] >>> ", as[bs]) // 456