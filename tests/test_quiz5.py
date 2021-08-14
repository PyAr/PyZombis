def test_quiz5_10(page):
    # Go to http://localhost:8000/quiz/Quiz5.html
    page.goto("quiz/Quiz5.html")
    page.wait_for_load_state()

    page.click("text=def es_numero_ponteironuloville(numero):")

    page.keyboard.press("ArrowDown")
    page.keyboard.press("Tab")

    page.keyboard.type("return True")

    page.click("#q5_10 >> *css=button >> text=Run")

    page.hover("#q5_10 >> text=You passed:")
    assert page.inner_text("#q5_10 >> text=You passed:") == "You passed: 50.0% of the tests"
