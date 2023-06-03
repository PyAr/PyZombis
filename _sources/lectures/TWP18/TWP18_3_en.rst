Concatenation
=============

A string cannot be modified
--------------------------------

.. activecode:: ac_l18_3a_en
    :nocodelens:
    :stdin:

    texto = " Hello world!"
    texto[0] = "@"

I can create new strings
--------------------------

+ Using concatenation solves this problem


.. activecode:: ac_l18_3b_en
    :nocodelens:
    :stdin:

    texto = "Hello world"
    texto = "@" + texto[1:]
    print(texto)


+ Example of a program that reads a word and replaces the vowels with ``"*"``.
  The ``lower`` function transforms the letters to lowercase.


.. activecode:: ac_l18_3c_en
    :nocodelens:
    :stdin:

    palabra = input("Word: ")
    k = 0
    intercambio = ""
    while k < len(palabra):
        if palabra[k].lower() in "aeiou":
            intercambio = intercambio + "*"
        else:
            intercambio = intercambio + palabra[k]
        k += 1
    print("New word %s" % intercambio)


Exercise
---------

.. activecode:: ac_l18_3d_en
    :nocodelens:
    :stdin:

    # Now create a program that reads a word, saves it in the variable "palabra",
    # and replaces the consonants with "*". Save the result in the variable "intercambio".
    # You can use the previous program as a reference.

    ~~~~
    # Use the input function to read the word from the user.

      
    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(
                intercambio,
                "".join(["*" if c.lower() not in "aeiou" else c for c in palabra]),
                "Testing that intercambio is correctly assigned",
            )


    myTests().main()