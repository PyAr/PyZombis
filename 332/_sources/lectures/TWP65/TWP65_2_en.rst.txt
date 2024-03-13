Hello World
===========


+ Enable the "Do not use proxy server for local servers" option 
+ web2py.exe in the extracted directory
+ Set an administrator password
+ Click on "Administrative Interface"
+ Enter the password you configured
+ Three options: administrator, examples and welcome
+ Then we will learn how to use appliances
+ New basic application: "Hello World"
+ Edit the default.py controller

.. code-block:: python


  def index():
    return "My first message"


+ ctrl+S
+ Go back and click on Hello World


+ Edit the default.py controller again

.. code-block:: python
    
  def index():
    return dict(msg="FATEC SJC")


+ ctrl+S
+ Now let's edit the default/index view


+ Delete everything and change the default/index view

.. code-block:: html


  <html>

    <head></head>

    <body>

      <h1>{{=msg}}</h1>

    </body>

  </html>


+ ctrl+S