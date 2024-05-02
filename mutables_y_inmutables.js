// tipos de datos primitivos - inmutables
let numero = 23;
numero = numero + 10;
console.log(numero)

let esVerdadero = true;
esVerdadero = false;
console.log(esVerdadero)

// tipos de datos complejos - mutables
let usuario = { nombre : 'sofia', edad: 18 };
usuario.edad = 19;
console.log(usuario)

let frutas = ['manzana', 'pera'];
frutas[0] = 'sandia';
console.log(frutas)

function cambiarNombre (objeto) {
    objeto.nombre = 'sofia'
}
let persona = { nombre: 'antonio'};
cambiarNombre(persona)
console.log(persona)