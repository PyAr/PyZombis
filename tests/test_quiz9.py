def test_quiz9_11_good(page):
    # Go to the Quiz 9 page
    page.goto("quiz/Quiz9.html")
    page.wait_for_load_state()

    # Do the exercise
    page.click("text=Ejercicio 11")
    page.click("text=def tiene_2(numeros):")
    page.keyboard.press("ArrowDown")
    page.keyboard.press("Tab")
    page.keyboard.type("return '2, 2' in str(numeros)")

    # Run the exercise and check it passed all tests
    page.click("#q9_11 >> *css=button >> text=Run")

    page.hover("#q9_11 >> text=You passed:")
    assert page.inner_text("#q9_11 >> text=You passed:") == "You passed: 100.0% of the tests"
