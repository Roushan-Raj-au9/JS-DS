class Car {
    constructor(brand){
        this.carname = brand; 
    }

    display(){
        return `I have a ${this.carname} `
    }
}

class Model extends Car{
    constructor(brand, model){
        super(brand);
        this.model = model;
    }

    show(){
        console.log(this.display() + ', it is a ' + this.model)
    }

}

let myCar = new Model("Ford", "Mustang");
myCar.show();