Strings are different from numbers
===================================

.. image:: ../img/TWP33_028.jpg
    :height: 9.324cm
    :width: 17.401cm
    :align: center
    :alt:


Convert to ``float``
--------------------

.. activecode:: ac_l33_7a_en
    :nocodelens:
    :stdin:
   
    from urllib.request import urlopen

    URL_LOYALTY_PRICES = "https://api.allorigins.win/raw?url=http://beans.itcarlow.ie/prices-loyalty.html"
    page = urlopen(URL_LOYALTY_PRICES)
    text = page.read()
    location = text.find(">$")
    start = location + 2
    end = start + 4
    if float(text[start:end]) < 4.74:
        print("Buy! price: %5.2f" % float(text[start:end]))

Can you keep testing the price?
-------------------------------

.. image:: ../img/TWP33_029.jpg
    :height: 15.444cm
    :width: 8.6cm
    :align: center
    :alt:

Can you keep trying?
--------------------

.. activecode:: ac_l33_7b_en
    :nocodelens:
    :stdin:
   
    from urllib.request import urlopen

    URL_LOYALTY_PRICES = "https://api.allorigins.win/raw?url=http://beans.itcarlow.ie/prices-loyalty.html"
    price = 99.99
    while price >= 4.74:
        page = urlopen(URL_LOYALTY_PRICES)
        text = page.read()
        location = text.find(">$")
        start = location + 2
        end = start + 4
        price = float(text[start:end])
    print("Buy! price: %5.2f" % price)


The CEO is very happy!
-----------------------

.. image:: ../img/TWP33_030.jpg
    :height: 9.762cm
    :width: 11.561cm
    :align: center
    :alt: