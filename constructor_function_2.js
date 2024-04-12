const personalized = () => 'hi'

function Rocket(name, message) {
    this.name = name
    this.launchMessage =  message
}

const falcon9Rocket = new Rocket('Falcon 9', personalized)
const falconHeavyRocket = new Rocket('Falcon Heavy', personalized)
console.log(falcon9Rocket.name)
console.log(falcon9Rocket.launchMessage())

const RocketWhitArrowFunction = (name, message) => ({
    name: name,
    launchMessage : message

})
const personalizedForArrowFunction = () => 'hello'
const falcon9Rocket1 = RocketWhitArrowFunction('Falcon 99', personalizedForArrowFunction)
console.group(falcon9Rocket1.name)
console.group(falcon9Rocket1.launchMessage())

