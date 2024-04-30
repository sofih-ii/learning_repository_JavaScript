// 1. copying an array
const originalArray = [1, 2, 3, 4, 5]
const copyOfArray = [...originalArray]
console.log(originalArray)
console.log(copyOfArray)

//2. combining Arrays
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const combinedArray = [...array1, ...array2]
console.log(array1)
console.log(array2)
console.log(combinedArray)

//3. creating arrays with additional elements
const baseArray = [1, 2, 3]
const  arraysWithAdditionalElements = [...baseArray, 4, 5, 6]
console.log(baseArray)
console.log(arraysWithAdditionalElements)

//4. Pass elements to functions
function sum (a, b, c){
    return a + b + c
}
const numbers = [1, 2, 3]
const result = sum (...numbers)

console.log(result)