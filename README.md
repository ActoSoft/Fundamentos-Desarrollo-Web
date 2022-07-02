# Actosoft - Fundamentos del desarrollo web
## Problem Set - Algoritmia

Me voy a permitir hablarte un poco de la programación competitiva:

En un torneo de programación competitiva, los participantes reciben un listado de problemas. Cada problema consta de una descripción y de uno o varios casos de ejemplo de entrada y de salida de datos. Los participantes entonces deben escribir programas cuyos algoritmos sean capaces de transformar correctamente los datos de entrada en los datos de salida deseados.

Una vez han completado el programa, envían el código a un juez automático, que lo ejecutará con los casos de *prueba secretos*. Si el programa da los datos de salida esperados y se ejecuta dentro de los límites de tiempo y memoria establecidos, la respuesta se dará por válida.

No estaremos en un concurso, pero si algo similar, por ahora no utilizaremos jueces en línea, los maestros y asistentes evaluaremos tus respuestas. Comencemos a ver nuestro **problem set**:

### 1.-Length of Last Word

Se te dará un string como `entrada` que contiene palabras y espacios en blanco, tu programa debe retorna la longitud de la última palabra dentro del string de `entrada`.

#### Test Cases:

* Ejemplo 1
```bash
Input: s = "Hello World"
Output: 5
Explicación: La última palabra es "World" con 5 caracteres.
```

* Ejemplo 2
```bash
Input: s = "   fly me   to   the moon  "
Output: 4
Explicación: La última palabra es "moon" con 4 caracteres.
```

* Ejemplo 3
```bash
Input: s = " a"
Output: 1
Explicación: La última palabra es "a" con 1 caracter.
```

<details>
    <summary>Puntos extra</summary>
    ¿Podrás hacerlo sin uso de un array extra?
</details>

<details>
    <summary>Pistas👀</summary>
    <details>
        <summary>Divide y vencerás</summary>
        Dividir para solo tener las palabras.
    </details>
</details>

### 2.- Jaden Casing Strings

Jaden Smith, el hijo de Will Smith, es la estrella de películas como The Karate Kid (2010) y After Earth (2013). Jaden también es conocido por parte de su filosofía que transmite a través de Twitter. Cuando escribe en Twitter, es conocido por escribir casi siempre con mayúscula cada palabra. Para simplificar, tendrá que poner cada palabra en mayúsculas. Su tarea es convertir el string a cómo las escribiría Jaden Smith.

#### Test Cases:

* Ejemplo 1
```bash
Input: tweet = "How can mirrors be real if our eyes aren't real"
Output: "How Can Mirrors Be Real If Our Eyes Aren't Real"
```

<details>
    <summary>Pistas👀</summary>
    Después de un espacio en blanco se que va una nueva palabra, y Jaden la escribe en Mayúscula la primera.
</details>

### 3.- Promoviendo la sana distancia

Para promover el quedarse en casa, Susana Distancia llama por teléfono a los habitantes de una pequeña ciudad. Ella tiene una lista con `N` teléfonos de 5 dígitos y llama a cada uno de ellos para darles un breve mensaje. Como está muy ocupada, no se da cuenta que algunos de estos números aparecen varias veces en su lista. ¿Qué número recibió más llamadas de Susana Distancia?

#### Entrada

Un entero `N` seguido de `N` renglones con un teléfono `Ti` cada uno.

#### Salida

Un entero `M` separado por un espacio de un entero `T`, donde `M` es la máxima cantidad de veces que algún teléfono recibió llamadas y `T` es el primer teléfono que recibió `M` llamadas.

#### Test Cases:

* Ejemplo 1:
```bash
Input: 7
12345
65432
11223
65432
98765
12345
11223
Output: 2 65432
Explicación: Tres teléfonos fueron llamados 2 veces, pero el primero de ellos fue el 65432.
```

<details>
    <summary>Puntos Extras</summary>
    ¿Podrás hacerlo sin aplicar la fuerza bruta(dos ciclos anidados)?
</details>

<details>
    <summary>Pistas👀</summary>
    Que tal almacenar el número y cuantas veces le han llamado
</details>


### 4.-Filtrando números primos

Definición: Los números primos son aquellos que solo son divisibles entre **ellos mismos** y el **1**, es decir, que si intentamos dividirlos por cualquier otro número, el resultado no es entero. Dicho de otra forma, si haces la división por cualquier número que no sea 1 o él mismo, se obtiene un *resto distinto de cero*.

Se te dará un `array` de números enteros positivos y tu tarea es solo quedarte con los que son primos.

#### Test Cases:

* Ejemplo 1:
```bash
Input: nums = [1, 4, 5, 4, 7]
Output: [5, 7]
Explicación: Uno no es primo por definición, solo 5 y 7 lo son
```
