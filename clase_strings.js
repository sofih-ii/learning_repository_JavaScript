// creacion de strings
const primeraOpcion = 'Comillas simples';
const segundaOpcion = "Comillas dobles";

// 1. concatenacion : Opcion +
const direccion = 'calle f 123';
const cuidad = 'colombia';
const direccioncompleta = 'Mi direccion completa es: '+ direccion + cuidad;
console.log(direccioncompleta);
const direccioncompletaConEspacios = 'Mi direccion completa es: '+ direccion + ' ' + cuidad;
console.log(direccioncompletaConEspacios);

// 2. concatenacion : Template literals

const nombre = 'sofia';
const pais = '🇨🇴';
const presentacion =  `hola, soy ${nombre} de ${pais}`;
console.log(presentacion)

// 3. concatenacion join()

const primeraParte = 'Me encanta';
const segundaParte = 'los animales';
const terceraParte = 'domesticos';
const pensamiento = [primeraParte, segundaParte, terceraParte];
console.log(pensamiento.join(' '));

// 4. concatenacion: concat()
const hobbie1 = 'leer';
const hobbie2 = 'ajedrez';
const hobbie3 = 'ver series';
const hobbies = 'Mis hobbies son: '.concat(hobbie1,',', hobbie2,',', hobbie3);
console.log(hobbies)

//caracteres de escape
//const whatDoIDo = 'I'm Software engineer'
// 1. Escape alternativo
const escapeAlternativo = "I'm Software engineer";
// 2. Barra invertida 
const barraInvertida = 'I\'m Software engineer ';
// 3. templates literals
const escapeComillasInvertidas = `I'm Software engineer`;

// Escritura de strings largos 
/*
 La creatividad 
 es la inteligencia
  divirtiéndose.
 */
const poemas = 'La creatividad\n'+
               'es la inteligencia\n'+
               'divirtiéndose.';
console.log(poemas)

const poemas2 = 'La creatividad\n\
es la inteligencia\n\
divirtiéndose.';
console.log(poemas2)

const poemas3 = `La creatividad,
es la inteligencia,
divirtiéndose.`;
console.log(poemas3)