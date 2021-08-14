import pytest
import requests
import json


def test_l45_1(page):
    page.goto("lectures/TWP45/TWP45_1.html")
    # Run the exercise
    page.click("#ac_l45_1 >> *css=button >> text=Run")

    # Select the output iframe
    iframe = page.query_selector('//*[@id="ac_l45_1"]/div/div[5]/iframe').content_frame()
    iframe.fill("#input_usuario", "ACDC")
    iframe.click("#boton_mostrar")
    img_src = iframe.get_attribute("#img_obtenida", "src")

    # Test the src attribute from image matches the Facebook URL
    assert img_src == "https://graph.facebook.com/ACDC/picture?type=large"


@pytest.mark.vcr()
def test_l45_3(page):
    # Go to TWP45 page
    page.goto("lectures/TWP45/TWP45_3.html")

    # request data for the exercise to the .yaml file
    res = requests.get("https://tastedive.com/api/similar?q=Coco&limit=5&info=1")
    data = json.loads(res.text)
    movies = []
    pixar = 0
    for mov in data["Similar"]["Results"]:
        movies.append(mov["Name"])
    for mov in data["Similar"]["Results"]:
        for wrd in mov["wTeaser"].split():
            if wrd == "Pixar":
                pixar += 1

    # Do the exercise
    page.click("#ac_l45_3c >> text=parametros = {}")
    # Clear all code
    page.keyboard.press("Control+A")
    page.keyboard.press("Backspace")

    instructions1 = [
        f"solicitud_url = 'https://cors.bridged.cc/{res.url}'",
        f'resultados = {len(data["Similar"]["Results"])}',
        f"peliculas_similares = {movies}",
    ]

    for i in instructions1:
        page.keyboard.type(i, delay=0)
        page.keyboard.press("Enter")

    page.keyboard.type(f"pixar = {pixar}")

    # Run and check it passed all tests
    page.click("#ac_l45_3c >> *css=button >> text=Run")
    page.hover("#ac_l45_3c >> text=You passed:")
    assert page.inner_text("#ac_l45_3c >> text=You passed:") == "You passed: 100.0% of the tests"
