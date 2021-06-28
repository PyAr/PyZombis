=========
Quiz - 9
=========

.. |br| raw:: html

   <br />


Ejercicio 1
-----------

.. activecode:: q9_1
   :nocodelens:

   Defina una función ``primer_o_ultimo_6`` que compruebe si 6 es el primer 
   o el último elemento en la lista de números ``numeros`` que se le pase como parámetro. 
   Si lo es, devolver ``True``, de lo contrario devolver ``False``. |br| |br|
   Ejemplos: |br|
   ``primer_o_ultimo_6([1, 2, 6])`` -> ``True`` |br|
   ``primer_o_ultimo_6([6, 1, 2, 3])`` -> ``True`` |br|
   ``primer_o_ultimo_6([3, 2, 1])`` -> ``False`` |br|

   ~~~~
   def primer_o_ultimo_6(numeros):

       
   ====
   from unittest.gui import TestCaseGui


   class myTests(TestCaseGui):
   
       def testOne(self):
           self.assertEqual(primer_o_ultimo_6([1, 2, 6]), True, "Esperado: True")
           self.assertEqual(primer_o_ultimo_6([3, 6]), True, "Esperado: True")
           self.assertEqual(primer_o_ultimo_6([3, 6]), True, "Esperado: True")
           self.assertEqual(primer_o_ultimo_6([3]), False, "Esperado: False")
           self.assertEqual(
                   primer_o_ultimo_6([6, 1, 2, 3]),
                   True,
                   "Esperado: True"
           )
           self.assertEqual(
                   primer_o_ultimo_6([3, 2, 1]),
                   False,
                   "Esperado: False"
           )
           self.assertEqual(
                   primer_o_ultimo_6([3, 6, 1]),
                   False,
                   "Esperado: False"
           )
   
   
   myTests().main()


Ejercicio 2
-----------

.. activecode:: q9_2
   :nocodelens:

   Defina una función ``extremos_iguales`` que tome una lista ``numeros`` como parámetro, 
   y regrese ``True`` si la lista de números tiene al menos un elemento y el 
   primer elemento es igual al último. De lo contrario devolver ``False``. |br| |br|
   Ejemplos: |br|
   ``extremos_iguales([1, 2, 3])`` -> ``False`` |br|
   ``extremos_iguales([1, 2, 3, 1])`` -> ``True`` |br|
   ``extremos_iguales([1, 2, 1])`` -> ``True`` |br|

   ~~~~
   def extremos_iguales(numeros):

       
   ====
   from unittest.gui import TestCaseGui


   class myTests(TestCaseGui):
   
       def testOne(self):
           self.assertEqual(extremos_iguales([1, 2, 3]), False, "Esperado: False")
           self.assertEqual(extremos_iguales([1, 2, 1]), True, "Esperado: True")
           self.assertEqual(extremos_iguales([7]), True, "Esperado: True")
           self.assertEqual(extremos_iguales([]), False, "Esperado: False")
           self.assertEqual(extremos_iguales([7, 7]), True, "Esperado: True")
           self.assertEqual(
                   extremos_iguales([1, 2, 3, 1]),
                   True,
                   "Esperado: True")
   
   
   myTests().main()


Ejercicio 3
-----------

.. activecode:: q9_3
   :nocodelens:

   Defina una función ``extremo_comun`` que tome dos listas ``a`` y ``b`` 
   como parámetros, y verifique que los dos primeros números de ambas listas
   son iguales o que los dos últimos números de ambas listas son iguales. 
   Suponga que ambas listas tienen por lo menos un elemento. |br| |br|
   Ejemplos: |br|
   ``extremo_comun([1, 2, 3], [7, 3])`` -> ``True`` |br|
   ``extremo_comun([1, 2, 3], [7, 3, 2])`` -> ``False`` |br|
   ``extremo_comun([1, 2, 3], [1, 3])`` -> ``True`` |br|

   ~~~~
   def extremo_comun(a, b):


   ====
   from unittest.gui import TestCaseGui


   class myTests(TestCaseGui):
   
       def testOne(self):
           self.assertEqual(extremo_comun([1, 2, 3], [1]), True, "Esperado: True")
           self.assertEqual(
                   extremo_comun([1, 2, 3], [2]),
                   False,
                   "Esperado: False"
           )
           self.assertEqual(
                   extremo_comun([1, 2, 3], [7, 3]),
                   True,
                   "Esperado: True"
           )
           self.assertEqual(
                   extremo_comun([1, 2, 3], [7, 3, 2]),
                   False,
                   "Esperado: False"
           )
           self.assertEqual(
                   extremo_comun([1, 2, 3], [1, 3]),
                   True,
                   "Esperado: True"
           )
   
   
   myTests().main()


Ejercicio 4
-----------

.. activecode:: q9_4
   :nocodelens:

   Defina una función ``mayor_extremo`` que tome la lista ``numeros`` como parámetro, 
   compare los extremos de la lista y regrese una nueva lista del mismo tamaño 
   donde todos los elementos son el extremo de mayor magnitud. |br| |br|
   Ejemplos: |br|
   ``mayor_extremo([1, 2, 3])`` -> ``[3, 3, 3]`` |br|
   ``mayor_extremo([1, 3, 2])`` -> ``[2, 2, 2]`` |br|

   ~~~~
   def mayor_extremo(numeros):

       
   ====
   from unittest.gui import TestCaseGui


   class myTests(TestCaseGui):
   
       def testOne(self):
           self.assertEqual(
                   mayor_extremo([1, 2, 3]),
                   [3, 3, 3],
                   "Esperado: [3,3,3]"
           )
           self.assertEqual(
                   mayor_extremo([11, 5, 9]),
                   [11, 11, 11],
                   "Esperado: [11,11,11]"
           )
           self.assertEqual(
                   mayor_extremo([2, 11, 3]),
                   [3, 3, 3],
                   "Esperado: [3,3,3]"
           )
           self.assertEqual(
                   mayor_extremo([11, 3, 3]),
                   [11, 11, 11],
                   "Esperado: [11,11,11]"
           )
           self.assertEqual(
                   mayor_extremo([3, 11, 11]),
                   [11, 11, 11],
                   "Esperado: [11,11,11]"
           )
           self.assertEqual(
                   mayor_extremo([2, 2, 2]),
                   [2, 2, 2],
                   "Esperado: [2,2,2]"
           )
           self.assertEqual(
                   mayor_extremo([2, 11, 2]),
                   [2, 2, 2],
                   "Esperado: [2,2,2]"
           )
           self.assertEqual(
                   mayor_extremo([0, 0, 1]),
                   [1, 1, 1],
                   "Esperado: [1,1,1]"
           )
   
   
   myTests().main()


Ejercicio 5
-----------

.. activecode:: q9_5
   :nocodelens:

   Defina una función ``sumar_primeros_dos`` que tome la lista ``numeros`` 
   de número enteros de cualquier tamaño como parámetro, y regrese la suma 
   de los dos primeros elementos. Si la lista tiene menos de dos elementos, sume 0s. |br| |br|
   Ejemplos: |br|
   ``sumar_primeros_dos([1, 2, 3])`` -> ``3`` |br|
   ``sumar_primeros_dos([1, 1])`` -> ``2`` |br|
   ``sumar_primeros_dos([])`` -> ``0`` |br|

   ~~~~
   def sumar_primeros_dos(numeros):

       
   ====
   from unittest.gui import TestCaseGui


   class myTests(TestCaseGui):
   
       def testOne(self):
           self.assertEqual(sumar_primeros_dos([1, 2, 3]), 3, "Esperado: 3")
           self.assertEqual(sumar_primeros_dos([1, 1]), 2, "Esperado: 2")
           self.assertEqual(sumar_primeros_dos([1, 1, 1, 1]), 2, "Esperado: 2")
           self.assertEqual(sumar_primeros_dos([1, 2]), 3, "Esperado: 3")
           self.assertEqual(sumar_primeros_dos([1]), 1, "Esperado: 1")
           self.assertEqual(sumar_primeros_dos([]), 0, "Esperado: 0")
           self.assertEqual(sumar_primeros_dos([4, 5, 6]), 9, "Esperado: 9")
           self.assertEqual(sumar_primeros_dos([4]), 4, "Esperado: 4")
           self.assertEqual(sumar_primeros_dos([4, -12, 5]), -8, "Esperado: -8")
           self.assertEqual(
                   sumar_primeros_dos([-200, 35, 10, 8]),
                   -165,
                   "Esperado: -165"
           )
   
   
   myTests().main()
   

Ejercicio 6
-----------

.. activecode:: q9_6
   :nocodelens:

   Defina una función ``al_medio`` que tome dos listas ``a`` y ``b`` de 
   números enteros como parámetros, y regrese una lista de tamaño 2 que 
   contenga los elementos de en medio de ``a`` y ``b``. Suponga que las listas 
   tienen un tamaño impar. |br| |br|
   Ejemplos: |br|
   ``al_medio([1, 2, 3], [4, 5, 6])`` -> ``[2, 5]`` |br|
   ``al_medio([7, 7, 7], [3, 8, 0])`` -> ``[7, 8]`` |br|
   ``al_medio([5, 2, 9], [1, 4, 5])`` -> ``[2, 4]`` |br|

   ~~~~
   def al_medio(a, b):

       
   ====
   from unittest.gui import TestCaseGui


   class myTests(TestCaseGui):
   
       def testOne(self):
           self.assertEqual(
                   al_medio([1, 2, 3], [4, 5, 6]),
                   [2, 5],
                   "Esperado: [2,5]"
           )
           self.assertEqual(
                   al_medio([7, 7, 7], [3, 8, 0]),
                   [7, 8],
                   "Esperado: [7,8]"
           )
           self.assertEqual(
                   al_medio([5, 2, 9], [1, 4, 5]),
                   [2, 4],
                   "Esperado: [2,4]"
           )
           self.assertEqual(
                   al_medio([1, 9, 7], [4, 8, 8]),
                   [9, 8],
                   "Esperado: [9,8]"
           )
           self.assertEqual(
                   al_medio([1, 2, 3, 10, 2], [3, 1, 4]),
                   [3, 1],
                   "Esperado: [2,1]"
           )
           self.assertEqual(
                   al_medio([1, 2, -2, 4, 1], [1]),
                   [-2, 1],
                   "Esperado: [2,1]"
           )
   
   
   myTests().main()


Ejercicio 7
-----------

.. activecode:: q9_7
   :nocodelens:

   Define una función ``cita_de_lujo``. La función tomará dos parámetros 
   ``mi_punt`` y ``pareja_punt``. Suponga que va un restaurante con su pareja. 
   Los parámetros representan la puntuación de la ropa que llevan puesta del 0 al 10. 
   Cuanto más alto es el puntaje, más elegante se han vestido. El puntaje de su ropa 
   determinará si les dan una mesa en el restaurante o no, de acuerdo a las siguientes reglas:|br|

   - Si la puntuación de la ropa de uno de los dos es menor o igual a 2, 
     no tendrán derecho a una mesa (``0``). |br|
   - Si las calificaciones son más altas, entonces si una de las dos es muy 
     elegante (puntuación >= 8) sí tendrán derecho a mesa (``2``). |br|
   - De lo contrario, la respuesta es tal vez (``1``). |br|
  
   Entonces ``cita_de_lujo`` devuelve un número entre 0, 1 y 2 que significan No, Tal vez y Si respectivamente |br| |br|
   Ejemplos: |br|   
   ``cita_de_lujo(5, 10)`` -> ``2`` |br|
   ``cita_de_lujo(5, 2)`` -> ``0`` |br|
   ``cita_de_lujo(5, 5)`` -> ``1`` |br|

   ~~~~
   def cita_de_lujo(mi_punt, pareja_punt):

       
   ====
   from unittest.gui import TestCaseGui


   class myTests(TestCaseGui):
   
       def testOne(self):
           self.assertEqual(cita_de_lujo(5, 10), 2, "Esperado: 2")
           self.assertEqual(cita_de_lujo(5, 2), 0, "Esperado: 0")
           self.assertEqual(cita_de_lujo(5, 5), 1, "Esperado: 1")
           self.assertEqual(cita_de_lujo(3, 3), 1, "Esperado: 1")
           self.assertEqual(cita_de_lujo(10, 2), 0, "Esperado: 0")
           self.assertEqual(cita_de_lujo(2, 9), 0, "Esperado: 0")
           self.assertEqual(cita_de_lujo(9, 9), 2, "Esperado: 2")
           self.assertEqual(cita_de_lujo(10, 5), 2, "Esperado: 2")
           self.assertEqual(cita_de_lujo(2, 2), 0, "Esperado: 0")
           self.assertEqual(cita_de_lujo(3, 7), 1, "Esperado: 1")
           self.assertEqual(cita_de_lujo(2, 7), 0, "Esperado: 0")
           self.assertEqual(cita_de_lujo(6, 2), 0, "Esperado: 0")
   
   
   myTests().main()


Ejercicio 8
-----------

.. activecode:: q9_8
   :nocodelens:

   El equipo de fútbol *ardillas* normalmente juega cuando la temperatura 
   está entre 60 y 90 grados Fahrenheit, pero cuando es verano la temperatura 
   superior a la que juegan las *ardillas* es de 100 grados Fahrenheit en lugar de 90.
   Defina una función ``juegan_ardillas`` que tome 2 parámetros, ``temp`` representando 
   la temperatura, y ``es_verano``, que puede ser ``True`` si es verano o ``False`` si no lo es. 
   La función debe regresar ``True`` si las *ardillas* juegan o ``False`` si no. |br| |br|
   Ejemplos: |br|
   ``juegan_ardillas(70, False)`` -> ``True`` |br|
   ``juegan_ardillas(95, False)`` -> ``False`` |br|
   ``juegan_ardillas(95, True)`` -> ``True`` |br|

   ~~~~
   def juegan_ardillas(temp, es_verano):
 

   ====
   from unittest.gui import TestCaseGui


   class myTests(TestCaseGui):
   
       def testOne(self):
           self.assertEqual(juegan_ardillas(70, False), True, "Esperado: True")
           self.assertEqual(juegan_ardillas(95, False), False, "Esperado: False")
           self.assertEqual(juegan_ardillas(95, True), True, "Esperado: True")
           self.assertEqual(juegan_ardillas(90, False), True, "Esperado: True")
           self.assertEqual(juegan_ardillas(90, True), True, "Esperado: True")
           self.assertEqual(juegan_ardillas(50, False), False, "Esperado: False")
           self.assertEqual(juegan_ardillas(50, True), False, "Esperado: True")
           self.assertEqual(juegan_ardillas(100, False), False, "Esperado: False")
           self.assertEqual(juegan_ardillas(100, True), True, "Esperado: True")
           self.assertEqual(juegan_ardillas(105, True), False, "Esperado: True")
           self.assertEqual(juegan_ardillas(59, False), False, "Esperado: False")
           self.assertEqual(juegan_ardillas(59, True), False, "Esperado: True")
           self.assertEqual(juegan_ardillas(60, False), True, "Esperado: False")
   
   
   myTests().main()


Ejercicio 9
-----------

.. activecode:: q9_9
   :nocodelens:

   Simulemos un velocímetro que te aplica una multa en caso de exceder la velociad máxima:

   - Velocidad <= 60: sin multa |br|
   - Velocidad entre 61 y 80: multa media |br|
   - Velocidad superior a 80: multa severa |br|
 
   Si es tu cumpleaños la velocidad puede ser 5 km/h mayor en todos los casos. |br|
   Defina una función ``aplicar_multa`` que reciba como parámetros a ``velocidad`` y 
   ``cumplo_anios``. El primero representa la velocidad a la que ibas, y el segundo 
   puede ser ``True`` si es tu cumpleaños o ``False`` si no lo es. Esta función debe 
   regresar 0, 1 o 2 de acuerdo a lo siguiente: |br|

   - sin multa = 0 |br|
   - multa media = 1 |br|
   - multa severa = 2 |br| |br|
 
   Ejemplos: |br|
   ``aplicar_multa(60, False)`` -> ``0`` |br|
   ``aplicar_multa(65, False)`` -> ``1`` |br|
   ``aplicar_multa(65, True)`` -> ``0``  |br|
   ``aplicar_multa(80, False)`` -> ``1`` |br|

   ~~~~
   def aplicar_multa(velocidad, cumplo_anios):

       
   ====
   from unittest.gui import TestCaseGui


   class myTests(TestCaseGui):
   
       def testOne(self):
           self.assertEqual(aplicar_multa(20, False), 0, "Esperado: 0")
           self.assertEqual(aplicar_multa(20, True), 0, "Esperado: 0")
           self.assertEqual(aplicar_multa(60, False), 0, "Esperado: 0")
           self.assertEqual(aplicar_multa(65, False), 1, "Esperado: 1")
           self.assertEqual(aplicar_multa(65, True), 0, "Esperado: 0")
           self.assertEqual(aplicar_multa(80, False), 1, "Esperado: 1")
           self.assertEqual(aplicar_multa(85, False), 2, "Esperado: 2")
           self.assertEqual(aplicar_multa(85, True), 1, "Esperado: 1")
           self.assertEqual(aplicar_multa(70, False), 1, "Esperado: 1")
           self.assertEqual(aplicar_multa(75, False), 1, "Esperado: 1")
           self.assertEqual(aplicar_multa(75, True), 1, "Esperado: 1")
           self.assertEqual(aplicar_multa(40, False), 0, "Esperado: 0")
           self.assertEqual(aplicar_multa(40, True), 0, "Esperado: 0")
           self.assertEqual(aplicar_multa(90, False), 2, "Esperado: 2")
           self.assertEqual(aplicar_multa(90, True), 2, "Esperado: 2")
   
   
   myTests().main()


Ejercicio 10
------------

.. activecode:: q9_10
   :nocodelens:
 
   Defina una función ``poner_alarma`` que tome dos parámetros: El primer parámetro 
   ``dia`` es un número del 0-6 que representa un día de la semana de acuerdo a lo siguiente: |br|
   día: 0 = domingo, 1 = lunes, 2 = martes, ..., 6 = sábado. |br|
   El segundo parámetro ``vacaciones`` tomará el valor ``True`` si estás de vacaciones o 
   ``False`` si no lo estás. La función regresará un string que indica cuándo sonará 
   el despertador de acuerdo a lo siguiente: |br|

   - Días de la semana: '07:00' |br|
   - Fines de semana: '10:00' |br|
   
   A menos que esté de vacaciones, en este caso: |br|

   - Días de la semana: '10:00' |br|
   - Fines de semana: 'libre' |br| |br|
 
   Ejemplos: |br|
   ``poner_alarma(1, False)`` -> ``"7:00"`` |br|
   ``poner_alarma(1, True)`` -> ``"10:00"`` |br|
   ``poner_alarma(6, True)`` -> ``"libre"`` |br|
   ``poner_alarma(0, False)`` -> ``"10:00"`` |br|

   ~~~~
   def poner_alarma(dia, vacaciones):

       
   ====
   from unittest.gui import TestCaseGui


   class myTests(TestCaseGui):
       def testOne(self):
           self.assertEqual(poner_alarma(1, False), "7:00", "Esperado: 7:00")
           self.assertEqual(poner_alarma(5, False), "7:00", "Esperado: 7:00")
           self.assertEqual(poner_alarma(0, False), "10:00", "Esperado: 10:00")
           self.assertEqual(poner_alarma(6, False), "10:00", "Esperado: 10:00")
           self.assertEqual(poner_alarma(0, True), "libre", "Esperado: libre")
           self.assertEqual(poner_alarma(6, True), "libre", "Esperado: libre")
           self.assertEqual(poner_alarma(1, True), "10:00", "Esperado: 10:00")
           self.assertEqual(poner_alarma(3, True), "10:00", "Esperado: 10:00")
           self.assertEqual(poner_alarma(5, True), "10:00", "Esperado: 10:00")
   
   
   myTests().main()
