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

    import matplotlib.pyplot as plt
    import matplotlib.tri as tri
    import numpy as np

    # First create the x and y coordinates of the points.
    n_angles = 36
    n_radii = 8
    min_radius = 0.25
    radii = np.linspace(min_radius, 0.95, n_radii)

    angles = np.linspace(0, 2 * np.pi, n_angles, endpoint=False)
    angles = np.repeat(angles[..., np.newaxis], n_radii, axis=1)
    angles[:, 1::2] += np.pi / n_angles

    x = (radii * np.cos(angles)).flatten()
    y = (radii * np.sin(angles)).flatten()
    z = (np.cos(radii) * np.cos(3 * angles)).flatten()

    # Create the Triangulation; no triangles so Delaunay triangulation created.
    triang = tri.Triangulation(x, y)

    # Mask off unwanted triangles.
    triang.set_mask(np.hypot(x[triang.triangles].mean(axis=1),
                            y[triang.triangles].mean(axis=1))
                    < min_radius)

    fig1, ax1 = plt.subplots()
    ax1.set_aspect('equal')
    tpc = ax1.tripcolor(triang, z, shading='flat')
    fig1.colorbar(tpc)
    ax1.set_title('tripcolor of Delaunay triangulation, flat shading')

    display(fig1)

.. raw:: html
    :file: ./_static/component.html