def test_quiz6_1(page):
    # Go to http://localhost:8000/quiz/Quiz6.html
    page.goto("quiz/Quiz6.html")

    page.click("text=def dormir(dia_semana, dia_festivo):")
    page.keyboard.press("ArrowDown")
    page.keyboard.press("Tab")

    page.keyboard.type("if not dia_semana or dia_festivo:")
    page.keyboard.press("Enter")
    page.keyboard.type("return True")
    page.keyboard.press("Enter")
    page.keyboard.type("return False")

    # Run an check it passed all unit tests
    page.click("#q6_1 >> *css=button >> text=Run")

    page.hover("#q6_1 >> text=You passed:")
    assert page.inner_text("#q6_1 >> text=You passed:") == "You passed: 100.0% of the tests"
