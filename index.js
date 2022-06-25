// If statatment
// Nos permite ejecutar bloques de codigo cuando se cumpla una condicion
if(3 > 5){
    console.log('La condicion es true')
} else {
    console.log('Es la ultima opcion que se ejecuta')
}

// Anidar mas condiciones
// Hacer un bloque de codigo que me diga si puedo entar o no a un bar
const edad = 19
// El else ya no lleva parentesis porque es la ultima opcion
if (edad > 0 && edad < 18){
    console.log('No puedes pasar, vete a ver aventuras en panales')
} else if (edad >= 18 && edad < 100) {
    console.log('Adelante caballero')
} else {
    console.log('Por favor inserta una edad valida')
}

// Switch
// Programa que me diga de que casa es tu personaje favorito
const personaje = prompt('Escribe el nombre de tu personaje favorito')
let casa = ''

switch (personaje.toLowerCase()) {
    case 'khal drogo':
        casa = 'Dothraki Horselord'
        break
    case 'daenerys':
        casa = 'Targaryen'
        break
    case 'jon snow':
    case 'sansa':
    case 'arya':
        casa = 'Stark'
        break
    default:
        casa = 'desconocida'
}

console.log(`Te personaje favorito es de la casa ${casa}`)

// Loops
// Son para hacer tareas repetitivas

// While - mientras
// Imprime numeros del 0 al 10
// 1. Declarar mi iterador
// es el encargado de decirme en que vuelta del loop vamos
// que me puede ayudar a detener el ciclo
// Podemos utilizarlo dentro del ciclo para hacer cosas
let i = 0

// 2. Declarar el while
// condicion debe terminar en algun momento, debe ser falsa la condicion en algun momento
while(i <= 100){
    console.log(i)
    // 3- ir cambiando el valor de i para que se detenga el ciclo en algun punto
    i++
}

// Imprime numeros del 10 al 0 pero si el numero es par imprime la palabra actosoft
let it = 10

while(it >= 0){
    if(it % 2 === 0){
        console.log('actosoft')
    } else {
        console.log(it)
    }
    it--
}

// for 
// Imprimir numeros del 0 al 10
//  Declarar i ; condicion ; aumentar o decrementar el i
for(let i = 0; i <= 10; i++){
    console.log(i)
}

// Imprimir Lautaro 
/**
 * L
 * a
 * u
 * t
 * a
 * r
 * o
 */
// Los string siempre van entre comillas '' o "" o ``
const profeChido = 'Lautaro'
// accediendo a los caracteres
// String.charAt(poscicionCaracter)
// Las posiciones se cuentan desde le 0
console.log(profeChido.charAt(0))
console.log(profeChido.charAt(1))
console.log(profeChido.charAt(2))
console.log(profeChido.charAt(3))
console.log(profeChido.charAt(4))
console.log(profeChido.charAt(5))
console.log(profeChido.charAt(6))

// un numero indexado con corchetes
console.log(profeChido[0]) // L
console.log(profeChido[1]) // a
console.log(profeChido[2]) // u
console.log(profeChido[3]) // t
console.log(profeChido[4]) // a
console.log(profeChido[5]) // r
console.log(profeChido[6]) // o

// Para saber el largo de un string
// Propiedad llamada String.length
// Cantidad de caracteres que tiene un string
const ausente = 'Melo'
// El largo de un string siempre cuenta a partir de 1
// Posiciones del string son el largo - 1
// Posiciones = largo - 1
console.log(ausente.length)

const alumno = 'Francisco'
for(let i = 0; i < alumno.length; i++) {
    console.log(alumno[i])
}

// Imprimir el string en reversa
const alumno2 = 'Yoany'
for(let i = alumno2.length - 1; i >= 0; i--){
    console.log(alumno2[i])
}