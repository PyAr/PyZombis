Basic Numbers
==============

+ There are two types of numeric data: ``int`` and ``float``.
+ Why are there different types?
    + There are different kinds of data: counters are integers and PI is not.
    + Operations with integers are much faster.
    + Floating-point numbers are approximations: their precision has a limit.

.. codelens:: cl_l40_11a_en
         
    print(type(3))
    print(type(3.14))
    print(type(3.0))
    x = -32
    print(type(x))
    x = 32.0
    print(type(x))
    print(type(int(x)))


Operator Table
--------------

.. table:: **Operator Table**
    :widths: auto

    ======== =====================
    Operator Operation
    ======== =====================
    \*        Multiplication
    /         Division
    \*\*      Exponentiation
    abs()     Absolute Value
    %         Modulus
    //        Integer Division
    \-        Subtraction
    \+        Addition
    ======== =====================

Numeric Operators
-----------------

.. codelens:: cl_l40_11b_en
         
    print(3 + 4)
    print(3.0 + 4.0)
    print(3.0 * 4.0)
    print(4 ** 3)
    print(4.0 ** 3)
    print(abs(5))
    print(abs(-5))