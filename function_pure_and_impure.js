//Functions pure

//Side effects
// 1. Modify global variables 
//2. Modify parameters 
// 3. Requests HTTp
//4. Print message in screen or console
// 5. Manipulation of Dom 
// 6. obtain hour current 

//function pure example
function sum (a, b){
    
    return a + b
}
//function impure example
function sum (a, b){
    console.log('A', a)
    return a + b
}
// impure - Modify global variables 
let total = 0 
function sumWithSideEffect (a){
    total += a
    return total
}

//function pure
function square(x){
    return x*x
}
//function pure
function addTen(y){
    return y + 10
}
//function pure
const number = 5
const finalResut = addTen(square(number))
console.log(finalResut)