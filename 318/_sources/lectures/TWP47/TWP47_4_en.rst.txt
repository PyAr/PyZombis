Discounts
==========

+ Now under a new management, sales at FATEC will have a 10% discount!
+ For this, a fatec.py module will be created
+ Initially, the discount will be 10% for all sandwiches


.. image:: ../img/TWP47_015.png
   :height: 1.799cm
   :width: 9.524cm
   :align: center
   :alt: 


.. code-block:: python
   
   from banco import *
   from fatec import *

   items = ["Sfiha","Cocina","Pastel","Pan de queso"]
   prices = [1.50,2.20,1.80,1.20]
   running = True

   while running:
      option = 1
      for choice in items:
         print(str(option) + "." + choice)
         option += 1
      print(str(option) + ".Finish")
      choice = int(input("Choose an option"))
      if choice == option:
         # Chose the last option - "Finish"
         running = False
      else:
         card_number = input("Credit card number: ")
         price = discount(prices[choice-1]) 
         save_transaction(price, card_number, items[choice-1])



+ We will have an additional 50% discount for cakes due to the Japanese colony
+ New japa.py module


.. image:: ../img/TWP47_017.png
   :height: 2.199cm
   :width: 12.158cm
   :align: center
   :alt: