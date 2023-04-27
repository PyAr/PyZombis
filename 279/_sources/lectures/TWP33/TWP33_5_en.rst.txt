Python data is intelligent
===========================

+ Programming languages provide built-in functionalities in data to assist you.
+ Python data is intelligent: it can do things.

.. codelens:: cl_l33_5a
         
    text = "anita lava la tina"
    print(text.upper())
    print(text.split())

``find`` method
---------------

+ ``find`` method for strings

.. codelens:: cl_l33_5b
         
    text = "Palmeras"
    print(text.find("P"))
    print(text.find("lmer"))
    print(text.find("Pa"))

.. activecode:: ac_l33_5
    :nocodelens:
    :stdin:

    from urllib.request import urlopen

    URL_LOYALTY_PRICES = "https://api.allorigins.win/raw?url=http://beans.itcarlow.ie/prices-loyalty.html"
    page = urlopen(URL_LOYALTY_PRICES)
    text = page.read()
    location = text.find(">$")
    start = location + 2
    end = start + 4
    print(text[start:end])