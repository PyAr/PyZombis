Functions ``def``
=================

+ We learned some Python functions: ``len``, ``int``, ``float``, ``print``, and ``input``.
+ Now we will create our own functions.
+ I use ``def`` to define the function and ``return`` to return a value.
+ There are functions that do not return anything.

.. codelens:: cl_l20_2a_en
         
    def is_even(x):
        return x % 2 == 0


    print(is_even(13))
    print(is_even(12))


+ This function returns ``True`` if the parameter ``x`` is even, ``False`` otherwise.
+ Note that, unlike what we have seen so far, these lines of code will not be executed immediately.
+ It is necessary to call the function to execute them.

Example
-------

+ Define a function ``factorial``

.. codelens:: cl_l20_2b_en
         
    def factorial(n):
        f = 1
        while n > 0:
            f = f * n
            n = n - 1
        return f


    for i in range(5):
        print(factorial(i))