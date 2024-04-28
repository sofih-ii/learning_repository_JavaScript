// Methods that modify the original array 
//   Mutability

//splice()
const vegetables = ['Carrot', 'Broccoli', 'Tomato']
const removeVegetables = vegetables.splice(1,1, 'Beans', 'Onion')
console.log(vegetables)
console.log(removeVegetables)

//reverse()
const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
const reverseNumbers = numbers.reverse()
console.log(numbers)
console.log(reverseNumbers)

//sort() with numbers

const unsortedNumber = [1, 5, 3, 64, 424, 9]
const unicodeSortNumbers = unsortedNumber.sort()

console.log(unsortedNumber)
console.log(unicodeSortNumbers)

const unsortedNumber2 = [1, 5, 3, 64, 424, 9]
const sortedNumbers = unsortedNumber2.sort((a, b)=> a - b)

// 1 - 5 = -4 is negative, goes in order
//5 - 3 = 2 is not negative, i don't goes in order and comes back
console.log(unsortedNumber2)
console.log(sortedNumbers)


// sort() with strings 'UTF -16'

const cities = ['New York City',
    'London',
    'Paris',
    'Tokyo',
    'Sydney'
]
//the order in alphabet
const sortedCities = cities.sort()
console.log(cities)
console.log(sortedCities)


//fill()

const ages = [23, 54, 64, 12, 45]
console.log(ages.fill(0, 2, 4))
console.log(ages.fill(15, 1))
console.log(ages.fill(15))