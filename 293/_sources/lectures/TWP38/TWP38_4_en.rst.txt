Exercise
=========

+ Modify the previous program so that it can input a value and run for n times instead of the value 10. Assign that value to a variable named ``n``.
+ **You must call your variable n for your program to pass the test, otherwise it will fail.**

.. activecode:: ac_l38_4_en
    :language: python3
    :python3_interpreter: brython

    # File caos.py
    # A program that illustrates the Chaos Theory
    print("This program illustrates chaotic behavior.")
    x = eval(input("Enter a number between 0 and 1:"))
    # Modified code
    n = eval(input("Enter the number of times to run the program:")) 
    for i in range(n):
        x = 3.9 * x * (1 - x)
        print("%2.3f" % x)
    
    ====
    import unittest

    class myTests(unittest.TestCase):

        def testOne(self):
            # Modified code
            self.assertEqual(n, i+1, "The number of cycles is not specified by the user")

    myTests().testOne()
    print("-------------------------------------")
    print("You have passed 100% of the tests.")

Summary
-------

+ The description of a sequence of steps to solve a problem is called a computational algorithm.
+ Algorithms are programs (software) that determine what the computer (hardware) will do.
+ The process of creating software is called programming.

Remember
--------

+ Programming languages have a formal syntax.
+ Computers only understand machine language.
+ Python is a high-level interpreted language.
+ The Python interpreter converts instructions command by command into machine language.