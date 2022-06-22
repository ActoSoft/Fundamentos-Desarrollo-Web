// == Operadores Aritméticos ======================================================
console.log('== OPERADORES ARITMÉTICOS ==========================================')
// -- Definición de operadores ---------------------------------------------------

// ** 1. Operador suma (+) ********************************************************
const suma = 5 + 7 /* = 12 */
console.log({ suma })

// ** 2. Operador resta (-) *******************************************************
const resta = 9 - 2 /* = 7 */
console.log({ resta })

// ** 3. Operador multiplicación (*) **********************************************
const multi = 3 * 6 /* = 18 */
console.log({ multi })

// ** 4. Operador division (/) ****************************************************
const division = 15 / 3 /* = 5 */
console.log({ division })
// ** 5. Operador potencia (**) ***************************************************
const potencia = 4 ** 3 /* = 64 */
console.log({ potencia })

// ** 6. Operador módulo (%) ******************************************************
const modulo = 12 % 4 /* = 0 */
console.log({ modulo })

// -- Libreria Math ---------------------------------------------------------------
console.log()
console.log('== OPERADORES ARITMÉTICOS ==========================================')
/* Dentro de Javascript existe una librería añadida al lenguaje llamada Math.
 * Esta librería incluye métodos para realizar operaciones matemáticas como raíz cuadrada,
 * razones trigonométricas, etc. Aquí puedes encontrar información al respeto de esta librería:
 * https://www.w3schools.com/js/js_math.asp */
const raizCuadrada = Math.sqrt(81) /* = 9 */
console.log({ raizCuadrada })
const seno = Math.sin(Math.PI/6) /* = 30% */
console.log({ seno })

// -- Shorthands operators --------------------------------------------------------
console.log()
console.log('== SHORTHANDS OPERATORS ==========================================--')
/* Existen algo llamados shorthands que permiten realizar operaciones aritméticas
 * y asignaciones del resultado a una misma variable de manera corta y rápida.
 * A continuación algunas de los más conocidos: */

// ** Shorthands de incremento y decremento (+1, -1) ******************************
console.log()
console.log('.. Incremento y decremento .........................................')
let numIncremento = 5
let numDecremento = 15
numIncremento++ /* equivalente a: numIncremento = numIncremento + 1  */
numDecremento-- /* equivalente a: numDecremento = numDecremento - 1  */
console.log('Incremento ++', numIncremento)
console.log('Decremento --', numDecremento)

// ** Shorthands de asignación ****************************************************
console.log()
console.log('.. Asignación ......................................................')
let acumulador = 5

// Suma y asignación
acumulador += 3 /*equivalente a: acumulador = acumulador + 3 */
console.log('Suma y asignación +=', acumulador)

// Multiplicación y asignación
acumulador *= 5 /*equivalente a: acumulador = acumulador * 5 */
console.log('Multiplicación y asignación *=', acumulador)

// División y asignación
acumulador /= 10 /*equivalente a: acumulador = acumulador / 10 */
console.log('Division y asignación /=', acumulador)

// Resta y asignación
acumulador -= 2 /*equivalente a: acumulador = acumulador - 2 */
console.log('Resta y asignación /=', acumulador)