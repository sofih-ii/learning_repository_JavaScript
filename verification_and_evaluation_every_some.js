//Methods that DO NOT modify the original array 
// Immutability

//every()
const ages = [21, 43, 5, 64, 65, 12]
const allAreAdults= ages.every(age => age >18)
console.log(ages)
console.log(allAreAdults)

//some()
const atLeastOneIsOver18 = ages.some(age => age > 18)
console.log(ages)
console.log(atLeastOneIsOver18)