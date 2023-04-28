=========
Quiz - 4
=========

.. |br| raw:: html

   <br />


.. tabbed:: quiz4

    .. tab:: Exercise 1

        .. activecode:: q4_1
            :nocodelens:
            
            Develop the function ``valores_extremos`` which takes the parameter ``numeros``, representing a list of **10** random numbers between 0-100. 
            The function should return a tuple ``(a, b)``, where a and b are the maximum and minimum values respectively of the ``numeros`` list. Solve the problem without using 
            the functions ``max`` nor ``min``. |br| |br|
            Example: |br|
            ``valores_extremos([15, 48, 0, 27, 13, 62, 32, 57, 85, 18])`` -> ``(85, 0)`` |br|

            ~~~~
            def valores_extremos(numeros):


            ====
            from unittest.gui import TestCaseGui
            from random import sample


            class myTests(TestCaseGui):
                def testOne(self):
                    numeros = sample(range(100), 10)
                    self.assertEqual(
                        valores_extremos(numeros), (max(numeros), min(numeros)), f"Expected: ({max(numeros)}, {min(numeros)})"
                    )

                def testTwo(self):
                    numeros = sample(range(100), 10)
                    self.assertEqual(
                        valores_extremos(numeros), (max(numeros), min(numeros)), f"Expected: ({max(numeros)}, {min(numeros)})"
                    )

                def testThree(self):
                    numeros = sample(range(100), 10)
                    self.assertEqual(
                        valores_extremos(numeros), (max(numeros), min(numeros)), f"Expected: ({max(numeros)}, {min(numeros)})"
                    )


            myTests().main()


    .. tab:: Exercise 2

        .. activecode:: q4_2
            :nocodelens:

            Develop the function ``pares_e_impares`` which takes the parameter ``numeros``. ``numeros`` represents a list of **20** random numbers between 1-100. 
            The function should return a tuple of lists of the form ``([even], [odd])``, where even and odd are lists of even and odd numbers that are 
            in ``numeros``, respectively. |br| |br|

            ~~~~
            def pares_e_impares(numeros):


            ====
            from unittest.gui import TestCaseGui
            from random import sample


            class myTests(TestCaseGui):
                def testOne(self):
                    numeros = sample(range(1, 100), 20)
                    self.assertEqual(
                        pares_e_impares(numeros),
                        ([n for n in numeros if n % 2 == 0], [n for n in numeros if n % 2 != 0]),
                        f"Expected: ({[n for n in numeros if n%2 == 0]}, {[n for n in numeros if n%2 != 0]})",
                    )

                def testTwo(self):
                    numeros = sample(range(1, 100), 20)
                    self.assertEqual(
                        pares_e_impares(numeros),
                        ([n for n in numeros if n % 2 == 0], [n for n in numeros if n % 2 != 0]),
                        f"Expected: ({[n for n in numeros if n%2 == 0]}, {[n for n in numeros if n%2 != 0]})",
                    )

                def testThree(self):
                    numeros = sample(range(1, 100), 20)
                    self.assertEqual(
                        pares_e_impares(numeros),
                        ([n for n in numeros if n % 2 == 0], [n for n in numeros if n % 2 != 0]),
                        f"Expected: ({[n for n in numeros if n%2 == 0]}, {[n for n in numeros if n%2 != 0]})",
                    )


            myTests().main()


    .. tab:: Exercise 3

        .. activecode:: q4_3
            :nocodelens:

            Develop the function ``intercalar_listas`` which takes two parameters, ``l1`` and ``l2``, representing lists of **10** random numbers between 1-100.
            The function should generate a third list composed of the elements of ``l1`` and ``l2`` interleaved. This third list will be returned. |br| |br|
            Example: |br|
            ``intercalar_listas([1, 3, 5, .....], [2, 4, 6, ....])`` -> ``[1, 2, 3, 4, 5, 6, ....]`` |br|

            ~~~~
            def intercalar_listas(l1, l2):


            ====
            from unittest.gui import TestCaseGui
            from random import sample


            class myTests(TestCaseGui):
                def testOne(self):
                    l1 = sample(range(100), 10)
                    l2 = sample(range(100), 10)
                    self.assertEqual(
                        intercalar_listas(l1, l2),
                        [val for pair in zip(l1, l2) for val in pair],
                        f"Expected: {[val for pair in zip(l1, l2) for val in pair]}",
                    )

                def testTwo(self):
                    l1 = sample(range(100), 10)
                    l2 = sample(range(100), 10)
                    self.assertEqual(
                        intercalar_listas(l1, l2),
                        [val for pair in zip(l1, l2) for val in pair],
                        f"Expected: {[val for pair in zip(l1, l2) for val in pair]}",
                    )


            myTests().main()


    .. tab:: Exercise 4

        .. activecode:: q4_4
            :nocodelens:

            The function ``buscar_palabras`` will be passed the following ``texto`` as argument: |br|
            *"The Python Software Foundation and the global Python community welcome and encourage participation by everyone. Our community is based on 
            mutual respect, tolerance, and encouragement, and we are working to help each other live up to these principles. We want our community to be more diverse: whoever you are, and 
            whatever your background, we welcome you."* |br|
            It should generate a list of words from this text using ``split()``. Then it should create a list of words that start or end with any 
            of the letters in the string ``"python"``. This list is the one that will be returned. **Note**: Don't forget to first remove special characters 
            and be careful with capitalization. |br| |br|

            ~~~~
            def buscar_palabras(texto):


            ====

            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
                    text = """The Python Software Foundation and the global Python community welcome and 
                            encourage participation by everyone. Our community is based on mutual respect, tolerance, and encouragement, 
                            and we are working to help each other live up to these principles. We want our community to be more diverse: 
                            whoever you are, and whatever your background, we welcome you."""
                    res = [
                        word
                        for word in text.lower().replace(".", "").replace(",", "").split()
                        if word[0] in "python" or word[-1] in "python"
                    ]
                    self.assertEqual(buscar_palabras(text), res, f"Expected: {res}")


            myTests().main()


    .. tab:: Exercise 5

        .. activecode:: q4_5
            :nocodelens:

            Now you will develop the function ``buscar_palabras_2``, which will be passed the previous text as a parameter. Again you will separate the 
            text into words, just like you did in *Exercise 4*. This time, you should calculate the number of words within ``texto`` that have any 
            of the letters in the string ``"python"``, and also have a length greater than 4 characters. |br| |br|

            ~~~~
            def buscar_palabras_2(texto):


            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
                    text = """The Python Software Foundation and the global Python community welcome and 
                            encourage participation by everyone. Our community is based on mutual respect, tolerance, and encouragement, 
                            and we are working to help each other live up to these principles. We want our community to be more diverse: 
                            whoever you are, and whatever your background, we welcome you."""
                    self.assertEqual(buscar_palabras_2(text), 24, "Expected: 24")


            myTests().main()