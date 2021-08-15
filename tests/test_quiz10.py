def test_quiz10_3(page):
    # Go to Quiz 10 page
    page.goto("quiz/Quiz10.html")

    # Do the exercise
    page.click("text=Ejercicio 3")
    page.click("text=def remplazar_primer_caracter(s):")
    page.keyboard.press("ArrowDown")
    page.keyboard.press("Tab")
    page.keyboard.type("return s[0] + s[1:].replace(s[0], '*')")

    # Run the exercise and check it passed all tests
    page.click("#q10_3 >> *css=button >> text=Run")

    page.hover("#q10_3 >> text=You passed:")
    assert page.inner_text("#q10_3 >> text=You passed:") == "You passed: 100.0% of the tests"
