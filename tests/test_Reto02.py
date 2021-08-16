def test_r02(page):
    page.goto("challenges/Reto02.html")

    # ac_1
    page.click("text=Save & Run")

    # ac_2
    page.click("text=Ejercicio 2")
    page.click("text=prep_B = 0")
    page.keyboard.press("ArrowDown")
    # Code to type
    code = ["for pal in txt_B:", "if pal[0] in zombi and pal[-1] not in zombi:", "prep_B += 1"]
    for i in code:
        page.keyboard.type(i)
        page.keyboard.press("Enter")
    page.click("#ac_r02_2 >> text=Save & Run")
    # Ensure it passed all of the tests
    page.hover("#ac_r02_2 >> text=You passed:")
    assert page.inner_text("#ac_r02_2 >> text=You passed:") == "You passed: 100.0% of the tests"

    # ac_3
    page.click("text=Ejercicio 3")
    page.click("text=persona_1_B = 0")
    page.keyboard.press("ArrowDown")
    # Code to type
    code = [
        "for x in txt_B:",
        "if len(x) == 7:",
        "if x[-1] not in zombi:",
        "verbos_B += 1",
        "if x[0] not in zombi:",
        "persona_1_B += 1",
    ]
    for i in code:
        page.keyboard.type(i)
        page.keyboard.press("Enter")
    page.click("#ac_r02_3 >> text=Save & Run")
    # Ensure it passed all of the tests
    page.hover("#ac_r02_3 >> text=You passed:")
    assert page.inner_text("#ac_r02_3 >> text=You passed:") == "You passed: 100.0% of the tests"

    # ac_4
    page.click("text=Ejercicio 4")
    page.click("text=lista_B = []")
    page.keyboard.press("ArrowDown")
    page.keyboard.type(
        "lista_B = sorted(txt_B, key=lambda cadena: tuple([orden.index(cadena[i]) for i in range(len(cadena))]))"
    )
    page.click("#ac_r02_4 >> text=Save & Run")
    # Ensure it passed all of the tests
    page.hover("#ac_r02_4 >> text=You passed:")
    assert page.inner_text("#ac_r02_4 >> text=You passed:") == "You passed: 100.0% of the tests"

    # ac_5
    page.click("text=Ejercicio 5")
    page.click("text=magia = []")
    page.keyboard.press("ArrowDown")

    # Code to type
    code = [
        "txt_B = list(set(txt_B))",
        "for x in txt_B:",
        "n = base_20(x)",
        "if n % 42 == 0 and len(set(x)) == len(x):",
        "num_magicos += 1",
        "magia.append(x)",
    ]
    for i in code:
        page.keyboard.type(i)
        page.keyboard.press("Enter")

    page.click("#ac_r02_5 >> text=Save & Run")
    # Ensure it passed all of the tests
    page.hover("#ac_r02_5 >> text=You passed:")
    assert page.inner_text("#ac_r02_4 >> text=You passed:") == "You passed: 100.0% of the tests"
