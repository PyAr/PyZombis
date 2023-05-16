=========
Quiz - 10
=========

.. |br| raw:: html

    <br />


.. tabbed:: quiz10

    .. tab:: Exercise 1

        .. activecode:: q10_1
            :nocodelens:

            Develop the function ``cuantas_donas`` that takes ``n``, a positive integer, as a parameter, 
            and returns a string in the form of ``"Number of donuts: n"``, where ``n`` is the value 
            passed to the function as an argument. However, if ``n`` >= 10, ``cuantas_donas`` will 
            return ``"many"`` instead of ``n``. |br| |br|
            Examples: |br|
            ``cuantas_donas(5)`` -> ``"Number of donuts: 5"`` |br|
            ``cuantas_donas(23)`` -> ``"Number of donuts: many"`` |br|

            ~~~~
            def cuantas_donas(n):

                
            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
            
                    self.assertEqual(cuantas_donas(4), "Number of donuts: 4", "Expected output: Number of donuts: 4")
                    self.assertEqual(cuantas_donas(9), "Number of donuts: 9", "Expected output: Number of donuts: 9")
                    self.assertEqual(
                        cuantas_donas(10),
                        "Number of donuts: many",
                        "Expected output: Number of donuts: many",
                    )
                    self.assertEqual(
                        cuantas_donas(99),
                        "Number of donuts: many",
                        "Expected output: Number of donuts: many",
                    )
            
            
            myTests().main()


    .. tab:: Exercise 2

        .. activecode:: q10_2
            :nocodelens:

            Develop the function ``cadena_de_extremos`` that, given a string ``s``, 
            returns a string with the first two and last two letters of ``s``. 
            However, if the string has less than 2 letters, it returns an empty string. |br| |br|
            Examples: |br|
            ``cadena_de_extremos("palmeras")`` -> ``"paas"`` |br|
            ``cadena_de_extremos("a")`` -> ``""`` |br|

            ~~~~
            def cadena_de_extremos(s):

                
            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
            
                    self.assertEqual(cadena_de_extremos("palmeras"), "paas", "Expected output: paas")
                    self.assertEqual(cadena_de_extremos("algoritmos"), "alos", "Expected output: alos")
                    self.assertEqual(cadena_de_extremos("co"), "coco", "Expected output: coco")
                    self.assertEqual(cadena_de_extremos("a"), "", "Expected output: ''")
                    self.assertEqual(cadena_de_extremos("xyz"), "xyyz", "Expected output: xyyz")
                    self.assertEqual(cadena_de_extremos(""), "", "Expected output: ''")
            
            
            myTests().main()


    .. tab:: Exercise 3

        .. activecode:: q10_3
            :nocodelens:

            Develop the function ``remplazar_primer_caracter`` that, given a string ``s``, 
            returns a string in which all occurrences of the first character in ``s`` 
            are replaced by "*", except for the first one. **Note:** 
            use the method ``.replace(value_to_replace, new_value)`` to solve the 
            exercise. |br| |br|
            Examples: |br|
            ``remplazar_primer_caracter("google")`` -> ``"goo*le"`` |br|
            ``remplazar_primer_caracter("dona")`` -> ``"dona"`` |br|

            ~~~~
            def remplazar_primer_caracter(s):

                
            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
            
                    self.assertEqual(remplazar_primer_caracter("babble"), "ba**le", "Expected output: ba**le")
                    self.assertEqual(remplazar_primer_caracter("aardvark"), "a*rdv*rk", "Expected output: a*rdv*rk")
                    self.assertEqual(remplazar_primer_caracter("google"), "goo*le", "Expected output: goo*le")
                    self.assertEqual(remplazar_primer_caracter("dona"), "dona", "Expected output: dona")
            
            
            myTests().main()


    .. tab:: Exercise 4

        .. activecode:: q10_4
            :nocodelens:

            Develop the function ``combinar_dos_cadenas`` that takes two strings as 
            arguments, ``a`` and ``b``, and returns a new string in the following way: 
            
            - The new string has to be a combination of ``a`` and ``b``.
            - The new string will have the form ``"<a> <b>"``, note the space between both.
            - The new string will interchange the first two letters of ``a`` and ``b``.

            Suppose that ``a`` and ``b`` have more than 2 characters. 
            For better clarification, see the following examples. |br| |br|
            Examples: |br|
            ``combinar_dos_cadenas("mix", "pod")`` -> ``"pox mid"`` |br|
            ``combinar_dos_cadenas("pezzy", "firm")`` -> ``"fizzy perm"`` |br|

            ~~~~
            def combinar_dos_cadenas(a, b):


            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
            
                    self.assertEqual(combinar_dos_cadenas("mix", "pod"), "pox mid", "Expected output: pox mid")
                    self.assertEqual(combinar_dos_cadenas("dog", "dinner"), "dig donner", "Expected output: dig donner")
                    self.assertEqual(
                        combinar_dos_cadenas("gnash", "sport"),
                        "spash gnort",
                        "Expected output: spash gnort",
                    )
                    self.assertEqual(combinar_dos_cadenas("pezzy", "firm"), "fizzy perm", "Expected output: fizzy perm")
            
            
            myTests().main()


    .. tab:: Exercise 5


        .. activecode:: q10_5
            :nocodelens:

            Develop the function ``es_palindromo`` that takes a string ``s`` as 
            parameter and checks if ``s`` is a palindrome or not, returning ``True`` or 
            ``False`` accordingly. |br| |br|
            Examples: |br|
            ``es_palindromo("asa")`` -> ``True`` |br|
            ``es_palindromo("casa")`` -> ``False``  |br|

            ~~~~
            def es_palindromo(s):

                
            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
            
                    self.assertEqual(es_palindromo("asa"), True, "Expected output: True")
                    self.assertEqual(es_palindromo("casa"), False, "Expected output: False")
                    self.assertEqual(es_palindromo("reconocer"), True, "Expected output: True")
                    self.assertEqual(es_palindromo("palabra"), False, "Expected output: False")
                    self.assertEqual(es_palindromo("radar"), True, "Expected output: True")
                    self.assertEqual(es_palindromo("seres"), True, "Expected output: True")
            
            
            myTests().main()


    .. tab:: Exercise 6

        .. activecode:: q10_6
            :nocodelens:

            Develop the function ``contar_ocurrencias`` that takes two parameters: 
            ``frase`` and ``palabra``, both of type string. The function should return 
            the number of times that ``palabra`` occurs in ``frase``. |br| |br|
            Examples: |br|  
            ``contar_ocurrencias("a ana y a mariana les gustan las manzanas", "ana")`` -> ``3`` |br|

            ~~~~
            def contar_ocurrencias(frase, palabra):
                

            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
            
                    self.assertEqual(
                        contar_ocurrencias("a ana y a mariana les gustan las manzanas", "ana"),
                        3,
                        "Expected output: 3",
                    )
                    self.assertEqual(contar_ocurrencias("Cats, rats, bats, and hats.", "ats"), 4, "Expected output: 4")
            
            
            myTests().main()