=====================
For, Funciones y Azar
=====================


.. image:: img/TWP10_001.jpeg
    :height: 14.925cm
    :width: 9.258cm
    :align: center
    :alt:


for == while oculto
===================

+ Códigos equivalentes: FOR durante el día se convierte MIENTRAS por la noche.


.. codelens:: cl_l20_1
         
    for letra in "aeiou":
        print(letra)

.. codelens:: cl_l20_2
         
    texto = "aeiou"
    k = 0
    while k < len(texto):
        letra = texto[k]
        print(letra)
        k = k + 1

for == while oculto
====================

+ Códigos equivalentes :

.. codelens:: cl_l20_3
         
    for i in range(5):
        print(i)

.. codelens:: cl_l20_4
         
    lista = list(range(5))
    k = 0
    while k < len(lista):
        i = lista[k]
        print(i)
        k = k + 1

for == while oculto
====================

+ Códigos equivalentes :

.. codelens:: cl_l20_5
         
    for x in ["cpbr6", 42, 3.14]:
        print(x)

.. codelens:: cl_l20_6
         
    lista = ["cpbr6", 42, 3.14]
    k = 0
    while k < len(lista):
        x = lista[k]
        print(x)
        k = k + 1

funciones def
=============

+ Aprendimos algunas funciones de Python: ``len``, ``int``, ``float``, ``print`` e ``input``.
+ Ahora crearemos nuestras propias funciones.
+ Utilizo ``def`` para definir la función y ``return`` para devolver algún valor.
+ Hay funciones que no devuelven nada.

.. codelens:: cl_l20_7
         
    def es_par(x):
        return x % 2 == 0


    print(es_par(13))
    print(es_par(12))


+ Esta función regresa ``True`` si el parámetro ``x`` es par, ``False`` en caso contrario.
+ Tenga en cuenta que, a diferencia de lo que hemos visto hasta ahora, estas líneas de código no se ejecutarán de inmediato.
+ Es necesario llamar a la función para ejecutarlas.

Funciones
=========

+ Definir una función ``factorial``

.. codelens:: cl_l20_8
         
    def factorial(n):
        f = 1
        while n > 0:
            f = f * n
            n = n - 1
        return f


    for i in range(5):
        print(factorial(i))

 
Variables locales y globales
============================

+ **Nota**: El alcance de ``a`` en el ejemplo de abajo es diferente en los dos casos. En otras palabras, las dos variables ``a`` son diferentes.

.. codelens:: cl_l20_9

    a = 5


    def cambio_y_impresion():
        a = 7
        print("valor de a dentro de la función : %d" % a)


    print("valor de a antes de cambiar: %d" % a)
    cambio_y_impresion()
    print("valor de a después de cambiar: %d" % a)



Variables locales y globales
============================

+ En este caso, usamos la palabra reservada global. Entonces, la variable ``a`` dentro de la función es la misma que la variable definida anteriormente, es decir, es la variable global.

.. codelens:: cl_l20_10
         
    a = 5


    def cambio_y_impresion():
        global a
        a = 7
        print("valor de a dentro de la función : %d" % a)


    print("valor de a antes de cambiar: %d" % a)
    cambio_y_impresion()
    print("valor de a después de cambiar: %d" % a)

+ Observe la diferencia en las salidas en los ejemplos 9 y 10.


Números aleatorios
==================

.. codelens:: cl_l20_11
         
    import random

    print(random.randint(1, 100))
    print(random.randint(1, 100))
    alumnos = ["José",
                "Juan",
                "Pedro",
                "Lucas",
                "Thiago"]
    print(random.choice(alumnos))
    print(random.choice(alumnos))
    random.shuffle(alumnos)
    print(alumnos)
    random.shuffle(alumnos)
    print(alumnos)


Números al azar
===============

+ Defina una función de "codificación" que devuelva las letras en una cadena mezclados.
+ **Consejo**: use ``list()`` para convertir su cadena en una lista.

.. codelens:: cl_l20_12
         
    import random


    def codificación(s):

        lista = list(s)
        random.shuffle(lista)
        return "".join(lista)


    print(codificación("palmeras"))
    print(codificación("palmeras"))

Números aleatorios
==================

+ Genere una lista de 15 enteros aleatorios entre 10 y 100.

.. codelens:: cl_l20_13
         
    import random

    lista = []
    for k in range(15):
        lista.append(
            random.randint(10, 100)
            )
    print(lista)

Números aleatórios
==================

+ Genere una lista de 15 enteros aleatorios entre 10 y 100 que son distintos el uno del otro.

.. codelens:: cl_l20_14
         
    import random

    lista = []
    while len(lista) < 15:
        x = random.randint(10, 100)
        if x not in lista:
            lista.append(x)
    lista.sort()
    print(lista)

Lista de ejercicios "again"
===========================


.. image:: img/TWP05_041.jpeg
    :height: 12.571cm
    :width: 9.411cm
    :align: center
    :alt:

+ “La vida es como andar en bicicleta. Para mantener el equilibrio, debes seguir moviéndote ”. - Einstein


