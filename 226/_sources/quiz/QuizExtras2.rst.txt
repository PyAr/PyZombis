===============
Quiz - Extras 2
===============

.. |br| raw:: html

   <br />


.. tabbed:: quizExtra2

    .. tab:: Ejercicio 1

        ..  activecode:: qExtra2_1
            :nocodelens:

            Una escuela primaria tiene planeado hacer una visita al zoológico a algunos de sus alumnos. Para esto la escuela solo puede gastar exactamente ``presupuesto`` unidades. Se sabe que la entrada al zoológico cuesta 5 unidades para menores de 12 años y 7 unidades para los que tengan 12 años o más. Desarrolle la función ``maximo_estudiantes`` que recibe ``presupuesto`` un entero positivo que indica el presupuesto que pretende gasta la escuela. La función debe devolver una tupla ``(p, g)`` con el número máximo pequeños y grandes alumnos que la escuela puede llevar al zoológico considerando todos los valores como enteros. |br| |br|
            ~~~~
            def maximo_estudiantes(presupuesto):



            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(
                        maximo_estudiantes(93), (13, 4),
                        "Esperado: 13 pequeños y 4 grandes"
                    )
                    self.assertEqual(
                        maximo_estudiantes(63), (7, 4),
                        "Esperado: 7 pequeños y 4 grandes"
                    )


            myTests().main()


    .. tab:: Ejercicio 2

        ..  activecode:: qExtra2_2
            :nocodelens:

            Desarrolle la función ``a_romano`` que recibe un entero ``n`` positivo mayor que cero. La función debe devolver la conversión del número en sistema arábigo al sistema a romano. La función debe devolver una cadena que represente el número en romano. |br| |br|
            Ejemplos: |br|
            ``a_romano(5)`` -> ``"V"`` |br|
            ``a_romano(10)`` -> ``"X"`` |br|
            ``a_romano(25)`` -> ``"XXV"`` |br|
            ``a_romano(2011)`` -> ``"MMXI"`` |br|
            ~~~~
            def a_romano(n):



            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(a_romano(12), "XII", "Esperado: XII")
                    self.assertEqual(a_romano(123), "CXXIII", "Esperado: CXXIII")
                    self.assertEqual(a_romano(400), "CD", "Esperado: CD")
                    self.assertEqual(a_romano(84), "LXXXIV", "Esperado: LXXXIV")
                    self.assertEqual(a_romano(542), "DXLII", "Esperado: DXLII")
                    self.assertEqual(a_romano(1042), "MXLII", "Esperado: MXLII")
                    self.assertEqual(a_romano(49), "XLIX", "Esperado: XLIX")
                    self.assertEqual(a_romano(429), "CDXXIX", "Esperado: CDXXIX")
                    self.assertEqual(a_romano(367), "CCCLXVII", "Esperado: CCCLXVII")
                    self.assertEqual(a_romano(23), "XXIII", "Esperado: XXIII")
                    self.assertEqual(a_romano(257), "CCLVII", "Esperado: CCLVII")
                    self.assertEqual(a_romano(968), "CMLXVIII", "Esperado: CMLXVIII")


            myTests().main()


    .. tab:: Ejercicio 3

        ..  activecode:: qExtra2_3
            :nocodelens:

            Desarrolle la función ``calcular_pi`` que recibe un parámetro ``n`` positivo mayor a 0. La función debe calcular el valor aproximado de ``pi`` con ``n`` terminos, de acuerdo con la siguiente fórmula. |br|

            ``pi = (4/1) - (4/3) + (4/5) - (4/7) ...`` |br|

            El resultado debe ser redondeado a 2 decimales y devuelto como una cadena. |br| |br|

            Ejemplos: |br|
            ``calcular_pi(4)`` -> ``"2.90"`` |br|
            *Explicación*: Los primero 4 términos siguiendo la formula son: ``(4/1) - (4/3) + (4/5) - (4/7)`` que dan como resultado ``2.895238095``, redondeando a dos decimales el resultado final sería ``2.90`` |br|
            ``calcular_pi(24)`` -> ``"3.10"`` |br|
            ``calcular_pi(61)`` -> ``"3.16"`` |br|
            ``calcular_pi(100)`` -> ``"3.13"`` |br|

            ~~~~
            def calcular_pi(n):



            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(calcular_pi(4), "2.90", "Esperado: 2.90")
                    self.assertEqual(calcular_pi(10), "3.04", "Esperado: 3.04")
                    self.assertEqual(calcular_pi(15), "3.21", "Esperado: 3.21")
                    self.assertEqual(calcular_pi(60), "3.12", "Esperado: 3.12")
                    self.assertEqual(calcular_pi(24), "3.10", "Esperado: 3.10")
                    self.assertEqual(calcular_pi(100), "3.13", "Esperado: 3.13")
                    self.assertEqual(calcular_pi(1000), "3.14", "Esperado: 3.14")


            myTests().main()
