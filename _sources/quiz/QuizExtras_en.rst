=============
Quiz - Extras
=============

.. |br| raw:: html

   <br />

.. tabbed:: quizExtras

    .. tab:: Exercise 1

        .. activecode:: qExtra_1_en
            :nocodelens:

            **Josephus problem**. Imagine you have ``n`` people arranged in a circle. Suppose these people are numbered from 1 to ``n`` clockwise. Starting with person number **1**, 
            run the circle clockwise and eliminate every ``m``-th person, as long as the circle has two or more people. The challenge is to develop the ``josephus`` function 
            that takes ``n`` and ``m`` as parameters, both positive integers. The function should return the number of the person in the circle who survived. |br| |br|

            ~~~~
            def josephus(n, m):

            
            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(josephus(50, 3), 11, "Expected: 11")


            myTests().main()


    .. tab:: Exercise 2

        .. activecode:: qExtra_2_en
            :nocodelens:

            Implement the **Sieve of Eratosthenes** algorithm. |br|
            `Sieve of Eratosthenes <https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes>`_ |br|
            The challenge is to develop the ``eratosthenes_sieve`` function that takes ``n``, a positive integer, as a parameter 
            and returns the number of prime numbers in the interval **[2, n]**. Use the Sieve of Eratosthenes to solve this problem. |br| |br|
            Examples: |br|
            ``eratosthenes_sieve(20)`` -> ``8`` |br|
            ``eratosthenes_sieve(12)`` -> ``5`` |br|

            ~~~~
            def eratosthenes_sieve(n):

            
            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(eratosthenes_sieve(20), 8, "Expected: 8")
                    self.assertEqual(eratosthenes_sieve(12), 5, "Expected: 5")
                    self.assertEqual(eratosthenes_sieve(30), 10, "Expected: 10")
                    self.assertEqual(eratosthenes_sieve(5), 3, "Expected: 3")


            myTests().main()


    .. tab:: Exercise 3

        .. activecode:: qExtra_3_en
            :nocodelens:

            **Project Euler Problem 2**. `Problem <https://projecteuler.net/problem=2>`_ |br|
            First, check what the ``yield`` keyword does in Python. Then, solve the adaptation of Project Euler Problem 2 below: |br|
            Develop the ``p_euler`` function that takes ``n``, a positive integer, as an argument, and returns the sum of all even numbers less than ``n`` 
            in the Fibonacci sequence of ``n``. |br| |br|
            Example: |br|
            ``p_euler(10)`` -> ``10`` |br|
            **Explanation**: The first ten terms of the Fibonacci sequence are::

                1, 2, 3, 5, 8, 13, 21, 34, 55, 89

            Therefore, the even numbers in this sequence are::

                2, 8, 34

            However, only ``2`` and ``8`` meet the condition of being less than ``n`` (in this case less than 10). The sum of these is ``10``.

            ~~~~
            def p_euler(n):
            

            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(p_euler(4000000), 4613732, "Expected: 4613732")
                    self.assertEqual(p_euler(10), 10, "Expected: 10")
                    self.assertEqual(p_euler(100), 44, "Expected: 44")


            myTests().main()


    .. tab:: Exercise 4

        .. activecode:: qExtra_4_en
            :nocodelens:

            In the book "The Man Who Counted," by *Malba Tahan*, a character wanted to win the grains of wheat that were distributed on a chessboard as follows: 
            one grain in the first square of the board, double (2) in the second, again double (4) in the third, again double (8) in the fourth, and so on up to the sixty-fourth square of the board. 
            Write an algorithm that calculates the total number of wheat grains needed to make this distribution. The ``sum_grains`` function will return 
            this amount. The parameter ``n`` will be the value ``64``, representing the number of squares on a chessboard. |br|

            ~~~~
            def sum_grains(n):
            

            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(sum_grains(64), 18446744073709551615, "Expected: 18446744073709551615")


            myTests().main()


    .. tab:: Exercise 5

        .. activecode:: qExtra_5_en
            :nocodelens:

            You are given ``n`` tiles with dimensions of 10cm x 10cm. With them, you must assemble a set of squares using all the given tiles. To do this, you must follow the following rules:

            - The first square you build should use as many tiles as possible.
            - If there are tiles left, the next square should also be built using the largest possible number of tiles that remain.
            - Follow this same pattern until all tiles are used. 

            Then, the ``form_squares`` function returns a **dictionary** representing the set of formed squares. Its keys represent the size, in tiles, of the side of the 
            formed square, while the values represent the quantity of squares of that size that were formed. |br| |br|
            Example: |br|
            ``form_squares(31)`` -> ``{5:1, 2:1, 1:2}`` |br|
            **Explanation**: The formed set will have 4 squares: 1 square with 5 tiles per side, 1 with 2 tiles per side, and 2 with 1 tile per side. |br|

            ~~~~
            def form_squares(n):


            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(form_squares(31), {5: 1, 2: 1, 1: 2}, "Expected: {5:1,2:1,1:2}")
                    self.assertEqual(form_squares(76), {8: 1, 3: 1, 1: 3}, "Expected: {8:1,3:1,1:3}")
                    self.assertEqual(form_squares(290), {17: 1, 1: 1}, "Expected: {17:1,1:1}")
                    self.assertEqual(form_squares(347), {18: 1, 4: 1, 2: 1, 1: 3}, "Expected: {18:1,4:1,2:1,1:3}")


            myTests().main()