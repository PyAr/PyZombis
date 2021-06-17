=========
Quiz - 2
=========

..  |br| raw:: html

    <br />


Ejercicio 1
-----------

..  activecode:: q2_1
    :nocodelens:

    Desarrolle la función ``es_triangulo`` que recibe tres enteros positivos ``a``, ``b`` y ``c`` éstos representan los lados de un triángulo. En la función debe verificar que con los parámetros dado se forma un triángulo. Si los parámetros dados forman un triángulo, la función debe devolver una cadena indicando su tipo, es decir, ``"Equilátero"``, ``"Isósceles"`` o ``"Escaleno"``, en caso contrario, la función debe devolver la cadena, ``"No es triángulo"``. |br|
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

    Desarrolle la función ``es_bisiesto`` que recibe el parámetro ``anio`` que es un entero positivo mayor que cero y representa un año. La función debe verificar si el parámetro dado es un año bisiesto.
    ~~~~
    def es_bisiesto(anio):


    ====