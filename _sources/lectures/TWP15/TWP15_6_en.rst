Nested loops
=============

+ Prints multiplication tables from 1 to 10


.. activecode:: ac_l15_6_en
   :nocodelens:
   :stdin:

   multiplication_table = 1
   while multiplication_table <= 10:
       n = 1
       print("\nMultiplication table of %d" %multiplication_table)
       while n <= 10:
           print("%d x %d = %d" %(multiplication_table, n, multiplication_table * n))
           n = n + 1
       multiplication_table = multiplication_table + 1


.. image:: ../img/TWP05_041.jpeg
   :height: 12.571cm
   :width: 9.411cm
   :align: center
   :alt: 

"Life is like riding a bicycle. To keep your balance, you must keep moving" - Einstein