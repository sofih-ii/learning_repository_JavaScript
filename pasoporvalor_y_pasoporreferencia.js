//paso por referencia
let x = 1;
let y = 'hola';
let z = null;

let a = x;
let b = y;
let c = z;

console.log(x, y, z, a, b, c)

a = 13;
b = 'hola';
c = undefined;

//paso por referencia
let frutas = ['manzana'];
frutas.push('pera');
console.log(frutas)

let panes = ['🐱'];
let copiaDePanes = panes;
panes.push('🦊');
console.log(panes, copiaDePanes);

//Tipo de dato completo, paso por referencia

let fruta = {
    naranja: '🍊'
};

let vegetales = fruta;

vegetales.naranja = '🥦';
console.log(fruta);

let ropa ={
    blusa: '👚'
};

ropa.pantalon = '👖';
console.log(ropa);