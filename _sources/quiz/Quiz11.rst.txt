=========
Quiz - 11
=========

.. |br| raw:: html

   <br />


.. activecode:: donuts
   :nocodelens:

   A. donuts |br|
   Para um inteiro n retorna uma string na forma 'Número de donuts: <n>' |br|
   onde n é o valor passado como argumento. |br|
   Caso n >= 10 devo retornar 'muitos' em lugar do número. |br|
   donuts(5) returns 'Número de donuts: 5' |br|
   donuts(23) returns 'Número de donuts: muitos' |br|

   ~~~~
   def donuts(n):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           
           self.assertEqual(donuts(4), 'Número de donuts: 4',"Esperado: Número de donuts: 4")
           self.assertEqual(donuts(9), 'Número de donuts: 9',"Esperado: Número de donuts: 9")
           self.assertEqual(donuts(10), 'Número de donuts: muitos',"Esperado: Número de donuts: muitos")
           self.assertEqual(donuts(99), 'Número de donuts: muitos',"Esperado: Número de donuts: muitos")
              

   myTests().main()


.. activecode:: pontas
   :nocodelens:

   B. pontas |br|
   Dada uma string s, retorna uma string com as duas primeiras e as duas |br|
   últimas letras da string original s |br|
   Assim 'palmeiras' retorna 'paas' |br|
   No entanto, se a string tiver menos que 2 letras, retorna uma string vazia |br|

   ~~~~
   def pontas(s):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           
           self.assertEqual(pontas('palmeiras'), 'paas',"Esperado: paas")
           self.assertEqual(pontas('algoritmos'), 'alos',"Esperado: alos")
           self.assertEqual(pontas('a'), '',"Esperado: ''")
           self.assertEqual(pontas('xyz'), 'xyyz',"Esperado: xyyz")
 
              

   myTests().main()


.. activecode:: fixa_primeiro
   :nocodelens:

   C. fixa_primeiro |br|
   Dada uma string s, retorna uma string onde todas as ocorrências |br|
   do primeiro caracter são trocados por '*', exceto para o primeiro |br|
   Assim 'abacate' retorna 'ab*c*te' |br|
   Dica: use s.replace(stra, strb)  |br|

   ~~~~
   def fixa_primeiro(s):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           
           self.assertEqual(fixa_primeiro('babble'), 'ba**le',"Esperado: ba**le")
           self.assertEqual(fixa_primeiro('aardvark'), 'a*rdv*rk',"Esperado: a*rdv*rk")
           self.assertEqual(fixa_primeiro('google'), 'goo*le',"Esperado: goo*le")
           self.assertEqual(fixa_primeiro('donut'), 'donut',"Esperado: donut")
 
              

   myTests().main()


.. activecode:: mistura2
   :nocodelens:

   D. mistura2 |br|
   Sejam duas strings a e b |br|
   Retorno uma string '<a> <b>' separada por um espaço |br|
   com as duas letras trocadas de cada string  |br|
   'mix', pod' -> 'pox mid' |br|
   'dog', 'dinner' -> 'dig donner' |br|

   ~~~~
   def mistura2(a, b):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           
           self.assertEqual(mistura2('mix', 'pod'), 'pox mid',"Esperado: pox mid")
           self.assertEqual(mistura2('dog', 'dinner'), 'dig donner',"Esperado: dig donner")
           self.assertEqual(mistura2('gnash', 'sport'), 'spash gnort',"Esperado: spash gnort")
           self.assertEqual(mistura2('pezzy', 'firm'), 'fizzy perm',"Esperado: fizzy perm")
 
              

   myTests().main()

.. activecode:: palindrome
   :nocodelens:

   E. palindrome |br|
   Verifique se uma string é palíndrome |br|
   palindrome('asa') True |br|
   palindrome('casa') False  |br|


   ~~~~
   def palindrome(s):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           
           self.assertEqual(palindrome('asa'), True,"Esperado: True")
           self.assertEqual(palindrome('casa'), False,"Esperado: False")
              

   myTests().main()


.. activecode:: busca
   :nocodelens:

   F. busca (COMP 89 IME-USP) |br|
   Verifique quantas ocorrências de uma palavra há numa frase |br|
   frase = 'ana e mariana gostam de banana' |br|
   palavra = 'ana' |br|
   busca ('ana e mariana gostam de banana', 'ana') == 4 |br|
   Hall of Fame Victor H. Panisa, 1a turma Python para Zumbis |br|


   ~~~~
   def busca(frase, palavra):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):

           self.assertEqual(busca('ana e mariana gostam de banana', 'ana'), 4,"Esperado: 4")
           self.assertEqual(busca('uma arara ou duas araras', 'ara'), 4,"Esperado: 4") 
              

   myTests().main()