Visitor Accounts
================


+ Edit default.py controller


.. code-block:: python
  

  def index():

    if not session.counter:

      session.counter = 1

    else:

      session.counter += 1

    return dict(msg="Python Zumbi", cont=session.counter)


+ default/index view

.. code-block:: html


  <html>

    <head></head>

    <body>

      <h1>{{=msg}}</h1>

      <h2>Visitors: {{=cont}}</h2>

    </body>

  </html>


+ Different visitors have different counters


Two pages
---------

+ We will create two pages
+ The first asks for the name in a form
+ Then we will be redirected to the second
+ The second will give a greeting with the name
+ Include in the default.py controller

.. code-block:: python


  def first():

    return dict()

  def second():

    return dict()


+ Create the default/first view


{{extend 'layout.html'}}

What is your name?

<form action="second">

<input name="name" />

<input type="submit" />

</form>


+ Create the default/second view


{{extend 'layout.html'}}

<h1>Hello {{=request.vars.name}}</h1>


Accessories
-----------

+ `Web2py Appliances <http://www.web2py.com/appliances>`_
+ Email Contact Form
+ Sudoku Solver
+ Train Counter Game
+ Quiz Builder
+ EcardsOnMap (it's huge...)