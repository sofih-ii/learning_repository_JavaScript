//function traditional 
function almuerzo(proteina, verdura){
    return `${proteina} ${verdura}`
}

almuerzo(`carne`, `brocoli`)

//Arrow function
const almuerzo1 = (proteina, verdura)=> {
    return `${proteina}, ${verdura}`
}
almuerzo1(`carne`, `brocoli`)

const greeting = function (name){
    return `Hi, ${name}`
}
const newGreeting = (name) =>{
    return `Hi, ${name}`
}

//Arrow function - implicit return 
const newGreetingImplicit = (name) => `Hi, ${name}`
const newGreetingImplicitWithTwoParameters = (name, lastname) => `Hi, i am ${name} ${lastname}`

//Lexical binging 

const finctionalCharacter = {
    name: 'Uncle ben',
    messageWithTraditionalFunction: function (message){
        console.log(`${this.name} says: ${message}`)
    },
    messageWithArrowFunction: (message) =>{
        console.log(`${this.name} says: ${message}`)
    }
}

finctionalCharacter.messageWithTraditionalFunction('With great power comes great responsibility ')
finctionalCharacter.messageWithArrowFunction('beware of Doctor Octopus')