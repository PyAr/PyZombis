========
Quiz - 5
========

.. |br| raw:: html

   <br />


Ejercicio 1
-----------

..  clickablearea:: q5_1
    :question: El siguiente programa declara una variable en el lugar equivocado del código. Su tarea es seleccionar la declaración incorrecta y seleccionar la línea correcta donde debería ir. 
    :iscode:
    :feedback: Recuerda, que no puedes usar una variable sin haberla declarado anteriormente.

    :click-incorrect:x = 2:endclick:
    :click-correct:     :endclick:
    :click-incorrect:si y > 8 entonces::endclick:
        :click-correct:y = 5:endclick:
        :click-incorrect:y = y * 2:endclick:

    :click-incorrect:en caso contrario::endclick:
        :click-incorrect:x = x * 2::endclick:
        :click-incorrect:imprime (x + y)::endclick:


Ejercicio 2
-----------

..  activecode:: q5_2
    :nocodelens:

    Traduzca el programa anterior (con la declaración en el lugar correcto) al lenguaje Python utilizando el siguiente bloque de código. |br|
    ~~~~

    ====


Ejercicio 3
-----------

..  fillintheblank:: q5_3

    ¿Qué imprime el programa anterior?

    -   :9: Tu respuesta es correcta, ¡buen trabajo!
        :.*: Tu respuesta es incorrecta, intenta nuevamente.


Ejercicio 4
-----------

..  code-block:: none

    para i = 1 hasta 9:
        si i != 3 entonces:
            para j = 1 hasta 6:
                imprimir("Hola")

.. raw:: html

   <br/>

..  activecode:: q5_4
    :nocodelens:

    Traduzca el programa anterior al lenguaje Python utilizando el siguiente bloque de código. |br|
    **Nota**: en nuestro pseudolenguaje, el ciclo incluye los extremos, es decir, 1 a 4 significa 1, 2, 3, 4. |br|
    ~~~~

    ====


Ejercicio 5
-----------

..  fillintheblank:: q5_5

    ¿Cuántas veces el programa anterior imprime ``"Hola"``?

    -   :48: Tu respuesta es correcta, ¡buen trabajo!
        :.*: Tu respuesta es incorrecta, intenta nuevamente.


Ejercicio 6
-----------

..  activecode:: q5_6
    :nocodelens:
    
    Desarrolle la función ``pares_divisibles_7`` que recibe como parámetros dos enteros positivos, ``inicio`` y ``fin`` que representan el inicio y el fin de un intervalo de números, la función tiene que devolver la cantidad de números que son pares y también divisibles por 7. |br| |br|
    Ejemplos: |br|
    ``pares_divisibles_7(1, 7)`` -> ``0`` |br|
    ``pares_divisibles_7(25, 123)`` -> ``7`` |br|
    ``pares_divisibles_7(13, 245)`` -> ``17`` |br|
    
    ~~~~
    def pares_divisibles_7(inicio, fin):

        

    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(pares_divisibles_7(1, 7), 0, "Esperado: 0")
            self.assertEqual(pares_divisibles_7(25, 123), 7, "Esperado: 7")
            self.assertEqual(pares_divisibles_7(13, 245), 17, "Esperado: 17")
            self.assertEqual(pares_divisibles_7(1300, 2460), 83, "Esperado: 83")
            self.assertEqual(pares_divisibles_7(1, 2460), 175, "Esperado: 175")


    myTests().main()


Ejercicio 7
-----------

..  fillintheblank:: q5_7

    Utilice la función creada en el ejercicio anterior para responder ¿Cuántos números son pares y también divisibles por 7 entre 1067 y 3627 (inclusive)?

    -   :183: Tu respuesta es correcta, ¡buen trabajo!
        :.*: Tu respuesta es incorrecta, intenta nuevamente.


Ejercicio 8
-----------

..  activecode:: q5_8
    :nocodelens:

    Daniela es una persona muy supersticiosa. Para ella, un número tiene **suerte** si contiene el dígito ``2`` pero no el ``7``. Ella además es muy curiosa y está interesada en saber ¿cuántos números de la suerte hay en un intervalo de números (incluido los extremos)?. Para ello le ha solicitado a usted que haga la función llamada ``cuantos_tienen_suerte``,  que recibe como parámetros dos enteros positivos, ``inicio`` y ``fin`` que representan el inicio y el fin de un intervalo de números, la función tiene que devolver la cantidad de números que tienen **suerte**. |br| |br|
    Ejemplos: |br|
    ``cuantos_tienen_suerte(1, 7)`` -> ``1`` |br|
    ``cuantos_tienen_suerte(1, 20)`` -> ``3`` |br|
    ``cuantos_tienen_suerte(25, 123)`` -> ``16`` |br|
    ``cuantos_tienen_suerte(13, 245)`` -> ``74`` |br|
    
    ~~~~
    def cuantos_tienen_suerte(inicio, fin):

        

    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(cuantos_tienen_suerte(1, 1), 0, "Esperado: 0")
            self.assertEqual(cuantos_tienen_suerte(1, 7), 1, "Esperado: 1")
            self.assertEqual(cuantos_tienen_suerte(1, 20), 3, "Esperado: 3")
            self.assertEqual(cuantos_tienen_suerte(25, 123), 16, "Esperado: 16")
            self.assertEqual(cuantos_tienen_suerte(1300, 2460), 481, "Esperado: 481")
            self.assertEqual(cuantos_tienen_suerte(13, 245), 74, "Esperado: 74")


    myTests().main()


Ejercicio 9
-----------

..  fillintheblank:: q5_9

    Utilice la función creada en el ejercicio anterior para responder ¿Cuántos números tienen suerte entre 18644 y 33087 (inclusive)?

    -   :7995: Tu respuesta es correcta, ¡buen trabajo!
        :.*: Tu respuesta es incorrecta, intenta nuevamente.


Ejercicio 10
------------

..  activecode:: q5_10
    :nocodelens:

    En el tranquilo pueblo rural de *Ponteironuloville*, todos los teléfonos tienen 6 dígitos. La compañía telefónica establece las siguientes reglas sobre los números: |br|

    1. No puede haber dos dígitos idénticos consecutivos, porque esto es aburrido
    2. La suma de los dígitos debe ser par, porque esto es legal
    3. El último dígito no puede ser el mismo que el primero, porque eso es mala suerte.

    Entonces, dadas estas reglas perfectamente razonables, bien diseñadas y maduras, desarrolle la función que se llama ``es_numero_ponteironuloville`` que recibe una cadena de enteros positivos y devuelve ``True`` si el número es valido de acuerdo a las reglas de *Ponteironuloville* y ``False`` en caso contrario.
    |br| |br|

    Ejemplos: |br|
    ``es_numero_ponteironuloville("123457")`` -> ``True`` |br|
    ``es_numero_ponteironuloville("234562")`` -> ``False`` |br|
    ``es_numero_ponteironuloville("222222")`` -> ``False`` |br|
    ``es_numero_ponteironuloville("123456")`` -> ``False`` |br|
    ``es_numero_ponteironuloville("312214")`` -> ``False`` |br|
    ``es_numero_ponteironuloville("312312")`` -> ``True`` |br|

    ~~~~
    def es_numero_ponteironuloville(numero):

        

    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(es_numero_ponteironuloville("123457"), True, "Esperado: True")
            self.assertEqual(es_numero_ponteironuloville("234562"), False, "Esperado: False")
            self.assertEqual(es_numero_ponteironuloville("304706"), True, "Esperado: True")
            self.assertEqual(es_numero_ponteironuloville("222222"), False, "Esperado: False")
            self.assertEqual(es_numero_ponteironuloville("123456"), False, "Esperado: False")
            self.assertEqual(es_numero_ponteironuloville("312214"), False, "Esperado: False")
            self.assertEqual(es_numero_ponteironuloville("312312"), True, "Esperado: True")
            self.assertEqual(es_numero_ponteironuloville("131313"), True, "Esperado: True")
            self.assertEqual(es_numero_ponteironuloville("249184"), True, "Esperado: True")
            self.assertEqual(es_numero_ponteironuloville("012445"), False, "Esperado: False")


    myTests().main()


Ejercicio 11
------------

..  activecode:: q5_11
    :nocodelens:
    :include: q5_10

    Sabiendo que la función ``split()`` divide una cadena en múltiples cadenas, utilice la función creada en el ejercicio anterior (**OBLIGATORIO** haberla terminado antes y haber pasado todas las pruebas) para terminar la función ``contar_validos`` que devuelve la cantidad de números válidos de la lista de números dada en el siguiente bloque de código. |br| |br|
    **Nota**: la lista de números es una cadena, utilice sabiamente la función ``split()`` para obtener un arreglo de cadenas.
    ~~~~
    lista_numeros = """236043 237330 239636 240138 242123 246224 249183 252936
        254711 257200 257607 261424 263814 266794 268649 273050
        275001 277606 278997 283331 287104 287953 289137 291591
        292559 292946 295180 295566 297529 300400 304707 306931
        310638 313595 318449 319021 322082 323796 326266 326880
        327249 329914 334392 334575 336723 336734 338808 343269
        346040 350113 353631 357154 361633 361891 364889 365746
        365749 366426 369156 369444 369689 372896 374983 375223
        379163 380712 385640 386777 388599 389450 390178 392943
        394742 395921 398644 398832 401149 402219 405364 408088
        412901 417683 422267 424767 426613 430474 433910 435054
        440052 444630 447852 449116 453865 457631 461750 462985
        463328 466458 469601 473108 476773 477956 481991 482422
        486195 488359 489209 489388 491928 496569 496964 497901
        500877 502386 502715 507617 512526 512827 513796 518232
        521455 524277 528496 529345 531231 531766 535067 535183
        536593 537360 539055 540582 543708 547492 550779 551595
        556493 558807 559102 562050 564962 569677 570945 575447
        579937 580112 580680 582458 583012 585395 586244 587393
        590483 593112 593894 594293 597525 598184 600455 600953
        601523 605761 608618 609198 610141 610536 612636 615233
        618314 622752 626345 626632 628889 629457 629643 633673
        637656 641136 644176 644973 647617 652218 657143 659902
        662224 666265 668010 672480 672695 676868 677125 678315"""

    def contar_validos():
        contador = 0
        """
            Escriba su codigo aqui, use la variable creada
        """
        return contador
    ====


Ejercicio 12
------------

..  fillintheblank:: q5_12

    Utilice la función creada en el ejercicio anterior para responder ¿Cuántos números de la lista son válidos de acuerdo a las reglas de *Ponteironuloville*?

    -   :39: Tu respuesta es correcta, ¡buen trabajo!
        :.*: Tu respuesta es incorrecta, intenta nuevamente.