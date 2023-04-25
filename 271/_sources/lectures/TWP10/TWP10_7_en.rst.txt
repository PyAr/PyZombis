Exercise List “again”
===========================

+ Conditions

.. activecode:: ac_l10_7_001_en
   :nocodelens:
   :stdin:

   print("¡Welcome to my program!")
   print("Always come back!")

+ Conditions -- if


.. activecode:: ac_l10_7_002_en
   :nocodelens:
   :stdin:
   
   a = 8
   b = 5
   if a > b:
     print("The first number is the largest")
   if b > a:
     print("The second number is the biggest!")


+ Conditions -- if / else


.. activecode:: ac_l10_7_003_en
   :nocodelens:
   :stdin:
   
   years_old = 1
   if years_old <= 3:
    print("his car is new")
   if years_old > 3:
    print("his car is old")


+ nested structures

.. activecode:: ac_l10_7_004_en
   :nocodelens:
   :stdin:
   
   minutes = 800
   if minutes < 200:
       price = 0.20
   else:
      if minutes <= 400:
         price = 0.18
      else:
         price = 0.15 
   print("phone account : $%6.2f" % (minutes * price))

+ elif

.. activecode:: ac_l10_7_005_en
   :nocodelens:
   :stdin:
   
   minutes = 1000
   if minutes < 200:
      price = 0.2
   elif minutes <= 400:
      price = 0.18
   elif minutes <= 800:
      price = 0.15
   else:
      price = 0.08
   print("phone account : $%6.2f" % (minutes * price))

.. image:: ../img/TWP05441.jpeg
    :height: 12.571cm
    :width: 9.411cm
    :align: center
    :alt:

“Life is like riding a bicycle. To keep balance, you must keep moving”. - Einstein
