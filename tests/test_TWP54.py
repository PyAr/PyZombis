def test_TWPl54_1(page):
    page.goto("lectures/TWP54/TWP54_3_en.html")

    # Run the exercise
    page.click("#ac_l54_3a_en >> *css=button >> text=Run")

    # Wait for the iframe to load
    page.wait_for_selector('iframe')

    # Get the iframe
    frame = page.frame(url="about:srcdoc")

    # Check if the iframe was found
    if frame is None:
        raise Exception("Could not find iframe")
    
    page.frame(url="about:srcdoc").click("input")
    # Fill input
    page.frame(url="about:srcdoc").fill("input", "Lisbon")
    # Click :nth-match(input, 2)
    page.frame(url="about:srcdoc").click(":nth-match(input, 2)")
    # Fill :nth-match(input, 2)
    page.frame(url="about:srcdoc").fill(":nth-match(input, 2)", "Great Place!")
    # Click :nth-match(input, 3)
    page.frame(url="about:srcdoc").click(":nth-match(input, 3)")
    # Fill :nth-match(input, 3)
    page.frame(url="about:srcdoc").fill(":nth-match(input, 3)", "Wall Street")
    # Click text=Save
    page.frame(url="about:srcdoc").click("text=Save")
    # Click :nth-match(input, 3)
    page.frame(url="about:srcdoc").click(":nth-match(input, 3)")
    # Fill :nth-match(input, 3)
    page.frame(url="about:srcdoc").fill(":nth-match(input, 3)", "")
    # Click text=Save
    page.once("dialog", lambda dialog: dialog.dismiss())
    page.frame(url="about:srcdoc").click("text=Save")

def test_TWPl54_2(page):
    page.goto("lectures/TWP54/TWP54_3.html")

    # Run the exercise
    page.click("#ac_l54_3a >> *css=button >> text=Run")

    # Wait for the iframe to load
    page.wait_for_selector('iframe')

    # Get the iframe
    frame = page.frame(url="about:srcdoc")

    # Check if the iframe was found
    if frame is None:
        raise Exception("Could not find iframe")
    
    page.frame(url="about:srcdoc").click("input")
    # Fill input
    page.frame(url="about:srcdoc").fill("input", "Lisbon")
    # Click :nth-match(input, 2)
    page.frame(url="about:srcdoc").click(":nth-match(input, 2)")
    # Fill :nth-match(input, 2)
    page.frame(url="about:srcdoc").fill(":nth-match(input, 2)", "Great Place!")
    # Click :nth-match(input, 3)
    page.frame(url="about:srcdoc").click(":nth-match(input, 3)")
    # Fill :nth-match(input, 3)
    page.frame(url="about:srcdoc").fill(":nth-match(input, 3)", "Wall Street")
    # Click text=Save
    page.frame(url="about:srcdoc").click("text=Guardar")
    # Click :nth-match(input, 3)
    page.frame(url="about:srcdoc").click(":nth-match(input, 3)")
    # Fill :nth-match(input, 3)
    page.frame(url="about:srcdoc").fill(":nth-match(input, 3)", "")
    # Click text=Save
    page.once("dialog", lambda dialog: dialog.dismiss())
    page.frame(url="about:srcdoc").click("text=Guardar")

