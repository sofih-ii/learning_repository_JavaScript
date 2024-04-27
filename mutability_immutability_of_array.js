//Mutability 
const fruit = Array('Apple', 'Orange', 'Pear', 'Grape')
console.log(fruit)

fruit.push('pineapple')
console.log(fruit)

//Immutability
const newFruit = fruit.concat(['watermelon', 'tangerine'])
console.log(fruit)
console.log(newFruit)

//Checking arrays with Array.isArray()
const isArray = Array.isArray(fruit)
console.log(isArray)

//Exercises : sum all elements of  an array

const numbersArray = [1, 2, 3, 4, 5]
let sum = 0
for(let i = 0; i < numbersArray.length; i++){
    sum += numbersArray[i]
}

console.log(`the sum of numbers is : ${sum}`)
