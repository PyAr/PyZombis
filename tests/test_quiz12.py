def test_quiz12_1(page):
    # Go to http://localhost:8000/quiz/Quiz12.html
    page.goto("quiz/Quiz12.html")
    page.wait_for_load_state()

    page.click("text=def verbo(s):")

    page.press("text=verbo(s):", "ArrowDown")
    page.press("text=verbo(s):", "Tab")

    page.type("text=verbo(s):", "if len(s) >= 3:")
    page.press("text=verbo(s):", "Enter")

    page.type("text=verbo(s):", "if s[-3:] != 'ing':")
    page.press("text=verbo(s):", "Enter")

    page.type("text=verbo(s):", "s = s + 'ing'")
    page.press("text=verbo(s):", "Enter")
    page.press("text=verbo(s):", "ArrowDown")
    page.press("text=verbo(s):", "Tab")
    page.press("text=verbo(s):", "Tab")

    page.type("text=verbo(s):", "else:")
    page.press("text=verbo(s):", "Enter")

    page.type("text=verbo(s):", "s = s + 'ly'")
    page.press("text=verbo(s):", "Enter")
    page.press("text=verbo(s):", "ArrowDown")
    page.press("text=verbo(s):", "Tab")

    page.type("text=verbo(s):", "return s")

    page.click("#q12_1 >> *css=button >> text=Run")

    page.hover("#q12_1 >> text=You passed:")
    assert page.inner_text("#q12_1 >> text=You passed:") == "You passed: 100.0% of the tests"
