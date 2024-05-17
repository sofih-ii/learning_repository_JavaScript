/*let person = {
    name: "sofia",
    last_name: "Trujillo",
    age : 18,
}
*/
function Person (name, last_name, age){
    this.name = name;
    this.last_name = last_name;
    this.age = age;
}

const person1 = new Person("Julian", "Toro", 30)
console.log(person1);

person1.nationality = "Colombia";

const person2 = new Person("Arturo", "Perez", 50)
console.log(person2);

Person.prototype.greet = function (){
    console.log(`HI, my name ${this.name} ${this.last_name}`)
};
person1.greet();
person2.greet();