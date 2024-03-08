Repetitions
============

.. image:: ../img/TWP15_001.jpg
    :height: 15.602cm
    :width: 16.801cm
    :align: center
    :alt: 

.. activecode:: ac_l30_5_en
    :language: python3
    :python3_interpreter: brython 

    from browser import timer

    print("Welcome!")
    number = 0

    # Define what the button will do when pressed
    def guess():

        global number
        number = int(input("Guess the number: "))
        if number == 42:
            print("You won!")
        else:
            if number > 42:
                print("High")
            else:
                print("Low")

        if number != 42:
            # If the number was not guessed, repeat the function after
            # 3 seconds
            timer.set_timeout(guess, 3000)

    guess()

.. image:: ../img/TWP15_007.png
    :height: 14.804cm
    :width: 22.181cm
    :align: center
    :alt: 


Users Still Dislike It
-----------------------

.. image:: ../img/TWP30_0092.jpg
    :height: 12.571cm
    :width: 7.946cm
    :align: center
    :alt: