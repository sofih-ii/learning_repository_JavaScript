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