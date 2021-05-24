=========
Quiz - 9
=========

.. |br| raw:: html

   <br />


.. activecode:: first_last6
   :nocodelens:

   A. first_last6 |br|
   compruebe si 6 es el primer o el último elemento en la lista de números |br|
   first_last6([1, 2, 6]) -> True |br|
   first_last6([6, 1, 2, 3]) -> True |br|
   first_last6([3, 2, 1]) -> False |br|

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
   devuelve True si la lista de números tiene al menos un elemento |br|
   y el primer elemento es igual al último |br|
   same_first_last([1, 2, 3]) -> False |br|
   same_first_last([1, 2, 3, 1]) -> True |br|
   same_first_last([1, 2, 1]) -> True |br|

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
   Dada duas listas a e b verifica se os dois primeiros são |br|
   iguais ou os dois últimos são iguais |br|
   suponha que as listas tenham pelo menos um elemento |br|
   common_end([1, 2, 3], [7, 3]) -> True |br|
   common_end([1, 2, 3], [7, 3, 2]) -> False |br|
   common_end([1, 2, 3], [1, 3]) -> True |br|

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

   D. maior_ponta |br|
    Dada una lista que no esté vacía, cree una nueva lista donde todos |br|
     los elementos son los más extremos de todos |br|
    obs.: no es el más grande de todos, pero entre los dos extremos |br|
   maior_ponta([1, 2, 3]) -> [3, 3, 3] |br|
   maior_ponta([1, 3, 2]) -> [2, 2, 2] |br|

   ~~~~
   def maior_ponta(nums):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(mayor_punto([1, 2, 3]), [3, 3, 3],"Esperado: [3,3,3]")
           self.assertEqual(mayor_punto([11, 5, 9]), [11, 11, 11],"Esperado: [11,11,11]")
           self.assertEqual((mayor_punto([2, 11, 3]), [3, 3, 3],"Esperado: [3,3,3]")
           self.assertEqual(mayor_punto([11, 3, 3]), [11, 11, 11],"Esperado: [11,11,11]")
           self.assertEqual(mayor_punto([3, 11, 11]), [11, 11, 11],"Esperado: [11,11,11]")
           self.assertEqual(mayor_punto([2, 2, 2]), [2, 2, 2],"Esperado: [2,2,2]"")
           self.assertEqual(mayor_punto([2, 11, 2]), [2, 2, 2],"Esperado: [2,2,2]")
           self.assertEqual(mayor_punto([0, 0, 1]), [1, 1, 1],"Esperado: [1,1,1]")


   myTests().main()


.. activecode:: sum2
   :nocodelens:

   E. sum2 |br|
   Dada una lista de números enteros de cualquier tamaño |br|
   devuelve la suma de los dos primeros elementos |br|
   si la lista tiene menos de dos elementos, agregue tantos como sea posible


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
   son dos listas de enteros ayb | br |
    devuelve una lista de tamaño 2 que contiene los elementos de | br |
    en medio de ayb, suponga que las listas tienen un tamaño impar |br|
   middle_way([1, 2, 3], [4, 5, 6]) -> [2, 5] |br|
   middle_way([7, 7, 7], [3, 8, 0]) -> [7, 8] |br|
   middle_way([5, 2, 9], [1, 4, 5]) -> [2, 4] |br|

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
   tu y tu novia (o) van a un restaurante |br|
   yo y par son tus puntuaciones de ropa de 0 a 10 |br|
   cuanto más alto es el grado, más elegante se viste |br|
   el resultado es si tienes una mesa en el restaurante: |br|
   0=no 1=talvez e 2=si |br|
  si la puntuación de la ropa de uno de los dos es menor o igual a 2 |br|
   no tendrá derecho a una mesa (0) | br |
   si las calificaciones son más altas, entonces si una de las dos es |br|
   muy elegante (nota> = 8) por lo que la respuesta es sí (2) |br|
   de lo contrario, la respuesta es tal vez (1)
 |br|
   date_fashion(5, 10) -> 2 |br|
   date_fashion(5, 2) -> 0 |br|
   date_fashion(5, 5) -> 1 |br|

   ~~~~
   def date_fashion(eu, par):

       

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
   ardillas en FATEC juegan cuando la temperatura está entre 60 y 90 |br|
    grados Fahreneit (son extraños y el termómetro es diferente rs) |br|
    si es verano, entonces la temperatura superior es 100 en lugar de 90 |br|
    devuelve True si juegan las ardillas |br|
   squirrel_play(70, False) -> True |br|
   squirrel_play(95, False) -> False |br|
   squirrel_play(95, True) -> True |br|


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
 
   I. atrapado_curriendo |br|
   te pillaron corriendo |br|
    el resultado será: |br|
    sin multa = 0 |br|
    multa media = 1 | br |
    grave multa = 2 | br |
    velocidio <= 60 sin penalización |br|
    velocidad entre 61 y 80 media fina |br|
    velocidad superior a 81 multa severa (ciudad del interior) |br|
    si es tu cumpleaños la velocidad puede ser 5 km / h mayor en todos los casos|br|
   pego_correndo(60, False) -> 0 |br|
   pego_correndo(65, False) -> 1 |br|
   pego_correndo(65, True) -> 0  |br|


   ~~~~
   def pego_correndo(speed, is_birthday):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(atrapado_curriendo(60, False), 0,"Esperado: 0")
           self.assertEqual(atrapado_curriendo(65, False), 1,"Esperado: 1")
           self.assertEqual(atrapado_curriendo(65, True), 0,"Esperado: 0")
           self.assertEqual(atrapado_curriendo(80, False), 1,"Esperado: 1")
           self.assertEqual(atrapado_curriendo(85, False), 2,"Esperado: 2")
           self.assertEqual(atrapado_curriendo(85, True), 1,"Esperado: 1")
           self.assertEqual(atrapado_curriendo(70, False), 1,"Esperado: 1")
           self.assertEqual(atrapado_curriendo(75, False), 1,"Esperado: 1")
           self.assertEqual(atrapado_curriendo(75, True), 1,"Esperado: 1")
           self.assertEqual(atrapado_curriendo(40, False), 0,"Esperado: 0")
           self.assertEqual(atrapado_curriendo(40, True), 0,"Esperado: 0")
           self.assertEqual(atrapado_curriendo(90, False), 2,"Esperado: 2")
 
          
         
   myTests().main()


.. activecode:: alarm_clock
   :nocodelens:
 
   J. alarm_clock |br|
   día: 0 = domingo, 1 = lunes, 2 = martes, ..., 6 = sábado |br|
    vacation = True si está de vacaciones |br|
    el retorno es una cadena que indica cuándo sonará el despertador |br|
    días de la semana '07: 00 '|br|
    fines de semana '10: 00 '|br|
    a menos que esté de vacaciones, en este caso: |br|
    días de la semana '10: 00 '|br|
    fines de semana 'libres' |br|
   alarm_clock(1, False) -> '7:00' |br|
   alarm_clock(5, False) -> '7:00' |br|
   alarm_clock(0, False) -> '10:00' |br|


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
           self.assertEqual(alarm_clock(0, True), 'off',"Esperado: off")
           self.assertEqual(alarm_clock(6, True), 'off',"Esperado: off")
           self.assertEqual(alarm_clock(1, True), '10:00',"Esperado: 10:00")
           self.assertEqual(alarm_clock(3, True), '10:00',"Esperado: 10:00")
           self.assertEqual(alarm_clock(5, True), '10:00',"Esperado: 10:00")
           
          
         
   myTests().main()
