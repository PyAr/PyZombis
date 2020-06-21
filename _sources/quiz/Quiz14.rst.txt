=========
Quiz - 14
=========

.. |br| raw:: html

   <br />


.. activecode:: remove_iguais
   :nocodelens:

   D. Dada uma lista de números retorna uma lista sem os elementos repetidos |br|

   ~~~~
   def remove_iguais(nums):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           
           self.assertEqual(remove_iguais([2, 2, 1, 3]), [1, 2, 3],"Esperado: [1,2,3]")
           self.assertEqual(remove_iguais([2, 2, 3, 2, 3]), [2, 3],"Esperado: [2,3]")
           self.assertEqual(remove_iguais([]), [],"Esperado: []")
              

   myTests().main()


.. activecode:: Cripto_desafio
   :nocodelens:

   E. Cripto desafio!! |br|
   Dada uma frase, você deve retirar todas as letras repetidas das palavras |br|
   e ordenar as letras que sobraram |br|
   Exemplo: 'ana e mariana gostam de banana' vira 'an e aimnr agmost de abn' |br|
   Dicas: tente transformar cada palavra em um conjunto, depois tente sortear |br|
   as letras e montar uma string com o resultado. |br|
   Utilize listas auxiliares se facilitar |br|

   ~~~~
   def cripto(frase):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           
           self.assertEqual(cripto('ana e mariana gostam de banana'),'an e aimnr agmost de abn',"Esperado: an e aimnr agmost de abn")
           self.assertEqual(cripto('Batatinha quando nasce esparrama pelo chão'),'Bahint adnoqu acens aemprs elop choã',"Esperado: Bahint adnoqu acens aemprs elop choã")
              

   myTests().main()