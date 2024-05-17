class Animal {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
    sound(){
        console.log("the animal generates a sound");
    }
}

class Dog extends Animal{
    constructor(name, type, race){
        super(name, type);
        this.race = race;
    }
    sound(){
        console.log("the dog barks");
    }
    run(){
        console.log(`${this.name} run a lot`);
    }
}

const dog1 = new Dog("Boby", "Dog", "Golden retriever")
console.log(dog1);
dog1.run();
dog1.sound();
