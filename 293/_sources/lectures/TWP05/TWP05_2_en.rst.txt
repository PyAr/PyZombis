First error message
=========================

+ Uppercase and lowercase letters are different
+ ``print()`` is different from ``Print()``

.. code-block:: python

    >>> Print ("hello world!")
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    NameError: name 'Print' is not defined

**Now try it on your own!**

.. raw:: html
   :file: ../_static/interpreter.html


+ If we don't use quotation marks, the computer will interpret our message
  as a Python command, generating a syntax error
+ ``"hello world"`` is different from ``hello world``

.. code-block:: python

    >>> print (hello world)
      File "<stdin>", line 1
        print (hello world)
                        ^
    SyntaxError: invalid syntax

**Now try it on your own!**

.. only:: html

   .. raw:: html
      :file: ../_static/interpreter.html


+ In the Python version we're using (Python 3), parentheses are not optional when using ``print()``
+ ``print("hello world")`` is different from ``print "hello world"``

.. code-block:: python

    >>> print "hello world"
      File "<stdin>", line 1
        print "hello world"
              ^
    SyntaxError: missing parenthesis in call to 'print'

**Now try it on your own!**

.. only:: html

   .. raw:: html
      :file: ../_static/interpreter.html


+ Initial spaces have a meaning in Python that we'll see later on, in this case it generates a syntax error again
+ These spaces are called indentations

.. code-block:: python

    >>>   print("first message!")
      File "<stdin>", line 1
        print "hello world"
      ^      
    SyntaxError: unexpected indent

**Now try it on your own!**

.. only:: html

   .. raw:: html
      :file: ../_static/interpreter.html