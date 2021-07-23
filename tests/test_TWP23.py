def test_TWP23_ac_5(page):
    # Go to TWP23 page
    page.goto("lectures/TWP23/TWP23_2.html")

    # Do the exercise
    page.click("#ac_l23_2b >> text=aeiou")
    page.press("#ac_l23_2b >> text=aeiou", "ArrowRight")
    page.type("#ac_l23_2b >> text=aeiou", "éá")
    page.press("#ac_l23_2b >> text=aeiéáou", "ArrowUp")
    page.press("#ac_l23_2b >> text=aeiéáou", "ArrowLeft")
    page.type("#ac_l23_2b >> text=aeiéáou", ".lower()")

    # Run the exercise
    page.click("#ac_l23_2b >> *css=button >> text=Run")

    # Check whether it passed all unit tests
    page.hover("#ac_l23_2b >> text=You passed:")
    assert page.inner_text("#ac_l23_2b >> text=You passed:") == "You passed: 100.0% of the tests"
