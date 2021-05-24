========
Quiz - 3
========

.. |br| raw:: html

   <br />


.. activecode:: q3_1
   :nocodelens:

   Decimos que un número natural es triangular si es el producto de tres números naturales consecutivos. |br|
    Ejemplo: 120 es triangular, ya que 4.5.6 = 120. Dado un número entero no negativo n, verifique si n es triangular |br|
    Devuelve Verdadero o Falso |br|
   
   ~~~~
   def triangular(n):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           
           self.assertEqual(triangular(24), True,"Esperado: True")
           self.assertEqual(triangular(7), False,"Esperado: False")
           self.assertEqual(triangular(10), True,"Esperado: True")
           self.assertEqual(triangular(23), False,"Esperado: False")
              

   myTests().main()



.. activecode:: q3_2
   :nocodelens:

   Indique cómo se debe realizar un cambio utilizando un número mínimo de notas. Su algoritmo debe leer el monto de la factura a pagar y el monto del pago realizado, sin tener en cuenta los centavos. |br|
    Suponga que los billetes para el cambio son 50, 20, 10, 5, 2 y 1 real, y que ninguno de ellos falta en la caja registradora. |br|

    Devuelva una lista con la cantidad de cada billete. El primer elemento de la lista muestra 50, los siguientes 20, y así sucesivamente hasta 1. [El mismo orden que se muestra arriba] |en|

   
   ~~~~
   def change(n):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           
           self.assertEqual(change(50), [1,0,0,0,0,0],"Esperado: [1,0,0,0,0,0]")
           self.assertEqual(change(39), [0,1,1,1,2,0],"Esperado: [0,1,1,1,2,0]")
           self.assertEqual(change(8), [0,0,0,1,1,1],"Esperado: [0,0,0,1,1,1]")
              

   myTests().main()



.. activecode:: q3_3
   :nocodelens:

   Compruebe que un número entero positivo n sea primo. |br|

   Devuelve Verdadero si presiona y Falso si no es un primo. |br|
   
   ~~~~
   def prime(n):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           
           self.assertEqual(prime(2), True,"Esperado: True")
           self.assertEqual(prime(49), False,"Esperado: False")
           self.assertEqual(prime(541), True,"Esperado: True")
           self.assertEqual(prime(8831), True,"Esperado: True")
           self.assertEqual(prime(7952), False,"Esperado: False")
              

   myTests().main()



.. activecode:: q3_4
   :nocodelens:

   Dado un número entero positivo, determine su descomposición en factores primos calculando también la multiplicidad de cada factor. |br|

    Devuelve un diccionario con las claves como primos y sus respectivos valores como la frecuencia del primo en la factorización primaria del número. |br|

    Las claves deben estar en orden descendente. |br|

   
   ~~~~
   def factors(n):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           
           self.assertEqual(factors(5),{5:1} ,"Esperado: {5:1}")
           self.assertEqual(factors(84),{2:2,3:1,7:1} ,"Esperado: {2:2,3:1,7:1}")
           self.assertEqual(factors(123), {3:1,41:1},"Esperado: {3:1,41:1}")
           self.assertEqual(factors(81), {3:4},"Esperado: {3:4}")
           self.assertEqual(factors(420),{2:2,3:1,5:1,7:1} ,"Esperado: {2:2,3:1,5:1,7:1}")
              

   myTests().main()


.. activecode:: q3_5
   :nocodelens:

   Haga un programa que solicite un número entero positivo y lo muestre invertido. Por ejemplo: 1234 genera 4321. Devuelve el número invertido.|br|

   
   ~~~~
   def invertednum(n):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           
           self.assertEqual(invertednum(123),321,"Esperado: 321")
           self.assertEqual(invertednum(123456789),987654321 ,"Esperado: 987654321")
           self.assertEqual(invertednum(1001), 1001,"Esperado: 1001")
           self.assertEqual(invertednum(1000), 1,"Esperado: 1")
           self.assertEqual(invertednum(230), 32,"Esperado: 32")
              

   myTests().main()
