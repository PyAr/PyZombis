===============
Basic Exercises
===============

.. |br| raw:: html

    <br />


.. tabbed:: basicExercises

    .. tab:: Exercise 1

        .. activecode:: basic_q1
            :nocodelens:

            Make a program that asks for two integer numbers and prints the sum of those two numbers. |br|
   
            ~~~~
            def suma(n, m):


            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(suma(24, 42), 66, "Expected: 66")
                    self.assertEqual(suma(17, 13), 30, "Expected: 30")
                    self.assertEqual(suma(-11, 6), -5, "Expected: -5")
                    self.assertEqual(suma(0, 9), 9, "Expected: 9")


            myTests().main()


    .. tab:: Exercise 2

        .. activecode:: basic_q2
            :nocodelens:
    
            Write a program that reads a value in meters and shows it converted to millimeters. |br|

            ~~~~
            def metros_a_milimetros(n):


            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(metros_a_milimetros(1), 1000,"Expected: 1000")
                    self.assertEqual(metros_a_milimetros(0.2), 200,"Expected: 200")
                    self.assertEqual(metros_a_milimetros(30), 30000,"Expected: 30000")


            myTests().main()


    .. tab:: Exercise 3

        .. activecode:: basic_q3
            :nocodelens:

            Write a program that reads the number of days, hours, minutes, and seconds from 
            the user. Calculate the total number of seconds. |br|

            ~~~~
            def tiempo_en_segundos(dias, horas, minutos, segundos):


            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(tiempo_en_segundos(2, 5, 2, 5), 190925, "Expected: 190925")
                    self.assertEqual(tiempo_en_segundos(10, 89, 5, 0), 1184700, "Expected: 1184700")
                    self.assertEqual(tiempo_en_segundos(8, 0, 2, 0), 691320, "Expected: 691320")
                    self.assertEqual(tiempo_en_segundos(0, 5, 55, 6), 21306, "Expected: 21306")


            myTests().main()


    .. tab:: Exercise 4

        .. activecode:: basic_q4
            :nocodelens:
    
            Make a program that calculates a salary increase. It should request the 
            salary amount and the percentage of the increase. Display the amount of 
            the increase and the new salary. |br|
            
            ~~~~
            def aumento(salario, porcentaje):
                    #Return the values in a tuple like: return (increase, new_salary)
        

            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(aumento(30500, 10), (3050, 33550), "Expected: (3050,33550)")
                    self.assertEqual(aumento(10400, 25), (2600, 13000), "Expected: (2600,13000)")
                    self.assertEqual(aumento(50100, 8), (4008, 54108), "Expected: (4008,54108)")
                    self.assertEqual(aumento(25000, 3), (750, 25750), "Expected: (750,25750)")
            
            
            myTests().main()


    .. tab:: Exercise 5

        .. activecode:: basic_q5
            :nocodelens:
    
            Request the price from a merchant and the percentage of the discount. 
            Display the discount amount and the final price. |br|

            ~~~~
            def precio_con_descuento(precio, porcentaje):
                    #Return the values in a tuple like: return (discount, final_price)
            
    
            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(precio_con_descuento(100100, 10), (10010, 90090), "Expected: (10010,90090)")
                    self.assertEqual(precio_con_descuento(20523, 4), (820.92, 19702.08), "Expected: (820.92,19702.08)")
                    self.assertEqual(precio_con_descuento(55566, 50), (27783, 27783), "Expected: (27783,27783)")
                    self.assertEqual(precio_con_descuento(75660, 24), (18158.4, 57501.6), "Expected: (18158.4,57501.6)")


            myTests().main()


    .. tab:: Exercise 6

        .. activecode:: basic_q6
            :nocodelens:

            Calculate the duration of a car trip. Ask for the distance to be covered 
            and the expected average speed for the trip. |br|

            ~~~~
            def duration(distance, speed):


            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):   
                def testOne(self):
            
                    self.assertEqual(duration(5, 5), 1, "Expected: 1")
                    self.assertEqual(duration(100, 3), 100/3, "Expected: " + str(100/3))
                    self.assertEqual(duration(10500, 30), 350, "Expected: 350")
                    self.assertEqual(duration(8600, 50), 172, "Expected: 172")
                    self.assertEqual(duration(130, 200), 0.65, "Expected: 0.65")
            
            
            myTests().main()


    .. tab:: Exercise 7

        .. activecode:: basic_q7
            :nocodelens:

            Convert a temperature written in Celsius to Fahrenheit. F = (9 * C) / 5 + 32 |br|
            
            ~~~~
            def celsius_to_fahrenheit(c):

            
            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(celsius_to_fahrenheit(20), ((9 * 20) / 5) + 32, "Expected: 68")
                    self.assertEqual(celsius_to_fahrenheit(68), ((9 * 68) / 5) + 32, "Expected: 154.4")
                    self.assertEqual(celsius_to_fahrenheit(0), ((9 * 0) / 5) + 32, "Expected: 32")
                    self.assertEqual(celsius_to_fahrenheit(-10), ((9 * -10) / 5) + 32, "Expected: 14")
                    self.assertEqual(celsius_to_fahrenheit(-24), ((9 * -24) / 5) + 32, "Expected: -11.2")


            myTests().main()