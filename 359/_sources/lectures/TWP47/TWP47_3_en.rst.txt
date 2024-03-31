New Shift Program
==================

New Morning Program
--------------------

.. code-block:: python
   
   from bank import *

   articles = ["Bauru","X Salad","Calafrango"]
   prices = [2.50,3.0,2.20]
   running = True

   while running:
      option = 1
      for select in articles:
         print(str(option) + "." + select)
         option += 1
      print(str(option) + ".Finish")
      select = int(input("Choose an option: "))
      if select == option:
         # chose the last option Finish
         running = False
      else:
         card = input("Credit card number: ")
         save_transaction(prices[select-1],card,articles[select-1]) 

New Afternoon / Night Program
------------------------------

.. code-block:: python
   
   from bank import *

   articles = ["Sfiha","Kitchen","Cake","Cheese Bread"]
   prices = [1.50,2.20,1.80,1.20]
   running = True

   while running:
      option = 1
      for select in articles:
         print(str(option) + "." + select)
         option += 1
      print(str(option) + ".Finish")
      select = int(input("Choose an option: "))
      if select == option:
         # chose the last option Finish
         running = False
      else:
         card = input("Credit card number: ")
         save_transaction(prices[select-1],card,articles[select-1])