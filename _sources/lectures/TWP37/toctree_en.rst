File, Lists, and Dictionaries Review
=====================================


.. image:: ../img/TWP10_001.jpeg
    :height: 14.925cm
    :width: 9.258cm
    :align: center
    :alt:


.. toctree::
   :caption: Contents
   :maxdepth: 1
   :numbered:

   TWP37_1.rst
   TWP37_2.rst
   TWP37_3.rst
   TWP37_4.rst
   TWP37_5.rst
   TWP37_6.rst

Python Code:

.. code-block:: python

    # Code to review files, lists, and dictionaries
    file = open("filename.txt", "r")
    contents = file.read()
    file.close()

    mylist = [2, 4, 6, 8, 10]
    mydict = {"name": "John", "age": 30, "city": "New York"}

    print(contents)
    print(mylist)
    print(mydict)