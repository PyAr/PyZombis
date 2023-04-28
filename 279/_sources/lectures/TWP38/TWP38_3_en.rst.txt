File construction
========================

+ Lines that start with **"#"** are called comments
+ They are intended to be read by humans and Python ignores them
+ Python skips all text from the **"#"** to the end of the line

.. code-block:: python

   # File chaos.py
   # A program that illustrates the Chaos Theory

+ ``x`` is an example of a variable
+ We will assign a value to ``x`` that can be referred to later
+ The message in quotes will be displayed and the response will be stored in ``x``

.. code-block:: python

   x = eval(input("Enter a number between 0 and 1:"))

+ There are loop or cycle commands such as the ``for`` command
+ A loop or cycle is used to repeat a block of code several times
+ In this example, the following block will be repeated 10 times

.. code-block:: python

   for i in range(10):

+ We call **indentation** to the spaces at the beginning of the line
+ In Python, indentation delimits the block that will be executed
+ The calculation ``3.9 * x * (1-x)`` will be performed on the CPU and assigned to the variable
  ``x``

Result
------

.. activecode:: ac_l38_3_en
    :language: python3
    :python3_interpreter: brython

    # File chaos.py
    # A program that illustrates the Chaos Theory
    print("This program illustrates chaotic behavior.")
    x = eval(input("Enter a number between 0 and 1:"))
    for i in range(10):
        x = 3.9 * x * (1 - x)
        print("%2.3f" % x)


+ The chaos program returns very different values, even when the input is similar.