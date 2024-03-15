Modular Programming
====================

.. image:: ../img/TWP47_001.png
   :height: 11.865cm
   :width: 21.001cm
   :align: center
   :alt: 

Transaction File Transactions.txt
----------------------------------

.. image:: ../img/TWP47_002.png
   :height: 9.515cm
   :width: 22.859cm
   :align: center
   :alt: 

Sale of Salgados
-----------------

.. code-block:: python

   def save_transaction(price, credit_card, description):
      file = open('transactions.txt',"a")
      file.write("%16s%07d%16s\n" %(credit_card,price*100,description))
      file.close()

   articles = ["Sfiha","Cocina","Pastel","Pan de queso"]
   prices = [1.50,2.20,1.80,1.20]
   running = True

   while running:
      option = 1
      for choose in articles:
         print(str(option) + "." + choose)
         option += 1
      print(str(option) + ".Finalizar")
      choose = int(input("Escoja una opción: "))
      if choose == option:
         #escolheu a ultima opcion Finalizar
         running = False
      else:
         credit = input("Número de tarjeta de crédito: ")
         save_transaction(prices[choose-1],credit,articles[choose-1])


.. image:: ../img/TWP47_004.jpg
   :height: 11.112cm
   :width: 15.768cm
   :align: center
   :alt: 


+ Issues: the bank rejected the entire transaction file for the next day period!
+ Not all credit cards were valid
+ Prices were too high: donut sold for R $ 50,791.42!
+ There were no issues in the other periods. What happened

.. image:: ../img/TWP47_005.png
   :height: 5.952cm
   :width: 10.08cm
   :align: center
   :alt: 


.. image:: ../img/TWP47_006.png
   :height: 11.945cm
   :width: 22.859cm
   :align: center
   :alt: 


+ The bank changed the order of the data! [Price / Credit Card / Article]

.. image:: ../img/TWP47_007.png
   :height: 4.001cm
   :width: 22.802cm
   :align: center
   :alt: 


.. image:: ../img/TWP47_008.jpg
   :height: 12.571cm
   :width: 19.998cm
   :align: center
   :alt: