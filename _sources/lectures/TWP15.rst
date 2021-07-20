============
Repeticiones
============


.. image:: img/TWP10_001.jpeg
   :height: 14.925cm
   :width: 9.258cm
   :align: center
   :alt: 

Repeticiones
============


.. image:: img/TWP15_001.jpg
   :height: 15.602cm
   :width: 16.801cm
   :align: center
   :alt: 

.. raw:: html
   
   <br/>

.. image:: img/TWP15_002.jpeg
   :height: 19.049cm
   :width: 12.668cm 
   :align: center
   :alt: 


Impresión de 1 a 3
===================


Forma  simple
*************

.. codelens:: cl_l15_1

   print(1)
   print(2)
   print(3)


Usando una variable
*******************

.. codelens:: cl_l15_2

   x = 1
   print(x)
   x = 2
   print(x)
   x = 3
   print(x)


Incrementando la variable
*************************

.. codelens:: cl_l15_3

   x = 1
   print(x)
   x = x + 1
   print(x)
   x = x + 1
   print(x)

Usando ``while``
****************

.. codelens:: cl_l15_4

   x = 1
   while x <= 3:
       print(x)
       x = x +1


.. image:: img/TWP15_007.jpeg
   :height: 14.804cm
   :width: 22.181cm
   :align: center
   :alt: 


Prueba de escritorio
====================

.. code-block:: python

   x = 1
   while x <= 3:
       print(x)
       x = x + 1

.. table:: **Prueba de escritorio**
   :widths: auto
   :align: left

   ====== ========
     x    Pantalla
   ====== ========
   -1-    1
   -2-    2
   -3-    3
   4
   ====== ========

.. codelens:: cl_l15_5

   x = 1
   while x <= 3:
       print(x)
       x = x + 1


Contadores
==========

+ Ahora imprima de 1 a un número ingresado por el usuario

.. activecode:: ac_l15_1
   :nocodelens:
   :stdin:

   fin = int(input("Ingrese el último número: "))
   x = 1
   while x <= fin:
       print(x)
       x = x + 1

+ Imprima números pares entre 0 y un número dado por el usuario usando ``if``

.. activecode:: ac_l15_2
   :nocodelens:
   :stdin:

   fin = int(input("Ingrese el último número: "))
   x = 0
   while x <= fin:
       if x%2 == 0:
           print(x)
       x = x + 1


+ Imprima números pares entre 0 y un número proporcionado sin usar
  ``if``

.. activecode:: ac_l15_3
   :nocodelens:
   :stdin:

   fin = int(input("Ingrese el último número: "))
   x = 0
   while x <= fin:
       print(x)
       x = x + 2


Algunos ejercicios
==================


.. activecode:: ac_l15_4
   :nocodelens:

   Modifique el programa anterior para imprimir del 1 al número ingresado por el usuario, 
   pero esta vez solo los números impares.
   
   ~~~~


.. activecode:: ac_l15_5
   :nocodelens:

   Escriba un programa que imprima los primeros 10 múltiplos de 3.
   
   ~~~~


Acumuladores
============


+ La diferencia entre un contador y un acumulador es que en contadores el
  el valor agregado es constante, y en acumuladores, variable.

+ Cálculo de la suma de diez números enteros


.. activecode:: ac_l15_6
   :nocodelens:
   :stdin:
    
   n = 1
   suma = 0
   while n <= 10:
       x = int(input("Ingrese el último %d número: " %n))
       suma = suma + x
       n = n + 1

   print("suma: %d" %suma)


+ Promedio de 10 números enteros


.. activecode:: ac_l15_7
   :nocodelens:
   :stdin:

   n = 0
   suma = 0
   while n < 10:
       x = int(input("Ingrese el último %d número: " %(n + 1)))
       suma = suma + x
       n = n + 1
   
   print("Promedio: %5.2f" %(suma / n))


+ Calcular el factorial de diez

.. codelens:: cl_l15_6

   i = 1
   fact = 1
   while i <= 10:
       fact = fact * i
       i = i + 1
   print("Fact(10) = %d" %fact)


+ Calcular el factorial de un número entero ``n``

.. activecode:: ac_l15_8
   :nocodelens:
   :stdin:

   i = 1
   fact = 1
   n = int(input("Ingrese n: "))
   while i <= n:
       fact = fact * i
       i = i + 1

   print("Fact(%d) = %d" %(n, fact))



Interrumpiendo la repetición
============================


+ Calcule la suma de números enteros hasta que se ingrese cero


.. activecode:: ac_l15_9
   :nocodelens:
   :stdin:

   suma = 0
   while True:
       x = int(input("Ingrese un numero (0 salir): "))
       if x == 0:
           break
       suma = suma + x

   print("Suma: %d" %suma)


+ Calcule el promedio de los números ingresados hasta que se ingrese cero


.. activecode:: ac_l15_10
   :nocodelens:
   :stdin:

   suma = 0
   n = 0
   while True:
       x = int(input("Ingrese un numero (0 salir): "))
       if x == 0:
           break
       else:
           n = n + 1
       suma = suma + x

   print("Media: %5.2f" %(suma / n))


Repeticiones anidadas
=====================


+ Imprime las tablas de multiplicar del 1 al 10


.. activecode:: ac_l15_11
   :nocodelens:
   :stdin:

   tabla_de_multiplicar = 1
   while tabla_de_multiplicar <= 10:
       n = 1
       print("\nTabla de multiplicar del %d" %tabla_de_multiplicar)
       while  n <= 10:
           print("%d x %d = %d" %(tabla_de_multiplicar, n, tabla_de_multiplicar * n))
           n = n + 1
       tabla_de_multiplicar = tabla_de_multiplicar + 1


.. image:: img/TWP05_041.jpeg
   :height: 12.571cm
   :width: 9.411cm
   :align: center
   :alt: 


“La vida es como andar en bicicleta. Para mantener el equilibrio, debes seguir moviéndote”. - Einstein
