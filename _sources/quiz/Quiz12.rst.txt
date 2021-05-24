=========
Quiz - 12
=========

.. |br| raw:: html

   <br />


.. activecode:: verbing
   :nocodelens:

   G. verbing |br|
   Dada uma string, caso seu comprimento seja pelo menos 3, |br|
   adiciona 'ing' no final |br|
   Caso a string já termine em 'ing', acrescentará 'ly'. |br|
   
   ~~~~
   def verbing(s):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           
           self.assertEqual(verbing('hail'), 'hailing',"Esperado: hailing")
           self.assertEqual(verbing('swiming'), 'swimingly',"Esperado: swimingly")
           self.assertEqual(verbing('do'), 'do',"Esperado: do")
              

   myTests().main()


.. activecode:: not_bad
   :nocodelens:

   H. not_bad |br|
   Dada uma string, procura a primeira ocorrência de 'not' e 'bad' |br|
   Se 'bad' aparece depois de 'not' troca 'not' ... 'bad' por 'good' |br|
   Assim 'This dinner is not that bad!' retorna 'This dinner is good!' |br|
   
   ~~~~
   def not_bad(s):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           
           self.assertEqual(not_bad('This movie is not so bad'), 'This movie is good',"Esperado: This movie is good")
           self.assertEqual(not_bad('This dinner is not that bad!'), 'This dinner is good!',"Esperado: This dinner is good!")
           self.assertEqual(not_bad('This tea is not hot'), 'This tea is not hot',"Esperado: This tea is not hot")
           self.assertEqual(not_bad("It's bad yet not"), "It's bad yet not","Esperado: It's bad yet not")

   myTests().main()


.. activecode:: inicio_final
   :nocodelens:

   I. inicio_final |br|
   Divida cada string em dois pedaços. |br|
   Se a string tiver um número ímpar de caracteres o primeiro pedaço terá um caracter a mais, |br|
   Exemplo: 'abcde', divide-se em 'abc' e 'de'. |br|
   Dadas 2 strings, a e b, retorna a string |br|
   a_inicio + b_inicio + a_final + b_final |br|
   
   ~~~~
   def inicio_final(a, b):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           
           self.assertEqual(inicio_final('abcd', 'xy'), 'abxcdy',"Esperado: abxcdy" )
           self.assertEqual(inicio_final('abcde', 'xyz'), 'abcxydez',"Esperado: abcxydez" )
           self.assertEqual(inicio_final('Kitten', 'Donut'), 'KitDontenut',"Esperado: KitDontenut" )


   myTests().main()



.. activecode:: zeros_finais
   :nocodelens:

   J. zeros finais |br|
   Verifique quantos zeros há no final de um número inteiro positivo |br|
   Exemplo: 10010 tem 1 zero no fim e 908007000 possui três |br|
   
   ~~~~
   def zf(n):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           
           self.assertEqual(zf(10100100010000), 4,"Esperado: 4")
           self.assertEqual(zf(90000000000000000010), 1,"Esperado: 1")

   myTests().main()


.. activecode:: conta_2
   :nocodelens:

   K. conta 2 |br|
   Verifique quantas vezes o dígito 2 aparece entre 0 e n-1 |br|
   Exemplo: para n = 20 o dígito 2 aparece duas vezes entre 0 e 19 |br|
   
   ~~~~
   def conta2(n):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           
           self.assertEqual(conta2(20), 2,"Esperado: 2")
           self.assertEqual(conta2(999), 300,"Esperado: 300")
           self.assertEqual(conta2(555), 216,"Esperado: 216")

   myTests().main()


.. activecode:: inip2
   :nocodelens:

   L. inicio em potencia de 2 |br|
   Dado um número inteiro positivo n retorne a primeira potência de 2 |br|
   que tenha o início igual a n |br|
   Exemplo: para n = 65 retornará 16 pois 2**16 = 65536 |br|

   ~~~~
   def inip2(n):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           
           self.assertEqual(inip2(7), 46,"Esperado: 46")
           self.assertEqual(inip2(133), 316,"Esperado: 316")
           self.assertEqual(inip2(1024), 10,"Esperado: 10")

   myTests().main()