// Capacidades que tienen las funciones al giaul que otros objetos
// 1. Pasar funciones como argumentos -> callback

function a(){

}
function b(a){

}
b(a)

//retornar funciones

function a(){
    function b(){}
    return b
}

// Asignar funciones a variables -> expresion de funciones

const a = function(){}

// terner propiedades y metodos

function a (){

}
const obj = {}
a.call(obj)

//Anidar funciones  -> Nester function
function a(){
    function b(){
        function c (){

        }
        c()
    }
    b()
}
a()

// ¿ Se puede almacenar un a funcion en un objeto?
// METODO
const space = {
    name_of_a_constellation : 'Orion',
    launchMessage : function launchMessage () {
        console.log('☀🌚🌙')
    }
}
space.launchMessage()
