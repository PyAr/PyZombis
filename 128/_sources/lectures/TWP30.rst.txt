.. role:: black
.. role:: blue
.. role:: red
.. role:: green
.. role:: purple
.. role:: yellow


==================
Revisión general 1
==================


.. image:: img/TWP10_001.jpeg
    :height: 14.925cm
    :width: 9.258cm
    :align: center
    :alt: 


Terminamos el primer libro
==========================

.. image:: img/TWP30_001.jpeg
    :height: 14.384cm
    :width: 10cm
    :align: center
    :alt: 


Empecemos el segundo
====================

.. image:: img/TWP30_002.jpeg
    :height: 13.801cm
    :width: 13.801cm
    :align: center
    :alt: 


Lo que aprendimos
=================

+ Variables y entrada de datos
+ Condiciones
+ Repeticiones
+ Listas
+ Strings
+ Funciones
+ Archivos
+ Diccionarios
+ Clases y objetos


¿Qué aprenderemos en el segundo?
================================

+ ¡Las mismas cosas!
+ Hacer juegos
+ Acceso a sitios web para ver el precio del café
+ Uso de interfaces gráficas
+ Manejo de excepciones
+ Uso de la base de datos de surfistas
+ Mezcla de canciones


Encontrando tu camino
=====================

+ Si solo usa el software de otros, siempre estará limitado a lo que
  lo que otras personas piensan que quieres hacer
+ Escribe tus propios programas
+ ¿Quieres ser programado o ser el programador?
+ Puedes tomar el control


Adivinando números
==================

.. activecode:: ac_l30_1
    :nocodelens:
    :stdin:

    print("Bienvenido!")
    g = input("Ingrese un número: ")
    numero = int(g)
    if numero == 42:
        print("¡Ganaste!")
    else:
        print("¡Tú perdiste!")
    print("¡Fin del juego!")
    

Las partes de tu programa
=========================

Ahora analizemos las partes del código anterior

.. raw:: html

   <div>
        <style>
            div.code-example {border: 1px ; border: 1.5px solid #b3b3b3; padding: 15px;
                border-radius: 4px; background-color:rgb(226, 226, 226)}
            code.code-example {font-size: 20px;background-color:transparent}
            .black {color:black}
            .blue {color:#3300AA}
            .red {color:#AA1111}
            .green {color:#116644}
            .purple {color:#770088}
            .yellow {background:yellow}
        </style>
        <div class="code-example">
            <code class="code-example">
                <text class="blue">print</text><text class="black">(</text><text class="red">"Bienvenido!"</text><text class="black">)</text><br/>
                <text class="black">g = </text><text class="blue">input</text><text class="black">(</text><text class="red">"Ingrese un número: "</text><text class="black">)</text><br/>
                <text class="black">numero = </text><text class="blue">int</text><text class="black">(g)</text><br/>
                <text class="purple">if</text> <text class="black">numero == </text><text class="green">42</text><text class="black">:</text><br/>
                <text class="yellow">&nbsp;&nbsp;&nbsp;&nbsp;</text><text class="blue">print</text><text class="black">(</text><text class="red">"¡Ganaste!"</text><text class="black">)</text><br/>
                <text class="purple">else</text><text class="black">:</text><br/>
                <text class="yellow">&nbsp;&nbsp;&nbsp;&nbsp;</text><text class="blue">print</text><text class="black">(</text><text class="red">"¡Tú perdiste!"</text><text class="black">)</text><br/>
                <text class="blue">print</text><text class="black">(</text><text class="red">"¡Fin del juego!"</text><text class="black">)</text><br/>
            </code>
        </div>
    </div>

Tenga en cuenta que en el siguiente programa:

+ Las partes en azul son :blue:`funciones` (ej: **print()**) 
+ Las partes en rojo son :red:`strings o cadenas` (ej: **"¡Bienvenido!"**)
+ Las partes en verde son :green:`números` (ej: **42**)
+ Las partes en púrpura son :purple:`directivas` (ej: **if** y **else**)
+ Las partes en amarillo son :yellow:`indentaciones o sangría` ("Cada uno en su bloque")
+ Las partes en negro son :black:`variables` (ej: **g** y **numero**)
+ El símbolo de igual (``=``) es el operador de asignación y se usa para asignar valores a variables (ej: ``numero = int(g)`` La variable 'número' recibe un entero de g))
+ El símbolo de doble igual (``==``) es el operador de comparación y se usa para comparar dos variables o valores (ej: ``numero == 42`` ¿el número es igual a 42?)
+ El símbolo de dos puntos (``:``) es el operador que abre un bloque de indentación. Va después de las directivas (ej: ``if numero == 42:`` y ``else:``) 


¿Qué tipos de errores?
=======================

+ Errores de sintaxis: un lenguaje de programación es formal, diferente de los lenguajes naturales, tiene una sintaxis rígida
+ Errores de tiempo de ejecución
+ Errores semánticos (más difíciles de encontrar)


¿Cómo encontrar y manejar errores?
==================================

+ Sintáctica: mucha atención y práctica
+ En tiempo de ejecución: manejo de excepciones
+ Semántica: prueba de escritorio o simulación


Entonces, ¿cómo ejecutas tu código?
===================================

+ Hay dos cosas para ejecutar el programa de adivinación: un editor y un intérprete
+ El editor guarda el código escrito en un archivo en el disco

.. image:: img/TWP30_004.png
    :height: 4.867cm
    :width: 10.979cm
    :align: center
    :alt: 

+ Las computadoras no pueden procesar texto porque solo entienden binario (ceros y unos)
+ El intérprete convierte el código fuente en un archivo binario para la computadora

.. image:: img/TWP30_005.png
    :height: 5.921cm
    :width: 13.2cm
    :align: center
    :alt: 


+ El intérprete de Python funciona en dos modos: interactivo y de edición.

+ El modo interactivo es ideal para probar comandos y obtener respuestas instantáneas

+ Sin embargo, el modo de edición es el más utilizado para desarrollar los programas.

   + Los nombres de archivo generalmente terminan con ".py"
   + Si usa otra extensión, perderá colores ...

+ Un programa es más que una lista de comandos


.. codelens:: cl_l30_1

    print("¡Bienvenido a mi programa!")
    print("¡Vuelva siempre!")
   
.. image:: img/TWP10_002.jpg
    :height: 5.524cm
    :width: 22.859cm
    :align: center
    :alt: 


El programa es una red de carreteras.
=====================================

.. image:: img/TWP10_004.png
    :height: 12.571cm
    :width: 18.78cm
    :align: center
    :alt: 


En la red eliges tu camino
==========================

.. image:: img/TWP10_009.jpg
    :height: 9.754cm
    :width: 22.859cm
    :align: center
    :alt: 


Consejos
========

+ El programa solo dice si lo hiciste bien o no
+ Para ayudarlo a decir "Alto" o "Bajo" si la persona está equivocada
+ ¿Cómo se vería el camino?


.. image:: img/TWP30_006.jpg
    :height: 5.814cm
    :width: 10.8cm
    :align: center
    :alt: 

.. activecode:: ac_l30_2
    :nocodelens:
    :stdin:

    print("Bienvenido")
    g = input("Ingrese un número:")
    numero = int(g)
    if numero == 42:
        print("¡Ganaste!")
    else:
        if numero > 42:
            print("Alto")
        else:
            print("Bajo")
    print("Fin del juego")


A los usuarios todavía no les gusta
===================================

.. image:: img/TWP30_009.jpg
    :height: 12.571cm
    :width: 7.946cm
    :align: center
    :alt: 


Repeticiones
============

.. image:: img/TWP15_001.jpg
    :height: 15.602cm
    :width: 16.801cm
    :align: center
    :alt: 


.. activecode:: ac_l30_3
    :language: python3
    :python3_interpreter: brython 

    from browser import document as doc
    from browser import html
    from browser import timer

    print("¡Bienvenido!")
    numero = 0

    doc <= html.DIV(id="div_juego")

    # Creamos el botón para jugar
    doc["div_juego"] <= html.BUTTON("Jugar", id="btn_jugar")

    # Definimos lo que hará el boton cuando sea apretado
    def adivinar():
    
        global numero
        numero = int(input("Adivine el número: "))
        if numero == 42:
            print("¡Ganaste!")
        else:
            if numero > 42:
                print("Alto")
            else:
                print("Bajo")
        
        if numero != 42:
            # Si el número no se adivinó, se repite la función después de
            # 3 segundos 
            timer.set_timeout(adivinar, 3000)

    
    def empezar(ev):
        adivinar()
    
    # Cuando el botón sea apretado, llamará a la función empezar, 
    # que a su vez llamará a adivinar.
    doc["btn_jugar"].bind("click", empezar)


.. image:: img/TWP15_007.png
    :height: 14.804cm
    :width: 22.181cm
    :align: center
    :alt: 


A los usuarios todavía no les gusta
====================================


.. image:: img/TWP30_0092.jpg
    :height: 12.571cm
    :width: 7.946cm
    :align: center
    :alt: 


Sortear el número a adivinar
============================


.. activecode:: ac_l30_4
    :language: python3
    :python3_interpreter: brython

    from browser import document as doc
    from browser import html
    from browser import timer
    from random import randint

    print("¡Bienvenido!")
    azar = randint(1, 100)
    numero = 0

    doc <= html.DIV(id="div_juego_2")

    # Creamos una caja de texto donde ingresar el número que queramos
    doc["div_juego_2"] <= html.INPUT(id="inp_adivinar", placeholder="Adivine el número", type="number")
    # Creamos el botón para adivinar
    doc["div_juego_2"] <= html.BUTTON("Enviar adivinanza", id="btn_adivinar") + html.BR()

    def confirmar_adivinanza(e):
        global numero
        numero = int(doc["inp_adivinar"].value)

        if numero == azar:
            print("¡Ganaste!")
            print("¡Fin del juego!")
            # Si el número es adivinado, el botón desaparece y el juego 
            # termina
            doc["btn_adivinar"].style.display = "none"
        else:
            if numero > azar:
                print("Alto")
            else:
                print("Bajo")

    # Al apretar el botón, invoca a la función confirmar_adivinanza
    doc["btn_adivinar"].bind("click", confirmar_adivinanza)


¡Ahora sí!
==========

.. image:: img/TWP30_012.jpg
    :height: 10.873cm
    :width: 14.154cm
    :alt: 


Resumen
=======

+ ¡Creaste un juego!
+ Los comandos hacen cosas
+ Las condicionales deciden las cosas
+ Los ciclos repiten cosas
+ Las condiciones te ayudan a decidir si algo es verdadero o falso
+ La asignación define un nombre para un valor.


Herramientas de Python
======================

+ Condiciones: ``if``, ``elif``, ``else``
+ Ciclo: ``while``
+ Operador de asignación: ``=``
+ Operador de igualdad: ``==``
+ Operador diferente de: ``!=``
+ Mostrar un mensaje: ``print()``
+ Leer una entrada del usuario: ``input()``
+ Convertir a entero: ``int()``
+ Sortear un entero: ``randint()``

Estas son algunas de las herramientas. ¡Existen muchas más!

Ahora solo faltan tus ejercicios
================================

.. image:: img/TWP05_041.jpeg
    :height: 12.571cm
    :width: 9.411cm
    :align: center
    :alt: 


.. raw:: html

    <br/>


“La vida es como andar en bicicleta. Para mantener el equilibrio, debes seguir moviéndote ”. - Einstein
