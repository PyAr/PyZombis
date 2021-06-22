=========
Quiz - 12
=========

..  |br| raw:: html

    <br />

Ejercicio 1
-----------

..  activecode:: q12_1
    :nocodelens:

    Desarrolle la función ``verbo`` que recibe una cadena ``s`` como parámetro. Si la longitud de la cadena es al menos 3, debe devolver la cadena original concatenando ``"ing"`` al final. Si la cadena ``s`` ya termina en ``"ing"``, concatene la cadena ``"ly"``. Si la longitud de la cadena es menor que 3, devuelve la cadena original. |br| |br|
    Ejemplos: |br|
    ``verbo("singing")`` -> ``"singingly"`` |br|
    ``verbo("travel")`` -> ``"traveling"`` |br|
    ``verbo("do")`` -> ``"do"`` |br|
   
    ~~~~
    def verbo(s):

       

    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):

            self.assertEqual(verbo("hail"), "hailing", "Esperado: hailing")
            self.assertEqual(verbo("swiming"), "swimingly", "Esperado: swimingly")
            self.assertEqual(verbo("do"), "do", "Esperado: do")
            self.assertEqual(verbo("singing"), "singingly", "Esperado: singingly")
            self.assertEqual(verbo("travel"), "traveling", "Esperado: traveling")
            self.assertEqual(verbo("lly"), "llying", "Esperado: llying")
            self.assertEqual(verbo("ing"), "ingly", "Esperado: ingly")


    myTests().main()


Ejercicio 2
-----------

..  activecode:: q12_2
    :nocodelens:

    Desarrolle la función ``no_es_malo`` que recibe una cadena ``s`` como parámetro. La función debe buscar la primera aparición de la cadena ``"no"`` y la cadena ``"malo"``, si ésta última aparece después de la primera, reemplace ``"no" ... "malo"`` por la cadena ``"bueno"`` y devuelva el resultado. |br| |br|
    Ejemplos: |br|
    ``no_es_malo("El té no es malo")`` -> ``"El té bueno"`` |br|
    ``no_es_malo("El precio de esta casa no es para nada malo")`` -> ``"El precio de esta casa bueno"`` |br|
    ``no_es_malo("El teléfono es malo")`` -> ``"El teléfono es malo"`` |br|

    ~~~~
    def no_es_malo(s):

       

    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):

            self.assertEqual(
                no_es_malo("La película no es malo"),
                "La película bueno",
                "Esperado: La película bueno"
            )
            self.assertEqual(
                no_es_malo("Esta cena no es malo!"),
                "Esta cena bueno!",
                "Esperado: Esta cena bueno!"
            )
            self.assertEqual(
                no_es_malo("El té no está caliente"),
                "El té no está caliente",
                "Esperado: El té no está caliente"
            )
            self.assertEqual(no_es_malo("no es para nada malo"), "bueno", "Esperado: bueno")
            self.assertEqual(no_es_malo("no malo"), "bueno", "Esperado: bueno")
            self.assertEqual(no_es_malo("malo"), "malo", "Esperado: malo")
            self.assertEqual(no_es_malo("no"), "no", "Esperado: no")
            self.assertEqual(no_es_malo("NO"), "NO", "Esperado: NO")
            self.assertEqual(no_es_malo("MALO"), "MALO", "Esperado: MALO")
            self.assertEqual(no_es_malo("NO es MALO"), "NO es MALO", "Esperado: NO es MALO")
            self.assertEqual(no_es_malo("NO MALO"), "NO MALO", "Esperado: NO MALO")
            self.assertEqual(no_es_malo("no MALO"), "no MALO", "Esperado: no MALO")
            self.assertEqual(no_es_malo("NO malo"), "NO malo", "Esperado: NO malo")


    myTests().main()


Ejercicio 3
-----------

..  activecode:: q12_3
    :nocodelens:

    Desarrolle la función ``inicio_final`` que recibe dos cadenas ``a`` y ``b``. Las cadenas tienen que ser dividas en dos, si alguna de las cadenas tiene un número impar de caracteres, la primera mitad será la subcadena más larga (por ejemplo ``perro`` se dividirá entre: ``per`` y ``ro``). Dada las dos cadenas, devuelva una nueva cadena formada de la siguiente manera ``a_inicio + b_inicio + a_final + b_final``. |br| |br|
    Ejemplos: |br|
    ``inicio_final("abcd", "1234")`` -> ``"ab12cd34"`` |br|
    ``inicio_final("abc", "1234")`` -> ``"ab12c34"`` |br|
    ``inicio_final("abc", "123")`` -> ``"ab12c3"`` |br|

    ~~~~
    def inicio_final(a, b):

       

    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):

            self.assertEqual(inicio_final("abcd", "xy"), "abxcdy", "Esperado: abxcdy")
            self.assertEqual(inicio_final("abcde", "xyz"), "abcxydez", "Esperado: abcxydez")
            self.assertEqual(inicio_final("a", "b"), "ab", "Esperado: ab")
            self.assertEqual(inicio_final("ac", "b"), "abc", "Esperado: abc")
            self.assertEqual(inicio_final("a", "bc"), "abc", "Esperado: abc")
            self.assertEqual(inicio_final("", ""), "", "Esperado: ''")
            self.assertEqual(inicio_final("a", ""), "a", "Esperado: 'a'")
            self.assertEqual(inicio_final("", "b"), "b", "Esperado: 'b'")
            self.assertEqual(
                inicio_final("Kitten", "Donut"),
                "KitDontenut",
                "Esperado: KitDontenut"
            )


    myTests().main()


Ejercicio 4
-----------

..  activecode:: q12_4
    :nocodelens:

    Desarrolle la función ``cuantos_ceros`` que dado un entero ``n`` positivo, devuelva la cantidad de ceros al final del entero ``n``. |br| |br|
    Ejemplos: |br|
    ``cuantos_ceros(10010)`` -> ``1`` |br|
    ``cuantos_ceros(908007000)`` -> ``3`` |br|

    ~~~~
    def cuantos_ceros(n):

       

    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):

            self.assertEqual(cuantos_ceros(10100100010000), 4, "Esperado: 4")
            self.assertEqual(cuantos_ceros(90000000000000000010), 1, "Esperado: 1")
            self.assertEqual(cuantos_ceros(10), 1, "Esperado: 1")
            self.assertEqual(cuantos_ceros(1050051222), 0, "Esperado: 0")
            self.assertEqual(cuantos_ceros(1010101010), 1, "Esperado: 1")
            self.assertEqual(cuantos_ceros(5000), 3, "Esperado: 3")
            self.assertEqual(cuantos_ceros(10000000000), 10, "Esperado: 10")
            self.assertEqual(cuantos_ceros(555), 0, "Esperado: 0")
            self.assertEqual(cuantos_ceros(1), 0, "Esperado: 0")
            self.assertEqual(cuantos_ceros(0), 0, "Esperado: 0")


    myTests().main()


Ejercicio 5
-----------

..  activecode:: q12_5
    :nocodelens:

    Desarrolle la función ``contar_2`` que recibe un entero ``n`` positivo mayor que 0. La función debe devolver la cantidad de veces que el dígito 2 aparece en el intervalo ``[0, n-1]``. |br| |br|
    Ejemplos: |br|
    ``contar_2(20)`` -> ``2`` |br|
    ``contar_2(5)`` -> ``1`` |br|
    ``contar_2(1)`` -> ``0`` |br|

    ~~~~
    def contar_2(n):

       

    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):

            self.assertEqual(contar_2(20), 2, "Esperado: 2")
            self.assertEqual(contar_2(1), 0, "Esperado: 0")
            self.assertEqual(contar_2(5), 1, "Esperado: 1")
            self.assertEqual(contar_2(999), 300, "Esperado: 300")
            self.assertEqual(contar_2(555), 216, "Esperado: 216")


    myTests().main()


Ejercicio 6
-----------

..  activecode:: q12_6
    :nocodelens:

    Desarrolle la función ``inicio_potencia`` que recibe un entero ``n`` positivo mayor que 0. La función debe devolver la primera potencia de 2 que comienza con ``n``. |br| |br|
    Ejemplos: |br|
    ``inicio_potencia(65)`` -> ``16`` |br|
    *Explicación*: para ``n = 65`` la potencia ``2^16`` da como resultado ``65536`` que contiene a ``n`` al comienzo. |br| |br|
    ``inicio_potencia(4)`` -> ``2`` |br|
    *Explicación*: para ``n = 4`` la potencia ``2^2`` da como resultado ``4`` que contiene a ``n`` al comienzo. |br| |br|
    ``inicio_potencia(3)`` -> ``5`` |br|
    *Explicación*: para ``n = 3`` la potencia ``2^5`` da como resultado ``32`` que contiene a ``n`` al comienzo. |br|

    ~~~~
    def inicio_potencia(n):

       

    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):

            self.assertEqual(inicio_potencia(7), 46, "Esperado: 46")
            self.assertEqual(inicio_potencia(3), 5, "Esperado: 5")
            self.assertEqual(inicio_potencia(133), 316, "Esperado: 316")
            self.assertEqual(inicio_potencia(1024), 10, "Esperado: 10")
            self.assertEqual(inicio_potencia(123), 90, "Esperado: 90")
            self.assertEqual(inicio_potencia(1), 0, "Esperado: 0")
            self.assertEqual(inicio_potencia(10), 10, "Esperado: 10")
            self.assertEqual(inicio_potencia(50), 102, "Esperado: 102")


    myTests().main()

