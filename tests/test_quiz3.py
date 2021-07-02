def test_quiz3_2(page):
    # Go to http://localhost:8000/quiz/Quiz3.html
    page.goto("quiz/Quiz3.html")

    # Do the exercise
    page.click("text=def calcular_cambio(cobro, pago):")
    page.press("text=def calcular_cambio(cobro, pago):", "ArrowDown")
    page.press("text=def calcular_cambio(cobro, pago):", "Tab")

    instructions = [
        "cambio = pago - cobro",
        "billetes = []",
        "for billete in [50, 20, 10, 5, 2, 1]:",
        "billetes.append(cambio // billete)",
        "cambio = cambio % billete",
    ]

    for inst in instructions:
        page.type("text=def calcular_cambio(cobro, pago):", inst)
        page.press("text=def calcular_cambio(cobro, pago):", "Enter")

    for i in range(4):
        page.press("text=def calcular_cambio(cobro, pago):", "Backspace")

    page.type("text=def calcular_cambio(cobro, pago):", "return billetes")

    # Click #ejercicio-2 >> text=Run
    page.click("#ejercicio-2 >> text=Run")

    # Test it passed all unit tests
    page.hover("#q3_2 >> text=You passed:")
    assert page.inner_text("#q3_2 >> text=You passed:") == "You passed: 100.0% of the tests"
