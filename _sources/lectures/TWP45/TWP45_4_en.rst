Testing the University Domains API
==================================

`University Domains and Names Data List & API <https://github.com/Hipo/university-domains-list>`_ is an API that contains 
domains, names, and countries of most universities around the world.

.. activecode:: ac_l45_4a_en
    :language: python3
    :python3_interpreter: brython

    Let's see an example of how to use this API. We will ask for universities in Turkey that have
    the word **"middle"** in their name.

    ~~~~
    import urllib.request
    import urllib.parse
    import json

    api_url = "http://universities.hipolabs.com/search?"
    params = urllib.parse.urlencode({"name": "middle", "country": "turkey"})

    request = urllib.request.urlopen(api_url + params)
    json_data = json.loads(request.read())

    print(json.dumps(json_data, indent=4))


.. activecode:: ac_l45_4b_en
    :nocodelens:
    :language: python

    Let's find all the universities in Colombia.

    ~~~~
    import requests
    import json

    api_url = "http://universities.hipolabs.com/search"
    params = {"country": "colombia"}

    request = requests.get(api_url, params=params)
    request = json.loads(request.text)

    universities = []

    for university in request:
        universities.append(university["name"])

        print(university["name"])

    print("----------------------------------------------")
    print(f"There are {len(universities)} registered universities")


Learnings
---------

+ We access **APIs** to search for information that is useful for us.
+ We can request information with two Python libraries: ``urllib`` or ``requests``.
+ The ``json`` library helps us transform the API's response into a Python object, either a dictionary or a list, with the ``loads`` method, while the ``dumps`` method does the opposite; transforms a Python object into a JSON formatted string.
+ The ``dumps`` method of ``json`` is useful if we want to visualize the response of an API in a readable way. This is achieved with the ``indent`` argument.


|

.. poll:: TWP45E
   :scale: 3
   :allowcomment:

   On a scale from 1 (needs improvement) to 3 (excellent),
   how would you rate this chapter?
