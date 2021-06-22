=========
Quiz - 2
=========

..  |br| raw:: html

    <br />


Ejercicio 1
-----------

..  activecode:: q2_1
    :nocodelens:

    Desarrolle la función ``es_triangulo`` que recibe tres enteros positivos ``a``, ``b`` y ``c``. Éstos representan los lados de un triángulo. En la función debe verificar que con los parámetros dados se forma un triángulo. Si los parámetros dados forman un triángulo, la función debe devolver una cadena indicando su tipo, es decir, ``"Equilátero"``, ``"Isósceles"`` o ``"Escaleno"``, en caso contrario, la función debe devolver la cadena, ``"No es triángulo"``. |br|
    **Nota**: recuerde que no es un triángulo cuando uno de sus lados es mayor que la suma de los otros dos. |br| |br|
    Ejemplos: |br|
    ``es_triangulo(2, 2, 2)`` -> ``"Equilátero"`` |br|
    ``es_triangulo(4, 2, 2)`` -> ``"Isósceles"`` |br|
    ``es_triangulo(4, 2, 6)`` -> ``"Escaleno"`` |br|
    ``es_triangulo(2, 1, 8)`` -> ``"No es triángulo"`` |br|
    ~~~~
    def es_triangulo(a, b, c):


    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):

            self.assertEqual(es_triangulo(2, 2, 2), "Equilátero", "Esperado: Equilátero")
            self.assertEqual(es_triangulo(2, 1, 2), "Isósceles", "Esperado: Isósceles")
            self.assertEqual(es_triangulo(2, 1, 3), "Escaleno", "Esperado: Escaleno")
            self.assertEqual(es_triangulo(2, 1, 8), "No es triángulo", "Esperado: No es triángulo")
            self.assertEqual(es_triangulo(4, 2, 1), "No es triángulo", "Esperado: No es triángulo")
            self.assertEqual(es_triangulo(4, 1000, 1000), "Isósceles", "Esperado: Isósceles")
            self.assertEqual(es_triangulo(10000, 10000, 10000), "Equilátero", "Esperado: Equilátero")
            self.assertEqual(es_triangulo(4, 2, 2), "Isósceles", "Esperado: Isósceles")
            self.assertEqual(es_triangulo(10000, 1, 9999), "Escaleno", "Esperado: Escaleno")


    myTests().main()


Ejercicio 2
-----------

..  activecode:: q2_2
    :nocodelens:

    Desarrolle la función ``es_bisiesto`` que recibe el parámetro ``anio`` que es un entero positivo mayor que cero y representa un año. La función debe verificar si el parámetro dado es un año bisiesto, por lo tanto debe devolver ``True`` si lo es, o ``False`` en caso contrario. Un año es bisiesto, si es divisible entre 400 **ó** divisible entre 4 y no es divisible entre 100. |br| |br|
    Ejemplos: |br|
    ``es_bisiesto(2014)`` -> ``False`` |br|
    ``es_bisiesto(2016)`` -> ``True`` |br|
    ``es_bisiesto(1900)`` -> ``False`` |br|
    ``es_bisiesto(2000)`` -> ``True`` |br|
    ~~~~
    def es_bisiesto(anio):


    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):

            self.assertEqual(es_bisiesto(2000), True, "Esperado: True")
            self.assertEqual(es_bisiesto(2001), False, "Esperado: False")
            self.assertEqual(es_bisiesto(2020), True, "Esperado: True")
            self.assertEqual(es_bisiesto(2016), True, "Esperado: True")
            self.assertEqual(es_bisiesto(2400), True, "Esperado: True")
            self.assertEqual(es_bisiesto(1952), True, "Esperado: True")
            self.assertEqual(es_bisiesto(1900), False, "Esperado: False")
            self.assertEqual(es_bisiesto(2200), False, "Esperado: False")
            self.assertEqual(es_bisiesto(2100), False, "Esperado: False")


    myTests().main()


Ejercicio 3
-----------

..  activecode:: q2_3
    :nocodelens:

    Juan Pablo el pescador, es un buen hombre que trabaja todos los días de la semana. Al final de cada día de trabajo, Juan debe reportar al estado. Cada vez que trae un peso de pescado mayor al establecido por la normativa de pesca (50 kilogramos) debe pagar una multa de 4.00 unidades por kilogramo adicional. Para llevar un registro, él compro una computadora para controlar los ingresos de su trabajo y te solicitó que hicieras la función llamada ``generar_reporte`` que recibe una lista de flotantes positivos ``pesos``, que representan la cantidad que pescó Juan cada día de la semana. La función debe devolver un arreglo de tuplas, donde cada tupla debe ser un par de la forma ``(adicional, multa)``, que representan la cantidad de kilogramos adicional que pescó Juan durante un día y la multa que tuvo que pagar respectivamente. De no haber pagado multa el resultado será ``0.0`` en ambos casos. |br| |br|
    Ejemplos: |br|
    ``generar_reporte([25.5, 50.5, 60.25, 15, 100, 50, 30.50])`` -> ``[(0.0, 0.0), (0.5, 2.0), (10.25, 41.0), (0.0, 0.0), (50.0, 200.0), (0.0, 0.0),`` |br| ``(0.0, 0.0)]``
    ~~~~
    def generar_reporte(pesos):


    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):

            self.assertEqual(
                generar_reporte([25.5, 50.5, 60.25, 15.0, 100.0, 50.0, 30.50]),
                [(0.0, 0.0), (0.5, 2.0), (10.25, 41.0), (0.0, 0.0), (50.0, 200.0), (0.0, 0.0), (0.0, 0.0)],
                "Esperado: [(0.0, 0.0), (0.5, 2.0), (10.25, 41.0), (0.0, 0.0), (50.0, 200.0), (0.0, 0.0), (0.0, 0.0)]",
            )
            self.assertEqual(
                generar_reporte([5.55, 50.0, 10.25, 15.0, 0.0, 50.0, 51.0]),
                [(0.0, 0.0), (0.0, 0.0), (0.0, 0.0), (0.0, 0.0), (0.0, 0.0), (0.0, 0.0), (1.0, 4.0)],
                "Esperado: [(0.0, 0.0), (0.0, 0.0), (0.0, 0.0), (0.0, 0.0), (0.0, 0.0), (0.0, 0.0), (1.0, 4.0)]",
            )


    myTests().main()


Ejercicio 4
-----------

..  activecode:: q2_4
    :nocodelens:

    Desarrolle la función ``mayor_tres`` que recibe tres números enteros ``a``, ``b`` y ``c``. La función debe devolver el mayor de los tres números, sin usar las funciones ``max`` o ``min``. |br| |br|
    Ejemplos: |br|
    ``mayor_tres(5, 2, 3)`` -> ``5`` |br|
    ``mayor_tres(-5, 0, -2)`` -> ``0`` |br|
    ~~~~
    def mayor_tres(a, b, c):


    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):

            self.assertEqual(mayor_tres(1, 2, 3), 3, "Esperado: 3")
            self.assertEqual(mayor_tres(9, 2, 3), 9, "Esperado: 9")
            self.assertEqual(mayor_tres(-9, 2, 1), 2, "Esperado: 2")
            self.assertEqual(mayor_tres(1, 1, 1), 1, "Esperado: 1")
            self.assertEqual(mayor_tres(5, 5, 4), 5, "Esperado: 5")


    myTests().main()


Ejercicio 5
-----------

..  activecode:: q2_5
    :nocodelens:

    Desarrolle la función ``mayor_menor_tres`` que recibe tres números enteros ``a``, ``b`` y ``c``. La función debe devolver una tupla de la forma ``(mayor, menor)`` que representan el mayor y el menor de los tres números, sin usar las funciones ``max`` o ``min``. |br| |br|
    Ejemplos: |br|
    ``mayor_menor_tres(5, 2, 3)`` -> ``(2, 5)`` |br|
    ``mayor_menor_tres(-5, 0, -2)`` -> ``(-2, 0)`` |br|
    ~~~~
    def mayor_menor_tres(a, b, c):


    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):

            self.assertEqual(mayor_menor_tres(1, 2, 3), (1, 3), "Esperado: (1, 3)")
            self.assertEqual(mayor_menor_tres(9, 2, 3), (2, 9), "Esperado: (2, 9)")
            self.assertEqual(mayor_menor_tres(-9, 2, 1), (-9, 2), "Esperado: (-9, 2)")
            self.assertEqual(mayor_menor_tres(1, 1, 1), (1, 1), "Esperado: (1, 1)")
            self.assertEqual(mayor_menor_tres(5, 5, 4), (4, 5), "Esperado: (4, 5)")


    myTests().main()


Ejercicio 6
-----------

..  activecode:: q2_6
    :nocodelens:

    Un trabajador de una empresa recibe un salario mensual bruto calculado por la cantidad de horas trabajadas multiplicada por su valor. De este ``salario_bruto`` se le descuentan al mes el ``11%`` por impuestos, el ``8%`` de seguro médico y ``5%`` como pago al sindicato. Desarrolle la función ``calcular_salario`` que recibe un flotante ``valor_hora`` y un entero ``cantidad_horas`` que representan cuánto gana por hora y la cantidad de horas trabajadas durante el mes. La función debe devolver un diccionario de la forma: |br|

    ``{"salario_bruto": A, "impuestos": B,`` |br| ``"seguro_medico": C, "sindicato": E, "salario_neto": F}``. |br|

    Donde A, B, C y D representan la cantidad de dinero correspondiente para cada ítem. |br| |br|
    Ejemplos: |br|
    ``calcular_salario(15.0, 120)`` -> ``{"salario_bruto": 1800.00, "impuestos": 198.00,`` |br| ``"seguro_medico": 144.0, "sindicato": 90.0, "salario_neto": 1368.00}``. |br|
    ~~~~
    def calcular_salario(valor_hora, cantidad_horas):


    ====
    from unittest.gui import TestCaseGui
    import random


    class myTests(TestCaseGui):
        def get_expected_dictionary(self, salary):
            result = {
                "salario_bruto": salary,
                "impuestos": salary * 0.11,
                "seguro_medico": salary * 0.08,
                "sindicato": salary * 0.05,
            }
            result["salario_neto"] = salary - result["impuestos"] - result["seguro_medico"] - result["sindicato"]
            return result

        def testOne(self):
            test_numbers = 10
            min_hour = 50
            max_hour = 200
            min_price_hour = 7.5
            max_price_hour = 30.5
            for test in range(test_numbers):
                hour = random.randint(min_hour, max_hour)
                price = round(random.uniform(min_price_hour, max_price_hour), 2)
                salary = price * hour
                expected = self.get_expected_dictionary(salary)
                self.assertEqual(calcular_salario(price, hour), expected, "Esperado: %s " % str(expected))


    myTests().main()


Ejercicio 7
-----------

..  activecode:: q2_7
    :nocodelens:

    La pintura que venden en su ferretería de confianza tiene una cobertura de 1 litro por cada 3 metros cuadrados y la pintura se vende solo en botes de 18 litros que cuestan cada uno ``80.00`` unidades. Desarrolle la función ``puedo_pintar`` que recibe una cantidad en metros cuadrados de un área a pintar como un entero positivo ``area``. La función debe devolver una tupla con las cantidad de botes de pintura que se necesitan comprar para cubrir toda el área, así como su precio total, es decir, utilizando la forma ``(cantidad_botes, precio_total)``. |br|
    **Nota**: solo se vende un número entero de botes de pintura. |br| |br|
    Ejemplos: |br|
    ``puedo_pintar(10)`` -> ``(1, 80.00)`` |br|
    ``puedo_pintar(100)`` -> ``(2, 160.00)`` |br|
    ``puedo_pintar(54)`` -> ``(1, 80.00)`` |br|
    ``puedo_pintar(55)`` -> ``(2, 160.00)`` |br|
    ~~~~
    def puedo_pintar(area):

    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):

            self.assertEqual(puedo_pintar(10), (1, 80.00), "Esperado: (1, 80.00)")
            self.assertEqual(puedo_pintar(100), (2, 160.00), "Esperado: (2, 160.00)")
            self.assertEqual(puedo_pintar(54), (1, 80.00), "Esperado: (1, 80.00)")
            self.assertEqual(puedo_pintar(55), (2, 160.00), "Esperado: (2, 160.00)")
            self.assertEqual(puedo_pintar(1000), (19, 1520.00), "Esperado: (19, 1520.00)")
            self.assertEqual(puedo_pintar(500), (10, 800.00), "Esperado: (10, 800.00)")
            self.assertEqual(puedo_pintar(250), (5, 400.00), "Esperado: (5, 400.00)")
            self.assertEqual(puedo_pintar(125), (3, 240.00), "Esperado: (3, 240.00)")


    myTests().main()
