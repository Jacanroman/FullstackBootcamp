console.log("hola mundo");

let firstname = 'Miguel'
const lastName = 4
var isDeveloper = true


console.log(firstname)
firstname = 'juan'
console.log(firstname)

//tipos primitivos de datos (son inmutables)
/*
2
"string"
true false
undefined
null


//Tipos no primitivos (objetos y son mutables)
Objetos
Arrays
*/

const nombre = 'Javi'

const nombremayuscula = nombre.toUpperCase()

console.log(nombremayuscula)


const lista = []
lista.push(176)

console.log(lista)

console.log(lista[0])

//lo mejor es siempre ir creando copias para no mutar

nuevalista = lista.concat([123,145])

console.log(nuevalista)

//Objetos

const persona = {
    name: 'Javier',
    twitter: '@Javier',
    age: 18,
    isDeveloper: true,
    links:['www.a.com','www.b.com']
}

console.log(persona.name);
console.log(persona.links[0])

const field = 'twitter'
console.log(persona[field])


//Funciones


//Function expresion
const sumar = (a, b) => {
    console.log(a)
    console.log(b)

    return a + b
}

const resultado = sumar(1,3)
console.log(resultado)

//Declarando Funcion

function restar(a,b){
    return a - b
}
