=========
Quiz - 7
=========

.. |br| raw:: html

   <br />


.. tabbed:: quiz7

    .. tab:: Exercise 1

        .. activecode:: q7_1
            :nocodelens:

            Develop the function ``multi_cadena`` that receives as parameters a string ``s`` and a positive integer ``n`` and returns a new string that contains ``n`` copies of the original string |br| |br|
            Examples:|br|
            ``multi_cadena("Hola", 2)`` -> ``"HolaHola"`` |br|
            ``multi_cadena("Hola", 5)`` -> ``"HolaHolaHolaHolaHola"``

            ~~~~
            def multi_cadena(s, n):



            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
                    self.assertEqual(multi_cadena("Hola", 2), "HolaHola", "Expected: HolaHola")
                    self.assertEqual(
                            multi_cadena("Hola", 3), "HolaHolaHola", "Expected: HolaHolaHola"
                    )
                    self.assertEqual(multi_cadena("Hi", 1), "Hi", "Expected: Hi")
                    self.assertEqual(multi_cadena("Hi", 0), "", "Expected: ''")
                    self.assertEqual(multi_cadena("Hi", 5), "HiHiHiHiHi", "Expected: HiHiHiHiHi")
                    self.assertEqual(
                            multi_cadena("Oh Boy!", 2), "Oh Boy!Oh Boy!", "Expected: Oh Boy!Oh Boy!"
                    )
                    self.assertEqual(multi_cadena("x", 4), "xxxx", "Expected: xxxx")
                    self.assertEqual(multi_cadena("", 4), "", "Expected: ''")
                    self.assertEqual(multi_cadena("code", 2), "codecode", "Expected: codecode")
                    self.assertEqual(
                            multi_cadena("code", 3), "codecodecode", "Expected: codecodecode"
                    )


            myTests().main()


    .. tab:: Exercise 2

        .. activecode:: q7_2
            :nocodelens:

            Develop the function ``expandir_cadena`` that receives a string ``s`` and returns a new string following the pattern described in the examples |br| |br|
            Examples:|br|
            ``expandir_cadena("Code")`` -> ``"CCoCodCode"`` |br|
            ``expandir_cadena("abc")`` -> ``"aababc"`` |br|
            ``expandir_cadena("ab")`` -> ``"aab"`` |br|

            ~~~~
            def expandir_cadena(s):



            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
                    self.assertEqual(expandir_cadena("Code"), "CCoCodCode", "Expected: CCoCodCode")
                    self.assertEqual(expandir_cadena("abc"), "aababc", "Expected: aababc")
                    self.assertEqual(expandir_cadena("ab"), "aab", "Expected: aab")
                    self.assertEqual(expandir_cadena("x"), "x", "Expected: x")
                    self.assertEqual(expandir_cadena("fade"), "ffafadfade", "Expected: ffafadfade")
                    self.assertEqual(
                        expandir_cadena("There"), "TThTheTherThere", "Expected: TThTheTherThere"
                    )
                    self.assertEqual(
                        expandir_cadena("Kitten"),
                        "KKiKitKittKitteKitten",
                        "Expected: KKiKitKittKitteKitten",
                    )
                    self.assertEqual(expandir_cadena("Bye"), "BByBye", "Expected: BByBye")
                    self.assertEqual(expandir_cadena("Good"), "GGoGooGood", "Expected: GGoGooGood")
                    self.assertEqual(expandir_cadena("Bad"), "BBaBad", "Expected: BBaBad")


            myTests().main()


    .. tab:: Exercise 3

        .. activecode:: q7_3
            :nocodelens:


            Develop the function ``contar_apariciones_9`` that receives as parameter a non-empty list of integers ``numeros`` and returns how many times the number 9 appears in the list |br| |br|
            Example: ``contar_apariciones_9([1, 99, 9])`` -> ``1``

            ~~~~
            def contar_apariciones_9(numeros):



            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
                    self.assertEqual(contar_apariciones_9([1, 99, 9]), 1, "Expected: 1")
                    self.assertEqual(contar_apariciones_9([1, 9, 9]), 2, "Expected: 2")
                    self.assertEqual(contar_apariciones_9([1, 9, 9, 3, 9]), 3, "Expected: 3")
                    self.assertEqual(contar_apariciones_9([1, 2, 3]), 0, "Expected: 0")
                    self.assertEqual(contar_apariciones_9([1]), 0, "Expected: 1")
                    self.assertEqual(contar_apariciones_9([4, 2, 4, 3, 1]), 0, "Expected: 0")
                    self.assertEqual(contar_apariciones_9([9, 2, 99, 3, 1]), 1, "Expected: 1")


            myTests().main()

    .. tab:: Exercise 4

        .. activecode:: q7_4
            :nocodelens:


            Develop the function ``verificar_comienzo_9`` that receives a list of integer numbers ``numeros`` and verifies if at least one of the first four numbers is a 9 |br| |br|
            Examples:|br|
            ``verificar_comienzo_9([1, 2, 9, 3, 4])`` -> ``True`` |br|
            ``verificar_comienzo_9([1, 2, 3, 4, 9])`` -> ``False`` |br|
            ``verificar_comienzo_9([1, 2, 3, 4, 5])`` -> ``False`` |br|
            ``verificar_comienzo_9([1, 2, 9])`` -> ``True`` |br|

            ~~~~
            def verificar_comienzo_9(numeros):



            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
                    self.assertEqual(verificar_comienzo_9([1, 2, 9, 3, 4]), True, "Expected: True")
                    self.assertEqual(verificar_comienzo_9([1, 2, 3, 4, 9]), False, "Expected: False")
                    self.assertEqual(verificar_comienzo_9([1, 2, 3, 4, 5]), False, "Expected: False")
                    self.assertEqual(verificar_comienzo_9([9, 2, 3]), True, "Expected: True")
                    self.assertEqual(verificar_comienzo_9([1, 9, 9]), True, "Expected: True")
                    self.assertEqual(verificar_comienzo_9([1, 2, 3]), False, "Expected: False")
                    self.assertEqual(verificar_comienzo_9([1, 9]), True, "Expected: True")
                    self.assertEqual(verificar_comienzo_9([5, 5]), False, "Expected: False")
                    self.assertEqual(verificar_comienzo_9([2]), False, "Expected: False")
                    self.assertEqual(verificar_comienzo_9([9]), True, "Expected: True")
                    self.assertEqual(verificar_comienzo_9([]), False, "Expected: False")
                    self.assertEqual(verificar_comienzo_9([3, 9, 2, 3, 3]), True, "Expected: True")


            myTests().main()


    .. tab:: Exercise 5

        .. activecode:: q7_5
            :nocodelens:


            Develop the function ``hola_usuario`` that receives as a parameter a string ``nombre`` that represents a user's name and returns a greeting using this name |br| |br|
            Examples: |br|
            ``hola_usuario("Bob")`` -> ``"¡Hola Bob!"`` |br|
            ``hola_usuario("Alice")`` -> ``"¡Hola Alice!"`` |br|
            ``hola_usuario("X")`` -> ``"¡Hola X!"`` |br|

            ~~~~
            def hola_usuario(nombre):



            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
                    self.assertEqual(hola_usuario("Bob"), "¡Hola Bob!", "Expected: ¡Hola Bob!")
                    self.assertEqual(hola_usuario("Alice"), "¡Hola Alice!", "Expected: ¡Hola Alice!")
                    self.assertEqual(hola_usuario("X"), "¡Hola X!", "Expected: ¡Hola X!")
                    self.assertEqual(hola_usuario("Hola"), "¡Hola Hola!", "Expected: ¡Hola Hola!")


            myTests().main()

    .. tab:: Exercise 6

        .. activecode:: q7_6
            :nocodelens:

            Develop the function ``crear_etiquetas`` that receives two strings ``etiqueta`` and ``palabra`` and returns a new formatted string following the pattern of the examples |br| |br|
            Examples: |br|
            ``crear_etiquetas("i", "Yay")`` -> ``"<i>Yay</i>"`` |br|
            ``crear_etiquetas("i", "Hello")`` -> ``"<i>Hello</i>"`` |br|
            ``crear_etiquetas("cite", "Yay")`` -> ``"<cite>Yay</cite>"`` |br|

            ~~~~
            def crear_etiquetas(etiqueta, palabra):

            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
                    self.assertEqual(crear_etiquetas("i", "Yay"), "<i>Yay</i>", "Expected: <i>Yay</i>")
                    self.assertEqual(crear_etiquetas("i", "Hello"), "<i>Hello</i>", "Expected:<i>Hello</i>")
                    self.assertEqual(
                        crear_etiquetas("cite", "Yay"),
                        "<cite>Yay</cite>",
                        "Expected: <cite>Yay</cite>",
                    )
                    self.assertEqual(
                        crear_etiquetas("address", "here"),
                        "<address>here</address>",
                        "Expected: <address>here</address>",
                    )
                    self.assertEqual(
                        crear_etiquetas("body", "Heart"),
                        "<body>Heart</body>",
                        "Expected: <body>Heart</body>",
                    )
                    self.assertEqual(crear_etiquetas("i", "i"), "<i>i</i>", "Expected: <i>i</i>")
                    self.assertEqual(crear_etiquetas("i", ""), "<i></i>", "Expected: <i></i>")


            myTests().main()


    .. tab:: Exercise 7

        .. activecode:: q7_7
            :nocodelens:

            Develop the function ``repetir_letras`` that receives a string ``s`` of at least two characters and returns a new string with the last two letters repeated three times |br| |br|
            Examples: |br|
            ``repetir_letras("Hello")`` -> ``"lololo"`` |br|
            ``repetir_letras("abb")`` -> ``"bbbbbb"`` |br|
            ``repetir_letras("Hi")`` -> ``"HiHiHi"``  |br|

            ~~~~
            def repetir_letras(s):

            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
                    self.assertEqual(repetir_letras("Hello"), "lololo", "Expected: lololo")
                    self.assertEqual(repetir_letras("ab"), "ababab", "Expected: ababab")
                    self.assertEqual(repetir_letras("Hi"), "HiHiHi", "Expected: HiHiHi")
                    self.assertEqual(repetir_letras("Candy"), "dydydy", "Expected: dydydy")
                    self.assertEqual(repetir_letras("Code"), "dedede", "Expected: dedede")


            myTests().main()


    .. tab:: Exercise 8

        .. activecode:: q7_8
            :nocodelens:

            Develop the function ``otra_repetir_letras`` (variation of the Exercise 7 function) that receives a string ``s`` of at least two characters and a positive integer ``n`` and returns a new string with the last two letters repeated ``n`` times |br| |br|
            Examples: |br|
            ``otra_repetir_letras("Hello", 3)`` -> ``"lololo"`` |br|
            ``otra_repetir_letras("abb", 1)`` -> ``"bb"`` |br|
            ``otra_repetir_letras("Hi", 5)`` -> ``"HiHiHiHiHi"``  |br|

            ~~~~
            def otra_repetir_letras(s, n):

            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
                    self.assertEqual(otra_repetir_letras("Hello", 3), "lololo", "Expected: lololo")
                    self.assertEqual(otra_repetir_letras("ab", 2), "abab", "Expected: abab")
                    self.assertEqual(otra_repetir_letras("Hi", 6), "HiHiHiHiHiHi", "Expected: HiHiHi")
                    self.assertEqual(otra_repetir_letras("Candy", 1), "dy", "Expected: dy")
                    self.assertEqual(otra_repetir_letras("Code", 0), "", "Expected: ''")


            myTests().main()


    .. tab:: Exercise 9

        .. activecode:: q7_9
            :nocodelens:

            Develop the function ``primera_mitad`` that receives a string ``s`` and returns the first half of the original string |br| |br|
            Examples:|br|
            ``primera_mitad("WooHoo")`` -> ``"Woo"`` |br|
            ``primera_mitad("HelloThere")`` -> ``"Hello"`` |br|
            ``primera_mitad("abcdef")`` -> ``"abc"`` |br|

            ~~~~
            def primera_mitad(s):

            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
                    self.assertEqual(primera_mitad("WooHoo"), "Woo", "Expected: Woo")
                    self.assertEqual(primera_mitad("HelloThere"), "Hello", "Expected: Hello")
                    self.assertEqual(primera_mitad("abcdef"), "abc", "Expected: abc")
                    self.assertEqual(primera_mitad(""), "", "Expected: ")
                    self.assertEqual(primera_mitad("ab"), "a", "Expected: a")
                    self.assertEqual(primera_mitad("0123456789"), "01234", "Expected: 01234")
                    self.assertEqual(primera_mitad("kitten"), "kit", "Expected: kit")


            myTests().main()

    .. tab:: Exercise 10

        .. activecode:: q7_10
            :nocodelens:


            Develop the function ``remove_first_last`` that receives a string ``s`` of at least two characters and returns a string without the first or last character. |br| |br|
            Examples: |br|
            ``remove_first_last("Hello")`` -> ``"ell"`` |br|
            ``remove_first_last("python")`` -> ``"ytho"`` |br|
            ``remove_first_last("coding")`` -> ``"odin"`` |br|

            ~~~~
            def remove_first_last(s):



            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
                    self.assertEqual(remove_first_last("Hello"), "ell", "Expected: ell")
                    self.assertEqual(remove_first_last("Python"), "ytho", "Expected: ytho")
                    self.assertEqual(
                        remove_first_last("coding"), "odin", "Expected: odin"
                    )
                    self.assertEqual(remove_first_last("code"), "od", "Expected: od")
                    self.assertEqual(remove_first_last("ab"), "", "Expected: ")
                    self.assertEqual(
                        remove_first_last(" PyZombies "),
                        "PyZombies",
                        "Expected: PyZombies",
                    )
                    self.assertEqual(
                        remove_first_last("Chocolate!"),
                        "hocolate",
                        "Expected: hocolate",
                    )
                    self.assertEqual(remove_first_last("kitten"), "itte", "Expected: itte")
                    self.assertEqual(remove_first_last("woohoo"), "ooho", "Expected: ooho")


            myTests().main()


    .. tab:: Exercise 11

        .. activecode:: q7_11
            :nocodelens:


            Develop the function ``rotate_left_2`` that receives a string ``s`` of at least two characters and returns the original string rotated 2 positions to the left. |br| |br|
            Examples: |br|
            ``rotate_left_2("Hello")`` -> ``"lloHe"`` |br|
            ``rotate_left_2("Hi")`` -> ``"Hi"`` |br|

            ~~~~
            def rotate_left_2(s):



            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
                    self.assertEqual(
                        rotate_left_2("Hello"), "lloHe", "Expected: lloHe"
                    )
                    self.assertEqual(
                        rotate_left_2("python"), "thonpy", "Expected: thonpy"
                    )
                    self.assertEqual(rotate_left_2("Hi"), "Hi", "Expected: Hi")
                    self.assertEqual(rotate_left_2("code"), "deco", "Expected: deco")
                    self.assertEqual(rotate_left_2("cat"), "tca", "Expected: tca")
                    self.assertEqual(
                        rotate_left_2("12345"), "34512", "Expected: 34512"
                    )
                    self.assertEqual(
                        rotate_left_2("Chocolate"),
                        "ocolateCh",
                        "Expected: ocolateCh",
                    )
                    self.assertEqual(
                        rotate_left_2("bricks"), "icksbr", "Expected: icksbr"
                    )
                    self.assertEqual(
                        rotate_left_2("isPyzomb"),
                        "PyZombies",
                        "Expected: PyZombies",
                    )


            myTests().main()