# Fundamentos de Desarrollo Web - Módulo Javascript

### En este repositorio encontrarás los archivos utilizados durante la primer semana del módulo de Javascript, en los cuales tendrás tu primer acercamiento al lenguaje de programación `Javascript`.

## Archivos - Contenido
1. `variables-and-data-types.js` - Declaración de variables, scope, tipos de datos, conversión de tipos de datos.
2. `arithmetic-operators.js` - Operadores y operaciones aritméticas, librería Math.
3. `strings-manipulation.js` - Caracteres y strings, concatenación, manipulación de cadenas de caracteres.
4. `functions.js` - Funciones en Javascript, funciones tradicionales vs funciones "flecha"
5. `conditionals.js` - Coming soon
6. `arrays.js` - Coming soon
7. `objects.js` - Coming soon
8. `iterators.js` - Coming soon

# Apuntes

----
## Variables
Existen 3 declaradores diferentes de variables

## 1. var
`var` es el declarador que existe desde los inicios de JS, este declarador tiene un "function scope" (ahorita te explico que es el scope) y hoy en día su uso ya no es tan recomendado.Permite asigna un valor inicial a la variable. Permite también reasignar ese valor cuantas veces sea necesario. El valor de una variable puede ser leído fuera del scope donde se declaró.

```js
var miPrimerVariable = 1 /*declaramos la variable*/
console.log({ miPrimerVariable }) // Output -> 1

miPrimerVariable = 10 /*cambiamos su valor*/
console.log({ miPrimerVariable }) // Output -> 10

miPrimerVariable = 'hola!' /*cambiamos su valor a otro tipo de dato*/
console.log({ miPrimerVariable }) // Output -> hola

miPrimerVariable = 1 /*regresamos al valor original*/


// ¿Qué pasa si asigno una variable sin un valor por defecto?
var variableSinValor /*declaramos variable sin valor inicial*/
console.log({ variableSinValor }) // Output -> undefined

variableSinValor = 'un valor' /*le colocamos un valor*/
console.log({ variableSinValor }) // Output un valor
```

## 2. let
`let` es una de las recientes formas de declarar variables en JS introducida en 2015. Es bastante similar a `var`, sólo que let existe dentro de un "block scope" (no te preocupes, ya casi te explico qué es). El uso de let está enfocado en variables que durante el tiempo de ejecución del script, tiende a cambiar constantemente de valor. Permite asigna un valor inicial a la variable. Permite también reasignar ese valor cuantas veces sea necesario. El valor de una variable NO puede ser leído fuera del scope donde se declaró.

```js
let variableConLet = 143.23 /*declaramos la variable con let*/
console.log({ variableConLet }) // Output -> 143.23

variableConLet = -3.1416 /*cambiamos su valor*/
console.log({ variableConLet }) // Output -> -3.1416

variableConLet = false /*cambiamos su valor a otro tipo de dato*/
console.log({ variableConLet }) // Output -> false

variableConLet = 143.23 /*regresamos al valor original*/


// ¿Qué pasa si asigno una variable sin un valor por defecto?
let letSinValor /*declaramos variable sin valor inicial*/
console.log({ letSinValor }) // Output -> undefined

letSinValor = 'let declarator' /*le colocamos un valor*/
console.log({ letSinValor }) // Output -> let declarator
```

> A simple viste parece que "var" y "let" funcionan exactamente igual, pero esto va a cambiar más adelante

## 3. const
`const` es una de las recientes formas de declarar variables en JS introducida en 2015. Al igual que `let`, las variables declaradas con "const" existen dentro de un "block scope" (no te preocupes, ya casi te explico qué es). La gran diferencia entre `const` con respecto a `var` y `let` es que una vez declarada la variable, esta **NO permite modificar o reasignar su valor inicial** (siendo más conocida como una constante). Necesita asigna un valor inicial a la variable. NO Permite reasignar ese valor inicial. El valor de una variable NO puede ser leído fuera del scope donde se declaró.

```js
const variableConConst = 123456 /*declaramos la variable con let*/
console.log({ variableConConst }) // output -> 123456

variableConConst = -3.1416 /*Esto arroja un error de TypeError: cannot constant asigment*/
console.log({ variableConConst })

// ¿Qué pasa si asigno una variable sin un valor por defecto?
const constSinValor /*Esto tira un error ya que no se puede declarar una variable con const sin asignar un valor*/
```

## Preguntas Frecuentes

1. ¿Cual es la convención para escribir variables en Javascript?

   **R**: Deben de estar escritas en `camelCase` style (La primer palabra va en minúscula y todas las demás van a escribirse con su primer letra en mayúscula; las palabras van unidas, no hay ningún caracter que las separe.

   Ejemplo: holaComoEstasSoyCamelCase

2. En otros lenguajes de programación, si reasigno el valor de una variable, debo de colocar otro valor del mismo tipo de dato. No es posible cambiar el tipo de datos de una variable previamente declarada ¿Aplica también para Javascript?

   **R**: NO, aquí en Javascript sí te permite cambiar el tipo de dato de una variable al reasignarla, es decir, que puedes pasar de un "string" a un "number" sin ningún problema.

---

## Tipos de datos

Existen 6 diferentes tipos de de datos primitivos en Javascript. Para identificar el tipo de dato de una variable, podemos utilizar la palabra reservada `typeof`:

```js
console.log('typeof number(10):', typeof 10) // output -> typeof number(10): number
console.log('typeof string("texto")', typeof 'texto') // output -> typeof string("texto"): string
console.log('typeof boolean(true)', typeof true) // output -> typeof boolean(true): boolean
```

## 1. Number
Este tipo de dato incluye a todos los números, incluyendo los números positivos, negativos, enteros, decimales, fraccionarios y el 0.
Cualquier valor que pueda ser utilizado en una operación aritmética es considerado como un tipo de dato `number`

```js
const numeroEntero = 10
const numeroNegativo = -5.37
const numeroDecimal = 15.28
console.log({ numeroEntero, numeroNegativo, numeroDecimal }) // output -> { numeroEntero: 10, numeroNegativo: -5.37, numeroDecimal: 15.28 }
```

Podemos validar el tipo de datos con `typeof`:

```js
console.log('numeroEntero type:', typeof numeroEntero) // output -> numeroEntero type: number
console.log('numeroNegativo type:', typeof numeroNegativo) // output -> numeroNegativo type: number
console.log('numeroDecimal type:', typeof numeroDecimal) // output -> numeroDecimal type: number
```

## 2. String
Este tipo de dato incluye tanto a los caracteres por sí solos (1 sólo caracter) así como a las cadenas de caracteres sin longitud definida.
Cualquier código ASCII puede ser considerado un string, siempre y cuando este se encuentre entre comillas simples ('') o comillas dobles ("").
Para Javascript es irrelevante el uso de estas, pueden usarse ambas.

```js
const caracter = 'a'
const caracterString = "pepito pica papas"
console.log({ caracter, caracterString }) // output { caracter: 'a', caracterString: 'pepito pica papas' }
```

Podemos validar el tipo de datos con `typeof`:

```js
console.log('caracter type:', typeof caracter) // output -> caracter type: string
console.log('caracterString type:', typeof caracterString) // output -> caracterString type: string
```

## 3. Boolean
Este tipo de dato sólo tiene dos estados: verdadero o false, encendido o apagado, 1 o 0.
Se utiliza para poder representar la presencia o ausencia de algo, así como condiciones.

```js
const verdadero = true
const falso = false
console.log({ verdadero, falso }) // output -> { verdadero: true, falso: false }
```

Podemos validar el tipo de datos con `typeof`:

```js
console.log('verdadero type:', typeof verdadero) // output -> verdadero type: true
console.log('falso type:', typeof falso) // output -> falso type: false
```

## 4. NaN
Su significado es `Not a Number`. Este peculiar valor aparece cuando se intenta realizar una operacion aritmética la cuál no tiene sentido y Javascript no puede procesarla.
En esos casos Javascript asigna el valor de `NaN` para evitar romperse.

```js
const notANumber = 'cosas' / 'a'
console.log({ notANumber }) // output -> { notANumber: NaN }
```

Podemos validar el tipo de datos con `typeof`. Sin embargo, en este caso de NaN y demostrando algunas de las curiosidades de Javascript, cuando se hace un typeof de NaN, Javascript dice que el tipo de dato del valor Not a Number, es number :).

```js
console.log('notANumber type:', typeof notANumber) // output -> notANUmber type: number
```

## 5. null
Este tipo de dato indica que nosotros estamos asignando por nuestra cuenta un valor vacío a una variable.
El uso de `null` en ocasiones puede ser para asignar un valor temporal a una variable ya que el valor final no se encuentra disponible.

```js
const variableNull = null
console.log({ variableNull }) // output -> { variableNull: null }
```

Podemos validar el tipo de datos con `typeof`. Sin embargo, al hacer `typeof` de una variable con valor `null`, el valor que obtenemos es `object`

```js
console.log('variableNull type:', typeof variableNull) // output -> variableNull type: object
```

## 6. undefined
Este tipo de dato es asignado de manera automática con Javascript cuando detecta que se tiene una variable a la cual no se asignó un valor de forma inicial.
Indica que Javascript reservó un espacio de memoria para dicha variable, pero como no recibió un valor, le asigna automáticamente `undefined` para poder procesarlo. NOTA: Para declarar una variable sin asignarle un valor, es necesario hacerlo con `let`, ya que `const` no permite la declaración sin asignación.

```js
let variableUndefined /* = undefined*/
console.log({ variableUndefined }) // output -> { variableUndefined: undefined }
```

Podemos validar el tipo de datos con `typeof`.

```js
console.log('variableUndefined type:', typeof variableUndefined) // output -> variableUndefined type: undefined
```

---

## Operadores aritméticos

Existen diversos operadores aritméticos dentro de Javascript, entre los cuales se encuentran los siguientes:

## 1. Suma (*+*)
```js
const suma = 5 + 7 /* = 12 */
console.log({ suma }) // output -> { suma: 12 }
```

## 2. Resta (*-*)
```js
const resta = 9 - 2 /* = 7 */
console.log({ resta }) // output -> { resta: 7 }
```

## 3. Mutiplicación (*)
```js
const multiplicacion = 3 * 6 /* = 18 */
console.log({ multiplicacion }) // output -> { multiplicacion: 18 }
```

## 4. Division (*/*)
```js
const division = 15 / 3 /* = 5 */
console.log({ division }) // output -> { division: 5 }
```
## 5. Potencia/Exponente (**)
```js
const potencia = 4 ** 3 /* = 64 */
console.log({ potencia }) // output -> { potencia: 64 }
```

## 6. Módulo (*%*)
```js
const modulo = 12 % 4 /* = 0 */
console.log({ modulo }) // output -> { modulo: 0 }
```

## Librería Math
Dentro de Javascript existe una librería añadida al lenguaje llamada `Math`. Esta librería incluye métodos para realizar operaciones matemáticas como raíz cuadrada, razones trigonométricas, etc. Aquí puedes encontrar información al respeto de esta librería:
> https://www.w3schools.com/js/js_math.asp

```js
const raizCuadrada = Math.sqrt(81) /* = 9 */
console.log({ raizCuadrada }) // output -> { raizCuadrada: 9 }
const seno = Math.sin(Math.PI/6) /* = 30% */
console.log({ seno }) // output -> { seno: 0.4999 }
```

## *Shorthands*
Existen algo llamados shorthands que permiten realizar operaciones aritméticas y asignaciones del resultado a una misma variable de manera corta y rápida. A continuación algunas de los más conocidos:

### 1. Incremento y decremento (+1, -1)
```js
let numIncremento = 5
let numDecremento = 15
numIncremento++ /* equivalente a: numIncremento = numIncremento + 1  */
numDecremento-- /* equivalente a: numDecremento = numDecremento - 1  */
console.log('Incremento ++', numIncremento) // output -> Incremento ++ 6
console.log('Decremento --', numDecremento) // output -> Decremento -- 14
```

### 2. Evaluación y asignación

- Suma y asignación
```js
let numero = 5
numero += 3 /*equivalente a: numero = numero + 3 */
console.log('Suma y asignación +=', numero) // output -> Suma y asignación += 8
```

- Resta y asignación
```js
let numero = 5
numero -= 2 /*equivalente a: numero = numero - 2 */
console.log('Resta y asignación -=', numero) // output -> Resta y asignación -= 3
```

- Multiplicación y asignación
```js
let numero = 5
numero *= 5 /*equivalente a: numero = numero * 5 */
console.log('Multiplicación y asignación *=', numero) // output -> Multiplicación y asignación *= 25
```

- División y asignación
```js
let numero = 5
numero /= 5 /*equivalente a: numero = numero / 5 */
console.log('División y asignación /=', numero) // output -> División y asignación /= 1
```

- Potencia y asignación
```js
let numero = 5
numero **= 2 /*equivalente a: numero = numero ** 2 */
console.log('Potencia y asignación **=', numero) // output -> Potencia y asignación **= 25
```

- Módulo y asignación
```js
let numero = 5
numero %= 2 /*equivalente a: numero = numero ** 2 */
console.log('Módulo y asignación %=', numero) // output -> Módulo y asignación %= 1
```

---
# Strings
## Concatenación
Como veíamos anteriormente, los `strings` es un tipo de dato en Javascript que representa a un caracter o a una cadena de caracteres. Para poder considerar un valor como `string` es necesario encontrar esos caracteres entre comillas dobles (*""*) o entre comillas simples (*''*). Inclusive pueden utilizarse back-ticks (*``*), pero eso lo veremos más adelante.

Hay una acción llamada `concatenar` que consiste en unir diversos strings entre ellos mismos o con variables. Hay 3 formas de concatenar, que te mostramos a continuación:

### 1. Operador suma (+)
Sí, puede parecer extraño pero este operador nos sirve para concatenar strings. Si bien, este operador permite sumar dos o más números, cuando se aplica este operador a strings, lo que hace es unirlos, uno después de otro, de la siguiente manera:

```js
const greeting = 'Hola'
const name = 'Martín'
console.log(greeting + ',' + name + '. Bienvenido!' ) // output -> Hola, Martín. Bienvenido!
```

### 2. Operador coma (,)
Otro operador que nos permite concatenar strings es el operador coma. En esencia el uso es muy similar al del operador suma, pero hay una pequeña diferencia. El operador coma **agrega un espacio en blanco entre los strings o variables que está concatenando**.

```js
const hola = 'Hello'
const mundo = 'World'
console.log(hola, mundo) // output -> Hello World
```

> Si fuiste observador, en el fragmento de código para el operador suma, tuve que dejar un espacio en blanco entre el "." y la palabra "Bienvenido". Con el operador coma, no sería necesario ya que lo agregar de manera automática.

### 3. Template string (`${}`)
Dentro de todos los cambios y las innovaciones que hubo con la nueva versión de Javascript (ES6) hubo una nueva forma de concatener strings llamada `template strings`. Esta nueva forma permite escribir strings utilizando back-ticks (``) en lugar de comillas simples o dobles, además de que para añadir variables dentro de ese string se utiliza el signo de moneda (*$*) precedido de llaves o *curly braces* (*{}*). Ve el siguiente ejemplo:

```js
const nombre = 'Martin'
const edad = 25
const empresa = 'Actosoft'
console.log(`Hola! Mi nombre es ${nombre}, tengo ${edad} años y trabajo en ${empresa}`) // output -> Hola! Mi nombre es Martin, tengo 25 años y trabajo en Actosoft
```

> Esta nueva forma es la recomendada por convención, además de que es más sencilla de utilizar y leer, teniendo sólo un string y metiendo las variables donde sea necesario, a diferencia de las otras dos opciones las cuales tienes que cortar el string cada vez que quieras concatenar variables.

## Manipulación (métodos)
Existen diversos métodos que nos permiten manipular un string. Estos métodos permiten separar, unir, cortar, agregar, validar, reemplazar y muchas otras acciones. A continuación te mostramos los métodos más comunes para manipular strings.

