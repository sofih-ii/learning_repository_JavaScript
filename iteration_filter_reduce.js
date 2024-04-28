//Methods that iterate over an array
//Methods that DO NOT modify the original array 
// Immutability

//filter()
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const peersNumbers = numbers.filter(number => number %2 === 0)
console.log(numbers)
console.log(peersNumbers)

//reduce()
let accumulator = 0
let currentValue = 0
const numbersReduce = [6, 7, 8, 9, 10]
const aValue = numbersReduce.reduce((accumulator , currentValue) => accumulator+currentValue, 0)

console.log(numbersReduce)
console.log(aValue)


//reduce() - example

const words = ['value', 'Hi', 'kiki', 'good', 'Hi', 'value']
const wordsFrequency = words.reduce((accumulator, currentValue)=>{
    if(accumulator[currentValue]){
        accumulator[currentValue]++
    }else{
        accumulator[currentValue]= 1
    }
    return accumulator
}, {})

console.log(wordsFrequency)