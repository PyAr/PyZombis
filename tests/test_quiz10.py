def test_quiz10_11_good(page):
    # Go to the Quiz 10 page
    page.goto("quiz/Quiz10.html")
    page.wait_for_load_state()

    page.click("text=Ejercicio 11")
    page.click("text=def tiene_2(numeros):")

    page.press("text=def tiene_2(numeros):", "ArrowDown")
    page.press("text=def tiene_2(numeros):", "Tab")

    page.type("text=def tiene_2(numeros):", "return '2, 2' in str(numeros)")

    page.click("#q10_11 >> *css=button >> text=Run")

    page.hover("#q10_11 >> text=You passed:")
    page.press("text=def tiene_2(numeros):", "ArrowDown")

    assert page.inner_text("#q10_11 >> text=You passed:") == "You passed: 100.0% of the tests"
