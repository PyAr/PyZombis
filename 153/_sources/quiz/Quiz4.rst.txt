=========
Quiz - 4
=========

.. |br| raw:: html

   <br />


Ejercicio 1
-----------

.. activecode:: q4_1
    :nocodelens:
    
    Desarrolle la función ``valores_extremos`` que tome el parámetro ``numeros``, que representa una lista de **10** números aleatorios entre 0-100. 
    La función debe devolver una tupla ``(a, b)``, donde a y b son el valor máximo y el mínimo respectivamente de la lista ``numeros``. Resuelva el problema sin usar 
    las funciones ``max`` ni ``min``. |br| |br|
    Ejemplo: |br|
    ``valores_extremos([15, 48, 0, 27, 13, 62, 32, 57, 85, 18])`` -> ``(85, 0)`` |br|

    ~~~~
    def valores_extremos(numeros):


    ====
    from unittest.gui import TestCaseGui
    from random import sample


    class myTests(TestCaseGui):
        def testOne(self):
            numeros = sample(range(100), 10)
            self.assertEqual(
                valores_extremos(numeros), (max(numeros), min(numeros)), f"Esperado: ({max(numeros)}, {min(numeros)})"
            )

        def testTwo(self):
            numeros = sample(range(100), 10)
            self.assertEqual(
                valores_extremos(numeros), (max(numeros), min(numeros)), f"Esperado: ({max(numeros)}, {min(numeros)})"
            )

        def testThree(self):
            numeros = sample(range(100), 10)
            self.assertEqual(
                valores_extremos(numeros), (max(numeros), min(numeros)), f"Esperado: ({max(numeros)}, {min(numeros)})"
            )


    myTests().main()


Ejercicio 2
-----------

.. activecode:: q4_2
    :nocodelens:

    Desarrolle la función ``pares_e_impares`` que toma a ``numeros`` como parámetro. ``numeros`` representa una lista de **20** números aleatorios entre 1-100. 
    La función debe devolver una tupla de listas de la forma ``([par], [impar])``, donde par e impar sean listas de números pares e impares que se encuentran 
    en ``numeros``, respectivamente. |br| |br|

    ~~~~
    def pares_e_impares(numeros):


    ====
    from unittest.gui import TestCaseGui
    from random import sample


    class myTests(TestCaseGui):
        def testOne(self):
            numeros = sample(range(1, 100), 20)
            self.assertEqual(
                pares_e_impares(numeros),
                ([n for n in numeros if n % 2 == 0], [n for n in numeros if n % 2 != 0]),
                f"Esperado: ({[n for n in numeros if n%2 == 0]}, {[n for n in numeros if n%2 != 0]})",
            )

        def testTwo(self):
            numeros = sample(range(1, 100), 20)
            self.assertEqual(
                pares_e_impares(numeros),
                ([n for n in numeros if n % 2 == 0], [n for n in numeros if n % 2 != 0]),
                f"Esperado: ({[n for n in numeros if n%2 == 0]}, {[n for n in numeros if n%2 != 0]})",
            )

        def testThree(self):
            numeros = sample(range(1, 100), 20)
            self.assertEqual(
                pares_e_impares(numeros),
                ([n for n in numeros if n % 2 == 0], [n for n in numeros if n % 2 != 0]),
                f"Esperado: ({[n for n in numeros if n%2 == 0]}, {[n for n in numeros if n%2 != 0]})",
            )


    myTests().main()


Ejercicio 3
-----------

.. activecode:: q4_3
    :nocodelens:

    Desarrolle la función ``intercalar_listas`` que toma dos parámetros, ``l1`` y ``l2``, representando listas de **10** números aleatorios entre 1-100.
    La función debe generar una tercer lista compuesta de los elementos de ``l1`` y ``l2`` intercalados. Esta tercera lista será devuelta. |br| |br|
    Ejemplo: |br|
    ``intercalar_listas([1, 3, 5, .....], [2, 4, 6, ....])`` -> ``[1, 2, 3, 4, 5, 6, ....]`` |br|

    ~~~~
    def intercalar_listas(l1, l2):


    ====
    from unittest.gui import TestCaseGui
    from random import sample


    class myTests(TestCaseGui):
        def testOne(self):
            l1 = sample(range(100), 10)
            l2 = sample(range(100), 10)
            self.assertEqual(
                intercalar_listas(l1, l2),
                [val for pair in zip(l1, l2) for val in pair],
                f"Esperado: {[val for pair in zip(l1, l2) for val in pair]}",
            )

        def testTwo(self):
            l1 = sample(range(100), 10)
            l2 = sample(range(100), 10)
            self.assertEqual(
                intercalar_listas(l1, l2),
                [val for pair in zip(l1, l2) for val in pair],
                f"Esperado: {[val for pair in zip(l1, l2) for val in pair]}",
            )


    myTests().main()


Ejercicio 4
-----------

.. activecode:: q4_4
    :nocodelens:

    A la función ``buscar_palabras`` se le pasará como argumento el siguiente ``texto``: |br|
    *"The Python Software Foundation and the global Python community welcome and encourage participation by everyone. Our community is based on 
    mutual respect, tolerance, and encouragement, and we are working to help each other live up to these principles. We want our community to be more diverse: whoever you are, and 
    whatever your background, we welcome you."* |br|
    Lo que debe hacer es generar una lista de palabras de este texto utilizando ``split()``. Después debe crear una lista de palabras que comienzan o 
    terminan con alguna de las letras en la cadena ``"python"``. Esta lista es la que será devuelta. **Nota**: No olvide primero eliminar los caracteres 
    especiales y tenga cuidado con las mayúsculas. |br| |br|

    ~~~~
    def buscar_palabras(texto):


    ====

    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            text = """The Python Software Foundation and the global Python community welcome and 
                    encourage participation by everyone. Our community is based on mutual respect, tolerance, and encouragement, 
                    and we are working to help each other live up to these principles. We want our community to be more diverse: 
                    whoever you are, and whatever your background, we welcome you."""
            res = [
                word
                for word in text.lower().replace(".", "").replace(",", "").split()
                if word[0] in "python" or word[-1] in "python"
            ]
            self.assertEqual(buscar_palabras(text), res, f"Esperado: {res}")


    myTests().main()


Ejercicio 5
-----------

.. activecode:: q4_5
    :nocodelens:

    Ahora va a desarrollar la función ``buscar_palabras_2``, a la que se le pasará el texto anterior como parámetro. Una vez más va a separar el 
    texto en palabras, justo como lo hizo en el *Ejercicio 4*. Esta vez, debe calcular el número de palabras dentro de ``texto`` que tienen alguna 
    de las letras de la cadena ``"python"``, y además tienen una longitud mayor a 4 caracteres. |br| |br|

    ~~~~
    def buscar_palabras_2(texto):


    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            text = """The Python Software Foundation and the global Python community welcome and 
                    encourage participation by everyone. Our community is based on mutual respect, tolerance, and encouragement, 
                    and we are working to help each other live up to these principles. We want our community to be more diverse: 
                    whoever you are, and whatever your background, we welcome you."""
            self.assertEqual(buscar_palabras_2(text), 24, "Esperado: 24")


    myTests().main()
