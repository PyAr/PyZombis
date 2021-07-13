=====================
Revisión de Funciones
=====================


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
+ Te permiten separar acciones comunes, por lo que tu código es más
  fácil de leer y más fácil de mantener


Starbuzz no tiene granos
========================


+ El director de Starbuzz quiere una opción para comprar rápidamente, sin esperar
  a que baje el precio
+ Al ejecutar el programa, te preguntaré si quieres comprar ahora o no
+ Si el usuario responde que sí, tomaré el precio actual y compraré
+ Si no, esperaré reducirlo a menos de 4.74


Nueva sugerencia de programa
============================


.. activecode:: ac_l35_1
    :nocodelens:
    :stdin:

    import urllib.request
    
    opcion = input("¿Quieres comprar ahora? (S/N)")
    if opcion.lower() == "s":
        pagina = urllib.request.urlopen("https://cors.bridged.cc/http://beans.itcarlow.ie/prices-loyalty.html")
        texto = pagina.read()
        # El método .find() devuelve la posición de la primer ocurrencia
        # de la cadena que se le pase como parámetro.
        donde = texto.find("$")
        # el valor de donde es un número entero, representando 
        # la posición de $ en la cadena texto.
        # Podemos obtener el precio si sacamos el pedazo de la cadena texto
        # en donde se encuentra el precio.
        inicio = donde + 1
        fin = inicio + 4
        # Obtenemos el precio con los índices correspondientes
        precio = float(texto[inicio:fin])
        print("¡Comprar! Precio: %5.2f" % precio)
    else:
        precio = 99.99
        while precio >= 4.74:
            pagina = urllib.request.urlopen("https://cors.bridged.cc/http://beans.itcarlow.ie/prices-loyalty.html")
            texto = pagina.read()
            donde = texto.find("$")
            inicio = donde + 1
            fin = inicio + 4
            precio = float(texto[inicio:fin])
        print("¡Comprar! Precio: %5.2f" % precio)


Programa feo ...
================


+ No duplique su código ...
+ Esto conduce a un exceso de código, lo que hace que el mantenimiento de su código
  dificil
+ Intente reutilizar su código
+ Definiendo funciones reutilizaremos código
+ ¿Cuál es la diferencia?
+ Si tengo que cambiar algo, lo cambiaré en un solo lugar


Funciones
=========


+ Las funciones son códigos compartibles
+ Defino un nombre y llamo a la función en todo el programa
+ La función debe estar definida antes de poder llamarla
+ Si desea devolver un valor al sujeto que llama la función, debe
  usa el comando de retorno ``return``


.. activecode:: ac_l35_2
    :nocodelens:
    :stdin:

    import urllib.request


    def capturar_precio():
        pagina = urllib.request.urlopen("https://cors.bridged.cc/http://beans.itcarlow.ie/prices-loyalty.html")
        texto = pagina.read()
        donde = texto.find("$")
        inicio = donde + 1
        fin = inicio + 4
        return float(texto[inicio:fin])


    opcion = input("¿Quieres comprar ahora? (S/N)")
    if opcion.lower() == "s":
        precio = capturar_precio()
        print("¡Comprar! Precio: %5.2f" % precio)
    else:
        precio = 99.99
        while precio >= 4.74:
            precio = capturar_precio()
        print("¡Comprar! Precio: %5.2f" % precio)


No hay preguntas tontas
=======================


+ ¿Es el comando de retorno lo mismo que imprimir? No, ``print()`` muestra algo en la pantalla,
  mientras que ``return`` devuelve un valor para quien llamó a la función.
+ Si no hay ``return`` dentro de la función, ¿qué devuelve? Deuelve nada: ``None``.
  ¿Debería ``return`` siempre aparecer al final de la función? No siempre, depende de la
  lógica de la función
+ ¿Puede una función devolver más de un valor? Sí, incluidas listas o
  diccionarios.


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

  + XML es más detallado
  + XML es menos legible


.. activecode:: ac_l35_3
    :nocodelens:

    import urllib.request
    import json

    url = "http://api.icndb.com/jokes/random?limitTo=[nerdy]"
    texto = urllib.request.urlopen(url).read()
    data = json.loads(texto)
    print(data["value"]["joke"])


.. disqus::
   :shortname: pyzombis
   :identifier: lecture11
