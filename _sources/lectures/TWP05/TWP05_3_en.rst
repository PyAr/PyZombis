Interactive Mode and Editing Mode
=================================

Python interpreter
------------------

+ The interpreter is a program that accepts commands written in Python and executes them line by line
+ The interpreter verifies that we have written the program correctly, displaying error messages if there is a problem
+ There are two modes in the Python interpreter: interactive mode and editing mode
+ In the previous examples, we used interactive mode
+ An advantage of interactive mode is being able to test commands and get an instant response


Calculator in the interpreter
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: python

    >>> 2+3 # Don't forget to press enter
    5
    >>> 5-3
    2
    >>> 10-4+2
    8
    >>> 2*10 # Asterisk for multiplication
    20
    >>> 10/4 # Slashed line for division
    2.5
    >>> 2**3 # Exponentiation
    8
    >>> 10%3 # Modulus (remainder of division)
    1
    >>> 16%7
    2

**Now try it for yourself!**
Write these operations in the interpreter and use interactive mode as a calculator

.. only:: html

   .. raw:: html
      :file: ../_static/interpreter.html


Editing Mode
------------

.. activecode:: ac_l05_3_en
   :nocodelens:

   Try pressing enter inside the editing block.
   Note that nothing happens when you press enter at the end of the line.
   In editing mode, it is necessary to "execute" the program (To do this, press the Run button).
   
   ~~~~
   print("first message")

Precautions when writing programs
---------------------------------

+ Upper case and lower case letters are different
+ Quotes are very important and should not be overlooked. Every time you open quotes, don't forget to close them
+ Parentheses are not optional in Python. Every open parenthesis must be closed
+ Spaces are very important. The Python language is based on the amount of white space before the beginning of each line to perform different operations. This is known as indentation.