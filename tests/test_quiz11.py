def test_quiz11_3(page):
    # Go to Quiz 11 page
    page.goto("quiz/Quiz11.html")

    # Do the exercise
    page.click("text=def remplazar_primer_caracter(s):")
    page.keyboard.press("ArrowDown")
    page.keyboard.press("Tab")
    page.keyboard.type("return s[0] + s[1:].replace(s[0], '*')")

    # Run the exercise and check it passed all tests
    page.click("#q11_3 >> *css=button >> text=Run")

    page.hover("#q11_3 >> text=You passed:")
    assert page.inner_text("#q11_3 >> text=You passed:") == "You passed: 100.0% of the tests"
