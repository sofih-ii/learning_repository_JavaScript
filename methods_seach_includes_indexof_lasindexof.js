//includes()
const numbers = [1, 2, 3, 4, 5]
const result1 = numbers.includes(3)
console.log(result1)

//indexOf()
const fruits = ['Apple', 'Orange', 'Pear', 'Grape' ]
const index1 = fruits.indexOf('Grape')
console.log(index1)
const index2 = fruits.indexOf('Blueberry')
console.log(index2)

//lastIndexOf()
const numbersAgain = [2, 4, 5, 2, 4, 7, 8, 3]
const lastindex1 = numbersAgain.lastIndexOf(4) // -1 "if it does not exist"
console.log(lastindex1)

