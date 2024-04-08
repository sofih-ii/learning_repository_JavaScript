const saludo = 'hola'
console.log(saludo)

const despedida = 'Adios'
console.log(despedida)

//const titulo = 'me gsuta estudiar 
//console.log(titulo)//error

const descripcion = 'por que aprendo mucho'
console.log(descripcion)

const numero = 2
const booleano = true
console.log(numero + booleano)
//3

//Explicit type casting
const string = '43'
const integer = parseInt(string)
console.log(integer)
console.log(typeof integer)

const stringDecimal = '3.14'
const float = parseFloat(stringDecimal)
console.log(float)
console.log(typeof float)

const binary = '101010'
const decimal = parseInt(binary, 3)
console.log(decimal)
console.log(typeof decimal)

//Implicit type casting
const sum = '5' + 3
console.log(sum)//concatenacion

const sumWithBoolean = '3' + true
console.log(sumWithBoolean)

const sumWithNUmber = 2 + true
console.log(sumWithNUmber)

const stringValue = '10'
const numberValue = 10
const booleanValue = true
console.log(stringValue + stringValue)
console.log(stringValue + numberValue)
console.log(stringValue + booleanValue)
console.log(numberValue + stringValue)
console.log(numberValue + numberValue) //suma
console.log(numberValue + booleanValue) //suma
console.log(booleanValue + stringValue)
console.log(booleanValue + numberValue)//suma
console.log(booleanValue + booleanValue)//suma
