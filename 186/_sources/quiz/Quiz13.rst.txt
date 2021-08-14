=========
Quiz - 13
=========

.. |br| raw:: html

   <br />


Ejercicio 1
-----------

.. activecode:: q13_1
   :nocodelens:

   Desarrolle la función ``terminan_igual`` que, dada una lista de cadenas ``palabras``, devuelva el número de cadenas
   con longitud >= 2 donde el primer y último carácter son iguales. |br| |br|
   Ejemplo: |br|
   ``terminan_igual(["aba", "xyz", "aa", "x", "bbb"])`` -> ``3`` |br|
    
   ~~~~
   def terminan_igual(palabras):

       
   ====
   from unittest.gui import TestCaseGui


   class myTests(TestCaseGui):
       def testOne(self):
    
           self.assertEqual(terminan_igual(["aba", "xyz", "aa", "x", "bbb"]), 3, "Esperado: 3")
           self.assertEqual(terminan_igual(["", "x", "xy", "xyx", "xx"]), 2, "Esperado: 2")
           self.assertEqual(terminan_igual(["aaa", "be", "abc", "hello"]), 1, "Esperado: 1")
    
    
   myTests().main()


Ejercicio 2
-----------

.. activecode:: q13_2
   :nocodelens:

   Desarrolle la función ``x_antes`` que, dada una lista de cadenas ``palabras``, devuelva 
   otra lista en la que todas las cadenas que comienzan con el carácter ``'x'`` sean los primeros elementos de la lista. 
   Después, el resto de palabras serán acomodadas según su orden alfabético. **Nota**: Recuerde 
   que ``sorted(lista)`` devuelve una lista ordenada. |br| |br|
   Ejemplos: |br|
   ``x_antes(["bbb", "ccc", "axx", "xzz", "xaa"])`` -> ``["xaa", "xzz", "axx", "bbb", "ccc"]`` |br|
   ``x_antes(["ccc", "bbb", "aaa", "xcc", "xaa"])`` -> ``["xaa", "xcc", "aaa", "bbb", "ccc"]`` |br|

   ~~~~
   def x_antes(palabras):

       
   ====
   from unittest.gui import TestCaseGui


   class myTests(TestCaseGui):
       def testOne(self):
   
           self.assertEqual(
               x_antes(["bbb", "ccc", "axx", "xzz", "xaa"]),
               ["xaa", "xzz", "axx", "bbb", "ccc"],
               "Esperado: ['xaa', 'xzz', 'axx', 'bbb', 'ccc']",
           )
           self.assertEqual(
               x_antes(["ccc", "bbb", "aaa", "xcc", "xaa"]),
               ["xaa", "xcc", "aaa", "bbb", "ccc"],
               "Esperado: ['xaa', 'xcc', 'aaa', 'bbb', 'ccc']",
           )
           self.assertEqual(
               x_antes(["mix", "xyz", "apple", "xanadu", "aardvark"]),
               ["xanadu", "xyz", "aardvark", "apple", "mix"],
               "Esperado: ['xanadu', 'xyz', 'aardvark', 'apple', 'mix']",
           )
   
   
   myTests().main()


Ejercicio 3
-----------

.. activecode:: q13_3
   :nocodelens:

   Desarrolle la función ``ordenar_tuplas`` que, dada una lista de tuplas no vacías, devuelve otra lista 
   de tuplas ordenada de forma ascendente tomando en cuenta el último elemento de cada tupla. |br| |br|
   Ejemplos: |br|
   ``ordenar_tuplas([(1, 3), (3, 2), (2, 1)])`` -> ``[(2, 1), (3, 2), (1, 3)]`` |br|
   ``ordenar_tuplas([(2, 3), (1, 2), (3, 1)])`` -> ``[(3, 1), (1, 2), (2, 3)]`` |br|
   


   ~~~~
   def ordenar_tuplas(tuplas):

       

   ====
   from unittest.gui import TestCaseGui


   class myTests(TestCaseGui):
       def testOne(self):
   
           self.assertEqual(
               ordenar_tuplas([(1, 3), (3, 2), (2, 1)]), [(2, 1), (3, 2), (1, 3)], "Esperado: [(2, 1), (3, 2), (1, 3)]"
           )
           self.assertEqual(
               ordenar_tuplas([(2, 3), (1, 2), (3, 1)]), [(3, 1), (1, 2), (2, 3)], "Esperado: [(3, 1), (1, 2), (2, 3)]"
           )
           self.assertEqual(
               ordenar_tuplas([(1, 7), (1, 3), (3, 4, 5), (2, 2)]),
               [(2, 2), (1, 3), (3, 4, 5), (1, 7)],
               "Esperado: [(2, 2), (1, 3), (3, 4, 5), (1, 7)]",
           )
   
   
   myTests().main()
