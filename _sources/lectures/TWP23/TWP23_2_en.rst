Crypto
======


.. datafile:: message.txt
    :hide:

    This is the text file
    you are modifying
    so that all vowels
    are changed to "*".


.. activecode:: ac_l23_2a
    :nocodelens:
    :datafile: message.txt, crypto.txt 

    Read the file ``"message.txt"`` and write the file ``"crypto.txt"`` which
    should have the same text as the first file, but with vowels replaced by
    ``"*"``.

    ~~~~
    text = open("message.txt", "r")
    output = open("crypto.txt", "w")

    for line in text.readlines():
        for letter in line:
            if letter in "aeiouAEIOU":
                output.write("*")
            else:
                output.write(letter)

    text.close()
    output.close()


    ====
    print("Data has been written to the file crypto.txt")


.. datafile:: crypto.txt
    :cols: 20
    :rows: 10
    :edit:


Exercise
---------

.. activecode:: ac_l23_2b
    :nocodelens:
    :datafile: message.txt, crypto.txt

    As you can see, the previous code did not change some vowels
    in the file ``"message.txt"``. This is due to capital letters or accents.
    Your task is to modify the previous program so that it changes **ALL** vowels
    to ``"*"``. **Remember**: the ``.lower()`` method returns a string
    with all its characters turned into lowercase letters. This time, you will write to
    the file ``"crypto2.txt"``.

    ~~~~
    text = open("message.txt", "r")
    output = open("crypto2.txt", "w")

    # Modify the program

    for line in text.readlines():
        for letter in line:
            if letter in "aeiouAEIOU":
                output.write("*")
            else:
                output.write(letter)

    text.close()
    output.close()


    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            file = open("crypto2.txt", "r")
            text = """*st* *s th* t*xt f*l*
    y** **r m*d*fying
    s* th*t *ll v*w*ls
    *r* ch*ng*d t* "*"."""

            self.assertEqual(file.read().replace("\n", " ").rstrip(), text.strip(), f"Expected: {text}")


    print("Data has been written to the file crypto2.txt")

    myTests().main()


.. datafile:: crypto2.txt
    :cols: 20
    :rows: 10
    :edit: