//1. tipo entero, y decimal
const entero = 34;
const decimal = 23.5;
console.log(typeof entero, typeof decimal);

//2. Notacion cientifica
const cientifico = 5e3

//3. infinitos y NaN
const infinito = Infinity
const noEsUnNumero = NaN

//Operaciones aritmeticas
//1. suma,resta,multiplicacion y division

const suma = 4 + 4;
const resta = 7 - 6;
const multiplicacion = 3 * 5;
const division = 4 / 2;

//2. Modulo y exponenciacion
const modulo = 15 % 8;
const exponenciacion = 4 ** 2

//presion
const resultado = 0.3 + 0.6;
console.log(resultado);
console.log(resultado.toFixed(1));
console.log(resultado === 0.3);

//Operacion avanzadas
const raizCuadrada = Math.sqrt(16);
const valorAbsoluto =Math.abs(-34);
const aleatorio = Math.random();

console.log(raizCuadrada);
console.log(valorAbsoluto);
console.log(aleatorio);