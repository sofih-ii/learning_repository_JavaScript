//Methods that DO NOT modify the original array 
// Immutability

//concat()
const morseCode1 = ['....', '---'] ///H O
const morseCode2 = ['.-..', '.-'] /// L A
const morseCodeMessage = morseCode1.concat(morseCode2)
console.log(morseCode1)
console.log(morseCode2)
console.log(morseCodeMessage)

//concat() -2
const morseCodeMessage2 = [].concat(morseCode1, morseCode2)
console.log(morseCode1)
console.log(morseCode2)
console.log(morseCodeMessage2)

// Combine with spread operator 
function combineMorseMessage (morseCode1, morseCode2){
    return[...morseCode1, ...morseCode2]
}
console.log(combineMorseMessage(morseCode1, morseCode2))

// Combine with spread operator -2

const numbers = [1, 2, 3, 4]
const string = 'STRING'

console.log(combineMorseMessage(numbers, string))

//join()
const morseCodeMessageString = morseCodeMessage.join(' ')
console.log(morseCode1)
console.log(morseCode2)
console.log(morseCodeMessageString)
