=========
Quiz - 6
=========

.. activecode:: dormir
   :nocodelens:

   A. Dormir :
   dia_semana es True para dias de semana
   feriado es True los dias feriados
   podes quedar durmiendo cuando es feriado o no es un dia de entresemana
   retorna True o False dependiendo si vas a dormir o no

   ~~~~
   def dormir(dia_semana, feriado):
       return not dia_semana or feriado

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           print ('Oh si! Hoy voy a quedar durmiendo!')
           self.assertEqual(dormir(False, False), True,"Excelente! obtenido: True esperado: True")
           self.assertEqual(dormir(True, False), False, "Excelente! obtenido: False esperado: False")
           self.assertEqual(dormir(False, True), True,"Excelente! obtenido: True esperado: True")
           self.assertEqual(dormir(True, True), True,"Excelente! obtenido: True esperado: True")

   myTests().main()

.. activecode:: alumnos_problema
   :nocodelens:

   B. alumnos_problema:
   tenemos dos alumnos a y b
   a_sonrrie y b_sonrrie indican si a y b sonrrien
   tenemos problemas cuando ambos estan sonriendo o cuando ambos no estan sonriendo
   retorne True cuando hay problemas

   ~~~~
   def alumnos_problema(a_sonrrie, b_sonrrie):
      return a_sonrrie == b_sonrrie

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           print ('Alumnos con problema')
           self.assertEqual(alumnos_problema(True, True), True,"Excelente! obtenido: True esperado: True")
           self.assertEqual(alumnos_problema(False, False), True,"Excelente! obtenido: True esperado: True")
           self.assertEqual(alumnos_problema(True, False), False,"Excelente! obtenido: False esperado: False")
           self.assertEqual(alumnos_problema(False, True), False,"Excelente! obtenido: False esperado: False")

   myTests().main()

.. activecode:: suma_doble
   :nocodelens:

   C. suma_doble
   dado dos enteros retorna su suma
   pero si los numeros son iguales devuelve el doble de la suma
   suma_doble(1, 2) -> 3
   suma_doble(2, 2) -> 8

   ~~~~
   def suma_doble(a, b):
       return a + b  if a != b else (a + a) * 2

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           print ('Suma doble')
           self.assertEqual(suma_doble(1, 2), 3,"Excelente! obtenido: 3 esperado: 3")
           self.assertEqual(suma_doble(3, 2), 5, "Excelente! obtenido: 5 esperado: 5")
           self.assertEqual(suma_doble(2, 2), 8,"Excelente! obtenido: 8 esperado: 8")
           self.assertEqual(suma_doble(-1, 0), -1,"Excelente! obtenido: -1 esperado: -1")
           self.assertEqual(suma_doble(0, 0), 0,"Excelente! obtenido: 0 esperado: 0")
           self.assertEqual(suma_doble(0, 1), 1,"Excelente! obtenido: 1 esperado: 1")

   myTests().main()