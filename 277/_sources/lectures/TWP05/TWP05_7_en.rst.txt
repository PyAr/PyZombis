Numeric variables
===================

+ Integers do not have decimal places: ``42``, ``-7``
+ Values of type integer in Python are called ``int``
+ Floating point numbers have decimal places: ``1.0``, ``3.1415``,
  ``1234.56``
+ Note that ``1.0``, even though it has a zero in the decimal part, is a floating point number
+ Values of type floating point in Python are called ``float``.


Representation of numeric values
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

+ Internally, all numbers are represented with the binary system
+ This system only allows the digits ``0`` or ``1``
+ Floating point numbers may not have a proper representation
  in the binary system
+ Typing in the interpreter ``3 * 0.1`` will give us a response of: ``0.30000000000000004``

**Try it here!**

.. only:: html

   .. raw:: html
      :file: ../_static/interpreter.html

Python code:
```python
# Declaring an integer variable
a = 42
print(a)  # Output: 42
print(type(a))  # Output: <class 'int'>

# Declaring a floating point variable
b = 1.0
print(b)  # Output: 1.0
print(type(b))  # Output: <class 'float'>

# Operations with numbers
x = 3
y = 0.1
print(x * y)  # Output: 0.30000000000000004
```