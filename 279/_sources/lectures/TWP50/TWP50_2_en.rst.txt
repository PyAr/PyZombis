Zombie Questions Show
======================

+ Let's start with the program logic using a text interface.
+ Remember the requirements:
    + *Option 1* is for the correct answer and *Option 2* for the incorrect answer.
    + Count how many correct and incorrect answers there were.
    + *Option 0* is to terminate.

.. activecode:: ac_l50_2
    :nocodelens:

    correctas = incorrectas = 0

    opcion = int(input("Select: 1) Correct 2) Incorrect 0) Terminate"))

    # While the option is not zero, accumulate the values
    while opcion != 0:
        if opcion == 1:
            correctas = correctas + 1
        if opcion == 2:
            incorrectas = incorrectas + 1
        opcion = int(input("Select: 1) Correct 2) Incorrect 0) Terminate"))

    print(f"Correct:{correctas} Incorrect:{incorrectas}")

+ Result

.. image:: ../img/TWP50_006.png
    :height: 7.989cm
    :width: 15.027cm
    :align: center
    :alt:

.. image:: ../img/TWP50_003.png
    :height: 7.01cm
    :width: 6.825cm
    :align: center
    :alt:

+ Perfect! The boss is happy, it works great.
+ The sounds requirement is still missing.
+ However... Is the text interface new?