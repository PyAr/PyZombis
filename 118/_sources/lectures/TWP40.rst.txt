==================
Revisión general 3
==================


.. image:: img/TWP10_001.jpeg
    :height: 14.925cm
    :width: 9.258cm
    :align: center
    :alt:


El proceso de desarrollo de software
====================================

+ Ejecutar programas creados por otros es relativamente simple
+ Lo difícil es comenzar a crear tus propios programas
+ Las computadoras son muy estrictas y hay muchos detalles
+ Entonces es necesario ser muy sistemático


Pasos en el proceso de desarrollo de software
=============================================

+ Analizar el problema:
    + Comprender exactamente ¿cuál es el problema a resolver?
    + Problema bien definido, medio problema resuelto.

+ Especificación de lo que hará el programa:
    + Describe exactamente lo que hará tu programa.
    + En esta etapa, no debería preocuparme sobre ¿cómo voy a hacer mi programa?, pero mas decidir exactamente ¿qué hará?
    + ¿Cuáles son las entradas y salidas del programa?

+ Diseñar el programa:
    + Formular la estructura general del programa.
    + Podemos usar pseudocódigo en este paso.

+ Implementar el programa:
    + Diseñar algunas pruebas para validar tu programa.
    + Traduce el proyecto a cualquier lenguaje de programación.
    + En este curso usaremos Python.

Ejemplo: convertidor de temperatura Fahrenheit a Celsius
========================================================

+ Análisis del problema:
    + Dada una temperatura en grados *Fahrenheit*, obtenga la conversión en Celsius.

+ Especificación de lo que hará el programa:
    + Entrada: temperatura en Fahrenheit
    + Salida: temperatura en grados Celsius
    + Salida: 5 * (F-32) / 9

+ Diseñar ¿cómo funcionará el programa?:
    + Leer el valor de temperatura en Fahrenheit.
    + Convertir el valor usando la fórmula ``5 * (F-32) / 9``
    + Imprimir el valor convertido.

+ Implementación del problema:
    + Pruebas: 32F = 0C y 100F = 37.8C

.. activecode:: ac_l40_1
    :nocodelens:
    :stdin:

    F = float(input("Fahrenheit: "))
    C = 5 * (F - 32) / 9
    print("Celsius: %2.1f" % C)


Variables
=========

+ Las variables son referencias a regiones de memoria que definiste para usarla en el programa.
+ Las variables ``F`` y ``C`` del ejemplo anterior son referencias a regiones de memoria.
+ Las variables ``F`` y ``f`` son diferentes, al igual que ``C`` y ``c``.
+ ``"F"`` o ``"C"`` no son variables.


Variables con valores definidos e indefinidos
=============================================

+ Solo se puede usar el contenido de una variable si ya tiene un valor *definido* antes.
+ Si se usa variable que no tiene valor definido o se encuentra *indefinido* daría como resultado un error como el siguiente.

.. activecode:: ac_l40_2
    :nocodelens:
    :stdin:

    x = 42
    print(x)
    print(y)

Palabras reservadas
===================

+ Existen palabras reservadas en Python.
+ Estas palabras no se pueden usar para declarar una variable.
+ En el ejercicio de la conversión las palabras ``float``, ``input`` y ``print`` son palabras reservadas.

Literales o constantes
======================

+ Existen varios tipos de datos.
+ Los más simples son los llamados literales o constantes.

.. code-block:: python

        """
        Fahrenheit, 5, 32 y 9 son valores literales o constantes.
        """
        F = float(input("Fahrenheit: "))
        C = 5 * (F - 32) / 9
        print("Celsius: %2.1f" % C)

+ ¡Recuerde que hay diferentes tipos de datos! por ejemplo: ``"32"`` no es lo mismo que ``32``.

.. codelens:: cl_l40_1

    int("32") == 32
    "32" == str(32)
    32 == "32"

+ Para comparar diferentes tipos, primero realice una conversión.


Comandos de salida
==================

+ El comando o instrucción ``print`` sirve para mostrar información al usuario.


Carácter de fin de línea
======================== 

+ El comando ``print`` agrega un salto de línea como carácter por defecto.
+ Se puede reemplazar el carácter de fin de línea utilizando ``end`` en el comando ``print``.

.. codelens:: cl_l40_2
         
    for x in "aguacate":
        if x in "ae":
            print(x, end=" ")
        else:
            print("*", end=" ")


Asignación de variables.
========================

+ Asignar una variable por lo general sigue el siguiente formato ``<variable>`` = ``<expresion>``
+ La ``<expresión>`` es calculada en el procesador y modifica el valor en la memoria referenciada por ``<variable>``.

.. codelens:: cl_l40_3
         
    x = 5
    celsius = 5
    fahrenheit = 9 / 5 * celsius + 32


Asignación de variables.
========================

+ Puede asignar valores a una misma variable varias veces.

.. codelens:: cl_l40_4
         
    x = 0
    print(x)
    x = "aguacate"
    print(x)
    x = 3.14
    print(x)
    x = x * 2
    print(x)

+ En el ejemplo anterior, ``x`` toma el último valor asignado.

Lectura y tarea
===============

.. activecode:: ac_l40_3
    :language: python3
    :python3_interpreter: brython

    string = input("Escribe un texto: ")
    print(string)
    n = int(input("Ingrese un número entero: "))
    print(n)
    y = float(input("Ingrese un número en punto flotante: "))
    print(y)
    x = eval(input("Ingrese una expresión matemática: "))
    print(x)


Asignación múltiple
===================


.. activecode:: ac_l40_4
    :language: python3
    :python3_interpreter: brython

    n1, n2, n3, n4 = eval(input("Ingrese 4 notas separadas por comas: "))
    print("Media:", (n1 + n2 + n3 + n4) / 4)
    x = 4
    y = 5
    suma, diferencia = x + y, x - y
    print(suma)
    print(diferencia)
    x, y = y, x
    print(x, y)


Asignación múltiple
===================

+ ¡Para intercambiar variables, la siguiente secuencia no funciona!

.. codelens:: cl_l40_5

    x = 4
    y = 5
    x = y
    y = x

+ Una solución sería usar una variable ``temporal``.

.. codelens:: cl_l40_6

    x = 4
    y = 5
    temporal = x
    x = y
    y = temporal

+ También se puede utilizar la asignación múltiple que es más elegante.

.. codelens:: cl_l40_7

    x = 4
    y = 5
    x, y = y, x

Formas de iterar
================
+ Existen diversas formas de iterar.
+ Todas siguen el siguiente patrón ``for <var> in <secuencia>``.


.. activecode:: ac_l40_5
    :nocodelens:
    :stdin:

    print(list(range(10)))

    for k in range(10):
        print(k, end=" ")

    for k in [0, 1, 2, 3]:
        print(k, end=" ")

    for k in "aguacate":
        print(k + k, end=" ")

Ejercicio
=========

+ Queremos desarrollar un programa que determine el valor futuro de una inversión, dado el valor inicial y la tasa de interés
+ Seguimos los pasos para el desarrollo.


+ Análisis:
    + El dinero inicial genera una tasa de interés anual
    + ¿Cuánto valdrá en 10 años?
    + Entrada: monto inicial, tasa de interés
    + Salida: valor en 10 años

+ Especificación:
    + El usuario ingresa la cantidad inicial invertida
    + El usuario ingresa la tasa de interés anual
    + Valor de la fórmula matemática financiera * (1 + interés)

+ Diseño:
    + Ingrese el monto de inversión inicial.
    + Ingrese la tasa de interés.
    + Repite 10 veces:
        + valor inicial = valor inicial * (1 + tasa de interés)
    + Imprime el valor actualizado.

+ Implementación:
    + Valores de prueba:
        + 1000 dolares de inversión y 3% la tasa de interés anual
        + 1000 dolares de inversión y 10% la tasa de interés anual

.. activecode:: ac_l40_6
    :nocodelens:
    :stdin:

    valor = float(input("Cantidad inicial invertida: "))
    tasa = float(input("Tasa de interés anual: "))
    for i in range(10):
        valor = valor * (1 + tasa / 100)
    print("Valor después de 10 años:  %5.2f" % valor)


Preguntas frecuentes
====================

+ ¿Por qué definir algunas pruebas antes de la implementación es una buena práctica de programación?
+ ¿Cuál es la ventaja de escribir pseudocódigo en la etapa de diseño?


Números básicos
===============

+ Existen dos tipos de datos numéricos: ``int`` y ``float``.
+ ¿Por qué existen diferentes tipos?
    + Hay diferentes datos: los contadores son números enteros y el número PI no es.
    + Las operaciones con números enteros son mucho más rápidas.
    + Los números de coma flotante son aproximaciones: su precisión tiene un límite.

.. codelens:: cl_l40_8
         
    print(type(3))
    print(type(3.14))
    print(type(3.0))
    x = -32
    print(type(x))
    x = 32.0
    print(type(x))
    print(type(int(x)))


Tabla de operadores
===================


.. table:: **Tabla de operadores**
    :widths: auto

    ======== =====================
    Operador Operación
    ======== =====================
    \*        Multiplicación
    /         División
    \*\*      Exponenciación
    abs()     Valor absoluto
    %         Resto de la división
    //        División entera
    \-        Resta
    \+        Suma
    ======== =====================

Operadores Numéricos
====================

.. codelens:: cl_l40_9
         
    print(3 + 4)
    print(3.0 + 4.0)
    print(3.0 * 4.0)
    print(4 ** 3)
    print(4.0 ** 3)
    print(abs(5))
    print(abs(-5))

División entera en lenguajes de programación antiguos
=====================================================

+ Los lenguaje más antiguos generan un resultado completo en la división de enteros.
+ ``10/3`` será igual a 3
+ Al calcular Fahrenheit a Celsius, tendré que modificarlo un poco mi programa si uso C o Java.


Conversión de grados usando C
=============================

.. code-block:: c

    #include <stdio.h>

        int main(void){
            float F, C;
            printf("Farenheit: ");
            scanf("%f", &F);
            C = 5.0 * (F - 32.0) / 9.0;
            printf("Celsius: %2.1f\n", C);
        }
