// Call
const owner = 'lucy'
const address = 'Avenue 654643'
function dogGreeting(owner, address){
    console.log(`hi, i am ${this.dogname}, i live whit ${owner} on ${address}`)
}
const newName ={
    dogname: 'Princess'
}

dogGreeting.call(newName, owner, address)

//Apply
const necessaryValue = [owner, address]
dogGreeting.apply(newName, necessaryValue)

//Bind
const bindingWithBing = dogGreeting.bind(newName, owner, address)
bindingWithBing(dogGreeting)
console.log(bindingWithBing)
