=========
Quiz - 9
=========

.. |br| raw:: html

   <br />


.. activecode:: first_last6
   :nocodelens:

   A. first_last6 |br|
   Defina una función ``first_last6`` que compruebe si 6 es el primer o el último elemento en la lista de números que se le pase como argumento.|br| |br|
   Ejemplos:|br|
   ``first_last6([1, 2, 6])`` -> True |br|
   ``first_last6([6, 1, 2, 3])`` -> True |br|
   ``first_last6([3, 2, 1])`` -> False |br|

   ~~~~
   def first_last6(nums):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(first_last6([1, 2, 6]), True,"Esperado: True")
           self.assertEqual(first_last6([6, 1, 2, 3]), True,"Esperado: True")
           self.assertEqual(first_last6([3, 2, 1]), False,"Esperado: False")
           self.assertEqual(first_last6([3, 6, 1]), False,"Esperado: False")
           self.assertEqual(first_last6([3, 6]), True,"Esperado: True")
           self.assertEqual(first_last6([3, 6]), True,"Esperado: True")
           self.assertEqual(first_last6([3]), False,"Esperado: False")
      

   myTests().main()



.. activecode:: same_first_last
   :nocodelens:

   B. same_first_last |br|
   Defina una función ``same_first_last`` que tome una lista como argumento, y regrese True si la lista de números tiene al menos un elemento y el primer elemento es igual al último. |br||br|
   Ejemplos:|br|
   ``same_first_last([1, 2, 3])`` -> False |br|
   ``same_first_last([1, 2, 3, 1])`` -> True |br|
   ``same_first_last([1, 2, 1])`` -> True |br|

   ~~~~
   def same_first_last(nums):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(same_first_last([1, 2, 3]), False,"Esperado: False")
           self.assertEqual(same_first_last([1, 2, 3, 1]), True,"Esperado: True")
           self.assertEqual(same_first_last([1, 2, 1]), True,"Esperado: True")
           self.assertEqual(same_first_last([7]), True,"Esperado: True")
           self.assertEqual(same_first_last([]), False,"Esperado: False")
           self.assertEqual(same_first_last([7, 7]), True,"Esperado: True")
         

   myTests().main()



.. activecode:: common_end
   :nocodelens:

   C. common_end |br|
   Defina una función ``common_end`` que tome dos dos listas ``a`` y ``b`` como argumentos, y verifique que los dos primeros números son iguales o que los dos últimos números son iguales. Suponga que ambas listas tienen por lo menos un elemento.|br||br|
   Ejemplos:|br|
   ``common_end([1, 2, 3], [7, 3])`` -> True |br|
   ``common_end([1, 2, 3], [7, 3, 2])`` -> False |br|
   ``common_end([1, 2, 3], [1, 3])`` -> True |br|

   ~~~~
   def common_end(a, b):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(common_end([1, 2, 3], [7, 3]), True,"Esperado: True")
           self.assertEqual(common_end([1, 2, 3], [7, 3, 2]), False,"Esperado: False")
           self.assertEqual(common_end([1, 2, 3], [1, 3]), True,"Esperado: True")
           self.assertEqual(common_end([1, 2, 3], [1]), True,"Esperado: True")
           self.assertEqual(common_end([1, 2, 3], [2]), False,"Esperado: False")
          
         
   myTests().main()



.. activecode:: maior_ponta
   :nocodelens:

   D. mayor_extremo |br|
   Defina una función ``mayor_extremo`` que tome una lista como argumento, compare los extremos de la lista y regrese una nueva lista del mismo tamaño donde todos los elementos son el extremo de mayor magnitud. |br||br|
   Ejemplos:|br|
   ``mayor_extremo([1, 2, 3])`` -> [3, 3, 3] |br|
   ``mayor_extremo([1, 3, 2])`` -> [2, 2, 2] |br|

   ~~~~
   def mayor_extremo(nums):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(mayor_extremo([1, 2, 3]), [3, 3, 3],"Esperado: [3,3,3]")
           self.assertEqual(mayor_extremo([11, 5, 9]), [11, 11, 11],"Esperado: [11,11,11]")
           self.assertEqual(mayor_extremo([2, 11, 3]), [3, 3, 3],"Esperado: [3,3,3]")
           self.assertEqual(mayor_extremo([11, 3, 3]), [11, 11, 11],"Esperado: [11,11,11]")
           self.assertEqual(mayor_extremo([3, 11, 11]), [11, 11, 11],"Esperado: [11,11,11]")
           self.assertEqual(mayor_extremo([2, 2, 2]), [2, 2, 2],"Esperado: [2,2,2]"")
           self.assertEqual(mayor_extremo([2, 11, 2]), [2, 2, 2],"Esperado: [2,2,2]")
           self.assertEqual(mayor_extremo([0, 0, 1]), [1, 1, 1],"Esperado: [1,1,1]")


   myTests().main()



.. activecode:: sum2
   :nocodelens:

   E. sum2 |br|
   Defina una función ``sum2`` que tome una lista de número enteros de cualquier tamaño como argumento, y regrese la suma de los dos primeros elementos. Si la lista tiene menos de dos elementos, agregue tantos 0 como sea posible. |br||br|
   Ejemplos:|br|
   ``sum2([1, 2, 3])`` -> 3 |br|
   ``sum2([1, 1])`` -> 2 |br|
   ``sum2([])`` -> 0 |br|

   ~~~~
   def sum2(nums):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(sum2([1, 2, 3]), 3,"Esperado: 3")
           self.assertEqual(sum2([1, 1]), 2,"Esperado: 2")
           self.assertEqual(sum2([1, 1, 1, 1]), 2,"Esperado: 2")
           self.assertEqual(sum2([1, 2]), 3,"Esperado: 3")
           self.assertEqual(sum2([1]), 1,"Esperado: 1")
           self.assertEqual(sum2([]), 0,"Esperado: 0")
           self.assertEqual(sum2([4, 5, 6]), 9,"Esperado: 9")
           self.assertEqual(sum2([4]), 4,"Esperado: 4")
       

   myTests().main()



.. activecode:: middle_way
   :nocodelens:

   F. middle_way |br|
   Defina una función ``middle_way`` que tome dos listas ``a`` y ``b`` de números enteros como argumentos, y regrese una lista de tamaño 2 que contenga los elementos de en medio de ``a`` y ``b`. Suponga que las listas tienen un tamaño impar. |br||br|
   Ejemplos:|br|
   ``middle_way([1, 2, 3], [4, 5, 6])`` -> [2, 5] |br|
   ``middle_way([7, 7, 7], [3, 8, 0])`` -> [7, 8] |br|
   ``middle_way([5, 2, 9], [1, 4, 5])`` -> [2, 4] |br|

   ~~~~
   def middle_way(a, b):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(middle_way([1, 2, 3], [4, 5, 6]), [2, 5],"Esperado: [2,5]")
           self.assertEqual(middle_way([7, 7, 7], [3, 8, 0]), [7, 8],"Esperado: [7,8]")
           self.assertEqual(middle_way([5, 2, 9], [1, 4, 5]), [2, 4],"Esperado: [2,4]")
           self.assertEqual(middle_way([1, 9, 7], [4, 8, 8]), [9, 8]),"Esperado: [9,8]")
           self.assertEqual(middle_way([1, 2, 3], [3, 1, 4]), [2, 1],"Esperado: [2,1]")
           self.assertEqual(middle_way([1, 2, 3], [4, 1, 1]), [2, 1],"Esperado: [2,1]")
           

   myTests().main()



.. activecode:: date_fashion
   :nocodelens:

   G. date_fashion |br|
   Define una función ``date_fashion``. La función tomará dos dos argumentos ``mi_punt`` y `` pareja_punt``.|br|
   Suponga que va un restaurante con su pareja. Los argumentos representan la puntuación de la ropa que llevan puesta del 0 al 10. |br|
   Cuanto más alto es el puntaje, más elegante se han vestido. El puntaje de su ropa determinará si les dan una mesa en el restaurante o no:|br|
   Si la puntuación de la ropa de uno de los dos es menor o igual a 2, no tendrán derecho a una mesa (0). |br|
   Si las calificaciones son más altas, entonces si una de las dos es muy elegante (puntuación >= 8) Sí tendrán derecho a mesa (2). |br|
   De lo contrario, la respuesta es tal vez (1). |br|
   Entonces ``date_fashion`` regresa un número entre 0, 1 y 2: 0 = no, 1 = tal vez y 2 = sí |br||br|
   Ejemplos:|br|   
   ``date_fashion(5, 10)`` -> 2 |br|
   ``date_fashion(5, 2)`` -> 0 |br|
   ``date_fashion(5, 5)`` -> 1 |br|

   ~~~~
   def date_fashion(mi_punt, pareja_punt):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(date_fashion(5, 10), 2,"Esperado: 2")
           self.assertEqual(date_fashion(5, 2), 0,"Esperado: 0")
           self.assertEqual(date_fashion(5, 5), 1,"Esperado: 1")
           self.assertEqual(date_fashion(3, 3), 1,"Esperado: 1")
           self.assertEqual(date_fashion(10, 2), 0,"Esperado: 0")
           self.assertEqual(date_fashion(2, 9), 0,"Esperado: 0")
           self.assertEqual(date_fashion(9, 9), 2,"Esperado: 2")
           self.assertEqual(date_fashion(10, 5), 2,"Esperado: 2")
           self.assertEqual(date_fashion(2, 2), 0,"Esperado: 0")
           self.assertEqual(date_fashion(3, 7), 1,"Esperado: 1")
           self.assertEqual(date_fashion(2, 7), 0,"Esperado: 0")
           self.assertEqual(date_fashion(6, 2), 0,"Esperado: 0")

           
   myTests().main()



.. activecode:: squirrel_play
   :nocodelens:

   H. squirrel_play |br|
   El equipo de fútbol *ardillas* normalmente juega cuando la temperatura está entre 60 y 90 grados Fahrenheit, pero cuando es verano la temperatura superior a la que juegan las *ardillas* es de 100 grados Fahrenheit en lugar de 90. |br|
   Defina una función ``squirrel_play`` que tome como argumentos la temperatura y True si es verano o False si no lo es. La función debe regresar True si las *ardillas* juegan o False si no. |br||br|
   Ejemplos:|br|
   ``squirrel_play(70, False)`` -> True |br|
   ``squirrel_play(95, False)`` -> False |br|
   ``squirrel_play(95, True)`` -> True |br|

   ~~~~
   def squirrel_play(temp, is_summer):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(squirrel_play(70, False), True,"Esperado: True")
           self.assertEqual(squirrel_play(95, False), False,"Esperado: False")
           self.assertEqual(squirrel_play(95, True), True,"Esperado: True")
           self.assertEqual(squirrel_play(90, False), True,"Esperado: True")
           self.assertEqual(squirrel_play(90, True), True,"Esperado: True")
           self.assertEqual(squirrel_play(50, False), False,"Esperado: False")
           self.assertEqual(squirrel_play(50, True), False,"Esperado: True")
           self.assertEqual(squirrel_play(100, False), False,"Esperado: False")
           self.assertEqual(squirrel_play(100, True), True,"Esperado: True")
           self.assertEqual(squirrel_play(105, True), False,"Esperado: True")
           self.assertEqual(squirrel_play(59, False), False,"Esperado: False")
           self.assertEqual(squirrel_play(59, True), False,"Esperado: True")
           self.assertEqual(squirrel_play(60, False), True,"Esperado: False")
         
           
   myTests().main()



.. activecode:: pego_correndo
   :nocodelens:
   
   I. atrapado_corriendo |br|
   Simulemos un velocímetro que te aplica una multa en caso de exceder la velociad máxima.|br|
   Velocidad <= 60: sin multa |br|
   Velocidad entre 61 y 80: multa media |br|
   Velocidad superior a 80: multa severa |br|
   Si es tu cumpleaños la velocidad puede ser 5 km/h mayor en todos los casos.|br|
   Defina una función ``atrapado_corriendo`` que reciba como argumentos la velocidad a la que ibas y True si es tu cumpleaños o False si no lo es. Esta función debe regresar 0, 1 o 2 de acuerdo a lo siiguiente:|br|
   sin multa = 0 |br|
   multa media = 1 |br|
   multa severa = 2 |br||br|
   Ejemplos:|br|
   atrapado_corriendo(60, False) -> 0 |br|
   atrapado_corriendo(65, False) -> 1 |br|
   atrapado_corriendo(65, True) -> 0  |br|
   atrapado_corriendo(80, False) -> 1 |br|

   ~~~~
   def atrapado_corriendo(speed, is_birthday):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(atrapado_corriendo(20, False), 0, "Esperado: 0")
           self.assertEqual(atrapado_corriendo(20, True), 0, "Esperado: 0")
           self.assertEqual(atrapado_corriendo(60, False), 0,"Esperado: 0")
           self.assertEqual(atrapado_corriendo(65, False), 1,"Esperado: 1")
           self.assertEqual(atrapado_corriendo(65, True), 0,"Esperado: 0")
           self.assertEqual(atrapado_corriendo(80, False), 1,"Esperado: 1")
           self.assertEqual(atrapado_corriendo(85, False), 2,"Esperado: 2")
           self.assertEqual(atrapado_corriendo(85, True), 1,"Esperado: 1")
           self.assertEqual(atrapado_corriendo(70, False), 1,"Esperado: 1")
           self.assertEqual(atrapado_corriendo(75, False), 1,"Esperado: 1")
           self.assertEqual(atrapado_corriendo(75, True), 1,"Esperado: 1")
           self.assertEqual(atrapado_corriendo(40, False), 0,"Esperado: 0")
           self.assertEqual(atrapado_corriendo(40, True), 0,"Esperado: 0")
           self.assertEqual(atrapado_corriendo(90, False), 2,"Esperado: 2")
           self.assertEqual(atrapado_corriendo(90, True), 2,"Esperado: 2")
          
         
   myTests().main()



.. activecode:: alarm_clock
   :nocodelens:
 
   J. alarm_clock |br|
   Defina una función ``alarm_clock`` que tome dos argumentos: El primer argumento ``day`` es un número del 0-6 que representa un día de la semana de acuerdo a lo siguiente:|br|
   día: 0 = domingo, 1 = lunes, 2 = martes, ..., 6 = sábado |br|
   El segundo argumento ``vacation`` tomará el valor True si estas de vacaciones o False si no lo estas. La función regresará un string que indica cuándo sonará el despertador de acuerdo a lo siguiente:|br|
   Días de la semana: '07:00'|br|
   Fines de semana: '10:00'|br|
   A menos que esté de vacaciones, en este caso: |br|
   Días de la semana: '10:00'|br|
   Fines de semana: 'libre' |br||br|
   Ejemplos:|br|
   ``alarm_clock(1, False)`` -> '7:00' |br|
   ``alarm_clock(1, True)`` -> '10:00' |br|
   ``alarm_clock(6, True)`` -> 'libre' |br|
   ``alarm_clock(0, False)`` -> '10:00' |br|


   ~~~~
   def alarm_clock(day, vacation):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(alarm_clock(1, False), '7:00',"Esperado: 7:00")
           self.assertEqual(alarm_clock(5, False), '7:00',"Esperado: 7:00")
           self.assertEqual(alarm_clock(0, False), '10:00',"Esperado: 10:00")
           self.assertEqual(alarm_clock(6, False), '10:00',"Esperado: 10:00")
           self.assertEqual(alarm_clock(0, True), 'libre',"Esperado: libre")
           self.assertEqual(alarm_clock(6, True), 'libre',"Esperado: libre")
           self.assertEqual(alarm_clock(1, True), '10:00',"Esperado: 10:00")
           self.assertEqual(alarm_clock(3, True), '10:00',"Esperado: 10:00")
           self.assertEqual(alarm_clock(5, True), '10:00',"Esperado: 10:00")
          
         
   myTests().main()
