=========
Quiz - 13
=========

.. |br| raw:: html

   <br />


.. activecode:: fim_igual
   :nocodelens:

   A. fim_igual |br|
   Dada uma lista de strings, retorna o número de strings |br|
   com tamanho >= 2 onde o primeiro e o último caracteres são iguais |br|

   ~~~~
   def fim_igual(words):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           
           self.assertEqual(fim_igual(['aba', 'xyz', 'aa', 'x', 'bbb']), 3,"Esperado: 3")
           self.assertEqual(fim_igual(['', 'x', 'xy', 'xyx', 'xx']), 2,"Esperado: 2")
           self.assertEqual(fim_igual(['aaa', 'be', 'abc', 'hello']), 1,"Esperado: 1")
              

   myTests().main()



.. activecode:: x_antes
   :nocodelens:

   B. x_antes |br|
   Dada uma lista de strings retorna uma lista onde todos os elementos |br|
   que começam com x ficam sorteados antes  |br|
   Exemplo ['mix', 'xyz', 'apple', 'xanadu', 'aardvark'] retorna |br|
   ['xanadu', 'xyz', 'aardvark', 'apple', 'mix'] |br|
   Dica: monte duas listas separadas e junte-as no final |br|

   ~~~~
   def x_antes(words):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           
           self.assertEqual(x_antes(['bbb', 'ccc', 'axx', 'xzz', 'xaa']),['xaa', 'xzz', 'axx', 'bbb', 'ccc'],"Esperado: ['xaa', 'xzz', 'axx', 'bbb', 'ccc']")
           self.assertEqual(x_antes(['ccc', 'bbb', 'aaa', 'xcc', 'xaa']),['xaa', 'xcc', 'aaa', 'bbb', 'ccc'],"Esperado: ['xaa', 'xcc', 'aaa', 'bbb', 'ccc']")
           self.assertEqual(x_antes(['mix', 'xyz', 'apple', 'xanadu', 'aardvark']),['xanadu', 'xyz', 'aardvark', 'apple', 'mix'],"Esperado: ['xanadu', 'xyz', 'aardvark', 'apple', 'mix']")
              

   myTests().main


.. activecode:: sort_last
   :nocodelens:

   C. sort_last |br|
   Dada uma lista de tuplas não vazias retorna uma tupla ordenada |br|
   por ordem crescente do último elemento |br| 
   Exemplo [(1, 7), (1, 3), (3, 4, 5), (2, 2)] retorna |br|
   [(2, 2), (1, 3), (3, 4, 5), (1, 7)] |br|
   Dica: use key=função que você definiu e que retorna o último elemento |br|


   ~~~~
   def sort_last(tuples):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           
           self.assertEqual(sort_last([(1, 3), (3, 2), (2, 1)]),[(2, 1), (3, 2), (1, 3)],"Esperado: [(2, 1), (3, 2), (1, 3)]")
           self.assertEqual(sort_last([(2, 3), (1, 2), (3, 1)]),[(3, 1), (1, 2), (2, 3)],"Esperado: [(3, 1), (1, 2), (2, 3)]")
           self.assertEqual(sort_last([(1, 7), (1, 3), (3, 4, 5), (2, 2)]),[(2, 2), (1, 3), (3, 4, 5), (1, 7)],"Esperado: [(2, 2), (1, 3), (3, 4, 5), (1, 7)]")



   myTests().main()
