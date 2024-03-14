Reserved Words
==============

+ There are reserved words in Python.
+ These words cannot be used to declare a variable or function.
+ In the conversion exercise, the words ``float``, ``input``, and ``print`` are reserved words.

.. activecode:: ac_l40_3_en
    :nocodelens:

    This program allows you to see a complete list of all reserved words in Python.
    Execute the program to see them.
    ~~~~
    import keyword
    print(keyword.kwlist)

+ Functions like ``float()``, ``input()``, and ``int()`` are not included here, but they are also words that meet the restriction.
+ We can see directives like ``if``, ``else``, and ``elif``, which we have used before.