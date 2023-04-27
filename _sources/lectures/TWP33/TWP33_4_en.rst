Discounts for loyal customers
==============================

.. image:: ../img/TWP33_016.jpg
    :height: 12.571cm
    :width: 17.458cm
    :align: center
    :alt:


Loyalty program
------------------------

.. activecode:: ac_l33_4
    :nocodelens:
    :stdin:
   
    from urllib.request import urlopen

    LOYALTY_PRICES_URL = "https://api.allorigins.win/raw?url=http://beans.itcarlow.ie/prices-loyalty.html"
    page = urlopen(LOYALTY_PRICES_URL)
    text = page.read()
    print(text[234:238])

+ It didn't work! the string "Bean" appeared instead of the price. Why could it be?


The price moved
------------------

+ The pages are different and the price changes position in the string

.. image:: ../img/TWP33_018.jpg
    :height: 8.416cm
    :width: 16.122cm
    :align: center
    :alt: