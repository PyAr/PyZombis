====================
Hackeando con Python
====================


.. image:: img/TWP10_001.jpeg
    :height: 14.925cm
    :width: 9.258cm
    :align: center
    :alt:


Facebook Hacking
================


.. image:: img/TWP45_001.jpeg
    :height: 10.225cm
    :width: 14.801cm
    :align: center
    :alt: 


¿Los hackers no son "malvados"?
===============================

Facebook está dirigido por hackers. La mayoría de la gente piensa en un hacker 
como alguien que irrumpe en un sistema informático. Pero nosotros vemos esto 
como una filosofía. Aquí, los hackers asumen que siempre hay una forma mejor 
y más eficiente de resolver problemas ". facebook.com/careers (2012)


.. image:: img/TWP45_002.jpeg
    :height: 11.747cm
    :width: 17.638cm
    :align: center
    :alt: 


Obtener foto de perfil de Facebook
==================================

Para este ejercicio utilizaremos un intérprete de Python llamado Brython. 
Éste incluye un módulo llamado browser que, a diferencia de los ejercicios
anteriores, nos permitirá mostrar una página con elementos HTML 
(botones, cajas de texto, títulos, etc.), en lugar de solo mostrar impresiones 
en consola.
En el siguiente enlace puedes encontrar una guía de todos los elementos HTML
que Brython soporta: https://brython.info/static_doc/en/html.html

.. activecode:: ac_l45_1
    :language: python3
    :python3_interpreter: brython 

    Este ejercicio obtiene la foto de perfil según el nombre de usuario de un perfil público de Facebook.
    Pruébalo por tu propia cuenta!
   
    ~~~~
    from browser import document, html

    # Se crean dos secciones de divisiones con el elemento DIV.
    # Y se separan por un salto de linea con el elemento BR.
    document <= html.DIV(id="div_cajas_texto")
    document <= html.BR()
    document <= html.DIV(id='div_imagen')

    # El elemento H2 crea un título, INPUT crea la caja de texto y BUTTON crea un botón.
    # Todos estos se ponen dentro de la división con id="div_cajas_texto"
    document['div_cajas_texto'] <= html.H2("Ingrese un usuario de Facebook público")
    document['div_cajas_texto'] <= html.INPUT(id="input_usuario", placeholder="ArianaGrande")
    document['div_cajas_texto'] <= html.BUTTON("Mostrar foto",id="boton_mostrar")
   
    # Se crea la función que se le asignará al botón de mostrar foto.
    def obtener_foto(evento):
        # Se toma el texto que se escribe adentro de la caja con id="input_usuario" con .value
        nombre_usuario = document["input_usuario"].value
        # Se concatena el nombre de usuario con el enlace de la API de Facebook
        link = 'https://graph.facebook.com/' + nombre_usuario + '/picture?type=large'
        # Se agrega una imagen con fuente del link construido anteriormente mediante src
        # dentro de la división de id='div_imagen' 
        document['div_imagen'] <= html.IMG(src=link, id="img_obtenida") 

    # Por último se le ordena al botón de id="boton_mostrar" que ejecute la función obtener_foto.
    document["boton_mostrar"].bind("click", obtener_foto)
   

Obtener datos de Reddit
=======================

En este ejercicio vamos a acceder a Reddit para obetener datos como los de la siguiente imagen.

.. image:: img/TWP45_050.png
    :height: 9.39cm
    :width: 23.344cm
    :align: center
    :alt:

.. activecode:: ac_l45_2
    :nocodelens:
    :language: python

    import urllib.request
    import json
    
    # La url de Reddit a la que accederemos
    url = "https://cors.bridged.cc/http://www.reddit.com/r/Python/.json"
    resp = urllib.request.urlopen(url).read()
    
    # La respuesta se da en formato json, se debe transformar a  
    # un diccionario de Python con json.loads
    texto = json.loads(resp)

    # Puede ver los datos que se recibieron si quita el comentario de abajo
    # print(texto)
    
    # Buscamos e imprimimos los datos que queremos
    for item in texto["data"]["children"]:
        doc = item["data"]
        print(doc["title"])
        print("#comments: %d" % doc["num_comments"])
        print(doc["url"])
        print()


Probando la API de TasteDive
============================

TasteDive es una herramienta que:

    le ayuda a descubrir nueva música, películas, programas de televisión, libros, autores, juegos, 
    podcasts y personas con intereses compartidos.
    -- TasteDive

En el siguiente ejercicio usaremos la API de TasteDive para buscar obras o artistas similares a otra de nuestra
elección.
La documentación de la API de `TasteDive <https://tastedive.com/read/api>`_.

.. activecode:: ac_l45_3
    :nocodelens:
    :language: python

    En este caso, utilizaremos la librería ``requests`` para hacer la solicitud a la API. La url base 
    es ``"https://tastedive.com/api/similar"``. A esta url se le va a pasar un parámetro ``q`` con el 
    valor de la artista Ariana Grande. Al final la url se va a ver de la siguiente forma: ``"https://tastedive.com/api/similar?q=ariana+grande"``.
    Note que después de la url base se escribe un ``?`` para indicar que siguen los parámetros.

    ~~~~
    import requests
    import json

    api_url = "https://tastedive.com/api/similar"
    proxy = "https://cors.bridged.cc/"

    # Los parámetros que se le pasaran a la url los escribimos dentro de un diccionario
    parametros = {"q": "ariana grande"}

    # Solicitamos a la api los datos
    respuesta = requests.get(proxy + api_url, params=parametros)

    # Ahora imprimimos la url
    print(respuesta.url)
    print()

    # Transformamos los datos de formato json a Python
    datos = json.loads(respuesta.text)

    print(datos)
    

En el ejemplo anterior pudo apreciar que la API regresa un texto, que si lo pasamos por ``json.loads`` 
se transforma a un diccionario de Python. Sin embargo, no es del todo legible. Esto se puede solucionar con 
``json.dumps``.

.. activecode:: ac_l45_4
    :language: python3
    :python3_interpreter: brython
    

    Ahora vamos a solicitar información de la banda Coldplay. Esta vez vamos a imprimir los datos de forma 
    que sean legibles. Esto lo hacemos con el argumento ``indent`` de la función ``dumps`` de ``json``.
    Vamos a usar ``urllib`` para hacer la solicitud.

    ~~~~
    import urllib.request
    import urllib.parse
    import json

    api_url = "https://tastedive.com/api/similar?"
    proxy = "https://cors.bridged.cc/"
    # La siguiente línea es para los parámetros de la url.
    parametros = urllib.parse.urlencode({"q": "coldplay"})

    solicitud = urllib.request.urlopen(proxy + api_url + parametros)
    datos = json.loads(solicitud.read())

    # Imprimimos los datos de forma legible para un usuario
    print(json.dumps(datos, indent=4))

    # Podemos ver que la api arrojó 20 resultados relacionados con
    # la solicitud
    print(len(datos["Similar"]["Results"]))


|

El siguiente ejercicio viene con calificación automática.

.. activecode:: ac_l45_5
    :nocodelens:
    :language: python

    Ahora va a preguntar a TasteDive por la película Coco. Entonces el diccionario ``parametros`` debe tener el 
    valor ``"Coco"`` asignado a la llave ``"q"``. Además, esta vez solo queremos 5 resultados en vez de 20. Para 
    esto existe un parámetro llamado ``"limit"``, que puede ser asignado al número de resultados que se necesiten. 
    Otro parámetro que le pasará a la url será ``"info"`` y tendrá el valor de 1. Lo que hará esto es que los 
    resultados vendrán con un texto extra con información sobre la película.

    Primero, va a solicitar a la API lo descrito anteriormente, y guardará esto en la variable ``solicitud``. Después 
    asignará los datos a la variable ``datos``. Después va asignar a la variable ``resultados`` el número de 
    resultados que arrojó la solicitud (como se hizo en el ejemplo anterior). Como pusimos un límite, este número 
    debe coincidir con el límite.

    Ahora va a crear la lista ``peliculas_similares``. Dentro de ``datos`` usted tiene un diccionario de diccionarios 
    y listas. Lo que hará será buscar los conjuntos dentro de los cuales se encuentren los nombres de las películas 
    similares a Coco, y va a agregar a ``peliculas_similares`` el nombre de esas películas. En total deben ser 5. 
    **Pista**: los datos de las películas se encuentran dentro de ``datos["Similar"]["Results"]``, y la llave para 
    acceder a ellas es ``"Name"``.

    Por último, va a buscar el número de veces que aparece la palabra ``"Pixar"`` en los textos de información de las 
    películas relacionadas a Coco. Ese número lo va a guardar en la variable ``pixar``. **Pista**: ``"wTeaser"`` es la 
    llave que guarda el texto. Esta llave se encuentra en el mismo diccionario que el nombre de las películas.

    ~~~~
    import requests
    import json

    api_url = "https://tastedive.com/api/similar"
    proxy = "https://cors.bridged.cc/"

    # Agregue los parámetros
    parametros = {}
    
    # Complete el código
    solicitud = 
    datos = 

    # Asigne la variable resultados 
    
    # print(f"resultados: {resultados}")
    
    # Cree peliculas_similares
    # Utilice un ciclo for para encontrar las peliculas similares y agregarlas
    # a la variable correspondiente

    # print(f"Pelis: {peliculas_similares} len: {len(peliculas_similares)}")

    pixar = 0
    # Busque el número de ocurrencias de "Pixar" dentro de los datos

    # print(f"Pixar: {pixar}")

    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(
                solicitud.url,
                "https://cors.bridged.cc/https://tastedive.com/api/similar?q=Coco&limit=5&info=1",
                "Probando que la url sea: https://cors.bridged.cc/https://tastedive.com/api/similar?q=Coco&limit=5&info=1",
            )
            self.assertEqual(resultados, 5, "Probando que resultados esté asignado correctamente.")
            self.assertEqual(len(peliculas_similares), 5, "Probando que peliculas_similares sean: 5")
            self.assertEqual(
                peliculas_similares,
                ["Toy Story 3", "Finding Nemo", "Inside Out", "Spirited Away", "Monsters, Inc."],
                "Esperado: ['Toy Story 3', 'Finding Nemo', 'Inside Out', 'Spirited Away', 'Monsters, Inc.']",
            )
            self.assertEqual(pixar, 5, "Probando que pixar esté asignado correctamente.")


    myTests().main()


Probando la API de University Domains
=====================================

`University Domains and Names Data List & API <https://github.com/Hipo/university-domains-list>`_ es una API que 
contiene  dominios, nombres y países de la mayoría de las universidades del mundo.

.. activecode:: ac_l45_6
    :language: python3
    :python3_interpreter: brython

    Veamos un ejemplo de cómo usar esta API. Le vamos a pedir las universidades de Turquía que tengan
    en su nombre la palabra **"middle"**.

    ~~~~
    import urllib.request
    import urllib.parse
    import json

    api_url = "https://cors.bridged.cc/http://universities.hipolabs.com/search?"
    parametros = urllib.parse.urlencode({"name": "middle", "country": "turkey"})

    solicitud = urllib.request.urlopen(api_url + parametros)
    datos_json = json.loads(solicitud.read())

    print(json.dumps(datos_json, indent=4))


.. activecode:: ac_l45_7
    :nocodelens:
    :language: python

    Busquemos todas las universidades en Colombia.

    ~~~~
    import requests
    import json

    api_url = "https://cors.bridged.cc/http://universities.hipolabs.com/search"
    parametros = {"country": "colombia"}

    solicitud = requests.get(api_url, params=parametros)
    solicitud = json.loads(solicitud.text)

    universidades = []

    for universidad in solicitud:
        universidades.append(universidad["name"])

        print(universidad["name"])

    print("----------------------------------------------")
    print(f"Hay {len(universidades)} universidades registradas")


Aprendizajes
============

+ Accedemos a **APIs** para buscar información que nos es útil.
+ Podemos solicitar la información con dos librerías de Python: ``urllib`` o ``requests``.
+ La librería ``json`` de Pyhton nos ayuda a transformar la respuesta de la API en un objeto
  de Python, ya sea diccionario o lista, con el método ``loads``, mientras que el método ``dumps`` 
  hace lo contrario; transforma un objeto de Python en una cadena con formato JSON. 
+ El método ``dumps`` de ``json`` es útil si queremos visualizar la respuesta de una API de manera 
  legible. Esto se logra con el argumento ``indent``.


|

.. disqus::
    :shortname: pyzombis
    :identifier: lecture16
