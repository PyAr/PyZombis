=========
Quiz - 13
=========

.. |br| raw:: html

   <br />
    

.. tabbed:: quiz13

    .. tab:: Exercise 1

        ..  activecode:: q13_1_en
            :nocodelens:

            Develop the function ``remove_duplicates`` that receives a list ``numbers`` of integers. The function should return a list without repeated elements and sorted in ascending order. |br| |br|
            Examples: |br|
            ``remove_duplicates([1, 2, 2, 3])`` -> ``[1, 2, 3]`` |br|
            ``remove_duplicates([1, 2, 3])`` -> ``[1, 2, 3]`` |br|
            ``remove_duplicates([1, 2, 2, 1])`` -> ``[1, 2]`` |br|

            ~~~~
            def remove_duplicates(numbers):



            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(remove_duplicates([2, 2, 1, 3]), [1, 2, 3], "Expected: [1, 2, 3]")
                    self.assertEqual(remove_duplicates([2, 2, 3, 2, 3]), [2, 3], "Expected: [2, 3]")
                    self.assertEqual(remove_duplicates([-2, 2, 3, -2, 2]), [-2, 2, 3], "Expected: [-2, 2, 3]")
                    self.assertEqual(remove_duplicates([]), [], "Expected: []")
                    self.assertEqual(remove_duplicates([1, 2, 3, 4]), [1, 2, 3, 4], "Expected: [1, 2, 3, 4]")
                    self.assertEqual(remove_duplicates([1, 1, 1, 1]), [1], "Expected: []")
                    self.assertEqual(remove_duplicates([0, -1, 1, 3]), [-1, 0, 1, 3], "Expected: [-1, 0, 1, 3]")


            myTests().main()


    .. tab:: Exercise 2

        ..  activecode:: q13_2_en
            :nocodelens:

            Develop the function ``encrypt`` that receives a string ``phrase``. The function should return a new encrypted string, following these rules: |br|

            1. All repeated letters must be removed from each word of the phrase. |br|
            2. The remaining letters in each word must be sorted. |br|

            Example: |br|
            ``encrypt("anita lava la tina")`` -> ``"aint alv al aint"`` |br|
            *Tip*: try converting the phrase into a list of words, then try sorting the letters and build a string with the result. |br|

            ~~~~
            def encrypt(phrase):

                

            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(
                        encrypt("ana e mariana gostam de banana"),
                        "an e aimnr agmost de abn",
                        "Expected: an e aimnr agmost de abn",
                    )
                    self.assertEqual(
                        encrypt("Batatinha quando nasce esparrama pelo chão"),
                        "Bahint adnoqu acens aemprs elop choã",
                        "Expected: Bahint adnoqu acens aemprs elop choã",
                    )
                    self.assertEqual(
                        encrypt("anita lava la tina"),
                        "aint alv al aint", "Expected: aint alv al aint"
                    )
                    self.assertEqual(
                        encrypt("¿Hola como estas?"),
                        "Halo¿ cmo ?aest",
                        "Expected: Halo¿ cmo ?aest"
                    )
                    self.assertEqual(
                        encrypt("ana puede venir mañana"),
                        "an depu einrv amnñ",
                        "Expected: an depu einrv amnñ"
                    )
                    self.assertEqual(encrypt("11111 2222 3333"), "1 2 3", "Expected: 1 2 3")
                    self.assertEqual(encrypt("12345"), "12345", "Expected: 12345")


            myTests().main()