class Animal{
    constructor(name, leg, voice){
        this.name = name;
        this.leg = leg;
        this.voice = voice;
    }

    speak(){
        console.log(this.name + ' ' + 'has ' + this.leg + ' legs ' + 'and bark like ' + this.voice)
    }

}

const dog = new Animal('Dog', 4, 'bhow bhow');
dog.speak();

const cat = new Animal('Cat', 4, 'meow meow');
cat.speak();