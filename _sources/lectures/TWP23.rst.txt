
=======================
Archivos y diccionarios
=======================


.. image:: img/TWP10_001.jpeg
   :height: 14.925cm
   :width: 9.258cm
   :align: center
   :alt: 


Archivos
========

+ Hasta ahora nuestros datos desaparecieron al salir de IDLE
+ Los archivos son para almacenamiento permanente
+ Un archivo es un área de disco donde podemos leer o escribir informacion
+ Accedemos al archivo por su nombre
+ Para acceder a un archivo necesita abrirlo
+ Al abrir el archivo informamos su nombre, directorio donde está  (si necesario) y qué operaciones realizaremos: lectura y / o escritura
+ La función que abre los archivos está abierta y los modos son: r - lectura, w - escritura, a - agregar, b - binario,(actualizar)
+ Los métodos para leer o escribir son read y write
+ Los archivos deben cerrarse con cierre Enviar comentarios

.. code-block:: python

   archivo = open('numeros.txt','w')
   for linea in range(1,101):
       archivo.write('%d\n' %linea)
   archivo.close()



.. .. datafile:: numeros.txt
..    :edit: 
..    :hide: 

.. .. activecode:: Example7_1
..    :nocodelens:
..    :datafile: numeros.txt
..    :enabledownload:
..    :stdin:

..    arquivo = open('numeros.txt','w')
..    for linha in range(1,101):
..        arquivo.write('%d\n' %linha)
..    arquivo.close()


+ Si ejecuta este programa, no aparecerá nada en la pantalla
+ Busque en el directorio c: \ Python3x el archivo  números.txt
+ El modo w crea el archivo si no existe, si existe será eliminado y reescrito

.. code-block:: python

   archivo = open('numeros.txt','w')
   for linea in archivo.readlines():
       print(linea)
   arquivo.close()


.. .. activecode:: Example7_2
..    :nocodelens:
..    :datafile: numeros.txt
..    :enabledownload:
..    :stdin:

..    arquivo = open('numeros.txt','w')
..    for linha in arquivo.readlines():
..        print(linha)
..    arquivo.close()

+ readlines genera una lista donde cada elemento es una línea de lectura
+ Los archivos de texto son simples y tienen un carácter de control en fin de saltar la línea
+ Si queremos eliminar este personaje del final, podemos usar print (linh a.rstrip ())


Pythonic way
============


.. code-block:: python

   with open('numeros.txt','r') as f:
    print(f.read())

.. .. activecode:: Example7_3
..    :nocodelens:
..    :datafile: numeros.txt
..    :enabledownload:
..    :stdin:

..    with open('numeros.txt','r') as f:
..     print(f.read())


+ El código anterior hace lo mismo para la forma pitónica.
+ En la diapositiva anterior vimos cómo los programadores normales leen
+ Python es genial, porque siempre puedes ir más profundo
+ Python es simple, pero difícil de agotar


Cripto
======


+ Lea message.txt y escriba crypto.txt con todas las vocales cambiadas por ‘*’

.. code-block:: python

    texto = open('mensagem.txt')
    salida = open('cripto.txt','w')
    for linea in texto.readlines():
      for letra in linea:
        if letra in 'aeiou':
          salida.write('*')
        else:
          saida.write(letra)
    texto.close()
    salida.close()


Validar dirección IP
====================


.. .. datafile:: IPS.txt
..    :edit: 
..    :hide: 

..    200.135.80.9
..    192.168.1.1
..    8.35.67.74
..    257.32.4.5
..    85.345.1.2
..    1.2.3.4
..    9.8.284.5
..    192.168.0.256


.. .. datafile:: Válidos.txt
..    Válidos



.. .. datafile:: Inválidos.txt
..    Inválidos 

.. code-block:: python

    def ip_ok(ip):
      ip = ip.split('.')
      for byte in ip:
        if int(byte) > 255:
          return False
      return True

    arq = open('IPS.txt')
    validos = open('Válidos.txt','w')
    invalidos = open('Inválidos.txt','w')
    for linea in arq.readlines():
      if ip_ok(linea):
        validos.write(linea)
      else:
        invalidos.write(linea)
    arq.close()
    validos.close()
    invalidos.close()


HTML
====


+ Las páginas web están escritas en HTML (lenguaje de marcado de hipertexto)
+ Las etiquetas HTML comienzan con <y terminan con>
+ La página web está escrita entre <html> y </html>, que es la etiqueta más grande nivel
+ Normalmente insertamos código javascript
+ Javascript no es un subconjunto de Java


.. code-block:: python

    archivo = open('hola.html','w',encoding = 'utf-8')
    archivo.write('''<!DOCTYPE html>
    <html lang="pt-AR">
    <head>
    <meta charset = "utf-8">
    <title>Titulo da Pagina</title>
    </head>
    <body>
    Hola!
    </body>
    </html>''')
    archivo.close()


+ Tenga en cuenta el parámetro de codificación utf-8; Sin ella las subidas no saldrán

Diccionarios
============


+ El diccionario en sí consiste en relacionar una clave con un valor específico
+ A diferencia de las listas, donde el índice es un número, los diccionarios usar sus claves como índice
+ Para agregar nuevos elementos que no necesito agregar, solo haga la sesión

    + Si la clave ya existe: el valor asociado cambia
    + Si la clave no existe: se agrega la nueva clave

.. codelens:: Example7_4
         
        d = {}
        d['a'] = 'alpha'
        d['o'] = 'omega'
        d['g'] = 'gama'
        print(d)
        print(d['a'])


.. activecode:: Example7_5
   :nocodelens:
   :stdin:

   d = {}
   d['a'] = 'alpha'
   d['o'] = 'omega'
   d['g'] = 'gama'
   print(d)
   print(d['x'])

.. codelens:: Example7_6
         
        d = {}
        d['a'] = 'alpha'
        d['o'] = 'omega'
        d['g'] = 'gama'
        print(d.keys())
        print(d.values())
        print('g' in d)
        print('x' in d)
        for chave in d:
          print(chave)

+ Haga un programa que lea el archivo alice.txt y cuente el número de ocurrencias de cada palabra en el texto. Nota: para conocer los personajes especiales use import string y use string.punctuation
+ `http://www.gutenberg.org/cache/epub/11/pg11.txt`_


.. code-block:: python

    arq = open('alice.txt')
    texto = arq.read()
    texto = texto.lower()
    import string
    for c in string.punctuation:
        texto = texto.replace(c, ' ')
    texto = texto.split()

    dic = {}
    for p in texto:
        if p not in dic:
            dic[p] = 1
        else:
            dic[p] += 1
    print ('Aparece Alice %s veces' %dic['alice'])
    arq.close()



Exercício Programa 1
====================


.. image:: img/TWP05_041.jpeg
   :height: 12.571cm
   :width: 9.411cm
   :align: center
   :alt: 


+ “La vida es como andar en bicicleta. Para mantener el equilibrio, debes seguir moviéndote ”. - Einstein

