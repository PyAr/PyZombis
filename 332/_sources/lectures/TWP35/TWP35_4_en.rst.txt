JSON
====

.. image:: ../img/TWP35_005.jpeg
    :height: 16.402cm
    :width: 25.442cm
    :align: center
    :alt: 

+ `JSON <http://json.org>`_
+ Language independent
+ Name / value pairs
+ Ordered list
+ Widely adopted today
+ Alternative to XML

  + XML is more detailed
  + XML is less readable


.. activecode:: ac_l35_4_en
    :nocodelens:

    import urllib.request
    import json

    url = "http://api.icndb.com/jokes/random?limitTo=[nerdy]"
    text = urllib.request.urlopen(url).read()
    data = json.loads(text)
    print(data["value"]["joke"])

.. poll:: TWP35E
   :scale: 3
   :allowcomment:

   On a scale from 1 (needs improvement) to 3 (excellent),
   how would you rate this chapter?
