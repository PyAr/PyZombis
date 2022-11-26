
def test_l60_1(page):
    page.goto("lectures/TWP60/TWP60_1.html")
    # Click button:has-text("Run")
    page.click("#ac_l60_1 >> *css=button >> text=Run")
    # Click #gjs-canvas
    iframe = page.query_selector('//*[@id="ac_l60_1"]/div/div[4]/iframe').content_frame()
    id = iframe.get_attribute("canvas", "id")
    assert id == "gjs-canvas"
    width = iframe.get_attribute("canvas", "width")
    assert width == "500"
    height = iframe.get_attribute("canvas", "height")
    assert height == "400"


def test_l60_2(page):
    page.goto("lectures/TWP60/TWP60_2.html")
    # Click button:has-text("Run")
    page.click("#ac_l60_2 >> *css=button >> text=Run")
    # Click #gjs-canvas
    iframe = page.query_selector('//*[@id="ac_l60_2"]/div/div[4]/iframe').content_frame()
    id = iframe.get_attribute("canvas", "id")
    assert id == "gjs-canvas"
    width = iframe.get_attribute("canvas", "width")
    assert width == "500"
    height = iframe.get_attribute("canvas", "height")
    assert height == "300"


def test_l60_3(page):
    page.goto("lectures/TWP60/TWP60_3.html")
    # Click button:has-text("Run")
    page.click("#ac_l60_3 >> *css=button >> text=Run")
    # Click #gjs-canvas
    iframe = page.query_selector('//*[@id="ac_l60_3"]/div/div[4]/iframe').content_frame()
    id = iframe.get_attribute("canvas", "id")
    assert id == "gjs-canvas"
    width = iframe.get_attribute("canvas", "width")
    assert width == "560"
    height = iframe.get_attribute("canvas", "height")
    assert height == "350"


def test_l60_4(page):
    page.goto("lectures/TWP60/TWP60_4.html")
    # Click button:has-text("Run")
    page.click("#ac_l60_4 >> *css=button >> text=Run")
    # Click #gjs-canvas
    iframe = page.query_selector('//*[@id="ac_l60_4"]/div/div[4]/iframe').content_frame()
    id = iframe.get_attribute("canvas", "id")
    assert id == "gjs-canvas"
    width = iframe.get_attribute("canvas", "width")
    assert width == "500"
    height = iframe.get_attribute("canvas", "height")
    assert height == "300"


def test_l60_5(page):
    page.goto("lectures/TWP60/TWP60_5.html")

    # Click pre[role="presentation"]:has-text("WIDTH = 500")
    page.click("pre[role=\"presentation\"]:has-text(\"WIDTH = 500\")")
    page.keyboard.press("Backspace")
    page.keyboard.press("Backspace")
    # Fill textarea
    page.fill("textarea", "12")
    # Click pre[role="presentation"]:has-text("HEIGHT = 300")
    page.click("pre[role=\"presentation\"]:has-text(\"HEIGHT = 300\")")
    page.keyboard.press("Backspace")
    page.keyboard.press("Backspace")
    # Fill textarea
    page.fill("textarea", "12")

    # Click button:has-text("Run")
    page.click("#ac_l60_5 >> *css=button >> text=Run")
    # Click #gjs-canvas
    iframe = page.query_selector('//*[@id="ac_l60_5"]/div/div[4]/iframe').content_frame()
    id = iframe.get_attribute("canvas", "id")
    assert id == "gjs-canvas"
    width = iframe.get_attribute("canvas", "width")
    assert width == "512"
    height = iframe.get_attribute("canvas", "height")
    assert height == "312"