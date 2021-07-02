def test_quiz2_2(page):
    page.goto("quiz/Quiz2.html")

    page.click("text=def es_bisiesto(anio):")

    page.press("text=def es_bisiesto(anio):", "ArrowDown")

    page.press("text=def es_bisiesto(anio):", "Tab")

    page.type("text=def es_bisiesto(anio):", "return anio % 4 == 0 and (anio % 100 != 0 or anio % 400 == 0)")

    page.click("#q2_2 >> *css=button >> text=Run")

    page.hover("#q2_2 >> text=You passed:")
    assert page.inner_text("#q2_2 >> text=You passed:") == "You passed: 100.0% of the tests"
