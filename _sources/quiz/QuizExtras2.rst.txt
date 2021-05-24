===============
Quiz - Extras 2
===============

.. |br| raw:: html

   <br />


.. activecode:: max_Students
   :nocodelens:

   Uma escola primária oferecia a alguns de seus alunos uma visita ao zoológico. |br|
   Para isso, a escola pretende gastar EXATAMENTE 93 reais e sabe que a entrada do zoológico custa 5 reais para menores de 12 anos e 7 reais aqueles que têm 12 anos ou mais. |br|
   Desenvolver um algoritmo que retorne o número máximo de alunos que a escola pode levar para o zoológico considerando todos os valores como inteiros. |br|
   Seu programa deve ter uma abordagem genérica e não levar em conta peculiaridades nos dados fornecidos |br|
   Retornar o número total de alunos. |br|


   ~~~~
   def max_students():

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           
           self.assertEqual(max_students(),17,"Esperado: 17")

   myTests().main()


.. activecode:: roman
   :nocodelens:


   Conversor de decimal para romano. Você deverá programar um algoritmo em Python que traduza um número lido no sistema arábico para romano. Evite fazer muitos “ifs”. |br|
   A idéia é usar um comando while para analisar cada casa decimal e gerar os caracteres romanos diferentemente para cada iteração. |br|
   Exemplo 2011 = MMXI em romano. |br|
   Devolva o numeral romano como uma string. |br|

   ~~~~
   def roman(n):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           
           self.assertEqual(roman(12),"XII","Esperado: XII")
           self.assertEqual(roman(123),"CXXIII","Esperado: CXXIII")
           self.assertEqual(roman(400),"CD","Esperado: CD")
           self.assertEqual(roman(84),"LXXXIV","Esperado: LXXXIV")

   myTests().main()


.. activecode:: pi_value
   :nocodelens:


   Faça um programa que calcule o valor aproximado de pi com n termos, segundo a fórmula abaixo. |br|
   No exemplo são visíveis 4 termos. |br|
   Retorna o valor arredondado até duas casas decimais e como uma string. |br|
   pi = (4/1) - (4/3) + (4/5) - (4/7) ..... |br|

   ~~~~
   def pi_value(n):

       

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           
           self.assertEqual(pi_value(4),"2.90" , "Esperado: 2.90")
           self.assertEqual(pi_value(10),"3.04" , "Esperado: 3.04")
           self.assertEqual(pi_value(15),"3.21" , "Esperado: 3.21")
           self.assertEqual(pi_value(60), "3.12", "Esperado: 3.12")

   myTests().main()