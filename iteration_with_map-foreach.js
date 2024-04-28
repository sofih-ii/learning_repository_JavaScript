//Methods that iterate over an array
//Methods that DO NOT modify the original array 
// Immutability

//Map()
const numbers = [1, 2, 3, 4, 5]
const squareNumbers = numbers.map(num => num * num)
console.log(numbers)
console.log(squareNumbers)


//ForEach()

const colors = ['Yellow', 'Black', 'White', 'Pink', 'Green']
const iteratedColors = colors.forEach(color => console.log(color))
console.log(colors)
console.log(iteratedColors)

/*
Fahrenheit to Celsius Conversion

Create a program that takes an array of temperatures in Fahrenheit as input and converts them to Celsius using the formula:

C = 5/9 * (F - 32)
*/

//Result

const temperaturefahrenheit = [32, 45, 67, 34, 98, 334]
const conversionCelsius = temperaturefahrenheit.map(temp => (5/9) * (temp -32))
console.log(temperaturefahrenheit)
console.log(conversionCelsius)


/*
Sum of Elements in an Array

Create a program that takes an array of numbers as 
input and calculates the sum of all elements in that array.
*/

const newNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = 0
newNumbers.forEach(number => {
    sum = sum + number
})

console.log('The array of numbers is: ', newNumbers)
console.log('Sum of the numbers is: ', sum)
