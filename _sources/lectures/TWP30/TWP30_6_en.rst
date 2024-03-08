Raffle the number to guess
============================


.. activecode:: ac_l30_6_en
    :nocodelens:
    :stdin:

    from random import randint

    random_number = randint(1, 100) 
    number = 0

    def confirm_guess():
        global number
        number = int(input("Welcome!\nGuess the number"))
        
        while number != random_number:
            if number > random_number:
                number = int(input("High\nTry again!"))
            else:
                number = int(input("Low\nTry again!"))
        print("You won!")

    confirm_guess()

Now it's on!
------------

.. image:: ../img/TWP30_012.jpg
    :height: 10.873cm
    :width: 14.154cm
    :alt: 


Summary
-------

+ You created a game!
+ Commands do things
+ Conditionals decide things
+ Loops repeat things
+ Conditions help you decide if something is true or false
+ Assignment defines a name for a value.