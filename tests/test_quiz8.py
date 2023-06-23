def test_quiz8_1(page):
    # Go to Quiz 8 page
    page.goto("quiz/Quiz8.html")

    # Complete the exercise
    page.click("text=def primer_o_ultimo_6(numeros):")
    page.keyboard.press("ArrowDown")
    page.keyboard.press("Tab")
    page.keyboard.type("return 6 == numeros[0] or 6 == numeros[-1]")

    # Click button:has-text("Run")
    page.click("#q8_1 >> *css=button >> text=Run")

    # Test it passed all unit tests
    page.hover("#q8_1 >> text=You passed:")
    assert page.inner_text("#q8_1 >> text=You passed:") == "You passed: 100.0% of the tests"

def test_quiz8_1_en(page):
    page.goto("quiz/Quiz8_en.html")

    # Complete the exercise
    page.click("text=def first_or_last_6(numbers):")
    page.keyboard.press("ArrowDown")
    page.keyboard.press("Tab")
    page.keyboard.type("return 6 == numbers[0] or 6 == numbers[-1]")

    # Click button:has-text("Run")
    page.click("#q8_1_en >> *css=button >> text=Run")

    # Test it passed all unit tests
    page.hover("#q8_1_en >> text=You passed:")
    assert page.inner_text("#q8_1_en >> text=You passed:") == "You passed: 100.0% of the tests"
    
