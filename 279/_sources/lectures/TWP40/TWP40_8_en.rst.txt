Multiple assignment
===================


.. activecode:: ac_l40_8
    :language: python3
    :python3_interpreter: brython

    n1, n2, n3, n4 = eval(input("Enter 4 grades separated by commas: "))
    print("Mean:", (n1 + n2 + n3 + n4) / 4)
    x = 4
    y = 5
    suma, difference = x + y, x - y
    print(suma)
    print(difference)
    x, y = y, x
    print(x, y)


+ To swap variables, the following sequence does not work!

.. codelens:: cl_l40_8a

    x = 4
    y = 5
    x = y
    y = x

+ One solution would be to use a ``temp`` variable.

.. codelens:: cl_l40_8b

    x = 4
    y = 5
    temp = x
    x = y
    y = temp

+ Multiple assignment can also be used, which is more elegant.

.. codelens:: cl_l40_8c

    x = 4
    y = 5
    x, y = y, x