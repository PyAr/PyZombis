========
Quiz - 1
========

.. |br| raw:: html

    <br />


.. tabbed:: quiz1

    .. tab:: Ejercicio 1

        .. activecode:: q1_1
            :nocodelens:

            Haga un programa que pida dos números enteros e imprima la suma de esos dos números. |br|
   
            ~~~~
            def suma(n, m):


            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(suma(24, 42), 66, "Esperado: 66")
                    self.assertEqual(suma(17, 13), 30, "Esperado: 30")
                    self.assertEqual(suma(-11, 6), -5, "Esperado: -5")
                    self.assertEqual(suma(0, 9), 9, "Esperado: 9")


            myTests().main()


    .. tab:: Ejercicio 2

        .. activecode:: q1_2
            :nocodelens:
    
            Escriba un programa que lea un valor en metros y lo muestre convertido a milimetros. |br|

            ~~~~
            def metros_a_milimetros(n):


            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(metros_a_milimetros(1), 1000,"Esperado: 1000")
                    self.assertEqual(metros_a_milimetros(0.2), 200,"Esperado: 200")
                    self.assertEqual(metros_a_milimetros(30), 30000,"Esperado: 30000")


            myTests().main()


    .. tab:: Ejercicio 3

        .. activecode:: q1_3
            :nocodelens:

            Escriba un programa que lea el número de días, horas, minutos y segundos del 
            usuario. Calcular el total en segundos. |br|

            ~~~~
            def tiempo_en_segundos(dias, horas, minutos, segundos):


            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(tiempo_en_segundos(2, 5, 2, 5), 190925, "Esperado: 190925")
                    self.assertEqual(tiempo_en_segundos(10, 89, 5, 0), 1184700, "Esperado: 1184700")
                    self.assertEqual(tiempo_en_segundos(8, 0, 2, 0), 691320, "Esperado: 691320")
                    self.assertEqual(tiempo_en_segundos(0, 5, 55, 6), 21306, "Esperado: 21306")


            myTests().main()


    .. tab:: Ejercicio 4

        .. activecode:: q1_4
            :nocodelens:
    
            Haz un programa que calcule un aumento de salario. Debe solicitar el 
            monto del salario y el porcentaje del aumento. Muestra el monto del 
            aumento y el nuevo salario. |br|
            
            ~~~~
            def aumento(salario, porcentaje):
                    #devolver los valores en una tupla como: return (aumento, nuevo_salario)
        

            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(aumento(30500, 10), (3050, 33550), "Esperado: 3050 y 33550")
                    self.assertEqual(aumento(10400, 25), (2600, 13000), "Esperado: 2600 y 13000")
                    self.assertEqual(aumento(50100, 8), (4008, 54108), "Esperado: 4008 y 54108")
                    self.assertEqual(aumento(25000, 3), (750, 25750), "Esperado: 750 y 25750")
            
            
            myTests().main()


    .. tab:: Ejercicio 5

        .. activecode:: q1_5
            :nocodelens:
    
            Solicite el precio de un comerciante y el porcentaje de descuento. 
            Muestre el monto del descuento y el precio a pagar. |br|

            ~~~~
            def precio_con_descuento(precio, porcentaje):
                    #devolver los valores en una tupla como: return (descuento, precio_final)
            
    
            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(precio_con_descuento(100100, 10), (10010, 90090), "Esperado: (10010,90090)")
                    self.assertEqual(precio_con_descuento(20523, 4), (820.92, 19702.08), "Esperado: (820.92,19702.08)")
                    self.assertEqual(precio_con_descuento(55566, 50), (27783, 27783), "Esperado: (27783,27783)")
                    self.assertEqual(precio_con_descuento(75660, 24), (18158.4, 57501.6), "Esperado: (18158.4,57501.6)")


            myTests().main()


    .. tab:: Ejercicio 6

        .. activecode:: q1_6
            :nocodelens:

            Calcule el tiempo de un viaje en auto. Pregunte por la distancia a recorrer 
            y la velocidad media esperada para el viaje. |br|

            ~~~~
            def tiempo(distancia, velocidad):


            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):   
                def testOne(self):
            
                    self.assertEqual(tiempo(5, 5), 1, "Esperado: 1")
                    self.assertEqual(tiempo(100, 3), 100/3, "Esperado: " + str(100/3))
                    self.assertEqual(tiempo(10500, 30), 350, "Esperado: 350")
                    self.assertEqual(tiempo(8600, 50), 172, "Esperado: 172")
                    self.assertEqual(tiempo(130, 200), 0.65, "Esperado: 0.65")
            
            
            myTests().main()


    .. tab:: Ejercicio 7

        .. activecode:: q1_7
            :nocodelens:

            Convierta una temperatura escrita en Celsius a Fahrenheit. F = (9 * C) / 5 + 32 |br|
            
            ~~~~
            def celsius_a_fahrenheit(c):

            
            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(celsius_a_fahrenheit(20), ((9 * 20) / 5) + 32, "Esperado: 68")
                    self.assertEqual(celsius_a_fahrenheit(68), ((9 * 68) / 5) + 32, "Esperado: 154.4")
                    self.assertEqual(celsius_a_fahrenheit(0), ((9 * 0) / 5) + 32, "Esperado: 32")
                    self.assertEqual(celsius_a_fahrenheit(-10), ((9 * -10) / 5) + 32, "Esperado: 14")
                    self.assertEqual(celsius_a_fahrenheit(-24), ((9 * -24) / 5) + 32, "Esperado: -11.2")


            myTests().main()


    .. tab:: Ejercicio 8

        .. activecode:: q1_8
            :nocodelens:

            Ahora haga lo contrario, de Fahrenheit a Celsius. |br|

            ~~~~
            def fahrenheit_a_celsius(f):

            
            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(fahrenheit_a_celsius(21), ((21 - 32) * 5) / 9, "Esperado: " + str(((21 - 32) * 5) / 9))
                    self.assertEqual(fahrenheit_a_celsius(108), ((108 - 32) * 5) / 9, "Esperado: " + str(((108 - 32) * 5) / 9))
                    self.assertEqual(fahrenheit_a_celsius(0), ((0 - 32) * 5) / 9, "Esperado: " + str(((0 - 32) * 5) / 9))
                    self.assertEqual(fahrenheit_a_celsius(-10), ((-10 - 32) * 5) / 9, "Esperado: " + str(((-10 - 32) * 5) / 9))
                    self.assertEqual(fahrenheit_a_celsius(14), ((14 - 32) * 5) / 9, "Esperado: " + str(((14 - 32) * 5) / 9))


            myTests().main()


    .. tab:: Ejercicio 9

        .. activecode:: q1_9
            :nocodelens:

            Escriba un programa que pregunte por la cantidad de kilómetros recorridos 
            por un automóvil alquilado, así como el número de días que ha estado alquilado 
            el coche. Calcule el precio a pagar, sabiendo que el coche cuesta R $ 60,00 
            por día y R $ 0,15 por km recorrido. |br|
            
            ~~~~
            def precio(km, dias):
            

            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(precio(123, 3), (0.15 * 123) + (60 * 3), "Esperado: " + str((0.15 * 123) + (60 * 3)))
                    self.assertEqual(precio(800, 4), (0.15 * 800) + (60 * 4), "Esperado: " + str((0.15 * 800) + (60 * 4)))
                    self.assertEqual(precio(60, 1), (0.15 * 60) + (60 * 1), "Esperado: " + str((0.15 * 60) + (60 * 1)))
                    self.assertEqual(precio(90, 2), (0.15 * 90) + (60 * 2), "Esperado: " + str((0.15 * 90) + (60 * 2)))
                    self.assertEqual(precio(1016, 7), (0.15 * 1016) + (60 * 7), "Esperado: " + str((0.15 * 1016) + (60 * 7)))


            myTests().main()
   

    .. tab:: Ejercicio 10

        .. activecode:: q1_10
            :nocodelens:
    
            Escribe un programa para calcular la reducción en la vida útil de un fumador. 
            Preguntar cantidad de cigarrillos fumados por día y cuántos años ha fumado. 
            Considere que un fumador pierde 10 minutos de vida por cada cigarrillo, calcula 
            cuántos días de vida perderá un fumador. Mostrar los días totales. |br|

            ~~~~
            def fumador(cigarrillos, anios):


            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
    
                    self.assertEqual(
                            fumador(10, 1), ((10 * 1 * 365) * 10) / 1440, "Esperado: " + str(((10 * 1 * 365) * 10) / 1440)
                    )
                    self.assertEqual(fumador(3, 5), ((3 * 5 * 365) * 10) / 1440, "Esperado: " + str(((3 * 5 * 365) * 10) / 1440))
                    self.assertEqual(fumador(1, 8), ((1 * 8 * 365) * 10) / 1440, "Esperado: " + str(((1 * 8 * 365) * 10) / 1440))
                    self.assertEqual(fumador(2, 3), ((2 * 3 * 365) * 10) / 1440, "Esperado: " + str(((2 * 3 * 365) * 10) / 1440))


            myTests().main()


    .. tab:: Ejercicio 11

        .. activecode:: q1_11
            :nocodelens:

            Sabiendo que  ``str()`` convierte valores numéricos en cadenas, 
            calcule cuántos dígitos hay en 2 elevados a un millón. |br|

            ~~~~
            def digitos():

            
            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(digitos(), 301030, "Esperado: 301030")


            myTests().main()
