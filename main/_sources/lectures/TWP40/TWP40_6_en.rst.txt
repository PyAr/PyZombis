Variable Assignment
===================

+ Assigning a variable is usually done in the following format ``<variable>`` = ``<expression>``
+ The ``<expression>`` is calculated by the processor and modifies the value in the memory referenced by ``<variable>``.

.. codelens:: cl_l40_6a
         
    x = 5
    celsius = 5
    fahrenheit = 9 / 5 * celsius + 32


+ You can assign values to the same variable several times.

.. codelens:: cl_l40_6b
         
    x = 0
    print(x)
    x = "avocado"
    print(x)
    x = 3.14
    print(x)
    x = x * 2
    print(x)

+ In the previous example, ``x`` takes the last assigned value.