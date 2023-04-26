String Variable
===============

+ Store strings as names and general text.
+ We call strings a sequence of symbols such as letters, numbers, punctuation marks, etc.
+ To differentiate your commands from a string, we use quotes at the beginning and end.

.. codelens:: cl_l05_11a
    
    text = "Joaquin and Maria eat bread"
    print(text)

+ Note that there is no problem using spaces to separate words.
+ A string has an associated length.
+ We can obtain the size through the built-in ``len`` function in Python.

.. codelens:: cl_l05_11b
    
    text = "Joaquin and Maria eat bread"
    print(len(text))

+ We can access the characters in the string using an integer
  to represent its position in the string.
+ This number is called an index and we start counting from zero.
+ We access the character by providing the index between brackets ``[]``.

.. codelens:: cl_l05_11c
    
    text = "Joaquin and Maria eat bread"
    print(text[0])
    print(text[2])
    print(text[5])
    print(text[10])
    print(text[15])

+ **Caution**: we cannot access an index greater than the number of
  characters in the string.

.. codelens:: cl_l05_11d
    
    text = "Juan and Maria eat bread"
    print(text[22])