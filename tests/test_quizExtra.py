def test_quizExtra_4(page):
    # Go to Quiz Extra page
    page.goto("quiz/QuizExtras.html")

    # Do the exercise
    page.click("text=Ejercicio 4")
    page.click("text=def suma_granos(n):")
    page.keyboard.press("ArrowDown")
    page.keyboard.press("Tab")

    # Code to type
    instructions = ["suma = 0", "for n in range(1, 65):", "m = int(pow(2, n - 1))", "suma = suma + m"]
    for inst in instructions:
        page.keyboard.type(inst)
        page.keyboard.press("Enter")
    for i in range(4):
        page.keyboard.press("Backspace")
    page.keyboard.type("return suma")

    # Click button:has-text("Run")
    page.click("#qExtra_4 >> *css=button >> text=Run")

    # Test it passed all unit tests
    page.hover("#qExtra_4 >> text=You passed:")
    assert page.inner_text("#qExtra_4 >> text=You passed:") == "You passed: 100.0% of the tests"
