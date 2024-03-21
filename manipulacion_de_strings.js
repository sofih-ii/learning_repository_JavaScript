//string primitivo
const stringPrimitivo = 'Soy un string primitivo';
console.log(typeof stringPrimitivo);
const stringPrimitivotambien = String('Soy un string primitivo tambien');
console.log(typeof stringPrimitivotambien);

//strings tipo objeto
const stringObjeto = new String('Soy un string objeto');
console.log(typeof stringObjeto);

//manipulacion de acceso de caracterres 
const saludo = 'Hola, ¿Como estas?';
console.log(saludo[2]);
console.log(saludo.charAt(2));
console.log(saludo.indexOf('o'));
console.log(saludo.indexOf('Como'));
console.log(saludo.indexOf('como'));
console.log(saludo.lastIndexOf('o'));
console.log(saludo.slice(3, 5));
console.log(saludo.length);
console.log(saludo.toLocaleUpperCase());
console.log(saludo.toLocaleLowerCase());

const saludoDividido = saludo.split(' ');
console.log(saludoDividido);
console.log(saludoDividido[1]);

const saludoDividido1 = saludo.split('');
console.log(saludoDividido1);

const saludoconespacios = ' Hola Mundo ';
const saludosinespacios = saludoconespacios.trim();
console.log(saludosinespacios);

const saludoOriginal = 'Hola mundo'
const nuevoSaludo = saludoOriginal.replace('mundo', '🌍');
console.log(nuevoSaludo);


