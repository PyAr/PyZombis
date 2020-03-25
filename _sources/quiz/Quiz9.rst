=========
Quiz - 9
=========

.. |br| raw:: html

   <br />


.. activecode:: first_last6
   :nocodelens:

   A. first_last6 |br|
   verifica se 6 é o primeiro ou último elemento da lista nums |br|
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
   retorna True se a lista nums possui pelo menos um elemento |br|
   e o primeiro elemento é igual ao último |br|
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
   Dada uma lista não vazia, cria uma nova lista onde todos |br|
   os elementos são o maior das duas pontas |br|
   obs.: não é o maior de todos, mas entre as duas pontas |br|
   maior_ponta([1, 2, 3]) -> [3, 3, 3] |br|
   maior_ponta([1, 3, 2]) -> [2, 2, 2] |br|

   ~~~~
   def maior_ponta(nums):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(maior_ponta([1, 2, 3]), [3, 3, 3],"Esperado: [3,3,3]")
           self.assertEqual(maior_ponta([11, 5, 9]), [11, 11, 11],"Esperado: [11,11,11]")
           self.assertEqual((maior_ponta([2, 11, 3]), [3, 3, 3],"Esperado: [3,3,3]")
           self.assertEqual(maior_ponta([11, 3, 3]), [11, 11, 11],"Esperado: [11,11,11]")
           self.assertEqual(maior_ponta([3, 11, 11]), [11, 11, 11],"Esperado: [11,11,11]")
           self.assertEqual(maior_ponta([2, 2, 2]), [2, 2, 2],"Esperado: [2,2,2]"")
           self.assertEqual(maior_ponta([2, 11, 2]), [2, 2, 2],"Esperado: [2,2,2]")
           self.assertEqual(maior_ponta([0, 0, 1]), [1, 1, 1],"Esperado: [1,1,1]")


   myTests().main()


.. activecode:: sum2
   :nocodelens:

   E. sum2 |br|
   Dada uma lista de inteiros de qualquer tamanho |br|
   retorna a soma dos dois primeiros elementos |br|
   se a lista tiver menos de dois elementos, soma o que for possível |br|

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
   sejam duas listas de inteiros a e b |br|
   retorna uma lista de tamanho 2 contendo os elementos do |br|
   meio de a e b, suponha que as listas tem tamanho ímpar |br|
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
   você e sua namorada(o) vão a um restaurante |br|
   eu e par são as notas das suas roupas de 0 a 10 |br|
   quanto maior a nota mais chique vocês estão vestidos |br|
   o resultado é se vocês conseguiram uma mesa no restaurante: |br|
   0=não 1=talvez e 2=sim |br|
   se a nota da roupa de um dos dois for menor ou igual a 2 |br|
   vocês não terão direito à uma mesa (0) |br|
   se as notas são maiores, então caso um dos dois esteja |br|
   bem chique (nota >= 8) então a resposta é sim (2) |br|
   caso contrário a resposta é talvez (1) |br|
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
   os esquilos na FATEC brincam quando a temperatura está entre 60 e 90 |br|
   graus Fahreneit (são estrangeiros e o termômetro é diferente rs) |br|
   caso seja verão, então a temperatura superior é 100 no lugar de 90 |br|
   retorne True caso os esquilos brinquem |br|
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
 
   I. pego_correndo |br|
   você foi pego correndo |br|
   o resultado será: |br|
   sem multa = 0 |br|
   multa média = 1 |br|
   multa grave = 2 |br|
   velocide <= 60 sem multa |br|
   velocidade entre 61 e 80 multa média |br|
   velocidade maior que 81 multa grave (cidade do interior) |br|
   caso seja seu aniversário a velocidade pode ser 5 km/h maior em todos os casos |br|
   pego_correndo(60, False) -> 0 |br|
   pego_correndo(65, False) -> 1 |br|
   pego_correndo(65, True) -> 0  |br|


   ~~~~
   def pego_correndo(speed, is_birthday):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(pego_correndo(60, False), 0,"Esperado: 0")
           self.assertEqual(pego_correndo(65, False), 1,"Esperado: 1")
           self.assertEqual(pego_correndo(65, True), 0,"Esperado: 0")
           self.assertEqual(pego_correndo(80, False), 1,"Esperado: 1")
           self.assertEqual(pego_correndo(85, False), 2,"Esperado: 2")
           self.assertEqual(pego_correndo(85, True), 1,"Esperado: 1")
           self.assertEqual(pego_correndo(70, False), 1,"Esperado: 1")
           self.assertEqual(pego_correndo(75, False), 1,"Esperado: 1")
           self.assertEqual(pego_correndo(75, True), 1,"Esperado: 1")
           self.assertEqual(pego_correndo(40, False), 0,"Esperado: 0")
           self.assertEqual(pego_correndo(40, True), 0,"Esperado: 0")
           self.assertEqual(pego_correndo(90, False), 2,"Esperado: 2")
 
          
         
   myTests().main()


.. activecode:: alarm_clock
   :nocodelens:
 
   J. alarm_clock |br|
   day: 0=domingo, 1=segunda, 2=terça, ..., 6=sábado |br|
   vacation = True caso você esteja de férias |br|
   o retorno é uma string que diz quando o despertador tocará |br|
   dias da semana '07:00' |br|
   finais de semana '10:00' |br|
   a menos que você esteja de férias, neste caso: |br|
   dias da semana '10:00' |br|
   finais de semana 'off' |br|
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