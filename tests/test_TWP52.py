def test_l52_1(page):
    page.goto("lectures/TWP52_en.html")

    # Run the exercise
    page.click("#ac_l52_1a_en >> *css=button >> text=Run")

    # Wait for the iframe to load
    page.wait_for_selector('iframe')

    # Get the iframe
    frame = page.frame(url="about:srcdoc")

    # Check if the iframe was found
    if frame is None:
        raise Exception("Could not find iframe")

    # Interact with the iframe
    frame.click("input")
    frame.fill("input", "Lisbon")
    frame.click(":nth-match(input, 2)")
    frame.fill(":nth-match(input, 2)", "Great Place!")
    frame.click(":nth-match(input, 3)")
    frame.fill(":nth-match(input, 3)", "Nico")
    frame.click("text=Save")


def test_l52_2(page):
    page.goto("lectures/TWP52.html")

    # Run the exercise
    page.click("#ac_l52_1a >> *css=button >> text=Run")

    # Wait for the iframe to load
    page.wait_for_selector('iframe')

    # Get the iframe
    frame = page.frame(url="about:srcdoc")

    # Check if the iframe was found
    if frame is None:
        raise Exception("Could not find iframe")

    # Interact with the iframe
    frame.click("input")
    frame.fill("input", "Lisbon")
    frame.click(":nth-match(input, 2)")
    frame.fill(":nth-match(input, 2)", "Great Place!")
    frame.click(":nth-match(input, 3)")
    frame.fill(":nth-match(input, 3)", "Nico")
    frame.click("text=Guardar")

def test_l52_3(page):
    page.goto("lectures/TWP52_en.html")

    # Click #ac_l52_1b_en >> text=Run
    page.click("#ac_l52_1b_en >> *css=button >> text=Run")

    # Wait for the iframe to load
    page.wait_for_selector('//*[@id="ac_l52_1b_en"]/div/div[4]/iframe')

    # Get the iframe
    iframe = page.query_selector('//*[@id="ac_l52_1b_en"]/div/div[4]/iframe')
    frame = iframe.content_frame()

    # Check if the iframe was found
    if frame is None:
        raise Exception("Could not find iframe")

    # Click input[name="destination"]
    frame.click("input[name=\"destination\"]")

def test_l52_4(page):
    page.goto("lectures/TWP52.html")

    # Click #ac_l52_1b >> text=Run
    page.click("#ac_l52_1b >> *css=button >> text=Run")

    # Wait for the iframe to load
    page.wait_for_selector('//*[@id="ac_l52_1b"]/div/div[4]/iframe')

    # Get the iframe
    iframe = page.query_selector('//*[@id="ac_l52_1b"]/div/div[4]/iframe')
    frame = iframe.content_frame()

    # Check if the iframe was found
    if frame is None:
        raise Exception("Could not find iframe")

    # Click input[name="destination"]
    frame.click("input[name=\"destino\"]")

def test_l52_5(page):
    page.goto("lectures/TWP52_en.html")

    # Click #ac_l52_1c_en >> text=Run
    page.click("#ac_l52_1c_en >> *css=button >> text=Run")

    # Wait for the iframe to load
    page.wait_for_selector('//*[@id="ac_l52_1c_en"]/div/div[4]/iframe')

    # Get the iframe
    iframe = page.query_selector('//*[@id="ac_l52_1c_en"]/div/div[4]/iframe')
    frame = iframe.content_frame()

    # Check if the iframe was found
    if frame is None:
        raise Exception("Could not find iframe")

    page.frame(url="about:srcdoc").click("input")
    # Fill input
    page.frame(url="about:srcdoc").fill("input", "Mumbai")
    # Click :nth-match(input, 2)
    page.frame(url="about:srcdoc").click(":nth-match(input, 2)")
    # Fill :nth-match(input, 2)
    page.frame(url="about:srcdoc").fill(":nth-match(input, 2)", "Great City!")
    # Click textarea
    page.frame(url="about:srcdoc").click("textarea")
    # Fill textarea
    page.frame(url="about:srcdoc").fill("textarea", "Taj Hotel")
    # Click text=Save
    page.frame(url="about:srcdoc").click("text=Save")

def test_l52_6(page):
    page.goto("lectures/TWP52.html")

    # Click #ac_l52_1c >> text=Run
    page.click("#ac_l52_1c >> *css=button >> text=Run")

    # Wait for the iframe to load
    page.wait_for_selector('//*[@id="ac_l52_1c"]/div/div[4]/iframe')

    # Get the iframe
    iframe = page.query_selector('//*[@id="ac_l52_1c"]/div/div[4]/iframe')
    frame = iframe.content_frame()

    # Check if the iframe was found
    if frame is None:
        raise Exception("Could not find iframe")

    page.frame(url="about:srcdoc").click("input")
    # Fill input
    page.frame(url="about:srcdoc").fill("input", "Mumbai")
    # Click :nth-match(input, 2)
    page.frame(url="about:srcdoc").click(":nth-match(input, 2)")
    # Fill :nth-match(input, 2)
    page.frame(url="about:srcdoc").fill(":nth-match(input, 2)", "Great City!")
    # Click textarea
    page.frame(url="about:srcdoc").click("textarea")
    # Fill textarea
    page.frame(url="about:srcdoc").fill("textarea", "Taj Hotel")
    # Click text=Save
    page.frame(url="about:srcdoc").click("text=Guardar")

def test_l52_7(page):
    page.goto("lectures/TWP52_en.html")

    # Click #ac_l52_1d_en >> text=Run
    page.click("#ac_l52_1d_en >> *css=button >> text=Run")

    # Wait for the iframe to load
    page.wait_for_selector('//*[@id="ac_l52_1d_en"]/div/div[4]/iframe')

    # Get the iframe
    iframe = page.query_selector('//*[@id="ac_l52_1d_en"]/div/div[4]/iframe')
    frame = iframe.content_frame()

    # Check if the iframe was found
    if frame is None:
        raise Exception("Could not find iframe")

    # Select Option 2
    page.frame(url="about:srcdoc").select_option("select", "Option 2")
    # Click input
    page.frame(url="about:srcdoc").click("input")
    # Fill input
    page.frame(url="about:srcdoc").fill("input", "Hey there")
    # Click :nth-match(input, 2)
    page.frame(url="about:srcdoc").click(":nth-match(input, 2)")
    # Fill :nth-match(input, 2)
    page.frame(url="about:srcdoc").fill(":nth-match(input, 2)", "Steve")
    # Click text=Save
    page.frame(url="about:srcdoc").click("text=Save")

def test_l52_8(page):
    page.goto("lectures/TWP52.html")

    # Click #ac_l52_1d_en >> text=Run
    page.click("#ac_l52_1d >> *css=button >> text=Run")

    # Wait for the iframe to load
    page.wait_for_selector('//*[@id="ac_l52_1d"]/div/div[4]/iframe')

    # Get the iframe
    iframe = page.query_selector('//*[@id="ac_l52_1d"]/div/div[4]/iframe')
    frame = iframe.content_frame()

    # Check if the iframe was found
    if frame is None:
        raise Exception("Could not find iframe")

    # Select Option 2
    page.frame(url="about:srcdoc").select_option("select", "Opción 2")
    # Click input
    page.frame(url="about:srcdoc").click("input")
    # Fill input
    page.frame(url="about:srcdoc").fill("input", "Hey there")
    # Click :nth-match(input, 2)
    page.frame(url="about:srcdoc").click(":nth-match(input, 2)")
    # Fill :nth-match(input, 2)
    page.frame(url="about:srcdoc").fill(":nth-match(input, 2)", "Steve")
    # Click text=Save
    page.frame(url="about:srcdoc").click("text=Guardar")

