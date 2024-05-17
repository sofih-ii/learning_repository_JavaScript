//
class People {
    constructor(name, last_name, age) {
        this.name = name;
        this.last_name = last_name;
        this.age = age;
    }
    greet () {
        console.log(`HI, my name is ${this.name} ${this.last_name} and  i have ${this.age} years`)
    }
}

const person1 = new People("Artura", "Figueroa", 12);
person1.greet();