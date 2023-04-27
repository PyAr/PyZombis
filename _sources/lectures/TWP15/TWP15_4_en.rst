Accumulators
=============

+ The difference between a counter and an accumulator is that for counters,
  the added value is constant, and for accumulators, it is variable.

+ Calculation of the sum of ten integer numbers


.. activecode:: ac_l15_4a
   :nocodelens:
   :stdin:
    
   n = 1
   suma = 0
   while n <= 10:
       x = int (input ("Enter the last %d number: "% n))
       suma = suma + x
       n = n + 1

   print ("suma: %d"% suma)


+ Average of 10 integer numbers


.. activecode:: ac_l15_4b
   :nocodelens:
   :stdin:

   n = 0
   suma = 0
   while n <10:
       x = int (input ("Enter the last %d number: "% (n + 1)))
       suma = suma + x
       n = n + 1
    
   print ("Average: %5.2f"% (suma / n))


+ Calculate the factorial of ten

.. codelens:: cl_l15_4_en

   i = 1
   fact = 1
   while i <= 10:
       fact = fact * i
       i = i + 1
   print ("Fact(10) =% d"% fact)


+ Calculate the factorial of an integer number ``n``

.. activecode:: ac_l15_4c
   :nocodelens:
   :stdin:

   i = 1
   fact = 1
   n = int (input ("Enter n: "))
   while i <= n:
       fact = fact * i
       i = i + 1

   print ("Fact(%d) =% d"% (n, fact))