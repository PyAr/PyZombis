========================
MatPlotLib Demonstration
========================

This is a demonstartion to show how to use MatPlotLib to create a simple plot.
This plot is implemented in the browser using the PyScript Component I submitted in a previous PR.

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

Instructions
------------
Run the code in the notebook below by ``Shift + Enter``.
The plot will be displayed below the code cell.

.. raw:: html
    :file: ./_static/component.html