import pytest
import requests
import json

def test_l45_2():
    """Tests fetching data from the provided URL"""
    # Send a GET request to the URL
    url = "https://api.reddit.com/r/Python/.json"

    # Send a GET request to the URL
    response = requests.get(url, headers = {'User-agent': 'pyZombis'})

    # Check for successful response (status code 200)
    assert response.status_code == 200, f"Expected status code 200, but got {response.status_code}"


def test_l45_1(page):
    page.goto("lectures/TWP45/TWP45_1.html")
    # Run the exercise
    page.click("#ac_l45_1 >> *css=button >> text=Run")

    # Select the output iframe
    iframe = page.query_selector(
        '//*[@id="ac_l45_1"]/div/div[5]/iframe').content_frame()
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
    res = requests.get(
        "https://tastedive.com/api/similar?q=Coco&limit=5&info=1")
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
    assert page.inner_text(
        "#ac_l45_3c >> text=You passed:") == "You passed: 100.0% of the tests"


def test_l45_1_en(page):
    page.goto("lectures/TWP45/TWP45_1_en.html")
    # Run the exercise
    page.click("#ac_l45_1_en >> *css=button >> text=Run")

    # Select the output iframe
    iframe = page.query_selector(
        '//*[@id="ac_l45_1_en"]/div/div[5]/iframe').content_frame()
    iframe.fill("#input_user", "ACDC")
    iframe.click("#button_show")
    img_src = iframe.get_attribute("#img_obtained", "src")

    # Test the src attribute from image matches the Facebook URL
    assert img_src == "https://graph.facebook.com/ACDC/picture?type=large"


@pytest.mark.vcr()
def test_l45_3_en(page):
    # Go to TWP45 page
    page.goto("lectures/TWP45/TWP45_3_en.html")

    # request data for the exercise to the .yaml file
    res = requests.get(
        "https://tastedive.com/api/similar?q=Coco&limit=5&info=1")
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
    page.click("#ac_l45_3c_en >> text=parameters = {}")
    # Clear all code
    page.keyboard.press("Control+A")
    page.keyboard.press("Backspace")

    instructions1 = [
        f"request_url = 'https://cors.bridged.cc/{res.url}'",
        f'results = {len(data["Similar"]["Results"])}',
        f"similar_movies = {movies}",
    ]

    for i in instructions1:
        page.keyboard.type(i, delay=0)
        page.keyboard.press("Enter")

    page.keyboard.type(f"pixar = {pixar}")

    # Run and check it passed all tests
    page.click("#ac_l45_3c_en >> *css=button >> text=Run")
    page.hover("#ac_l45_3c_en >> text=You passed:")
    assert page.inner_text(
        "#ac_l45_3c_en >> text=You passed:") == "You passed: 100.0% of the tests"
