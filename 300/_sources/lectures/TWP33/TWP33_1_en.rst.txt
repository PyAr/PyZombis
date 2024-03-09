Starbuzz Café
=============

.. image:: ../img/TWP33_001.jpg
    :height: 15.427cm
    :width: 14.801cm
    :align: center
    :alt:


Current Starbuzz code
----------------------

.. activecode:: ac_l33_1_en
    :nocodelens:
    :stdin:
   
    from urllib.request import urlopen

    prices = "https://api.allorigins.win/raw?url=http://beans.itcarlow.ie/prices.html"
    page = urlopen(prices)
    text = page.read()
    print(text)


The CEO only wants the price
-----------------------------

.. image:: ../img/TWP33_004.jpg
    :height: 6.719cm
    :width: 12.699cm
    :align: center
    :alt:

+ This is the "raw" HTML text, which is the format of web pages.
+ The price is embedded in HTML.

.. code-block:: html

    <html><head><title>Welcome to the Beans'R'Us Pricing Page</title>
    <link rel="stylesheet" type="text/css" href="beansrus.css" />
    </head><body>
    <h2>Welcome to the Beans'R'Us Pricing Page</h2>
    <p>Current price of coffee beans = <strong>$6.73</strong></p>
    <p>Price valid for 15 minutes from Sun Jul 11 03:08:01 2021.</p>
    </body></html>


+ We receive the above output as a string of characters. 

.. image:: ../img/TWP33_005.png
    :height: 2.112cm
    :width: 23.745cm
    :align: center
    :alt: