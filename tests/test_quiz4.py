def test_quiz4_1(page):
    # Go to Quiz 4 page
    page.goto("quiz/Quiz4.html")

    # Do the exercise
    page.click("text=def valores_extremos(numeros):")
    page.keyboard.press("ArrowDown")
    page.keyboard.press("Tab")
    page.keyboard.type("return (max(numeros), min(numeros))")

    # Run the exercise and check it passed all tests
    page.click("#q4_1 >> *css=button >> text=Run")

    page.hover("#q4_1 >> text=You passed:")
    assert page.inner_text(
        "#q4_1 >> text=You passed:") == "You passed: 100.0% of the tests"


def test_quiz4_en(page):
    # Go to Quiz 4 page
    page.goto("quiz/Quiz4_en.html")

    # Do the exercise
    page.click("text=def valores_extremos(numeros):")
    page.keyboard.press("ArrowDown")
    page.keyboard.press("Tab")
    page.keyboard.type("return (max(numeros), min(numeros))")

    # Run the exercise and check it passed all tests
    page.click("#q4_1_en >> *css=button >> text=Run")

    page.hover("#q4_1_en >> text=You passed:")
    assert page.inner_text(
        "#q4_1_en >> text=You passed:") == "You passed: 100.0% of the tests"
