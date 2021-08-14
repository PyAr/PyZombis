def test_quiz13_1(page):
    # Go to Quiz 13 page
    page.goto("quiz/Quiz13.html")

    # Do the exercise
    page.click("text=def terminan_igual(palabras):")
    page.keyboard.press("ArrowDown")
    page.keyboard.press("Tab")
    page.keyboard.type(
        "return len([palabra for palabra in palabras if len(palabra) >= 2 and palabra[0] == palabra[-1]])",
    )

    # Run the exercise and check it passed all unit tests
    page.click("#q13_1 >> *css=button >> text=Run")

    page.hover("#q13_1 >> text=You passed:")
    assert page.inner_text("#q13_1 >> text=You passed:") == "You passed: 100.0% of the tests"
