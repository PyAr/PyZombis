Repetitions
============

.. image:: ../img/TWP15_001.jpg
    :height: 15.602cm
    :width: 16.801cm
    :align: center
    :alt: 

.. activecode:: ac_l30_5_en
    :nocodelens:
    :stdin:

    number = 0
    def guess():
        global number
        number = int(input("Welcome!\nGuess the number: "))
        while number != 42:
            if number > 42:
                number = int(input("High\nTry again!"))
            else:
                number = int(input("Low\nTry again!"))
        print("You won!")
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