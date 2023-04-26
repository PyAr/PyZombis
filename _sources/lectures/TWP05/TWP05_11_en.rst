String Variable
===============

+ Store strings as names and general text
+ We call strings a sequence of symbols such as letters, numbers, punctuation marks, etc.
+ To differentiate its commands from a string, we use quotation marks at the beginning and end

.. codelens:: cl_l05_11a
    
    text = "Joaquin and Maria eat bread"
    print(text)

+ Note that there is no problem using spaces to separate words
+ A string has an associated length
+ We can obtain the size through the ``len`` function built into Python

.. codelens:: cl_l05_11b
    
    text = "Joaquin and Maria eat bread"
    print(len(text))

+ We can access the characters in the string using an integer
  to represent their position in the string
+ This number is called an index and we start counting from zero
+ We access the character providing the index between brackets ``[]``

.. codelens:: cl_l05_11c
    
    text = "Joaquin and Maria eat bread"
    print(text[0])
    print(text[2])
    print(text[5])
    print(text[10])
    print(text[15])

+ **Caution**: we cannot access an index greater than the amount of
  characters in the string

.. codelens:: cl_l05_11d
    
    text = "Juan and Maria eat bread"
    print(text[22])