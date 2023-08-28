Raising an Exception
======================

.. image:: ../img/TWP54_004.jpg
   :height: 11.211cm
   :width: 22.859cm
   :align: center
   :alt: 


Catching the Exception
----------------------

.. image:: ../img/TWP54_005.jpg
   :height: 14.432cm
   :width: 22.771cm
   :align: center
   :alt: 


Handling Exceptions
---------------------

.. code-block :: python

   def save_data():
      try:
         fileD = open("orders.txt","a")
         fileD.write("Destination:\n")
         fileD.write("%s\n" %destination.get())
         fileD.write("Description:\n")
         fileD.write("%s\n" %description.get())
         fileD.write("Speech:\n")
         fileD.write("%s\n" %Speech.get("1.0",END))
         destination.set(None)
         description.delete(0,END)
         address.delete("1.0",END)
      except Exception as exception:
         app.title('Recording file %s' %exception)



+ Note: to test the exception you will need to change the properties of the file


.. image:: ../img/TWP54_007.jpg
   :height: 7.611cm
   :width: 22.859cm
   :align: center
   :alt: