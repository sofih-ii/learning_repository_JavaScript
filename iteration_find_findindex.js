//Methods that iterate over an array
//Methods that DO NOT modify the original array 
// Immutability

//find()
const multipleOf5 = [5, 10, 15, 20]

const firstNumberGreaterThan10 = multipleOf5.find(number => number >10)
console.log(multipleOf5)
console.log(firstNumberGreaterThan10)

//findIndex()
const randomNumbers = [2, 4, 8, 10, 12, 14]
const indexNumber = randomNumbers.findIndex(number => number > 10)
console.log(randomNumbers)
console.log(indexNumber)

