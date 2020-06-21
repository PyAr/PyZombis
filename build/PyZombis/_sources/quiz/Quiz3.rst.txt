========
Quiz - 3
========

.. |br| raw:: html

   <br />


.. activecode:: q3_1
   :nocodelens:

   Dizemos que um número natural é triangular se ele é produto de três números naturais consecutivos. |br|
   Exemplo: 120 é triangular, pois 4.5.6 = 120. Dado um inteiro não-negativo n, verificar se n é triangular |br|
   Return True or False |br|
   
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

   Indique como um troco deve ser dado utilizando-se um número mínimo de notas. Seu algoritmo deve ler o valor da conta a ser paga e o valor do pagamento efetuado desprezandoos centavos. |br|
   Suponha que as notas para troco sejam as de 50, 20, 10, 5, 2 e 1 reais, e que nenhuma delas esteja em falta no caixa. |br|

   Return a list with amount of each notes. The first item of list depicts 50 , next 20, and so on till 1. [Same order as shown above] |br|
   
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

   Verifique se um inteiro positivo n é primo. |br|

   Retorna True se prime e False se não for primo. |br|
   
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

   Dado um número inteiro positivo, determine a sua decomposição em fatores primos calculando também a multiplicidade de cada fator. |br|

   Retorna um dicionário com as chaves como primos e seus respectivos valores como a freqüência do primo na fatoração primária do número. |br|

   As chaves devem estar em ordem decrescente. |br| 

   
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

   Faça um programa que pedir um inteiro positivo e mostrá-lo invertido. Ex .: 1234 gera 4321. Retorna o número invertido. |br|

   
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
