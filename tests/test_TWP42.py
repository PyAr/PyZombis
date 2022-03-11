import string
import pytest
import requests
import json


@pytest.mark.vcr()
def test_twp42_01(page):
    page.goto("lectures/TWP42/TWP42_1.html")
    page.click("text=query = 'SELECT * FROM surfers'")
    page.keyboard.press("ArrowLeft")
    page.keyboard.press("ArrowLeft")
    page.keyboard.press("Control+Shift+ArrowDown")
    page.keyboard.press("Backspace")
    page.keyboard.type("query = 'SELECT * FROM surfers where edad>25'")
    page.click("#ac_l42_1 >> text=Save & Run")

    # Make sure it passed all unit tests
    page.hover("#ac_l42_1 >> text=You passed:")
    assert page.inner_text("#ac_l42_1 >> text=You passed:") == "You passed: 100.0% of the tests"