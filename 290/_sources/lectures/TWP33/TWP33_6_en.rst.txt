Only when it is less than 4.74
=================================

.. image:: ../img/TWP33_025.jpg
    :height: 15.444cm
    :width: 8.6cm
    :align: center
    :alt:

.. activecode:: ac_l33_6_en
    :nocodelens:
    :stdin:
   
    from urllib.request import urlopen

    LOYALTY_PRICES_URL = "https://api.allorigins.win/raw?url=http://beans.itcarlow.ie/prices-loyalty.html"
    page = urlopen(LOYALTY_PRICES_URL)
    content = page.read()
    position = content.find(">$")
    start = position + 2
    end = start + 4
    if content[start:end] < 4.74:
        print(content[start:end])