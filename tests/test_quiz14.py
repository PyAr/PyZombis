def test_quiz14_1(page):
    # Go to http://localhost:8000/quiz/Quiz14.html
    page.goto("quiz/Quiz14.html")
    page.wait_for_load_state()

    page.click("text=def remover_iguales(numeros):")

    page.press("text=remover_iguales(numeros):", "ArrowDown")
    page.press("text=remover_iguales(numeros):", "Tab")

    page.type("text=remover_iguales(numeros):", "return sorted(list(set(numeros)))")

    page.click("#q14_1 >> *css=button >> text=Run")

    page.hover("#q14_1 >> text=You passed:")
    assert page.inner_text("#q14_1 >> text=You passed:") == "You passed: 100.0% of the tests"
