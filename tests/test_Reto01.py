import string
import pytest
import requests
import json


@pytest.mark.vcr()
def test_r01(page):
    page.goto("challenges/Reto01.html")

    # ac_1
    page.click("text=Save & Run")

    # ac_2
    page.click("text=Ejercicio 2")
    page.click('pre[role="presentation"]:has-text("​")')
    page.keyboard.type("correctas = incorrectas = ''")
    page.click("#ac_r01_2 >> text=Save & Run")
    # Make sure it passed all unit tests
    page.hover("#ac_r01_2 >> text=You passed:")
    assert page.inner_text("#ac_r01_2 >> text=You passed:") == "You passed: 100.0% of the tests"

    # ac_3
    page.click("text=Ejercicio 3")

    # request data for the exercise to the .yaml file
    res = requests.get("http://universities.hipolabs.com/search")
    datos = json.loads(res.text)
    countries = [universidad["country"].lower().replace(" ", "") for universidad in datos]

    page.click("#ac_r01_3 >> text=api_url =")
    page.keyboard.press("ArrowDown")
    for i in range(8):
        page.keyboard.press("Control+Shift+ArrowDown")
    page.keyboard.press("Backspace")

    page.keyboard.type(f"ciudades = {countries[:10]}")

    page.click("text=def escoger(ciudades):")
    page.keyboard.press("ArrowDown")
    page.keyboard.press("Enter")
    page.keyboard.press("Tab")
    page.keyboard.type("return choice(ciudades)")
    page.click("#ac_r01_3 >> text=Save & Run")
    # Make sure it passed all unit tests
    page.hover("#ac_r01_3 >> text=You passed:")
    assert page.inner_text("#ac_r01_3 >> text=You passed:") == "You passed: 100.0% of the tests"

    # ac_4
    page.click("text=Ejercicio 4")
    page.click("#ac_r01_4 >> text=Save & Run")

    # ac_5
    # Deal with prompt box
    page.click("text=Ejercicio 5")
    page.click("text=x = # Empiece aquí >> span")
    page.keyboard.press("Control+Shift+End")
    page.keyboard.press("Backspace")
    page.keyboard.type("x = input('Adivine una letra: ').lower()")
    page.keyboard.press("Enter")
    instructions = ["if x not in letras and x not in (digits + punctuation) and len(x) == 1:", "return x"]
    for i in instructions:
        page.keyboard.type(i)
        page.keyboard.press("Enter")
    # Fill prompt box
    page.once("dialog", lambda dialog: dialog.accept("f"))
    page.click("#ac_r01_5 >> text=Save & Run")
    # Make sure it passed all unit tests
    page.hover("#ac_r01_5 >> text=You passed:")
    assert page.inner_text("#ac_r01_5 >> text=You passed:") == "You passed: 100.0% of the tests"

    # ac_6
    page.click("text=Ejercicio 6")
    page.click("#ac_r01_6 >> text=return")
    page.keyboard.press("Control+ArrowRight")
    page.keyboard.type(" input('jugar de nuevo S/N: ').lower() == 's'")
    page.click("#ac_r01_6 >> text=Save & Run")
    # Handle dialogs
    with page.expect_event("dialog") as prompt1:
        page.once("dialog", lambda dialog: dialog.accept("S"))
    with page.expect_event("dialog") as prompt2:
        page.once("dialog", lambda dialog: dialog.accept("n"))
    # Ensure it passed all of the tests
    page.hover("#ac_r01_6 >> text=You passed:")
    assert page.inner_text("#ac_r01_6 >> text=You passed:") == "You passed: 100.0% of the tests"

    # ac_7
    page.click("text=Ejercicio 7")
    page.click("text=def ganar(p_aleatoria, letras_adivinadas):")
    page.keyboard.press("ArrowDown")
    page.keyboard.press("Tab")
    page.keyboard.type("return set(p_aleatoria) == set(letras_adivinadas)")
    page.click("#ac_r01_7 >> text=Save & Run")
    # Make sure it passed all unit tests
    page.hover("#ac_r01_7 >> text=You passed:")
    assert page.inner_text("#ac_r01_7 >> text=You passed:") == "You passed: 100.0% of the tests"

    # ac_8
    page.click("text=Ejercicio 8")
    page.click("#ac_r01_8 >> text=Save & Run")
    # Handle dialogs
    i = 0
    while page.is_hidden("#ac_r01_8_stdout >> text=Quedó ahorcado"):
        with page.expect_event("dialog") as prompt:
            page.once("dialog", lambda dialog: dialog.accept(string.ascii_lowercase[i]))
        i += 1
    page.hover("#ac_r01_8_stdout >> text=Quedó ahorcado")
    assert page.is_visible("#ac_r01_8_stdout >> text=Quedó ahorcado") == True

@pytest.mark.vcr()
def test_r01_en(page):
    page.goto("challenges/Reto01_en.html")

    # ac_r01_1_en
    page.click("text=Exercise 1")
    page.click("#ac_r01_1_en >> text=Save & Run")

    # ac_r01_2_en
    page.click("text=Exercise 2")
    page.click('pre[role="presentation"]:has-text("​")')
    page.keyboard.type("correct = incorrect = ''")
    page.click("#ac_r01_2_en >> text=Save & Run")
    # Make sure it passed all unit tests
    page.hover("#ac_r01_2_en >> text=You passed:")
    assert page.inner_text("#ac_r01_2_en >> text=You passed:") == "You passed: 100.0% of the tests"

    # # ac_r01_3_en
    # page.click("text=Exercise 3")

    # # request data for the exercise to the .yaml file
    # res = requests.get("http://universities.hipolabs.com/search")
    # datos = json.loads(res.text)
    # countries = [universidad["country"].lower().replace(" ", "") for universidad in datos]

    # page.click("#ac_r01_3_en >> text=api_url =")
    # page.keyboard.press("ArrowDown")
    # for i in range(8):
    #     page.keyboard.press("Control+Shift+ArrowDown")
    # page.keyboard.press("Backspace")

    # page.keyboard.type(f"cities = {countries[:10]}")
    
    # page.click("text=def choose(cities):")
    # page.keyboard.press("ArrowDown")
    # page.keyboard.press("Tab")
    # page.keyboard.type("return choice(cities)")

    # page.click("#ac_r01_3_en >> text=Save & Run")

    # # Make sure it passed all unit tests
    # page.hover("#ac_r01_3_en >> text=You passed:")
    # assert page.inner_text("#ac_r01_3_en >> text=You passed:") == "You passed: 100.0% of the tests"

    # ac_r01_4_en
    page.click("text=Exercise 4")
    page.click("#ac_r01_4_en >> text=Save & Run")

    # ac_r01_5_en
    # Deal with prompt box
    page.click("text=Exercise 5")
    page.click("text=x = # Start here >> span")

    page.keyboard.press("Control+Shift+End")
    page.keyboard.press("Backspace")
    page.keyboard.type("x = input('Guess a letter: ').lower()")
    page.keyboard.press("Enter")
    instructions = ["if x not in letters and x not in (digits + punctuation) and len(x) == 1:", "return x"]
    for i in instructions:
        page.keyboard.type(i)
        page.keyboard.press("Enter")
    # Fill prompt box
    page.once("dialog", lambda dialog: dialog.accept("f"))
    page.click("#ac_r01_5_en >> text=Save & Run")
    # Make sure it passed all unit tests
    page.hover("#ac_r01_5_en >> text=You passed:")
    assert page.inner_text("#ac_r01_5_en >> text=You passed:") == "You passed: 100.0% of the tests"

    # # ac_r01_6_en
    # page.click("text=Exercise 6")
    # page.wait_for_load_state()
    # page.click("#ac_r01_6_en >> text=return")
    # page.keyboard.press("Control+ArrowRight")
    # page.keyboard.type(" input('jugar de nuevo S/N: ').lower() == 's'")
    # page.keyboard.press("Enter")
    # page.click("#ac_r01_6_en >> text=Save & Run")
    # # Handle dialogs
    # with page.expect_event("dialog") as prompt1:
    #     page.once("dialog", lambda dialog: dialog.accept("S"))
    # with page.expect_event("dialog") as prompt2:
    #     page.once("dialog", lambda dialog: dialog.accept("n"))
    # # Ensure it passed all of the tests
    # page.hover("#ac_r01_6_en >> text=You passed:")
    # assert page.inner_text("#ac_r01_6_en >> text=You passed:") == "You passed: 100.0% of the tests"

    # ac_r01_7_en
    page.click("text=Exercise 7")
    page.click("text=def win(p_aleatoria, letras_adivinadas):")
    page.keyboard.press("ArrowDown")
    page.keyboard.press("Tab")
    page.keyboard.type("return set(p_aleatoria) == set(letras_adivinadas)")
    page.click("#ac_r01_7_en >> text=Save & Run")
    # Make sure it passed all unit tests
    page.hover("#ac_r01_7_en >> text=You passed:")
    assert page.inner_text("#ac_r01_7_en >> text=You passed:") == "You passed: 100.0% of the tests"

    # # ac_r01_8_en
    # page.click("text=Exercise 8")
    # page.click("#ac_r01_8_en >> text=Save & Run")
    # # Handle dialogs
    # i = 0
    # while page.is_hidden("#ac_r01_8_stdout >> text=You were hanged"):
    #     with page.expect_event("dialog") as prompt:
    #         page.once("dialog", lambda dialog: dialog.accept(string.ascii_lowercase[i]))
    #     i += 1
    # page.hover("#ac_r01_8_en_stdout >> text=You were hanged")
    # assert page.is_visible("#ac_r01_8_en_stdout >> text=You were hanged") == True


