def test_l45_1(page):
    page.goto("lectures/TWP45.html")

    # Run the exercise
    page.click("#ac_l45_1 >> *css=button >> text=Run")

    # Select the output iframe
    iframe = page.query_selector('//*[@id="ac_l45_1"]/div/div[5]/iframe').content_frame()
    iframe.fill("#input_usuario", "ACDC")
    iframe.click("#boton_mostrar")
    img_src = iframe.get_attribute("#img_obtenida", "src")

    # Test the src attribute from image matches the Facebook URL
    assert img_src == "https://graph.facebook.com/ACDC/picture?type=large"


def test_l45_5(page):
    # Go to TWP45 page
    page.goto("lectures/TWP45.html")

    # Do the exercise
    page.click("#ac_l45_5 >> text=parametros = {}")
    # Clear all code
    page.keyboard.press("Control+A")
    page.keyboard.press("Backspace")

    instructions1 = [
        "import requests",
        "import json",
        "api_url = 'https://cors.bridged.cc/https://tastedive.com/api/similar'",
        'parametros = {"q": "Coco", "limit": 5, "info": 1}',
        "solicitud = requests.get(api_url, params=parametros)",
        "datos = json.loads(solicitud.text)",
        'resultados = len(datos["Similar"]["Results"])',
        "peliculas_similares = []",
        'for peli in datos["Similar"]["Results"]:',
        'peliculas_similares.append(peli["Name"])',
    ]

    for i in instructions1:
        page.keyboard.type(i)
        page.keyboard.press("Enter")

    for i in range(4):
        page.keyboard.press("Backspace")

    instructions2 = [
        "pixar = 0",
        'for peli in datos["Similar"]["Results"]:',
        'for pal in peli["wTeaser"].split():',
        'if pal == "Pixar":',
        "pixar += 1",
    ]

    for i in instructions2:
        page.keyboard.type(i)
        page.keyboard.press("Enter")

    # Run and check it passed all tests
    page.click("#ac_l45_5 >> *css=button >> text=Run")
    page.hover("#ac_l45_5 >> text=You passed:")
    assert page.inner_text("#ac_l45_5 >> text=You passed:") == "You passed: 100.0% of the tests"
