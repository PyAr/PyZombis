Variables
=========

+ Variables are references to memory regions that you define to use in the program.
+ The variables ``F`` and ``C`` from the previous example are references to memory regions.
+ The variables ``F`` and ``f`` are different, just as ``C`` and ``c`` are.
+ ``"F"`` or ``"C"`` are not variables.

Variables with defined and undefined values
---------------------------------------------

+ You can only use the content of a variable if it already has a *defined* value.
+ If you use a variable that has no defined value or is *undefined*, it would result in an error like the following.

.. activecode:: ac_l40_2
    :nocodelens:
    :stdin:

    x = 42
    print(x)
    print(y)