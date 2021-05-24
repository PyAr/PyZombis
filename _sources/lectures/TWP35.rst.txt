===================
Revición de strings
===================


.. image:: img/TWP10_001.jpeg
   :height: 14.925cm
   :width: 9.258cm
   :align: center
   :alt: 

Seamos más organizados
======================


.. image:: img/TWP35_001.jpeg
   :height: 13.35cm
   :width: 17.801cm
   :align: center
   :alt: 


Seamos más organizados
======================


.. image:: img/TWP35_002.jpeg
   :height: 14.064cm
   :width: 16.601cm
   :align: center
   :alt: 

Seamos organizados
==================

+ Cuando los programas crecen, el código generalmente se vuelve más complejo
+ Una forma de gestionar esta complejidad es usar funciones
+ Te permiten separar acciones comunes, por lo que tu código es más fácil
  fácil de leer y más fácil de mantener


Starbuzz no tiene granos
========================



+ El director de Starbuzz quiere una opción para comprar rápidamente, sin esperar
  bajar el precio
+ Al ejecutar el programa, te preguntaré si quieres comprar ahora o no
+ Si el usuario responde que sí, tomaré el precio actual y compraré
+ Si no, esperaré reducirlo a menos de 4.74


Nueva sugerencia de programa
============================


.. code-block:: python

   import urllib.request
   import time
   opcion = input('¿Quieres comprar ahora? (S/N)')
   if opcion == 'S':
      pagina = urllib.request.urlopen('http://beans.itcarlow.ie/prices-loyalty.html')
      texto = pagina.read().decode('utf8')
      donde = texto.find('>$')
      inicio = donde + 2
      fin = inicio + 4
      precio = float(texto[inicio:fin])
      print('¡Comprar! Precio: %5.2f' %precio)
   else:
      precio = 99.99
      while precio >= 4.74:
        pagina = urllib.request.urlopen('http://beans.itcarlow.ie/prices-loyalty.html')
        texto = pagina.read().decode('utf8')
        donde = texto.find('>$')
        inicio = donde + 2
        fin = inicio + 4
        precio = float(texto[inicio:fim])
        if precio >= 4.74:
          time.sleep(600)
      print('¡Comprar! Precio: 5.2%f' %precio)


Programa feo ...
================



+ No duplique su código ...
+ Esto conduce a un exceso de código, lo que hace que el mantenimiento de su código
  dificil
+ Intenta reutilizar tu código
+ Definiendo funciones reutilizaremos código
+ ¿Cuál es la diferencia?
+ Si tengo que cambiar algo, lo cambiaré en un solo lugar


Funciones
=========


+ Las funciones son códigos compartibles
+ Defino un nombre y llamo a la función en todo el programa
+ La función debe estar definida antes de poder llamarla
+ Si desea devolver un valor a la persona que llama, debe
  usa el comando de retorno


.. code-block:: python

   import urllib.request
   import time

   def precio_de_captura():
      pagina = urllib.request.urlopen('http://beans.itcarlow.ie/prices-loyalty.html')
      texto = pagina.read().decode('utf8')
      donde = texto.find('>$')
      inicio = donde + 2
      fin = inicio + 4
      return float(texto[inicio:fin])

   opcion = input('¿Quieres comprar ahora? (S/N)')
   if opcion == 'S':
      precio = precio_de_captura()
      print('¡Comprar! Precio: %5.2f' %precio)
   else:
      precio = 99.99
      while precio >= 4.74:
        precio = precio_de_captura()
        if precio >= 4.74:
          time.sleep(600)
      print('¡Comprar! Precio: 5.2%f' %precio)



No hay preguntas tontas
=======================



+ ¿Es el comando de retorno lo mismo que imprimir? No, imprimir muestra algo en la pantalla,
  while return devuelve un valor para quien llamó a la función.
+ Si no regreso dentro de la función, ¿qué devuelve? Ninguno
  ¿Debería + Volver siempre aparecer al final de la función? No siempre depende de
  lógica de función
+ ¿Puede una función devolver más de un valor? Sí, incluidas listas o
  diccionarios


.. image:: img/TWP35_005.jpeg
   :height: 16.402cm
   :width: 25.442cm
   :align: center
   :alt: 



+ `JSON <http://json.org>`_
+ Idioma independiente
+ Pares de nombre / valor
+ Lista ordenada
+ Muy adoptado hoy
+ Alternativa a XML

  + Más XML detallado
  + XML menos legibilidad




.. code-block:: python 

   
    import urllib.request
    import json

    url = "http://api.icndb.com/jokes/random?limitTo=[nerdy]"
    resp = urrlib.request.urlopen(url).read()
    data = json.loads(resp.decode('utf-8'))
    print(data['value']['joke'])


.. disqus::
   :shortname: pyzombis
   :identifier: lecture11
