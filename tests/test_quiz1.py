import time


def test_quiz1_1(page):
    page.goto("quiz/Quiz1.html")

    # Do the exercise
    page.click("text=Ejercicio 1")
    page.click("text=def suma(n, m):")
    page.keyboard.press("ArrowDown")
    page.keyboard.press("Tab")
    page.keyboard.type("return n+m")

    # Run the exercise
    page.click("#q1_1 >> *css=button >> text=Run")

    # Check it passed all unit tests
    page.hover("#q1_1 >> text=You passed:")
    assert page.inner_text("#q1_1 >> text=You passed:") == "You passed: 100.0% of the tests"


def test_quiz1_2(page):
    page.goto("quiz/Quiz1.html")

    # Do the exercise

    page.click("text=Ejercicio 2")
    page.click("text=def metros_a_milimetros(n):")
    page.keyboard.press("ArrowDown")
    page.keyboard.press("Tab")
    page.keyboard.type("return n * 1000")

    # Run the exercise
    page.click("#q1_2 >> *css=button >> text=Run")

    # Check it passed all unit tests
    page.hover("#q1_2 >> text=You passed:")
    assert page.inner_text("#q1_2 >> text=You passed:") == "You passed: 100.0% of the tests"
