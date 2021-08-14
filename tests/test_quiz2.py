def test_quiz2_2(page):
    page.goto("quiz/Quiz2.html")

    # Do the exercise
    page.click("text=Ejercicio 2")
    page.click("text=def es_bisiesto(anio):")
    page.keyboard.press("ArrowDown")
    page.keyboard.press("Tab")
    page.keyboard.type("return anio % 4 == 0 and (anio % 100 != 0 or anio % 400 == 0)")

    # Run the exercise and check it passed all unit tests
    page.click("#q2_2 >> *css=button >> text=Run")

    page.hover("#q2_2 >> text=You passed:")
    assert page.inner_text("#q2_2 >> text=You passed:") == "You passed: 100.0% of the tests"
