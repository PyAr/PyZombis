Last Exercise
=============


.. datafile:: alice_file.txt
    :fromfile: ../_static/alice.txt
    :hide:


.. activecode:: ac_l23_6_en
    :nocodelens:
    :available_files: alice_file.txt
    :Language: python

    Create a program that reads the file ``alice_file.txt`` and counts the number of occurrences of each word in the text. Note: 
    to remove special characters, use ``import string`` and ``string.punctuation``.
    
    ~~~~
    import string

    file = open("alice_file.txt", "r")
    text = file.read()
    text = text.lower()

    for c in string.punctuation:
        text = text.replace(c, " ")
    text = text.split()

    dic = {}
    for word in text:
        if word not in dic:
            dic[word] = 1
        else:
            dic[word] += 1

    print("Alice appears %s times" % dic["alice"])
    file.close()


.. image:: ../img/TWP05_041.jpeg
    :height: 12.571cm
    :width: 9.411cm
    :align: center
    :alt: 


“Life is like riding a bicycle. To keep your balance, you must keep moving.” - Einstein

.. poll:: TWP23E
   :scale: 3
   :allowcomment:

   On a scale from 1 (needs improvement) to 3 (excellent),
   how would you rate this chapter?
