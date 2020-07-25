==================
Revisión general 3
==================


.. image:: img/TWP10_001.jpeg
   :height: 14.925cm
   :width: 9.258cm
   :align: center
   :alt: 


El proceso de desarrollo de software.
=====================================


+ Ejecutar programas creados por otros es relativamente
  simple

+ Lo difícil es comenzar a crear tus propios programas

+ Las computadoras son muy estrictas y hay muchos detalles

+ Entonces es necesario ser muy sistemático


Pasos en el proceso de desarrollo de software.
==============================================



+ Analiza el problema:

  + Comprender exactamente cuál es el problema a resolver
  + Problema bien definido, medio problema resuelto

+ Especifique el problema:

  + Describe exactamente lo que hará tu programa
  + En esta etapa, no debería preocuparme sobre cómo voy a hacer mi programa,
    pero al decidir exactamente qué hará
  + ¿Cuáles son las entradas y salidas del programa?



Pasos en el proceso de desarrollo de software.
==============================================


+ Diseña el programa:

  + Formular la estructura general del programa.
  + Podemos usar pseudocódigo en este paso

+ Implementar el programa:

  + Diseña algunas pruebas para validar tu programa
  + Traduce el proyecto a cualquier lenguaje de programaciónn
  + En este curso usaremos Python



Ejemplo: convertidor de temperatura Fahrenheit a Celsius
========================================================


+ Análisis: dada una temperatura en grados Fahrenheit, obtenga la conversión
   para Celsius

+ Especificación de lo que hará el programa:

  + Entrada: temperatura en Fahrenheit
  + Salida: temperatura en grados Celsius
  + Salida: 5 * (F-32) / 9



Ejemplo: convertidor de temperatura Fahrenheit a Celsius
========================================================



+ Proyecto de cómo funcionará el programa:

  + Leer el valor de temperatura en Fahrenheit
  + Convertir el valor usando la fórmula 5 * (F-32) / 9
  + Imprimir el valor convertido

+ Implementación:

  + Pruebas: 32 f = 0 c y 100 f = 37.8 c



.. activecode:: Example14_1
   :nocodelens:
   :stdin:

   F = float(input('Fahrenheit: '))
   C = 5*(F-32)/9
   print('Celsius: %2.1f' %C)


+ Uso de variables con valores definidos.


Variables con valores indefinidos
=================================


.. image:: img/TWP40_010.png
   :height: 6.984cm
   :width: 19.261cm
   :align: center
   :alt: 

Carácter de fin de línea
======================== 


.. codelens:: Example14_2
         
        for x in 'aguacate':
          if x in 'ae':
            print(x,end = ' ')
          else:
            print('*',end = ' ')



Asignación de variables.
========================



+ <variável> = <expressão>

+ A <expressão> calculada no processador modifica a memória
  referenciada por <variável>


.. codelens:: Example14_3
         
        x = 5
        celsius = 5
        fahrenheit = 9/5*celsius + 32


Asignación de variables.
========================


.. codelens:: Example14_4
         
        x = 0
        print(x)
        x = 'aguacate'
        print(x)
        x = 3.14
        print(x)
        x = x*2
        print(x)


Lectura y tarea
===============


.. activecode:: Example14_5
   :nocodelens:
   :stdin:

   string = input('Escribe un texto: ')
   print(string)
   n = int(input('Ingrese un número entero: '))
   print(n)
   pi = float(input('Ingrese el número pi: '))
   print(pi)
   x = eval(input('Ingrese un número: '))
   print(x)


Asignación múltiple
===================


.. activecode:: Example14_6
   :nocodelens:
   :stdin:

   n1, n2, n3, n4 = eval(input('Tipo 4 notas: '))
   print('Media:',(n1+n2+n3+n4)/4)
   x = 4
   y = 5
   suma, diferencia = x+y,x-y
   print(suma)
   print(diferencia)
   x,y = y,x
   print(x,y)


Asignación múltiple
===================


.. image:: img/TWP40_016.png
   :height: 7.778cm
   :width: 12.858cm
   :align: center
   :alt: 


Asignación múltiple
===================


.. image:: img/TWP40_017.png
   :height: 7.751cm
   :width: 21.033cm
   :align: center
   :alt: 


+ for <var> in <seqüência>

.. codelens:: Example14_7
         
        print(list(range(10)))
        for k in range(10):
          print(k,end = ' ')
        for k in [0,1,2,3]:
          print(k,end = ' ')
        for k in 'aguacate':
          print(k+k,end=' ')


Ejercício
=========


+ Queremos desarrollar un programa que determine el valor futuro de
  una inversión, dado el valor inicial y la tasa de interés


Ejercício
=========



+ Análisis:

  + El dinero inicial genera una tasa de interés anual
  + ¿Cuánto valdrá en 10 años?
  + Entrada: monto inicial, tasa de interés
  + Salida: valor en 10 años


Ejercício
=========


+ Especificación:

  + El usuario ingresa la cantidad inicial invertida
  + El usuario ingresa la tasa de interés anual
  + Valor de la fórmula matemática financiera * (1 + interés)


Ejercício
=========



+ Proyecto:

  + Ingrese el monto de inversión inicial
  + Ingrese la tasa de interés
  + Repite 10 veces:

    + valor inicial = valor inicial * (1 + tasa de interés)
  
  + –Imprime el valor actualizado



Ejercício
=========


+ Implementación:

  + –Valores de prueba:

    + 1000 reales y 3% de interés
    + 1000 reales y 10% de interés



.. activecode:: Example14_8
   :nocodelens:
   :stdin:

   valor = eval(input('Cantidad inicial invertida: '))
   taxa = eval(input('Tasa de interés anual: '))
   for i in range(10):
    valor = valor*(1+taxa)
   print('Valor después de 10 años:  %5.2f' %valor)



Preguntas frecuentes
====================

+ ¿Por qué definir algunas pruebas antes de la implementación es una buena idea?
   práctica de programación?

+ ¿Cuál es la ventaja de escribir pseudocódigo en la etapa de diseño?


Numeros basicos
===============


.. codelens:: Example14_9
         
        print(type(3))
        print(type(3.14))
        print(type(3.0))
        x = -32
        print(type(x))
        x = 32.0
        print(type(x))
        print(int(type(x)))


Tabla de operadores
===================


.. table:: **Tabela de operadores**
   :widths: auto

   ======== ============== 
   Operador Operación
   ======== ============== 
   \*        Multiplicacion
   /         Division 
   \*\*      Exponenciación
   abs()     Valor absoluto
   %         Resto de la división
   //        División entera
   \-        Resta
   \+        Además

   ======== ============== 


Operadores Numéricos
====================


.. codelens:: Example14_10
         
        print(3+4)
        print(3.0+4.0)
        print(3.0*4.0)
        print(4**3)
        print(4.0**3)
        print(abs(5))
        print(abs(-5))


División entera en lenguas antiguas
===================================



+ Los idiomas más antiguos generan un resultado completo en la división de
  todo!

+ 10/3 será igual a 3

+ Al calcular Fahrenheit a Celsius, tendré que modificarlo un poco
  mi programa si uso C o Java


Conversión de grados a C
========================


.. activecode:: Example14_11
   :language: c
   :stdin: 

   
   #include <stdio.h>

   int main(void){
    float F, C;
    printf("Farenheit: ");
    scanf("%f",&F);
    C = 5.0*(F-32.0)/9.0;
    printf("Celsius: %2.1f\n",C);

   }



.. disqus::
   :shortname: pyzombis
   :identifier: lecture14
