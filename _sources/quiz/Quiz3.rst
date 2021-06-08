========
Quiz - 3
========

.. |br| raw:: html

   <br />


Ejercicio 1
-----------

.. activecode:: q3_1
   :nocodelens:

   Decimos que un número natural es triangular si es el producto de tres números naturales consecutivos. |br|
   Ejemplo: 120 es triangular, ya que 4 x 5 x 6 = 120. Dado un número entero no negativo ``n``, verifique si ``n`` es triangular. 
   Devuelva ``True`` si el número es triangular o ``False`` si no lo es. |br|
   
   ~~~~
   def triangular(n):

       
   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           
           self.assertEqual(triangular(24), True, "Esperado: True")
           self.assertEqual(triangular(7), False, "Esperado: False")
           self.assertEqual(triangular(10), True, "Esperado: True")
           self.assertEqual(triangular(23), False, "Esperado: False")
              

   myTests().main()


Ejercicio 2
-----------

.. activecode:: q3_2
   :nocodelens:

   Indique cómo se debe devolver un cambio utilizando un número mínimo de billetes. 
   Su algoritmo debe leer el monto de la factura a pagar, ``cobro``, y el monto 
   del pago realizado, ``pago```, sin tener en cuenta los centavos. |br|
   Suponga que los billetes para el cambio son 50, 20, 10, 5, 2 y 1, y que ninguno de ellos falta en la caja registradora. 
   Devuelva una lista con la cantidad de cada billete que represente el cambio. |br|
   El primer elemento de la lista coincide con la cantidad 50, 
   el siguiente con 20, y así sucesivamente hasta 1. (El mismo orden que se muestra arriba). |br| |br|
   Ejemplos: |br|
   ``calcularCambio(50, 100)`` -> [1,0,0,0,0,0] |br|
   ``calcularCambio(92, 100)`` -> [0,0,0,1,1,1] |br|

   ~~~~
   def calcularCambio(cobro, pago):
 

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           
           self.assertEqual(calcularCambio(50, 100), [1,0,0,0,0,0], "Esperado: [1,0,0,0,0,0]")
           self.assertEqual(calcularCambio(61, 100), [0,1,1,1,2,0], "Esperado: [0,1,1,1,2,0]")
           self.assertEqual(calcularCambio(92, 100), [0,0,0,1,1,1], "Esperado: [0,0,0,1,1,1]")
              

   myTests().main()


Ejercicio 3
-----------

.. activecode:: q3_3
   :nocodelens:

   Compruebe que un número entero positivo ``n`` sea primo. |br|
   Devuelva ``True`` si es primo o ``False`` si no lo es. |br|
   
   ~~~~
   def esPrimo(n):

       
   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           
           self.assertEqual(esPrimo(2), True, "Esperado: True")
           self.assertEqual(esPrimo(49), False, "Esperado: False")
           self.assertEqual(esPrimo(541), True, "Esperado: True")
           self.assertEqual(esPrimo(8831), True, "Esperado: True")
           self.assertEqual(esPrimo(7952), False, "Esperado: False")
              

   myTests().main()


Ejercicio 4
-----------

.. activecode:: q3_4
   :nocodelens:

   Dado un número entero positivo ``n``, determine su descomposición en factores primos 
   calculando también la multiplicidad de cada factor. 
   Devuelve un diccionario con las claves como primos y sus respectivos valores como la 
   frecuencia del primo en la factorización primaria del número. |br| |br|
   Ejemplos: |br|
   ``factores(5)`` -> {5:1} |br|
   ``factores(420)`` -> {2:2, 3:1, 5:1, 7:1} |br|
   
   ~~~~
   def factores(n):
       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           
           self.assertEqual(factores(5), {5:1}, "Esperado: {5:1}")
           self.assertEqual(factores(84), {2:2,3:1,7:1}, "Esperado: {2:2, 3:1, 7:1}")
           self.assertEqual(factores(123), {3:1,41:1}, "Esperado: {3:1, 41:1}")
           self.assertEqual(factores(81), {3:4}, "Esperado: {3:4}")
           self.assertEqual(factores(420), {2:2,3:1,5:1,7:1}, "Esperado: {2:2, 3:1, 5:1, 7:1}")
              

   myTests().main()


Ejercicio 5
-----------

.. activecode:: q3_5
   :nocodelens:

   Haga un programa que solicite un número entero positivo ``n`` y lo muestre invertido. 
   Por ejemplo: 1234 genera 4321. Devuelve el número invertido. |br| |br|
   Ejemplos: |br|
   ``invertirNumero(123456789)`` -> 987654321 |br|
   ``invertirNumero(1000)`` -> 1 |br|

   ~~~~
   def invertirNumero(n):
       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           
           self.assertEqual(invertirNumero(123), 321, "Esperado: 321")
           self.assertEqual(invertirNumero(123456789), 987654321, "Esperado: 987654321")
           self.assertEqual(invertirNumero(1001), 1001, "Esperado: 1001")
           self.assertEqual(invertirNumero(1000), 1, "Esperado: 1")
           self.assertEqual(invertirNumero(230), 32, "Esperado: 32")
              

   myTests().main()
