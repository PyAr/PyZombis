def test_quiz3_2(page):
    # Go to http://localhost:8000/quiz/Quiz3.html
    page.goto("quiz/Quiz3.html")

    # Do the exercise
    page.click("#ejercicio-2 >> text=3​ >> pre[role=\"presentation\"]")
    page.press("text=Ejercicio 2¶ Indique cómo se debe devolver un cambio utilizando un número mínimo >> textarea", "Tab")
    page.click("text=1def calcularCambio(cobro, pago):2​3 4​ >> :nth-match(pre[role=\"presentation\"], 3)")
    page.fill("text=Ejercicio 2¶ Indique cómo se debe devolver un cambio utilizando un número mínimo >> textarea", "cambio = pago - cobro")
    page.press("text=Ejercicio 2¶ Indique cómo se debe devolver un cambio utilizando un número mínimo >> textarea", "Enter")
    page.fill("text=Ejercicio 2¶ Indique cómo se debe devolver un cambio utilizando un número mínimo >> textarea", "billetes = []")
    page.press("text=Ejercicio 2¶ Indique cómo se debe devolver un cambio utilizando un número mínimo >> textarea", "Enter")
    page.fill("text=Ejercicio 2¶ Indique cómo se debe devolver un cambio utilizando un número mínimo >> textarea", "billetes.append(cambio//50)")
    page.press("text=Ejercicio 2¶ Indique cómo se debe devolver un cambio utilizando un número mínimo >> textarea", "Enter")
    page.fill("text=Ejercicio 2¶ Indique cómo se debe devolver un cambio utilizando un número mínimo >> textarea", "cambio = cambio % 50")
    page.press("text=Ejercicio 2¶ Indique cómo se debe devolver un cambio utilizando un número mínimo >> textarea", "Enter")
    page.fill("text=Ejercicio 2¶ Indique cómo se debe devolver un cambio utilizando un número mínimo >> textarea", "billetes.append(cambio//20)")
    page.press("text=Ejercicio 2¶ Indique cómo se debe devolver un cambio utilizando un número mínimo >> textarea", "Enter")
    page.fill("text=Ejercicio 2¶ Indique cómo se debe devolver un cambio utilizando un número mínimo >> textarea", "cambio = cambio%20")
    page.press("text=Ejercicio 2¶ Indique cómo se debe devolver un cambio utilizando un número mínimo >> textarea", "Enter")
    page.fill("text=Ejercicio 2¶ Indique cómo se debe devolver un cambio utilizando un número mínimo >> textarea", "billetes.append(cambio//10)")
    page.press("text=Ejercicio 2¶ Indique cómo se debe devolver un cambio utilizando un número mínimo >> textarea", "Enter")
    page.fill("text=Ejercicio 2¶ Indique cómo se debe devolver un cambio utilizando un número mínimo >> textarea", "cambio = cambio%10")
    page.press("text=Ejercicio 2¶ Indique cómo se debe devolver un cambio utilizando un número mínimo >> textarea", "Enter")
    page.fill("text=Ejercicio 2¶ Indique cómo se debe devolver un cambio utilizando un número mínimo >> textarea", "billetes.append(cambio//5)")
    page.press("text=Ejercicio 2¶ Indique cómo se debe devolver un cambio utilizando un número mínimo >> textarea", "Enter")
    page.fill("text=Ejercicio 2¶ Indique cómo se debe devolver un cambio utilizando un número mínimo >> textarea", "cambio%=5")
    page.press("text=Ejercicio 2¶ Indique cómo se debe devolver un cambio utilizando un número mínimo >> textarea", "Enter")
    page.fill("text=Ejercicio 2¶ Indique cómo se debe devolver un cambio utilizando un número mínimo >> textarea", "billetes.append(cambio//2)")
    page.press("text=Ejercicio 2¶ Indique cómo se debe devolver un cambio utilizando un número mínimo >> textarea", "Enter")
    page.fill("text=Ejercicio 2¶ Indique cómo se debe devolver un cambio utilizando un número mínimo >> textarea", "cambio%=2")
    page.press("text=Ejercicio 2¶ Indique cómo se debe devolver un cambio utilizando un número mínimo >> textarea", "Enter")
    page.fill("text=Ejercicio 2¶ Indique cómo se debe devolver un cambio utilizando un número mínimo >> textarea", "billetes.append(cambio//1)")
    page.press("text=Ejercicio 2¶ Indique cómo se debe devolver un cambio utilizando un número mínimo >> textarea", "Enter")
    page.fill("text=Ejercicio 2¶ Indique cómo se debe devolver un cambio utilizando un número mínimo >> textarea", "return billetes")

    # Click #ejercicio-2 >> text=Run
    page.click("#ejercicio-2 >> text=Run")

    # Test it passed all tests
    page.hover("#q3_2 >> text=You passed:")
    assert page.inner_text("#q3_2 >> text=You passed:") == "You passed: 100.0% of the tests"