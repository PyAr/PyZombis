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
        "billetes.append(cambio // 50)",
        "cambio = cambio % 50",
        "billetes.append(cambio//20)",
        "cambio = cambio % 20",
        "billetes.append(cambio//10)",
        "cambio %= 10",
        "billetes.append(cambio//5)",
        "cambio%=5",
        "billetes.append(cambio//2)",
        "cambio%=2",
        "billetes.append(cambio//1)",
        "return billetes",
    ]

    for inst in instructions:
        page.type("text=def calcular_cambio(cobro, pago):", inst)
        page.press("text=def calcular_cambio(cobro, pago):", "Enter")

    # Click #ejercicio-2 >> text=Run
    page.click("#ejercicio-2 >> text=Run")

    # Test it passed all unit tests
    page.hover("#q3_2 >> text=You passed:")
    assert page.inner_text("#q3_2 >> text=You passed:") == "You passed: 100.0% of the tests"
