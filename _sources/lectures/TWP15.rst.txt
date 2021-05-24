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
   :alt: 

.. image:: img/TWP15_002.jpeg
   :height: 19.049cm
   :width: 12.668cm 
   :alt: 


Impresión de 1 a 3
===================

+ Formas  simples


.. codelens:: Example3_1

        print(1)
        print(2)
        print(3)


+ Usando una variable


.. codelens:: Example3_2

        x=1
        print(x)
        x=2
        print(x)
        x=3
        print(x)


Impresión de 1 a 3
===================



+ Incrementando la variable

.. codelens:: Example3_3

        x=1
        print(x)
        x=x+1
        print(x)
        x=x+1
        print(x)

+ Usando while


.. codelens:: Example3_4

        x=1
        while x <= 3:
        	print(x)
        	x=x+1

Impresión de 1 a 3
===================


.. image:: img/TWP15_007.jpg
   :height: 14.804cm
   :width: 22.181cm
   :align: center
   :alt: 


Prueva de escritorio
====================


.. image:: img/TWP15_Tab1.jpg
   :height: 6cm
   :width: 22.181cm
   :align: center
   :alt: 


.. codelens:: Example3_5

        x=1
        while x <= 3:
        	print(x)
        	x=x+1

Contadores
==========



+ Ahora imprima de 1 a un número ingresado por el usuario


.. activecode:: Example3_6
   :nocodelens:
   :stdin:

   fin = int(input("Ingrese el último número: "))
   x = 1
   while x <= fin:
    print(x)
    x=x+1

Contadores
==========


+ imprime números pares entre 0 y un número dado usando if


.. activecode:: Example3_7
   :nocodelens:
   :stdin:

   fin = int(input("Ingrese el último número: "))
   x = 0
   while x <= fin:
    if x%2 == 0:
    	print(x)
    x=x+1


Contadores
==========


+ Imprima números pares entre 0 y un número proporcionado sin usar
   el if


.. activecode:: Example3_8
   :nocodelens:
   :stdin:

   fin = int(input("Ingrese el último número: "))
   x = 0
   while x <= fin:
       print(x)
       x = x+2


Contadores
==========



+ Modificar el programa anterior para imprimir del 1 al número
   ingresado por el usuario, pero esta vez solo los números impares
+ Reescribe el programa anterior para escribir los primeros 10
   múltiplos de 3


Acumuladores
============


+ La diferencia entre un medidor y un acumulador es que en metros el
   el valor agregado es constante y, en acumuladores, variable
+ Cálculo de la suma de diez números enteros


.. activecode:: Example3_9
   :nocodelens:
   :stdin:
    
   n = 1
   suma = 0
   while n <= 10:
        x = int(input("Ingrese el último %d número: " %n))
        suma = suma + x
	n = n + 1
   print("suma: %d" %suma)


Acumuladores
============


+ Promedio de 10 números enteross


.. activecode:: Example3_10
   :nocodelens:
   :stdin:

   n = 1
   suma = 0
   while n <= 10:
    x = int(input("Ingrese el último %d número: " %n))
    suma = suma + x
    n = n + 1
   print("Suma: %5.2f" %(suma/n))


Acumuladores
============


+ Calcular el factorial de diez

.. codelens:: Example3_11

        i = 1
        fact = 1
        while i <= 10:
        	fact = fact*i
        	i = i+1
        print("Fact(10) = %d" %fact)



Acumuladores
============


+ Calcular el factorial de un número entero n

.. activecode:: Example3_12
   :nocodelens:
   :stdin:

   i = 1
   fact = 1
   n = int(input("Ingrese n: "))
   while i <= n:
    fact = fact*i
    i = i+1
   print("Fact(%d) = %d" %(n,fact))



interrumpiendo la repetición
============================


+ Calcule la suma de números enteros hasta que se ingrese cero


.. activecode:: Example3_13
   :nocodelens:
   :stdin:

   suma = 0
   while True:
             x = int(input("Ingrese un numero (0 salir): "))
             if x == 0:
	             break
             suma = suma + x
   print("Suma: %d" %suma)


interrumpiendo la repetición
============================


+ Números promedio hasta que se ingrese cero


.. activecode:: Example3_14
   :nocodelens:
   :stdin:

   suma = 0
   n = 0
   while True:
       x = int(input("Ingrese un numero (0 salir): "))
       if x == 0:
	       break
       else:
	       n = n+1
       suma = suma + x
   print("Média: %5.2f" %(suma/n))


Repeticiones anidadas
=====================


+ Imprime las tablas del 1 al 10


.. activecode:: Example3_15
   :nocodelens:
   :stdin:

   tabla_de_multiplicar = 1
   while tabla_de_multiplicar <= 10:
        n = 1
	print("tabla_de_multiplicar %d" %tabla_de_multiplicar)
        while  n <= 10:
	     print("%d x %d = %d" %(tabla_de_multiplicar,n,tabla_de_multiplicar*n))
	     n = n + 1
	tabla_de_multiplicar = tabla_de_multiplicar + 1


Lista de Ejercicios “again”
===========================


.. image:: img/TWP05_041.jpeg
   :height: 12.571cm
   :width: 9.411cm
   :align: center
   :alt: 


+ “La vida es como andar en bicicleta. Para mantener el equilibrio, debes seguir moviéndote” - Einstein

