=========
Quiz - 6
=========

.. |br| raw:: html

   <br />


.. tabbed:: quiz6

   .. tab:: Exercise 1

      .. activecode:: q6_1
         :nocodelens:

         Develop the function ``sleep`` that takes two parameters, 
         ``weekday`` and ``holiday``, both parameters take boolean values, 
         meaning they can be either ``True`` or ``False``. The function acts as follows: 
         you can sleep when it's a holiday or when it's not a weekday. 
         ``sleep`` will return ``True`` or ``False`` whether or not you will sleep. |br| |br|
         Examples: |br|
         ``sleep(False, False)`` -> ``True`` |br|
         ``sleep(True, False)`` -> ``False`` |br|

         ~~~~
         def sleep(weekday, holiday):


         ====
         from unittest.gui import TestCaseGui


         class myTests(TestCaseGui):
            def testOne(self):
               self.assertEqual(sleep(False, False), True, "Excellent! Obtained: True Expected: True")
               self.assertEqual(sleep(True, False), False, "Excellent! Obtained: False Expected: False")
               self.assertEqual(sleep(False, True), True, "Excellent! Obtained: True Expected: True")
               self.assertEqual(sleep(True, True), True, "Excellent! Obtained: True Expected: True")
         
         
         myTests().main()


   .. tab:: Exercise 2

      .. activecode:: q6_2
         :nocodelens:

         Develop the function ``students_in_trouble`` that takes two parameters,
         ``a_smiling`` and ``b_smiling``. a and b represent two students.
         ``a_smiling`` and ``b_smiling`` indicate if a and b are smiling. When both
         are smiling or both are not smiling we have trouble. ``students_in_trouble``
         should return ``True`` when there is trouble. Otherwise, it will return ``False``.
         |br| |br|
         Examples: |br|
         ``students_in_trouble(True, True)`` -> ``True`` |br|
         ``students_in_trouble(False, True)`` -> ``False`` |br|

         ~~~~
         def students_in_trouble(a_smiling, b_smiling):


         ====
         from unittest.gui import TestCaseGui


         class myTests(TestCaseGui):
            def testOne(self):
               self.assertEqual(students_in_trouble(True, True), True, "Expected: True")
               self.assertEqual(students_in_trouble(False, False), True, "Expected: True")
               self.assertEqual(students_in_trouble(True, False), False, "Expected: False")
               self.assertEqual(students_in_trouble(False, True), False, "Expected: False")


         myTests().main()


   .. tab:: Exercise 3

      .. activecode:: q6_3
         :nocodelens:

         Develop the function ``double_sum`` that takes two parameters, ``a`` and ``b``.
         Both are integers. The function should return the sum of ``a`` and ``b``.
         However, if the numbers are equal, it returns twice the sum. |br| |br|
         Examples: |br|
         ``double_sum(1, 2)`` -> ``3`` |br|
         ``double_sum(2, 2)`` -> ``8`` |br|

         ~~~~
         def double_sum(a, b):


         ====
         from unittest.gui import TestCaseGui


         class myTests(TestCaseGui):
            def testOne(self):
               self.assertEqual(double_sum(1, 2), 3, "Excellent! gotten: 3 expected: 3")
               self.assertEqual(double_sum(3, 2), 5, "Excellent! gotten: 5 expected: 5")
               self.assertEqual(double_sum(2, 2), 8, "Excellent! gotten: 8 expected: 8")
               self.assertEqual(double_sum(-1, 0), -1, "Excellent! gotten: -1 expected: -1")
               self.assertEqual(double_sum(0, 0), 0, "Excellent! gotten: 0 expected: 0")
               self.assertEqual(double_sum(0, 1), 1, "Excellent! gotten: 1 expected: 1")


         myTests().main()

   .. tab:: Exercise 4

      .. activecode:: q6_4
         :nocodelens:

         Develop the function ``absolute_difference_21`` that takes a parameter, ``n``, 
         and returns the absolute difference between ``n`` and 21 only if ``n`` 
         is less than or equal to 21. If it is greater, then it returns twice the 
         absolute difference between the number and 21. **Remember**: ``abs(x)`` returns 
         the absolute value of x. |br| |br|   
         Examples: |br|
         ``absolute_difference_21(19)`` -> ``2`` |br|
         ``absolute_difference_21(25)`` -> ``8`` |br|

         ~~~~
         def absolute_difference_21(n):


         ====
         from unittest.gui import TestCaseGui


         class myTests(TestCaseGui):
            def testOne(self):
               self.assertEqual(absolute_difference_21(19), 2, "Expected: 2")
               self.assertEqual(absolute_difference_21(10), 11, "Expected: 11")
               self.assertEqual(absolute_difference_21(21), 0, "Expected: 0")
               self.assertEqual(absolute_difference_21(22), 2, "Expected: 2")
               self.assertEqual(absolute_difference_21(25), 8, "Expected: 8")
               self.assertEqual(absolute_difference_21(30), 18, "Expected: 18")
         
         
         myTests().main()


   .. tab:: Exercise 5

      .. activecode:: q6_5
         :nocodelens:

         Develop the function ``parrot_trouble`` that takes two parameters, 
         ``talking``, which can be ``True`` or ``False``, and ``hour``, which takes a value 
         between 0 and 23. We have a parrot, and there is trouble if the parrot is talking 
         before 7 hours or after 20 hours. Return ``True`` if there are 
         problems or ``False`` if there are not. |br| |br|
         Examples: |br|
         ``parrot_trouble(True, 6)`` -> ``True`` |br|
         ``parrot_trouble(True, 20)`` -> ``False`` |br|

         ~~~~
         def parrot_trouble(talking, hour):


         ====
         from unittest.gui import TestCaseGui


         class myTests(TestCaseGui):
            def testOne(self):
               self.assertEqual(parrot_trouble(True, 6), True, "Expected: True")
               self.assertEqual(parrot_trouble(True, 7), False, "Expected: False")
               self.assertEqual(parrot_trouble(True, 21), True, "Expected: True")
               self.assertEqual(parrot_trouble(True, 23), True, "Expected: True")
               self.assertEqual(parrot_trouble(True, 20), False, "Expected: False")
               self.assertEqual(parrot_trouble(False, 6), False, "Expected: False")
               self.assertEqual(parrot_trouble(False, 21), False, "Expected: False")
         
         
         myTests().main()


   .. tab:: Exercise 6

      .. activecode:: q6_6
         :nocodelens:

         Develop the function ``makes10`` that takes two parameters, ``a`` and ``b``. 
         Returns ``True`` if one of the parameters is 10, or if the sum of both 
         is 10. Otherwise, it returns ``False``. |br| |br| 
         Examples: |br|
         ``makes10(9,10)`` -> ``True`` |br|
         ``makes10(1,9)`` -> ``True`` |br|
         ``makes10(8,3)`` -> ``False`` |br|

         ~~~~
         def makes10(a, b):


         ====
         from unittest.gui import TestCaseGui


         class myTests(TestCaseGui):
            def testOne(self):
               self.assertEqual(makes10(9, 10), True, "Expected: True")
               self.assertEqual(makes10(9, 9), False, "Expected: False")
               self.assertEqual(makes10(1, 9), True, "Expected: True")
               self.assertEqual(makes10(10, 1), True, "Expected: True")
               self.assertEqual(makes10(10, 10), True, "Expected: True")
               self.assertEqual(makes10(8, 2), True, "Expected: True")
               self.assertEqual(makes10(8, 3), False, "Expected: False")
               self.assertEqual(makes10(10, 42), True, "Expected: True")
               self.assertEqual(makes10(12, -2), True, "Expected: True")
         
         
         myTests().main()


   .. tab:: Exercise 7

      .. activecode:: q6_7
         :nocodelens:

         Develop the function ``near_hundred`` that takes ``n`` 
         as a parameter, which is an integer. Returns ``True`` if 
         the absolute difference between ``n`` and 100 or ``n`` and 200 is less than or 
         equal to 10. |br| |br|
         Examples: |br| 
         ``near_hundred(93)`` -> ``True`` |br|
         ``near_hundred(90)`` -> ``True`` |br|
         ``near_hundred(89)`` -> ``False`` |br|
         ``near_hundred(210)`` -> ``True`` |br|
         ``near_hundred(211)`` -> ``False`` |br|

         ~~~~
         def near_hundred(n):


         ====
         from unittest.gui import TestCaseGui


         class myTests(TestCaseGui):
            def testOne(self):
               self.assertEqual(near_hundred(93), True, "Expected: True")
               self.assertEqual(near_hundred(90), True, "Expected: True")
               self.assertEqual(near_hundred(89), False, "Expected: False")
               self.assertEqual(near_hundred(110), True, "Expected: True")
               self.assertEqual(near_hundred(111), False, "Expected: False")
               self.assertEqual(near_hundred(121), False, "Expected: False")
               self.assertEqual(near_hundred(0), False, "Expected: False")
               self.assertEqual(near_hundred(5), False, "Expected: False")
               self.assertEqual(near_hundred(191), True, "Expected: True")
               self.assertEqual(near_hundred(189), False, "Expected: False")
               self.assertEqual(near_hundred(190), True, "Expected: True")
               self.assertEqual(near_hundred(200), True, "Expected: True")
               self.assertEqual(near_hundred(210), True, "Expected: True")
               self.assertEqual(near_hundred(211), False, "Expected: False")
               self.assertEqual(near_hundred(290), False, "Expected: False")
         
         
         myTests().main()

   .. tab:: Exercise 8

      .. activecode:: q6_8
         :nocodelens:

         Develop the function ``remover_iesimo`` that receives a non-empty string ``s`` and a positive integer ``i``, and returns the original string without the i-th character. |br| |br| 
         Examples: |br|
         ``remover_iesimo("Hello", 1)`` -> ``"ello"`` |br|
         ``remover_iesimo("Hi", 2)`` -> ``"H"`` |br|
         ``remover_iesimo("PyZombiess", 10)`` -> ``"PyZombies"`` |br|

         ~~~~
         def remover_iesimo(s, i):


         ====
         from unittest.gui import TestCaseGui


         class myTests(TestCaseGui):
            def testOne(self):
               self.assertEqual(quitar_caracter("Hi", 0), "i", "Expected: i")
               self.assertEqual(quitar_caracter("Hi", 1), "H", "Expected: H")
               self.assertEqual(quitar_caracter("code", 0), "ode", "Expected: ode")
               self.assertEqual(quitar_caracter("code", 1), "cde", "Expected: cde")
               self.assertEqual(quitar_caracter("code", 2), "coe", "Expected: coe")
               self.assertEqual(quitar_caracter("code", 3), "cod", "Expected: cod")
               self.assertEqual(quitar_caracter("gatito", 1), "gtito", "Expected: gtito")
               self.assertEqual(quitar_caracter("gatito", 0), "atito", "Expected: atito")
               self.assertEqual(quitar_caracter("gatito", 4), "gatio", "Expected: gatio")
               self.assertEqual(quitar_caracter("chocolate", 8), "chocolat", "Expected: chocolat")
         
         
         myTests().main()


   .. tab:: Exercise 9

      .. activecode:: q6_9
         :nocodelens:

         Develop the function ``intercambiar`` that takes ``s`` as a parameter, representing a string. If ``s`` has a length of 1 or less, the same string is returned. Otherwise, the first and last letter of ``s`` are exchanged. |br| |br| 
         Examples: |br|
         ``intercambiar("codigo")`` -> ``"oodigc"`` |br|
         ``intercambiar("a")`` -> ``"a"`` |br|
         ``intercambiar("ab")`` -> ``"ba"`` |br|

         ~~~~
         def intercambiar(s):


         ====
         from unittest.gui import TestCaseGui


         class myTests(TestCaseGui):
            def testOne(self):
               self.assertEqual(intercambiar("code"), "eodc", "Expected: eodc")
               self.assertEqual(intercambiar("a"), "a", "Expected: a")
               self.assertEqual(intercambiar("ab"), "ba", "Expected: ba")
               self.assertEqual(intercambiar("abc"), "cba", "Expected: cba")
               self.assertEqual(intercambiar(" "), " ", "Expected: ' '")
               self.assertEqual(intercambiar("nythoP"), "Python", "Expected: Python")
               self.assertEqual(intercambiar("hello"), "oellh", "Expected: oellh")
               self.assertEqual(intercambiar("Chocolate"), "ehocolatC", "Expected: ehocolatC")
         
         
         myTests().main()