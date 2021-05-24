=========
Quiz - 7
=========

.. |br| raw:: html

   <br />


.. activecode:: multstring
   :nocodelens:

   A. multstring
    ser una cadena sy un entero positivo n |br|
    devuelve una cadena con n copias de la cadena original |br|
    multstring ('Hola', 2) -> 'HiHi' |en|


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
   cuenta cuántas veces aparece 9 en una lista de números |br|

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
   ser un nombre de cadena	 |br|
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
   ser una string s con al menos dos letras |br|
    devuelve las dos últimas letras tres veces |br|
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
   ser una string s |br|
    devuelve la primera mitad de la cadena |br|
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
           self.assertEqual(sin_puntos('Hello'), 'ell',"Esperado: ell")
           self.assertEqual(sin_puntos('Python'), 'ytho',"Esperado: ytho")
           self.assertEqual(sin_puntos('coding'), 'odin',"Esperado: odin")
           self.assertEqual(sin_puntos('code'), 'od',"Esperado: od")
           self.assertEqual(sin_puntos('ab'), '',"Esperado: ")
           self.assertEqual(sin_puntos('Chocolate!'), 'hocolate',"Esperado: hocolate")
           self.assertEqual(sin_puntos('kitten'), 'itte',"Esperado: itte")
           self.assertEqual(sin_puntos('woohoo'), 'ooho',"Esperado: ooho")
        
           
   myTests().main()


.. activecode:: roda2
   :nocodelens:


   J. roda2 |br|
   rotar una srting en dos posiciones |br|
    la cadena tiene al menos 2 caracteres |br|
   left2('Hello') -> 'lloHe' |br|
   left2('Hi') -> 'Hi' |br|

   ~~~~
   def roda2(s):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(rueda2('Hello'), 'lloHe',"Esperado: lloHe")
           self.assertEqual(rueda2('python'), 'thonpy',"Esperado: thonpy")
           self.assertEqual(rueda2('Hi'), 'Hi',"Esperado: Hi")
           self.assertEqual(rueda2('code'), 'deco',"Esperado: deco")
           self.assertEqual(rueda2('cat'), 'tca',"Esperado: tca")
           self.assertEqual(rueda2('12345'), '34512',"Esperado: 34512")
           self.assertEqual(rueda2('Chocolate'), 'ocolateCh',"Esperado: ocolateCh")
           self.assertEqual(rorueda2da2('bricks'), 'icksbr',"Esperado: icksbr")
         
        
           
   myTests().main()
