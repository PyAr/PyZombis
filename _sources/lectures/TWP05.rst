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
+ Necesitamos marcar o limitar el comienzo y el final de nuestros mensajes.
  con un símbolo, en este caso, las comillas

.. code-block:: python

    >>> print ("hola mundo!")
    hola mundo!

.. codelens:: Example_1
    
    print("primer mensaje")


Primer mensaje de error
=========================

+ Las letras mayúsculas y minúsculas son diferentes
+ ¿Notaste que la impresión no es púrpura?

.. code-block:: python

    >>> Print ("hola mundo!")
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

+ En la versión de Python que usamos paréntesis no son opcionales en
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
  más adelante


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
+ En los ejemplos anteriores usamos el modo interactivo
+ El intérprete verifica que hayamos escrito el programa correctamente,
  mostrando mensajes de error si hay un problema

Intérprete de Python
====================



+ Hay dos modos del intérprete de Python: modo interactivo y
  edición
+ En los ejemplos anteriores usamos el modo interactivo
+ Una ventaja del modo interactivo es poder probar comandos y obtener
  responde al instante


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
  cantidad de espacio en blanco antes del comienzo de cada línea para
  realizar diferentes operaciones.


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


Conceptos variables y de asignación
===================================



+ Las variables se utilizan para almacenar valores y nombrar un
  un área de la memoria de la computadora
+ El símbolo para la asignación es el mismo (=)




.. codelens:: Example_6_1
    
    a = 2
    b = 3
    print(a+b)

Conceptos variables y de asignación
===================================



+ Las variables se utilizan para almacenar valores y nombrar un
  un área de la memoria de la computadora
+ Función f (x), donde f es el nombre de la función y x es un parámetro
+ En el ejemplo anterior, print es el nombre de la función y a + b, el valor

Conceptos variables y de asignación
===================================



+ También podemos usar el modo interactivo

+ Las dos primeras líneas no envían nada a la pantalla, así que
  solo se muestra el resultado de la tercera línea

.. codelens:: Example_6_2
    
    a = 2
    b = 3
    print(a+b)

Conceptos variables y de asignación
===================================



+ Quizás se pregunte por qué creamos dos variables, a y
  b, para sumar dos números?
+ Podríamos haber logrado el mismo resultado de varias maneras.




.. codelens:: Example_Calculation
    
    print(2+3)
    print(5)


Conceptos variables y de asignación
===================================



+ ¿Cuál es la diferencia entre el primer modo y los dos últimos?
+ El primer caso incluye la lógica que usamos para obtener el
  resultado
+ De este modo, hacemos explícito el algoritmo que utilizamos mentalmente para
  resolver este problema
+ En los últimos dos casos, solo ordenamos a la computadora que imprima
  algo concreto, sin dejar en claro la lógica para llegar a ese resultado


Conceptos variables y de asignación
===================================



#. 1. Su salario actual es de $6500. Haz un programa que
   calcular el nuevo salario con un aumento del 5%
#. 2.Escribe un programa que muestre tu nombre en la pantalla
#. 3. Calcula la suma de tres variables
#. 4. ¿Qué sucede si pongo textos en las tres variables?
   anterior?


Nombres de variables
====================



+ En Python, los nombres de las variables deben comenzar con un
  letra o guión bajo (_)
+ Acentos están permitidos!
+ Ejemplo de nombres válidos: precio, acción, salario, _x, año_2011,
  salario promedio
+ Ejemplo de nombres no válidos: salario promedio, 3x, 1er, @, $



Tipos de variables
==================


.. image:: img/TWP05_015.png
   :height: 8.507cm
   :width: 16.595cm
   :align: center
   :alt: 


Tipos de variables
==================



+ En Python, los nombres de las variables deben comenzar con un
  letra o guión bajo (_)
+ Acentos están permitidos!
+ Ejemplo de nombres válidos: precio, acción, salario,_x, año_2011,
  salario promedio
+ Ejemplo de nombres no válidos: salario promedio, 3x, 1er, @, $




Variables numéricas
===================



+ Los enteros no tienen decimales: 42, -7
+ Todo el tipo en Python se llama int
+ Los números en coma flotante tienen decimales: 1.0, 3.1415,
  1234.56
+ Tenga en cuenta que 1.0, incluso teniendo cero en la parte decimal, es un número en
  punto flotante
+ El tipo de coma flotante en Python se llama float.




Ejercicios
==========



#. 5.Indique o tipo dos seguintes valores: 5, 5.0, 4.3, -2, 100,
   1.333, “10”
#. 6.Experimente digitar type(x) onde x é cada um dos valores acima no
   Python interativo
#. 7.É possível calcular 2 elevado a um milhão?






Representación de valores numéricos
===================================



+ Internamente todos os números são representados no sistema binário
+ Esse sistema permite apenas os dígitos 0 e 1
+ Números em ponto flutuante podem não ter representação exata no
  sistema binário
+ Ex.: Digitando no interpretador 3*0.1 teremos como resposta
  0.30000000000000004




Variables de tipo lógico
========================



+ Podemos almacenar verdadero y falso
+ La variable se llama lógica o booleana
+ En Python escribimos verdadero y falso
+ Tenga en cuenta que T y F están en mayúscula




Operadores relacionales
=======================

.. table:: **Operadores relacionais**
   :widths: auto

   ======== ============== ==================
   Operador Operación      Símbolo matemático
   ======== ============== ==================
   ==       igual          =
   >        mayor que      >
   <        menor que      <
   !=       diferente      <>
   >=       mayor o igual  >=
   <=       menor o igual  <=
   ======== ============== ==================


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



+ Podemos usar operadores relacionales para inicia variables en el
  tipo lógico



.. codelens:: Example_9
    
    nota = 8
    promedio = 6
    aprobado = nota > promedio
    print(aprobado)


Operadores Lógicos
==================



+ Tenemos tres operadores básicos: not, and e or
+ Operador not

.. codelens:: Example_10
    
    print(not True)
    print(not False)


Operadores Lógicos
==================



+ Operador and

.. codelens:: Example_11
    
    print(True and True)
    print(True and False)
    print(False and True)
    print(False and False)


Operadores Lógicos
==================



+ Operador or

.. codelens:: Example_12
    
    print(True or True)
    print(True or False)
    print(False or True)
    print(False or False)


Expresiones Lógicas
===================



+ Podemos combinar os operadores lógicos en expresiones lógicas
+ El orden de evaluación no es> y> o




Ejemplo
=======



+ La condición para un préstamo de compra de motocicleta es un salario mayor que
  $1,000.00 y mayores de 18 años. Compruebe si José puede obtener el
  préstamo

.. codelens:: Example_13
    
    salario = 500.0
    edad = 20
    print(salario > 1000 and edad > 18)


Ejemplo
=======



+ Verifique que un estudiante que obtuvo un puntaje promedio para el programa de ejercicios 5.8 y
  promedio de pruebas 7 aprobadas




.. codelens:: Example_14
    
    ep = 5.8
    p = 7
    aprobado = ep >= 6 and p >= 6
    print(aprovado)


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



+ Tenga en cuenta que no hay problema al usar espacios para separar el
  palabras
+ Una cadena tiene una longitud asociada
+ Podemos obtener el tamaño a través de la función de len incorporada





.. codelens:: Example_16
    
    texto = "Joaquin y Maria comen pan"
    print(len(texto))

Variable String
================



+ Podemos acceder a los caracteres en la cadena usando un número entero
  para representar tu posición
+ Este número se llama índice y comenzamos a contar desde cero
+ Accedemos al personaje proporcionando el índice entre corchetes ([])



.. codelens:: Example_17
    
    texto = "Joaquin y Maria comen pan"
    print(texto[0])


Variable String
================



+ Precaución: no podemos acceder a un índice mayor que la cantidad de
  caracteres de cadena


.. codelens:: Example_18
    
    texto = "Juan y Maria comen pan"
    print(texto[22])


Operaciones con strings
=======================



+ Las operaciones básicas son corte, concatenación y composición.
+ Rebanar le permite usar parte de la cadena y la concatenación nada
  más que unir dos o más cadenas
+ La composición se usa ampliamente en los mensajes que enviamos a la pantalla
  y consiste en usar cadenas como modelos donde podemos insertar datos




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


+ Los marcadores principales son% d para números enteros,% s para
  cadenas y% f para números de coma flotante
+ % 03d completo con ceros adicionales
+ % 3d significa tres posiciones sin ceros adicionales



.. codelens:: Example_21
    
    edad = 20
    print("[%03d]"%edad)
    print("[%3d]"%edad)


Composición
===========



+ % 5.2f significa 5 caracteres en total y 2 decimales




.. codelens:: Example_22
    
    print("$ %5.2f pesos" %23)


Rebanada
==========



+ Rebanada del primer índice al anterior del segundo


.. codelens:: Example_23
    
    x = "0123456789"
    print(x[0:2])
    print(x[1:2])
    print(x[2:4])
    print(x[0:5])
    print(x[1:8])


Rebanada
==========



+ Podemos omitir índices, sustituyendo el extremo correspondiente y
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
+ Por lo tanto, las variables pueden cambiar con el tiempo de ejecución de su
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
  un programa no es tan natural, pero es fundamental para programar
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
  usa el modo de edición más


.. activecode:: Input_Example_1
   :nocodelens:
   :stdin:

   nome = input("Digite o seu nome: ")
   print("Olá %s!" %nome)


Conversión de entrada de datos
==============================

+ La función de entrada solo devuelve cadenas
+ Usamos int() para convertir un valor a un entero y float() a
  punto flotante


.. activecode:: Input_Example_2
   :nocodelens:
   :stdin:

   valor_unitario = float(input("Valor de una rosquilla: "))
   n = int(input("Número de rosquillas: "))
   print("Valor total = %5.2f" %(n*valor_unitario))


Error común
===========



+ + Olvida algunos paréntesis. El error conducirá a la línea de abajo.


.. image:: img/TWP05_040.png
   :height: 6.846cm
   :width: 20.801cm
   :align: center
   :alt: 

Lista de Ejercicios
===================


.. image:: img/TWP05_041.jpeg
   :height: 12.571cm
   :width: 9.411cm
   :align: center
   :alt: 


