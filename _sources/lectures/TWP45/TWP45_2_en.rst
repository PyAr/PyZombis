Get data from Reddit
=======================

In this exercise we are going to access Reddit to obtain data like the one in the following image.

.. image:: ../img/TWP45_050.png
    :height: 9.39cm
    :width: 23.344cm
    :align: center
    :alt:

.. activecode:: ac_l45_2
    :nocodelens:
    :language: python

    import urllib.request
    import json
    
    # The Reddit URL we'll access
    url = "https://cors.bridged.cc/http://www.reddit.com/r/Python/.json"
    resp = urllib.request.urlopen(url).read()
    
    # The response is in JSON format, it needs to be transformed 
    # into a Python dictionary with json.loads
    text = json.loads(resp)

    # You can see the received data if you uncomment the line below
    # print(text)
    
    # We search and print the data we want
    for item in text["data"]["children"]:
        doc = item["data"]
        print(doc["title"])
        print("#comments: %d" % doc["num_comments"])
        print(doc["url"])
        print()