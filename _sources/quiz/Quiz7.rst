=========
Quiz - 7
=========

.. |br| raw:: html

   <br />


.. activecode:: multstring
   :nocodelens:

   A. multstring
   seja uma string s e um inteiro positivo n |br|
   retorna uma string com n cópias da string original |br|
   multstring('Hi', 2) -> 'HiHi' |br|

   ~~~~
   def multstring(s,n):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(multstring('Hi', 2), 'HiHi',"Esperado: HiHi")
           self.assertEqual(multstring('Hi', 3), 'HiHiHi',"Esperado: HiHiHi")
           self.assertEqual(multstring('Hi', 1), 'Hi',"Esperado: Hi")
           self.assertEqual(multstring('Hi', 0), '',"Esperado: ''")
           self.assertEqual(multstring('Hi', 5), 'HiHiHiHiHi',"Esperado: HiHiHiHiHi")
           self.assertEqual(multstring('Oh Boy!', 2), 'Oh Boy!Oh Boy!',"Esperado: Oh Boy!Oh Boy!")
           self.assertEqual(multstring('x', 4), 'xxxx',"Esperado: xxxx")
           self.assertEqual(multstring('', 4), '',"Esperado: ''")
           self.assertEqual(multstring('code', 2), 'codecode',"Esperado: codecode")
           self.assertEqual(multstring('code', 3), 'codecodecode',"Esperado: codecodecode")

   myTests().main()


.. activecode:: string_splosion
   :nocodelens:

   B. string_splosion |br|
   string_splosion('Code') -> 'CCoCodCode' |br|
   string_splosion('abc') -> 'aababc' |br|
   string_splosion('ab') -> 'aab' |br|

   ~~~~
   def string_splosion(s):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(string_splosion('Code'), 'CCoCodCode',"Esperado: CCoCodCode")
           self.assertEqual(string_splosion('abc'), 'aababc',"Esperado: aababc")
           self.assertEqual(string_splosion('ab'), 'aab',"Esperado: aab")
           self.assertEqual(string_splosion('x'), 'x',"Esperado: x")
           self.assertEqual(string_splosion('fade'), 'ffafadfade',"Esperado: ffafadfade")
           self.assertEqual(string_splosion('There'), 'TThTheTherThere',"Esperado: TThTheTherThere")
           self.assertEqual(string_splosion('Kitten'), 'KKiKitKittKitteKitten',"Esperado: KKiKitKittKitteKitten")
           self.assertEqual(string_splosion('Bye'), 'BByBye',"Esperado: BByBye")
           self.assertEqual(string_splosion('Good'), 'GGoGooGood',"Esperado: GGoGooGood")
           self.assertEqual(string_splosion('Bad'), 'BBaBad',"Esperado: BBaBad")
        

   myTests().main()


.. activecode:: array_count9
   :nocodelens:


   C. array_count9 |br|
   conta quantas vezes aparece o 9 numa lista nums |br|

   ~~~~
   def array_count9(nums):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(array_count9([1, 99, 9]), 1,"Esperado: 1")
           self.assertEqual(array_count9([1, 9, 9]), 2,"Esperado: 2")
           self.assertEqual(array_count9([1, 9, 9, 3, 9]), 3,"Esperado: 3")
           self.assertEqual(array_count9([1, 2, 3]), 0,"Esperado: 0")
           self.assertEqual(array_count9([1, 2, 3]), 0,"Esperado: 0")
           self.assertEqual(array_count9([4, 2, 4, 3, 1]), 0,"Esperado: 0")
           self.assertEqual(array_count9([9, 2, 99, 3, 1]), 1,"Esperado: 1")
           
    
   myTests().main()


.. activecode:: array_front9
   :nocodelens:


   D. array_front9 |br| 
   verifica se pelo menos um dos quatro primeiros é nove |br|
   array_front9([1, 2, 9, 3, 4]) -> True |br|
   array_front9([1, 2, 3, 4, 9]) -> False |br|
   array_front9([1, 2, 3, 4, 5]) -> False |br|

   ~~~~
   def array_front9(nums):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(array_front9([1, 2, 9, 3, 4]), True,"Esperado: True")
           self.assertEqual(array_front9([1, 2, 3, 4, 9]), False,"Esperado: False")
           self.assertEqual(array_front9([1, 2, 3, 4, 5]), False,"Esperado: False")
           self.assertEqual(array_front9([9, 2, 3]), True,"Esperado: True")
           self.assertEqual(array_front9([1, 9, 9]), True,"Esperado: True")
           self.assertEqual(array_front9([1, 2, 3]), False,"Esperado: False")
           self.assertEqual(array_front9([1, 9]), True,"Esperado: True")
           self.assertEqual(array_front9([5, 5]), False,"Esperado: False")
           self.assertEqual(array_front9([2]), False,"Esperado: False")
           self.assertEqual(array_front9([9]), True,"Esperado: True")
           self.assertEqual(array_front9([]), False,"Esperado: False")
           self.assertEqual(array_front9([3, 9, 2, 3, 3]), True,"Esperado: True")
         
           
        

   myTests().main()


.. activecode:: hello_name
   :nocodelens:


   E. hello_name |br|
   seja uma string name |br|
   hello_name('Bob') -> 'Hello Bob!' |br|
   hello_name('Alice') -> 'Hello Alice!' |br|
   hello_name('X') -> 'Hello X!' |br|

   ~~~~
   def hello_name(name):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(hello_name('Bob'), 'Hello Bob!',"Esperado: Hello Bob!")
           self.assertEqual(hello_name('Alice'), 'Hello Alice!',"Esperado: Hello Alice!")
           self.assertEqual(hello_name('X'), 'Hello X!',"Esperado: Hello X!")
           self.assertEqual(hello_name('Hello'), 'Hello Hello!',"Esperado: Hello Hello!")
         

   myTests().main()


.. activecode:: make_tags
   :nocodelens:


   F. make_tags |br|
   make_tags('i', 'Yay'), '<i>Yay</i>' |br|
   make_tags('i', 'Hello'), '<i>Hello</i>' |br|
   make_tags('cite', 'Yay'), '<cite>Yay</cite>' |br|

   ~~~~
   def make_tags(tag,word):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(make_tags('i', 'Yay'), '<i>Yay</i>',"Esperado: <i>Yay</i>")
           self.assertEqual(make_tags('i', 'Hello'), '<i>Hello</i>',"Esperado:<i>Hello</i>")
           self.assertEqual(make_tags('cite', 'Yay'), '<cite>Yay</cite>',"Esperado: <cite>Yay</cite>")
           self.assertEqual(make_tags('address', 'here'), '<address>here</address>',"Esperado: <address>here</address>")
           self.assertEqual(make_tags('body', 'Heart'), '<body>Heart</body>',"Esperado: <body>Heart</body>")
           self.assertEqual(make_tags('i', 'i'), '<i>i</i>',"Esperado: <i>i</i>")
           self.assertEqual(make_tags('i', ''), '<i></i>',"Esperado: <i></i>")
           
         
   myTests().main()


.. activecode:: extra_end
   :nocodelens:


   G. extra_end |br|
   seja um string s com no mínimo duas letras |br|
   retorna três vezes as duas últimas letras |br|
   extra_end('Hello'), 'lololo' |br|
   extra_end('ab'), 'ababab' |br|
   extra_end('Hi'), 'HiHiHi'  |br|

   ~~~~
   def extra_end(s):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(extra_end('Hello'), 'lololo',"Esperado: lololo")
           self.assertEqual(extra_end('ab'), 'ababab',"Esperado: ababab")
           self.assertEqual(extra_end('Hi'), 'HiHiHi',"Esperado: HiHiHi")
           self.assertEqual(extra_end('Candy'), 'dydydy',"Esperado: dydydy")
           self.assertEqual(extra_end('Code'), 'dedede',"Esperado: dedede")
           
           
         
   myTests().main()


.. activecode:: first_half
   :nocodelens:


   H. first_half |br|
   seja uma string s |br|
   retorna a primeira metade da string |br|
   first_half('WooHoo') -> 'Woo' |br|
   first_half('HelloThere') -> 'Hello' |br|
   first_half('abcdef') -> 'abc' |br|

   ~~~~
   def first_half(s):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(first_half('WooHoo'), 'Woo',"Esperado: Woo")
           self.assertEqual(first_half('HelloThere'), 'Hello',"Esperado: Hello")
           self.assertEqual(first_half('abcdef'), 'abc',"Esperado: abc")
           self.assertEqual(first_half(''), '',"Esperado: ")
           self.assertEqual(first_half('ab'), 'a',"Esperado: a")
           self.assertEqual(first_half('0123456789'), '01234',"Esperado: 01234")
           self.assertEqual(first_half('kitten'), 'kit',"Esperado: kit")

           
   myTests().main()


.. activecode:: sem_pontas
   :nocodelens:


   I. sem_pontas |br|
   seja uma string s de pelo menos dois caracteres |br|
   retorna uma string sem o primeiro e último caracter |br|
   without_end('Hello') -> 'ell' |br|
   without_end('python') -> 'ytho' |br|
   without_end('coding') -> 'odin' |br|

   ~~~~
   def sem_pontas(s):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(sem_pontas('Hello'), 'ell',"Esperado: ell")
           self.assertEqual(sem_pontas('Python'), 'ytho',"Esperado: ytho")
           self.assertEqual(sem_pontas('coding'), 'odin',"Esperado: odin")
           self.assertEqual(sem_pontas('code'), 'od',"Esperado: od")
           self.assertEqual(sem_pontas('ab'), '',"Esperado: ")
           self.assertEqual(sem_pontas('Chocolate!'), 'hocolate',"Esperado: hocolate")
           self.assertEqual(sem_pontas('kitten'), 'itte',"Esperado: itte")
           self.assertEqual(sem_pontas('woohoo'), 'ooho',"Esperado: ooho")
        
           
   myTests().main()


.. activecode:: roda2
   :nocodelens:


   J. roda2 |br|
   rodar uma string s duas posições |br|
   a string possui pelo menos 2 caracteres |br|
   left2('Hello') -> 'lloHe' |br|
   left2('Hi') -> 'Hi' |br|

   ~~~~
   def roda2(s):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(roda2('Hello'), 'lloHe',"Esperado: lloHe")
           self.assertEqual(roda2('python'), 'thonpy',"Esperado: thonpy")
           self.assertEqual(roda2('Hi'), 'Hi',"Esperado: Hi")
           self.assertEqual(roda2('code'), 'deco',"Esperado: deco")
           self.assertEqual(roda2('cat'), 'tca',"Esperado: tca")
           self.assertEqual(roda2('12345'), '34512',"Esperado: 34512")
           self.assertEqual(roda2('Chocolate'), 'ocolateCh',"Esperado: ocolateCh")
           self.assertEqual(roda2('bricks'), 'icksbr',"Esperado: icksbr")
         
        
           
   myTests().main()