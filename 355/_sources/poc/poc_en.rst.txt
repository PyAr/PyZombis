========================================
PyScript - Running Python in the Browser
========================================

Introduction to PyScript
-------------------------
PyScript is a Python interpreter that runs in the browser. It is based on Piodide and supports all the modules that are available in Piodide. 
PyScript is a great tool for learning Python, experimenting with Python code, and sharing Python code with others. 
PyScript is open source and can be used for free.

Getting Started
---------------
To get started with PyScript, you can simply start typing Python code in the code editor below.
You can run the code by pressing ``Shift + Enter`` on your keyboard. I plan to add a run button later.

PyScript provides an interactive Python shell that you can use to run Python code.
It is Provided by ``py-repl`` tag, this has been changed to ``script type="py-editor"`` in the latest release.
I plan to use the latest stable release but for this POC we'll stick to ``py-repl`` tag.

Feel free to interact with the Python shell and run Python code in the code editor below.
Happy coding!

Useful Information
------------------
Try Running the code below to see a simple example of Python code running in the browser.
This uses the ``matplotlib``, ``numpy``, and ``pandas`` library to plot a graph.
A Brython environment can not run this code, but PyScript can.

.. code:: python

    import pandas as pd
    import matplotlib.pyplot as plt

    # Sample data
    data = {
        'Year': [2010, 2011, 2012, 2013, 2014],
        'Sales': [1000, 1500, 1800, 2000, 2100]
    }

    # Create DataFrame
    df = pd.DataFrame(data)

    # Plotting using Pandas and Matplotlib
    df.plot(x='Year', y='Sales', kind='line', marker='o', color='skyblue')
    plt.title('Sales Over Years')
    plt.xlabel('Year')
    plt.ylabel('Sales ($)')
    plt.grid(True)
    display(plt)

.. raw:: html
    :file: ./_static/component.html