Slicing
=======

+ Slice from the first index to the one before the second

.. codelens:: cl_l18_2a
         
    x = "0123456789"
    print(x[0:2])
    print(x[1:2])
    print(x[2:4])
    print(x[0:5])
    print(x[1:8])


+ We can omit indices by substituting the corresponding end and
  we can also have negative indices: -1 is the last one, -2 the penultimate


.. codelens:: cl_l18_2b
         
    x = "0123456789"
    print(x[:2])
    print(x[4:])
    print(x[4:-1])
    print(x[-4:-1])
    print(x[:])


Slice increment
---------------

+ I can use an increment when slicing the string


.. codelens:: cl_l18_2c
       
    texto = "papa cuando nace"
    print(texto[::2])
    print(texto[::-1])


+ Check if a word is a palindrome


.. activecode:: ac_l18_2
    :nocodelens:
    :stdin:

    word = input("Word: ")
    if word == word[::-1]:
        print("%s is a palindrome" % word)
    else:
        print("%s is not a palindrome" % word)