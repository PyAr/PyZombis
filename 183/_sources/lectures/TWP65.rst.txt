==============================
Introducción al desarrollo web
==============================


.. image:: img/TWP10_001.jpeg
   :height: 14.925cm
   :width: 9.258cm
   :align: center
   :alt: 


Solicitudes y respuestas
========================


.. image:: img/TWP65_001.jpg
   :height: 15.139cm
   :width: 16.053cm
   :align: center
   :alt: 


.. image:: img/TWP65_002.jpg
   :height: 16.017cm
   :width: 15.601cm
   :align: center
   :alt: 




Desarrollo web
==============



+ "Python: el único lenguaje con más marcos web que palabras clave"
+ Frameworks: Plone, Django, Web2py, Pyramid
+ Micro Frameworks: CherryPy, Botella, Frasco
+ WSGI (interfaz de puerta de enlace del servidor web)

  + Patrones de acceso y comunicación entre servidores web y aplicaciones Python
  + No es J2EE ;-)


Web2py
======

+ InfoWorld: best full-stack Python framework
+ Bossie: Best Open Source Development Software
+ MVC:

  + Modelo: datos
  + Controladores: reglas de negocio
  + Vistas: presentación

+ Autocontido == full-stack framework
+ Seguro
+ DAL (Data Access Layer)
+ Deploy rápido e distribuição fácil


Web2py
======



+ Princípios Python

  + DRY – Don’t Repeat Yourself
  + Debe haber solo una forma obvia de hacer algo
  + Explícito es mejor que implícito (no sigue)



Hello World
===========


+ Habilite la opción "No usar servidor proxy para servidores locales"
+ web2py.exe en el directorio descomprimido
+ Establecer una contraseña de administrador
+ Haga clic en "Interfaz administrativa"
+ Ingrese la contraseña que configuró
+ Tres opciones: administrador, ejemplos y bienvenida
+ Luego aprenderemos a usar electrodomésticos


Hello World
===========


+ Nueva aplicación básica: "Hola Mundo"
+ Edite el controlador default.py

.. code-block:: python


  def index():
    return "Mi primer mensaje"


+ ctrl+S
+ Regrese y haga clic en Hello World


Hello World
===========



+ Edite el controlador nuevamente default.py

.. code-block:: python
    
  def index():
    return dict(msg="FATEC SJC")


+ ctrl+S
+ Ahora editemos la vista default/index


Hello World
===========



+ Borra todo y cambia la vista default/index

.. code-block:: html


  <html>

    <head></head>

    <body>

      <h1>{{=msg}}</h1>

    </body>

  </html>


+ ctrl+S


Cuentas visitantes
==================


+ Editar controlador default.py


.. code-block:: python
  

  def index():

    if not session.counter:

      session.counter = 1

    else:

      session.counter += 1

    return dict(msg="Python Zumbi", cont=session.counter)



Cuntar visitantes
=================



+ Vista default/index

.. code-block:: html


  <html>

    <head></head>

    <body>

      <h1>{{=msg}}</h1>

      <h2>Visitantes: {{=cont}}</h2>

    </body>

  </html>


+ Diferentes visitantes tienen diferentes contadores


Dos paginas
===========



+ Crearemos dos páginas
+ El primero pide el nombre en un formulario
+ Luego seremos redirigidos a la segunda
+ El segundo dará un saludo con el nombre


Dos paginas 
===========



+ IIncluir en el controlador default.py

.. code-block:: python


  def primeira():

    return dict()

  def segunda():

    return dict()



Dos paginas
===========


+ Crea la visión default/primeira


{{extend 'layout.html'}}

Qual é o seu nome?

<form action="segunda">

<input name="nome" />

<input type="submit" />

</form>


Dos paginas
===========



+ Crea la visión default/segunda




{{extend 'layout.html'}}

<h1>Olá {{=request.vars.nome}}</h1>

Accesorios
==========



+ `Web2py Appliances <http://www.web2py.com/appliances>`_
+ Email Contact Form
+ Sudoku Solver
+ Train Counter Game
+ Quiz Builder
+ EcardsOnMap (es grande...)


.. disqus::
   :shortname: pyzombis
   :identifier: lecture24

