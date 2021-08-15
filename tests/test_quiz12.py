def test_quiz12_1(page):
    # Go to http://localhost:8000/quiz/Quiz12.html
    page.goto("quiz/Quiz12.html")
    page.wait_for_load_state()

    # Do the exercise
    page.click("text=def verbo(s):")
    page.keyboard.press("ArrowDown")
    page.keyboard.press("Tab")

    # Code to type
    ins = ["if len(s) >= 3:", "if s[-3:] != 'ing':", "s = s + 'ing'", "else:", "s = s + 'ly'"]
    for i in ins[:3]:
        page.keyboard.type(i)
        page.keyboard.press("Enter")
    for i in range(4):
        page.keyboard.press("Backspace")
    for i in ins[3:]:
        page.keyboard.type(i)
        page.keyboard.press("Enter")
    for i in range(8):
        page.keyboard.press("Backspace")
    page.keyboard.type("return s")

    # Run the exercise and check it passed all unit tests
    page.click("#q12_1 >> *css=button >> text=Run")

    page.hover("#q12_1 >> text=You passed:")
    assert page.inner_text("#q12_1 >> text=You passed:") == "You passed: 100.0% of the tests"
