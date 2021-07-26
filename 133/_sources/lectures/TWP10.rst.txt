===========
Condiciones
===========


.. image:: img/TWP10_001.jpeg
    :height: 15.125cm
    :width: 9.382cm
    :align: center
    :alt:


Condiciones
===========

.. codelens:: cl_l10_1

    print("¡Bienvenido a mi programa!")
    print("¡Vuelva siempre!")

.. image:: img/TWP10_002.jpg
    :height: 5.524cm
    :width: 22.859cm
    :align: center
    :alt:

+ Tus programas no siempre serán simples secuencias de comandos


“¿Correr o no correr? Esa es la cuestión..."
============================================

+ En general no ejecuto todas las líneas del programa.
+ Ir a través de las líneas de un programa es como viajar en automóvil en una ciudad.
+ Hay puntos dónde decidimos qué camino elegir.

.. image:: img/TWP10_004.png
    :height: 13.389cm
    :width: 20.001cm
    :align: center
    :alt:


if
==

+ Lea dos valores enteros e imprima el más grande

.. codelens:: cl_l10_2

    a = 8
    b = 5
    if a > b:
        print("El primer número es el más grande")
    if b > a:
        print("¡El segundo número es el más grande!")


Dos puntos e identación
***********************

+ Note que en Python es obligatorio culminar cualquier condición (if) con ``:``.
+ Recuerda también identar los bloques de código dentro de las condiciones, es obligatorio.


Verificar si un auto es nuevo o viejo:
+ Si el auto tiene al menos tres años de creado, es nuevo, es viejo en caso contrario.

.. codelens:: cl_l10_3

    anio_creacion = 10
    if anio_creacion <= 3:
        print("Su auto es nuevo")
    if anio_creacion > 3:
        print("Su auto es viejo")

+ Pregunte la velocidad de un automóvil, suponiendo que es un número entero.
+ En caso de que la velocidad supere los 110 km/h, muestre un mensaje que dice que el usuario ha sido multado.
+ Muestre el monto de la multa si es multado, cobrando ``$5.00`` por cada km por encima de los 110 km/h.

.. codelens:: cl_l10_4

    velocidad = 120
    if velocidad > 110:
        print("Usted a sido multado")
        multa = (velocidad - 110) * 5
        print("Valor de la multa : $%5.2f " % multa)


if / else
=========

+ ¿Qué hacer cuando la condición ``if`` es falsa?.
+ La clausula ``else`` significa en caso contrario.
+ Se suele usar cuando para indicar condiciones complementarias.
+ Las condiciones if / else pueden verse como un carro al llegar a una bifurcación en la ruta.
+ Dependiendo del resultado de una condición el carro puede ir por la ruta de arriba o por la ruta de abajo.

.. image:: img/TWP10_009.jpg
    :height: 9.754cm
    :width: 22.859cm
    :align: center
    :alt:

+ Los dos códigos a continuación hacen lo mismo pero uno usando condiciones if / else

.. codelens:: cl_l10_5

    anio_creacion = 1
    if anio_creacion <= 3:
        print("Su auto es nuevo")
    if anio_creacion > 3:
        print("Su auto es viejo")

.. codelens:: cl_l10_6

    anio_creacion = 1
    if anio_creacion <= 3:
        print("Su auto es nuevo")
    else:
        print("Su auto es viejo")

Estructuras anidadas
====================

+ Considere la compañía telefónica "Chao". Por debajo de 200 minutos, la empresa cobra ``$0.20`` por minuto. Entre 200 y 400 minutos, el precio es de ``$0.18``. Por encima de 400 minutos, el precio por minuto es de ``$0.15``. Calcular tu factura de teléfono con estas condiciones.
+ Las condiciones de la compañía, puede verse representado visualmente con la ruta de una carretera como la siguiente imagen.

.. image:: img/TWP10_011.jpg
    :height: 9.754cm
    :width: 22.859cm
    :align: center
    :alt:

+ Pueden crearse condiciones anidadas.
+ Recuerda identar las porciones de código que se encuentren anidadas.

.. codelens:: cl_l10_7

    minutos = 800
    if minutos < 200:
        precio = 0.20
    else:
        if minutos <= 400:
            precio = 0.18
        else:
            precio = 0.15
    print("Cuenta telefonica : $%6.2f" % (minutos * precio))

+ Note la doble identación para cumplir la segunda condición.
+ Ahora modificamos el programa de la compañía "Chao" para una promoción dónde la tarifa es de ``$0.08`` cuando usa más de 800 minutos.

.. codelens:: cl_l10_8

    minutos = 1000
    if minutos < 200:
        precio = 0.2
    else:
        if minutos <= 400:
            precio = 0.18
        else:
            if minutos <= 800:
                precio = 0.15
            else:
                precio = 0.08
    print("Cuenta telefonica : $%6.2f" % (minutos * precio))

+ Note que las estructuras anidadas pueden crecer.
+ Python dada sus características proporciona la clausula ``elif``.
+ Se utiliza para verificar múltiples condiciones.

elif
====

+ La cláusula elif sustituye a ``else`` y ``if``.

.. codelens:: cl_l10_9

    minutos = 1000
    if minutos < 200:
        precio = 0.2
    elif minutos <= 400:
        precio = 0.18
    elif minutos <= 800:
        precio = 0.15
    else:
        precio = 0.08
    print("Cuenta telefonica : $%6.2f" % (minutos * precio))


Lista de Ejercicios “again”
===========================

.. image:: img/TWP05_041.jpeg
    :height: 12.571cm
    :width: 9.411cm
    :align: center
    :alt:

“La vida es como andar en bicicleta. Para mantener el equilibrio, debes seguir moviéndote”. - Einstein
