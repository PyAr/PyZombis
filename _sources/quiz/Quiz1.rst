========
Quiz - 1
========

.. |br| raw:: html

   <br />


.. activecode:: q1_1
   :nocodelens:

   Haga un programa que pida dos números enteros e imprima la suma de esos dos números. |br|
   
   ~~~~
   def suma(n,m):


   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           
           self.assertEqual(suma(24,42), 66,"Esperado: 66")
           self.assertEqual(suma(17,13), 30,"Esperado: 30")
           self.assertEqual(suma(-11,6), -5,"Esperado: -5")
           self.assertEqual(suma(0,9), 9,"Esperado: 9")
              

   myTests().main()



.. activecode:: q1_2
   :nocodelens:

   Escriba un programa que lea un valor en metros y lo muestre convertido a milimetros. |br|
   
   ~~~~
   def metros_a_milimetros(n):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           
           self.assertEqual(metros_a_milimetros(1), 1000,"Esperado: 1000")
           self.assertEqual(metros_a_milimetros(0.2), 200,"Esperado: 200")
           self.assertEqual(metros_a_milimetros(30), 30000,"Esperado: 30000")
              

   myTests().main()



.. activecode:: q1_3
   :nocodelens:

   Escriba un programa que lea el número de días, horas, minutos y segundos del usuario. Calcular el total en segundos. |br|
   
   ~~~~
   def tiempo_en_segundos(dias, horas, minutos, segundos):

       
   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           
           self.assertEqual(tiempo_en_segundos(2,5,2,5), 190865,"Esperado: 190865")
           self.assertEqual(tiempo_en_segundos(10,89,5,0), 1184700,"Esperado: 1184700")
           self.assertEqual(tiempo_en_segundos(8,0,2,0), 691680,"Esperado: 691680")
           self.assertEqual(tiempo_en_segundos(0,5,55,6), 21306,"Esperado: 21306")
              

   myTests().main()
