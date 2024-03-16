Testing the TasteDive API
============================

TasteDive is a tool that:

    helps you discover new music, movies, TV shows, books, authors, games, 
    podcasts, and people with shared interests.
    -- TasteDive

In the following exercise, we will use the TasteDive API to search for works or artists similar to another of our choice.
The documentation for the `TasteDive API <https://tastedive.com/read/api>`_.

.. activecode:: ac_l45_3a_enfds
    :nocodelens:
    :language: python

    In this case, we will use the ``requests`` library to make the API request. The base url 
    is ``"https://tastedive.com/api/similar"``. To this url, a parameter ``q`` with the 
    value of the artist Ariana Grande will be passed. Finally, the url will look like this: ``"https://tastedive.com/api/similar?q=ariana+grande"``.
    Note that after the base url, a ``?`` is written to indicate that the parameters follow.

    ~~~~
    import requests
    import json

    api_url = "https://uselessfacts.jsph.pl/api/v2/facts/random"

    # The parameters that will be passed to the url are written inside a dictionary
    parameters = {"language": "en"}

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

.. activecode:: ac_l45_3hb_efdf
    :language: python3
    :python3_interpreter: brython
    

    Now, we will request information about the band Coldplay. This time we will print the data in a 
    readable format. We will use ``urllib`` to make the request.

    ~~~~
    import urllib.request
    import urllib.parse
    import json

    api_url = "https://uselessfacts.jsph.pl/api/v2/facts/random?"

    # The following line is for the url parameters
    parameters = urllib.parse.urlencode({"language": "en"})

    request = urllib.request.urlopen(api_url + parameters)
    data = json.loads(request.read())

    # We print the data in a user-readable format
    print(json.dumps(data, indent=4))

    # We can see that api returned 6 related fields for the random fact
    print(len(data))


|

The following exercise comes with automatic grading.

.. activecode:: ac_l45_3c_en
    :nocodelens:
    :language: python

    Now we will ask TasteDive for the movie Coco. Then the dictionary ``parameters`` should have the 
    value ``"Coco"`` assigned to the key ``"q"``. Additionally, this time we only want 5 results instead of 20. 
    For this, there is a parameter called ``"limit"``, which can be assigned to the number of results needed. 
    Another parameter that will be passed to the url will be ``"info"`` and its value will be 1. This will make 
    the results come with extra text with information about the movie.

    First, you will request from the API what was described above, and save this in the variable ``request``. 
    In another variable, ``request_url``, save the url of the request. Then, assign the data to the variable ``data``. 
    Next, assign the variable ``results`` the number of results that the request returned 
    (as was done in the previous example). Because we set a limit, this number should match the limit.

    Now, you will create the list ``similar_movies``. Inside ``data`` you have a dictionary of dictionaries 
    and lists. What you will do is to search through the sets within which are the names of the movies 
    similar to Coco, and you will add the names of those movies to ``similar_movies``. There should be 5 in total. 
    **Hint**: the movie data is located within ``data["Similar"]["Results"]``, and the key to access it is ``"Name"``.

    Lastly, you will search for the number of times the word ``"Pixar"`` appears in the information texts of the 
    movies related to Coco. You will save that number in the variable ``pixar``. **Hint**: ``"wTeaser"`` is the 
    key that stores the text. This key is located in the same dictionary as the movie names.

    ~~~~
    import requests
    import json

    api_url = "https://tastedive.com/api/similar"
    proxy = "https://cors.bridged.cc/"

    # Add the parameters
    parameters = {}
    
    # Complete the code
    request = 
    request_url = 
    data = 

    # Assign the variable results 
    
    # print(f"results: {results}")
    
    # Create similar_movies
    # Use a for loop to find the similar movies and add them
    # to the corresponding variable

    # print(f"Movies: {similar_movies} len: {len(similar_movies)}")

    pixar = 0
    # Find the number of occurrences of "Pixar" within the data

    # print(f"Pixar: {pixar}")

    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(
                request_url,
                "https://cors.bridged.cc/https://tastedive.com/api/similar?q=Coco&limit=5&info=1",
                "Testing that the url is: https://cors.bridged.cc/https://tastedive.com/api/similar?q=Coco&limit=5&info=1",
            )
            self.assertEqual(results, 5, "Testing that results is assigned correctly.")
            self.assertEqual(len(similar_movies), 5, "Testing that similar_movies are: 5")
            self.assertEqual(
                similar_movies,
                ["Toy Story 3", "Finding Nemo", "Inside Out", "Spirited Away", "Monsters, Inc."],
                "Expected: ['Toy Story 3', 'Finding Nemo', 'Inside Out', 'Spirited Away', 'Monsters, Inc.']",
            )
            self.assertEqual(pixar, 5, "Testing that pixar is assigned correctly.")


    myTests().main()