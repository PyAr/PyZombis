def test_TWP18_ac_5(page):
    # Deal with prompt box
    def handle_dialog(dialog):
        dialog.accept("palabra")

    # Go to TWP18 page
    page.goto("lectures/TWP18/TWP18_3.html")

    # Do the exercise
    page.click("text=# Utilice la función input para leer la palabra del usuario.")
    page.keyboard.press("ArrowDown")

    instructions = [
        "palabra = input('alguna palabra: ')",
        "intercambio = ''",
        "for c in palabra:",
        "if c in 'aeiou':",
        "intercambio += c",
    ]

    for inst in instructions:
        page.keyboard.type(inst)
        page.keyboard.press("Enter")

    for i in range(4):
        page.keyboard.press("Backspace")

    page.keyboard.type("else:")
    page.keyboard.press("Enter")
    page.keyboard.type("intercambio += '*'")

    # Run the exercise
    page.click("#ac_l18_3d >> *css=button >> text=Run")
    # Fill prompt box
    page.on("dialog", handle_dialog)

    # Check whether it passed all unit tests
    page.hover("#ac_l18_3d >> text=You passed:")
    assert page.inner_text("#ac_l18_3d >> text=You passed:") == "You passed: 100.0% of the tests"
