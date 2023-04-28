Program with functions
======================

Functions
---------

+ Functions are shareable codes
+ I define a name and call the function throughout the program
+ The function must be defined before it can be called
+ If you want to return a value to the subject that calls the function, you must use the ``return`` command

Program with functions
----------------------

.. activecode:: ac_l35_3_en
    :nocodelens:
    :stdin:

    import urllib.request


    def capture_price():
        page = urllib.request.urlopen("https://cors.bridged.cc/http://beans.itcarlow.ie/prices-loyalty.html")
        text = page.read()
        where = text.find("$")
        start = where + 1
        end = start + 4
        return float(text[start:end])


    option = input("Do you want to buy now? (Y/N)")
    if option.lower() == "y":
        price = capture_price()
        print("Buy! Price: %5.2f" % price)
    else:
        price = 99.99
        while price >= 4.74:
            price = capture_price()
        print("Buy! Price: %5.2f" % price)


There are no stupid questions
-----------------------------

+ Is the return command the same as printing? No, ``print()`` shows something on the screen, 
  while ``return`` returns a value to the function caller.
+ If there is no ``return`` inside the function, what does it return? It returns nothing: ``None``.
  Should ``return`` always appear at the end of the function? Not always, depends on the 
  logic of the function.
+ Can a function return more than one value? Yes, including lists or dictionaries.