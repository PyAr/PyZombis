============================
Variables y entrada de datos
============================


.. image:: img/TWP05_001.jpeg
   :height: 14.832cm
   :width: 9.2cm
   :align: center
   :alt: 

Primer programa
=================


+ Este programa tiene solo una línea de código
+ Tenga en cuenta que las comillas no aparecen en la salida
+ Necesitamos marcar o limitar el comienzo y el final de nuestros mensajes 
  con un símbolo, en este caso, las comillas

.. code-block:: python

    >>> print ("¡hola mundo!")
    ¡hola mundo!

.. codelens:: Example_1
    
    print("primer mensaje")


Primer mensaje de error
=========================

+ Las letras mayúsculas y minúsculas son diferentes
+ ¿Notaste que la impresión no es púrpura?

.. code-block:: python

    >>> Print ("¡hola mundo!")
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    NameError: name 'Print' is not defined

Primer mensaje de error
=========================

+ Si no usamos comillas, la computadora interpretará nuestro mensaje
  como un comando de Python, generando un error de sintaxis
+ ¿Notaste que el mensaje no es verde?


.. code-block:: python

    >>> print (hola mundo)
      File "<stdin>", line 1
        print (hola mundo)
                        ^
    SyntaxError: invalid syntax

Primer mensaje de error
=========================

+ En la versión de Python que usamos, los paréntesis no son opcionales al usar
  print

.. code-block:: python

    >>> print "hola mundo"
      File "<stdin>", line 1
        print "hola mundo"
              ^
    SyntaxError: invalid syntax

Primer mensaje de error
=========================

+ Los espacios iniciales tienen un significado en Python que veremos
  más adelante, en este caso genera nuevamente un error de sintaxis


.. code-block:: python

    >>>   print("primer mensaje!")
      File "<stdin>", line 1
        print "hola mundo"
      ^      
    SyntaxError: unexpected indent


Intérprete de Python
====================

+ El intérprete es un programa que acepta comandos escritos en Python
  y los ejecuta línea por línea
+ El intérprete verifica que hayamos escrito el programa correctamente,
  mostrando mensajes de error si hay un problema
+ Hay dos modos del intérprete de Python: modo interactivo y
  edición
+ En los ejemplos anteriores usamos el modo interactivo
+ Una ventaja del modo interactivo es poder probar los comandos y obtener
  la respuesta al instante


Modo de edición
====================


.. image:: img/TWP05_007.png
   :height: 11.961cm
   :width: 22.859cm
   :align: center
   :alt: 


Ejecutar el programa
====================


.. image:: img/TWP05_008.png
   :height: 12.435cm
   :width: 22.859cm
   :align: center
   :alt: 


Guardar el programa
====================


.. image:: img/TWP05_009.png
   :height: 12.033cm
   :width: 22.859cm
   :align: center
   :alt: 


Mismo resultado
================


.. image:: img/TWP05_010.png
   :height: 13.843cm
   :width: 19.844cm
   :align: center
   :alt: 


Precauciones al escribir programas
==================================



+ Las letras mayúsculas y minúsculas son diferentes
+ Las comillas son muy importantes y no deben pasarse por alto. Cada vez
  que abres comillas, no olvides cerrarlas
+ Los paréntesis no son opcionales en Python. Cada paréntesis abierto debe
  estar cerrado
+ Los espacios son muy importantes. El lenguaje Python se basa en
  cantidad de espacios en blanco antes del comienzo de cada línea para
  realizar diferentes operaciones.
+ Esto se le conoce como identación


Calculadora en el intérprete
============================


.. codelens:: Example_Calculator
    
    print(2+3)
    print(5-3)
    print(10-4+2)
    print(2*10)
    print(10/4)
    print(2**3)
    print(10%3)
    print(16%7)


Conceptos sobre variables y asignación
======================================



+ Las variables se utilizan para almacenar valores y nombrar
  un área de la memoria de la computadora
+ El símbolo para la asignación es el mismo ``=``


.. codelens:: Example_6_1
    
    a = 2
    b = 3
    print(a+b)

Conceptos sobre variables y asignación
======================================

+ Función f (x), donde f es el nombre de la función y x es un parámetro
+ En el ejemplo anterior, ``print`` es el nombre de la función y ``a + b``, el valor

Conceptos sobre variables y asignación
======================================


+ También podemos usar el modo interactivo
+ Las dos primeras líneas no envían nada a la pantalla, así que
  solo se muestra el resultado de la tercera línea

.. codelens:: Example_6_2
    
    a = 2
    b = 3
    print(a+b)

Conceptos sobre variables y asignación
======================================


+ Quizás se pregunte ¿por qué creamos dos variables, ``a`` y
  ``b``, para sumar dos números?
+ Podríamos haber logrado el mismo resultado de varias maneras.


.. codelens:: Example_Calculation
    
    print(2+3)
    print(5)


Conceptos sobre variables y asignación
======================================

+ ¿Cuál es la diferencia entre el primer modo y los dos últimos?
+ El primer caso incluye la lógica que usamos para obtener el
  resultado
+ De este modo, hacemos explícito el algoritmo que utilizamos mentalmente para
  resolver este problema
+ En los últimos dos casos, solo ordenamos a la computadora que imprima
  algo concreto, sin dejar en claro la lógica para llegar a ese resultado


Nombres de variables
====================

+ En Python, los nombres de las variables deben comenzar con un
  letra o guión bajo ``_``
+ ¡Acentos están permitidos!
+ Ejemplo de nombres válidos: ``precio``, ``acción``, ``salario``, ``_x``,
  ``año_2011``, ``salario`` y ``promedio``

.. code-block:: python

    >>> a = 2
    >>> precio = 500
    >>> print(a)
    2
    >>> print(precio)
    500

+ Ejemplo de nombres no válidos: ``3x``, ``1er``, ``@``, ``$``

.. code-block:: python

    >>> 3x = "texto"
      File "<stdin>", line 1
        3x = "texto"
        ^
    SyntaxError: invalid syntax

Tipos de variables
==================


.. image:: img/TWP05_015.png
   :height: 8.507cm
   :width: 16.595cm
   :align: center
   :alt: 

Variables numéricas
===================


+ Los enteros no tienen decimales: ``42``, ``-7``
+ Los valores del tipo entero en Python se llaman ``int``
+ Los números en coma flotante tienen decimales: ``1.0``, ``3.1415``,
  ``1234.56``
+ Tenga en cuenta que ``1.0``, incluso teniendo cero en la parte decimal, es un número en
  punto flotante
+ Los valores de tipo coma flotante en Python se llaman ``float``.


Representación de valores numéricos
===================================


+ Internamente todos los números son representados con el
  sistema binario
+ Este sistema permite solo los dígitos ``0`` o ``1``
+ Los números en punto flotante pueden no tener una correcta representación
  en el sistema binario
+ Tecleando en el intérprete ``3 * 0.1`` tendremos un ejemplo


.. codelens:: Example_Multiplcation

    print(3 * 0.1)


Variables de tipo lógico
========================


+ Podemos almacenar verdadero y falso 
+ Las variables de este tipo se llaman lógicas o booleanas
+ En Python podemos inicializar variables de este tipo con ``True`` o ``False``
+ Tenga en cuenta que la T y la F están en mayúsculas, cualquier otra forma genera
  un error de sintaxis


Operadores relacionales
=======================

.. table:: **Operadores relacionales**
   :widths: auto

   ======== ============== ==============================
   Operador Operación      Símbolo matemático equivalente
   ======== ============== ==============================
   ==       igual          =
   >        mayor que      >
   <        menor que      <
   !=       diferente      <>
   >=       mayor o igual  >=
   <=       menor o igual  <=
   ======== ============== ==============================


Ejemplos:
=========


.. codelens:: Example_7
    
    a = 1
    b = 5
    c = 2
    d = 1
    print(a == b)
    print(b>a)
    print(a<b)
    print(a == d)
    print(b >= a)
    print(c <= b)
    print(d != a)
    print(d != b)

Ejemplo importante
==================



+ >= o <= para valores iguales




.. codelens:: Example_8
    
    print(5 >= 5)
    print(5 <= 5)


Ejemplo
=======



+ Podemos usar operadores relacionales para inicializar variables del
  tipo lógico



.. codelens:: Example_9
    
    nota = 8
    promedio = 6
    aprobado = nota > promedio
    print(aprovado)


Operadores Lógicos
==================



+ Tenemos tres operadores básicos: ``not``, ``and`` y ``or``

Uso del operador ``not``
************************

.. codelens:: Example_10
    
    print(not True)
    print(not False)


Uso del operador ``and``
************************

.. codelens:: Example_11
    
    print(True and True)
    print(True and False)
    print(False and True)
    print(False and False)


Uso del operador ``or``
************************

.. codelens:: Example_12
    
    print(True or True)
    print(True or False)
    print(False or True)
    print(False or False)


Expresiones Lógicas
===================


+ Podemos combinar los operadores lógicos para formar expresiones lógicas complejas
+ El orden de evaluación no es> y> o




Ejemplo
=======



+ La condición para otorgar un préstamo de compra de una motocicleta son: tener un
  salario mayor que $1,000.00 y ser mayor de 18 años. Compruebe si José puede obtener el
  préstamo

.. codelens:: Example_13
    
    salario = 500.0
    edad = 20
    print(salario > 1000 and edad > 18)


Ejemplo
=======

+ Verifique si un estudiante aprobó dado que obtuvo una puntuación promedio de 5.8 en
  el programa de ejercicios y obtuvo un puntaje promedio de 7 en las pruebas

.. codelens:: Example_14
    
    ep = 5.8
    p = 7
    aprobado = ep >= 6 and p >= 6
    print(aprobado)


Variale String
================

+ Almacene cadenas como nombres y texto en general
+ Llamamos cadenas a una secuencia de símbolos como
  letras, números, signos de puntuación, etc.
+ Para diferenciar sus comandos de una cadena, usamos comillas en
  principio y fin


.. codelens:: Example_15
    
    texto = "Joaquin y Maria comen pan"
    print(texto)



Variable String
================



+ Tenga en cuenta que no hay problema al usar espacios para separar palabras
+ Una cadena tiene una longitud asociada
+ Podemos obtener el tamaño a través de la función de ``len`` incorporada en
  Python


.. codelens:: Example_16
    
    texto = "Joaquin y Maria comen pan"
    print(len(texto))

Variable String
================

+ Podemos acceder a los caracteres en la cadena usando un número entero
  para representar su posición en la cadena
+ Este número se llama índice y comenzamos a contar desde cero
+ Accedemos al carácter proporcionando el índice entre corchetes ``[]``


.. codelens:: Example_17
    
    texto = "Joaquin y Maria comen pan"
    print(texto[0])
    print(texto[2])
    print(texto[5])
    print(texto[10])
    print(texto[15])


Variable String
================

+ **Precaución**: no podemos acceder a un índice mayor que la cantidad de
  caracteres de cadena


.. codelens:: Example_18
    
    texto = "Juan y Maria comen pan"
    print(texto[22])


Operaciones con strings
=======================

+ Las operaciones básicas son corte, concatenación y composición.
+ La operación corte le permite usar parte de la cadena
+ La operación concatenación en cambio sirve para unir dos o más cadenas
+ Por último la composición se usa mucho cuando enviamos mensajes a la pantalla
  y consiste en usar cadenas como patrones donde podemos insertar datos


Concatenación
=============



.. codelens:: Example_19
    
    a = "Papa"
    b = "cuando nace"
    print(a+b)
    print(a*3)


Composición
============

+ Unir cadenas múltiples no siempre es práctico
+ Podemos usar marcadores de posición para reemplazar valores dentro de cadenas

.. codelens:: Example_20
    
    edad = 20
    print("Juan tiene %d años" % edad)


Composición
===========


+ Los marcadores principales son ``%d`` para números enteros, ``%s`` para
  cadenas y ``%f`` para números de punto flotante
+ % 03d completo con ceros adicionales
+ % 3d significa tres posiciones sin ceros adicionales



.. codelens:: Example_21
    
    edad = 20
    print("[%03d]"%edad)
    print("[%3d]"%edad)


Composición
===========


+ ``%5.2f`` significa 5 caracteres en total y 2 decimales


.. codelens:: Example_22
    
    print("$%5.2f pesos" % 23)


Corte
=====


+ Podemos realizar la operación de corte utilizando ``[idice_comienzo:indice_fin]``

.. codelens:: Example_23
    
    x = "0123456789"
    print(x[0:2])
    print(x[1:2])
    print(x[2:4])
    print(x[0:5])
    print(x[1:8])


Corte
=====


+ Podemos omitir índices, sustituyendo el indice correspondiente y
  también podemos tener índices negativos: -1 último, -2 penúltimo


.. codelens:: Example_24
    
    x = "0123456789"
    print(x[:2])
    print(x[4:])
    print(x[4:-1])
    print(x[-4:-1])
    print(x[:])


Cambiar variables a lo largo del tiempo
=======================================



+ Un programa se ejecuta línea por línea.
+ Por lo tanto, las variables pueden cambiar a lo largo de la ejecución de su
  programa




.. codelens:: Example_25
    
    deuda = 0 
    compra = 100
    deuda = deuda + compra
    compra = 200
    deuda = deuda + compra
    compra = 300
    deuda = deuda + compra
    print(deuda)


Prueba de escritorio o simulación
=================================


+ Comprender que el valor de las variables puede cambiar durante la ejecución de
  un programa no es tan natural, pero es fundamental a la hora de programar
+ Un programa no puede leerse como texto, pero con cuidado
  analizado línea por línea
+ Puedes entrenar con lápiz, borrador y papel


Prueba de escritorio o simulación
=================================

.. table:: **Teste de mesa ou simulação**
   :widths: auto

   ====== ====== ====
   deuda  compra Tela
   ====== ====== ====
   -0-    -100-    600
   -100-  -200-
   -300-    300
   600
   ====== ====== ====

No tengas prisa por la prueba de escritorio
===========================================

.. image:: img/TWP05_035.jpeg
   :height: 13.6cm
   :width: 20.42cm
   :align: center
   :alt: 

Entrada de datos
================



+ Hasta ahora nuestros programas han trabajado con valores conocidos.
+ Comenzaremos a obtener los valores durante la ejecución de los programas y
  usar el modo de edición más


.. activecode:: Input_Example_1
   :nocodelens:
   :stdin:

   nombre = input("Escriba su nombre: ")
   print("¡Hola %s!" % nombre)


Conversión de entrada de datos
==============================

+ La función  ``input`` solo devuelve cadenas
+ Usamos la función ``int()`` y ``float()`` para convertir un valor a un entero
  a un valor punto flotante respectivamente

.. activecode:: Input_Example_2
   :nocodelens:
   :stdin:

   valor_unitario = float(input("Valor de una rosquilla: "))
   n = int(input("Número de rosquillas: "))
   print("Valor total = %5.2f" %(n*valor_unitario))


Error común
===========


+ Cuidado con olvidar los parentesis. Un error en esto daría un error como el
  siguiente

.. image:: img/TWP05_040.png
   :height: 6.846cm
   :width: 20.801cm
   :align: center
   :alt: 


Lista de Ejercicios
===================

#. Su salario actual es de $6500. Haga un programa que
   calcule su nuevo salario con un aumento del 5%
#. Escriba un programa que muestre su nombre en la pantalla
#. Calcule la suma de tres variables
#. ¿Qué sucede si escribo textos en las tres variables anteriores?
#. Indique el tipo de los siguientes valores: ``5``, ``5.0``, ``4.3``, ``-2``,
   ``100``, ``1.333``, ``"10"``
#. Experimente en el interprete interactivo de Python utilizar ``type(x)`` donde ``x``
   es cada uno de los valores anteriores
#. ¿Es posible calcular 2 elevado a un millón?

.. image:: img/TWP05_041.jpeg
   :height: 12.571cm
   :width: 9.411cm
   :align: center
   :alt: 