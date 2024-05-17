/*
this --- class
this --- object -- class

*/
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
const person1 = new Person("alice", 43)

console.log(person1)

person1.newMethod = function(){
    console.log(`My name is ${this.name}`)
}

console.log(person1.newMethod())