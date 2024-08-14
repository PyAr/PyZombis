=========================
Advanced NumPy Operations
=========================

Introduction
------------
In this exercise, we will use Python to explore the use of the NumPy and Matplotlib libraries.

Code Example
------------
We will use the NumPy library to define the domain and range of a function, and Matplotlib to plot the results.

**Define the Domain and Range**

.. code-block:: python

    import numpy as np

    # Define the DOMAIN of a FUNCTION
    N = 55
    X = np.linspace(-5, 5, N)  # -5 lower limit, 5 upper limit, N number of points to generate
    # Display the values
    print(X)

    # Calculate the RANGE of a FUNCTION
    Y = np.sin(X)
    # Display the calculated values
    print(Y)

**Plot the Values**

.. code-block:: python

    from matplotlib import pyplot as plt

    # Plot the values of X and Y with red circles
    plt.plot(X, Y, 'ro')
    plt.grid(True)

    # Plot the values of X and Y with blue lines
    plt.plot(X, Y, 'b-')
    plt.grid(True)

    # Display the plot
    diplay(plt)

.. note:: 
   use `plt.show()` instead of `display(plt)` if recreating on local machine.

**Interactive Code Editor**

To experiment with the code interactively, use the provided interactive code blocks below. Run all the code blocks to see the results and explore different functionalities.

.. activecode:: ac_l66_3_en_1
   :nocodelens:
   :language: python3
   :python3_interpreter: pyscript

   import numpy as np
   import matplotlib.pyplot as plt

   # Define the domain
   N = 55
   X = np.linspace(-5, 5, N)
   Y = np.sin(X)

   # Plotting the values
   plt.plot(X, Y, 'b-')
   plt.grid(True)
   display(plt)

.. note::
    Ensure you run all the code blocks provided to see the complete results and understand the functionalities demonstrated.