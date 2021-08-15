=========
Quiz - 10
=========

.. |br| raw:: html

    <br />


.. tabbed:: quiz10

    .. tab:: Ejercicio 1

        .. activecode:: q10_1
            :nocodelens:

            Desarrolle la función ``cuantas_donas`` que toma a ``n``, un número entero 
            positivo, como parámetro, y devuelve una cadena de forma ``"Número de donas: n"``, 
            donde ``n`` es el valor que se le pasó a la función como argumento. No obstante, 
            si ``n`` >= 10, ``cuantas_donas`` devolverá ``"muchas"`` en vez de ``n``. |br| |br|
            Ejemplos: |br|
            ``cuantas_donas(5)`` -> ``"Número de donas: 5"`` |br|
            ``cuantas_donas(23)`` -> ``"Número de donas: muchas"`` |br|

            ~~~~
            def cuantas_donas(n):

                
            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
            
                    self.assertEqual(cuantas_donas(4), "Número de donas: 4", "Esperado: Número de donas: 4")
                    self.assertEqual(cuantas_donas(9), "Número de donas: 9", "Esperado: Número de donas: 9")
                    self.assertEqual(
                        cuantas_donas(10),
                        "Número de donas: muchas",
                        "Esperado: Número de donas: muchas",
                    )
                    self.assertEqual(
                        cuantas_donas(99),
                        "Número de donas: muchas",
                        "Esperado: Número de donas: muchas",
                    )
            
            
            myTests().main()


    .. tab:: Ejercicio 2

        .. activecode:: q10_2
            :nocodelens:

            Desarrolla la función ``cadena_de_extremos`` que, dada una cadena ``s``, 
            devuelva una cadena con las dos primeras y las dos últimas letras de ``s``. 
            Sin embargo, si la cadena tiene menos de 2 letras, devuelve una cadena vacía. |br| |br| 
            Ejemplos: |br|
            ``cadena_de_extremos("palmeras")`` -> ``"paas"`` |br|
            ``cadena_de_extremos("a")`` -> ``""`` |br|

            ~~~~
            def cadena_de_extremos(s):

                
            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
            
                    self.assertEqual(cadena_de_extremos("palmeras"), "paas", "Esperado: paas")
                    self.assertEqual(cadena_de_extremos("algoritmos"), "alos", "Esperado: alos")
                    self.assertEqual(cadena_de_extremos("co"), "coco", "Esperado: coco")
                    self.assertEqual(cadena_de_extremos("a"), "", "Esperado: ''")
                    self.assertEqual(cadena_de_extremos("xyz"), "xyyz", "Esperado: xyyz")
                    self.assertEqual(cadena_de_extremos(""), "", "Esperado: ''")
            
            
            myTests().main()


    .. tab:: Ejercicio 3

        .. activecode:: q10_3
            :nocodelens:

            Desarrolle la función ``remplazar_primer_caracter`` que, dada una cadena ``s``, 
            devuelva una cadena en la que todas las apariciones del primer carácter en ``s`` 
            se reemplacen por "*", a excepción del primero. **Nota:** 
            use el método ``.replace(valor_a_replazar, nuevo_valor)`` para resolver el 
            ejercicio. |br| |br|
            Ejemplos: |br|
            ``remplazar_primer_caracter("google")`` -> ``"goo*le"`` |br|
            ``remplazar_primer_caracter("dona")`` -> ``"dona"`` |br|

            ~~~~
            def remplazar_primer_caracter(s):


            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
            
                    self.assertEqual(remplazar_primer_caracter("babble"), "ba**le", "Esperado: ba**le")
                    self.assertEqual(remplazar_primer_caracter("aardvark"), "a*rdv*rk", "Esperado: a*rdv*rk")
                    self.assertEqual(remplazar_primer_caracter("google"), "goo*le", "Esperado: goo*le")
                    self.assertEqual(remplazar_primer_caracter("dona"), "dona", "Esperado: dona")
            
            
            myTests().main()


    .. tab:: Ejercicio 4

        .. activecode:: q10_4
            :nocodelens:

            Desarrolle la función ``combinar_dos_cadenas`` que tome dos cadenas como 
            argumentos, ``a`` y ``b``, y devuelva una nueva cadena de la siguiente forma: 
            
            - La nueva cadena tiene que ser una combinación de ``a`` y ``b``.
            - La nueva cadena tendrá la forma ``"<a> <b>"``, note el espacio entre ambas.
            - La nueva cadena intercambiará las primeras dos letras de ``a`` y ``b``.

            Suponga que ``a`` y ``b`` tienen más de 2 caracteres. 
            Para mayor claridad, observe los siguientes ejemplos. |br| |br|
            Ejemplos: |br|
            ``combinar_dos_cadenas("mix", "pod")`` -> ``"pox mid"`` |br|
            ``combinar_dos_cadenas("pezzy", "firm")`` -> ``"fizzy perm"`` |br|

            ~~~~
            def combinar_dos_cadenas(a, b):


            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
            
                    self.assertEqual(combinar_dos_cadenas("mix", "pod"), "pox mid", "Esperado: pox mid")
                    self.assertEqual(combinar_dos_cadenas("dog", "dinner"), "dig donner", "Esperado: dig donner")
                    self.assertEqual(
                        combinar_dos_cadenas("gnash", "sport"),
                        "spash gnort",
                        "Esperado: spash gnort",
                    )
                    self.assertEqual(combinar_dos_cadenas("pezzy", "firm"), "fizzy perm", "Esperado: fizzy perm")
            
            
            myTests().main()


    .. tab:: Ejercicio 5


        .. activecode:: q10_5
            :nocodelens:

            Desarrolle la función ``es_palindromo`` que toma una cadena ``s`` como 
            parámetro y verifica si ``s`` es palíndromo o no, devolviendo ``True`` o 
            ``False`` respectivamente. |br| |br| 
            Ejemplos: |br|
            ``es_palindromo("asa")`` -> ``True`` |br|
            ``es_palindromo("casa")`` -> ``False``  |br|

            ~~~~
            def es_palindromo(s):

                
            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
            
                    self.assertEqual(es_palindromo("asa"), True, "Esperado: True")
                    self.assertEqual(es_palindromo("casa"), False, "Esperado: False")
                    self.assertEqual(es_palindromo("reconocer"), True, "Esperado: True")
                    self.assertEqual(es_palindromo("palabra"), False, "Esperado: False")
                    self.assertEqual(es_palindromo("radar"), True, "Esperado: True")
                    self.assertEqual(es_palindromo("seres"), True, "Esperado: True")
            
            
            myTests().main()


    .. tab:: Ejercicio 6

        .. activecode:: q10_6
            :nocodelens:

            Desarrolle la función ``contar_ocurrencias`` que toma dos parámetros: 
            ``frase`` y ``palabra``, ambos de tipo cadena. La función debe devolver 
            el número de veces que ``palabra`` se encuentra en ``frase``. |br| |br|
            Ejemplos: |br|  
            ``contar_ocurrencias("a ana y a mariana les gustan las manzanas", "ana")`` -> ``3`` |br|

            ~~~~
            def contar_ocurrencias(frase, palabra):
                

            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
            
                    self.assertEqual(
                        contar_ocurrencias("a ana y a mariana les gustan las manzanas", "ana"),
                        3,
                        "Esperado: 3",
                    )
                    self.assertEqual(contar_ocurrencias("Cats, rats, bats, and hats.", "ats"), 4, "Esperado: 4")
            
            
            myTests().main()
