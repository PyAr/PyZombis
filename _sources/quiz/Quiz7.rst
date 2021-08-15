=========
Quiz - 7
=========

.. |br| raw:: html

   <br />


.. tabbed:: quiz7

    .. tab:: Ejercicio 1

        .. activecode:: q7_1
            :nocodelens:

            Desarrolle la función ``multi_cadena`` que recibe como parámetros una cadena ``s`` y un entero positivo ``n`` y devuelve una nueva cadena que contiene ``n`` copias de la cadena original |br| |br|
            Ejemplos:|br|
            ``multi_cadena("Hola", 2)`` -> ``"HolaHola"`` |br|
            ``multi_cadena("Hola", 5)`` -> ``"HolaHolaHolaHolaHola"``

            ~~~~
            def multi_cadena(s, n):



            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
                    self.assertEqual(multi_cadena("Hola", 2), "HolaHola", "Esperado: HolaHola")
                    self.assertEqual(
                            multi_cadena("Hola", 3), "HolaHolaHola", "Esperado: HolaHolaHola"
                    )
                    self.assertEqual(multi_cadena("Hi", 1), "Hi", "Esperado: Hi")
                    self.assertEqual(multi_cadena("Hi", 0), "", "Esperado: ''")
                    self.assertEqual(multi_cadena("Hi", 5), "HiHiHiHiHi", "Esperado: HiHiHiHiHi")
                    self.assertEqual(
                            multi_cadena("Oh Boy!", 2), "Oh Boy!Oh Boy!", "Esperado: Oh Boy!Oh Boy!"
                    )
                    self.assertEqual(multi_cadena("x", 4), "xxxx", "Esperado: xxxx")
                    self.assertEqual(multi_cadena("", 4), "", "Esperado: ''")
                    self.assertEqual(multi_cadena("code", 2), "codecode", "Esperado: codecode")
                    self.assertEqual(
                            multi_cadena("code", 3), "codecodecode", "Esperado: codecodecode"
                    )


            myTests().main()


    .. tab:: Ejercicio 2

        .. activecode:: q7_2
            :nocodelens:

            Desarrolle la función ``expandir_cadena`` que recibe una cadena ``s`` y devuelva una nueva cadena siguiendo el patrón descrito en los ejemplos |br| |br|
            Ejemplos:|br|
            ``expandir_cadena("Code")`` -> ``"CCoCodCode"`` |br|
            ``expandir_cadena("abc")`` -> ``"aababc"`` |br|
            ``expandir_cadena("ab")`` -> ``"aab"`` |br|

            ~~~~
            def expandir_cadena(s):



            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
                    self.assertEqual(expandir_cadena("Code"), "CCoCodCode", "Esperado: CCoCodCode")
                    self.assertEqual(expandir_cadena("abc"), "aababc", "Esperado: aababc")
                    self.assertEqual(expandir_cadena("ab"), "aab", "Esperado: aab")
                    self.assertEqual(expandir_cadena("x"), "x", "Esperado: x")
                    self.assertEqual(expandir_cadena("fade"), "ffafadfade", "Esperado: ffafadfade")
                    self.assertEqual(
                        expandir_cadena("There"), "TThTheTherThere", "Esperado: TThTheTherThere"
                    )
                    self.assertEqual(
                        expandir_cadena("Kitten"),
                        "KKiKitKittKitteKitten",
                        "Esperado: KKiKitKittKitteKitten",
                    )
                    self.assertEqual(expandir_cadena("Bye"), "BByBye", "Esperado: BByBye")
                    self.assertEqual(expandir_cadena("Good"), "GGoGooGood", "Esperado: GGoGooGood")
                    self.assertEqual(expandir_cadena("Bad"), "BBaBad", "Esperado: BBaBad")


            myTests().main()


    .. tab:: Ejercicio 3

        .. activecode:: q7_3
            :nocodelens:


            Desarrolle la función ``contar_apariciones_9`` que recibe como parámetro una lista no vacía de números enteros ``numeros`` y devuelva cuántas veces aparece el número 9 en la lista |br| |br|
            Ejemplo: ``contar_apariciones_9([1, 99, 9])`` -> ``1``

            ~~~~
            def contar_apariciones_9(numeros):



            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
                    self.assertEqual(contar_apariciones_9([1, 99, 9]), 1, "Esperado: 1")
                    self.assertEqual(contar_apariciones_9([1, 9, 9]), 2, "Esperado: 2")
                    self.assertEqual(contar_apariciones_9([1, 9, 9, 3, 9]), 3, "Esperado: 3")
                    self.assertEqual(contar_apariciones_9([1, 2, 3]), 0, "Esperado: 0")
                    self.assertEqual(contar_apariciones_9([1]), 0, "Esperado: 1")
                    self.assertEqual(contar_apariciones_9([4, 2, 4, 3, 1]), 0, "Esperado: 0")
                    self.assertEqual(contar_apariciones_9([9, 2, 99, 3, 1]), 1, "Esperado: 1")


            myTests().main()


    .. tab:: Ejercicio 4

        .. activecode:: q7_4
            :nocodelens:


            Desarrolle la función ``verificar_comienzo_9`` que recibe una lista de números enteros ``numeros`` y verifica si al menos uno de los primeros cuatro números es un 9 |br| |br|
            Ejemplos:|br|
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
                    self.assertEqual(verificar_comienzo_9([1, 2, 9, 3, 4]), True, "Esperado: True")
                    self.assertEqual(verificar_comienzo_9([1, 2, 3, 4, 9]), False, "Esperado: False")
                    self.assertEqual(verificar_comienzo_9([1, 2, 3, 4, 5]), False, "Esperado: False")
                    self.assertEqual(verificar_comienzo_9([9, 2, 3]), True, "Esperado: True")
                    self.assertEqual(verificar_comienzo_9([1, 9, 9]), True, "Esperado: True")
                    self.assertEqual(verificar_comienzo_9([1, 2, 3]), False, "Esperado: False")
                    self.assertEqual(verificar_comienzo_9([1, 9]), True, "Esperado: True")
                    self.assertEqual(verificar_comienzo_9([5, 5]), False, "Esperado: False")
                    self.assertEqual(verificar_comienzo_9([2]), False, "Esperado: False")
                    self.assertEqual(verificar_comienzo_9([9]), True, "Esperado: True")
                    self.assertEqual(verificar_comienzo_9([]), False, "Esperado: False")
                    self.assertEqual(verificar_comienzo_9([3, 9, 2, 3, 3]), True, "Esperado: True")


            myTests().main()


    .. tab:: Ejercicio 5

        .. activecode:: q7_5
            :nocodelens:


            Desarrolle la función ``hola_usuario`` que recibe como parámetro una cadena ``nombre`` que representa el nombre de un usuario y devuelva un saludo con este nombre |br| |br|
            Ejemplos: |br|
            ``hola_usuario("Bob")`` -> ``"¡Hola Bob!"`` |br|
            ``hola_usuario("Alice")`` -> ``"¡Hola Alice!"`` |br|
            ``hola_usuario("X")`` -> ``"¡Hola X!"`` |br|

            ~~~~
            def hola_usuario(nombre):



            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
                    self.assertEqual(hola_usuario("Bob"), "¡Hola Bob!", "Esperado: ¡Hola Bob!")
                    self.assertEqual(hola_usuario("Alice"), "¡Hola Alice!", "Esperado: ¡Hola Alice!")
                    self.assertEqual(hola_usuario("X"), "¡Hola X!", "Esperado: ¡Hola X!")
                    self.assertEqual(hola_usuario("Hola"), "¡Hola Hola!", "Esperado: ¡Hola Hola!")


            myTests().main()


    .. tab:: Ejercicio 6

        .. activecode:: q7_6
            :nocodelens:


            Desarrolle la función ``crear_etiquetas`` que recibe dos cadenas ``etiqueta`` y ``palabra`` y devuelva una nueva cadena formateada siguiendo el patrón de los ejemplos |br| |br|
            Ejemplos: |br|
            ``crear_etiquetas("i", "Yay")`` -> ``"<i>Yay</i>"`` |br|
            ``crear_etiquetas("i", "Hello")`` -> ``"<i>Hello</i>"`` |br|
            ``crear_etiquetas("cite", "Yay")`` -> ``"<cite>Yay</cite>"`` |br|

            ~~~~
            def crear_etiquetas(etiqueta, palabra):



            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
                    self.assertEqual(crear_etiquetas("i", "Yay"), "<i>Yay</i>", "Esperado: <i>Yay</i>")
                    self.assertEqual(crear_etiquetas("i", "Hello"), "<i>Hello</i>", "Esperado:<i>Hello</i>")
                    self.assertEqual(
                        crear_etiquetas("cite", "Yay"),
                        "<cite>Yay</cite>",
                        "Esperado: <cite>Yay</cite>",
                    )
                    self.assertEqual(
                        crear_etiquetas("address", "here"),
                        "<address>here</address>",
                        "Esperado: <address>here</address>",
                    )
                    self.assertEqual(
                        crear_etiquetas("body", "Heart"),
                        "<body>Heart</body>",
                        "Esperado: <body>Heart</body>",
                    )
                    self.assertEqual(crear_etiquetas("i", "i"), "<i>i</i>", "Esperado: <i>i</i>")
                    self.assertEqual(crear_etiquetas("i", ""), "<i></i>", "Esperado: <i></i>")


            myTests().main()


    .. tab:: Ejercicio 7 

        .. activecode:: q7_7
            :nocodelens:


            Desarrolle la función ``repetir_letras`` que recibe una cadena ``s`` de al menos dos caracteres y devuelve una nueva cadena con las dos últimas letras repetidas tres veces |br| |br|
            Ejemplos: |br|
            ``repetir_letras("Hello")`` -> ``"lololo"`` |br|
            ``repetir_letras("abb")`` -> ``"bbbbbb"`` |br|
            ``repetir_letras("Hi")`` -> ``"HiHiHi"``  |br|

            ~~~~
            def repetir_letras(s):



            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
                    self.assertEqual(repetir_letras("Hello"), "lololo", "Esperado: lololo")
                    self.assertEqual(repetir_letras("ab"), "ababab", "Esperado: ababab")
                    self.assertEqual(repetir_letras("Hi"), "HiHiHi", "Esperado: HiHiHi")
                    self.assertEqual(repetir_letras("Candy"), "dydydy", "Esperado: dydydy")
                    self.assertEqual(repetir_letras("Code"), "dedede", "Esperado: dedede")


            myTests().main()


    .. tab:: Ejercicio 8

        .. activecode:: q7_8
            :nocodelens:


            Desarrolle la función ``otra_repetir_letras`` (variante de la función del Ejercicio 8) que recibe una cadena ``s`` de al menos dos caracteres y un entero positivo ``n`` y devuelva una nueva cadena con las dos últimas letras repetidas ``n`` veces |br| |br|
            Ejemplos: |br|
            ``otra_repetir_letras("Hello", 3)`` -> ``"lololo"`` |br|
            ``otra_repetir_letras("abb", 1)`` -> ``"bb"`` |br|
            ``otra_repetir_letras("Hi", 5)`` -> ``"HiHiHiHiHi"``  |br|

            ~~~~
            def otra_repetir_letras(s, n):



            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
                    self.assertEqual(otra_repetir_letras("Hello", 3), "lololo", "Esperado: lololo")
                    self.assertEqual(otra_repetir_letras("ab", 2), "abab", "Esperado: abab")
                    self.assertEqual(otra_repetir_letras("Hi", 6), "HiHiHiHiHiHi", "Esperado: HiHiHi")
                    self.assertEqual(otra_repetir_letras("Candy", 1), "dy", "Esperado: dy")
                    self.assertEqual(otra_repetir_letras("Code", 0), "", "Esperado: ''")


            myTests().main()


    .. tab:: Ejercicio 9

        .. activecode:: q7_9
            :nocodelens:


            Desarrolle la función ``primera_mitad`` que recibe una cadena ``s`` y devuelve la primera mitad de la cadena original |br| |br|
            Ejemplos:|br|
            ``primera_mitad("WooHoo")`` -> ``"Woo"`` |br|
            ``primera_mitad("HelloThere")`` -> ``"Hello"`` |br|
            ``primera_mitad("abcdef")`` -> ``"abc"`` |br|

            ~~~~
            def primera_mitad(s):



            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
                    self.assertEqual(primera_mitad("WooHoo"), "Woo", "Esperado: Woo")
                    self.assertEqual(primera_mitad("HelloThere"), "Hello", "Esperado: Hello")
                    self.assertEqual(primera_mitad("abcdef"), "abc", "Esperado: abc")
                    self.assertEqual(primera_mitad(""), "", "Esperado: ")
                    self.assertEqual(primera_mitad("ab"), "a", "Esperado: a")
                    self.assertEqual(primera_mitad("0123456789"), "01234", "Esperado: 01234")
                    self.assertEqual(primera_mitad("kitten"), "kit", "Esperado: kit")


            myTests().main()


    .. tab:: Ejercicio 10

        .. activecode:: q7_10
            :nocodelens:


            Desarrolle la función ``remover_primer_ultimo`` que recibe una cadena ``s`` de al menos dos caracteres y devuelva una cadena sin el primer ni el último carácter |br| |br|
            Ejemplos: |br|
            ``remover_primer_ultimo("Hello")`` -> ``"ell"`` |br|
            ``remover_primer_ultimo("python")`` -> ``"ytho"`` |br|
            ``remover_primer_ultimo("coding")`` -> ``"odin"`` |br|

            ~~~~
            def remover_primer_ultimo(s):



            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
                    self.assertEqual(remover_primer_ultimo("Hello"), "ell", "Esperado: ell")
                    self.assertEqual(remover_primer_ultimo("Python"), "ytho", "Esperado: ytho")
                    self.assertEqual(remover_primer_ultimo("coding"), "odin", "Esperado: odin")
                    self.assertEqual(remover_primer_ultimo("code"), "od", "Esperado: od")
                    self.assertEqual(remover_primer_ultimo("ab"), "", "Esperado: ")
                    self.assertEqual(remover_primer_ultimo(" PyZombies "), "PyZombies", "Esperado: PyZombies")
                    self.assertEqual(remover_primer_ultimo("Chocolate!"), "hocolate", "Esperado: hocolate")
                    self.assertEqual(remover_primer_ultimo("kitten"), "itte", "Esperado: itte")
                    self.assertEqual(remover_primer_ultimo("woohoo"), "ooho", "Esperado: ooho")


            myTests().main()


    .. tab:: Ejercicio 11

        .. activecode:: q7_11
            :nocodelens:


            Desarrolle la función ``rotar_izq_2`` que recibe una cadena ``s`` de al menos dos caracteres y devuelva la cadena original rotada 2 posiciones a la izquierda |br| |br|
            Ejemplos:|br|
            ``rotar_izq_2("Hello")`` -> ``"lloHe"`` |br|
            ``rotar_izq_2("Hi")`` -> ``"Hi"`` |br|

            ~~~~
            def rotar_izq_2(s):



            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
                    self.assertEqual(rotar_izq_2("Hello"), "lloHe", "Esperado: lloHe")
                    self.assertEqual(rotar_izq_2("python"), "thonpy", "Esperado: thonpy")
                    self.assertEqual(rotar_izq_2("Hi"), "Hi", "Esperado: Hi")
                    self.assertEqual(rotar_izq_2("code"), "deco", "Esperado: deco")
                    self.assertEqual(rotar_izq_2("cat"), "tca", "Esperado: tca")
                    self.assertEqual(rotar_izq_2("12345"), "34512", "Esperado: 34512")
                    self.assertEqual(
                        rotar_izq_2("Chocolate"), "ocolateCh", "Esperado: ocolateCh"
                    )
                    self.assertEqual(rotar_izq_2("bricks"), "icksbr", "Esperado: icksbr")
                    self.assertEqual(
                        rotar_izq_2("isPyzomb"), "PyZombies", "Esperado: PyZombies"
                    )


            myTests().main()
