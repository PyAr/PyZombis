=========
Quiz - 6
=========

.. activecode:: dormir
   :nocodelens:

   A. Dormir :
   dia_semana e True para dias de semana
   feriado e True nos feriados
   voce pode ficar dormindo quando e feriado ou nao e dia semana
   retorne True ou False conforme voce va dormir ou nao

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

   B. alunos_problema:
   temos dois alunos a e b
   a_sorri e b_sorri indicam se a e b sorriem
   temos problemas quando ambos estão sorrindo ou ambos
   não estão sorrindo
   retorne True quando houver problemas

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

   C. suma_doble
   dados dois números inteiros retorna sua soma
   porém se os números forem iguais retorna o dobro da soma
   soma_dobro(1, 2) -> 3
   soma_dobro(2, 2) -> 8

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

  D. diff21
  dado um inteiro n retorna a diferença absoluta entre n e 21
  porém se o número for maior que 21 retorna dobro da diferença absoluta
  diff21(19) -> 2
  diff21(25) -> 8
  dica: abs(x) retorna o valor absoluto de x

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

  E. papagaio
  temos um papagaio que fala alto
  hora é um parâmetro entre 0 e 23
  temos problemas se o papagaio estiver falando
  antes da 7 ou depois das 20

  ~~~~
  def papagaio(falando, hora):
       

  ====
  from unittest.gui import TestCaseGui

  class myTests(TestCaseGui):

      def testOne(self):
          self.assertEqual(papagaio(True, 6), True,"Esperado: True")
          self.assertEqual(papagaio(True, 7), False,"Esperado: False")
          self.assertEqual(papagaio(False, 6), False,"Esperado: False")
          self.assertEqual(papagaio(True, 21), True,"Esperado: True")
          self.assertEqual(papagaio(False, 21), False,"Esperado: False")
          self.assertEqual(papagaio(True, 23), True,"Esperado: True")
          self.assertEqual(papagaio(True, 20), False,"Esperado: False")
        

  myTests().main()


.. activecode:: dez
  :nocodelens:

  F. dez
  dados dois inteiros a e b
  retorna True se um dos dois é 10 ou a soma é 10

  ~~~~
  def dez(a,b):
       

  ====
  from unittest.gui import TestCaseGui

  class myTests(TestCaseGui):

      def testOne(self):
          self.assertEqual(dez(9,10), True,"Esperado: True")
          self.assertEqual(dez(9,9), False,"Esperado: False")
          self.assertEqual(dez(1,9), True,"Esperado: True")
          self.assertEqual(dez(10,1), True,"Esperado: True")
          self.assertEqual(dez(10,10), True,"Esperado: True")
          self.assertEqual(dez(8,2), True,"Esperado: True")
          self.assertEqual(dez(8,3), False,"Esperado: False")
          self.assertEqual(dez(10,42), True,"Esperado: True")
          self.assertEqual(dez(12,-2), True,"Esperado: True")


  myTests().main()


.. activecode:: dista10
  :nocodelens:

  G. dista10
  seja um inteiro n
  retorna True se a diferença absoluta entre n e 100 ou n e 200
  for menor ou igual a 10
  dista10(93) -> True
  dista10(90) -> True
  dista10(89) -> False

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

  H. apaga
  seja uma string s e um inteiro n
  retorna uma nova string sem a posição n
  apaga('kitten', 1) -> 'ktten'
  apaga('kitten', 4) -> 'kittn'

  ~~~~
  def apaga(s,n):
       

  ====
  from unittest.gui import TestCaseGui

  class myTests(TestCaseGui):

      def testOne(self):
          self.assertEqual(apaga('kitten',1), "ktten","Esperado: ktten")
          self.assertEqual(apaga('kitten',0), "itten","Esperado: itten")
          self.assertEqual(apaga('kitten',4), "kittn","Esperado: kittn")
          self.assertEqual(apaga('Hi',0), "i","Esperado: i")
          self.assertEqual(apaga('Hi',1), "H","Esperado: H")
          self.assertEqual(apaga('code',0), "ode","Esperado: ode")
          self.assertEqual(apaga('code',1), "cde","Esperado: cde")
          self.assertEqual(apaga('code',2), "coe","Esperado: coe")
          self.assertEqual(apaga('code',3), "cod","Esperado: cod")
          self.assertEqual(apaga('chocolate',8), "chocolat","Esperado: chocolat")



  myTests().main()



.. activecode:: troca
  :nocodelens:

  I. troca
  seja uma string s
  se s tiver tamanho <= 1 retorna ela mesma
  caso contrário troca a primeira e última letra
  troca('code') -> 'eodc'
  troca('a') -> 'a'
  troca('ab') -> 'ba'

  ~~~~
  def troca(s):
       

  ====
  from unittest.gui import TestCaseGui

  class myTests(TestCaseGui):

      def testOne(self):
          self.assertEqual(troca('code'), 'eodc',"Esperado: eodc")
          self.assertEqual(troca('a'), 'a',"Esperado: a")
          self.assertEqual(troca('ab'), 'ba',"Esperado: ba")
          self.assertEqual(troca('abc'), 'cba',"Esperado: cba")
          self.assertEqual(troca(' '), ' ',"Esperado: ' '")
          self.assertEqual(troca('Chocolate'), 'ehocolatC',"Esperado: ehocolatC")
          self.assertEqual(troca('nythoP'), 'Python',"Esperado: Python")
          self.assertEqual(troca('hello'), 'oellh',"Esperado: oellh")
           
           
  myTests().main()