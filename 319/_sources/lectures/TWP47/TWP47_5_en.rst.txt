The names are the same! Now what?
==================================

.. image:: ../img/TWP47_018.png
   :height: 10.722cm
   :width: 19.917cm
   :align: center
   :alt: 

Full Names
----------

+ The solution is to adopt full names.


.. code-block:: python
   
   from bank import *
   import fatec
   import japa

   items = ["Sfiha", "Cuisine", "Cake", "Cheese Bread"]
   prices = [1.50, 2.20, 1.80, 1.20]
   running = True

   while running:
      option = 1
      for choose in items:
         print(str(option) + "." + choose)
         option += 1
      print(str(option) + ".Finish")
      choose = int(input("Choose an option"))
      if choose == option:
         # chose the last option Finish
         running = False
      else:
         card = input("Credit Card Number: ")
         price = fatec.discount(prices[choose - 1])
         if items[choose - 1] == "Cake":
            price = japa.discount(price)
         (price, card, items[choose-1])


Result
------

.. image:: ../img/TWP47_020.png
   :height: 11.324cm
   :width: 22.859cm
   :align: center
   :alt: 

.. image:: ../img/TWP47_021.png
   :height: 11.324cm
   :width: 22.859cm
   :align: center
   :alt: