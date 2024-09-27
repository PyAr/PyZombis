=========
Quiz - 10
=========

.. |br| raw:: html

    <br />


.. tabbed:: quiz10

    .. tab:: Exercise 1

        .. activecode:: q10_1_en
            :nocodelens:

            Develop the function ``how_many_donuts`` that takes ``n``, a positive integer, as a parameter, 
            and returns a string in the form of ``"Number of donuts: n"``, where ``n`` is the value 
            passed to the function as an argument. However, if ``n`` >= 10, ``how_many_donuts`` will 
            return ``"many"`` instead of ``n``. |br| |br|
            Examples: |br|
            ``how_many_donuts(5)`` -> ``"Number of donuts: 5"`` |br|
            ``how_many_donuts(23)`` -> ``"Number of donuts: many"`` |br|

            ~~~~
            def how_many_donuts(n):

                
            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
            
                    self.assertEqual(how_many_donuts(4), "Number of donuts: 4", "Expected output: Number of donuts: 4")
                    self.assertEqual(how_many_donuts(9), "Number of donuts: 9", "Expected output: Number of donuts: 9")
                    self.assertEqual(
                        how_many_donuts(10),
                        "Number of donuts: many",
                        "Expected output: Number of donuts: many",
                    )
                    self.assertEqual(
                        how_many_donuts(99),
                        "Number of donuts: many",
                        "Expected output: Number of donuts: many",
                    )
            
            
            myTests().main()


    .. tab:: Exercise 2

        .. activecode:: q10_2_en
            :nocodelens:

            Develop the function ``chain_of_extremes`` that, given a string ``s``, 
            returns a string with the first two and last two letters of ``s``. 
            However, if the string has less than 2 letters, it returns an empty string. |br| |br|
            Examples: |br|
            ``chain_of_extremes("palms")`` -> ``"pams"`` |br|
            ``chain_of_extremes("a")`` -> ``""`` |br|

            ~~~~
            def chain_of_extremes(s):

                
            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
            
                    self.assertEqual(chain_of_extremes("palms"), "pams", "Expected output: pams")
                    self.assertEqual(chain_of_extremes("algorithms"), "alms", "Expected output: alms")
                    self.assertEqual(chain_of_extremes("co"), "coco", "Expected output: coco")
                    self.assertEqual(chain_of_extremes("a"), "", "Expected output: ''")
                    self.assertEqual(chain_of_extremes("xyz"), "xyyz", "Expected output: xyyz")
                    self.assertEqual(chain_of_extremes(""), "", "Expected output: ''")
            
            
            myTests().main()


    .. tab:: Exercise 3

        .. activecode:: q10_3_en
            :nocodelens:

            Develop the function ``replace_first_character`` that, given a string ``s``, 
            returns a string in which all occurrences of the first character in ``s`` 
            are replaced by "*", except for the first one. **Note:** 
            use the method ``.replace(value_to_replace, new_value)`` to solve the 
            exercise. |br| |br|
            Examples: |br|
            ``replace_first_character("google")`` -> ``"goo*le"`` |br|
            ``replace_first_character("donut")`` -> ``"donut"`` |br|

            ~~~~
            def replace_first_character(s):

                
            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
            
                    self.assertEqual(replace_first_character("babble"), "ba**le", "Expected output: ba**le")
                    self.assertEqual(replace_first_character("aardvark"), "a*rdv*rk", "Expected output: a*rdv*rk")
                    self.assertEqual(replace_first_character("google"), "goo*le", "Expected output: goo*le")
                    self.assertEqual(replace_first_character("donut"), "donut", "Expected output: donut")
            
            
            myTests().main()


    .. tab:: Exercise 4

        .. activecode:: q10_4_en
            :nocodelens:

            Develop the function ``combine_two_chains`` that takes two strings as 
            arguments, ``a`` and ``b``, and returns a new string in the following way: 
            
            - The new string has to be a combination of ``a`` and ``b``.
            - The new string will have the form ``"<a> <b>"``, note the space between both.
            - The new string will interchange the first two letters of ``a`` and ``b``.

            Suppose that ``a`` and ``b`` have more than 2 characters. 
            For better clarification, see the following examples. |br| |br|
            Examples: |br|
            ``combine_two_chains("mix", "pod")`` -> ``"pox mid"`` |br|
            ``combine_two_chains("pezzy", "firm")`` -> ``"fizzy perm"`` |br|

            ~~~~
            def combine_two_chains(a, b):


            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
            
                    self.assertEqual(combine_two_chains("mix", "pod"), "pox mid", "Expected output: pox mid")
                    self.assertEqual(combine_two_chains("dog", "dinner"), "dig donner", "Expected output: dig donner")
                    self.assertEqual(
                        combine_two_chains("gnash", "sport"),
                        "spash gnort",
                        "Expected output: spash gnort",
                    )
                    self.assertEqual(combine_two_chains("pezzy", "firm"), "fizzy perm", "Expected output: fizzy perm")
            
            
            myTests().main()


    .. tab:: Exercise 5


        .. activecode:: q10_5_en
            :nocodelens:

            Develop the function ``is_palindrome`` that takes a string ``s`` as 
            parameter and checks if ``s`` is a palindrome or not, returning ``True`` or 
            ``False`` accordingly. |br| |br|
            Examples: |br|
            ``is_palindrome("ivi")`` -> ``True`` |br|
            ``is_palindrome("civil")`` -> ``False``  |br|

            ~~~~
            def is_palindrome(s):

                
            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
            
                    self.assertEqual(is_palindrome("ivi"), True, "Expected output: True")
                    self.assertEqual(is_palindrome("civil"), False, "Expected output: False")
                    self.assertEqual(is_palindrome("level"), True, "Expected output: True")
                    self.assertEqual(is_palindrome("word"), False, "Expected output: False")
                    self.assertEqual(is_palindrome("radar"), True, "Expected output: True")
                    self.assertEqual(is_palindrome("kayak"), True, "Expected output: True")
            
            
            myTests().main()


    .. tab:: Exercise 6

        .. activecode:: q10_6_en
            :nocodelens:

            Develop the function ``count_occurrences`` that takes two parameters: 
            ``phrase`` and ``word``, both of type string. The function should return 
            the number of times that ``word`` occurs in ``phrase``. |br| |br|
            Examples: |br|  
            ``count_occurrences("ana and mariana like amanatsu", "ana")`` -> ``3`` |br|

            ~~~~
            def count_occurrences(frase, palabra):
                

            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
            
                    self.assertEqual(
                        count_occurrences("ana and Mariana like amanatsu", "ana"),
                        3,
                        "Expected output: 3",
                    )
                    self.assertEqual(count_occurrences("Cats, rats, bats, and hats.", "ats"), 4, "Expected output: 4")
            
            
            myTests().main()
