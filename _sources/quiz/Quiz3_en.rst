========
Quiz - 3
========

.. |br| raw:: html

   <br />


.. tabbed:: quiz3

   .. tab:: Exercise 1

      .. activecode:: q3_1
         :nocodelens:

         We say that a natural number is triangular if it is the product of three consecutive natural numbers. |br| |br|
         Example: 120 is triangular, since 4 x 5 x 6 = 120. Given a non-negative integer ``n``, check if ``n`` is triangular. 
         Return ``True`` if the number is triangular or ``False`` if it is not. |br|
         
         ~~~~
         def triangular(n):

            
         ====
         from unittest.gui import TestCaseGui


         class myTests(TestCaseGui):
            def testOne(self):
               
               self.assertEqual(triangular(24), True, "Expected: True")
               self.assertEqual(triangular(7), False, "Expected: False")
               self.assertEqual(triangular(10), True, "Expected: True")
               self.assertEqual(triangular(23), False, "Expected: False")
                  

         myTests().main()


   .. tab:: Exercise 2
   
      .. activecode:: q3_2
         :nocodelens:

         Indicate how to make change using the minimum number of bills. 
         Your algorithm should read the amount of the bill to be paid, ``cobro``, and the amount 
         paid, ``pago``, without taking into account the cents. |br|
         Suppose the bills for change are 50, 20, 10, 5, 2 and 1, and that none of them is missing in the cash register. 
         Return a list with the quantity of each bill that represents the change. |br|
         The first element of the list matches the quantity of 50, 
         the next with 20, and so on until 1. (The same order as shown above). |br| |br|
         Examples: |br|
         ``calculate_change(50, 100)`` -> [1,0,0,0,0,0] |br|
         ``calculate_change(92, 100)`` -> [0,0,0,1,1,1] |br|

         ~~~~
         def calculate_change(cobro, pago):
      

         ====
         from unittest.gui import TestCaseGui


         class myTests(TestCaseGui):
            def testOne(self):
               
               self.assertEqual(calculate_change(50, 100), [1,0,0,0,0,0], "Expected: [1,0,0,0,0,0]")
               self.assertEqual(calculate_change(61, 100), [0,1,1,1,2,0], "Expected: [0,1,1,1,2,0]")
               self.assertEqual(calculate_change(92, 100), [0,0,0,1,1,1], "Expected: [0,0,0,1,1,1]")
                  

         myTests().main()


   .. tab:: Exercise 3

      .. activecode:: q3_3
         :nocodelens:

         Check whether a positive integer ``n`` is prime. |br|
         Return ``True`` if it is prime or ``False`` if it is not. |br|
         
         ~~~~
         def is_prime(n):

            
         ====
         from unittest.gui import TestCaseGui


         class myTests(TestCaseGui):
            def testOne(self):
               
               self.assertEqual(is_prime(2), True, "Expected: True")
               self.assertEqual(is_prime(49), False, "Expected: False")
               self.assertEqual(is_prime(541), True, "Expected: True")
               self.assertEqual(is_prime(8831), True, "Expected: True")
               self.assertEqual(is_prime(7952), False, "Expected: False")
                  

         myTests().main()

   
   .. tab:: Exercise 4

      .. activecode:: q3_4
         :nocodelens:

         Given a positive integer ``n``, determine its prime factorization 
         also calculating the multiplicity of each factor. 
         Return a dictionary with the keys as primes and their respective values as the 
         frequency of the prime in the prime factorization of the number. |br| |br|
         Examples: |br|
         ``factors(5)`` -> {5:1} |br|
         ``factors(420)`` -> {2:2, 3:1, 5:1, 7:1} |br|
         
         ~~~~
         def factors(n):
            

         ====
         from unittest.gui import TestCaseGui


         class myTests(TestCaseGui):
            def testOne(self):
               
               self.assertEqual(factors(5), {5:1}, "Expected: {5:1}")
               self.assertEqual(factors(84), {2:2, 3:1, 7:1}, "Expected: {2:2, 3:1, 7:1}")
               self.assertEqual(factors(123), {3:1, 41:1}, "Expected: {3:1, 41:1}")
               self.assertEqual(factors(81), {3:4}, "Expected: {3:4}")
               self.assertEqual(factors(420), {2:2, 3:1, 5:1, 7:1}, "Expected: {2:2, 3:1, 5:1, 7:1}")
                  

         myTests().main()


   .. tab:: Exercise 5

      .. activecode:: q3_5
         :nocodelens:

         Make a program that asks for a positive integer ``n`` and shows it inverted. 
         For example: 1234 generates 4321. Return the inverted number. |br| |br|
         Examples: |br|
         ``invert_number(123456789)`` -> 987654321 |br|
         ``invert_number(1000)`` -> 1 |br|

         ~~~~
         def invert_number(n):
            

         ====
         from unittest.gui import TestCaseGui


         class myTests(TestCaseGui):
            def testOne(self):
               
               self.assertEqual(invert_number(123), 321, "Expected: 321")
               self.assertEqual(invert_number(123456789), 987654321, "Expected: 987654321")
               self.assertEqual(invert_number(1001), 1001, "Expected: 1001")
               self.assertEqual(invert_number(1000), 1, "Expected: 1")
               self.assertEqual(invert_number(230), 32, "Expected: 32")
                  

         myTests().main()