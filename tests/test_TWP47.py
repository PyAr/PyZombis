import time

def test_l47_1(page):
    
    page.goto("lectures/TWP47/TWP47_1.html")
    page.click("text=1. Programacion Modular¶")
    page.once("dialog", lambda dialog: dialog.accept('5'))

    page.click("#ac_l47_01 >> *css=button >> text=Save & Run")
    page.keyboard.type('5')
    page.keyboard.press("Enter")
    time.sleep(2)
    
    assert page.inner_text("#ac_l47_01 div div:has-text(\"1.Sfiha2.Cocina3.Pastel4.Pan de queso5.Finalizar\")")
