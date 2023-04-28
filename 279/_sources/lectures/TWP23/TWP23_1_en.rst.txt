Files
=====

+ Until now our data disappeared when leaving IDLE
+ Files are for permanent storage
+ A file is a disk area where we can read or write information
+ We access the file by its name
+ To access a file you need to open it
+ When opening the file, we inform its name, directory (if necessary) and what operations we will perform: read and / or write
+ The function that opens files is `open()` and the modes are: r - read, w - write, a - append, b - binary (update)
+ The methods to read or write are `read()` and `write()`
+ Files must be closed with `close()`

.. code-block:: python

    archivo = open("numeros.txt", "w")
    for numero in range(1, 31):
        archivo.write("%d\n" % numero)
    archivo.close()


.. datafile:: numeros.txt
    :cols: 20
    :rows: 10
    :edit:


.. activecode:: ac_l23_1a_en
    :nocodelens:
    :datafile: numeros.txt
    :enabledownload:

    Try the previous program:

    ~~~~
    archivo = open("numeros.txt", "w")
    for numero in range(1, 31):
        archivo.write("%d\n" % numero)
    archivo.close()


    ====
    print("Data has been written to the file numeros.txt")


+ When executing the previous program, the file `numeros.txt` is modified.
+ The `w` mode creates the file if it does not exist, if it exists it will be deleted and rewritten.


.. activecode:: ac_l23_1b_en
    :nocodelens:
    :datafile: numeros.txt
    :enabledownload:
    
    You have already written to the file ``"numeros.txt"``. Now you are going to read the data you have written: 

    ~~~~
    archivo = open("numeros.txt", "r")
    for linea in archivo.readlines():
        print(linea)
    archivo.close()

+ `readlines()` generates a list where each element is a read line.
+ The `numeros.txt` file now has written numbers, each number on a different line.
  This line break was written with the special character `\n`.
+ If we want to remove this character from the end, we can use `print(linea.rstrip())`.
  Try to print the text lines in this way.


Pythonic way
------------

.. code-block:: python

    with open("numeros.txt", "r") as f:
        print(f.read())

.. activecode:: ac_l23_1c_en
    :nocodelens:
    :datafile: numeros.txt
    :enabledownload:

    with open("numeros.txt", "r") as f:
        print(f.read())


+ The previous code does the same as the Pythonic way.
+ In the previous slide we saw how normal programmers read
+ Python is great because you can always go deeper
+ Python is simple, but hard to exhaust