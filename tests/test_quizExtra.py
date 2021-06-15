def test_quizExtra_4(page):
    # Go to Quiz Extra page
    page.goto("quiz/QuizExtras.html")

    # Do the exercise
    page.click("text=def suma_granos(n):")
    page.press("text=def suma_granos(n):", "ArrowDown")
    page.press("text=def suma_granos(n):", "Tab")

    instructions = ["suma = 0", "for n in range(1, 65):", "m = int(pow(2, n - 1))", "suma = suma + m"]
    for inst in instructions:
        page.type("text=def suma_granos(n):", inst)
        page.press("text=def suma_granos(n):", "Enter")

    for i in range(4):
        page.press("text=def suma_granos(n):", "Backspace")
    page.type("text=def suma_granos(n):", "return suma")

    # Click button:has-text("Run")
    page.click("#qExtra_4 >> *css=button >> text=Run")

    # Test it passed all unit tests
    page.hover("#qExtra_4 >> text=You passed:")
    assert page.inner_text("#qExtra_4 >> text=You passed:") == "You passed: 100.0% of the tests"
