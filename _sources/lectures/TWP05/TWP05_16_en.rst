Exercise List
=============

Use the interactive interpreter below to solve the following exercises.

#. Your current salary is $6500. Calculate your new salary with a 5% increase.
#. Display your name on the screen.
#. Calculate the sum of three variables.
#. What happens if you write text in the previous three variables?
#. Indicate the type of the following values: ``5``, ``5.0``, ``4.3``, ``-2``, ``100``, ``1.333``, ``"10"``
#. Experiment in the interactive Python interpreter using ``type(x)`` where ``x`` is each of the previous values.
#. Is it possible to calculate 2 to the power of one million?
#. Try assigning a variable ``greeting`` the string ``'hello'``.
#. Ask the user to enter their name and store it in another variable ``name``.
#. Is it possible to join both strings of characters (strings) ``greeting`` and ``name``?
#. Try to get the length of the character strings with ``len(x)``


.. only:: html

   .. raw:: html
      :file: ../_static/interpreter.html

.. raw:: html
   
   <br/>

.. reveal:: cl_l05_16a

   #. To calculate a 5% increase we can multiply our value by 1.05, so we have: ``6500*1.05 = 6825.0``. Then, after the increase, your salary will be $6825.
   #. ``print("your name")``
   #. Suppose the variables ``x = 1``, ``y = 2`` and ``z = 3``. To add them up, use the + symbol as follows: ``x + y + z``, which results in the value 6.
   #. Suppose now that the variables are ``x = "Me"``, ``y = "like"`` and ``z = "Python"``. If we add these variables we will get the answer: "MelikePython".
   #. The correct answers are int, float, float, int, int, float, and str.
   #. To know the type of a variable, we use the ``type`` method as follows: ``type(5)``. This code will return ``<class 'int'>`` indicating that this variable is of integer type.
   #. It is possible, just do ``2**1000000`` and you will get the result.
   #. To create a string variable, we can write its value between single or double quotes: ``greeting = "Hello"`` or ``greeting = 'Hello'``.
   #. ``name = input("Enter your name: ")``
   #. Yes. When we add two strings, Python concatenates them. Let's suppose the variables ``x = "greeting"`` and ``y = "name"``. If we add ``x + y``, we will get "greetingname" as the answer.
   #. Suppose we want the length of the string "greeting". To find out, we do ``len(greeting)`` whose result is 6.

.. image:: ../img/TWP05_041.jpeg
   :height: 12.571cm
   :width: 9.411cm
   :align: center
   :alt: 

"Life is like riding a bicycle. To keep your balance, you must keep moving". - Einstein