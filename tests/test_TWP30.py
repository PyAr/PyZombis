def test_l30_5(page):
    import time
    page.goto("lectures/TWP30/TWP30_5.html")
    page.click("text=5. Repeticiones¶")
    page.once("dialog", lambda dialog: dialog.accept(g))  
    g='42'
    page.click("#ac_l30_5 >> *css=button >> text=Save & Run")
    page.click("text=Ingrese un numero")
    page.keyboard.type(g)
    page.keyboard.press("Enter")
    time.sleep(2)
    assert page.inner_text("#ac_l30_5 div div:has-text(\"¡Bienvenido!¡Ganaste!Fin del juego!\")")


def test_l30_6(page):
    from random import randint
    import time
    page.goto("lectures/TWP30/TWP30_6.html")
    page.click("text=6. Sortear el número a adivinar¶")
    page.once("dialog", lambda dialog: dialog.accept(g))  
    i = randint(1, 100)
    g=str(i)
    page.click("#ac_l30_6 >> *css=button >> text=Save & Run")
    page.click("text=Ingrese un numero")
    page.keyboard.type(g)
    page.keyboard.press("Enter")
    time.sleep(2)
    assert page.inner_text("#ac_l30_6 div div:has-text(\"¡Bienvenido!\")")
