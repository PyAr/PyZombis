
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

    archivo = open("numeros.txt", "w")
    for numero in range(1, 31):
        archivo.write("%d\n" % numero)
    archivo.close()


.. datafile:: numeros.txt
    :cols: 20
    :rows: 10
    :edit:


.. activecode:: ac_l23_1
    :nocodelens:
    :datafile: numeros.txt
    :enabledownload:

    Pruebe el programa anterior:

    ~~~~
    archivo = open("numeros.txt", "w")
    for numero in range(1, 31):
        archivo.write("%d\n" % numero)
    archivo.close()


+ Si ejecuta este programa, no aparecerá nada en la pantalla
+ Busque en el directorio c: \ Python3x el archivo  números.txt
+ El modo w crea el archivo si no existe, si existe será eliminado y reescrito

.. code-block:: python

    archivo = open("numeros.txt", "r")
    for linea in archivo.readlines():
        print(linea)
    archivo.close()


.. activecode:: ac_l23_2
    :nocodelens:
    :datafile: numeros.txt
    :enabledownload:
    
    Ya escribió en el archivo ``"numeros.txt"``. Ahora va a leer los datos que ha escrito: 

    ~~~~
    archivo = open("numeros.txt", "r")
    for linea in archivo.readlines():
        print(linea)
    archivo.close()

+ readlines genera una lista donde cada elemento es una línea de lectura
+ Los archivos de texto son simples y tienen un carácter de control en fin de saltar la línea
+ Si queremos eliminar este personaje del final, podemos usar print (linh a.rstrip ())


Pythonic way
============


.. code-block:: python

    with open("numeros.txt", "r") as f:
        print(f.read())

.. activecode:: ac_l23_3
    :nocodelens:
    :datafile: numeros.txt
    :enabledownload:

    with open("numeros.txt", "r") as f:
        print(f.read())


+ El código anterior hace lo mismo para la forma pitónica.
+ En la diapositiva anterior vimos cómo los programadores normales leen
+ Python es genial, porque siempre puedes ir más profundo
+ Python es simple, pero difícil de agotar


Crypto
======


.. datafile:: mensaje.txt
    :hide:

    Éste es el archivo de texto
    que usted está modificando 
    para que todas las vocales
    sean cambiadas por "*".


.. datafile:: crypto.txt
    :cols: 20
    :rows: 10
    :edit:


.. activecode:: ac_l23_4
    :nocodelens:
    :datafile: mensaje.txt, crypto.txt 

    Lea el archivo ``"mensaje.txt"`` y escriba el archivo ``"crypto.txt"`` el cual 
    debe tener el mismo texto del primer archivo, pero con las vocales cambiadas por 
    ``"*"``.

    ~~~~
    texto = open("mensaje.txt", "r")
    salida = open("crypto.txt", "w")

    for linea in texto.readlines():
        for letra in linea:
            if letra in "aeiou":
                salida.write("*")
            else:
                salida.write(letra)

    texto.close()
    salida.close()


Ejercicio
---------

.. activecode:: ac_l23_5
    :nocodelens:
    :datafile: mensaje.txt, crypto.txt

    Como puede observar, el código anterior no cambió algunas vocales 
    del archivo ``"mensaje.txt"``. Esto debido a las mayúsculas o a los acentos. 
    Su trabajo es modificar el programa anterior para que cambie **TODAS** las 
    vocales por ``"*"``. **Recuerde**: el método ``.lower()`` devuelve una cadena 
    con todos sus caracteres vueltos letras minúsculas.

    ~~~~
    texto = open("mensaje.txt", "r")
    salida = open("crypto.txt", "w")

    # Modifique el programa

    for linea in texto.readlines():
        for letra in linea:
            if letra in "aeiou":
                salida.write("*")
            else:
                salida.write(letra)

    texto.close()
    salida.close()

    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            archivo = open("crypto.txt", "r")
            text = """*st* *s *l *rch*v* d* t*xt* q** *st*d *st* m*d*f*c*nd* p*r* q** t*d*s l*s v*c*l*s s**n c*mb**d*s p*r "*"."""

            self.assertEqual(archivo.read().replace("\n", " ").rstrip(), text.strip(), f"Esperado: {text}")


    myTests().main()


Validar dirección IP
====================


.. datafile:: IPS.txt  
    :cols: 20
    :rows: 12

    200.135.80.9
    192.168.1.1
    8.35.67.74
    257.32.4.5
    85.345.1.2
    1.2.3.4
    9.8.284.5
    192.168.0.256


.. datafile:: Validos.txt
    :edit:
    :cols: 15
    :rows: 7

    Válidos


.. datafile:: Invalidos.txt
    :edit:
    :cols: 15
    :rows: 7

    Inválidos 


.. activecode:: ac_l23_6
    :nocodelens:
    :datafile: Validos.txt, Invalidos.txt

    def ip_ok(ip):
        ip = ip.split(".")
        for byte in ip:
            if int(byte) > 255:
                return False
        return True


    ips = open("IPS.txt")
    validos = open("Validos.txt", "w")
    invalidos = open("Invalidos.txt", "w")
    for linea in ips.readlines():
        if ip_ok(linea):
            validos.write(linea)
        else:
            invalidos.write(linea)

    ips.close()
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

    archivo = open("hola.html", "w")
    archivo.write(
        """<!DOCTYPE html>
    <html lang="pt-AR">
    <head>
        <meta charset = "utf-8">
        <title>Título de la Pagina</title>
    </head>
    <body>
        Hola!
    </body>
    </html>"""
    )
    archivo.close()


.. datafile:: hola.html
    :edit:
    :cols: 40
    :rows: 12


.. activecode:: ac_l23_7
    :nocodelens:
    :datafile: hola.html

    Pruebe el programa anterior.

    ~~~~
    archivo = open("hola.html", "w")
    archivo.write(
        """<!DOCTYPE html>
    <html lang="pt-AR">
    <head>
        <meta charset = "utf-8">
        <title>Título de la Página</title>
    </head>
    <body>
        Hola!
    </body>
    </html>"""
    )
    archivo.close()


Diccionarios
============


+ El diccionario en sí consiste en relacionar una clave con un valor específico
+ A diferencia de las listas, donde el índice es un número, los diccionarios usar sus claves como índice
+ Para agregar nuevos elementos que no necesito agregar, solo haga la sesión

    + Si la clave ya existe: el valor asociado cambia
    + Si la clave no existe: se agrega la nueva clave

.. codelens:: cl_l23_1
         
    d = {}
    d["a"] = "alpha"
    d["o"] = "omega"
    d["g"] = "gama"
    print(d)
    print(d["a"])


.. activecode:: ac_l23_8
    :nocodelens:
    :stdin:

    d = {}
    d["a"] = "alpha"
    d["o"] = "omega"
    d["g"] = "gama"
    print(d)


    # Esta línea va a resultar en error porque no hay 
    # una clave "x" en el diccionario
    print(d["x"])

.. codelens:: cl_l23_2
         
    d = {}
    d["a"] = "alpha"
    d["o"] = "omega"
    d["g"] = "gama"
    print(d.keys())
    print(d.values())
    print("g" in d)
    print("x" in d)
    for clave in d:
        print(clave)


.. datafile:: alice_archivo.txt
    :fromfile: _static/alice.txt
    :hide:


.. activecode:: ac_l23_9
    :nocodelens:
    :available_files: alice_archivo.txt
    :Language: python

    Haga un programa que lea el archivo ``alice_archivo.txt`` y cuente el número de ocurrencias de cada palabra en el texto. Nota: 
    para conocer los caracteres especiales use ``import string`` y use ``string.punctuation``.
    
    ~~~~
    import string

    archivo = open("alice_archivo.txt", "r")
    texto = archivo.read()
    texto = texto.lower()

    for c in string.punctuation:
        texto = texto.replace(c, " ")
    texto = texto.split()

    dic = {}
    for palabra in texto:
        if palabra not in dic:
            dic[palabra] = 1
        else:
            dic[palabra] += 1

    print("Aparece Alice %s veces" % dic["alice"])
    archivo.close()


Ejercicio Programa 1
====================


.. image:: img/TWP05_041.jpeg
    :height: 12.571cm
    :width: 9.411cm
    :align: center
    :alt: 


+ “La vida es como andar en bicicleta. Para mantener el equilibrio, debes seguir moviéndote ”. - Einstein
