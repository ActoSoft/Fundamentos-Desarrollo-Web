// == Variables ===================================================================
console.log('== VARIABLES =======================================================')
// -- Declaración de variables -------------------------------------------
// Existen 3 declaradores diferentes de variables

// ** 1. var **********************************************************************
/* "var" es el declarador que existe desde los inicios de JS, este declarador tiene un "function scope"
 * (ahorita te explico que es el scope) y hoy en día su uso ya no es tan recomendado.
 * Permite asigna un valor inicial a la variable.
 * Permite también reasignar ese valor cuantas veces sea necesario.
 * El valor de una variable puede ser leído fuera del scope donde se declaró. */
console.log('..Variables declaradas con var...................')
var miPrimerVariable = 1 /*declaramos la variable*/
console.log({ miPrimerVariable })
miPrimerVariable = 10 /*cambiamos su valor*/
console.log({ miPrimerVariable })
miPrimerVariable = 'hola!' /*cambiamos su valor a otro tipo de dato*/
console.log({ miPrimerVariable })
miPrimerVariable = 1 /*regresamos al valor original*/

// ¿Qué pasa si asigno una variable sin un valor por defecto?
var variableSinValor /*declaramos variable sin valor inicial*/
console.log({ variableSinValor })
variableSinValor = 'un valor' /*le colocamos un valor*/
console.log({ variableSinValor })

// ** 2. let **********************************************************************
/* "let" es una de las recientes formas de declarar variables en JS introducida en 2015.
 * Es bastante similar a "var", sólo que let existe dentro de un "block scope"
 * (no te preocupes, ya casi te explico qué es).
 * El uso de let está enfocado en variables que durante el tiempo de ejecución del script,
 * tiende a cambiar constantemente de valor.
 * Permite asigna un valor inicial a la variable.
 * Permite también reasignar ese valor cuantas veces sea necesario.
 * El valor de una variable NO puede ser leído fuera del scope donde se declaró.*/
console.log()
console.log('..Variables declaradas con let...................')
let variableConLet = 143.23 /*declaramos la variable con let*/
console.log({ variableConLet })
variableConLet = -3.1416 /*cambiamos su valor*/
console.log({ variableConLet })
variableConLet = false /*cambiamos su valor a otro tipo de dato*/
console.log({ variableConLet })
variableConLet = 143.23 /*regresamos al valor original*/

// ¿Qué pasa si asigno una variable sin un valor por defecto?
let letSinValor /*declaramos variable sin valor inicial*/
console.log({ letSinValor })
letSinValor = 'let declarator' /*le colocamos un valor*/
console.log({ letSinValor })

// A simple viste parece que "var" y "let" funcionan exactamente igual, pero esto va a cambiar más adelante

// ** 3. const ********************************************************************
/* "const" es una de las recientes formas de declarar variables en JS introducida en 2015.
 * Al igual que "let", las variables declaradas con "const" existen dentro de un "block scope"
 * (no te preocupes, ya casi te explico qué es).
 * La gran diferencia entre "const" con respecto a "var" y "let" es que una vez declarada la variable,
 * esta NO permite modificar o reasignar su valor iniciar (siendo más conocida como una constante).
 * Necesita asigna un valor inicial a la variable.
 * NO Permite reasignar ese valor inicial.
 * El valor de una variable NO puede ser leído fuera del scope donde se declaró.*/
console.log()
console.log('..Variables declaradas con const.................')
const variableConConst = 123456 /*declaramos la variable con let*/
console.log({ variableConConst })

// NOTA: Código comentado para evitar errores
// variableConConst = -3.1416 /*intentamos cambiamos su valor*/
// console.log({ variableConConst })

// ¿Qué pasa si asigno una variable sin un valor por defecto?
// const constSinValor /*declaramos variable sin valor inicial*/
// console.log({ constSinValor })
// constSinValor = 'let declarator' /*intentamos asignar un valor*/
// console.log({ constSinValor })

// -- Preguntas Frecuentes --------------------------------------------------------

/* 1. ¿Cual es la convención para escribir variables en Javascript?
   R: Deben de estar escritas en "camelCase" style
    (La primer palabra va en minúscula y todas las demás van a escribirse con su primer letra en mayúscula;
    las palabras van unidas, no hay ningún caracter que las separe).
   Ejemplo: holaComoEstasSoyCamelCase

   2. En otros lenguajes de programación, si reasigno el valor de una variable,
    debo de colocar otro valor del mismo tipo de dato.
    No es posible cambiar el tipo de datos de una variable previamente declarada
    ¿Aplica también para Javascript?
   R: NO, aquí Javascript sí te permite cambiar el tipo de dato de una variable al
   reasignarla, es decir, que puedes pasar de un "string" a un "number" sin ningún problema. */

// == Tipos de datos ==============================================================
console.log()
console.log()
console.log('== TIPOS DE DATOS =========================================')

// -- Identificar el tipo de dato de una variable ---------------------------------
// Podemos utilizar la palabra reservada "typeof" para poder identificar cual es el tipo de dato de una variable, de la siguiente manera:
console.log('typeof number(10):', typeof 10)
console.log('typeof string("texto")', typeof 'texto')
console.log('typeof boolean(true)', typeof true)


// -- Definicion de los tipos de datos --------------------------------------------

// ** 1. Number *******************************************************************
// Este tipo de dato incluye a todos los números, incluyendo los números positivos,
// negativos, enteros, decimales, fraccionarios y el 0.
// Cualquier valor que pueda ser utilizado en una operación aritmética es considerado como un tipo de dato "number"
console.log()
console.log('.. Datos tipo "Number" ...................................')
const numeroEntero = 10
const numeroNegativo = -5.37
const numeroDecimal = 15.28
console.log({ numeroEntero, numeroNegativo, numeroDecimal })
// Podemos validar el tipo de datos con "typeof"
console.log('numeroEntero type:', typeof numeroEntero)
console.log('numeroNegativo type:', typeof numeroNegativo)
console.log('numeroDecimal type:', typeof numeroDecimal)

// ** 2. String *******************************************************************
// Este tipo de dato incluye tanto a los caracteres por sí solos (1 sólo caracter)
// así como a las cadenas de caracteres sin longitud definida.
// Cualquier código ASCII puede ser considerado un string, siempre y cuando
// este se encuentre entre comillas simples ('') o comillas dobles ("").
// Para Javascript es irrelevante el uso de estas, pueden usarse ambas.
console.log()
console.log('.. Datos tipo "String" ...................................')
const caracter = 'a'
const caracterString = "pepito pica papas"
console.log({ caracter, caracterString })
// Podemos validar el tipo de datos con "typeof"
console.log('caracter type:', typeof caracter)
console.log('caracterString type:', typeof caracterString)

// ** 3. Boolean ******************************************************************
// Este tipo de dato sólo tiene dos estados: verdadero o false, encendido o apagado, 1 o 0.
// Se utiliza para poder representar la presencia o ausencia de algo, así como condiciones.
console.log()
console.log('.. Datos tipo "Boolean" ..................................')
const verdadero = true
const falso = false
console.log({ verdadero, falso })
// Podemos validar el tipo de datos con "typeof"
console.log('verdadero type', typeof verdadero)
console.log('falso type', typeof falso)

// ** 4. NaN **********************************************************************
// Su significado es "Not a Number". Este peculiar valor aparece cuando se intenta
// realizar una operacion aritmética la cuál no tiene sentido y Javascript no puede procesarla.
// En esos casos Javascript asigna el valor de NaN para evitar romperse.
console.log()
console.log('.. Datos tipo "NaN" ......................................')
const notANumber = 'cosas' / 'a'
console.log({ notANumber })
// Podemos validar el tipo de datos con "typeof". Sin embargo, en este caso de NaN
// y demostrando algunas de las curiosidades de Javascript, cuando se hace un typeof de NaN,
// Javascript dice que el tipo de dato del valor Not a Number, es number :).
console.log('notANumber type', typeof notANumber)

// ** 5. null *********************************************************************
// Este tipo de dato indica que nosotros estamos asignando por nuestra cuenta un valor vacío a una variable.
// El uso de null en ocasiones puede ser para asignar un valor temporal a una variable ya que el valor final no se encuentra disponible.
console.log()
console.log('.. Datos tipo "null" ......................................')
const variableNull = null
console.log({ variableNull })
// Podemos validar el tipo de datos con "typeof". Sin embargo, al hacer "typeof" de una variable con valor null, el valor que obtenemos es "object"
console.log('variableNull type', typeof variableNull)

// ** 6. undefined ******************************************************
// Este tipo de dato es asignado de manera automática con Javascript
// cuando detecta que se tiene una variable a la cual no se asignó un valor de forma inicial.
// Indica que Javascript reservó un espacio de memoria para dicha variable,
// pero como no recibió un valor, le asigna automáticamente "undefined" para poder procesarlo.
// NOTA: Para declarar una variable sin asignarle un valor, es necesario hacerlo con *let*, ya que const no permite la declaración sin asignación.
console.log()
console.log('.. Datos tipo "undefined" .................................')
let variableUndefined /* = undefined*/
console.log({ variableUndefined })
// Podemos validar el tipo de datos con "typeof".
console.log('variableUndefined type', typeof variableUndefined)