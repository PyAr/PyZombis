String operations
==================

+ The basic operations are slicing, concatenation, and formatting.
+ The slicing operation allows you to use part of a string.
+ The concatenation operation, in contrast, is used to join two or more strings.
+ Finally, formatting is used extensively when sending messages to the screen,
  and it consists of using strings as patterns where we can insert data.


Concatenation
-------------

.. codelens:: cl_l05_12a
    
    a = "Potato"
    b = " when it is born"
    print(a + b)
    print(a * 3)

Slicing
-------

+ We can perform the slicing operation using ``[start_index:end_index]``.

.. codelens:: cl_l05_12b
    
    x = "0123456789"
    print(x[0:2])
    print(x[1:2])
    print(x[2:4])
    print(x[0:5])
    print(x[1:8])

+ We can omit indices, substituting the corresponding index, and
  we can also have negative indices: -1 last, -2 penultimate.

.. codelens:: cl_l05_12c
    
    x = "0123456789"
    print(x[:2])
    print(x[4:])
    print(x[4:-1])
    print(x[-4:-1])
    print(x[:])

Formatting
----------

+ Joining multiple strings is not always practical.
+ We can use placeholders to replace values within strings.

.. codelens:: cl_l05_12d
    
    age = 20
    print("Juan is %d years old" % age)

+ The main placeholders are ``%d`` for integers, ``%s`` for
  strings, and ``%f`` for float numbers.
+ % 03d complete with additional zeros.
+ % 3d means three positions without additional zeros.

.. codelens:: cl_l05_12e
    
    age = 20
    print("[%03d]" % age)
    print("[%3d]" % age)

+ ``%5.2f`` means 5 characters in total and 2 decimal places.

.. codelens:: cl_l05_12f
    
    print("$%5.2f pesos" % 23)

f-strings
---------

+ Another way to join strings is through f-strings.
+ Everything inside curly braces {} will be replaced if it was defined previously. In the example .2f means two decimal places.

.. activecode:: ac_l05_12
   :nocodelens:
   :stdin:

   price = 10.123
   print(f"The price is: ${price:.2f}")