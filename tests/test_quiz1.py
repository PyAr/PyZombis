from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=False, slow_mo=100)
    context = browser.new_context()

    # Open new page
    page = context.new_page()

    page.goto("http://pyar.github.io/PyZombis/master/quiz/Quiz1.html")

    page.click("text=def metros_a_milimetros(n):")

    page.press("text=def metros_a_milimetros(n):", "ArrowDown")
    page.press("text=def metros_a_milimetros(n):", "Tab")

    page.type("text=def metros_a_milimetros(n):", "return n * 1000")

    page.click("#q1_2 >> *css=button >> text=Run")

    page.hover("#q1_2 >> text=You passed:")
    assert page.inner_text("#q1_2 >> text=You passed:") == "You passed: 100.0% of the tests"

    element_handle = page.query_selector("[data-childcomponent='q1_2']")
    element_handle.screenshot(path="screenshot.png")

    # ---------------------
    context.close()
    browser.close()

with sync_playwright() as playwright:
    run(playwright)