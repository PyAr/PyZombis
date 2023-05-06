========
Quiz - 9
========

.. |br| raw:: html

   <br />


.. tabbed:: quiz9

    .. tab:: Exercise 1

        ..  activecode:: q9_1
            :nocodelens:

            Develop the function ``near_ten`` that receives an integer ``n`` and returns ``True`` when ``n`` is a multiple of 10, or when ``n`` is one or two units away from it. Otherwise, return ``False``. |br| |br|
            Examples: |br|
            ``near_ten(12)`` -> ``True`` |br|
            ``near_ten(17)`` -> ``False`` |br|
            ``near_ten(19)`` -> ``True`` |br|

            ~~~~
            def near_ten(n):


            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
                    self.assertEqual(near_ten(12), True, "Expected: True")
                    self.assertEqual(near_ten(17), False, "Expected: False")
                    self.assertEqual(near_ten(19), True, "Expected: True")
                    self.assertEqual(near_ten(31), True, "Expected: True")
                    self.assertEqual(near_ten(6), False, "Expected: False")
                    self.assertEqual(near_ten(10), True, "Expected: True")
                    self.assertEqual(near_ten(11), True, "Expected: True")
                    self.assertEqual(near_ten(21), True, "Expected: True")
                    self.assertEqual(near_ten(22), True, "Expected: True")
                    self.assertEqual(near_ten(23), False, "Expected: False")
                    self.assertEqual(near_ten(54), False, "Expected: False")
                    self.assertEqual(near_ten(155), False, "Expected: False")
                    self.assertEqual(near_ten(158), True, "Expected: True")
                    self.assertEqual(near_ten(3), False, "Expected: False")
                    self.assertEqual(near_ten(1), True, "Expected: True")


            myTests().main()

    .. tab:: Exercise 2

        .. activecode:: q9_2
            :nocodelens:

            Develop a function called "suma_loca" that receives three integers "a", "b", and "c". The function must return the sum of the three numbers with the condition that if any number appears twice, it will not be counted in the sum. |br| |br|
            Examples: |br|
            ``suma_loca(1, 2, 3)`` -> ``6`` |br|
            ``suma_loca(3, 2, 3)`` -> ``2`` |br|
            ``suma_loca(3, 3, 3)`` -> ``0`` |br|

            ~~~~
            def suma_loca(a, b, c):

            
            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
                    self.assertEqual(suma_loca(1, 2, 3), 6, "Expected: 6")
                    self.assertEqual(suma_loca(3, 2, 3), 2, "Expected: 2")
                    self.assertEqual(suma_loca(3, 3, 3), 0, "Expected: 0")
                    self.assertEqual(suma_loca(9, 2, 2), 9, "Expected: 9")
                    self.assertEqual(suma_loca(2, 2, 9), 9, "Expected: 9")
                    self.assertEqual(suma_loca(2, 9, 2), 9, "Expected: 9")
                    self.assertEqual(suma_loca(2, 9, 3), 14, "Expected: 14")
                    self.assertEqual(suma_loca(4, 2, 3), 9, "Expected: 9")
                    self.assertEqual(suma_loca(1, 3, 1), 3, "Expected: 3")

            myTests().main()
            
    .. tab:: Exercise 3

        .. activecode:: q9_3
            :nocodelens:

            Develop the function called "suma_con_suerte" that receives three integers "a", "b", and "c". The function must return the sum of the three numbers with the condition that if one of the numbers is **13**, it won't count in the sum, as well as all the numbers to its right. |br| |br|
            Examples: |br|
            ``suma_con_suerte(1, 2, 3)`` -> ``6`` |br|
            ``suma_con_suerte(1, 2, 13)`` -> ``3`` |br|
            ``suma_con_suerte(1, 13, 3)`` -> ``1`` |br|

            ~~~~
            def suma_con_suerte(a, b, c):


            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
                    self.assertEqual(suma_con_suerte(1, 2, 3), 6, "Expected: 6")
                    self.assertEqual(suma_con_suerte(1, 2, 13), 3, "Expected: 3")
                    self.assertEqual(suma_con_suerte(1, 13, 3), 1, "Expected: 1")
                    self.assertEqual(suma_con_suerte(1, 13, 13), 1, "Expected: 1")
                    self.assertEqual(suma_con_suerte(6, 5, 2), 13, "Expected: 13")
                    self.assertEqual(suma_con_suerte(13, 2, 3), 0, "Expected: 0")
                    self.assertEqual(suma_con_suerte(13, 2, 13), 0, "Expected: 0")
                    self.assertEqual(suma_con_suerte(13, 13, 2), 0, "Expected: 0")
                    self.assertEqual(suma_con_suerte(9, 4, 13), 13, "Expected: 13")
                    self.assertEqual(suma_con_suerte(8, 13, 2), 8, "Expected: 8")
                    self.assertEqual(suma_con_suerte(7, 2, 1), 10, "Expected: 10")
                    self.assertEqual(suma_con_suerte(3, 3, 13), 6, "Expected: 6")

            myTests().main()
            
    .. tab:: Exercise 4

        .. activecode:: q9_4
            :nocodelens:

            Develop the function called "caracteres_dobles" that receives a string "s" and should return the original string duplicated. |br| |br|
            Examples: |br|
            ``caracteres_dobles('The')`` -> ``"TThhee"`` |br|
            ``caracteres_dobles('AAbb')`` -> ``"AAAAbbbb"`` |br|
            ``caracteres_dobles('Hi-There')`` -> ``"HHii--TThheerree"`` |br|

            ~~~~
            def caracteres_dobles(s):

            
            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
                    self.assertEqual(caracteres_dobles("The"), "TThhee", "Expected: TThhee")
                    self.assertEqual(caracteres_dobles("AAbb"), "AAAAbbbb", "Expected: AAAAbbbb")
                    self.assertEqual(caracteres_dobles("Hi-There"), "HHii--TThheerree", "Expected: HHii--TThheerree")
                    self.assertEqual(caracteres_dobles("Word!"), "WWoorrdd!!", "Expected: WWoorrdd!!")
                    self.assertEqual(caracteres_dobles("!!"), "!!!!", "Expected: !!!!")
                    self.assertEqual(caracteres_dobles(""), "", "Expected: ")
                    self.assertEqual(caracteres_dobles("a"), "aa", "Expected: aa")
                    self.assertEqual(caracteres_dobles("."), "..", "Expected: ..")
                    self.assertEqual(caracteres_dobles("aa"), "aaaa", "Expected: aaaa")

            myTests().main()

    
    .. tab:: Exercise 5

        .. activecode:: q9_5
            :nocodelens:

            Develop the function ``count_greeting`` which receives a string ``s`` as a parameter and returns the number of times the string ``"hello"`` appears in ``s``. |br| |br|
            Examples: |br|
            ``count_greeting ("abc hello ho")`` -> ``1`` |br|
            ``count_greeting ("ABChello hello")`` -> ``2`` |br|
            ``count_greeting ("hellohello")`` -> ``2`` |br|

            ~~~~
            def count_greeting(s):

            
            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
                    
                    self.assertEqual(count_greeting("abc hello ho"), 1, "Expected: abc hello ho")
                    self.assertEqual(count_greeting("ABChello hello"), 2, "Expected: ABCh i hello")
                    self.assertEqual(count_greeting("hellohello"), 2, "Expected: hellohello")
                    self.assertEqual(count_greeting("helloHoLAhoLa"), 1, "Expected: helloHOLAhoLa")
                    self.assertEqual(count_greeting(""), 0, "Expected: ")
                    self.assertEqual(count_greeting("h"), 0, "Expected: h")
                    self.assertEqual(count_greeting("hello"), 1, "Expected: hello")
                    self.assertEqual(count_greeting("Hello is no HOLA on aHolA"),0, "Expected: Hello is no HOLA on aHolA")
                    self.assertEqual(count_greeting("helloh not HOholaholA"), 2, "Expected: helloh not HOholaholA")


            myTests().main()


    .. tab:: Exercise 6

        .. activecode:: q9_6
            :nocodelens:

            Develop the function ``cat_dog`` which receives a string ``s`` as a parameter and returns ``True`` if the string ``"cat"`` and the string ``"dog"`` appear the same number of times in the string ``s`` or returns ``False`` otherwise. | br | | br |
            Examples: |br|
            ``cat_dog ("catdog")`` -> ``True`` |br|
            ``cat_dog ("catcat")`` -> ``False`` |br|
            ``cat_dog ("1cat1dog")`` -> ``True`` |br|

            ~~~~
            def cat_dog(s):


            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
                    self.assertEqual(cat_dog("catdog"), True, "Expected: True")
                    self.assertEqual(cat_dog("catcat"), False, "Expected: False")
                    self.assertEqual(cat_dog("1cat1cadoperro"), True, "Expected: True")
                    self.assertEqual(cat_dog("catxxperroxxxperro"), False, "Expected: False")
                    self.assertEqual(cat_dog("catxperroxperroxcadogcat"), True, "Expected: True")
                    self.assertEqual(cat_dog("catxperroxperroxca"), False, "Expected: False")
                    self.assertEqual(cat_dog("perroperrocat"), False, "Expected: False")
                    self.assertEqual(cat_dog("perroogcat"), True, "Expected: True")
                    self.assertEqual(cat_dog("perro"), False, "Expected: False")
                    self.assertEqual(cat_dog("cat"), False, "Expected: False")
                    self.assertEqual(cat_dog("ca"), True, "Expected: True")
                    self.assertEqual(cat_dog("c"), True, "Expected: True")
                    self.assertEqual(cat_dog(""), True, "Expected: True")


            myTests().main()


    .. tab:: Exercise 7

        .. activecode:: q9_7
            :nocodelens:

            Develop the function ``count_code`` which receives a string ``s`` as a parameter and returns the number of times the string ``"code"`` appears in ``s``, but with the condition that the letter ``'d'`` can be exchanged for any other letter. Thus, the strings ``"coze"`` and ``"coze"`` should be counted equally. |br| |br|
            Examples:|br|
            ``count_code("aaacodebbb")`` -> ``1`` |br|
            ``count_code("codexxcode")`` -> ``2`` |br|
            ``count_code("cozexxcope")`` -> ``2`` |br|

            ~~~~
            def count_code(s):


            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
                    self.assertEqual(count_code("aaacodebbb"), 1, "Expected: 1")
                    self.assertEqual(count_code("codexxcode"), 2, "Expected: 2")
                    self.assertEqual(count_code("cozexxcope"), 2, "Expected: 2")
                    self.assertEqual(count_code("cozfxxcope"), 1, "Expected: 1")
                    self.assertEqual(count_code("xxcozeyycop"), 1, "Expected: 1")
                    self.assertEqual(count_code("cozcop"), 0, "Expected: 0")
                    self.assertEqual(count_code("abcxyz"), 0, "Expected: 0")
                    self.assertEqual(count_code("code"), 1, "Expected: 1")
                    self.assertEqual(count_code("ode"), 0, "Expected: 0")
                    self.assertEqual(count_code("c"), 0, "Expected: 0")
                    self.assertEqual(count_code(""), 0, "Expected: 0")
                    self.assertEqual(count_code("AAcodeBBcoleCCccoreDD"), 3, "Expected: 3")
                    self.assertEqual(count_code("AAcodeBBcoleCCccorfDD"), 2, "Expected: 2")
                    self.assertEqual(count_code("coAcodeBcoleccoreDD"), 3, "Expected: 3")


            myTests().main()


    .. tab:: Exercise 8

        .. activecode:: q9_8
            :nocodelens:

            Knowing that the function ``lower()`` converts the characters of a string to lowercase. Develop a function called ``end_equals`` that receives two strings ``a`` and ``b`` as parameters. The function will return ``True`` if the string ``b`` is found at the end of string ``a`` or if the string ``a`` is found at the end of string ``b``. |br| |br|
            Examples: |br|
            ``end_equals("Hiabc", "abc")`` -> ``True`` |br|
            ``end_equals("AbC", "HiaBc")`` -> ``True`` |br|
            ``end_equals("abc", "abXabc")`` -> ``True`` |br|

            ~~~~
            def end_equals(a, b):


            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
                    self.assertEqual(end_equals("Hiabc", "abc"), True, "Expected: True")
                    self.assertEqual(end_equals("AbC", "HiaBc"), True, "Expected: True")
                    self.assertEqual(end_equals("abc", "abXabc"), True, "Expected: True")
                    self.assertEqual(end_equals("Hiabc", "abcd"), False, "Expected: False")
                    self.assertEqual(end_equals("Hiabc", "bc"), True, "Expected: True")
                    self.assertEqual(end_equals("Hiabcx", "bc"), False, "Expected: False")
                    self.assertEqual(end_equals("abc", "abc"), True, "Expected: True")
                    self.assertEqual(end_equals("xyz", "12xyz"), True, "Expected: True")
                    self.assertEqual(end_equals("yz", "12xz"), False, "Expected: False")
                    self.assertEqual(end_equals("Z", "12xz"), True, "Expected: True")
                    self.assertEqual(end_equals("12", "12"), True, "Expected: True")
                    self.assertEqual(end_equals("abcXYZ", "abcDEF"), False, "Expected: False")
                    self.assertEqual(end_equals("ab", "ab12"), False, "Expected: False")
                    self.assertEqual(end_equals("ab", "12ab"), True, "Expected: True")


            myTests().main()

    .. tab:: Exercise 9

        .. activecode:: q9_9
            :nocodelens:

            Develop the function ``count_pairs`` that receives a list ``numbers`` of integers and returns the number of even numbers in the list. |br| |br|
            Examples: |br|
            ``count_pairs([2, 1, 2, 3, 4])`` -> ``3`` |br|
            ``count_pairs([2, 2, 0])`` -> ``3`` |br|
            ``count_pairs([1, 3, 5])`` -> ``0`` |br|

            ~~~~
            def count_pairs(numbers):


            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
                    self.assertEqual(count_pairs([2, 1, 2, 3, 4]), 3, "Expected: 3")
                    self.assertEqual(count_pairs([2, 2, 0]), 3, "Expected: 3")
                    self.assertEqual(count_pairs([1, 3, 5]), 0, "Expected: 0")
                    self.assertEqual(count_pairs([]), 0, "Expected: 0")
                    self.assertEqual(count_pairs([11, 9, 0, 1]), 1, "Expected: 1")
                    self.assertEqual(count_pairs([2, 11, 9, 0]), 2, "Expected: 2")
                    self.assertEqual(count_pairs([2]), 1, "Expected: 1")
                    self.assertEqual(count_pairs([2, 5, 12]), 2, "Expected: 2")


            myTests().main()


    
    .. tab:: Exercise 10

        .. activecode :: q9_10
            : nocodelens:

            Develop the function `` suma_con_mas_suerte '' that receives a list `` numbers '' of integers and returns the sum of the numbers in the list with the condition that if one of the numbers is ** 13 ** , this is not counted in the sum as well as all numbers that are to its right. | br | | br |
            Examples: | br |
            `` suma_con_mas_suerte ([1, 2, 2, 1]) '' -> `` 6 '' | br |
            `` suma_con_mas_suerte ([1, 1]) '' -> `` 2 '' | br |
            `` suma_con_mas_suerte ([1, 2, 13, 1, 13]) '' -> `` 3 '' | br |
            `` suma_con_mas_suerte ([13, 1, 2, 3, 4]) '' -> `` 0 '' | br |

            ~~~~
            def suma_con_mas_suerte (numbers):


            ====
            from unittest.gui import TestCaseGui


            class myTests (TestCaseGui):
                def testOne (self):
                    self.assertEqual (suma_con_mas_suerte ([1, 2, 2, 1]), 6, "Expected: 6")
                    self.assertEqual (suma_con_mas_suerte ([1, 1]), 2, "Expected: 2")
                    self.assertEqual (suma_con_mas_suerte ([1, 2, 13, 1, 13]), 6, "Expected: 6")
                    self.assertEqual (suma_con_mas_suerte ([1, 2, 13, 2, 1, 13]), 3, "Expected: 3")
                    self.assertEqual (suma_con_mas_suerte ([13, 1, 2, 13, 2, 1, 13]), 0, "Expected: 0")
                    self.assertEqual (suma_con_mas_suerte ([0, 1, 2, 13, 2, 1, 13]), 3, "Expected: 3")
                    self.assertEqual (suma_con_mas_suerte ([]), 0, "Expected: 0")
                    self.assertEqual (suma_con_mas_suerte ([13]), 0, "Expected: 0")
                    self.assertEqual (suma_con_mas_suerte ([0, 5, 1, 2, 13, 100]), 8, "Expected: 8")
                    self.assertEqual (suma_con_mas_suerte ([13, 13]), 0, "Expected: 0")
                    self.assertEqual (suma_con_mas_suerte ([13, 0, 13]), 0, "Expected: 0")
                    self.assertEqual (suma_con_mas_suerte ([13, 1, 13]), 0, "Expected: 0")
                    self.assertEqual (suma_con_mas_suerte ([5, 7, 2]), 14, "Expected: 14")
                    self.assertEqual (suma_con_mas_suerte ([5, 13, 2]), 5, "Expected: 5")
                    self.assertEqual (suma_con_mas_suerte ([0]), 0, "Expected: 0")
                    self.assertEqual (suma_con_mas_suerte ([13, 0]), 0, "Expected: 0")


            myTests (). main ()



    .. tab:: Exercise 11

        .. activecode:: q9_11
            :nocodelens:

            Develop the function ``tiene_2`` that receives a list ``numeros`` of integers as parameter and returns ``True`` if there are two consecutive equal numbers in the list, and ``False`` otherwise. |br| |br|
            Examples: |br|
            ``tiene_2([1, 2, 2])`` -> ``True`` |br|
            ``tiene_2([1, 2, 1, 2])`` -> ``False`` |br|
            ``tiene_2([2, 1, 2])`` -> ``False`` |br|

            ~~~~
            def tiene_2(numeros):


            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
                    self.assertEqual(tiene_2([1, 2, 2]), True, "Expected: True")
                    self.assertEqual(tiene_2([1, 2, 1, 2]), False, "Expected: False")
                    self.assertEqual(tiene_2([2, 1, 2]), False, "Expected: False")
                    self.assertEqual(tiene_2([2, 2, 1, 2]), True, "Expected: True")
                    self.assertEqual(tiene_2([1, 3, 2]), False, "Expected: False")
                    self.assertEqual(tiene_2([1, 3, 2, 2]), True, "Expected: True")
                    self.assertEqual(tiene_2([2, 3, 2, 2]), True, "Expected: True")
                    self.assertEqual(tiene_2([4, 2, 4, 2, 2, 5]), True, "Expected: True")
                    self.assertEqual(tiene_2([1, 2]), False, "Expected: False")
                    self.assertEqual(tiene_2([2, 2]), True, "Expected: True")
                    self.assertEqual(tiene_2([2]), False, "Expected: False")
                    self.assertEqual(tiene_2([]), False, "Expected: False")
                    self.assertEqual(tiene_2([3, 3, 2, 2]), True, "Expected: True")
                    self.assertEqual(tiene_2([5, 2, 5, 2]), False, "Expected: False")


            myTests().main()


    .. tab:: Exercise 12

        .. activecode:: q9_12
            :nocodelens:

            Develop the function ``suma_en_lista`` that receives two parameters, an integer ``n`` and a list ``numeros`` of numbers. The function should return ``True`` if there are two different elements in the list whose sum is ``n``, and ``False`` otherwise. |br| |br|
            Examples: |br|
            ``suma_en_lista(5, [1, 2, 3, 4])`` -> ``True`` |br|
            ``suma_en_lista(9, [1, 2, 3, 4])`` -> ``False`` |br|
            ``suma_en_lista(0, [1, 2, 3, 4])`` -> ``False`` |br|
            ``suma_en_lista(8, [1, 2, 3, 4])`` -> ``False`` |br|
            ``suma_en_lista(4, [2, 2, 2, 2])`` -> ``False`` |br|
            ``suma_en_lista(4, [2, 2, 1, 3])`` -> ``True`` |br|

            ~~~~
            def suma_en_lista(n, numeros):


            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
                    self.assertEqual(suma_en_lista(5, [1, 2, 3, 4]), True, "Expected: True")
                    self.assertEqual(suma_en_lista(9, [1, 2, 3, 4]), False, "Expected: False")
                    self.assertEqual(suma_en_lista(0, [1, 2, 3, 4]), False, "Expected: False")
                    self.assertEqual(suma_en_lista(8, [1, 2, 3, 4]), False, "Expected: False")
                    self.assertEqual(suma_en_lista(4, [2, 2, 2, 2]), False, "Expected: False")
                    self.assertEqual(suma_en_lista(4, [2, 2, 1, 3]), True, "Expected: True")
                    self.assertEqual(suma_en_lista(42, [40, 2, 3, 39]), True, "Expected: True")
                    self.assertEqual(suma_en_lista(10, [5, 5, 4, 6]), True, "Expected: True")
                    self.assertEqual(suma_en_lista(8, [5, 5, 4, 4]), False, "Expected: False")


            myTests().main()


    .. tab:: Exercise 13

        .. activecode:: q9_13
            :nocodelens:
            
            In a construction it is desired to build a row of bricks. There are small bricks and large bricks. Small bricks are 1 unit in length while large bricks are 5 units in length. Develop the function ``build_row`` which receives three parameters, ``num_small_bricks``, ``num_large_bricks``, and ``row_length``. These parameters are integer numbers that represent the quantity of small bricks, quantity of large bricks, and the length of the row you want to build, respectively. The function must return ``True`` if it is possible to build the row, or ``False`` otherwise. |br| |br|
            Examples: |br|
            ``build_row(3, 1, 8)`` -> ``True`` |br|
            *Explanation*: To build a length of 8 meters, 1 large brick and 3 small bricks would be used. |br|
            *Therefore*: 1 + 1 + 1 + 5 = 8 |br|

            ``build_row(3, 1, 9)`` -> ``False`` |br|
            *Explanation*: To build a length of 9 meters it wouldn't be possible because there are only 3 small bricks (1 meter in length) and 1 large brick (5 meters in length). |br|
            *Therefore*: 1 + 1 + 1 + 5 < 9 in this case 1 large brick and 4 small bricks would be needed. |br|

            ``build_row(3, 2, 10)`` -> ``True`` |br|
            *Explanation*: To fill a length of 10 meters, only the 2 available large bricks would be used. |br|
            *Therefore*: 5 + 5 = 10 |br|

            ~~~~
            def build_row(num_small_bricks, num_large_bricks, row_length):


            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
                    self.assertEqual(build_row(3, 1, 8), True, "Expected: True")
                    self.assertEqual(build_row(3, 1, 9), False, "Expected: False")
                    self.assertEqual(build_row(3, 2, 10), True, "Expected: True")
                    self.assertEqual(build_row(3, 2, 8), True, "Expected: True")
                    self.assertEqual(build_row(3, 2, 9), False, "Expected: False")
                    self.assertEqual(build_row(6, 1, 11), True, "Expected: True")
                    self.assertEqual(build_row(6, 0, 11), False, "Expected: False")
                    self.assertEqual(build_row(3, 1, 7), True, "Expected: True")
                    self.assertEqual(build_row(1, 1, 7), False, "Expected: False")
                    self.assertEqual(build_row(2, 1, 7), True, "Expected: True")
                    self.assertEqual(build_row(7, 1, 11), True, "Expected: True")
                    self.assertEqual(build_row(7, 1, 8), True, "Expected: True")
                    self.assertEqual(build_row(7, 1, 13), False, "Expected: False")
                    self.assertEqual(build_row(43, 1, 46), True, "Expected: True")
                    self.assertEqual(build_row(40, 1, 46), False, "Expected: False")
                    self.assertEqual(build_row(22, 2, 33), False, "Expected: False")
                    self.assertEqual(build_row(0, 2, 10), True, "Expected: True")
                    self.assertEqual(build_row(1000000, 1000, 1000100), True, "Expected: True")
                    self.assertEqual(build_row(2, 1000000, 100003), False, "Expected: False")
                    self.assertEqual(build_row(12, 2, 21), True, "Expected: True")


            myTests().main()