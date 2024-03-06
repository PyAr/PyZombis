Using a messagebox
====================

.. code-block:: python

   def save_data():
      try:
         fileD = open("orders.txt","a")
         fileD.write("Destination:\n")
         fileD.write("%s\n" %destination.get())
         fileD.write("Description:\n")
         fileD.write("%s\n" %description.get())
         fileD.write("Address:\n")
         fileD.write("%s\n" %address.get("1.0",END))
         destination.set(None)
         description.delete(0,END)
         address.delete("1.0",END)
      except Exception as exception:
         app.title('File writing error: %s' %exception)


.. image:: ../img/TWP54_009.jpg
   :height: 8.042cm
   :width: 18.335cm
   :align: center
   :alt: 


.. image:: ../img/TWP54_010.jpg
   :height: 15.573cm
   :width: 13.348cm
   :align: center
   :alt:

.. poll:: TWP54E
   :scale: 3
   :allowcomment:

   On a scale from 1 (needs improvement) to 3 (excellent),
   how would you rate this chapter?
