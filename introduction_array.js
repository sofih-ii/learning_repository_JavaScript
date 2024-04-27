/* syntax => new Array() or Array()*/

const fruit = Array('Apple', 'Orange', 'Pear', 'Grape')
console.log(fruit)

// it doesn't print just one number
//Example 
const oneNumber = Array(12)
console.log(oneNumber)

const numbers = Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(numbers)

// Array literal syntax 

const number = [4]
console.log(number)

const emptyArray = []
console.log(emptyArray)

const basket = ['tomato', 'potato', 'bread', 'rice', 'coffee', 'tea']
console.log(basket)

const ingredients = [
    true,
    1,
    'hi',
    {
        sugar : 2, cinnamon: 1,
    }
]
console.log(ingredients)

//Indexes
const firstFruit = fruit[0]
console.log(firstFruit)

const numbersOfFruit = fruit.length
console.log(numbersOfFruit)