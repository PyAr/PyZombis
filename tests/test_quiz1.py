def test_quiz1_1(page):
    page.goto("quiz/Quiz1.html")

    page.click("pre[role=\"presentation\"]:has-text(\"​\")")

    page.press("textarea", "Tab")
    page.fill("textarea", "return n+m")
    page.click("button:has-text(\"Run\")")

    page.hover("#q1_1 >> text=You passed:")
    assert page.inner_text("#q1_1 >> text=You passed:") == "You passed: 100.0% of the tests"

def test_quiz1_2(page):
    page.goto("quiz/Quiz1.html")

    page.click("text=def metros_a_milimetros(n):")

    page.press("text=def metros_a_milimetros(n):", "ArrowDown")
    page.press("text=def metros_a_milimetros(n):", "Tab")

    page.type("text=def metros_a_milimetros(n):", "return n * 1000")

    page.click("#q1_2 >> *css=button >> text=Run")

    page.hover("#q1_2 >> text=You passed:")
    assert page.inner_text("#q1_2 >> text=You passed:") == "You passed: 100.0% of the tests"