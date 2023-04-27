Dictionaries
============


+ The dictionary itself consists of relating a key with a specific value
+ Unlike lists, where the index is a number, dictionaries use their keys as index
+ To add new elements that I don't need to add, just make the session

    + If the key already exists: the associated value changes
    + If the key does not exist: the new key is added

.. codelens:: cl_l23_5a_en
         
    d = {}
    d["a"] = "alpha"
    d["o"] = "omega"
    d["g"] = "gamma"
    print(d)
    print(d["a"])


.. activecode:: ac_l23_5
    :nocodelens:
    :stdin:

    d = {}
    d["a"] = "alpha"
    d["o"] = "omega"
    d["g"] = "gamma"
    print(d)


    # This line will result in an error because there is no
    # a "x" key in the dictionary
    print(d["x"])

.. codelens:: cl_l23_5b_en
         
    d = {}
    d["a"] = "alpha"
    d["o"] = "omega"
    d["g"] = "gamma"
    print(d.keys())
    print(d.values())
    print("g" in d)
    print("x" in d)
    for key in d:
        print(key)