Literals or Constants
======================

+ There are several types of data.
+ The simplest ones are called literals or constants.

.. code-block:: python

        """
        Fahrenheit, 5, 32 and 9 are literal or constant values.
        """
        F = float(input("Fahrenheit: "))
        C = 5 * (F - 32) / 9
        print("Celsius: %2.1f" % C)

+ Remember that there are different types of data! for example: ``"32"`` is not the same as ``32``.

.. codelens:: cl_l40_4

    print(int("32") == 32)
    print("32" == str(32))
    print(32 == "32")

+ To compare different types, first perform a conversion.