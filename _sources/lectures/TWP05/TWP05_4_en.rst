Concepts about variables and assignment
=======================================

+ Variables are used to store values ​​and name an area of ​​the computer's memory
+ The symbol for assignment is the equals sign (``=``)

.. codelens:: cl_l05_4a
    
    a = 2
    b = 3
    print(a + b)

+ Like in mathematics, we pass parameters or values ​​to a function using parentheses
+ A function ``f(x)``, where ``f`` is the name of the function and ``x`` is a parameter
+ In the previous example, ``print`` is the name of the function and ``a + b`` is the value passed as a parameter
+ We can also use the interactive mode **Try it here!**

.. only:: html

   .. raw:: html
      :file: ../_static/interpreter.html


+ The first two lines do not print anything to the screen, so only the result of the third line is shown

Other alternatives
******************

+ You may wonder why we create two variables, ``a`` and ``b``, to add two numbers?
+ We could have achieved the same result in several ways.

.. codelens:: cl_l05_4b
    
    print(2 + 3)
    print(5)

+ What is the difference between the first way and the last two?
+ The first case includes the logic we used to obtain the result
+ This way, we explicitly state the algorithm we used mentally to solve this problem
+ In the last two cases, we simply command the computer to print something specific, without making clear the logic to arrive at that result.