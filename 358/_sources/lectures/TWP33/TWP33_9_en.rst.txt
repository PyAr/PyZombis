Library ``time``
=================

+ Current time in seconds ``time.clock()``
+ Am I in daylight saving time? ``time.daylight()``
+ Sleep for a few seconds, ``time.sleep(seconds)``
+ Timezone ``time.timezone()``


10 seconds between each access
------------------------------

.. activecode:: ac_l33_9_en
    :nocodelens:
    :stdin:
   
    from urllib.request import urlopen
    import time

    # This is used to increase the program duration to 3 minutes.
    import sys
    sys.setExecutionLimit(180000)

    LOYALTY_PRICES_URL = "https://api.allorigins.win/raw?url=http://beans.itcarlow.ie/prices-loyalty.html"
    price = 99.99
    limit = 0
    availability = True
    while price >= 4.74 or limit <=15:
        try:
            page = urlopen(LOYALTY_PRICES_URL)
        except:
            print("URL not available at this time.")
            availability = False
            break
        page = urlopen(LOYALTY_PRICES_URL)
        text = page.read()
        location = text.find(">$")
        start = location + 2
        end = start + 4
        price = float(text[start:end])
        if price >= 4.74:
            print("Waiting 10 seconds... Current price: %5.2f" % price)
            limit += 1
            time.sleep(10)
    if limit == 16:
        print("They don't want to lower the price. Buy it for %5.2f pesos" % price)
    elif limit < 7 and availability == True:
        print("Buy! price: %5.2f" % price)


Summary
-------

+ Strings are character strings.
+ We access individual characters by their index, starting at zero.
+ Methods are functions built into variables.
+ There are programming libraries with ready-made code.
+ Data has a type, such as ``int`` or ``string``.


Python Tools
------------

+ ``text[4]`` accesses the fifth character.
+ ``text[4:9]`` accesses from the fifth to the ninth character.
+ The method ``text.find()`` searches for a substring.
+ ``float()`` converts something to a floating point number.
+ Libraries: ``urllib.request`` and ``time``.

.. poll:: TWP33E
   :scale: 3
   :allowcomment:

   On a scale from 1 (needs improvement) to 3 (excellent),
   how would you rate this chapter?
