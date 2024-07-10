================
PyScript Testing
================

.. activecode:: ac_example1
   :nocodelens:
   :language: python3
   :python3_interpreter: pyscript

   print("Hello World!")


.. activecode:: ac_example2
   :nocodelens:
   :language: python3
   :python3_interpreter: pyscript

   import numpy as np

   # Creating a numpy array
   arr = np.array([1, 2, 3, 4, 5])

   # Performing operations
   arr_squared = arr ** 2  # Squaring each element

   # Generating a range of numbers
   range_arr = np.arange(10)  # 0 to 9

   # Reshaping an array
   reshaped_arr = range_arr.reshape(2, 5)  # Reshape to 2 rows, 5 columns

   # Display results
   print("Original array:", arr)
   print("Squared array:", arr_squared)
   print("Range array:", range_arr)
   print("Reshaped array (2x5):", reshaped_arr)


.. activecode:: ac_example3
   :nocodelens:
   :language: python3
   :python3_interpreter: pyscript

   import matplotlib.pyplot as plt
   import matplotlib.tri as tri
   import numpy as np

   from pyscript import display

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