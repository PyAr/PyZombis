==========================
For y funciones aleatorias
==========================


.. image:: img/TWP10_001.jpeg
   :height: 14.925cm
   :width: 9.258cm
   :align: center
   :alt: 


for == while oculto
===================

+ Códigos equivalentes: FOR durante el día se convierte MIENTRAS por la noche.


.. codelens:: Example6_1
         
        for letra in 'aeiou':
         print(letra)

.. codelens:: Example6_2
         
        texto = 'aeiou'
        k = 0
        while k < len(texto):
         letra = texto[k]
         print(letra)
         k = k+1


for == while oculto
====================

+ Códigos equivalentes :

.. codelens:: Example6_3
         
        for i in range(5):
         print(i)


.. codelens:: Example6_4
         
         lista = list(range(5))
         k = 0
         while k < len(lista):
            i = lista[k]
            print(i)
            k = k + 1


for == while oculto
====================

+ Códigos equivalentes :


.. codelens:: Example6_5
         
        for x in ['cpbr6',42,3.14]:
         print(x)

.. codelens:: Example6_6
         
        lista = ['cpbr6',42,3.14]
        k = 0
        while k < len(lista):
         x = lista[k]
         print(x)
         k = k + 1


funciones def
=============

+ Aprendimos algunas funciones de Python: len, int, float, print y input
+ Ahora crearemos nuestras propias funciones
+ Utilizo def para definir la función y regreso para devolver algún valor
+ Hay funciones que no devuelven nada


.. codelens:: Example6_7
         
  def epar(x):
    return (x%2 == 0)

  print(epar(13))
  print(epar(12))


+ Esta función regresa si el parámetro x es par
+ Tenga en cuenta que, a diferencia de lo que hemos visto hasta ahora, estas líneas
   no se ejecutará de inmediato
+ Necesito llamar a la función para ejecutarla



Funciones
=========


+ Definir una función factorial


.. codelens:: Example6_8
         
        def medida(n):
         f = 1
         while n > 0:
            f = f*n
            n = n - 1
         return f

        for i in range(5):
         print(medida(i))

 

Variables locales y globales.
=============================

+ Nota: El alcance de a es diferente en los dos casos. En otras palabras, las dos variables 'a' son diferentes.


.. codelens:: Example6_9
         
        a = 5 
        def cambio_y_impresion():
         a = 7
         print('a dentro de la función : %d' %a)
        print('el antes de cambiar: %d' %a)
        cambio_y_impresion()
        print('el después de cambiar: %d' %a)



Variables locales y globales
============================

+ En este caso, usamos la palabra clave global. Entonces, la variable 'a' dentro de la función es la misma que la variable definida anteriormente, es decir, es la variable global.

.. codelens:: Example6_10
         
        a = 5 
        def cambio_y_impresión():
         a = 7
         print('a dentro de la función: %d' %a)
        print('el antes de cambiar: %d' %a)
        cambio_y_impresión()
        print('el después de cambiar: %d' %a)



+ Observe la diferencia en las salidas en los ejemplos 9 y 10.


Números aleatorios
==================


.. codelens:: Example6_11
         
        import random

        print(random.randint(1,100))
        print(random.randint(1,100))
        alumnos = ['José','Juan','Pedro','Lucas','Thiago']
        print(random.choice(alumnos))
        print(random.choice(alumnos))
        random.shuffle(alumnos)
        print(alumnos)
        random.shuffle(alumnos)
        print(alumnos)


Números al azar
===============



+ Defina una función de "codificación" que devuelva las letras en una cadena
   mezclado Consejo: use list () para convertir su cadena en una lista.

.. codelens:: Example6_12
         
        def codificación(s):

         import random
         lista = list(s)
         random.shuffle(lista)
         return ''.join(lista)

        print(codificación('palmeras'))
        print(codificación('palmeras'))



Números aleatorios
==================



+ Genere una lista de 15 enteros aleatorios entre 10 y 100


.. codelens:: Example6_13
         
        import random
        lista = []
        for k in range(15):
         lista.append(random.randint(10,100))
        print(lista)


Números aleatórios
==================



+ Genere una lista de 15 enteros aleatorios entre 10 y 100 que son distintos el uno del otro




.. codelens:: Example6_14
         
        import random
        lista = []
        while len(lista) < 15:
         x = random.randint(10,100)
         if x not in lista:
            lista.append(x)
        lista.sort()
        print(lista)



Lista 5
=======


.. image:: img/TWP05_041.jpeg
   :height: 12.571cm
   :width: 9.411cm
   :align: center
   :alt: 

+ “La vida es como andar en bicicleta. Para mantener el equilibrio, debes seguir moviéndote ”. - Einstein


