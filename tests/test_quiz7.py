def test_quiz7_1_good(page):
    # Go to the Quiz 7 page
    page.goto("quiz/Quiz7.html")
    page.wait_for_load_state()

    page.click("text=def multi_cadena(s, n):")

    page.press("text=def multi_cadena(s, n):", "ArrowDown")
    page.press("text=def multi_cadena(s, n):", "Tab")

    page.type("text=def multi_cadena(s, n):", "return s * n")

    page.click("#q7_1 >> *css=button >> text=Run")

    page.hover("#q7_1 >> text=You passed:")
    assert (
        page.inner_text("#q7_1 >> text=You passed:")
        == "You passed: 100.0% of the tests"
    )


def test_quiz7_1_bad(page):
    # Go to the Quiz 7 page
    page.goto("quiz/Quiz7.html")
    page.wait_for_load_state()

    page.click("text=def multi_cadena(s, n):")

    page.press("text=def multi_cadena(s, n):", "ArrowDown")
    page.press("text=def multi_cadena(s, n):", "Tab")

    page.type("text=def multi_cadena(s, n):", "return 5")

    page.click("#q7_1 >> *css=button >> text=Run")

    page.hover("#q7_1 >> text=You passed:")
    assert (
        page.inner_text("#q7_1 >> text=You passed:") == "You passed: 0.0% of the tests"
    )
