==================
Revisión de String
==================


.. image:: img/TWP10_001.jpeg
   :height: 14.925cm
   :width: 9.258cm
   :align: center
   :alt: 

Texto
=====



+ Es difícil comunicarse sin palabras
+ Entre los diversos tipos de datos, uno de los más importantes es el texto o
  string

    + Nota: no es tan fácil manipular cadenas en algunos idiomas

+ Busquemos dónde está la información en un texto == 
+ Y aprenderemos uno de los conceptos más importantes de orientación a la
   objetos: métodos



Starbuzz Café
=============


.. image:: img/TWP33_001.jpg
   :height: 15.427cm
   :width: 14.801cm
   :align: center
   :alt: 


Código Starbuzz actual
======================

.. activecode:: beans-1
   :nocodelens:
   :stdin:
   
   from urllib.request import urlopen
   URL_PRECIOS = 'https://cors.bridged.cc/http://beans.itcarlow.ie/prices.html'
   pagina = urlopen(URL_PRECIOS)
   texto = pagina.read()
   print(texto)
   ====
   #TODO: Hacer la peticion con un proxy que evite el error de CORS


El CEO solo quiere el precio
============================


.. image:: img/TWP33_004.jpg
   :height: 6.719cm
   :width: 12.699cm
   :align: center
   :alt: 


El precio está incrustado en el HTML
====================================



+ Este es el texto HTML "en bruto", que es el formato de las páginas web
+ El precio está incrustado en HTML


.. image:: img/TWP33_002.png
   :height: 5.727cm
   :width: 24.005cm
   :align: center
   :alt: 



Strings
=======



+ String y cadenas de caracteres


.. image:: img/TWP33_005.png
   :height: 2.112cm
   :width: 23.745cm
   :align: center
   :alt: 


+ ¿Cómo obtener solo el precio?


.. image:: img/TWP33_006.png
   :height: 3.436cm
   :width: 22.621cm
   :align: center
   :alt: 


Strings
=======


.. image:: img/TWP33_007.jpg
   :height: 5cm
   :width: 16.051cm
   :align: center
   :alt: 


.. image:: img/TWP33_008.jpg
   :height: 6.323cm
   :width: 16.483cm
   :align: center
   :alt: 


Strings
=======


.. image:: img/TWP33_009.jpg
   :height: 5.317cm
   :width: 17.805cm
   :align: center
   :alt: 


Fatiamento
==========

.. codelens:: Example10_1
         
        time = 'Palmeiras'
        print(time[2:5])
        print(time[0:3])
        print(time[4:6])


+ Fatia do primeiro número até antes do segundo

+ Não inclui o segundo número!


Fatiamento
==========


.. image:: img/TWP33_012.jpg
   :height: 6.111cm
   :width: 13.943cm
   :align: center
   :alt: 


Fatiamento
==========


.. activecode:: beans-2
   :nocodelens:
   :stdin:
   
   from urllib.request import urlopen
   URL_PRECIOS = 'https://cors.bridged.cc/http://beans.itcarlow.ie/prices.html'
   pagina = urlopen(URL_PRECIOS)
   texto = pagina.read()
   print(texto[234:238])
   ====
   #TODO: Hacer la peticion con un proxy que evite el error de CORS


¡El CEO está feliz!
===================


.. image:: img/TWP33_015.jpg
   :height: 6.402cm
   :width: 14.922cm
   :align: center
   :alt: 


No hay preguntas tontas
=======================



+ ¿Puedo poner alguna página web en este código?

   + Sí. Siéntete libre, pero no olvides la decodificación
   + Por ejemplo, el siguiente sitio web utiliza iso8859
   + `Enlace para el mismo <http://www.ime.usp.br/~pf/algoritmos/dicios/br>`_


+ ¿Qué hace urllib.request?

    + Te permite chatear con internet

+ ¿Puedo acceder a una página directamente en el navegador?

    + Sí. Escriba en modo interactivo "importar antigravedad"



Descuentos para clientes leales
===============================


.. image:: img/TWP33_016.jpg
   :height: 12.571cm
   :width: 17.458cm
   :align: center
   :alt: 


Programa de fidelización
========================

.. activecode:: beans-3
   :nocodelens:
   :stdin:
   
   from urllib.request import urlopen
   URL_PRECIOS_LOYALTY = 'https://cors.bridged.cc/http://beans.itcarlow.ie/prices-loyalty.html'
   pagina = urlopen(URL_PRECIOS_LOYALTY)
   texto = pagina.read()
   print(texto[234:238])
   ====
   #TODO: Hacer la peticion con un proxy que evite el error de CORS


+ ¡No funcionó! "Bean" apareció en lugar del precio. ¿Porque sera?


El precio se movió
==================


+ Las páginas son diferentes y el precio cambia de posición en la cadena


.. image:: img/TWP33_018.jpg
   :height: 5.416cm
   :width: 16.122cm
   :align: center
   :alt: 


Los datos de Python son inteligentes
====================================

+ Los lenguajes de programación proporcionan funcionalidad incorporada
  en los datos para ayudarte

+ Los datos de Python son inteligentes: pueden hacer cosas


.. codelens:: Example10_2
         
        string = "batatinha quando nasce"
        print(string.upper())
        print(string.split())



Método find
===========



+ Métodos find para strings



.. codelens:: Example10_3
         
      string = "Palmeiras"
      print(string.find("P"))
      print(string.find("lmei"))
      print(string.find("Pa"))


+ Para conocer los métodos que tengo, dale Ctrl + espacio después de un período


Método find
===========

.. activecode:: beans-4
   :nocodelens:
   :stdin:
   
   from urllib.request import urlopen
   URL_PRECIOS_LOYALTY = 'https://cors.bridged.cc/http://beans.itcarlow.ie/prices-loyalty.html'
   pagina = urlopen(URL_PRECIOS_LOYALTY)
   texto = pagina.read()
   onde = texto.find('>$')
   inicio = onde + 2
   fin = inicio + 4
   print(texto[inicio:fin])
   ====
   #TODO: Hacer la peticion con un proxy que evite el error de CORS


Solo cuando es inferior a 4,74
==============================


.. image:: img/TWP33_025.jpg
   :height: 15.444cm
   :width: 8.6cm
   :align: center
   :alt: 


Solo cuando es inferior a 4,74
===============================

.. activecode:: beans-5
   :nocodelens:
   :stdin:
   
   from urllib.request import urlopen
   URL_PRECIOS_LOYALTY = 'https://cors.bridged.cc/http://beans.itcarlow.ie/prices-loyalty.html'
   pagina = urlopen(URL_PRECIOS_LOYALTY)
   texto = pagina.read()
   onde = texto.find('>$')
   inicio = onde + 2
   fin = inicio + 4
   if texto[inicio:fin] < 4.74:
      print(texto[inicio:fin])
   ====
   #TODO: Hacer la peticion con un proxy que evite el error de CORS


Las strings son diferentes de los números
=========================================


.. image:: img/TWP33_028.jpg
   :height: 9.324cm
   :width: 17.401cm
   :align: center
   :alt: 


Convertir a float
=================

.. activecode:: beans-6
   :nocodelens:
   :stdin:
   
   from urllib.request import urlopen
   URL_PRECIOS_LOYALTY = 'https://cors.bridged.cc/http://beans.itcarlow.ie/prices-loyalty.html'
   pagina = urlopen(URL_PRECIOS_LOYALTY)
   texto = pagina.read()
   onde = texto.find('>$')
   inicio = onde + 2
   fin= inicio + 4
   if float(texto[inicio:fin]) < 4.74:
      print('Comprar! precio: %5.2f' %float(texto[inicio:fin]))
   ====
   #TODO: Hacer la peticion con un proxy que evite el error de CORS


¿Puede seguir probando el precio?
=================================


.. image:: img/TWP33_029.jpg
   :height: 15.444cm
   :width: 8.6cm
   :align: center
   :alt: 


¿Puede seguir intentándolo?
===========================

.. activecode:: beans-7
   :nocodelens:
   :stdin:
   
   from urllib.request import urlopen
   URL_PRECIOS_LOYALTY = 'https://cors.bridged.cc/http://beans.itcarlow.ie/prices-loyalty.html'
   precio = 99.99
   while precio >= 4.74:
      pagina = urlopen(URL_PRECIOS_LOYALTY)
      texto = pagina.read()
      onde = texto.find('>$')
      inicio = onde + 2
      fin = inicio + 4
      precio = float(texto[inicio:fin])
   print('Comprar! precio: %5.2f' %precio)
   ====
   #TODO: Hacer la peticion con un proxy que evite el error de CORS

¡El CEO está muy feliz!
=======================


.. image:: img/TWP33_030.jpg
   :height: 9.762cm
   :width: 11.561cm
   :align: center
   :alt: 


Algo salió mal
==============


.. image:: img/TWP33_032.jpg
   :height: 15.268cm
   :width: 15.201cm
   :align: center
   :alt: 


Acusación DDoS
==============


+ DDoS – Distributed Denial of Service


.. image:: img/TWP33_033.jpg
   :height: 13.596cm
   :width: 15.201cm
   :align: center
   :alt: 


Recibimos un mensaje
====================


.. image:: img/TWP33_034.jpg
   :height: 13.191cm
   :width: 22.685cm
   :align: center
   :alt: 


Tiempo de biblioteca
====================


+ Tiempo actual en segundos time.clock ()
+ ¿Estoy en verano? time.daylight ()
+ Duerme unos segundos, duerme (segundos)
+ Zona horaria time.timezone ()


10 minutos entre cada acceso
============================

.. activecode:: beans-8
   :nocodelens:
   :stdin:
   
   from urllib.request import urlopen
   import time
   URL_PRECIOS_LOYALTY = 'https://cors.bridged.cc/http://beans.itcarlow.ie/prices-loyalty.html'
   precio = 99.99
   while precio >= 4.74:
      pagina = urlopen(URL_PRECIOS_LOYALTY)
      texto = pagina.read()
      onde = texto.find('>$')
      inicio = onde + 2
      fin = inicio + 4
      precio = float(texto[inicio:fin])
      if precio >= 4.74:
         time.sleep(600)
   print('Comprar! precio: %5.2f' %precio)
   ====
   #TODO: Hacer la peticion con un proxy que evite el error de CORS

Resumen
=======



+ Las srings son cadenas de caracteres
+ Accedemos a los caracteres individuales por el índice, que comienza con cero
+ Los métodos son funciones integradas en variables
+ Hay bibliotecas de programación con código listo
+ Los datos tienen un tipo, como int o string




Herramientas de Python
======================



+ texto[4]accede al quinto carácter
+ texto[4:9]accede al quinto al noveno carácter
+ El método text.find () busca una subcadena
+ float () convierte algo a un punto flotante
+ Bibliotecas: urllib.request y equipo

