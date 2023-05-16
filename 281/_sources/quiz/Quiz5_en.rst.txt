========
Quiz - 5
========

.. |br| raw:: html

   <br />


.. tabbed:: quiz5_1

    .. tab:: Exercise 1_1

        ..  clickablearea:: q5_1
            :question: The following program declares a variable in the wrong place in the code. Your task is to select the incorrect declaration and select the correct line where it should go. 
            :iscode:
            :feedback: Remember, you cannot use a variable without declaring it previously.

            :click-incorrect:x = 2:endclick:
            :click-correct:     :endclick:
            :click-incorrect:if y > 8 then::endclick:
                :click-correct:y = 5:endclick:
                :click-incorrect:y = y * 2:endclick:

            :click-incorrect:else::endclick:
                :click-incorrect:x = x * 2:endclick:
                :click-incorrect:print(x + y)::endclick:


    .. tab:: Exercise 1_2

        ..  activecode:: q5_2
            :nocodelens:

            Translate the previous program (with the declaration in the right place) to Python using the following code block. |br|
            ~~~~

            ====


    .. tab:: Exercise 1_3

        ..  fillintheblank:: q5_3

            What does the previous program print?

            -   :9: Your answer is correct, good job!
                :.*: Your answer is incorrect, please try again.


.. tabbed:: quiz5_2

    .. tab:: Exercise 2_1
    
        ..  code-block:: none

            for i = 1 to 9:
                if i != 3 then:
                    for j = 1 to 6:
                        print("Hello")

    
    .. tab:: Exercise 2_2

        ..  activecode:: q5_4
            :nocodelens:

            Translate the previous program to Python using the following code block. |br|
            **Note**: in our pseudolanguage, the loop includes the endpoints, that is, 1 to 4 means 1, 2, 3, 4. |br|
            ~~~~

            ====


    .. tab:: Exercise 2_3

        ..  fillintheblank:: q5_5

            How many times does the previous program print ``"Hello"``?

            -   :48: Your answer is correct, good job!
                :.*: Your answer is incorrect, please try again.


.. tabbed:: quiz5_3

    .. tab:: Exercise 3_1

        ..  activecode:: q5_6
            :nocodelens:
            
            Develop the function ``pares_divisibles_7`` which receives two positive integers, ``inicio`` and ``fin``, that represent the start and end of a range of numbers. The function must return the amount of numbers that are even and also divisible by 7. |br| |br|
            Examples: |br|
            ``pares_divisibles_7(1, 7)`` -> ``0`` |br|
            ``pares_divisibles_7(25, 123)`` -> ``7`` |br|
            ``pares_divisibles_7(13, 245)`` -> ``17`` |br|
            
            ~~~~
            def pares_divisibles_7(inicio, fin):

                

            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
                    self.assertEqual(pares_divisibles_7(1, 7), 0, "Expected: 0")
                    self.assertEqual(pares_divisibles_7(25, 123), 7, "Expected: 7")
                    self.assertEqual(pares_divisibles_7(13, 245), 17, "Expected: 17")
                    self.assertEqual(pares_divisibles_7(1300, 2460), 83, "Expected: 83")
                    self.assertEqual(pares_divisibles_7(1, 2460), 175, "Expected: 175")


            myTests().main()


    .. tab:: Exercise 3_2

        ..  fillintheblank:: q5_7

            Use the function created in the previous exercise to answer How many numbers are even and also divisible by 7 between 1067 and 3627 (inclusive)?

            -   :183: Your answer is correct, good job!
                :.*: Your answer is incorrect, try again.


.. tabbed:: quiz5_4

    .. tab:: Exercise 4_1

        ..  activecode:: q5_8
            :nocodelens:

            Daniela is a very superstitious person. For her, a number is **lucky** if it contains the digit ``2`` but not the ``7``. She is also very curious and wants to know how many **lucky** numbers are in a range of numbers (including the ends)?. That's why she has asked you to make the function called ``cuantos_tienen_suerte`` which receives two positive integers, ``inicio`` and ``fin``, that represent the start and end of a range of numbers. The function must return the amount of numbers that are **lucky**. |br| |br|
            Examples: |br|
            ``cuantos_tienen_suerte(1, 7)`` -> ``1`` |br|
            ``cuantos_tienen_suerte(1, 20)`` -> ``3`` |br|
            ``cuantos_tienen_suerte(25, 123)`` -> ``16`` |br|
            ``cuantos_tienen_suerte(13, 245)`` -> ``74`` |br|
            
            ~~~~
            def cuantos_tienen_suerte(inicio, fin):

                

            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
                    self.assertEqual(cuantos_tienen_suerte(1, 1), 0, "Expected: 0")
                    self.assertEqual(cuantos_tienen_suerte(1, 7), 1, "Expected: 1")
                    self.assertEqual(cuantos_tienen_suerte(1, 20), 3, "Expected: 3")
                    self.assertEqual(cuantos_tienen_suerte(25, 123), 16, "Expected: 16")
                    self.assertEqual(cuantos_tienen_suerte(1300, 2460), 481, "Expected: 481")
                    self.assertEqual(cuantos_tienen_suerte(13, 245), 74, "Expected: 74")


            myTests().main()


    .. tab:: Exercise 4_2

        ..  fillintheblank:: q5_9

            Use the function created in the previous exercise (**MANDATORY** to have finished it before and passed all tests) to answer How many **lucky** numbers are there between 18644 and 33087 (inclusive)?

            -   :7995: Your answer is correct, good job!
                :.*: Your answer is incorrect, try again.


.. tabbed:: quiz5_5

    .. tab:: Exercise 5_1

        .. activecode :: q5_10
            : nocodelens:

            In the quiet rural village of *Ponteironuloville*, all phones have 6 digits. The telephone company establishes the following rules about numbers: | br |

            1. There cannot be two identical consecutive digits, because this is boring
            2. The sum of the digits must be even, because this is legal
            3. The last digit cannot be the same as the first, because that is bad luck.

            Then, given these perfectly reasonable, well-designed and mature rules, develop the function called ``es_numero_ponteironuloville`` that receives a string of positive integers and returns ``True`` if the number is valid according to the rules of *Ponteironuloville* and ``False`` otherwise.
            | br | | br |

            Examples: | br |
            ``es_numero_ponteironuloville("123457")`` -> ``True`` | br |
            ``es_numero_ponteironuloville("234562")`` -> ``False`` | br |
            ``es_numero_ponteironuloville("222222")`` -> ``False`` | br |
            ``es_numero_ponteironuloville("123456")`` -> ``False`` | br |
            ``es_numero_ponteironuloville("312214")`` -> ``False`` | br |
            ``es_numero_ponteironuloville("312312")`` -> ``True`` | br |

            ~~~~
            def es_numero_ponteironuloville(numero):



            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
                    self.assertEqual(es_numero_ponteironuloville("123457"), True, "Expected: True")
                    self.assertEqual(es_numero_ponteironuloville("234562"), False, "Expected: False")
                    self.assertEqual(es_numero_ponteironuloville("304706"), True, "Expected: True")
                    self.assertEqual(es_numero_ponteironuloville("222222"), False, "Expected: False")
                    self.assertEqual(es_numero_ponteironuloville("123456"), False, "Expected: False")
                    self.assertEqual(es_numero_ponteironuloville("312214"), False, "Expected: False")
                    self.assertEqual(es_numero_ponteironuloville("312312"), True, "Expected: True")
                    self.assertEqual(es_numero_ponteironuloville("131313"), True, "Expected: True")
                    self.assertEqual(es_numero_ponteironuloville("249184"), True, "Expected: True")
                    self.assertEqual(es_numero_ponteironuloville("012445"), False, "Expected: False")


            myTests().main()

    
    .. tab:: Exercise 5_2

        ..  activecode:: q5_11
            :nocodelens:
            :include: q5_10

            Knowing that the ``split()`` function divides a string into multiple strings, use the function created in the previous exercise (**MANDATORY** to have finished it before and passed all tests) to complete the ``count_valid`` function that returns the number of valid numbers from the list of numbers given in the following block of code. |br| |br|
            **Note**: the list of numbers is a string, wisely use the ``split()`` function to obtain a list of strings.
            ~~~~
            numbers_list = """236043 237330 239636 240138 242123 246224 249183 252936
                254711 257200 257607 261424 263814 266794 268649 273050
                275001 277606 278997 283331 287104 287953 289137 291591
                292559 292946 295180 295566 297529 300400 304707 306931
                310638 313595 318449 319021 322082 323796 326266 326880
                327249 329914 334392 334575 336723 336734 338808 343269
                346040 350113 353631 357154 361633 361891 364889 365746
                365749 366426 369156 369444 369689 372896 374983 375223
                379163 380712 385640 386777 388599 389450 390178 392943
                394742 395921 398644 398832 401149 402219 405364 408088
                412901 417683 422267 424767 426613 430474 433910 435054
                440052 444630 447852 449116 453865 457631 461750 462985
                463328 466458 469601 473108 476773 477956 481991 482422
                486195 488359 489209 489388 491928 496569 496964 497901
                500877 502386 502715 507617 512526 512827 513796 518232
                521455 524277 528496 529345 531231 531766 535067 535183
                536593 537360 539055 540582 543708 547492 550779 551595
                556493 558807 559102 562050 564962 569677 570945 575447
                579937 580112 580680 582458 583012 585395 586244 587393
                590483 593112 593894 594293 597525 598184 600455 600953
                601523 605761 608618 609198 610141 610536 612636 615233
                618314 622752 626345 626632 628889 629457 629643 633673
                637656 641136 644176 644973 647617 652218 657143 659902
                662224 666265 668010 672480 672695 676868 677125 678315"""

            def count_valid():
                count = 0
                """
                    Write your code here, using the created variable
                """
                return count
            ====


    .. tab:: Exercise 5_3

        ..  fillintheblank:: q5_12

            Use the function created in the previous exercise to answer how many numbers from the list are valid according to the rules of *Ponteironuloville*?

            -   :39: Your answer is correct, good job!
                :.*: Your answer is incorrect, try again.