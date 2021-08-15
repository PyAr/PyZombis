def test_quiz11_1(page):
    # Go to http://localhost:8000/quiz/Quiz11.html
    page.goto("quiz/Quiz11.html")
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
    page.click("#q11_1 >> *css=button >> text=Run")

    page.hover("#q11_1 >> text=You passed:")
    assert page.inner_text("#q11_1 >> text=You passed:") == "You passed: 100.0% of the tests"
