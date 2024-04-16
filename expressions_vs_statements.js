//Expressions
'HOLA' // Produce hola
4 + 5 // Produce 9
6 // Produce 6

3*(2+1) //Produce 9

//EXPRESSIONS
//expression arithmetic
var suma = 10 + 5;
//expressions of assignation 
var nombre = 'juan'
//Expression de function anonyma
var saludar = function(){
    console.log('hello')
}
//expressions objet 
var presona = {name: 'juan', age: 34};
//conditional expressions (operation ternary)
var age = 20;
var message = (age>= 18) ? "eres mayor de edad": "eres menor de edad";

//STATEMENTS 
//variables of statements 
var x;
//function of statements
function sum(a, b){
    return a +b;
}
//class of statements
class person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
//bugle of statements(for)
for (var i = 0; i<5; i++){
    console.log(i)
}
//conditional of statements 
var age= 20;
if(age >= 18){
    console.log('eres mayor de edad')
}else{
    console.log('eres menor de edad')
}
