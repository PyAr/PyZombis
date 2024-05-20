=========
Quiz - 11
=========

..  |br| raw:: html

    <br />

.. tabbed:: quiz11

    .. tab:: Exercise 1

        ..  activecode:: q11_1_en
            :nocodelens:

            Develop the function ``verb`` that receives a string ``s`` as a parameter. If the length of the string is at least 3, it should return the original string concatenated with ``"ing"`` at the end. If the string ``s`` already ends with ``"ing"``, concatenate the string ``"ly"``. If the length of the string is less than 3, it returns the original string. |br| |br|
            Examples: |br|
            ``verb("singing")`` -> ``"singingly"`` |br|
            ``verb("travel")`` -> ``"traveling"`` |br|
            ``verb("do")`` -> ``"do"`` |br|
        
            ~~~~
            def verb(s):

            

            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(verb("hail"), "hailing", "Expected: hailing")
                    self.assertEqual(verb("swiming"), "swimingly", "Expected: swimingly")
                    self.assertEqual(verb("do"), "do", "Expected: do")
                    self.assertEqual(verb("singing"), "singingly", "Expected: singingly")
                    self.assertEqual(verb("travel"), "traveling", "Expected: traveling")
                    self.assertEqual(verb("lly"), "llying", "Expected: llying")
                    self.assertEqual(verb("ing"), "ingly", "Expected: ingly")


            myTests().main()


    .. tab:: Exercise 2

        ..  activecode:: q11_2_en
            :nocodelens:

            Develop the function ``is_not_bad`` that receives a string ``s`` as a parameter. The function must search for the first occurrence of the string ``"is not bad"`` and the last occurrence of the string ``"bad"`, if either appears after the first one, replace ``"is not" ... "bad"`` with the strings ``"is good"`` respectively, then return the result. |br| |br|
            Examples: |br|
            ``is_not_bad("The tea is not bad")`` -> ``"The tea is good"`` |br|
            ``is_not_bad("The movie is not bad")`` -> ``"The movie is good"`` |br|
            ``is_not_bad("This house price is not that bad")`` -> ``"This house price is good"`` |br|
            ``is_not_bad("The phone is bad")`` -> ``"The phone is bad"`` |br|

            ~~~~
            def is_not_bad(s):

            

            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(
                        is_not_bad("The tv is not bad"),
                        "The tv is good",
                        "Expected: The tv is good"
                    )
                    self.assertEqual(
                        is_not_bad("The barbecue for launch is not bad"),
                        "The barbecue for launch is good",
                        "Expected: The barbecue for launch is good"
                    )
                    self.assertEqual(
                        is_not_bad("The tea is not hot"),
                        "The tea is not hot",
                        "Expected: The tea is not hot"
                    )
                    self.assertEqual(
                        is_not_bad("The movie is not good"),
                        "The movie is good",
                        "Expected: The movie is good"
                    )
                    self.assertEqual(is_not_bad("is not that bad"), "is good", "Expected: is good")
                    self.assertEqual(is_not_bad("is not bad"), "is good", "Expected: is ")good
                    self.assertEqual(is_not_bad("bad"), "bad", "Expected: bad")
                    self.assertEqual(is_not_bad("no"), "no", "Expected: no")
                    self.assertEqual(is_not_bad("NO"), "NO", "Expected: NO")
                    self.assertEqual(is_not_bad("BAD"), "BAD", "Expected: BAD")
                    self.assertEqual(is_not_bad("IS NOT BAD"), "IS NOT BAD", "Expected: IS NOT BAD")
                    self.assertEqual(is_not_bad("is not BAD), "is not BAD", "Expected: is not BAD")
                    self.assertEqual(is_not_bad("IS NOT bad"), "IS NOT bad", "Expected: IS NOT bad")
                    self.assertEqual(is_not_bad("is not bad"), "is good", "Expected: is good")
                    self.assertEqual(is_not_bad("is not bad"), "is good", "Expected: is good")


            myTests().main()


    .. tab:: Exercise 3

        .. activecode:: q11_3_en
            :nocodelens:

            Develop the function ``start_end`` that receives two strings ``a`` and ``b``. The strings have to be divided into two, if either of the strings has an odd number of characters, the first half will be the longest substring (for example ``dog`` will be divided into: ``do`` and ``g``). Given the two strings, return a new string formed as follows ``a_start + b_start + a_end + b_end``. |br| |br|
            Examples: |br|
            ``start_end("abcd", "1234")`` -> ``"ab12cd34"`` |br|
            ``start_end("abc", "1234")`` -> ``"ab12c34"`` |br|
            ``start_end("abc", "123")`` -> ``"ab12c3"`` |br|

            ~~~~
            def start_end(a, b):

            

            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(start_end("abcd", "xy"), "abxcdy", "Expected: abxcdy")
                    self.assertEqual(start_end("abcde", "xyz"), "abcxydez", "Expected: abcxydez")
                    self.assertEqual(start_end("a", "b"), "ab", "Expected: ab")
                    self.assertEqual(start_end("ac", "b"), "abc", "Expected: abc")
                    self.assertEqual(start_end("a", "bc"), "abc", "Expected: abc")
                    self.assertEqual(start_end("", ""), "", "Expected: ''")
                    self.assertEqual(start_end("a", ""), "a", "Expected: 'a'")
                    self.assertEqual(start_end("", "b"), "b", "Expected: 'b'")
                    self.assertEqual(
                        start_end("Kitten", "Donut"),
                        "KitDontenut",
                        "Expected: KitDontenut"
                    )


            myTests().main()


    .. tab:: Exercise 4

        .. activecode:: q11_4_en
            :nocodelens:

            Develop the function ``how_many_zeros`` that given a positive integer ``n``, returns the number of zeros at the end of the integer. |br| |br|
            Examples: |br|
            ``how_many_zeros(10010)`` -> ``1`` |br|
            ``how_many_zeros(908007000)`` -> ``3`` |br|

            ~~~~
            def how_many_zeros(n):

            

            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(how_many_zeros(10100100010000), 4, "Expected: 4")
                    self.assertEqual(how_many_zeros(90000000000000000010), 1, "Expected: 1")
                    self.assertEqual(how_many_zeros(10), 1, "Expected: 1")
                    self.assertEqual(how_many_zeros(1050051222), 0, "Expected: 0")
                    self.assertEqual(how_many_zeros(1010101010), 1, "Expected: 1")
                    self.assertEqual(how_many_zeros(5000), 3, "Expected: 3")
                    self.assertEqual(how_many_zeros(10000000000), 10, "Expected: 10")
                    self.assertEqual(how_many_zeros(555), 0, "Expected: 0")
                    self.assertEqual(how_many_zeros(1), 0, "Expected: 0")
                    self.assertEqual(how_many_zeros(0), 0, "Expected: 0")


            myTests().main()


    .. tab:: Exercise 5

        .. activecode:: q11_5_en
            :nocodelens:

            Develop the function ``count_2`` that receives a positive integer ``n`` greater than 0. The function must return the number of times the digit 2 appears in the interval``[0, n-1]``. |br| |br|
            Examples: |br|
            ``count_2(20)`` -> ``2`` |br|
            ``count_2(5)`` -> ``1`` |br|
            ``count_2(1)`` -> ``0`` |br|

            ~~~~
            def count_2(n):

            

            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(count_2(20), 2, "Expected: 2")
                    self.assertEqual(count_2(1), 0, "Expected: 0")
                    self.assertEqual(count_2(5), 1, "Expected: 1")
                    self.assertEqual(count_2(999), 300, "Expected: 300")
                    self.assertEqual(count_2(555), 216, "Expected: 216")


            myTests().main()


    .. tab:: Exercise 6

        .. activecode:: q11_6_en
            :nocodelens:

            Develop the function ``start_power`` that receives a positive integer ``n`` greater than 0. The function must return the first power of 2 that starts with ``n``. |br| |br|
            Examples: |br|
            ``start_power(65)`` -> ``16`` |br|
            *Explanation*: for ``n = 65`` the power of ``2^16`` results in ``65536`` which contains ``n`` at the beginning. |br| |br|
            ``start_power(4)`` -> ``2`` |br|
            *Explanation*: for ``n = 4`` the power of ``2^2`` results in ``4`` which contains ``n`` at the beginning. |br| |br|
            ``start_power(3)`` -> ``5`` |br|
            *Explanation*: for ``n = 3`` the power of ``2^5`` results in ``32`` which contains ``n`` at the beginning. |br|

            ~~~~
            def start_power(n):

            

            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(start_power(7), 46, "Expected: 46")
                    self.assertEqual(start_power(3), 5, "Expected: 5")
                    self.assertEqual(start_power(133), 316, "Expected: 316")
                    self.assertEqual(start_power(1024), 10, "Expected: 10")
                    self.assertEqual(start_power(123), 90, "Expected: 90")
                    self.assertEqual(start_power(1), 0, "Expected: 0")
                    self.assertEqual(start_power(10), 10, "Expected: 10")
                    self.assertEqual(start_power(50), 102, "Expected: 102")


            myTests().main()
