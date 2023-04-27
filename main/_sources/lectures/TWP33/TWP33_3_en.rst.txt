Cut
===

.. codelens:: cl_l33_3
         
    text = "Palms"
    print(text[2:5])
    print(text[0:3])
    print(text[4:6])

+ Cuts before the second number.
+ Does not include the second number!

.. image:: ../img/TWP33_012.jpg
    :height: 10.323cm
    :width: 19.483cm
    :align: center
    :alt:

.. activecode:: ac_l33_3a
    :nocodelens:
    :stdin:

    from urllib.request import urlopen

    PRICES_URL = "https://api.allorigins.win/raw?url=http://beans.itcarlow.ie/prices.html"
    page = urlopen(PRICES_URL)
    text = page.read()
    print(text[234:238])


The CEO is happy!
------------------

.. image:: ../img/TWP33_015.jpg
    :height: 7.402cm
    :width: 14.922cm
    :align: center
    :alt:


There are no stupid questions
-----------------------------

+ Can I put any website in this code?
+ Yes. Feel free, but don't forget about decoding.
+ For example, the following `website <http://www.atc.uniovi.es/cgi-bin/encodings?encoding=iso-8859-1>`_ displays characters with iso8859 decoding.
+ What does ``urllib.request`` do?
+ It allows you to chat with the internet.
+ Can I access a page directly in the browser?
+ Yes, run the code below which uses ``import antigravity``.

.. activecode:: ac_l33_3b
    :language: python3
    :python3_interpreter: brython

    import antigravity
    # Run this code