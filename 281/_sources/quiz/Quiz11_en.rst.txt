=========
Quiz - 11
=========

..  |br| raw:: html

    <br />

.. tabbed:: quiz11

    .. tab:: Exercise 1

        ..  activecode:: q11_1
            :nocodelens:

            Develop the function ``verbo`` that receives a string ``s`` as a parameter. If the length of the string is at least 3, it should return the original string concatenated with ``"ing"`` at the end. If the string ``s`` already ends with ``"ing"``, concatenate the string ``"ly"``. If the length of the string is less than 3, it returns the original string. |br| |br|
            Examples: |br|
            ``verbo("singing")`` -> ``"singingly"`` |br|
            ``verbo("travel")`` -> ``"traveling"`` |br|
            ``verbo("do")`` -> ``"do"`` |br|
        
            ~~~~
            def verbo(s):

            

            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(verbo("hail"), "hailing", "Expected: hailing")
                    self.assertEqual(verbo("swiming"), "swimingly", "Expected: swimingly")
                    self.assertEqual(verbo("do"), "do", "Expected: do")
                    self.assertEqual(verbo("singing"), "singingly", "Expected: singingly")
                    self.assertEqual(verbo("travel"), "traveling", "Expected: traveling")
                    self.assertEqual(verbo("lly"), "llying", "Expected: llying")
                    self.assertEqual(verbo("ing"), "ingly", "Expected: ingly")


            myTests().main()


    .. tab:: Exercise 2

        ..  activecode:: q11_2
            :nocodelens:

            Develop the function ``no_es_malo`` that receives a string ``s`` as a parameter. The function must search for the first occurrence of the string ``"no es"`` and the last occurrence of the string ``"malo"`` or the string ``"mala"``, if either appears after the first one, replace ``"no es" ... "malo"`` or ``"no es" ... "mala"`` with the strings ``"es bueno"`` or ``"es buena"`` respectively, then return the result. |br| |br|
            Examples: |br|
            ``no_es_malo("El té no es malo")`` -> ``"El té es bueno"`` |br|
            ``no_es_malo("La película no es mala")`` -> ``"La película es buena"`` |br|
            ``no_es_malo("El precio de esta casa no es para nada malo")`` -> ``"El precio de esta casa es bueno"`` |br|
            ``no_es_malo("El teléfono es malo")`` -> ``"El teléfono es malo"`` |br|

            ~~~~
            def no_es_malo(s):

            

            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(
                        no_es_malo("El televisor no es malo"),
                        "El televisor es bueno",
                        "Expected: El televisor es bueno"
                    )
                    self.assertEqual(
                        no_es_malo("El asado de la cena no es malo!"),
                        "El asado de la cena es bueno!",
                        "Expected: El asado de la cena es bueno!"
                    )
                    self.assertEqual(
                        no_es_malo("El té no está caliente"),
                        "El té no está caliente",
                        "Expected: El té no está caliente"
                    )
                    self.assertEqual(
                        no_es_malo("La película no es mala"),
                        "La película es buena",
                        "Expected: La película es buena"
                    )
                    self.assertEqual(no_es_malo("no es para nada malo"), "es bueno", "Expected: es bueno")
                    self.assertEqual(no_es_malo("no es malo"), "es bueno", "Expected: es bueno")
                    self.assertEqual(no_es_malo("malo"), "malo", "Expected: malo")
                    self.assertEqual(no_es_malo("no"), "no", "Expected: no")
                    self.assertEqual(no_es_malo("NO"), "NO", "Expected: NO")
                    self.assertEqual(no_es_malo("MALO"), "MALO", "Expected: MALO")
                    self.assertEqual(no_es_malo("NO es MALO"), "NO es MALO", "Expected: NO es MALO")
                    self.assertEqual(no_es_malo("no es MALO"), "no es MALO", "Expected: no es MALO")
                    self.assertEqual(no_es_malo("NO es malo"), "NO es malo", "Expected: NO es malo")
                    self.assertEqual(no_es_malo("no es malo ni mala"), "es buena", "Expected: es buena")
                    self.assertEqual(no_es_malo("no es ni mala ni malo"), "es bueno", "Expected: es bueno")


            myTests().main()


    .. tab:: Exercise 3

        .. activecode:: q11_3
            :nocodelens:

            Develop the function ``inicio_final`` that receives two strings ``a`` and ``b``. The strings have to be divided into two, if either of the strings has an odd number of characters, the first half will be the longest substring (for example ``dog`` will be divided into: ``do`` and ``g``). Given the two strings, return a new string formed as follows ``a_start + b_start + a_end + b_end``. |br| |br|
            Examples: |br|
            ``inicio_final("abcd", "1234")`` -> ``"ab12cd34"`` |br|
            ``inicio_final("abc", "1234")`` -> ``"ab12c34"`` |br|
            ``inicio_final("abc", "123")`` -> ``"ab12c3"`` |br|

            ~~~~
            def inicio_final(a, b):

            

            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(inicio_final("abcd", "xy"), "abxcdy", "Expected: abxcdy")
                    self.assertEqual(inicio_final("abcde", "xyz"), "abcxydez", "Expected: abcxydez")
                    self.assertEqual(inicio_final("a", "b"), "ab", "Expected: ab")
                    self.assertEqual(inicio_final("ac", "b"), "abc", "Expected: abc")
                    self.assertEqual(inicio_final("a", "bc"), "abc", "Expected: abc")
                    self.assertEqual(inicio_final("", ""), "", "Expected: ''")
                    self.assertEqual(inicio_final("a", ""), "a", "Expected: 'a'")
                    self.assertEqual(inicio_final("", "b"), "b", "Expected: 'b'")
                    self.assertEqual(
                        inicio_final("Kitten", "Donut"),
                        "KitDontenut",
                        "Expected: KitDontenut"
                    )


            myTests().main()


    .. tab:: Exercise 4

        .. activecode:: q11_4
            :nocodelens:

            Develop the function ``cuantos_ceros`` that given a positive integer ``n``, returns the number of zeros at the end of the integer. |br| |br|
            Examples: |br|
            ``cuantos_ceros(10010)`` -> ``1`` |br|
            ``cuantos_ceros(908007000)`` -> ``3`` |br|

            ~~~~
            def cuantos_ceros(n):

            

            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(cuantos_ceros(10100100010000), 4, "Expected: 4")
                    self.assertEqual(cuantos_ceros(90000000000000000010), 1, "Expected: 1")
                    self.assertEqual(cuantos_ceros(10), 1, "Expected: 1")
                    self.assertEqual(cuantos_ceros(1050051222), 0, "Expected: 0")
                    self.assertEqual(cuantos_ceros(1010101010), 1, "Expected: 1")
                    self.assertEqual(cuantos_ceros(5000), 3, "Expected: 3")
                    self.assertEqual(cuantos_ceros(10000000000), 10, "Expected: 10")
                    self.assertEqual(cuantos_ceros(555), 0, "Expected: 0")
                    self.assertEqual(cuantos_ceros(1), 0, "Expected: 0")
                    self.assertEqual(cuantos_ceros(0), 0, "Expected: 0")


            myTests().main()


    .. tab:: Exercise 5

        .. activecode:: q11_5
            :nocodelens:

            Develop the function ``contar_2`` that receives a positive integer ``n`` greater than 0. The function must return the number of times the digit 2 appears in the interval``[0, n-1]``. |br| |br|
            Examples: |br|
            ``contar_2(20)`` -> ``2`` |br|
            ``contar_2(5)`` -> ``1`` |br|
            ``contar_2(1)`` -> ``0`` |br|

            ~~~~
            def contar_2(n):

            

            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(contar_2(20), 2, "Expected: 2")
                    self.assertEqual(contar_2(1), 0, "Expected: 0")
                    self.assertEqual(contar_2(5), 1, "Expected: 1")
                    self.assertEqual(contar_2(999), 300, "Expected: 300")
                    self.assertEqual(contar_2(555), 216, "Expected: 216")


            myTests().main()


    .. tab:: Exercise 6

        .. activecode:: q11_6
            :nocodelens:

            Develop the function ``inicio_potencia`` that receives a positive integer ``n`` greater than 0. The function must return the first power of 2 that starts with ``n``. |br| |br|
            Examples: |br|
            ``inicio_potencia(65)`` -> ``16`` |br|
            *Explanation*: for ``n = 65`` the power of ``2^16`` results in ``65536`` which contains ``n`` at the beginning. |br| |br|
            ``inicio_potencia(4)`` -> ``2`` |br|
            *Explanation*: for ``n = 4`` the power of ``2^2`` results in ``4`` which contains ``n`` at the beginning. |br| |br|
            ``inicio_potencia(3)`` -> ``5`` |br|
            *Explanation*: for ``n = 3`` the power of ``2^5`` results in ``32`` which contains ``n`` at the beginning. |br|

            ~~~~
            def inicio_potencia(n):

            

            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(inicio_potencia(7), 46, "Expected: 46")
                    self.assertEqual(inicio_potencia(3), 5, "Expected: 5")
                    self.assertEqual(inicio_potencia(133), 316, "Expected: 316")
                    self.assertEqual(inicio_potencia(1024), 10, "Expected: 10")
                    self.assertEqual(inicio_potencia(123), 90, "Expected: 90")
                    self.assertEqual(inicio_potencia(1), 0, "Expected: 0")
                    self.assertEqual(inicio_potencia(10), 10, "Expected: 10")
                    self.assertEqual(inicio_potencia(50), 102, "Expected: 102")


            myTests().main()