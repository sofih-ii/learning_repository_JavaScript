/*
Data structure :

key / value
object {
    property: value,
    property: value,
    property: value,
    Methods
}
*/

const person = {
    name: "Sofia",
    age: 18,
    address : {
        street: "Avenue B5 whit #34",
        city: "Pasto"
    },
    salute(){
        console.log(`Hi, my name is ${this.name}`)
    }
}

console.log(person)

// Works with object

console.log(person.salute);
person.salute();

person.phone = "467563824";

console.log(person.phone);

person.farewell = () => {
    console.log("Good bay");
}
person.farewell();

console.log(person.address.street);

delete person.phone;
person.phone;

delete person.farewell();
console.log(person.farewell);
