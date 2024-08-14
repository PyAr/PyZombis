==================================
Exploring Python Libraries Further
==================================

Introduction
------------
In this section, we will delve deeper into the use of Python libraries, specifically focusing on advanced operations with NumPy and visualizations using Matplotlib.

**Working with Functions**

We'll start by defining the domain of a function and calculating its corresponding range, followed by plotting these values.

.. code-block:: python

    import numpy as np

    # Define the DOMAIN of a FUNCTION
    N = 35
    X = np.linspace(-5, 5, N)  # -5 lower limit, 5 upper limit, N number of points to generate
    # Display the values
    print(X)

    # Calculate the CO-DOMAIN of a FUNCTION
    Y = np.sin(X) / X
    # Display the calculated values
    print(Y)

**Plotting Complex Functions**

Let's plot the calculated values and explore more advanced plotting techniques.

.. code-block:: python

    from matplotlib import pyplot as plt

    # Plot the values of X and Y with red circles
    plt.plot(X, Y, 'ro')
    plt.grid(True)

    # Plot the values of X and Y with cyan circles
    plt.plot(X, Y, 'co')
    plt.grid(True)

    # Plot the values of X and Y with blue lines
    plt.plot(X, Y, 'b-')
    plt.grid(True)
    display(plt)

**Exploring and Composing Functions**

We can also explore and compose functions using NumPy and Matplotlib.

.. code-block:: python

    Z = (np.sin(X)) ** 2
    plt.plot(X, Z, '.-')
    plt.grid(True)
    display(plt)

**Interactive Code Editor**

To experiment with the code interactively, use the provided interactive code blocks below. Run all the code blocks to see the results and explore different functionalities.

.. activecode:: ac_l66_4_en_1
   :nocodelens:
   :language: python3
   :python3_interpreter: pyscript

   import numpy as np
   import matplotlib.pyplot as plt

   # Define the domain
   N = 35
   X = np.linspace(-5, 5, N)
   Y = np.sin(X) / X

   # Plotting the values
   plt.plot(X, Y, 'b-')
   plt.grid(True)
   display(plt)

   # Exploring function composition
   Z = (np.sin(X)) ** 2
   plt.plot(X, Z, '.-')
   plt.grid(True)
   display(plt)

.. note:: 
   use `plt.show()` instead of `display(plt)` if recreating on local machine.