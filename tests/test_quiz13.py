def test_quiz13_1(page):
    # Go to http://localhost:8000/quiz/Quiz13.html
    page.goto("quiz/Quiz13.html")
    page.wait_for_load_state()

    # Do the exercise
    page.click("text=def remover_iguales(numeros):")
    page.keyboard.press("ArrowDown")
    page.keyboard.press("Tab")
    page.keyboard.type("return sorted(list(set(numeros)))")

    # Run the exercise and check it passed all unit tests
    page.click("#q13_1 >> *css=button >> text=Run")

    page.hover("#q13_1 >> text=You passed:")
    assert page.inner_text("#q13_1 >> text=You passed:") == "You passed: 100.0% of the tests"
