Final version of the Zombies question show
==========================================

.. activecode:: ac_l50_4a
    :nocodelens:
    :language: python3
    :python3_interpreter: brython

    from browser import document, html
    from browser.widgets.dialog import Dialog


    def create_element(audio_url, audio_name):
        print(f"Creating the audio element {audio_url}")
        document <= html.AUDIO(id=audio_name, src=audio_url)


    def start_audio(element):
        document[element].play()


    def pause_audio(element):
        document[element].pause()

    correct = incorrect = 0

    # Correct sound
    create_element("http://www.superluigibros.com/downloads/sounds/SNES/SMRPG/wav/smrpg_correct.wav", "correct")
    # Incorrect sound
    create_element("https://bigsoundbank.com/UPLOAD/ogg/1684.ogg", "incorrect")

    d = Dialog("Zombies Question Show", top=20, left=20)

    d.panel <= html.H4("Press the buttons", id="window_title", style=dict(textAlign="center"))
    d.panel <= html.BUTTON("Correct", id="btn_correct")
    d.panel <= html.BUTTON("Incorrect", id="btn_incorrect", style=dict(marginLeft="5em"))

    def press_correct_button(ev):
        global correct
        start_audio("correct")
        correct = correct + 1
        print("You pressed the correct button")

    def press_incorrect_button(ev):
        global incorrect
        start_audio("incorrect")
        incorrect = incorrect + 1
        print("You pressed the incorrect button")

    document["btn_correct"].bind("click", press_correct_button)
    document["btn_incorrect"].bind("click", press_incorrect_button)

+ Something important is missing.
+ The results of each option!

.. image:: ../img/TWP50_013.jpg
   :height: 15.793cm
   :width: 11.6cm
   :align: center
   :alt:

+ Let's change the window to add a label that changes its value.
+ The value will increase every time the respective button is pressed.

.. activecode:: ac_l50_4b
    :nocodelens:
    :language: python3
    :python3_interpreter: brython

    from browser import document, html, bind
    from browser.widgets.dialog import Dialog


    def create_element(audio_url, audio_name):
        print(f"Creating the audio element {audio_url}")
        document <= html.AUDIO(id=audio_name, src=audio_url)


    def start_audio(element):
        document[element].play()


    def pause_audio(element):
        document[element].pause()


    correct = incorrect = 0

    # Correct sound
    create_element("http://www.superluigibros.com/downloads/sounds/SNES/SMRPG/wav/smrpg_correct.wav", "correct")
    # Incorrect sound
    create_element("https://bigsoundbank.com/UPLOAD/ogg/1684.ogg", "incorrect")

    d = Dialog("Zombies Question Show", top=20, left=20)

    d.panel <= html.H4(
        "Press the buttons", id="window_title", style=dict(textAlign="center")
    )
    d.panel <= html.SPAN(
        str(correct), id="correct_counter", style=dict(paddingRight="2em")
    ) + html.BUTTON("Correct", id="btn_correct")
    d.panel <= html.BUTTON(
        "Incorrect", id="btn_incorrect", style=dict(marginLeft="5em")
    ) + html.SPAN(
        str(incorrect), id="incorrect_counter", style=dict(paddingLeft="2em")
    )


    @bind(document["btn_correct"], "click")
    def press_correct_button(ev):
        global correct
        start_audio("correct")
        correct += 1
        document["correct_counter"].textContent = str(correct)
        print("You pressed the correct button")


    @bind(document["btn_incorrect"], "click")
    def press_incorrect_button(ev):
        global incorrect
        start_audio("incorrect")
        incorrect += 1
        document["incorrect_counter"].textContent = str(incorrect)
        print("You pressed the incorrect button")

+ Great! Everything works perfectly.
+ You can change the audio for each option.
+ The boss is happy with the Zombies Question Show.

.. image:: ../img/TWP50_017.jpg
    :height: 14.861cm
    :width: 15.801cm
    :align: center
    :alt:


Remember
--------

+ Use of the functionalities with the ``brython`` component.
+ It is not the only way to create graphical interfaces.
    + Use of third-party library: ``pygame`` and ``tkinter``.
+ To handle events, an event controller is used.
    + Event controller: function that is executed when the event occurs.