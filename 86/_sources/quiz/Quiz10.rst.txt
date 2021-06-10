=========
Quiz - 10
=========

.. |br| raw:: html

   <br />


.. activecode:: near_ten
   :nocodelens:

   A. near_ten |br|
   Seja um n não negativo, retorna True se o número está a distância de |br|
   pelo menos dois de um múltiplo de dez. Use a função resto da divisão. |br|
   near_ten(12) -> True |br|
   near_ten(17) -> False |br|
   near_ten(19) -> True |br|

   ~~~~
   def near_ten(n):
       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(near_ten(12), True,"Esperado: True")
           self.assertEqual(near_ten(17), False,"Esperado: False")
           self.assertEqual(near_ten(19), True,"Esperado: True")
           self.assertEqual(near_ten(31), True,"Esperado: True")
           self.assertEqual(near_ten(6), False,"Esperado: False")
           self.assertEqual(near_ten(10), True,"Esperado: True")
           self.assertEqual(near_ten(11), True,"Esperado: True")
           self.assertEqual(near_ten(21), True,"Esperado: True")
           self.assertEqual(near_ten(22), True,"Esperado: True")
           self.assertEqual(near_ten(23), False,"Esperado: False")
           self.assertEqual(near_ten(54), False,"Esperado: False")
           self.assertEqual(near_ten(155), False,"Esperado: False")
           self.assertEqual(near_ten(158), True,"Esperado: True")
           self.assertEqual(near_ten(3), False,"Esperado: False")
           self.assertEqual(near_ten(1), True,"Esperado: True")
              

   myTests().main()


.. activecode:: lone_sum
   :nocodelens:

   B. lone_sum |br|
   Soma maluca: some os números inteiros a, b, e c |br|
   Se algum número aparecer repetido ele não conta na soma |br|
   lone_sum(1, 2, 3) -> 6 |br|
   lone_sum(3, 2, 3) -> 2 |br|
   lone_sum(3, 3, 3) -> 0 |br|

   ~~~~
   def lone_sum(a, b, c):
       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(lone_sum(1, 2, 3), 6,"Esperado: 6")
           self.assertEqual(lone_sum(3, 2, 3), 2,"Esperado: 2")
           self.assertEqual(lone_sum(3, 3, 3), 0,"Esperado: 0")
           self.assertEqual(lone_sum(9, 2, 2), 9,"Esperado: 9")
           self.assertEqual(lone_sum(2, 2, 9), 9,"Esperado: 9")
           self.assertEqual(lone_sum(2, 9, 2), 9,"Esperado: 9")
           self.assertEqual(lone_sum(2, 9, 3), 14,"Esperado: 14")
           self.assertEqual(lone_sum(4, 2, 3), 9,"Esperado: 9")
           self.assertEqual(lone_sum(1, 3, 1), 3,"Esperado: 3")
              

   myTests().main()


.. activecode:: luck_sum
   :nocodelens:

   C. luck_sum |br|
   Soma três inteiros a, b, c |br|
   Se aparecer um 13 ele não conta e todos os da sua direita também |br|
   lucky_sum(1, 2, 3) -> 6 |br|
   lucky_sum(1, 2, 13) -> 3 |br|
   lucky_sum(1, 13, 3) -> 1 |br|

   ~~~~
   def lucky_sum(a, b, c):
       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(lucky_sum(1, 2, 3), 6,"Esperado: 6")
           self.assertEqual(lucky_sum(1, 2, 13), 3,"Esperado: 3")
           self.assertEqual(lucky_sum(1, 13, 3), 1,"Esperado: 1")
           self.assertEqual(lucky_sum(1, 13, 13), 1,"Esperado: 1")
           self.assertEqual(lucky_sum(6, 5, 2), 13,"Esperado: 13")
           self.assertEqual(lucky_sum(13, 2, 3), 0,"Esperado: 0")
           self.assertEqual(lucky_sum(13, 2, 13), 0,"Esperado: 0")
           self.assertEqual(lucky_sum(13, 13, 2), 0,"Esperado: 0")
           self.assertEqual(lucky_sum(9, 4, 13), 13,"Esperado: 13")
           self.assertEqual(lucky_sum(8, 13, 2), 8,"Esperado: 8")
           self.assertEqual(lucky_sum(7, 2, 1), 10,"Esperado: 10")
           self.assertEqual(lucky_sum(3, 3, 13), 6,"Esperado: 6")

   myTests().main()


.. activecode:: double_char
   :nocodelens:

   D. double_char |br|
   retorna os caracteres da string original duplicados |br|
   double_char('The') -> 'TThhee' |br|
   double_char('AAbb') -> 'AAAAbbbb' |br|
   double_char('Hi-There') -> 'HHii--TThheerree' |br|

   ~~~~
   def double_char(s):
       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(double_char('The'), 'TThhee',"Esperado: TThhee")
           self.assertEqual(double_char('AAbb'), 'AAAAbbbb',"Esperado: AAAAbbbb")
           self.assertEqual(double_char('Hi-There'), 'HHii--TThheerree',"Esperado: HHii--TThheerree")
           self.assertEqual(double_char('Word!'), 'WWoorrdd!!',"Esperado: WWoorrdd!!")
           self.assertEqual(double_char('!!'), '!!!!',"Esperado: !!!!")
           self.assertEqual(double_char(''), '',"Esperado: ")
           self.assertEqual(double_char('a'), 'aa',"Esperado: aa")
           self.assertEqual(double_char('.'), '..',"Esperado: ..")
           self.assertEqual(double_char('aa'), 'aaaa',"Esperado: aaaa")


   myTests().main()



.. activecode:: count_hi
   :nocodelens:

   E. count_hi |br|
   conta o número de vezes que aparece a string 'hi' |br|
   count_hi('abc hi ho') -> 1 |br|
   count_hi('ABChi hi') -> 2 |br|
   count_hi('hihi') -> 2 |br|

   ~~~~
   def count_hi(s):
       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(count_hi('abc hi ho'), 1,"Esperado: abc hi ho")
           self.assertEqual(count_hi('ABChi hi'), 2,"Esperado: ABChi hi")
           self.assertEqual(count_hi('hihi'), 2,"Esperado: hihi")
           self.assertEqual(count_hi('hiHIhi'), 2,"Esperado: hiHIhi")
           self.assertEqual(count_hi(''), 0,"Esperado: ")
           self.assertEqual(count_hi('h'), 0,"Esperado: h")
           self.assertEqual(count_hi('hi'), 1,"Esperado: hi")
           self.assertEqual(count_hi('Hi is no HI on ahI'), 0,"Esperado: Hi is no HI on ahI")
           self.assertEqual(count_hi('hiho not HOHIhi'), 2,"Esperado: hiho not HOHIhi")


   myTests().main()


.. activecode:: cat_dog
   :nocodelens:

   F. cat_dog |br|
   verifica se o aparece o mesmo número de vezes 'cat' e 'dog' |br|
   cat_dog('catdog') -> True |br|
   cat_dog('catcat') -> False |br|
   cat_dog('1cat1cadodog') -> True |br|

   ~~~~
   def cat_dog(s):
       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           seld.assertEqual(cat_dog('catdog'), True,"Esperado: True")
           seld.assertEqual(cat_dog('catcat'), False,"Esperado: False")
           seld.assertEqual(cat_dog('1cat1cadodog'), True,"Esperado: True")
           seld.assertEqual(cat_dog('catxxdogxxxdog'), False,"Esperado: False")
           seld.assertEqual(cat_dog('catxdogxdogxcat'), True,"Esperado: True")
           seld.assertEqual(cat_dog('catxdogxdogxca'), False,"Esperado: False")
           seld.assertEqual(cat_dog('dogdogcat'), False,"Esperado: False")
           seld.assertEqual(cat_dog('dogogcat'), True,"Esperado: True")
           seld.assertEqual(cat_dog('dog'), False,"Esperado: False")
           seld.assertEqual(cat_dog('cat'), False,"Esperado: False")
           seld.assertEqual(cat_dog('ca'), True,"Esperado: True")
           seld.assertEqual(cat_dog('c'), True,"Esperado: True")
           seld.assertEqual(cat_dog(''), True,"Esperado: True")


   myTests().main()


.. activecode:: count_code
   :nocodelens:

   G. count_code |br|
   conta quantas vezes aparece 'code' |br|
   a letra 'd' pode ser trocada por outra qualquer |br|
   assim 'coxe' ou 'coze' também são contadas como 'code' |br|
   count_code('aaacodebbb') -> 1 |br|
   count_code('codexxcode') -> 2 |br|
   count_code('cozexxcope') -> 2 |br|

   ~~~~
   def count_code(s):
       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(count_code('aaacodebbb'), 1,"Esperado: 1")
           self.assertEqual(count_code('codexxcode'), 2,"Esperado: 2")
           self.assertEqual(count_code('cozexxcope'), 2,"Esperado: 2")
           self.assertEqual(count_code('cozfxxcope'), 1,"Esperado: 1")
           self.assertEqual(count_code('xxcozeyycop'), 1,"Esperado: 1")
           self.assertEqual(count_code('cozcop'), 0,"Esperado: 0")
           self.assertEqual(count_code('abcxyz'), 0,"Esperado: 0")
           self.assertEqual(count_code('code'), 1,"Esperado: 1")
           self.assertEqual(count_code('ode'), 0,"Esperado: 0")
           self.assertEqual(count_code('c'), 0,"Esperado: 0")
           self.assertEqual(count_code(''), 0,"Esperado: 0")
           self.assertEqual(count_code('AAcodeBBcoleCCccoreDD'), 3,"Esperado: 3")
           self.assertEqual(count_code('AAcodeBBcoleCCccorfDD'), 2,"Esperado: 2")
           self.assertEqual(count_code('coAcodeBcoleccoreDD'), 3,"Esperado: 3")


   myTests().main()

.. activecode:: end_other
   :nocodelens:

   H. end_other |br|
   as duas strings devem ser convertidas para minúsculo via lower() |br|
   depois disso verifique que no final da string b ocorre a string a |br|
   ou se no final da string a ocorre a string b |br|
   end_other('Hiabc', 'abc') -> True |br|
   end_other('AbC', 'HiaBc') -> True |br|
   end_other('abc', 'abXabc') -> True |br|

   ~~~~
   def end_other(a, b):
       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(end_other('Hiabc', 'abc'), True,"Esperado: True")
           self.assertEqual(end_other('AbC', 'HiaBc'), True,"Esperado: True")
           self.assertEqual(end_other('abc', 'abXabc'), True,"Esperado: True")
           self.assertEqual(end_other('Hiabc', 'abcd'), False,"Esperado: False")
           self.assertEqual(end_other('Hiabc', 'bc'), True,"Esperado: True")
           self.assertEqual(end_other('Hiabcx', 'bc'), False,"Esperado: False")
           self.assertEqual(end_other('abc', 'abc'), True,"Esperado: True")
           self.assertEqual(end_other('xyz', '12xyz'), True,"Esperado: True")
           self.assertEqual(end_other('yz', '12xz'), False,"Esperado: False")
           self.assertEqual(end_other('Z', '12xz'), True,"Esperado: True")
           self.assertEqual(end_other('12', '12'), True,"Esperado: True")
           self.assertEqual(end_other('abcXYZ', 'abcDEF'), False,"Esperado: False")
           self.assertEqual(end_other('ab', 'ab12'), False,"Esperado: False")
           self.assertEqual(end_other('ab', '12ab'), True,"Esperado: True")


   myTests().main()


.. activecode:: count_evens
   :nocodelens:

   I. count_evens |br|
   conta os números pares da lista |br|
   count_evens([2, 1, 2, 3, 4]) -> 3 |br|
   count_evens([2, 2, 0]) -> 3 |br|
   count_evens([1, 3, 5]) -> 0 |br|

   ~~~~
   def count_evens(nums):
       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(count_evens([2, 1, 2, 3, 4]), 3, "Esperado: 3")
           self.assertEqual(count_evens([2, 2, 0]), 3, "Esperado: 3")
           self.assertEqual(count_evens([1, 3, 5]), 0, "Esperado: 0")
           self.assertEqual(count_evens([]), 0, "Esperado: 0")
           self.assertEqual(count_evens([11, 9, 0, 1]), 1, "Esperado: 1")
           self.assertEqual(count_evens([2, 11, 9, 0]), 2, "Esperado: 2")
           self.assertEqual(count_evens([2]), 1, "Esperado: 1")
           self.assertEqual(count_evens([2, 5, 12]), 2, "Esperado: 2")


   myTests().main()


.. activecode:: sum13
   :nocodelens:

   J. sum13 |br| 
   retorna a soma dos números de uma lista |br|
   13 dá azar, você deverá ignorar o 13 e todos os números à sua direita |br|
   sum13([1, 2, 2, 1]) -> 6 |br|
   sum13([1, 1]) -> 2 |br|
   sum13([1, 2, 2, 1, 13]) -> 6 |br|
   sum13([13, 1, 2, 3, 4]) -> 0 |br|

   ~~~~
   def sum13(nums):
       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(sum13([1, 2, 2, 1]), 6,"Esperado: 6")
           self.assertEqual(sum13([1, 1]), 2,"Esperado: 2")
           self.assertEqual(sum13([1, 2, 2, 1, 13]), 6,"Esperado: 6")
           self.assertEqual(sum13([1, 2, 13, 2, 1, 13]), 3,"Esperado: 3")
           self.assertEqual(sum13([13, 1, 2, 13, 2, 1, 13]), 0,"Esperado: 0")
           self.assertEqual(sum13([]), 0,"Esperado: 0")
           self.assertEqual(sum13([13]), 0,"Esperado: 0")
           self.assertEqual(sum13([13, 13]), 0,"Esperado: 0")
           self.assertEqual(sum13([13, 0, 13]), 0,"Esperado: 0")
           self.assertEqual(sum13([13, 1, 13]), 0,"Esperado: 0")
           self.assertEqual(sum13([5, 7, 2]), 14,"Esperado: 14")
           self.assertEqual(sum13([5, 13, 2]), 5,"Esperado: 5")
           self.assertEqual(sum13([0]), 0,"Esperado: 0")
           self.assertEqual(sum13([13, 0]), 0,"Esperado: 0")


   myTests().main()


.. activecode:: has22
   :nocodelens:

   K. has22 |br|
   Verifica se na lista de números inteiros aparecem dois 2 consecutivos |br|
   has22([1, 2, 2]) -> True |br|
   has22([1, 2, 1, 2]) -> False |br|
   has22([2, 1, 2]) -> False |br|

   ~~~~
   def has22(nums):
       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(has22([1, 2, 2]), True,"Esperado: True")
           self.assertEqual(has22([1, 2, 1, 2]), False,"Esperado: False")
           self.assertEqual(has22([2, 1, 2]), False,"Esperado: False")
           self.assertEqual(has22([2, 2, 1, 2]), True,"Esperado: True")
           self.assertEqual(has22([1, 3, 2]), False,"Esperado: False")
           self.assertEqual(has22([1, 3, 2, 2]), True,"Esperado: True")
           self.assertEqual(has22([2, 3, 2, 2]), True,"Esperado: True")
           self.assertEqual(has22([4, 2, 4, 2, 2, 5]), True,"Esperado: True")
           self.assertEqual(has22([1, 2]), False,"Esperado: False")
           self.assertEqual(has22([2, 2]), True,"Esperado: True")
           self.assertEqual(has22([2]), False,"Esperado: False")
           self.assertEqual(has22([]), False,"Esperado: False")
           self.assertEqual(has22([3, 3, 2, 2]), True,"Esperado: True")
           self.assertEqual(has22([5, 2, 5, 2]), False,"Esperado: False")


   myTests().main()


.. activecode:: soma_na_lista
   :nocodelens:

   L. soma_na_lista |br|
   Verifica se n é soma de dois números distintos da lista |br|
   soma_na_lista(5, [1, 2, 3, 4]) -> True |br|
   soma_na_lista(9, [1, 2, 3, 4]) -> False |br|
   soma_na_lista(0, [1, 2, 3, 4]) -> False |br|
   soma_na_lista(8, [1, 2, 3, 4]) -> False |br|
   soma_na_lista(4, [2, 2, 2, 2]) -> False |br|
   soma_na_lista(4, [2, 2, 1, 3]) -> True |br|
   Hall of Fame: Raphael Castro 1a Turma Python para Zumbis |br|

   ~~~~
   def soma_na_lista(n, lista):
       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(soma_na_lista(5, [1, 2, 3, 4]), True,"Esperado: True")
           self.assertEqual(soma_na_lista(9, [1, 2, 3, 4]), False,"Esperado: False")
           self.assertEqual(soma_na_lista(0, [1, 2, 3, 4]), False,"Esperado: False")
           self.assertEqual(soma_na_lista(8, [1, 2, 3, 4]), False,"Esperado: False")
           self.assertEqual(soma_na_lista(4, [2, 2, 2, 2]), False,"Esperado: False")
           self.assertEqual(soma_na_lista(4, [2, 2, 1, 3]), True,"Esperado: True")
           self.assertEqual(soma_na_lista(42, [40, 2, 3, 39]), True,"Esperado: True")

   myTests().main()


.. activecode:: M._desafio!
   :nocodelens:

   M. desafio! faça somente se já tiver acabado o EP1 e todas as listas |br|
   Fila de tijolos sem usar loops |br|
   queremos montar uma fila de tijolos de um tamanho denominado meta |br|
   temos tijolos pequenos (tamanho 1) e tijolos grandes (tamanho 5) |br|
   retorna True se for possível montar a fila de tijolos |br|
   é possível uma solução sem usar for ou while |br|
   fila_tijolos(3, 1, 8) -> True |br|
   fila_tijolos(3, 1, 9) -> False |br|
   fila_tijolos(3, 2, 10) -> True |br|

   ~~~~
   def fila_tijolos(n_peq, n_gra, meta):
       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(fila_tijolos(3, 1, 8), True,"Esperado: True")
           self.assertEqual(fila_tijolos(3, 1, 9), False,"Esperado: False")
           self.assertEqual(fila_tijolos(3, 2, 10), True,"Esperado: True")
           self.assertEqual(fila_tijolos(3, 2, 8), True,"Esperado: True")
           self.assertEqual(fila_tijolos(3, 2, 9), False,"Esperado: False")
           self.assertEqual(fila_tijolos(6, 1, 11), True,"Esperado: True")
           self.assertEqual(fila_tijolos(6, 0, 11), False,"Esperado: False")
           self.assertEqual(fila_tijolos(3, 1, 7), True,"Esperado: True")
           self.assertEqual(fila_tijolos(1, 1, 7), False,"Esperado: False")
           self.assertEqual(fila_tijolos(2, 1, 7), True,"Esperado: True")
           self.assertEqual(fila_tijolos(7, 1, 11), True,"Esperado: True")
           self.assertEqual(fila_tijolos(7, 1, 8), True,"Esperado: True")
           self.assertEqual(fila_tijolos(7, 1, 13), False,"Esperado: False")
           self.assertEqual(fila_tijolos(43, 1, 46), True,"Esperado: True")
           self.assertEqual(fila_tijolos(40, 1, 46), False,"Esperado: False")
           self.assertEqual(fila_tijolos(22, 2, 33), False,"Esperado: False")
           self.assertEqual(fila_tijolos(0, 2, 10), True,"Esperado: True")
           self.assertEqual(fila_tijolos(1000000, 1000, 1000100), True,"Esperado: True")
           self.assertEqual(fila_tijolos(2, 1000000, 100003), False,"Esperado: False")
           self.assertEqual(fila_tijolos(12, 2, 21), True,"Esperado: True")

   myTests().main()