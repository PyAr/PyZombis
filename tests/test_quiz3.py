def test_quiz3_2(page):
    # Go to http://localhost:8000/quiz/Quiz3.html
    page.goto("quiz/Quiz3.html")

    # Do the exercise
    page.click("text=def calcular_cambio(cobro, pago):")
    page.press("text=def calcular_cambio(cobro, pago):",
               "ArrowDown")
    page.press("text=def calcular_cambio(cobro, pago):",
               "Tab")
    page.type("text=def calcular_cambio(cobro, pago):",
              "cambio = pago - cobro")
    page.press("text=def calcular_cambio(cobro, pago):",
               "Enter")
    page.type("text=def calcular_cambio(cobro, pago):",
              "billetes = []")
    page.press("text=def calcular_cambio(cobro, pago):",
               "Enter")
    page.type("text=def calcular_cambio(cobro, pago):",
              "billetes.append(cambio//50)")
    page.press("text=def calcular_cambio(cobro, pago):",
               "Enter")
    page.type("text=def calcular_cambio(cobro, pago):",
              "cambio = cambio % 50")
    page.press("text=def calcular_cambio(cobro, pago):",
               "Enter")
    page.type("text=def calcular_cambio(cobro, pago):",
              "billetes.append(cambio//20)")
    page.press("text=def calcular_cambio(cobro, pago):",
               "Enter")
    page.type("text=def calcular_cambio(cobro, pago):",
              "cambio = cambio%20")
    page.press("text=def calcular_cambio(cobro, pago):",
               "Enter")
    page.type("text=def calcular_cambio(cobro, pago):",
              "billetes.append(cambio//10)")
    page.press("text=def calcular_cambio(cobro, pago):",
               "Enter")
    page.type("text=def calcular_cambio(cobro, pago):",
              "cambio = cambio%10")
    page.press("text=def calcular_cambio(cobro, pago):",
               "Enter")
    page.type("text=def calcular_cambio(cobro, pago):",
              "billetes.append(cambio//5)")
    page.press("text=def calcular_cambio(cobro, pago):",
               "Enter")
    page.type("text=def calcular_cambio(cobro, pago):",
              "cambio%=5")
    page.press("text=def calcular_cambio(cobro, pago):",
               "Enter")
    page.type("text=def calcular_cambio(cobro, pago):",
              "billetes.append(cambio//2)")
    page.press("text=def calcular_cambio(cobro, pago):",
               "Enter")
    page.type("text=def calcular_cambio(cobro, pago):",
              "cambio%=2")
    page.press("text=def calcular_cambio(cobro, pago):",
               "Enter")
    page.type("text=def calcular_cambio(cobro, pago):",
              "billetes.append(cambio//1)")
    page.press("text=def calcular_cambio(cobro, pago):",
               "Enter")
    page.type("text=def calcular_cambio(cobro, pago):",
              "return billetes")

    # Click #ejercicio-2 >> text=Run
    page.click("#ejercicio-2 >> text=Run")

    # Test it passed all unit tests
    page.hover("#q3_2 >> text=You passed:")
    assert page.inner_text("#q3_2 >> text=You passed:") == "You passed: 100.0% of the tests"
