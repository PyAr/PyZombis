=========
Quiz - 10
=========

.. |br| raw:: html

   <br />


Ejercicio 1
-----------

..  activecode:: q10_1
    :nocodelens:

    Desarrolle la función ``cerca_de_10`` que recibe un entero ``n`` y devuelve ``True`` cuando ``n`` sea múltiplo de 10, o cuando ``n`` esté a una o dos unidades de serlo. En caso contrario devuelva ``False``. |br| |br|
    Ejemplos: |br|
    ``cerca_de_10(12)`` -> ``True`` |br|
    ``cerca_de_10(17)`` -> ``False`` |br|
    ``cerca_de_10(19)`` -> ``True`` |br|

    ~~~~
    def cerca_de_10(n):


    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(cerca_de_10(12), True, "Esperado: True")
            self.assertEqual(cerca_de_10(17), False, "Esperado: False")
            self.assertEqual(cerca_de_10(19), True, "Esperado: True")
            self.assertEqual(cerca_de_10(31), True, "Esperado: True")
            self.assertEqual(cerca_de_10(6), False, "Esperado: False")
            self.assertEqual(cerca_de_10(10), True, "Esperado: True")
            self.assertEqual(cerca_de_10(11), True, "Esperado: True")
            self.assertEqual(cerca_de_10(21), True, "Esperado: True")
            self.assertEqual(cerca_de_10(22), True, "Esperado: True")
            self.assertEqual(cerca_de_10(23), False, "Esperado: False")
            self.assertEqual(cerca_de_10(54), False, "Esperado: False")
            self.assertEqual(cerca_de_10(155), False, "Esperado: False")
            self.assertEqual(cerca_de_10(158), True, "Esperado: True")
            self.assertEqual(cerca_de_10(3), False, "Esperado: False")
            self.assertEqual(cerca_de_10(1), True, "Esperado: True")


    myTests().main()



Ejercicio 2
-----------

.. activecode:: q10_2
    :nocodelens:


    Desarrolle una función llamada ``suma_loca`` que recibe tres números enteros ``a``, ``b`` y ``c``. La función debe devolver la suma de los tres números con la condición de que si algún número aparece repetido no será contado en la suma. |br| |br|
    Ejemplos:|br|
    ``suma_loca(1, 2, 3)`` -> ``6`` |br|
    ``suma_loca(3, 2, 3)`` -> ``2`` |br|
    ``suma_loca(3, 3, 3)`` -> ``0`` |br|

    ~~~~
    def suma_loca(a, b, c):


    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(suma_loca(1, 2, 3), 6, "Esperado: 6")
            self.assertEqual(suma_loca(3, 2, 3), 2, "Esperado: 2")
            self.assertEqual(suma_loca(3, 3, 3), 0, "Esperado: 0")
            self.assertEqual(suma_loca(9, 2, 2), 9, "Esperado: 9")
            self.assertEqual(suma_loca(2, 2, 9), 9, "Esperado: 9")
            self.assertEqual(suma_loca(2, 9, 2), 9, "Esperado: 9")
            self.assertEqual(suma_loca(2, 9, 3), 14, "Esperado: 14")
            self.assertEqual(suma_loca(4, 2, 3), 9, "Esperado: 9")
            self.assertEqual(suma_loca(1, 3, 1), 3, "Esperado: 3")


    myTests().main()


Ejercicio 3
-----------

.. activecode:: q10_3
    :nocodelens:


    Desarrolle la función llamada ``suma_con_suerte`` que recibe tres números enteros ``a``, ``b`` y ``c``. La función debe devolver la suma de los tres números con la condición de que si uno de los números es el **13**, éste no cuenta en la suma así como todos los números que se encuentren a su derecha. |br| |br|
    Ejemplos: |br|
    ``suma_con_suerte(1, 2, 3)`` -> ``6`` |br|
    ``suma_con_suerte(1, 2, 13)`` -> ``3`` |br|
    ``suma_con_suerte(1, 13, 3)`` -> ``1`` |br|

    ~~~~
    def suma_con_suerte(a, b, c):


    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(suma_con_suerte(1, 2, 3), 6, "Esperado: 6")
            self.assertEqual(suma_con_suerte(1, 2, 13), 3, "Esperado: 3")
            self.assertEqual(suma_con_suerte(1, 13, 3), 1, "Esperado: 1")
            self.assertEqual(suma_con_suerte(1, 13, 13), 1, "Esperado: 1")
            self.assertEqual(suma_con_suerte(6, 5, 2), 13, "Esperado: 13")
            self.assertEqual(suma_con_suerte(13, 2, 3), 0, "Esperado: 0")
            self.assertEqual(suma_con_suerte(13, 2, 13), 0, "Esperado: 0")
            self.assertEqual(suma_con_suerte(13, 13, 2), 0, "Esperado: 0")
            self.assertEqual(suma_con_suerte(9, 4, 13), 13, "Esperado: 13")
            self.assertEqual(suma_con_suerte(8, 13, 2), 8, "Esperado: 8")
            self.assertEqual(suma_con_suerte(7, 2, 1), 10, "Esperado: 10")
            self.assertEqual(suma_con_suerte(3, 3, 13), 6, "Esperado: 6")


    myTests().main()



Ejercicio 4
-----------

.. activecode:: q10_4
    :nocodelens:

    Desarrolle la función ``caracteres_dobles`` que recibe una cadena ``s`` y debe devolver los caracteres de la cadena original duplicados. |br| |br|
    Ejemplos: |br|
    ``caracteres_dobles('The')`` -> ``"TThhee"`` |br|
    ``caracteres_dobles('AAbb')`` -> ``"AAAAbbbb"`` |br|
    ``caracteres_dobles('Hi-There')`` -> ``"HHii--TThheerree"`` |br|

    ~~~~
    def caracteres_dobles(s):


    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(caracteres_dobles("The"), "TThhee", "Esperado: TThhee")
            self.assertEqual(caracteres_dobles("AAbb"), "AAAAbbbb", "Esperado: AAAAbbbb")
            self.assertEqual(caracteres_dobles("Hi-There"), "HHii--TThheerree", "Esperado: HHii--TThheerree")
            self.assertEqual(caracteres_dobles("Word!"), "WWoorrdd!!", "Esperado: WWoorrdd!!")
            self.assertEqual(caracteres_dobles("!!"), "!!!!", "Esperado: !!!!")
            self.assertEqual(caracteres_dobles(""), "", "Esperado: ")
            self.assertEqual(caracteres_dobles("a"), "aa", "Esperado: aa")
            self.assertEqual(caracteres_dobles("."), "..", "Esperado: ..")
            self.assertEqual(caracteres_dobles("aa"), "aaaa", "Esperado: aaaa")


    myTests().main()


Ejercicio 5
-----------

.. activecode:: q10_5
    :nocodelens:

    Desarrolle la función, ``contar_saludo`` que recibe como parámetro una cadena ``s`` y devuelve el número de veces que aparece la cadena ``"hola"`` en ``s``. |br| |br|
    Ejemplos: |br|
    ``contar_saludo("abc hola ho")`` -> ``1`` |br|
    ``contar_saludo("ABChola hola")`` -> ``2`` |br|
    ``contar_saludo("holahola")`` -> ``2`` |br|

    ~~~~
    def contar_saludo(s):


    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(contar_saludo("abc hola ho"), 1, "Esperado: abc hola ho")
            self.assertEqual(contar_saludo("ABChola hola"), 2, "Esperado: ABChi hola")
            self.assertEqual(contar_saludo("holahola"), 2, "Esperado: holahola")
            self.assertEqual(contar_saludo("holaHoLAhoLa"), 1, "Esperado: holaHOLAhoLa")
            self.assertEqual(contar_saludo(""), 0, "Esperado: ")
            self.assertEqual(contar_saludo("h"), 0, "Esperado: h")
            self.assertEqual(contar_saludo("hola"), 1, "Esperado: hola")
            self.assertEqual(contar_saludo("Hola is no HOLA on aHolA"), 0, "Esperado: Hola is no HOLA on aHolA")
            self.assertEqual(contar_saludo("holaho not HOholaholA"), 2, "Esperado: holaho not HOholaholA")


    myTests().main()


Ejercicio 6
-----------

.. activecode:: q10_6
    :nocodelens:

    Desarrolle la función ``gato_perro`` que recibe como parámetro una cadena ``s`` y devuelve ``True`` si en la cadena ``s`` aparece el mismo número de veces la cadena ``"gato"`` y la cadena ``"perro"`` o devuelve ``False`` en caso contrario. |br| |br|
    Ejemplos: |br|
    ``gato_perro("gatoperro")`` -> ``True`` |br|
    ``gato_perro("gatogato")`` -> ``False`` |br|
    ``gato_perro("1gato1cadoperro")`` -> ``True`` |br|

    ~~~~
    def gato_perro(s):


    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(gato_perro("gatoperro"), True, "Esperado: True")
            self.assertEqual(gato_perro("gatogato"), False, "Esperado: False")
            self.assertEqual(gato_perro("1gato1cadoperro"), True, "Esperado: True")
            self.assertEqual(gato_perro("gatoxxperroxxxperro"), False, "Esperado: False")
            self.assertEqual(gato_perro("gatoxperroxperroxgato"), True, "Esperado: True")
            self.assertEqual(gato_perro("gatoxperroxperroxca"), False, "Esperado: False")
            self.assertEqual(gato_perro("perroperrogato"), False, "Esperado: False")
            self.assertEqual(gato_perro("perrooggato"), True, "Esperado: True")
            self.assertEqual(gato_perro("perro"), False, "Esperado: False")
            self.assertEqual(gato_perro("gato"), False, "Esperado: False")
            self.assertEqual(gato_perro("ca"), True, "Esperado: True")
            self.assertEqual(gato_perro("c"), True, "Esperado: True")
            self.assertEqual(gato_perro(""), True, "Esperado: True")


    myTests().main()


Ejercicio 7
-----------

.. activecode:: q10_7
    :nocodelens:

    Desarrolle la función ``contar_code`` que recibe como parámetro una cadena ``s`` y devuelve el número de veces que aparece la cadena ``"code"`` en ``s`` pero con la condición de que la letra ``'d'`` puede ser intercambiada por cualquier otra. Así, las cadenas ``"coze"`` y ``"coxe"`` deben ser contadas igualmente. |br| |br|
    Ejemplos:|br|
    ``contar_code("aaacodebbb")`` -> ``1`` |br|
    ``contar_code("codexxcode")`` -> ``2`` |br|
    ``contar_code("cozexxcope")`` -> ``2`` |br|

    ~~~~
    def contar_code(s):


    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(contar_code("aaacodebbb"), 1, "Esperado: 1")
            self.assertEqual(contar_code("codexxcode"), 2, "Esperado: 2")
            self.assertEqual(contar_code("cozexxcope"), 2, "Esperado: 2")
            self.assertEqual(contar_code("cozfxxcope"), 1, "Esperado: 1")
            self.assertEqual(contar_code("xxcozeyycop"), 1, "Esperado: 1")
            self.assertEqual(contar_code("cozcop"), 0, "Esperado: 0")
            self.assertEqual(contar_code("abcxyz"), 0, "Esperado: 0")
            self.assertEqual(contar_code("code"), 1, "Esperado: 1")
            self.assertEqual(contar_code("ode"), 0, "Esperado: 0")
            self.assertEqual(contar_code("c"), 0, "Esperado: 0")
            self.assertEqual(contar_code(""), 0, "Esperado: 0")
            self.assertEqual(contar_code("AAcodeBBcoleCCccoreDD"), 3, "Esperado: 3")
            self.assertEqual(contar_code("AAcodeBBcoleCCccorfDD"), 2, "Esperado: 2")
            self.assertEqual(contar_code("coAcodeBcoleccoreDD"), 3, "Esperado: 3")


    myTests().main()


Ejercicio 8
-----------

.. activecode:: q10_8
    :nocodelens:

    Sabiendo que la función ``lower()`` convierte los carácteres de una cadena en minúsculas. Desarrolle una función llamada ``finales_iguales`` que recibe dos cadenas ``a`` y ``b`` como parámetros. La función devolverá ``True`` si al final de la cadena ``a`` se encuentra la cadena ``b`` o si al final de la cadena ``b`` se encuentra la cadena ``a``. |br| |br|
    Ejemplos: |br|
    ``finales_iguales("Hiabc", "abc")`` -> ``True`` |br|
    ``finales_iguales("AbC", "HiaBc")`` -> ``True`` |br|
    ``finales_iguales("abc", "abXabc")`` -> ``True`` |br|

    ~~~~
    def finales_iguales(a, b):


    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(finales_iguales("Hiabc", "abc"), True, "Esperado: True")
            self.assertEqual(finales_iguales("AbC", "HiaBc"), True, "Esperado: True")
            self.assertEqual(finales_iguales("abc", "abXabc"), True, "Esperado: True")
            self.assertEqual(finales_iguales("Hiabc", "abcd"), False, "Esperado: False")
            self.assertEqual(finales_iguales("Hiabc", "bc"), True, "Esperado: True")
            self.assertEqual(finales_iguales("Hiabcx", "bc"), False, "Esperado: False")
            self.assertEqual(finales_iguales("abc", "abc"), True, "Esperado: True")
            self.assertEqual(finales_iguales("xyz", "12xyz"), True, "Esperado: True")
            self.assertEqual(finales_iguales("yz", "12xz"), False, "Esperado: False")
            self.assertEqual(finales_iguales("Z", "12xz"), True, "Esperado: True")
            self.assertEqual(finales_iguales("12", "12"), True, "Esperado: True")
            self.assertEqual(finales_iguales("abcXYZ", "abcDEF"), False, "Esperado: False")
            self.assertEqual(finales_iguales("ab", "ab12"), False, "Esperado: False")
            self.assertEqual(finales_iguales("ab", "12ab"), True, "Esperado: True")


    myTests().main()


Ejercicio 9
-----------

.. activecode:: q10_9
    :nocodelens:

    Desarrolle la función ``contar_pares`` que recibe una lista ``numeros`` de números enteros y devuelve la cantidad números pares que se encuentran en la lista. |br| |br|
    Ejemplos: |br|
    ``contar_pares([2, 1, 2, 3, 4])`` -> ``3`` |br|
    ``contar_pares([2, 2, 0])`` -> ``3`` |br|
    ``contar_pares([1, 3, 5])`` -> ``0`` |br|

    ~~~~
    def contar_pares(numeros):


    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(contar_pares([2, 1, 2, 3, 4]), 3, "Esperado: 3")
            self.assertEqual(contar_pares([2, 2, 0]), 3, "Esperado: 3")
            self.assertEqual(contar_pares([1, 3, 5]), 0, "Esperado: 0")
            self.assertEqual(contar_pares([]), 0, "Esperado: 0")
            self.assertEqual(contar_pares([11, 9, 0, 1]), 1, "Esperado: 1")
            self.assertEqual(contar_pares([2, 11, 9, 0]), 2, "Esperado: 2")
            self.assertEqual(contar_pares([2]), 1, "Esperado: 1")
            self.assertEqual(contar_pares([2, 5, 12]), 2, "Esperado: 2")


    myTests().main()


Ejercicio 10
------------

.. activecode:: q10_10
    :nocodelens:

    Desarrolle la función ``suma_con_mas_suerte`` que recibe una lista ``numeros`` de números enteros y devuelve la suma de los números de la lista con la condición de que si uno de los números es el **13**, éste no cuenta en la suma así como todos los números que se encuentren a su derecha. |br| |br|
    Ejemplos: |br|
    ``suma_con_mas_suerte([1, 2, 2, 1])`` -> ``6`` |br|
    ``suma_con_mas_suerte([1, 1])`` -> ``2`` |br|
    ``suma_con_mas_suerte([1, 2, 13, 1, 13])`` -> ``3`` |br|
    ``suma_con_mas_suerte([13, 1, 2, 3, 4])`` -> ``0`` |br|

    ~~~~
    def suma_con_mas_suerte(numeros):


    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(suma_con_mas_suerte([1, 2, 2, 1]), 6, "Esperado: 6")
            self.assertEqual(suma_con_mas_suerte([1, 1]), 2, "Esperado: 2")
            self.assertEqual(suma_con_mas_suerte([1, 2, 2, 1, 13]), 6, "Esperado: 6")
            self.assertEqual(suma_con_mas_suerte([1, 2, 13, 2, 1, 13]), 3, "Esperado: 3")
            self.assertEqual(suma_con_mas_suerte([13, 1, 2, 13, 2, 1, 13]), 0, "Esperado: 0")
            self.assertEqual(suma_con_mas_suerte([0, 1, 2, 13, 2, 1, 13]), 3, "Esperado: 3")
            self.assertEqual(suma_con_mas_suerte([]), 0, "Esperado: 0")
            self.assertEqual(suma_con_mas_suerte([13]), 0, "Esperado: 0")
            self.assertEqual(suma_con_mas_suerte([0, 5, 1, 2, 13, 100]), 8, "Esperado: 8")
            self.assertEqual(suma_con_mas_suerte([13, 13]), 0, "Esperado: 0")
            self.assertEqual(suma_con_mas_suerte([13, 0, 13]), 0, "Esperado: 0")
            self.assertEqual(suma_con_mas_suerte([13, 1, 13]), 0, "Esperado: 0")
            self.assertEqual(suma_con_mas_suerte([5, 7, 2]), 14, "Esperado: 14")
            self.assertEqual(suma_con_mas_suerte([5, 13, 2]), 5, "Esperado: 5")
            self.assertEqual(suma_con_mas_suerte([0]), 0, "Esperado: 0")
            self.assertEqual(suma_con_mas_suerte([13, 0]), 0, "Esperado: 0")


    myTests().main()


Ejercicio 11
------------

.. activecode:: q10_11
    :nocodelens:

    Desarrolle la función ``tiene_2`` que recibe como parámetro una lista ``numeros`` de números enteros y devuelve ``True`` si en la lista aparecen dos números iguales consecutivos y ``False`` en caso contrario. |br| |br|
    Ejemplos: |br|
    ``tiene_2([1, 2, 2])`` -> ``True`` |br|
    ``tiene_2([1, 2, 1, 2])`` -> ``False`` |br|
    ``tiene_2([2, 1, 2])`` -> ``False`` |br|

    ~~~~
    def tiene_2(numeros):


    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(tiene_2([1, 2, 2]), True, "Esperado: True")
            self.assertEqual(tiene_2([1, 2, 1, 2]), False, "Esperado: False")
            self.assertEqual(tiene_2([2, 1, 2]), False, "Esperado: False")
            self.assertEqual(tiene_2([2, 2, 1, 2]), True, "Esperado: True")
            self.assertEqual(tiene_2([1, 3, 2]), False, "Esperado: False")
            self.assertEqual(tiene_2([1, 3, 2, 2]), True, "Esperado: True")
            self.assertEqual(tiene_2([2, 3, 2, 2]), True, "Esperado: True")
            self.assertEqual(tiene_2([4, 2, 4, 2, 2, 5]), True, "Esperado: True")
            self.assertEqual(tiene_2([1, 2]), False, "Esperado: False")
            self.assertEqual(tiene_2([2, 2]), True, "Esperado: True")
            self.assertEqual(tiene_2([2]), False, "Esperado: False")
            self.assertEqual(tiene_2([]), False, "Esperado: False")
            self.assertEqual(tiene_2([3, 3, 2, 2]), True, "Esperado: True")
            self.assertEqual(tiene_2([5, 2, 5, 2]), False, "Esperado: False")


    myTests().main()


Ejercicio 12
------------

.. activecode:: q10_12
    :nocodelens:

    Desarrolle la función ``suma_en_lista`` que recibe dos parámetros, un entero ``n`` y un lista ``numeros`` de números. La función debe devolver ``True`` si existen dos elementos distintos de la lista que su suma da como resultado ``n`` y devolver ``False`` en caso contrario. |br| |br|
    Ejemplos: |br|
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
            self.assertEqual(suma_en_lista(5, [1, 2, 3, 4]), True, "Esperado: True")
            self.assertEqual(suma_en_lista(9, [1, 2, 3, 4]), False, "Esperado: False")
            self.assertEqual(suma_en_lista(0, [1, 2, 3, 4]), False, "Esperado: False")
            self.assertEqual(suma_en_lista(8, [1, 2, 3, 4]), False, "Esperado: False")
            self.assertEqual(suma_en_lista(4, [2, 2, 2, 2]), False, "Esperado: False")
            self.assertEqual(suma_en_lista(4, [2, 2, 1, 3]), True, "Esperado: True")
            self.assertEqual(suma_en_lista(42, [40, 2, 3, 39]), True, "Esperado: True")
            self.assertEqual(suma_en_lista(10, [5, 5, 4, 6]), True, "Esperado: True")
            self.assertEqual(suma_en_lista(8, [5, 5, 4, 4]), False, "Esperado: False")


    myTests().main()


Ejercicio 13
------------

.. activecode:: q10_13
    :nocodelens:

    En una construcción se desea construir una fila de ladrillos. Se tienen ladrillos pequeños y ladrillos grandes. Los ladrillos pequeños son de 1 unidad de longitud mientras que los ladrillos grandes son de 5 unidades de longitud. Desarrolle la función ``construir_fila`` que recibe tres parámetros, ``n_lad_peq``, ``n_lad_grand`` y ``longitud_fila``. Estos parámetros son números enteros que representan la cantidad de ladrillos pequeños, cantidad de ladrillos grandes y la longitud de la fila que se quiere construir, respectivamente. La función debe devolver ``True`` si es posible armar la fila, o ``False`` en caso contrario. |br| |br|
    Ejemplos: |br|
    ``construir_fila(3, 1, 8)`` -> ``True`` |br|
    *Explicación*: Para construir una longitud de 8 metros, se usarían 1 ladrillo grande y 3 ladrillos pequeños |br|
    *Por lo tanto*: 1 + 1 + 1 + 5 = 8 |br|

    ``construir_fila(3, 1, 9)`` -> ``False`` |br|
    *Explicación*: Para construir una longitud de 9 metros no se podría porque solamente se tienen 3 ladrillos pequeños (de 1 metro de longitud) y 1 ladrillo grande (de 5 metros de longitud). |br|
    *Por lo tanto*: 1 + 1 + 1 + 5 < 9 en este caso se necesitaría 1 ladrillo grande y 4 pequeños. |br|

    ``construir_fila(3, 2, 10)`` -> ``True`` |br|
    *Explicación*: Para llenar una longitud de 10 metros, se usarían solamente los 2 ladrillos grandes disponibles. |br|
    *Por lo tanto*: 5 + 5 = 10 |br|

    ~~~~
    def construir_fila(n_lad_peq, n_lad_grand, longitud_fila):


    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(construir_fila(3, 1, 8), True, "Esperado: True")
            self.assertEqual(construir_fila(3, 1, 9), False, "Esperado: False")
            self.assertEqual(construir_fila(3, 2, 10), True, "Esperado: True")
            self.assertEqual(construir_fila(3, 2, 8), True, "Esperado: True")
            self.assertEqual(construir_fila(3, 2, 9), False, "Esperado: False")
            self.assertEqual(construir_fila(6, 1, 11), True, "Esperado: True")
            self.assertEqual(construir_fila(6, 0, 11), False, "Esperado: False")
            self.assertEqual(construir_fila(3, 1, 7), True, "Esperado: True")
            self.assertEqual(construir_fila(1, 1, 7), False, "Esperado: False")
            self.assertEqual(construir_fila(2, 1, 7), True, "Esperado: True")
            self.assertEqual(construir_fila(7, 1, 11), True, "Esperado: True")
            self.assertEqual(construir_fila(7, 1, 8), True, "Esperado: True")
            self.assertEqual(construir_fila(7, 1, 13), False, "Esperado: False")
            self.assertEqual(construir_fila(43, 1, 46), True, "Esperado: True")
            self.assertEqual(construir_fila(40, 1, 46), False, "Esperado: False")
            self.assertEqual(construir_fila(22, 2, 33), False, "Esperado: False")
            self.assertEqual(construir_fila(0, 2, 10), True, "Esperado: True")
            self.assertEqual(construir_fila(1000000, 1000, 1000100), True, "Esperado: True")
            self.assertEqual(construir_fila(2, 1000000, 100003), False, "Esperado: False")
            self.assertEqual(construir_fila(12, 2, 21), True, "Esperado: True")


    myTests().main()
