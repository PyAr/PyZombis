Basic Window
==============

.. image:: ../img/TWP50_008.jpg
    :height: 13.801cm
    :width: 12.79cm
    :align: center
    :alt:

+ The text interface works, but it is very limited and outdated.
+ Therefore, now that the logic behind the show works, let's create a user interface and improve this text one.
+ Let's start with a basic interface, again using the ``brython`` module.
    + We will use some tools or widgets that are found in Brython.
    + These tools are already implemented.
    + They allow the creation of dialogs or small windows to interact with the user.

Window with Brython
-------------------

.. activecode:: ac_l50_3a_en
    :nocodelens:
    :language: python3
    :python3_interpreter: brython

    from browser import document, html
    from browser.widgets.dialog import Dialog

    # Creating a dialog with a title
    d = Dialog("Zombie Question Show", top=20, left=20)

    # Adding elements such as buttons and titles
    d.panel <= html.H3("Press the buttons", id="window_title", style=dict(textAlign="center"))
    d.panel <= html.BUTTON("Correct", id="btn_correct")
    d.panel <= html.BUTTON("Incorrect", id="btn_incorrect", style=dict(marginLeft="5em"))

+ You may have noticed that in the basic window the buttons did nothing.
+ It is necessary to link an event to each button.
+ This is called event-driven programming.
+ We need to wait for user actions.


Capturing an Event
--------------------

+ To capture an event from a button, it is necessary to create a function.
+ In the function, all the logic that is wanted for the button will be found.
+ We will create a new window with a button and we will capture or link an event.
+ We will show a message on the screen every time the user presses the button.

.. activecode:: ac_l50_3b_en
    :nocodelens:
    :language: python3
    :python3_interpreter: brython

    from browser import document, html
    from browser.widgets.dialog import Dialog

    d = Dialog("Test capturing an event", top=20, left=20)

    d.panel <= html.BUTTON("Press me!", id="btn_press", style=dict(margin="auto", display="block"))

    # Event handling function, showing a message
    def press_button(ev):
        print("You pressed the button")

    document["btn_press"].bind("click", press_button)

+ Perfect, now you know how to capture events.
+ You can capture events using the ``.bind()`` function specifying the event or using a ``@bind`` instruction, also called decorator.
    + This instruction is written on a line previous to the button handling function.
+ Knowing this logic we can finish the Zombie Question Show.
+ Remember the reproduction of sounds and the logic of the different options.