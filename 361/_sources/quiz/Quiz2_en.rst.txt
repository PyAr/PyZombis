=========
Quiz - 2
=========

.. |br| raw:: html

    <br />


.. tabbed:: quiz2

    .. tab:: Exercise 1

        .. activecode:: q2_1_en
            :nocodelens:

            Develop the function ``is_triangle`` that receives three positive integers ``a``, ``b``, and ``c``. They represent the sides of a triangle. The function should verify that a triangle is formed with the given parameters. If the given parameters form a triangle, the function should return a string indicating its type, i.e., ``"Equilateral"``, ``"Isosceles"``, or ``"Escaleno"``, otherwise, the function should return the string, ``"Is not triangle"``.|br|
            **Note**: remember that it is not a triangle when the longest side is greater than or equal to the sum of the other two. |br| |br|
            Examples: |br|
            ``is_triangle(2, 2, 2)`` -> ``"Equilateral"`` |br|
            ``is_triangle(3, 2, 2)`` -> ``"Isosceles"`` |br|
            ``is_triangle(4, 2, 6)`` -> ``"Is not triangle"`` |br|
            ``is_triangle(2, 1, 8)`` -> ``"Is not triangle"`` |br|
            ~~~~
            def is_triangle(a, b, c):


            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(is_triangle(2, 2, 2), "Equilateral", "Expected: Equilateral")
                    self.assertEqual(is_triangle(2, 1, 2), "Isosceles", "Expected: Isosceles")
                    self.assertEqual(is_triangle(2, 1, 3), "Is not triangle", "Expected: Is not triangle")
                    self.assertEqual(is_triangle(2, 1, 8), "Is not triangle", "Expected: Is not triangle")
                    self.assertEqual(is_triangle(4, 2, 1), "Is not triangle", "Expected: Is not triangle")
                    self.assertEqual(is_triangle(4, 1000, 1000), "Isosceles", "Expected: Isosceles")
                    self.assertEqual(is_triangle(10000, 10000, 10000), "Equilateral", "Expected: Equilateral")
                    self.assertEqual(is_triangle(3, 2, 2), "Isosceles", "Expected: Isosceles")
                    self.assertEqual(is_triangle(10000, 1, 9999), "Is not triangle", "Expected: Is not triangle")


            myTests().main()


    .. tab:: Exercise 2

        .. activecode:: q2_2_en
            :nocodelens:

            Develop the function ``is_leap`` that receives the parameter ``year`` which is a positive integer greater than zero and represents a year. The function should verify if the given parameter is a leap year, therefore, it should return ``True`` if it is, or ``False`` otherwise. A year is a leap year if it is divisible by 400, or also if it is divisible by 4 but not divisible by 100. |br| |br|
            Examples: |br|
            ``is_leap(2014)`` -> ``False`` |br|
            ``is_leap(2016)`` -> ``True`` |br|
            ``is_leap(1900)`` -> ``False`` |br|
            ``is_leap(2000)`` -> ``True`` |br|
            ~~~~
            def is_leap(year):


            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(is_leap(2000), True, "Expected: True")
                    self.assertEqual(is_leap(2001), False, "Expected: False")
                    self.assertEqual(is_leap(2020), True, "Expected: True")
                    self.assertEqual(is_leap(2016), True, "Expected: True")
                    self.assertEqual(is_leap(2400), True, "Expected: True")
                    self.assertEqual(is_leap(1952), True, "Expected: True")
                    self.assertEqual(is_leap(1900), False, "Expected: False")
                    self.assertEqual(is_leap(2200), False, "Expected: False")
                    self.assertEqual(is_leap(2100), False, "Expected: False")


            myTests().main()
            

    .. tab:: Exercise 3

        .. activecode:: q2_3_en
            :nocodelens:

            Juan Pablo the fisherman, is a good man who works every day of the week. At the end of each work day, Juan must report to the state. Every time he brings a weight of fish greater than established by fishing regulations (50 kilograms) he must pay a fine of 4.00 units per additional kilogram. To keep track, he bought a computer to monitor his work income and asked you to make the function called `generate_report` that receives a list of positive floats `weights`, which represent the amount that Juan fished each day of the week. The function should return an array of tuples, where each tuple should be a pair of the form `(additional, fine)`, which represent the amount of additional kilograms that Juan fished during a day and the fine he had to pay respectively. If he did not pay a fine, the result will be `0.0` in both cases. |br| |br|
            Examples: |br|
            ``generate_report([25.5, 50.5, 60.25, 15, 100, 50, 30.50])`` -> ``[(0.0, 0.0), (0.5, 2.0), (10.25, 41.0), (0.0, 0.0), (50.0, 200.0), (0.0, 0.0), (0.0, 0.0)]``
            ~~~~
            def generate_report(weights):


            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(
                        generate_report([25.5, 50.5, 60.25, 15.0, 100.0, 50.0, 30.50]),
                        [(0.0, 0.0), (0.5, 2.0), (10.25, 41.0), (0.0, 0.0), (50.0, 200.0), (0.0, 0.0), (0.0, 0.0)],
                        "Expected: [(0.0, 0.0), (0.5, 2.0), (10.25, 41.0), (0.0, 0.0), (50.0, 200.0), (0.0, 0.0), (0.0, 0.0)]",
                    )
                    self.assertEqual(
                        generate_report([5.55, 50.0, 10.25, 15.0, 0.0, 50.0, 51.0]),
                        [(0.0, 0.0), (0.0, 0.0), (0.0, 0.0), (0.0, 0.0), (0.0, 0.0), (0.0, 0.0), (1.0, 4.0)],
                        "Expected: [(0.0, 0.0), (0.0, 0.0), (0.0, 0.0), (0.0, 0.0), (0.0, 0.0), (0.0, 0.0), (1.0, 4.0)]",
                    )


            myTests().main()


    .. tab:: Exercise 4

        .. activecode:: q2_4_en
            :nocodelens:

            Develop the function ``mayor_tres`` that receives three integers ``a``, ``b`` and ``c``. The function must return the highest of the three numbers, without using the functions ``max`` or ``min``. |br| |br|
            Examples: |br|
            ``mayor_tres(5, 2, 3)`` -> ``5`` |br|
            ``mayor_tres(-5, 0, -2)`` -> ``0`` |br|
            ~~~~
            def mayor_tres(a, b, c):


            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(mayor_tres(1, 2, 3), 3, "Expected: 3")
                    self.assertEqual(mayor_tres(9, 2, 3), 9, "Expected: 9")
                    self.assertEqual(mayor_tres(-9, 2, 1), 2, "Expected: 2")
                    self.assertEqual(mayor_tres(1, 1, 1), 1, "Expected: 1")
                    self.assertEqual(mayor_tres(5, 5, 4), 5, "Expected: 5")


            myTests().main()


    .. tab:: Exercise 5

        .. activecode:: q2_5_en
            :nocodelens:

            Develop the function ``mayor_menor_tres`` that receives three integers ``a``, ``b`` and ``c``. The function must return a tuple of the form ``(mayor, menor)`` that represent the highest and the lowest of the three numbers, without using the functions ``max`` or ``min``. |br| |br|
            Examples: |br|
            ``mayor_menor_tres(5, 2, 3)`` -> ``(2, 5)`` |br|
            ``mayor_menor_tres(-5, 0, -2)`` -> ``(-2, 0)`` |br|
            ~~~~
            def mayor_menor_tres(a, b, c):


            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(mayor_menor_tres(1, 2, 3), (1, 3), "Expected: (1, 3)")
                    self.assertEqual(mayor_menor_tres(9, 2, 3), (2, 9), "Expected: (2, 9)")
                    self.assertEqual(mayor_menor_tres(-9, 2, 1), (-9, 2), "Expected: (-9, 2)")
                    self.assertEqual(mayor_menor_tres(1, 1, 1), (1, 1), "se Esperado: (1, 1)")
                    self.assertEqual(mayor_menor_tres(5, 5, 4), (4, 5), "Expected: (4, 5)")


            myTests().main()


    .. tab:: Exercise 6

        .. activecode:: q2_6_en
            :nocodelens:

            An employee of a company receives a monthly gross income calculated by the amount of hours worked multiplied by its value. From this ``income``, the month's ``11%`` for taxes, ``8%`` for medical insurance, and ``5%`` for payment to the union of workers are deducted. Develop the function ``calculate_income`` that receives a float ``hour_value`` and an integer ``ammount_value`` that represent how much he earns per hour and the amount of hours worked during the month. The function must return a dictionary of the form: |br|

            ``{"gross_income": A, "taxes": B,`` |br| ``"medical_insurance": C, "union_of_workers": E, "net_income": F}``. |br|

            Where A, B, C, and D represent the amount of money corresponding to each item. |br| |br|
            Examples: |br|
            ``calculate_income(15.0, 120)`` -> ``{"gross_income": 1800.00, "taxes": 198.00,`` |br| ``"medical_insurance": 144.0, "union_of_workers": 90.0, "net_income": 1368.00}``. |br|
            ~~~~
            def calculate_income(hour_value, ammount_value):


            ====
            from unittest.gui import TestCaseGui
            import random


            class myTests(TestCaseGui):
                def get_expected_dictionary(self, income):
                    result = {
                        "gross_income": income,
                        "taxes": income * 0.11,
                        "medical_insurance": income * 0.08,
                        "union_of_workers": income * 0.05,
                    }
                    result["net_income"] = (income - result["taxes"] -
                        result["medical_insurance"] - result["union_of_workers"])
                    return result

                def testOne(self):
                    test_numbers = 10
                    min_hour = 50
                    max_hour = 200
                    min_price_hour = 7
                    max_price_hour = 30
                    for test in range(test_numbers):
                        hour = random.randint(min_hour, max_hour)
                        price = round(random.uniform(min_price_hour, max_price_hour), 2)
                        income = price * hour
                        expected = self.get_expected_dictionary(income)
                        result = calculate_income(price, hour)
                        current_test = test + 1

                        self.assertEqual(
                            round(result["gross_income"], 2),
                            round(expected["gross_income"], 2),
                            f"Test #{current_test} - Expected gross income: {round(expected['gross_income'], 2)}",
                        )
                        self.assertEqual(
                            round(result["taxes"], 2),
                            round(expected["taxes"], 2),
                            f"Test #{current_test} - Expected taxes: {round(expected['taxes'], 2)}",
                        )
                        self.assertEqual(
                            round(result["medical_insurance"], 2),
                            round(expected["medical_insurance"], 2),
                            f"Test #{current_test} - Expected health insurance: {round(expected['medical_insurance'], 2)}",
                        )
                        self.assertEqual(
                            round(result["union_of_workers"], 2),
                            round(expected["union_of_workers"], 2),
                            f"Test #{current_test} - Expected union payment: {round(expected['union_of_workers'], 2)}",
                        )
                        self.assertEqual(
                            round(result["net_income"], 2),
                            round(expected["net_income"], 2),
                            f"Test #{current_test} - Expected net income: {round(expected['net_income'], 2)}",
                        )


            myTests().main()


    .. tab:: Exercise 7

        .. activecode:: q2_7_en
            :nocodelens:

            The paint sold at your trusted hardware store has a coverage of 1 liter per every 3 square meters and the paint is sold only in cans of 18 liters that cost each one ``80.00`` units. Develop the function ``can_paint`` that receives an amount in square meters of an area to be painted as a positive integer ``area``. The function should return a tuple with the amount of cans of paint that need to be bought to cover the entire area, as well as their total price, that is, using the form ``(amount_cans, total_price)``. |br|
            **Note**: only an integer number of cans of paint is sold. |br| |br|
            Examples: |br|
            ``can_paint(10)`` -> ``(1, 80.00)`` |br|
            ``can_paint(100)`` -> ``(2, 160.00)`` |br|
            ``can_paint(54)`` -> ``(1, 80.00)`` |br|
            ``can_paint(55)`` -> ``(2, 160.00)`` |br|

            ~~~~
            def can_paint(area):

            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(can_paint(10), (1, 80.00), "Expected: (1, 80.00)")
                    self.assertEqual(can_paint(100), (2, 160.00), "Expected: (2, 160.00)")
                    self.assertEqual(can_paint(54), (1, 80.00), "Expected: (1, 80.00)")
                    self.assertEqual(can_paint(55), (2, 160.00), "Expected: (2, 160.00)")
                    self.assertEqual(can_paint(1000), (19, 1520.00), "Expected: (19, 1520.00)")
                    self.assertEqual(can_paint(500), (10, 800.00), "Expected: (10, 800.00)")
                    self.assertEqual(can_paint(250), (5, 400.00), "Expected: (5, 400.00)")
                    self.assertEqual(can_paint(125), (3, 240.00), "Expected: (3, 240.00)")


            myTests().main()
