// //Call method
// function greet(message){
//     console.log("Hi " + this.name + ' ' + message)
// }

// const person = {
//     name: "Jhon"
// }

// greet.call(person, 'Good morning');


// //apply method
// function greet(message, message2){
//     console.log("Hi " + this.name + ' ' + message + ' ' + message2)
// }

// const person = {
//     name: "Raj"
// }

// greet.apply(person, ['Good Morning', 'See You'])

// Bind method
function greet(message){
    console.log("Hi " + this.name + ' ' + message)
}

const person = {
    name: "Mike"
}

const greetPerson = greet.bind(person, 'Good Morning')
greetPerson()


//clouser
function outer(){
    let name = "Roushan"
    function inner(){
        console.log("name >>> ", name)
    }
    return inner()
}

outer()