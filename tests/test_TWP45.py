import pytest
import requests
import json


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


def test_l45_3_api():
    """Tests fetching data from the provided URL"""
    # Send a GET request to the URL for a sample user
    url = "http://api.tvmaze.com/search/shows?q=suits"

    # Send a GET request to the URL
    response = requests.get(url)

    # Check for successful response (status code 200)
    assert response.status_code == 200, f"Expected status code 200, but got {response.status_code}, Data can not be fetched from the provided URL"
