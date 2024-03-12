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

.. activecode:: ac_l54_2a_en
   :nocodelens:
   :language: python3
   :python3_interpreter: brython

   from browser import window, prompt, alert

   def save_data():
      try:
         destination = prompt("Enter Destination")
         if not destination:
               raise ValueError("Destination cannot be empty")
         window.sessionStorage["Destination"] = destination
         description= prompt("Enter Description")
         if not description:
               raise ValueError("Description cannot be empty")
         window.sessionStorage["Description"] = description
         speech= prompt("Enter Speech")
         if not speech:
               raise ValueError("Speech cannot be empty")
         window.sessionStorage["Speech"] = speech
      except Exception as exception:
         alert(f'Error: {exception}')

   save_data()


+ Note: to test the exception you will need to change the properties of the file


.. image:: ../img/TWP54_007.jpg
   :height: 7.611cm
   :width: 22.859cm
   :align: center
   :alt: