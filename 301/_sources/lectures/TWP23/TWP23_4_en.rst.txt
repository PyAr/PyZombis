HTML
====

+ Web pages are written in HTML (Hypertext Markup Language).
+ HTML tags begin with < and end with >.
+ The web page is written between <html> and </html>, which is the top-level tag.
+ We usually insert JavaScript code.
+ JavaScript is not a subset of Java.


.. code-block:: python

    file = open("hello.html", "w")
    file.write(
        """<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset = "utf-8">
        <title>Page Title</title>
    </head>
    <body>
        Hello!
    </body>
    </html>"""
    )
    file.close()


.. activecode:: ac_l23_4_en
    :nocodelens:
    :datafile: hello.html

    Test the program above.

    ~~~~
    file = open("hello.html", "w")
    file.write(
        """<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset = "utf-8">
        <title>Page Title</title>
    </head>
    <body>
        Hello!
    </body>
    </html>"""
    )
    file.close()


    ====
    print("Data has been written to the file hello.html")


.. datafile:: hello.html
    :edit:
    :cols: 40
    :rows: 12