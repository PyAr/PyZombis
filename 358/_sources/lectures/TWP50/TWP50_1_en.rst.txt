Introduction to a Graphical User Interface
===========================================

+ In programming, just writing code is not enough.
+ It is not enough for it to work; it must also be attractive to the user.
+ Text-based interfaces work, but they are limited and outdated.
+ Motivated by this, it is necessary to create graphical user interfaces (GUIs).
+ GUIs can be found in different places:
    + In computer programs, for example, a well-known one is the Office program. These interfaces can be called *desktop interfaces*.
    + We can also find interfaces that are seen within the browser, such as the Facebook page. These interfaces can be called *web interfaces*.
    + Finally, we find interfaces in applications for our smartphones, an example being the Whatsapp application, representing *mobile interfaces*.
+ In Python, there are different tools and libraries for creating interfaces, including the well-known ``tkinter`` and ``PyQt`` libraries for creating desktop interfaces.
+ Since our goal is to create interfaces within the browser, we will use ``brython`` again.
+ Brython allows the creation of simple graphical interfaces through its syntax.
+ In this exercise, we will create the **Zombie Quiz Show**.

Zombie Quiz Show
----------------

+ It is a game with different options.
+ *Option 1* is for the correct answer and *Option 2* is for the incorrect answer.
+ The program will have a sound effect for each answer.
+ The program must keep track of how many correct and incorrect answers there were.
+ Finally, press 0 to finish.

Playing Audio
-------------

+ Let's start by creating the logic for playing audio.
+ There are various ways to do this; one option might be to use the ``pygame`` library, among others.
+ Again, we will use the Brython module.
+ The code below generates an HTML element called ``audio``.
+ On this `page <https://bigsoundbank.com/UPLOAD/ogg/>`_, you can obtain free sounds that you can use in the program.
    + You just need to copy and paste the url of the sound you like.


.. activecode:: ac_l50_1a_en
    :nocodelens:
    :language: python3
    :python3_interpreter: brython


    from browser import document, html

    url_audio = "" # Add a link of an audio to play it
    print("Creating the audio element")
    document <= html.AUDIO(id="audio", src=url_audio, controls=True)

+ You noticed that the audio element with controls to play and stop it was created.
+ You can add as many sounds as you want.
+ But how do I handle when the sound is played and stopped through the program?
    + Let's link events to achieve it.

.. activecode:: ac_l50_1b_en
    :nocodelens:
    :language: python3
    :python3_interpreter: brython

    from browser import document, html, timer


    def create_element(url_audio, audio_name):
        print(f"Creating the audio element {url_audio}")
        document <= html.AUDIO(id=audio_name, src=url_audio)

    # Function to play the audio
    def play_audio(element):
        document[element].play()

    # Function to pause the audio
    def pause_audio(element):
        document[element].pause()


    # Bell sound
    create_element("https://bigsoundbank.com/UPLOAD/ogg/0001.ogg", "audio_1")
    # Knock sound
    create_element("https://bigsoundbank.com/UPLOAD/ogg/0005.ogg", "audio_2")

    # Start the audios
    play_audio("audio_1")
    play_audio("audio_2")

    # Plays only 10 seconds of the audio, then stops
    timer.set_timeout(pause_audio, 10000, "audio_1")

    # Plays only 5 seconds of the audio, then stops
    timer.set_timeout(pause_audio, 5000, "audio_2")

.. image:: ../img/TWP50_004.png
    :height: 9.626cm
    :width: 6.118cm
    :align: center
    :alt:

+ The sounds are playing very well.
+ Now that audio is working, let's create the Zombie Quiz Show!

.. image:: ../img/TWP50_007.jpg
   :height: 7.487cm
   :width: 10.688cm
   :align: center
   :alt:
