=============
Quiz - Extras
=============

.. |br| raw:: html

   <br />


.. activecode:: Josephus
   :nocodelens:

   Problema de Josephus. Imagine que temos n pessoas dispostas em círculo. Suponha que as pessoas estão numeradas 1 a n no sentido horário. |br|
   Começando com a pessoa de número 1, percorra o círculo no sentido horário e elimine cada m-ésima pessoa en quanto o círculo tiver duas ou mais pessoas. |br|
   Qual o número do sobrevivente? |br|

   ~~~~
   def josephus(n,m):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           
           self.assertEqual(josephus(50,3), 11,"Esperado: 11")

   myTests().main()




.. activecode:: soe
   :nocodelens:

   Implemente o crivo de Eratóstenes |br|
   `crivo de Eratóstenes <https://pt.wikipedia.org/wiki/Crivo_de_Erat%C3%B3stenes>`_ |br|
   Devolve o número de números primos até n, incluindo e usando a peneira de Eratóstenes |br|


   ~~~~
   def crivo(n):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           
           self.assertEqual(crivo(20),8,"Esperado: 8")
           self.assertEqual(crivo(12),5,"Esperado: 5")
           self.assertEqual(crivo(30),10,"Esperado: 10")
           self.assertEqual(crivo(5),3,"Esperado: 3")

   myTests().main()




.. activecode:: ep2
   :nocodelens:

    Verifique para que serve a palavra reservada yield e dpois resolva o problema 2 do Euler Project. |br|
    `Problem <https://projecteuler.net/problem=2>`_ |br|
    Aqui, retorne a soma considerando os termos na seqüência de Fibonacci cujos valores não excedam n |br|


   ~~~~
   def ep2(n):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           
           self.assertEqual(ep2(4000000),4613732,"Esperado: 4613732")
           self.assertEqual(ep2(10),10,"Esperado: 10")
           self.assertEqual(ep2(100),44,"Esperado: 44")
    

   myTests().main()


.. activecode:: chessgrainsum
   :nocodelens:

   No livro “O Homem que Calculava”, de Malba Tahan, um personagem desejava ganhar os grãos de trigos que fossem distribuídos sobre um tabuleiro de xadrez do seguinte modo: |br|
   um grão na primeira casa do tabuleiro, o dobro (2) na segunda, novamente o dobro (4) na terceira, outra vez o dobro (8) na quarta, e assim por diante, até a sexagésima quarta casa do tabuleiro. |br| 
   Faça um algoritmo que calcule a quantidade total de grãos de trigos necessários para realizar esta distribuição |br|
   Retorne a quantia completando a função, onde a entrada n é 64 |br|


   ~~~~
   def grainsum(n):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           
           self.assertEqual(grainsum(64),18446744073709551615,"Esperado: 18446744073709551615")
    

   myTests().main()


.. activecode:: tiles
   :nocodelens:

   N telhas com dimensões de 10cm x 10cm são dadas. Com eles, você deve montar um conjunto de quadrados (com espessura de um ladrilho) para usar TODOS os ladrilhos dados. |br|
   Inicialmente, você deve montar o maior quadrado possível com as peças fornecidas; Então, com as peças restantes, você deve montar o maior quadrado possível e assim por diante. |br|
   Por exemplo, se 31 peças são dadas, o conjunto montado terá quatro peças, 1 quadrado com 5 peças como um lado, 1 quadrado com 2 peças laterais e 2 casas de 1 peça. |br|
   Faça uma função que obtenha o número de blocos e calcule quais quadrados são montados. |br|
   Devolve um dicionário cuja chave representa o tamanho do lado do quadrado e o valor representa a frequência desses quadrados. |br|

   ~~~~
   def tiles(n):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           
           self.assertEqual(tiles(31),{5:1,2:1,1:2},"Esperado: {5:1,2:1,1:2}")
           self.assertEqual(tiles(76),{8:1,3:1,1:3},"Esperado: {8:1,3:1,1:3}")
           self.assertEqual(tiles(290),{17:1,1:1},"Esperado: {17:1,1:1}")
           self.assertEqual(tiles(347),{18:1,4:1,2:1,1:3},"Esperado: {18:1,4:1,2:1,1:3}")
    

   myTests().main()