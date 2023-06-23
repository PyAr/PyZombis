def test_quiz12_1(page):
    # Go to Quiz 12 page
    page.goto("quiz/Quiz12.html")

    # Do the exercise
    page.click("text=def terminan_igual(palabras):")
    page.keyboard.press("ArrowDown")
    page.keyboard.press("Tab")
    page.keyboard.type(
        "return len([palabra for palabra in palabras if len(palabra) >= 2 and palabra[0] == palabra[-1]])",
    )

    # Run the exercise and check it passed all unit tests
    page.click("#q12_1 >> *css=button >> text=Run")

    page.hover("#q12_1 >> text=You passed:")
    assert page.inner_text("#q12_1 >> text=You passed:") == "You passed: 100.0% of the tests"

def test_quiz12_1_en(page):

    page.goto("quiz/Quiz12_en.html")

    page.click("text=def ends_equal(words):")
    page.keyboard.press("ArrowDown")
    page.keyboard.press("Tab")
    page.keyboard.type(
        "return len([word for word in words if len(word) >= 2 and word[0] == word[-1]])",
    )

    page.click("#q12_1_en >> *css=button >> text=Run")

    page.hover("#q12_1_en >> text=You passed:")
    assert page.inner_text("#q12_1_en >> text=You passed:") == "You passed: 100.0% of the tests"
