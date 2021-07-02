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
    assert img_src == 'https://graph.facebook.com/ACDC/picture?type=large'
