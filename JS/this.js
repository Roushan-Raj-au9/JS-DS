/*
    "this" keyword --> except one case, "this" always refers to the calling side/context.
*/

let iphone = {
    name: "iphone 15 pro",
    price: "100000",

    display(){
        console.log("inside Iphone this value ... ", this)
    }
};

let mackbook = {
    name: "Mackbook M2",
    price: "1250000",

    display(){
        console.log("inside mackbook this value >>> ", this)
    }
};

iphone.display();  
/* { name: 'iphone 15 pro', price: '100000', display: [Function: display] } */

mackbook.display();
/* { name: 'Mackbook M2', price: '1250000', display: [Function: display] } */