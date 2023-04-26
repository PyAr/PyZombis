``if``
======

+ Read two integer values and print the larger one

.. codelens:: cl_l10_3a_en_en

    a = 8
    b = 5
    if a > b:
        print("The first number is the largest!")
    if b > a:
        print("The second number is the biggest!")


Two points and indentation
**************************

+ Note that in Python it is mandatory to complete any condition (if) with ``:``.
+ Also remember to indent the code blocks inside the conditions, it is mandatory.


Check if a car is new or old:
+ If the car is at least three years old, it's new, it is old otherwise.

.. codelens:: cl_l10_3b_en_en

    years_old = 10
    if years_old <= 3:
        print("his car is new")
    if years_old > 3:
        print("his car is old")

+ Ask the speed of a car, assuming it is an integer.
+ In case the speed exceeds 110 km/h, display a message saying that the user has been fined.
+ Show the amount of the fine if you are fined, charging ``$5.00`` for each km above the 110 km/h.

.. codelens:: cl_l10_3c_en_en

    speed = 120
    if speed > 110:
        print("you have been fined")
        fine = (speed - 110) * 5
        print("Value of the fine : $%5.2f " % fine)
