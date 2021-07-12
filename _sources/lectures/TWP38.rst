==================
Revisión general 2
==================


.. image:: img/TWP10_001.jpeg
    :height: 14.925cm
    :width: 9.258cm
    :align: center
    :alt: 


¿Qué es un programa?
====================

+ Un conjunto detallado de instrucciones, paso a paso, que le dice a la 
  computadora qué hacer.
+ Si cambiamos el programa, la computadora hará algo diferente
+ La computadora permanece igual, pero el programa ha cambiado
+ Los programas se ejecutan
+ El software (programas) controla el hardware
+ El proceso de creación de software se llama programación
+ Un algoritmo es la receta, paso a paso, que resuelve un problema computacional


Lenguajes de programación
=========================

+ Los idiomas de bajo nivel son los más cercanos a la máquina
+ Ensamblador:

  + Cargue el número de variables A en la CPU
  + Cargue el número de variables B en la CPU
  + Agregar los dos números en la CPU
  + Almacenar el resultado en la variable C
+ Comando original en lenguaje de alto nivel: C = A + B
+ Los compiladores convierten el lenguaje de alto nivel al lenguaje de
  máquina informática específica
+ Los intérpretes analizan y ejecutan el programa instrucción por
  instrucción del lenguaje de máquina


Python
======

.. codelens:: cl_l38_1
         
    print("hola mundo!")
    print(2 + 3)
    print("2 + 3 = ", 2 + 3)


+ Por lo general, queremos repetir una serie de comandos varias veces
+ Una forma de hacer esto es usar una función

.. codelens:: cl_l38_2

    def amo_dos_puntos():
        print("Yo amo:!")
        print('Dos puntos == ":"')


    amo_dos_puntos()


+ ¡No olvide los paréntesis cuando llames a la función!
+ Si olvida los paréntesis, python devolverá la dirección en
  memoria donde se encuentra definida la función.

.. codelens:: cl_l38_3
         
    def amo_dos_puntos():
        print("Yo amo:!")
        print('Dos puntos == ":"')


    print(amo_dos_puntos)
    print(print)


+ Podemos poner parámetros en una función

.. codelens:: cl_l38_4
         
    def suma(a, b):
        return a + b


    print(suma("aguacate", "jabuticaba"))
    print(suma(2, 3))
    print(suma(3.14, 2.71))


+ Las funciones dejan de existir en cuanto sale del intérprete
  Python
+ Por lo tanto, los programas generalmente se componen de módulos, que son
  archivos guardados en el disco
+ Un módulo es un archivo de texto que contiene un programa de Python
+ Puede editar los módulos en un entorno de desarrollo, que
  resalta palabras reservadas, realiza identificación automática, etc.
+ Guardamos un programa llamado ``caos.py``
+ No olvides la extensión ``.py``
+ Podemos ejecutar el programa con el botón de ``Run``


Construcción del archivo
========================

+ Las líneas que comienzan con **"#"** se llaman comentarios
+ Están destinados a ser leídos por humanos y Python los ignora
+ Python omite todo el texto desde el **"#"** hasta el final de la línea

.. code-block:: python

   # Archivo caos.py
   # Un programa que ilustra la Teoria del caos

+ ``x`` es un ejemplo de una variable
+ En ``x`` asignaremos un valor al que se puede hacer referencia más adelante
+ Se mostrará el mensaje entre comillas y la respuesta se almacenará en ``x``

.. code-block:: python

   x = eval(input("Ingrese un número entre 0 y 1:"))

+ Hay comandos de bucle o ciclos como el comando ``for``
+ Un bucle o ciclo se usa para repetir un bloque de código varias veces
+ En este ejemplo, el siguiente bloque se repetirá 10 veces

.. code-block:: python

   for i in range(10):

+ Llamamos **sangría** a los espacios al comienzo de la línea 
+ En Python, la sangría delimita el bloque que se ejecutará
+ El cálculo ``3.9 * x * (1-x)`` se realizará en la CPU y se asignará a la variable
  ``x``

Resultado
=========

.. activecode:: ac_l38_1
    :language: python3
    :python3_interpreter: brython

    # Archivo caos.py
    # Un programa que ilustra la Teoria del caos
    print("Este programa ilustra el comportamiento caótico.")
    x = eval(input("Ingrese un número entre 0 y 1:"))
    for i in range(10):
        x = 3.9 * x * (1 - x)
        print("%2.3f" % x)


+ El programa de caos devuelve valores muy diferentes, incluso cuando la entrada es similar


Ejercicio
=========

+ Cambie el programa anterior para que pueda ingresar un valor e ingresar correr por 
  n veces en lugar del valor 10. Asigne ese valor a una variable llamada ``n``.
+ **Debe llamar su variable n para que su programa pase la prueba, de lo contrario dará error.**

.. activecode:: ac_l38_2
    :language: python3
    :python3_interpreter: brython

    # Archivo caos.py
    # Un programa que ilustra la Teoria del caos
    print("Este programa ilustra el comportamiento caótico.")
    x = eval(input("Ingrese un número entre 0 y 1:"))
    for i in range(10):
        x = 3.9 * x * (1 - x)
        print("%2.3f" % x)
    
    ====
    import unittest

    class myTests(unittest.TestCase):

        def testOne(self):

            self.assertEqual(n, i+1, "El número de ciclos no es el especificado por el usuario")

    myTests().testOne()
    print("-------------------------------------")
    print("Has aprobado el 100% de las pruebas.")

Resumen
=======

+ La descripción de una secuencia de pasos para resolver un problema se llama
  algoritmo computacional.
+ Los algoritmos son programas (software) que determinan que hará
  la computadora (hardware).
+ El proceso de creación de software se llama programación.


Recuerde
========

+ Los lenguajes de programación tienen una sintaxis formal
+ Las computadoras solo entienden el lenguaje de máquina
+ Python es un lenguaje interpretado de alto nivel
+ El intérprete de Python convierte los comandos instrucción por instrucción
  a lenguaje máquina


.. disqus::
    :shortname: pyzombis
    :identifier: lecture13
