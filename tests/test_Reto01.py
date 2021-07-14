import time


def test_r01(page):
    page.goto("lectures/Reto01.html")

    # ac_1
    page.click("text=Save & Run")

    # ac_2
    page.click("text=ac_2")
    page.click('pre[role="presentation"]:has-text("​")')
    page.keyboard.type("correctas = incorrectas = ''")
    page.click("#ac_r01_2 >> text=Save & Run")
    # Make sure it passed all unit tests
    page.hover("#ac_r01_2 >> text=You passed:")
    assert page.inner_text("#ac_r01_2 >> text=You passed:") == "You passed: 100.0% of the tests"

    # ac_3
    page.click("text=ac_3")
    page.click("text=json")
    page.keyboard.press("Control+ArrowRight")
    for i in range(2):
        page.keyboard.press("Shift+ArrowDown")
    page.keyboard.press("Enter")
    page.keyboard.type("from random import choice")
    page.click("text=def escoger(ciudades):")
    page.keyboard.press("ArrowDown")
    for i in range(2):
        page.keyboard.press("Control+ArrowLeft")
    page.keyboard.type("return choice(ciudades)")
    page.click("#ac_r01_3 >> text=Save & Run")
    # Make sure it passed all unit tests
    page.hover("#ac_r01_3 >> text=You passed:")
    assert page.inner_text("#ac_r01_3 >> text=You passed:") == "You passed: 100.0% of the tests"

    # ac_4
    page.click("text=ac_4")
    page.click("#ac_r01_4 >> text=Save & Run")

    # ac_5
    # Deal with prompt box
    def handle_dialog(dialog):
        dialog.accept("f")

    page.click("text=ac_5")
    page.click("text=x = # Empiece aquí >> span")
    page.keyboard.press("Control+Shift+End")
    page.keyboard.press("Backspace")
    page.keyboard.type("x = input('Adivine una letra: ').lower()")
    page.keyboard.press("Enter")
    instructions = ["if x not in letras and x not in (digits + punctuation) and len(x) == 1:", "return x"]
    for i in instructions:
        page.keyboard.type(i)
        page.keyboard.press("Enter")
    page.click("#ac_r01_5 >> text=Save & Run")
    # Fill prompt box
    page.on("dialog", handle_dialog)
    # Make sure it passed all unit tests
    page.hover("#ac_r01_5 >> text=You passed:")
    assert page.inner_text("#ac_r01_5 >> text=You passed:") == "You passed: 100.0% of the tests"
