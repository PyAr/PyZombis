=========
Quiz - 6
=========

.. |br| raw:: html

   <br />


.. tabbed:: quiz6

   .. tab:: Ejercicio 1

      .. activecode:: q6_1
         :nocodelens:

         Desarrolle la función ``dormir`` que toma dos parámetros, 
         ``dia_semana`` y ``dia_festivo``. Ambos parámetros toman 
         valores booleanos, es decir pueden ser ``True`` o ``False``. La función actúa 
         de la siguiente manera: usted puede dormir cuando sea día festivo 
         o cuando no sea un día entre semana. ``dormir`` devolverá ``True`` 
         o ``False`` si usted va a dormir o no. |br| |br|
         Ejemplos: |br|
         ``dormir(False, False)`` -> ``True`` |br|
         ``dormir(True, False)`` -> ``False`` |br|

         ~~~~
         def dormir(dia_semana, dia_festivo):


         ====
         from unittest.gui import TestCaseGui


         class myTests(TestCaseGui):
            def testOne(self):
               self.assertEqual(dormir(False, False), True, "Excelente! obtenido: True esperado: True")
               self.assertEqual(dormir(True, False), False, "Excelente! obtenido: False esperado: False")
               self.assertEqual(dormir(False, True), True, "Excelente! obtenido: True esperado: True")
               self.assertEqual(dormir(True, True), True, "Excelente! obtenido: True esperado: True")
         
         
         myTests().main()


   .. tab:: Ejercicio 2   

      .. activecode:: q6_2
         :nocodelens:

         Desarrolle la función ``alumnos_en_problemas`` que toma dos parámetros, 
         ``a_sonrie`` y ``b_sonrie``. a y b representan dos estudiantes.
         ``a_sonrie`` y ``b_sonrie`` indican si a y b sonríen. Cuando ambos 
         sonríen o ambos no están sonriendo tenemos problemas. ``alumnos_en_problemas`` 
         debe devolver ``True`` cuando hay problemas. De lo contrario, devolverá ``False``. 
         |br| |br|
         Ejemplos: |br|
         ``alumnos_en_problemas(True, True)`` -> ``True`` |br|
         ``alumnos_en_problemas(False, True)`` -> ``False`` |br|

         ~~~~
         def alumnos_en_problemas(a_sonrie, b_sonrie):


         ====
         from unittest.gui import TestCaseGui


         class myTests(TestCaseGui):
            def testOne(self):
               self.assertEqual(alumnos_en_problemas(True, True), True, "Esperado: True")
               self.assertEqual(alumnos_en_problemas(False, False), True, "Esperado: True")
               self.assertEqual(alumnos_en_problemas(True, False), False, "Esperado: False")
               self.assertEqual(alumnos_en_problemas(False, True), False, "Esperado: False")
         
         
         myTests().main()


   .. tab:: Ejercicio 3

      .. activecode:: q6_3
         :nocodelens:

         Desarrolle la función ``suma_doble`` que toma dos parámetros, ``a`` y ``b``.
         Ambos son números enteros. La función debe devolver la suma de ``a`` y ``b``.
         Sin embargo, si los números son iguales, devuelve el doble de la suma. |br| |br|
         Ejemplos: |br|
         ``suma_doble(1, 2)`` -> ``3`` |br|
         ``suma_doble(2, 2)`` -> ``8`` |br|

         ~~~~
         def suma_doble(a, b):


         ====
         from unittest.gui import TestCaseGui


         class myTests(TestCaseGui):
            def testOne(self):
               self.assertEqual(suma_doble(1, 2), 3, "Excelente! obtenido: 3 esperado: 3")
               self.assertEqual(suma_doble(3, 2), 5, "Excelente! obtenido: 5 esperado: 5")
               self.assertEqual(suma_doble(2, 2), 8, "Excelente! obtenido: 8 esperado: 8")
               self.assertEqual(suma_doble(-1, 0), -1, "Excelente! obtenido: -1 esperado: -1")
               self.assertEqual(suma_doble(0, 0), 0, "Excelente! obtenido: 0 esperado: 0")
               self.assertEqual(suma_doble(0, 1), 1, "Excelente! obtenido: 1 esperado: 1")
         
         
         myTests().main()


   .. tab:: Ejercicio 4

      .. activecode:: q6_4
         :nocodelens:

         Desarrolle la función ``diferencia_absoluta_21`` que toma un parámetro, ``n``, 
         y devuelve la diferencia absoluta entre ``n`` y 21 solo si ``n`` es menor 
         o igual a 21. Si es mayor, entonces devuelve el doble de la diferencia 
         absoluta entre el número y 21. **Recuerde**: ``abs(x)`` devuelve 
         el valor absoluto de x. |br| |br|   
         Ejemplos: |br|
         ``diferencia_absoluta_21(19)`` -> ``2`` |br|
         ``diferencia_absoluta_21(25)`` -> ``8`` |br|

         ~~~~
         def diferencia_absoluta_21(n):


         ====
         from unittest.gui import TestCaseGui


         class myTests(TestCaseGui):
            def testOne(self):
               self.assertEqual(diferencia_absoluta_21(19), 2, "Esperado: 2")
               self.assertEqual(diferencia_absoluta_21(10), 11, "Esperado: 11")
               self.assertEqual(diferencia_absoluta_21(21), 0, "Esperado: 0")
               self.assertEqual(diferencia_absoluta_21(22), 2, "Esperado: 2")
               self.assertEqual(diferencia_absoluta_21(25), 8, "Esperado: 8")
               self.assertEqual(diferencia_absoluta_21(30), 18, "Esperado: 18")
         
         
         myTests().main()


   .. tab:: Ejercicio 5

      .. activecode:: q6_5
         :nocodelens:

         Desarrolle la función ``problemas_con_loro`` que toma dos parámetros, 
         ``hablando`` que puede ser ``True`` o ``False``, y ``hora`` que toma un valor 
         entre 0 y 23. Tenemos un loro, y hay problemas si el loro está hablando 
         antes de las 7 horas o después de las 20 horas. Devolver ``True`` si hay 
         problemas o ``False`` si no los hay. |br| |br|
         Ejemplos: |br|
         ``problemas_con_loro(True, 6)`` -> ``True`` |br|
         ``problemas_con_loro(True, 20)`` -> ``False`` |br|

         ~~~~
         def problemas_con_loro(hablando, hora):


         ====
         from unittest.gui import TestCaseGui


         class myTests(TestCaseGui):
            def testOne(self):
               self.assertEqual(problemas_con_loro(True, 6), True, "Esperado: True")
               self.assertEqual(problemas_con_loro(True, 7), False, "Esperado: False")
               self.assertEqual(problemas_con_loro(True, 21), True, "Esperado: True")
               self.assertEqual(problemas_con_loro(True, 23), True, "Esperado: True")
               self.assertEqual(problemas_con_loro(True, 20), False, "Esperado: False")
               self.assertEqual(problemas_con_loro(False, 6), False, "Esperado: False")
               self.assertEqual(problemas_con_loro(False, 21), False, "Esperado: False")
         
         
         myTests().main()


   .. tab:: Ejercicio 6

      .. activecode:: q6_6
         :nocodelens:

         Desarrolle la función ``es_diez`` que toma dos parámetros, ``a`` y ``b``. 
         Devuelve ``True`` si uno de los parámetros es 10, o si la suma de ambos 
         es 10. De lo contrario, devuelve ``False``. |br| |br| 
         Ejemplos: |br|
         ``es_diez(9,10)`` -> ``True`` |br|
         ``es_diez(1,9)`` -> ``True`` |br|
         ``es_diez(8,3)`` -> ``False`` |br|

         ~~~~
         def es_diez(a, b):


         ====
         from unittest.gui import TestCaseGui


         class myTests(TestCaseGui):
            def testOne(self):
               self.assertEqual(es_diez(9, 10), True, "Esperado: True")
               self.assertEqual(es_diez(9, 9), False, "Esperado: False")
               self.assertEqual(es_diez(1, 9), True, "Esperado: True")
               self.assertEqual(es_diez(10, 1), True, "Esperado: True")
               self.assertEqual(es_diez(10, 10), True, "Esperado: True")
               self.assertEqual(es_diez(8, 2), True, "Esperado: True")
               self.assertEqual(es_diez(8, 3), False, "Esperado: False")
               self.assertEqual(es_diez(10, 42), True, "Esperado: True")
               self.assertEqual(es_diez(12, -2), True, "Esperado: True")
         
         
         myTests().main()


   .. tab:: Ejercicio 7

      .. activecode:: q6_7
         :nocodelens:

         Desarrolle la función ``distancia_10`` que toma a ``n`` 
         como parámetro, el cual es un número entero. Devuelve ``True`` si 
         la diferencia absoluta entre ``n`` y 100 o ``n`` y 200 es menor o 
         igual que 10. |br| |br|
         Ejemplos: |br| 
         ``distancia_10(93)`` -> ``True`` |br|
         ``distancia_10(90)`` -> ``True`` |br|
         ``distancia_10(89)`` -> ``False`` |br|
         ``distancia_10(210)`` -> ``True`` |br|
         ``distancia_10(211)`` -> ``False`` |br|

         ~~~~
         def distancia_10(n):


         ====
         from unittest.gui import TestCaseGui


         class myTests(TestCaseGui):
            def testOne(self):
               self.assertEqual(distancia_10(93), True, "Esperado: True")
               self.assertEqual(distancia_10(90), True, "Esperado: True")
               self.assertEqual(distancia_10(89), False, "Esperado: False")
               self.assertEqual(distancia_10(110), True, "Esperado: True")
               self.assertEqual(distancia_10(111), False, "Esperado: False")
               self.assertEqual(distancia_10(121), False, "Esperado: False")
               self.assertEqual(distancia_10(0), False, "Esperado: False")
               self.assertEqual(distancia_10(5), False, "Esperado: False")
               self.assertEqual(distancia_10(191), True, "Esperado: True")
               self.assertEqual(distancia_10(189), False, "Esperado: False")
               self.assertEqual(distancia_10(190), True, "Esperado: True")
               self.assertEqual(distancia_10(200), True, "Esperado: True")
               self.assertEqual(distancia_10(210), True, "Esperado: True")
               self.assertEqual(distancia_10(211), False, "Esperado: False")
               self.assertEqual(distancia_10(290), False, "Esperado: False")
         
         
         myTests().main()


   .. tab:: Ejercicio 8

      .. activecode:: q6_8
         :nocodelens:

         Desarrolle la función ``remover_iesimo`` que recibe una cadena ``s`` no vacía 
         y un entero positivo ``i``, y devuelva la cadena original sin el i-ésimo carácter. 
         |br| |br| 
         Ejemplos: |br|
         ``remover_iesimo("Hello", 1)`` -> ``"ello"`` |br|
         ``remover_iesimo("Hi", 2)`` -> ``"H"`` |br|
         ``remover_iesimo("PyZombiess", 10)`` -> ``"PyZombies"`` |br|

         ~~~~
         def remover_iesimo(s, i):


         ====
         from unittest.gui import TestCaseGui


         class myTests(TestCaseGui):
            def testOne(self):
               self.assertEqual(quitar_caracter("Hi", 0), "i", "Esperado: i")
               self.assertEqual(quitar_caracter("Hi", 1), "H", "Esperado: H")
               self.assertEqual(quitar_caracter("code", 0), "ode", "Esperado: ode")
               self.assertEqual(quitar_caracter("code", 1), "cde", "Esperado: cde")
               self.assertEqual(quitar_caracter("code", 2), "coe", "Esperado: coe")
               self.assertEqual(quitar_caracter("code", 3), "cod", "Esperado: cod")
               self.assertEqual(quitar_caracter("gatito", 1), "gtito", "Esperado: gtito")
               self.assertEqual(quitar_caracter("gatito", 0), "atito", "Esperado: atito")
               self.assertEqual(quitar_caracter("gatito", 4), "gatio", "Esperado: gatio")
               self.assertEqual(quitar_caracter("chocolate", 8), "chocolat", "Esperado: chocolat")
         
         
         myTests().main()


   .. tab:: Ejercicio 9

      .. activecode:: q6_9
         :nocodelens:

         Desarrolle la función ``intercambiar`` que toma a ``s`` como parámetro, 
         representando una cadena. Si ``s`` tiene un tamaño menor o igual a 1, se 
         devuelve la misma cadena. De lo contrario, la primera y última letra de ``s`` 
         se intercambian. |br| |br| 
         Ejemplos: |br|
         ``intercambiar("codigo")`` -> ``"oodigc"`` |br|
         ``intercambiar("a")`` -> ``"a"`` |br|
         ``intercambiar("ab")`` -> ``"ba"`` |br|

         ~~~~
         def intercambiar(s):


         ====
         from unittest.gui import TestCaseGui


         class myTests(TestCaseGui):
            def testOne(self):
               self.assertEqual(intercambiar("code"), "eodc", "Esperado: eodc")
               self.assertEqual(intercambiar("a"), "a", "Esperado: a")
               self.assertEqual(intercambiar("ab"), "ba", "Esperado: ba")
               self.assertEqual(intercambiar("abc"), "cba", "Esperado: cba")
               self.assertEqual(intercambiar(" "), " ", "Esperado: ' '")
               self.assertEqual(intercambiar("nythoP"), "Python", "Esperado: Python")
               self.assertEqual(intercambiar("hello"), "oellh", "Esperado: oellh")
               self.assertEqual(intercambiar("Chocolate"), "ehocolatC", "Esperado: ehocolatC")
         
         
         myTests().main()
