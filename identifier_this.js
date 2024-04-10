//implicit binding
const house = {
    gotName : 'luna',
    gotGreeting : function (){
        console.log(`Hi, i am ${this.gotName}`)
    }
}
house.gotGreeting()

//Explicit binding
function gotGreeting(){
    console.log(`Hi, i am ${this.gotName}`)
}
 const newHouse = {
    gotName : 'kiki'
}

gotGreeting.call(newHouse)

//example
function newGotGreeting(owner, address){
    console.log(`Hi, i am ${this.gotName} and  i live whit ${owner} on ${address}`)
}
const owner = 'lucy'
const address = 'Avenue 67 whit 75'

newGotGreeting.call(newHouse, owner, address)
