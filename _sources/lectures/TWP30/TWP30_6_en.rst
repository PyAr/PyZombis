Raffle the number to guess
============================


.. activecode:: ac_l30_6_en
    :language: python3
    :python3_interpreter: brython

    from browser import timer
    from random import randint

    print("Welcome!")
    random_number = randint(1, 100) 
    number = 0

    def confirm_guess():
        global number
        number = int(input("Guess the number"))
        
        if number == random_number:
            print("You won!")
            print("End of game!")
        else:
            if number > random_number:
                print("High")
            else:
                print("Low")
        if number!=random_number:
            timer.set_timeout(confirm_guess, 3000)

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