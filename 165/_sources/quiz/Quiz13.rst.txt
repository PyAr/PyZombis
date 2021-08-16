=========
Quiz - 13
=========

.. |br| raw:: html

   <br />
    

.. tabbed:: quiz13

    .. tab:: Ejercicio 1

        ..  activecode:: q13_1
            :nocodelens:

            Desarrolle la función ``remover_iguales`` que recibe una lista ``numeros`` de enteros. La función debe devolver una lista sin los elementos repetidos y ordenados de manera ascendente. |br| |br|
            Ejemplos: |br|
            ``remover_iguales([1, 2, 2, 3])`` -> ``[1, 2, 3]`` |br|
            ``remover_iguales([1, 2, 3])`` -> ``[1, 2, 3]`` |br|
            ``remover_iguales([1, 2, 2, 1])`` -> ``[1, 2]`` |br|

            ~~~~
            def remover_iguales(numeros):



            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(remover_iguales([2, 2, 1, 3]), [1, 2, 3], "Esperado: [1, 2, 3]")
                    self.assertEqual(remover_iguales([2, 2, 3, 2, 3]), [2, 3], "Esperado: [2, 3]")
                    self.assertEqual(remover_iguales([-2, 2, 3, -2, 2]), [-2, 2, 3], "Esperado: [-2, 2, 3]")
                    self.assertEqual(remover_iguales([]), [], "Esperado: []")
                    self.assertEqual(remover_iguales([1, 2, 3, 4]), [1, 2, 3, 4], "Esperado: [1, 2, 3, 4]")
                    self.assertEqual(remover_iguales([1, 1, 1, 1]), [1], "Esperado: []")
                    self.assertEqual(remover_iguales([0, -1, 1, 3]), [-1, 0, 1, 3], "Esperado: [-1, 0, 1, 3]")


            myTests().main()


    .. tab:: Ejercicio 2

        ..  activecode:: q13_2
            :nocodelens:

            Desarrolle la función ``encriptar`` que recibe una cadena ``frase``. La función debe devolver una nueva cadena encriptada, siguiendo las siguientes reglas: |br|

            1. Se deben retirar todas las letras repetidas de cada una de las palabras de la frase. |br|
            2. Se deben ordenar las letras restantes de cada una de las palabras. |br|

            Ejemplo: |br|
            ``encriptar("anita lava la tina")`` -> ``"aint alv al aint"`` |br|
            *Consejo*: intente convertir la frase en una lista de palabras, luego intente ordenar las letras y construya una cadena con el resultado. |br|

            ~~~~
            def encriptar(frase):

                

            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(
                        encriptar("ana e mariana gostam de banana"),
                        "an e aimnr agmost de abn",
                        "Esperado: an e aimnr agmost de abn",
                    )
                    self.assertEqual(
                        encriptar("Batatinha quando nasce esparrama pelo chão"),
                        "Bahint adnoqu acens aemprs elop choã",
                        "Esperado: Bahint adnoqu acens aemprs elop choã",
                    )
                    self.assertEqual(
                        encriptar("anita lava la tina"),
                        "aint alv al aint", "Esperado: aint alv al aint"
                    )
                    self.assertEqual(
                        encriptar("¿Hola como estas?"),
                        "Halo¿ cmo ?aest",
                        "Esperado: Halo¿ cmo ?aest"
                    )
                    self.assertEqual(
                        encriptar("ana puede venir mañana"),
                        "an depu einrv amnñ",
                        "Esperado: an depu einrv amnñ"
                    )
                    self.assertEqual(encriptar("11111 2222 3333"), "1 2 3", "Esperado: 1 2 3")
                    self.assertEqual(encriptar("12345"), "12345", "Esperado: 12345")


            myTests().main()
