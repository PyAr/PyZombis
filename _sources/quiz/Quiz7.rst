=========
Quiz - 7
=========

.. |br| raw:: html

   <br />


Ejercicio A
-----------

.. activecode:: multstring
   :nocodelens:

   Desarrolle la función ``multstring`` que recibe como parametros una cadena ``s`` y un entero positivo ``n`` y devuelve una nueva cadena que contiene ``n`` copias de la cadena original |br| |br|
   Ejemplo: ``multstring('Hola', 2)`` -> 'HolaHola'


   ~~~~
   def multstring(s,n):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(multstring('Hola', 2), 'HolaHola',"Esperado: HolaHola")
           self.assertEqual(multstring('Hola', 3), 'HolaHolaHola',"Esperado: HolaHolaHola")
           self.assertEqual(multstring('Hi', 1), 'Hi',"Esperado: Hi")
           self.assertEqual(multstring('Hi', 0), '',"Esperado: ''")
           self.assertEqual(multstring('Hi', 5), 'HiHiHiHiHi',"Esperado: HiHiHiHiHi")
           self.assertEqual(multstring('Oh Boy!', 2), 'Oh Boy!Oh Boy!',"Esperado: Oh Boy!Oh Boy!")
           self.assertEqual(multstring('x', 4), 'xxxx',"Esperado: xxxx")
           self.assertEqual(multstring('', 4), '',"Esperado: ''")
           self.assertEqual(multstring('code', 2), 'codecode',"Esperado: codecode")
           self.assertEqual(multstring('code', 3), 'codecodecode',"Esperado: codecodecode")

   myTests().main()


Ejercicio B
-----------

.. activecode:: string_splosion
   :nocodelens:

   Desarrolle la función ``string_splosion`` que recibe una cadena ``s`` y devuelva una nueva cadena siguiendo el patron descrito en los ejemplos |br| |br|
   Ejemplos:|br|
   ``string_splosion('Code')`` -> 'CCoCodCode' |br|
   ``string_splosion('abc')`` -> 'aababc' |br|
   ``string_splosion('ab')`` -> 'aab' |br|

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


Ejercicio C
-----------

.. activecode:: array_count9
   :nocodelens:


   Desarrolle la función ``array_count9`` que recibe como parametro una lista no vacía de números enteros ``nums`` y devuelva cuántas veces aparece el número 9 en la lista |br| |br|
   Ejemplo: ``array_count9([1, 99, 9])`` -> ``1``

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
           self.assertEqual(array_count9([1]), 0,"Esperado: 1")
           self.assertEqual(array_count9([4, 2, 4, 3, 1]), 0,"Esperado: 0")
           self.assertEqual(array_count9([9, 2, 99, 3, 1]), 1,"Esperado: 1")
           
    
   myTests().main()


Ejercicio D
-----------

.. activecode:: array_front9
   :nocodelens:


   Desarrolle la función ``array_front9`` que recibe una lista de números enteros ``nums`` y verifica si al menos uno de los primeros cuatro números es 9 |br| |br|
   Ejemplos:|br|
   ``array_front9([1, 2, 9, 3, 4])`` -> ``True`` |br|
   ``array_front9([1, 2, 3, 4, 9])`` -> ``False`` |br|
   ``array_front9([1, 2, 3, 4, 5])`` -> ``False`` |br|
   ``array_front9([1, 2, 9])`` -> ``True`` |br|

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



Ejercicio E
-----------

.. activecode:: hello_name
   :nocodelens:


   Desarrolle la función ``hello_name`` que recibe como parametro un cadena representa un nombre ``name`` y devuelva un saludo con este nombre |br| |br|
   Ejemplos: |br|
   ``hello_name('Bob')`` -> '¡Hola Bob!' |br|
   ``hello_name('Alice')`` -> '¡Hola Alice!' |br|
   ``hello_name('X')`` -> 'Hola X!' |br|

   ~~~~
   def hello_name(name):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(hello_name('Bob'), '¡Hola Bob!',"Esperado: ¡Hola Bob!")
           self.assertEqual(hello_name('Alice'), '¡Hola Alice!',"Esperado: ¡Hola Alice!")
           self.assertEqual(hello_name('X'), '¡Hola X!',"Esperado: ¡Hola X!")
           self.assertEqual(hello_name('Hola'), '¡Hola Hola!',"Esperado: ¡Hola Hola!")
         

   myTests().main()


Ejercicio F
-----------

.. activecode:: make_tags
   :nocodelens:


   Desarrolle la función ``make_tags`` que recibe dos cadenas ``tag`` y ``word`` y devuelva una nueva cadena formateada siguiendo el patrón de los ejemplos |br| |br|
   Ejemplos: |br|
   ``make_tags('i', 'Yay')`` -> '<i>Yay</i>' |br|
   ``make_tags('i', 'Hello')`` -> '<i>Hello</i>' |br|
   ``make_tags('cite', 'Yay')`` -> '<cite>Yay</cite>' |br|

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


Ejercicio G
-----------

.. activecode:: extra_end
   :nocodelens:


   Desarrolle la función ``extra_end`` que recibe una cadena ``s`` de al menos dos caracteres y devuelve una nueva cadena con las dos últimas letras repetidas tres veces |br| |br|
   Ejemplos: |br|
   ``extra_end('Hello')`` -> 'lololo' |br|
   ``extra_end('abb')`` -> 'bbbbbb' |br|
   ``extra_end('Hi')`` -> 'HiHiHi'  |br|

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



Ejercicio H
-----------

.. activecode:: new_extra_end
   :nocodelens:


   Desarrolle la función ``new_extra_end`` (variante de la función del Ejercicio G) que recibe una cadena ``s`` de al menos dos caracteres y un entero positivo ``n`` y devuelva una nueva cadena con las dos últimas letras repetidas ``n`` veces |br| |br|
   Ejemplos: |br|
   ``new_extra_end('Hello',3)`` -> 'lololo' |br|
   ``new_extra_end('abb',1)`` -> 'bb' |br|
   ``new_extra_end('Hi',5)`` -> 'HiHiHiHiHi'  |br|

   ~~~~
   def new_extra_end(s,n):



   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(new_extra_end('Hello', 3), 'lololo',"Esperado: lololo")
           self.assertEqual(new_extra_end('ab', 2), 'abab',"Esperado: abab")
           self.assertEqual(new_extra_end('Hi', 6), 'HiHiHiHiHiHi',"Esperado: HiHiHi")
           self.assertEqual(new_extra_end('Candy', 1), 'dy',"Esperado: dy")
           self.assertEqual(new_extra_end('Code', 0), '',"Esperado: ''")



   myTests().main()



Ejercicio I
-----------

.. activecode:: first_half
   :nocodelens:


   Desarrolle la función ``first_half`` que recibe una cadena ``s`` y devuelve la primera mitad de la cadena original |br| |br|
   Ejemplos:|br|
   ``first_half('WooHoo')`` -> 'Woo' |br|
   ``first_half('HelloThere')`` -> 'Hello' |br|
   ``first_half('abcdef')`` -> 'abc' |br|

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


Ejercicio J
-----------

.. activecode:: remove_first_last
   :nocodelens:


   Desarrolle la función ``remove_first_last`` que recibe una cadena ``s`` de al menos dos caracteres y devuelva una cadena sin el primer y último carácter |br| |br|
   Ejemplos: |br|
   ``remove_first_last('Hello')`` -> 'ell' |br|
   ``remove_first_last('python')`` -> 'ytho' |br|
   ``remove_first_last('coding')`` -> 'odin' |br|

   ~~~~
   def remove_first_last(s):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(remove_first_last('Hello'), 'ell',"Esperado: ell")
           self.assertEqual(remove_first_last('Python'), 'ytho',"Esperado: ytho")
           self.assertEqual(remove_first_last('coding'), 'odin',"Esperado: odin")
           self.assertEqual(remove_first_last('code'), 'od',"Esperado: od")
           self.assertEqual(remove_first_last('ab'), '',"Esperado: ")
           self.assertEqual(remove_first_last(' PyZombies '), 'PyZombies',"Esperado: PyZombies")
           self.assertEqual(remove_first_last('Chocolate!'), 'hocolate',"Esperado: hocolate")
           self.assertEqual(remove_first_last('kitten'), 'itte',"Esperado: itte")
           self.assertEqual(remove_first_last('woohoo'), 'ooho',"Esperado: ooho")
        
           
   myTests().main()


Ejercicio K
-----------

.. activecode:: left2
   :nocodelens:


   Desarrolle la función ``left2`` que recibe una cadena ``s`` de al menos dos caracteres y devuelva la cadena original rotada 2 posiciones a la izquierda |br| |br|
   Ejemplos:|br|
   ``left2('Hello')`` -> 'lloHe' |br|
   ``left2('Hi')`` -> 'Hi' |br|

   ~~~~
   def left2(s):



   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(left2('Hello'), 'lloHe',"Esperado: lloHe")
           self.assertEqual(left2('python'), 'thonpy',"Esperado: thonpy")
           self.assertEqual(left2('Hi'), 'Hi',"Esperado: Hi")
           self.assertEqual(left2('code'), 'deco',"Esperado: deco")
           self.assertEqual(left2('cat'), 'tca',"Esperado: tca")
           self.assertEqual(left2('12345'), '34512',"Esperado: 34512")
           self.assertEqual(left2('Chocolate'), 'ocolateCh',"Esperado: ocolateCh")
           self.assertEqual(left2('bricks'), 'icksbr',"Esperado: icksbr")
           self.assertEqual(left2('isPyzomb'), 'PyZombies',"Esperado: PyZombies")



   myTests().main()



Ejercicio L
-----------

.. activecode:: remove_iesimo
   :nocodelens:


   Desarrolle la función ``remove_iesimo`` que recibe una cadena ``s`` no vacía y un entero positivo ``i`` y devuelva la cadena original sin el i-esimo caracter |br| |br|
   Ejemplos:|br|
   ``remove_iesimo('Hello',1)`` -> 'ello' |br|
   ``remove_iesimo('Hi',2)`` -> 'H' |br|
   ``remove_iesimo('PyZombiess', 10)`` -> 'PyZombies' |br|

   ~~~~
   def remove_iesimo(s,i):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(remove_iesimo('Hello', 1), 'ello',"Esperado: ello")
           self.assertEqual(remove_iesimo('python', 6), 'pytho',"Esperado: pytho")
           self.assertEqual(remove_iesimo('Hi', 0), 'Hi',"Esperado: Hi")
           self.assertEqual(remove_iesimo('code', 5), 'code',"Esperado: code")
           self.assertEqual(remove_iesimo('cat', 1), 'ct',"Esperado: ct")
           self.assertEqual(remove_iesimo('12345', 3), '1245',"Esperado: 1245")
           self.assertEqual(remove_iesimo('Chocolate', 15), 'Chocolate',"Esperado: Chocolate")
           self.assertEqual(remove_iesimo('Hola mundo', 5), 'Holamundo',"Esperado: Holamundo")
           self.assertEqual(remove_iesimo('Pyzombis ', 9), 'PyZombies',"Esperado: PyZombies")
         
        
           
   myTests().main()
