Counters
========

+ Now print from 1 to a number entered by the user

.. activecode:: ac_l15_3a_en
   :nocodelens:
   :stdin:

   end = int(input("Enter the last number: "))
   x = 1
   while x <= end:
       print(x)
       x = x + 1

+ Print even numbers between 0 and a number given by the user using ``if``

.. activecode:: ac_l15_3b_en
   :nocodelens:
   :stdin:

   end = int(input("Enter the last number: "))
   x = 0
   while x <= end:
       if x%2 == 0:
           print(x)
       x = x + 1


+ Print even numbers between 0 and a provided number without using
  ``if``

.. activecode:: ac_l15_3c_en
   :nocodelens:
   :stdin:

   end = int(input("Enter the last number: "))
   x = 0
   while x <= end:
       print(x)
       x = x + 2


Some Exercises
--------------

.. activecode:: ac_l15_3d_en
   :nocodelens:

   Modify the previous program to print from 1 to the number entered by 
   the user, but this time only the odd numbers.
   
   ~~~~
   def print_odd_numbers(n):


   ====
   from unittest.gui import TestCaseGui


   class myTests(TestCaseGui):
      def testOne(self):
         self.assertEqual(print_odd_numbers(10), [1, 3, 5, 7, 9], "Expected [1, 3, 5, 7, 9]")
         self.assertEqual(print_odd_numbers(1), [1], "Expected [1]")
         self.assertEqual(print_odd_numbers(0), [], "Expected []")

   myTests().main()

.. activecode:: ac_l15_3e_en
   :nocodelens:

   Write a program that prints the first 10 multiples of 3.
   
   ~~~~
   def print_multiples_of_3():

   ====
   from unittest.gui import TestCaseGui


   class myTests(TestCaseGui):
      def testOne(self):
         self.assertEqual(print_multiples_of_3(), [3, 6, 9, 12, 15, 18, 21, 24, 27, 30], "Expected [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]")

   myTests().main()