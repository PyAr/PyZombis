Data Input
==========

+ Up until now our programs have worked with known values.
+ We will begin to obtain the values during the execution of the programs.

.. activecode:: ac_l05_15a_en
   :nocodelens:
   :stdin:

   name = input("Write your name: ")
   print(f"Hello {name}!")


Data Input Conversion
---------------------

+ The ``input`` function only returns strings.
+ We use the ``int()`` and ``float()`` functions to convert a value to an integer or
  a floating-point value respectively.

.. activecode:: ac_l05_15b_en
   :nocodelens:
   :stdin:

   unit_value = float(input("Value of a donut: "))
   n = int(input("Number of donuts: "))
   print(f"Total value: ${(n * unit_value)}")


Common Error
------------

+ Opening two parentheses and closing only one.
+ The same can happen to us with braces, brackets, quotes, among other characters. ``{}``, ``[]``, ``" "`` whenever we open one we must remember to close it.
+ The error will end with the following:

.. code-block:: python

    >>> unit_value = float(input("Value of a donut: ")
    File <string>, line 1
    unit_value = float(input("Value of a donut: ")
                             ^
    SyntaxError: '( was never closed

+ Whenever the line seems correct, check the immediately previous line.