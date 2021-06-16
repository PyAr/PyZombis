def test_quizExtra2_3_bad(page):
    # Go to Quiz Extras 2 page
    page.goto("quiz/QuizExtras2.html")

    # Complete the exercise
    page.click("text=def calcular_pi(n):")
    page.press("text=def calcular_pi(n):", "ArrowDown")
    page.press("text=def calcular_pi(n):", "Tab")
    page.type("text=def calcular_pi(n):", "return 2")

    # Click button:has-text("Run")
    page.click("#qExtra2_3 >> *css=button >> text=Run")

    # Test it passed all unit tests
    page.hover("#qExtra2_3 >> text=You passed:")
    assert page.inner_text("#qExtra2_3 >> text=You passed:") == "You passed: 0.0% of the tests"
