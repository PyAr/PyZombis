for == while hidden
======================

+ Equivalent codes: FOR during the day becomes WHILE at night.

.. codelens:: cl_l20_1a_en
         
    for letter in "aeiou":
        print(letter)

.. codelens:: cl_l20_1b_en
         
    text = "aeiou"
    k = 0
    while k < len(text):
        letter = text[k]
        print(letter)
        k = k + 1


+ Equivalent codes:

.. codelens:: cl_l20_1c_en
         
    for i in range(5):
        print(i)

.. codelens:: cl_l20_1d_en
         
    list = list(range(5))
    k = 0
    while k < len(list):
        i = list[k]
        print(i)
        k = k + 1


+ Equivalent codes:

.. codelens:: cl_l20_1e_en
         
    for x in ["cpbr6", 42, 3.14]:
        print(x)

.. codelens:: cl_l20_1f_en
         
    list = ["cpbr6", 42, 3.14]
    k = 0
    while k < len(list):
        x = list[k]
        print(x)
        k = k + 1