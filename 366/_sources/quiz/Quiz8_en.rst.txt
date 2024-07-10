=========
Quiz - 8
=========

.. |br| raw:: html

   <br />


.. tabbed:: quiz8

   .. tab:: Exercise 1

      .. activecode:: q8_1_en
         :nocodelens:
      
         Define a function ``first_or_last_6`` that checks whether 6 is the first 
         or the last element in the list of numbers ``numbers`` passed as a parameter. 
         If it is, return ``True``, otherwise return ``False``. |br| |br|
         Examples: |br|
         ``first_or_last_6([1, 2, 6])`` -> ``True`` |br|
         ``first_or_last_6([6, 1, 2, 3])`` -> ``True`` |br|
         ``first_or_last_6([3, 2, 1])`` -> ``False`` |br|
      
         ~~~~
         def first_or_last_6(numbers):
      
      
         ====
         from unittest.gui import TestCaseGui
 
 
         class myTests(TestCaseGui):
             def testOne(self):
                 self.assertEqual(first_or_last_6([1, 2, 6]), True, "Expected: True")
                 self.assertEqual(first_or_last_6([3, 6]), True, "Expected: True")
                 self.assertEqual(first_or_last_6([3, 6]), True, "Expected: True")
                 self.assertEqual(first_or_last_6([3]), False, "Expected: False")
                 self.assertEqual(first_or_last_6([6, 1, 2, 3]), True, "Expected: True")
                 self.assertEqual(first_or_last_6([3, 2, 1]), False, "Expected: False")
                 self.assertEqual(first_or_last_6([3, 6, 1]), False, "Expected: False")
 
 
         myTests().main()
 

   .. tab:: Exercise 2

      .. activecode:: q8_2_en
         :nocodelens:
      
         Define a function ``same_ends`` that takes a list ``numbers`` as a parameter, 
         and returns ``True`` if the list of numbers has at least one element and the 
         first element is the same as the last. Otherwise, return ``False``. |br| |br|
         Examples: |br|
         ``same_ends([1, 2, 3])`` -> ``False`` |br|
         ``same_ends([1, 2, 3, 1])`` -> ``True`` |br|
         ``same_ends([1, 2, 1])`` -> ``True`` |br|
      
         ~~~~
         def same_ends(numbers):
      
      
         ====
         from unittest.gui import TestCaseGui
      
      
         class myTests(TestCaseGui):
         
             def testOne(self):
                 self.assertEqual(same_ends([1, 2, 3]), False, "Expected: False")
                 self.assertEqual(same_ends([1, 2, 1]), True, "Expected: True")
                 self.assertEqual(same_ends([7]), True, "Expected: True")
                 self.assertEqual(same_ends([]), False, "Expected: False")
                 self.assertEqual(same_ends([7, 7]), True, "Expected: True")
                 self.assertEqual(
                         same_ends([1, 2, 3, 1]),
                         True,
                         "Expected: True")
         
         
         myTests().main()
      

   .. tab:: Exercise 3

      .. activecode:: q8_3_en
         :nocodelens:
      
         Define a function ``common_ends`` that takes two lists ``a`` and ``b`` 
         as parameters, and checks that the first two numbers of both lists are equal 
         or that the last two numbers of both lists are equal. Assume both lists have 
         at least one element. |br| |br|
         Examples: |br|
         ``common_ends([1, 2, 3], [7, 3])`` -> ``True`` |br|
         ``common_ends([1, 2, 3], [7, 3, 2])`` -> ``False`` |br|
         ``common_ends([1, 2, 3], [1, 3])`` -> ``True`` |br|
      
         ~~~~
         def common_ends(a, b):
      
      
         ====
         from unittest.gui import TestCaseGui
      
      
         class myTests(TestCaseGui):
         
             def testOne(self):
                 self.assertEqual(common_ends([1, 2, 3], [1]), True, "Expected: True")
                 self.assertEqual(
                         common_ends([1, 2, 3], [2]),
                         False,
                         "Expected: False"
                 )
                 self.assertEqual(
                         common_ends([1, 2, 3], [7, 3]),
                         True,
                         "Expected: True"
                 )
                 self.assertEqual(
                         common_ends([1, 2, 3], [7, 3, 2]),
                         False,
                         "Expected: False"
                 )
                 self.assertEqual(
                         common_ends([1, 2, 3], [1, 3]),
                         True,
                         "Expected: True"
                 )
         
         
         myTests().main()


   .. tab:: Exercise 4

      .. activecode:: q8_4_en
         :nocodelens:

         Define a function called ``mayor_extremo`` that takes the list "numeros" as parameter, compares the ends of the list and returns a new list of the same size where all elements are the greatest magnitude extreme. |br| |br|
         Examples: |br|
         ``mayor_extremo([1, 2, 3])`` -> ``[3, 3, 3]`` |br|
         ``mayor_extremo([1, 3, 2])`` -> ``[2, 2, 2]`` |br|

         ~~~~
         def mayor_extremo(numeros):

                
         ====
         from unittest.gui import TestCaseGui


         class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(
                        mayor_extremo([1, 2, 3]),
                        [3, 3, 3],
                        "Expected: [3,3,3]"
                )
                self.assertEqual(
                        mayor_extremo([11, 5, 9]),
                        [11, 11, 11],
                        "Expected: [11,11,11]"
                )
                self.assertEqual(
                        mayor_extremo([2, 11, 3]),
                        [3, 3, 3],
                        "Expected: [3,3,3]"
                )
                self.assertEqual(
                        mayor_extremo([11, 3, 3]),
                        [11, 11, 11],
                        "Expected: [11,11,11]"
                )
                self.assertEqual(
                        mayor_extremo([3, 11, 11]),
                        [11, 11, 11],
                        "Expected: [11,11,11]"
                )
                self.assertEqual(
                        mayor_extremo([2, 2, 2]),
                        [2, 2, 2],
                        "Expected: [2,2,2]"
                )
                self.assertEqual(
                        mayor_extremo([2, 11, 2]),
                        [2, 2, 2],
                        "Expected: [2,2,2]"
                )
                self.assertEqual(
                        mayor_extremo([0, 0, 1]),
                        [1, 1, 1],
                        "Expected: [1,1,1]"
                )


         myTests().main()


   .. tab:: Exercise 5

      .. activecode:: q8_5_en
         :nocodelens:

         Define a function called ``sumar_primeros_dos`` that takes the integer list ``numeros`` of any length as parameter and returns the sum of the first two elements. If the list has less than two elements, add 0s. |br| |br|
         Examples: |br|
         ``sumar_primeros_dos([1, 2, 3])`` -> ``3`` |br|
         ``sumar_primeros_dos([1, 1])`` -> ``2`` |br|
         ``sumar_primeros_dos([])`` -> ``0`` |br|

         ~~~~
         def sumar_primeros_dos(numeros):

                
         ====
         from unittest.gui import TestCaseGui


         class myTests(TestCaseGui):
            def testOne(self):
                self.assertEqual(sumar_primeros_dos([1, 2, 3]), 3, "Expected: 3")
                self.assertEqual(sumar_primeros_dos([1, 1]), 2, "Expected: 2")
                self.assertEqual(sumar_primeros_dos([1, 1, 1, 1]), 2, "Expected: 2")
                self.assertEqual(sumar_primeros_dos([1, 2]), 3, "Expected: 3")
                self.assertEqual(sumar_primeros_dos([1]), 1, "Expected: 1")
                self.assertEqual(sumar_primeros_dos([]), 0, "Expected: 0")
                self.assertEqual(sumar_primeros_dos([4, 5, 6]), 9, "Expected: 9")
                self.assertEqual(sumar_primeros_dos([4]), 4, "Expected: 4")
                self.assertEqual(sumar_primeros_dos([4, -12, 5]), -8, "Expected: -8")
                self.assertEqual(
                        sumar_primeros_dos([-200, 35, 10, 8]),
                        -165,
                        "Expected: -165"
                )


         myTests().main()


   .. tab:: Exercise 6

      .. activecode:: q8_6_en
         :nocodelens:

         Define a function called ``al_medio`` that takes two integer lists ``a`` and ``b`` as parameters, and returns a list of size 2 that contains the middle elements of ``a`` and ``b``. Assume that the lists have an odd length. |br| |br|
         Examples: |br|
         ``al_medio([1, 2, 3], [4, 5, 6])`` -> ``[2, 5]`` |br|
         ``al_medio([7, 7, 7], [3, 8, 0])`` -> ``[7, 8]`` |br|
         ``al_medio([5, 2, 9], [1, 4, 5])`` -> ``[2, 4]`` |br|

         ~~~~
         def al_medio(a, b):

                
         ====
         from unittest.gui import TestCaseGui


         class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(
                        al_medio([1, 2, 3], [4, 5, 6]),
                        [2, 5],
                        "Expected: [2,5]"
                )
                self.assertEqual(
                        al_medio([7, 7, 7], [3, 8, 0]),
                        [7, 8],
                        "Expected: [7,8]"
                )
                self.assertEqual(
                        al_medio([5, 2, 9], [1, 4, 5]),
                        [2, 4],
                        "Expected: [2,4]"
                )
                self.assertEqual(
                        al_medio([1, 9, 7], [4, 8, 8]),
                [9, 8],
                        "Expected: [9,8]"
                )
                self.assertEqual(
                        al_medio([1, 2, 3, 10, 2], [3, 1, 4]),
                        [3, 1],
                        "Expected: [2,1]"
                )
                self.assertEqual(
                        al_medio([1, 2, -2, 4, 1], [1]),
                        [-2, 1],
                        "Expected: [2,1]"
                )


         myTests().main()
        
   .. tab:: Exercise 7

      .. activecode:: q8_7_en
         :nocodelens:

         Define a function ``fancy_date``. The function will take two parameters, 
         ``my_score`` and ``partner_score``. Assume that you are going to a 
         restaurant with your partner. The parameters represent the score of the clothes 
         you are wearing from 0 to 10. The higher the score, the more elegant you are dressed. 
         Your clothes score will determine if you get a table at the restaurant or not, according to the following rules: |br|

         - If the score of one of the two clothing is less than or equal to 2, 
           they will not be entitled to a table (``0``). |br|
         - If the scores are higher, then if one of them is very 
           elegant (score >= 8) they will be entitled to a table (``2``). |br|
         - Otherwise, the answer is maybe (``1``). |br|
        
        
         So ``fancy_date`` returns a number between 0, 1, and 2, which mean No, Maybe, and Yes, respectively. |br| |br|
         Examples: |br|   
         ``fancy_date(5, 10)`` -> ``2`` |br|
         ``fancy_date(5, 2)`` -> ``0`` |br|
         ``fancy_date(5, 5)`` -> ``1`` |br|

         ~~~~
         def fancy_date(my_score, partner_score):

        
         ====
         from unittest.gui import TestCaseGui


         class myTests(TestCaseGui):
        
            def testOne(self):
                self.assertEqual(fancy_date(5, 10), 2, "Expected: 2")
                self.assertEqual(fancy_date(5, 2), 0, "Expected: 0")
                self.assertEqual(fancy_date(5, 5), 1, "Expected: 1")
                self.assertEqual(fancy_date(3, 3), 1, "Expected: 1")
                self.assertEqual(fancy_date(10, 2), 0, "Expected: 0")
                self.assertEqual(fancy_date(2, 9), 0, "Expected: 0")
                self.assertEqual(fancy_date(9, 9), 2, "Expected: 2")
                self.assertEqual(fancy_date(10, 5), 2, "Expected: 2")
                self.assertEqual(fancy_date(2, 2), 0, "Expected: 0")
                self.assertEqual(fancy_date(3, 7), 1, "Expected: 1")
                self.assertEqual(fancy_date(2, 7), 0, "Expected: 0")
                self.assertEqual(fancy_date(6, 2), 0, "Expected: 0")
        
        
         myTests().main()

   .. tab:: Exercise 8

      .. activecode:: q8_8_en
         :nocodelens:
      
         The *squirrels* soccer team normally plays when the temperature is 
         between 60 and 90 degrees Fahrenheit. But in summer, the temperature exceeds 
         the maximum temperature they will play, which is 90 degrees Fahrenheit. 
         Define a function ``squirrel_play`` that takes 2 parameters, ``temp`` representing 
         the temperature, and ``is_summer``, which can be ``True`` if it's summer or ``False`` 
         if not. The function should return ``True`` if the *squirrels* play or ``False`` if they don't. |br| |br|
         Examples: |br|
         ``squirrel_play(70, False)`` -> ``True`` |br|
         ``squirrel_play(95, False)`` -> ``False``  |br|
         ``squirrel_play(95, True)`` -> ``True`` |br|

         ~~~~
         def squirrel_play(temp, is_summer):
       
      
         ====
         from unittest.gui import TestCaseGui
      
      
         class myTests(TestCaseGui):
         
             def testOne(self):
                 self.assertEqual(squirrel_play(70, False), True, "Expected: True")
                 self.assertEqual(squirrel_play(95, False), False, "Expected: False")
                 self.assertEqual(squirrel_play(95, True), True, "Expected: True")
                 self.assertEqual(squirrel_play(90, False), True, "Expected: True")
                 self.assertEqual(squirrel_play(90, True), True, "Expected: True")
                 self.assertEqual(squirrel_play(50, False), False, "Expected: False")
                 self.assertEqual(squirrel_play(50, True), False, "Expected: True")
                 self.assertEqual(squirrel_play(100, False), False, "Expected: False")
                 self.assertEqual(squirrel_play(100, True), True, "Expected: True")
                 self.assertEqual(squirrel_play(105, True), False, "Expected: True")
                 self.assertEqual(squirrel_play(59, False), False, "Expected: False")
                 self.assertEqual(squirrel_play(59, True), False, "Expected: True")
                 self.assertEqual(squirrel_play(60, False), True, "Expected: False")
         
         
         myTests().main()


   .. tab:: Exercise 9

      .. activecode:: q8_9_en
         :nocodelens:
        
         Let's simulate a speedometer that applies a fine if the maximum speed is exceeded:
        
         - Speed <= 60: no fine |br|
         - Speed between 61 and 80: medium fine |br|
         - Speed above 80: severe fine |br|
        
         If it's your birthday, the speed can be 5 km/h higher in all cases. |br|
         Define a function ``apply_fine`` that takes the parameters ``speed`` and 
         ``birthday``. The first represents the speed you were going, and the second 
         can be ``True`` if it's your birthday or ``False`` if it's not. This function should 
         return 0, 1 or 2 according to the following: |br|
        
         - no fine = 0 |br|
         - medium fine = 1 |br|
         - severe fine = 2 |br| |br|
        
         Examples: |br|
         ``apply_fine(60, False)`` -> ``0`` |br|
         ``apply_fine(65, False)`` -> ``1`` |br|
         ``apply_fine(65, True)`` -> ``0``  |br|
         ``apply_fine(80, False)`` -> ``1`` |br|
        
         ~~~~
         def apply_fine(speed, birthday):
        
                
         ====
         from unittest.gui import TestCaseGui
        
        
         class myTests(TestCaseGui):
        
            def testOne(self):
                self.assertEqual(apply_fine(20, False), 0, "Expected: 0")
                self.assertEqual(apply_fine(20, True), 0, "Expected: 0")
                self.assertEqual(apply_fine(60, False), 0, "Expected: 0")
                self.assertEqual(apply_fine(65, False), 1, "Expected: 1")
                self.assertEqual(apply_fine(65, True), 0, "Expected: 0")
                self.assertEqual(apply_fine(80, False), 1, "Expected: 1")
                self.assertEqual(apply_fine(85, False), 2, "Expected: 2")
                self.assertEqual(apply_fine(85, True), 1, "Expected: 1")
                self.assertEqual(apply_fine(70, False), 1, "Expected: 1")
                self.assertEqual(apply_fine(75, False), 1, "Expected: 1")
                self.assertEqual(apply_fine(75, True), 1, "Expected: 1")
                self.assertEqual(apply_fine(40, False), 0, "Expected: 0")
                self.assertEqual(apply_fine(40, True), 0, "Expected: 0")
                self.assertEqual(apply_fine(90, False), 2, "Expected: 2")
                self.assertEqual(apply_fine(90, True), 2, "Expected: 2")
        
        
         myTests().main()


   .. tab:: Exercise 10

      .. activecode:: q8_10_en
        :nocodelens:
                
        Define a function ``set_alarm`` that takes two parameters: The first parameter 
        ``day`` is a number from 0-6 that represents a day of the week according to the following: |br|
        day: 0 = Sunday, 1 = Monday, 2 = Tuesday, ..., 6 = Saturday. |br|
        The second parameter ``vacation`` will be set to ``True`` if you're on vacation or 
        ``False`` if you're not. The function will return a string that indicates when 
        the alarm clock will ring according to the following: |br|
        
        - Weekdays: '07:00' |br|
        - Weekends: '10:00' |br|
        
        Unless you're on vacation, in which case: |br|
        
        - Weekdays: '10:00' |br|
        - Weekends: 'off' |br| |br|
        
        Examples: |br|
        ``set_alarm(1, False)`` -> ``"7:00"`` |br|
        ``set_alarm(1, True)`` -> ``"10:00"`` |br|
        ``set_alarm(6, True)`` -> ``"off"`` |br|
        ``set_alarm(0, False)`` -> ``"10:00"`` |br|
        
        ~~~~
        def set_alarm(day, vacation):
        
                
        ====
        from unittest.gui import TestCaseGui
        
        
        class myTests(TestCaseGui):
                def testOne(self):
                self.assertEqual(set_alarm(1, False), "7:00", "Expected: 7:00")
                self.assertEqual(set_alarm(5, False), "7:00", "Expected: 7:00")
                self.assertEqual(set_alarm(0, False), "10:00", "Expected: 10:00")
                self.assertEqual(set_alarm(6, False), "10:00", "Expected: 10:00")
                self.assertEqual(set_alarm(0, True), "off", "Expected: off")
                self.assertEqual(set_alarm(6, True), "off", "Expected: off")
                self.assertEqual(set_alarm(1, True), "10:00", "Expected: 10:00")
                self.assertEqual(set_alarm(3, True), "10:00", "Expected: 10:00")
                self.assertEqual(set_alarm(5, True), "10:00", "Expected: 10:00")
        
        
        myTests().main()