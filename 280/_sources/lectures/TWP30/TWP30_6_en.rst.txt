Raffle the number to guess
============================


.. activecode:: ac_l30_6
    :language: python3
    :python3_interpreter: brython

    from browser import document as doc
    from browser import html
    from browser import timer
    from random import randint

    print("Welcome!")
    random_number = randint(1, 100)
    number = 0

    doc <= html.DIV(id="div_game_2")

    # We create a text box where to enter the number we want
    doc["div_game_2"] <= html.INPUT(id="inp_guess", placeholder="Guess the number", type="number")
    # We create the button to guess
    doc["div_game_2"] <= html.BUTTON("Submit guess", id="btn_guess") + html.BR()

    def confirm_guess(e):
        global number
        number = int(doc["inp_guess"].value)

        if number == random_number:
            print("You won!")
            print("End of game!")
            # If the number is guessed, the button disappears and the game ends
            doc["btn_guess"].style.display = "none"
        else:
            if number > random_number:
                print("High")
            else:
                print("Low")

    # When you press the button, it invokes the confirm_guess function
    doc["btn_guess"].bind("click", confirm_guess)


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