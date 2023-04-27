Python
======

.. codelens:: cl_l38_2a
         
    print("hello world!")
    print(2 + 3)
    print("2 + 3 = ", 2 + 3)


+ Usually, we want to repeat a series of commands several times
+ One way to do this is to use a function

.. codelens:: cl_l38_2b

    def love_colon():
        print("I love:")
        print('Colon == ":"')


    love_colon()


+ Don't forget parentheses when calling the function!
+ If you forget the parentheses, Python will return the memory address
  where the function is defined.

.. codelens:: cl_l38_2c
         
    def love_colon():
        print("I love:")
        print('Colon == ":"')


    print(love_colon)
    print(print)


+ We can put parameters in a function

.. codelens:: cl_l38_2d
         
    def add(a, b):
        return a + b


    print(add("avocado", "jabuticaba"))
    print(add(2, 3))
    print(add(3.14, 2.71))


+ Functions cease to exist as soon as you exit the Python interpreter
+ Hence, programs generally consist of modules, which are
  files stored on disk
+ A module is a text file containing a Python program
+ You can edit modules in a development environment, which
  highlights reserved words, performs automatic indentation, etc.
+ We save a program called ``chaos.py``
+ Don't forget the ``.py`` extension
+ We can run the program with the "Run" button.