===============
Quiz - Extras 2
===============

.. |br| raw:: html

   <br />


.. tabbed:: quizExtra2

    .. tab:: Exercise 1

        ..  activecode:: qExtra2_1_en
            :nocodelens:

            A primary school is planning a field trip to the zoo for some of its students. For this, the school can only spend exactly ``budget`` units. It is known that the entry to the zoo costs 5 units for children under 12 years old and 7 units for those who are 12 years old or older. Develop the function ``maximo_estudiantes`` that receives ``budget``, a positive integer that indicates the budget that the school intends to spend. The function should return a tuple ``(p, g)`` with the maximum number of small and large students that the school can take to the zoo considering all values as integers. |br| |br|
            ~~~~
            def maximo_estudiantes(budget):



            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(
                        maximo_estudiantes(93), (13, 4),
                        "Expected: 13 small and 4 large"
                    )
                    self.assertEqual(
                        maximo_estudiantes(63), (7, 4),
                        "Expected: 7 small and 4 large"
                    )


            myTests().main()


    .. tab:: Exercise 2

        ..  activecode:: qExtra2_2_en
            :nocodelens:

            Develop the function ``a_romano``, which receives a positive integer ``n`` greater than zero. The function should return the conversion of the number from Arabic to Roman numerals. The function should return a string that represents the number in Roman numerals. |br| |br|
            Examples: |br|
            ``a_romano(5)`` -> ``"V"`` |br|
            ``a_romano(10)`` -> ``"X"`` |br|
            ``a_romano(25)`` -> ``"XXV"`` |br|
            ``a_romano(2011)`` -> ``"MMXI"`` |br|
            ~~~~
            def a_romano(n):



            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(a_romano(12), "XII", "Expected: XII")
                    self.assertEqual(a_romano(123), "CXXIII", "Expected: CXXIII")
                    self.assertEqual(a_romano(400), "CD", "Expected: CD")
                    self.assertEqual(a_romano(84), "LXXXIV", "Expected: LXXXIV")
                    self.assertEqual(a_romano(542), "DXLII", "Expected: DXLII")
                    self.assertEqual(a_romano(1042), "MXLII", "Expected: MXLII")
                    self.assertEqual(a_romano(49), "XLIX", "Expected: XLIX")
                    self.assertEqual(a_romano(429), "CDXXIX", "Expected: CDXXIX")
                    self.assertEqual(a_romano(367), "CCCLXVII", "Expected: CCCLXVII")
                    self.assertEqual(a_romano(23), "XXIII", "Expected: XXIII")
                    self.assertEqual(a_romano(257), "CCLVII", "Expected: CCLVII")
                    self.assertEqual(a_romano(968), "CMLXVIII", "Expected: CMLXVIII")


            myTests().main()


    .. tab:: Exercise 3

        ..  activecode:: qExtra2_3_en
            :nocodelens:

            Develop the function ``calcular_pi``, which receives a positive parameter ``n`` greater than 0. The function should calculate the approximate value of ``pi`` with ``n`` terms, according to the following formula. |br|

            ``pi = (4/1) - (4/3) + (4/5) - (4/7) ...`` |br|

            The result should be rounded to 2 decimals and returned as a string. |br| |br|

            Examples: |br|
            ``calcular_pi(4)`` -> ``"2.90"`` |br|
            *Explanation*: The first 4 terms following the formula are: ``(4/1) - (4/3) + (4/5) - (4/7)`` which result in ``2.895238095``, rounding to two decimal places the final result would be ``2.90`` |br|
            ``calcular_pi(24)`` -> ``"3.10"`` |br|
            ``calcular_pi(61)`` -> ``"3.16"`` |br|
            ``calcular_pi(100)`` -> ``"3.13"`` |br|

            ~~~~
            def calcular_pi(n):



            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(calcular_pi(4), "2.90", "Expected: 2.90")
                    self.assertEqual(calcular_pi(10), "3.04", "Expected: 3.04")
                    self.assertEqual(calcular_pi(15), "3.21", "Expected: 3.21")
                    self.assertEqual(calcular_pi(60), "3.12", "Expected: 3.12")
                    self.assertEqual(calcular_pi(24), "3.10", "Expected: 3.10")
                    self.assertEqual(calcular_pi(100), "3.13", "Expected: 3.13")
                    self.assertEqual(calcular_pi(1000), "3.14", "Expected: 3.14")


            myTests().main()