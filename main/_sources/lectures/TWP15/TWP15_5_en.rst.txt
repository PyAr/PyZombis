Interrupting the repetition
============================


+ Calculate the sum of integers until zero is entered


.. activecode:: python
   :class: python
   :nocodelens:
   :stdin:

   sum = 0
   while True:
       x = int(input("Enter a number (0 to exit): "))
       if x == 0:
           break
       sum = sum + x

   print("Sum: %d" %sum)


+ Calculate the average of entered numbers until zero is entered


.. activecode:: python
   :class: python
   :nocodelens:
   :stdin:

   sum = 0
   n = 0
   while True:
       x = int(input("Enter a number (0 to exit): "))
       if x == 0:
           break
       else:
           n = n + 1
       sum = sum + x

   print("Average: %5.2f" %(sum / n))