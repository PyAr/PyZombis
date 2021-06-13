=========
Quiz - 6
=========

.. |br| raw:: html

   <br />

   
.. activecode:: dormir
   :nocodelens:

   A. Dormir : |br| |br|
   dia_semana y True para días de semana |br| |br|
    vacaciones y True en vacaciones |br| |br|
    puedes quedarte dormido cuando sea festivo o no entre semana |br| |br|
    devuelva Verdadero o Falso cuando se vaya a dormir o no |br|  br|

   ~~~~
   def dormir(dia_semana, feriado):
       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(dormir(False, False), True,"Excelente! obtenido: True esperado: True")
           self.assertEqual(dormir(True, False), False, "Excelente! obtenido: False esperado: False")
           self.assertEqual(dormir(False, True), True,"Excelente! obtenido: True esperado: True")
           self.assertEqual(dormir(True, True), True,"Excelente! obtenido: True esperado: True")

   myTests().main()

.. activecode:: alumnos_problema
   :nocodelens:

   B. problema_alumnos: |br|
    tenemos dos estudiantes ayb |br|
    a_sorri y b_sorri indican si ayb sonríen |br|
    tenemos problemas cuando ambos sonríen o ambos |br|
    no están sonriendo |br|
    devuelve True cuando hay problemas |br|
   ~~~~
   def alumnos_problema(a_sonrrie, b_sonrrie):
      

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(alumnos_problema(True, True), True,"Excelente! obtenido: True esperado: True")
           self.assertEqual(alumnos_problema(False, False), True,"Excelente! obtenido: True esperado: True")
           self.assertEqual(alumnos_problema(True, False), False,"Excelente! obtenido: False esperado: False")
           self.assertEqual(alumnos_problema(False, True), False,"Excelente! obtenido: False esperado: False")

   myTests().main()


.. activecode:: suma_doble
   :nocodelens:

   C. suma_doble |br|
    dados dos enteros devuelve su suma |br|
    sin embargo, si los números son iguales, devuelve el doble de la suma |br|
    doble_ suma (1, 2) -> 3 |br|
    doble_ suma (2, 2) -> 8 |br|


   ~~~~
   def suma_doble(a, b):
       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(suma_doble(1, 2), 3,"Excelente! obtenido: 3 esperado: 3")
           self.assertEqual(suma_doble(3, 2), 5, "Excelente! obtenido: 5 esperado: 5")
           self.assertEqual(suma_doble(2, 2), 8,"Excelente! obtenido: 8 esperado: 8")
           self.assertEqual(suma_doble(-1, 0), -1,"Excelente! obtenido: -1 esperado: -1")
           self.assertEqual(suma_doble(0, 0), 0,"Excelente! obtenido: 0 esperado: 0")
           self.assertEqual(suma_doble(0, 1), 1,"Excelente! obtenido: 1 esperado: 1")

   myTests().main()


.. activecode:: diff21
  :nocodelens:

  D. diff21 |br|
  dado un número entero n devuelve la diferencia absoluta entre n y 21 |br|
   sin embargo, si el número es mayor que 21, devuelve el doble de ladiferencia absoluta |br|
  diff21(19) -> 2 |br|
  diff21(25) -> 8 |br|
  dica: abs(x) devuelve el valor absoluto de x |br|

  ~~~~
  def diff21(n):
       

  ====
  from unittest.gui import TestCaseGui

  class myTests(TestCaseGui):

      def testOne(self):
          self.assertEqual(diff21(19),2,"Esperado: 2")
          self.assertEqual(diff21(10),11,"Esperado: 11")
          self.assertEqual(diff21(21),0,"Esperado: 0")
          self.assertEqual(diff21(22),2,"Esperado: 2")
          self.assertEqual(diff21(25),8,"Esperado: 8")
          self.assertEqual(diff21(30),18,"Esperado: 18")
        

  myTests().main()

.. activecode:: papagaio
  :nocodelens:

  E. loro |br|
   tenemos un loro que habla fuerte |br|
   hora es un parámetro entre 0 y 23 |br|
   tenemos problemas si el loro esta hablando |br|
   antes de las 7 o después de las 20 |br|

  ~~~~
  def papagaio(falando, hora):
       

  ====
  from unittest.gui import TestCaseGui

  class myTests(TestCaseGui):

      def testOne(self):
          self.assertEqual(loro(True, 6), True,"Esperado: True")
          self.assertEqual(loro(True, 7), False,"Esperado: False")
          self.assertEqual(loro(False, 6), False,"Esperado: False")
          self.assertEqual(loro(True, 21), True,"Esperado: True")
          self.assertEqual(loro(False, 21), False,"Esperado: False")
          self.assertEqual(loro(True, 23), True,"Esperado: True")
          self.assertEqual(loro(True, 20), False,"Esperado: False")
        

  myTests().main()


.. activecode:: dez
  :nocodelens:

  F. dez | br |
   dos enteros ayb |br|
   devuelve Verdadero si uno de los dos es 10 o la suma es 10 |br|

  ~~~~
  def dez(a,b):
       

  ====
  from unittest.gui import TestCaseGui

  class myTests(TestCaseGui):

      def testOne(self):
          self.assertEqual(diez(9,10), True,"Esperado: True")
          self.assertEqual(diez(9,9), False,"Esperado: False")
          self.assertEqual(diez(1,9), True,"Esperado: True")
          self.assertEqual(diez(10,1), True,"Esperado: True")
          self.assertEqual(diez(10,10), True,"Esperado: True")
          self.assertEqual(diez(8,2), True,"Esperado: True")
          self.assertEqual(diez(8,3), False,"Esperado: False")
          self.assertEqual(diez(10,42), True,"Esperado: True") |br|
          self.assertEqual(diez(12,-2), True,"Esperado: True")


  myTests().main()


.. activecode:: dista10
  :nocodelens:

  G. dista10 |br|
   ser un número entero n |br|
   devuelve Verdadero si la diferencia absoluta entre n y 100 o n y 200 |br|
   es menor o igual que 10 |br|
   dista10 (93) -> True |en|
   dista10 (90) -> True |en|
   dista10 (89) -> Falso |en|


  ~~~~
  def dista10(n):
       

  ====
  from unittest.gui import TestCaseGui

  class myTests(TestCaseGui):

      def testOne(self):
          self.assertEqual(dista10(93), True,"Esperado: True")
          self.assertEqual(dista10(90), True,"Esperado: True")
          self.assertEqual(dista10(89), False,"Esperado: False")
          self.assertEqual(dista10(110), True,"Esperado: True")
          self.assertEqual(dista10(111), False,"Esperado: False")
          self.assertEqual(dista10(121), False,"Esperado: False")
          self.assertEqual(dista10(0), False,"Esperado: False")
          self.assertEqual(dista10(5), False,"Esperado: False")
          self.assertEqual(dista10(191), True,"Esperado: True")
          self.assertEqual(dista10(189), False,"Esperado: False")
          self.assertEqual(dista10(190), True,"Esperado: True")
          self.assertEqual(dista10(200), True,"Esperado: True")
          self.assertEqual(dista10(210), True,"Esperado: True")
          self.assertEqual(dista10(211), False,"Esperado: False")
          self.assertEqual(dista10(290), False,"Esperado: False")

  myTests().main()


.. activecode:: apaga
  :nocodelens:

  H. borra | br |
   ser una cadena sy un entero n |br|
   devuelve una nueva cadena sin la posición n |br|
   delete ('gatito', 1) -> 'ktten' |en|
   delete ('gatito', 4) -> 'kittn' |en|
  ~~~~
  def apaga(s,n):
       

  ====
  from unittest.gui import TestCaseGui

  class myTests(TestCaseGui):

      def testOne(self):
          self.assertEqual(apagar('kitten',1), "ktten","Esperado: ktten")
          self.assertEqual(apagar('kitten',0), "itten","Esperado: itten")
          self.assertEqual(apagar('kitten',4), "kittn","Esperado: kittn")
          self.assertEqual(apagar('Hi',0), "i","Esperado: i")
          self.assertEqual(apagar('Hi',1), "H","Esperado: H")
          self.assertEqual(apagar('code',0), "ode","Esperado: ode")
          self.assertEqual(apagar('code',1), "cde","Esperado: cde")
          self.assertEqual(apagar('code',2), "coe","Esperado: coe")
          self.assertEqual(apagar('code',3), "cod","Esperado: cod")
          self.assertEqual(apagar('chocolate',8), "chocolat","Esperado: chocolat")



  myTests().main()



.. activecode:: troca
  :nocodelens:

  I. intercambio |br|
   ser una cadena s | br |
   si s tiene un tamaño <= 1, se devuelve a sí mismo |br|
   de lo contrario, cambie la primera y la última letra |br|
   exchange ('código') -> 'eodc' |br|
   intercambio ('a') -> 'a' |br|
   intercambio ('ab') -> 'ba' |br|

  ~~~~
  def troca(s):
       

  ====
  from unittest.gui import TestCaseGui

  class myTests(TestCaseGui):

      def testOne(self):
          self.assertEqual(intercambiar('code'), 'eodc',"Esperado: eodc")
          self.assertEqual(intercambiar('a'), 'a',"Esperado: a")
          self.assertEqual(intercambiar('ab'), 'ba',"Esperado: ba")
          self.assertEqual(intercambiar('abc'), 'cba',"Esperado: cba")
          self.assertEqual(intercambiar(' '), ' ',"Esperado: ' '")
          self.assertEqual(intercambiar('Chocolate'), 'ehocolatC',"Esperado: ehocolatC")
          self.assertEqual(intercambiar('nythoP'), 'Python',"Esperado: Python")
          self.assertEqual(intercambiar('hello'), 'oellh',"Esperado: oellh")
           

  myTests().main()
