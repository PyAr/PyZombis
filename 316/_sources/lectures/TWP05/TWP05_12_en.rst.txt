String Operations
=================

+ The basic operations are slicing, concatenation, and formatting.
+ Slicing allows you to use part of a string
+ Concatenation, in contrast, is used to join two or more strings
+ Finally, formatting is used heavily when sending messages to the console
  and consists of using strings as templates where we can insert data


Concatenation
-------------

.. codelens:: cl_l05_12a_en
    
    a = "Potato"
    b = "when born"
    print(a + b)
    print(a * 3)

Slicing
-------

+ We can perform the slicing operation using ``[start_index:end_index]``

.. codelens:: cl_l05_12b_en
    
    x = "0123456789"
    print(x[0:2])
    print(x[1:2])
    print(x[2:4])
    print(x[0:5])
    print(x[1:8])

+ We can omit indices, replacing the corresponding index, and
  we can also have negative indices: -1 last, -2 penultimate

.. codelens:: cl_l05_12c_en
    
    x = "0123456789"
    print(x[:2])
    print(x[4:])
    print(x[4:-1])
    print(x[-4:-1])
    print(x[:])

Formatting
----------

+ Joining multiple strings is not always practical
+ We can use placeholders to replace values within strings

.. codelens:: cl_l05_12d_en
    
    age = 20
    print("Juan is %d years old" % age)

+ The main placeholders are ``%d`` for integers, ``%s`` for
  strings, and ``%f`` for floating-point numbers
+ % 03d complete with additional zeros
+ % 3d means three positions without additional zeros

.. codelens:: cl_l05_12e_en
    
    age = 20
    print("[%03d]" % age)
    print("[%3d]" % age)

+ ``%5.2f`` means 5 characters in total and 2 decimals

.. codelens:: cl_l05_12f_en
    
    print("$%5.2f pesos" % 23)

f-strings
---------

+ Another way to join strings is through f-strings
+ Everything inside braces {} will be replaced if previously defined. In the example, .2f means two decimal places.

.. activecode:: ac_l05_12_en
   :nocodelens:
   :stdin:

   price = 10.123
   print(f"The price is: ${price:.2f}")