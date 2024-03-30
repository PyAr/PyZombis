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
Happy Coding!

.. raw:: html

    <br>
    <html>
    <head>
        <title>PyFront - Simple</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="https://pyscript.net/latest/pyscript.css" />
        <script defer src="https://pyscript.net/latest/pyscript.js"></script>
    </head>
    <body>

        <py-config>
            packages = ["numpy", "pandas", "matplotlib"]
            terminal = true
        </py-config>
        
        <py-repl>
        import pandas as pd
        import numpy as np
        import matplotlib.pyplot as plt

        # Dummy data for sales performance of products in different regions
        regions = ['North', 'South', 'East', 'West']
        products = ['Product A', 'Product B', 'Product C', 'Product D', 'Product E']
        sales_data = pd.DataFrame(np.random.randint(1000, 5000, size=(len(regions), len(products))), columns=products, index=regions)

        def plot(data):
            plt.rcParams["figure.figsize"] = (12, 8)
            data.plot(kind='bar', stacked=True)
            plt.xlabel('Regions')
            plt.ylabel('Sales')
            plt.title('Sales Performance of Products in Different Regions')
            plt.xticks(rotation=0)
            plt.legend(title='Products', bbox_to_anchor=(1.05, 1), loc='upper left')
            plt.show()

        # Initial plot
        plot(sales_data)
        sales_data
        </py-repl>
    </body>
    </html>
