def test_54_4(page):
    page.goto("lectures/TWP54/TWP54_4.html")

    # Do the exercise
    # Erase existing code
    page.click("text=def mi_funcion():")
    page.keyboard.press("ArrowDown")
    for i in range(2):
        page.keyboard.press("Control+Shift+ArrowDown")
    page.keyboard.press("Enter")
    page.keyboard.press("Tab")

    # type code
    ins = [
        "edades = [18, 19, 20]",
        "try:",
        "cuarta = edades[3]",
        "except IndexError as e:",
        "print(f'Error: {e}')",
        "return e",
    ]

    for i in ins[:3]:
        page.keyboard.type(i)
        page.keyboard.press("Enter")
    for i in range(4):
        page.keyboard.press("Backspace")
    for i in ins[3:]:
        page.keyboard.type(i)
        page.keyboard.press("Enter")

    # Click Run button
    page.click("#ac_l54_4 >> *css=button >> text=Run")
    # Check whether it passed all unit tests
    page.hover("#ac_l54_4 >> text=You passed:")
    assert page.inner_text("#ac_l54_4 >> text=You passed:") == "You passed: 100.0% of the tests"
