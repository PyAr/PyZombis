Variable names
==============

+ In Python, variable names must start with a letter or underscore ``_``
+ Accents are allowed!
+ Examples of valid names: ``price``, ``action``, ``salary``, ``_x``,
  ``year_2011``, ``average_salary``

.. code-block:: python

    >>> a = 2
    >>> price = 500
    >>> print(a)
    2
    >>> print(price)
    500

+ Examples of invalid names: ``average salary``, ``3x``, ``1st``, ``@``, ``$``

.. code-block:: python

    >>> 3x = "text"
        File "<stdin>", line 1
        3x = "text"
         ^
    SyntaxError: invalid syntax

**Define valid and invalid variables below**

.. only:: html

    .. raw:: html
        :file: ../_static/interpreter.html