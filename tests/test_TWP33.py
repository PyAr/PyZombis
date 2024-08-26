
def test_TWP33_ac_l33_1(page):
    # Go to TWP33 page
    page.goto("lectures/TWP33/TWP33_1.html")

    # Run the exercise
    page.click("#ac_l33_1 >> *css=button >> text=Run")

    # Check whether it passed all unit tests
    page.hover("#ac_l33_1 >> text=You passed:")
    assert page.inner_text("#ac_l33_1 >> text=You passed:") == "You passed: 100.0% of the tests"

def test_TWP33_ac_l33_3a(page):
    # Go to TWP33 page
    page.goto("lectures/TWP33/TWP33_3.html")

    # Run the exercise
    page.click("#ac_l33_3a >> *css=button >> text=Run")

    # Check whether it passed all unit tests
    page.hover("#ac_l33_3a >> text=You passed:")
    assert page.inner_text("#ac_l33_3a >> text=You passed:") == "You passed: 100.0% of the tests"

def test_TWP33_ac_l33_4(page):
    # Go to TWP33 page
    page.goto("lectures/TWP33/TWP33_4.html")

    # Run the exercise
    page.click("#ac_l33_4 >> *css=button >> text=Run")

    # Check whether it passed all unit tests
    page.hover("#ac_l33_4 >> text=You passed:")
    assert page.inner_text("#ac_l33_4 >> text=You passed:") == "You passed: 100.0% of the tests"