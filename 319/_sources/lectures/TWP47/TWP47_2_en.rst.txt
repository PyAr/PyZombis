Sale of Salgados by Shifts
===========================

Afternoon / Evening Salgados Sale
---------------------------------

.. code-block:: python
   
   def save_transaction(price, credit_card, description):
      file = open('transactions.txt',"a")
      file.write("%16s%07d%16s\n" %(credit_card,price*100,description))
      file.close()

   items = ["Esfiha","Coxinha","Pastel","Cheese bread"]
   prices = [1.50,2.20,1.80,1.20]
   running = True

   while running:
      option = 1
      for item in items:
         print(str(option) + "." + item)
         option += 1
      print(str(option) + ".Finish")
      choice = int(input("Choose an option: "))
      if choice == option:
         #the last option, Finish
         running = False
      else:
         card = input("Credit card number: ")
         save_transaction(prices[choice-1],card,items[choice-1]) 



+ Corrected format by the student!


Morning Salgados Sale
---------------------

.. code-block:: python
   
   def save_transaction(price, credit_card, description):
      file = open('transactions.txt',"a")
      file.write("%16s%07d%16s\n" %(credit_card,price*100,description))
      file.close()

   items = ["Sfiha","Coxinha","Pastel","Cheese bread"]
   prices = [1.50,2.20,1.80,1.20]
   running = True

   while running:
      option = 1
      for item in items:
         print(str(option) + "." + item)
         option += 1
      print(str(option) + ".Finish")
      choice = int(input("Choose an option: "))
      if choice == option:
         #chose the last option
         running = False
      else:
         card = input("Credit card number: ")
         save_transaction(prices[choice-1],card,items[choice-1]) 

+ Products modified, but I forgot about the format!


Module bank.py
--------------

.. image:: ../img/TWP47_011.jpg
   :height: 12.571cm
   :width: 18.267cm
   :align: center
   :alt: 

.. code-block:: python
   
   def save_transaction(price, credit_card, description):
      file = open('transactions.txt',"a")
      file.write("%16s%07d%16s\n" %(credit_card,price*100,description))
      file.close()



+ Note: leave in the same directory as the morning and afternoon/evening programs.