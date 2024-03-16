Testing the TVMaze API
======================

TVMaze is a tool that: 

    Allows you to search for TV shows and get information about them.
    Provides a RESTful API to access the data.


In the following example, we will use the TVMaze API to search for TV shows. The base url is `TVMaze API <http://api.tvmaze.com/search/shows>`_.

.. activecode:: ac_l45_3a_en_
    :nocodelens:
    :language: python

    In this case, we will use the ``requests`` library to make the API request. The base url 
    is ``"https://api.tvmaze.com/search/shows"``. To this url, a parameter ``q`` with the 
    value of the show big bang theory will be passed. Finally, the url will look like this: ``"https://api.tvmaze.com/search/shows?q=big+bang+theory"``.
    Note that after the base url, a ``?`` is written to indicate that the parameters follow.

    ~~~~
    import requests
    import json

    api_url = "http://api.tvmaze.com/search/shows"

    # The parameters that will be passed to the url are written inside a dictionary
    # we don't need to add spaces in parameters, because the requests library will do it for us
    parameters = {"q": "big bang theory"}


    # We request the data from the api
    response = requests.get(api_url, params=parameters)

    # Now we print the url
    print(response.url)
    print()

    # We transform the json-formatted data to Python data
    data = json.loads(response.text)

    print(data)
    

In the previous example, you could see that the API returns text, which if passed through ``json.loads`` 
transforms into a Python dictionary. However, it is not entirely readable. This can be solved with 
``json.dumps``.

.. activecode:: ac_l4fds5_3b_en_
    :language: python3
    :python3_interpreter: brython
    

    Now, we will request information about the show golden girls. This time we will print the data in a 
    readable format. We will use ``urllib`` to make the request.

    ~~~~
    import urllib.request
    import urllib.parse
    import json

    api_url = "http://api.tvmaze.com/search/shows?"
    # The following line is for the url parameters
    # we don't need to add spaces in parameters, because the requests library will do it for us
    parameters = urllib.parse.urlencode({"q": "golden girls"})

    request = urllib.request.urlopen(api_url + parameters)
    data = json.loads(request.read())

    # We print the data in a user-readable format
    print(json.dumps(data, indent=4))
    print("The query returned " + str(len(data)) + " results")


|

The following exercise comes with automatic grading.

.. activecode:: ac_l45_3c_en_
    :nocodelens:
    :language: python

    Now we will ask TVMaze for the show suits. Then the dictionary ``parameters`` should have the value 
    ``"suits"`` assigned to the key ``"q"``.

    First, you will request from the API what was described above, and save this in the variable ``request``.
    In another variable, ``request_url``, save the url of the request. Then, assign the data to the variable ``data``.
    Next, assign the variable ``results`` the number of results that the request returned 
    (as was done in the previous example).

    Now, you will calculate the average rating of all the shows that were returned. 
    You will save this in the variable ``average_rating``. **Hint**: the ratings are located within 
    ``data["show"]["rating"]["average"]``. You will need to use a for loop to calculate the average.

    Lastly you will search for the number of times the word ``"Drama"`` appears in the genres related to suits. 
    You will save that number in the variable ``drama_count``. **Hint**: the genres are located within 
    ``data["show"]["genres"]``. You will need to use a for loop to calculate the number of dramas.


    ~~~~
    import requests
    import json

    api_url = "http://api.tvmaze.com/search/shows"
    parameters = {}
    request = 
    request_url = 
    data = 
    results = 

    total_rating = 0
    rated_shows = 0
    for show in data:
    # complete the loop

    drama_count = 0
    for show in data:
    # complete the loop

    print("Request url:", request_url)
    print("Results:", results)
    print("Average rating:", average_rating)
    print("Number of dramas:", drama_count)

    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(
                request_url,
                "http://api.tvmaze.com/search/shows?q=suits",
                "Testing that the url is: http://api.tvmaze.com/search/shows?q=suits",
            )
            self.assertEqual(results, 10, "Testing that results is assigned correctly.")
            self.assertEqual(average_rating, 7.8, "Testing that similar_movies are: 7.8")
            self.assertEqual(drama_count, 6, "Testing that drama_count is assigned correctly.")


    myTests().main()