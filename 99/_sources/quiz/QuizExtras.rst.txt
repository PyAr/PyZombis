=============
Quiz - Extras
=============

.. |br| raw:: html

   <br />


Ejercicio 1
-----------

.. activecode:: qExtra_1
    :nocodelens:

    **Problema de Josephus**. Imagine que tenemos ``n`` personas dispuestas en un círculo. Suponga que esas personas están numeradas de 1 a ``n`` en sentido horario. 
    Comenzando con la persona número **1**, ejecute el círculo en sentido horario y elimine cada ``m``-ésima persona, siempre y cuando el círculo 
    tenga dos o más personas. El reto es desarrollar la función ``josephus`` que toma a ``n`` y a ``m`` como parámetros, ambos números enteros positivos.
    La función debe devolver el número de la persona en el círculo que sobrevivió. |br| |br|

    ~~~~
    def josephus(n, m):

       
    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):

            self.assertEqual(josephus(50, 3), 11, "Esperado: 11")


    myTests().main()


Ejercicio 2
-----------

.. activecode:: qExtra_2
    :nocodelens:

    Implemente el algoritmo de la **Criba de Eratóstenes**. |br|
    `Criba de Eratóstenes <https://es.wikipedia.org/wiki/Criba_de_Erat%C3%B3stenes>`_ |br|
    El reto es desarrollar la función ``criba_de_Eratostenes`` que toma a ``n``, un número entero positivo, como parámetro 
    y devuelve la cantidad de números primos que hay en el intervalo **[2, n]**. Utilice la Criba de Eratóstenes para resolver
    este problema. |br| |br|
    Ejemplos: |br|
    ``criba_de_Eratostenes(20)`` -> ``8`` |br|
    ``criba_de_Eratostenes(12)`` -> ``5`` |br|

    ~~~~
    def criba_de_Eratostenes(n):

       
    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):

            self.assertEqual(criba_de_Eratostenes(20), 8, "Esperado: 8")
            self.assertEqual(criba_de_Eratostenes(12), 5, "Esperado: 5")
            self.assertEqual(criba_de_Eratostenes(30), 10, "Esperado: 10")
            self.assertEqual(criba_de_Eratostenes(5), 3, "Esperado: 3")


    myTests().main()


Ejercicio 3
-----------

.. activecode:: qExtra_3
    :nocodelens:

    **Problema 2 del Proyecto Euler**. `Problema <https://projecteuler.net/problem=2>`_ |br| 
    Primero, verifique para que sirve la palabra clave ``yield`` en Python. Después, resuelva la adaptación del problema 2 del *Proyecto Euler* 
    que está a continuación: |br| 
    Desarrolle la función ``p_euler`` que toma a ``n``, un entero positivo, como argumento, y devuelva la suma de todos los números pares menores a ``n`` 
    dentro de la secuencia Fibonacci de ``n``. |br| |br|
    Ejemplo: |br|
    ``p_euler(10)`` -> ``10`` |br|
    **Explicación**: los diez primero términos de la secuencia Fibonacci son::

         1, 2, 3, 5, 8, 13, 21, 34, 55, 89

    Por ende, los números pares dentro de esta secuencia son::

         2, 8, 34

    Sin embargo, solo ``2`` y ``8`` cumplen con ser menores que ``n`` (en este caso menores que 10). La suma de éstos es ``10``.

    ~~~~
    def p_euler(n):
       

    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):

            self.assertEqual(p_euler(4000000), 4613732, "Esperado: 4613732")
            self.assertEqual(p_euler(10), 10, "Esperado: 10")
            self.assertEqual(p_euler(100), 44, "Esperado: 44")


    myTests().main()


Ejercicio 4
-----------

.. activecode:: qExtra_4
    :nocodelens:

    En el libro “El Hombre que Calculaba”, de *Malba Tahan*, un personaje quería ganar los granos de trigo que estaban distribuidos sobre un tablero de ajedrez del siguiente modo: 
    un grano en la primera casilla del tablero, el doble (2) en la segunda, nuevamente el doble (4) en la tercera, otra vez el doble (8) en la cuarta, y así sucesivamente hasta la sexagésima cuarta casilla del tablero. 
    Haga un algoritmo que calcule la cantidad total de granos de trigo necesarios para realizar esta distribución. La función ``suma_granos`` devolverá 
    esta cantidad. Su parámetro ``n`` será el valor ``64``, representando el número de casillas de un tablero de ajedrez. |br|

    ~~~~
    def suma_granos(n):
       

    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):

            self.assertEqual(suma_granos(64), 18446744073709551615, "Esperado: 18446744073709551615")


    myTests().main()


Ejercicio 5
-----------

.. activecode:: qExtra_5
    :nocodelens:

    Se dan ``n`` baldosas con dimensión de 10cm x 10cm. Con ellas, usted debe ensamblar un conjunto de cuadrados usando todas las baldosas dadas. Para ello, debe seguir las siguientes reglas:

    - El primer cuadrado que se construya debe usar la mayor cantidad de baldosas posibles.
    - Si quedan baldosas, el siguiente cuadrado también debe construirse con la mayor cantidad de las baldosas que quedaron.
    - Seguir este mismo patrón hasta haber usado todas las baldosas. 

    Entonces, la función ``forma_cuadrados`` devuelve un **diccionario** representando el conjunto de cuadrados formados. Sus llaves representan el tamaño, en baldosas, del lado del 
    cuadrado formado, mientras que los valores representan la cantidad de cuadrados de ese tamaño que fueron formados. |br| |br| 
    Ejemplo: |br|
    ``forma_cuadrados(31)`` -> ``{5:1, 2:1, 1:2}`` |br|
    **Explicación**: El conjunto formado tendrá 4 cuadrados: 1 cuadrado con 5 baldosas por lado, 1 con 2 baldosas por lado, y 2 con 1 baldosa. |br|

    ~~~~
    def forma_cuadrados(n):


    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):

            self.assertEqual(forma_cuadrados(31), {5: 1, 2: 1, 1: 2}, "Esperado: {5:1,2:1,1:2}")
            self.assertEqual(forma_cuadrados(76), {8: 1, 3: 1, 1: 3}, "Esperado: {8:1,3:1,1:3}")
            self.assertEqual(forma_cuadrados(290), {17: 1, 1: 1}, "Esperado: {17:1,1:1}")
            self.assertEqual(forma_cuadrados(347), {18: 1, 4: 1, 2: 1, 1: 3}, "Esperado: {18:1,4:1,2:1,1:3}")


    myTests().main()
