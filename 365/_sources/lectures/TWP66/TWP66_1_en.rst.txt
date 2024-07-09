=====================
Introduction to NumPy
=====================

.. image:: ../img/TWP66_001.png
    :height: 9.258cm
    :width: 14.925cm
    :align: center
    :alt:

Introduction
------------
This comprehensive lecture focuses on mastering NumPy, one of the most popular libraries in Python for numerical computations. We will explore various functionalities of NumPy, understanding how to create and manipulate arrays to effectively perform numerical operations.

Part 1: Understanding NumPy Basics
----------------------------------

.. contents::
    :local:

Overview
~~~~~~~~
NumPy is a powerful library for numerical computations in Python. It provides support for large multi-dimensional arrays and matrices, along with a collection of mathematical functions to operate on these arrays.

Installing NumPy
~~~~~~~~~~~~~~~~
Install NumPy using pip::

    pip install numpy

Importing NumPy
~~~~~~~~~~~~~~~
Import NumPy in your Python script::

    import numpy as np

Creating Arrays
~~~~~~~~~~~~~~~
**1D Array**::

    import numpy as np

    # Create a 1D array
    arr = np.array([1, 2, 3, 4, 5])
    print("1D Array:", arr)

**2D Array**::

    import numpy as np

    # Create a 2D array
    arr_2d = np.array([[1, 2, 3], [4, 5, 6]])
    print("2D Array:\n", arr_2d)

Array Operations
~~~~~~~~~~~~~~~~
**Basic Operations**::

    import numpy as np

    # Create an array
    arr = np.array([1, 2, 3, 4, 5])

    # Perform basic operations
    print("Sum:", np.sum(arr))
    print("Mean:", np.mean(arr))

**Element-wise Operations**::

    import numpy as np

    # Create arrays
    arr1 = np.array([1, 2, 3])
    arr2 = np.array([4, 5, 6])

    # Element-wise addition
    print("Element-wise Addition:", arr1 + arr2)

    # Element-wise multiplication
    print("Element-wise Multiplication:", arr1 * arr2)

Shape Manipulation
~~~~~~~~~~~~~~~~~~
**Reshaping Arrays**::

    import numpy as np

    # Create a 1D array
    arr = np.array([1, 2, 3, 4, 5, 6])

    # Reshape the array to 2x3
    reshaped_arr = np.reshape(arr, (2, 3))
    print("Reshaped Array:\n", reshaped_arr)

**Flattening Arrays**::

    import numpy as np

    # Create a 2D array
    arr_2d = np.array([[1, 2, 3], [4, 5, 6]])

    # Flatten the array
    flat_arr = arr_2d.flatten()
    print("Flattened Array:", flat_arr)

Conclusion
----------
NumPy is essential for numerical computations in Python. Understanding the basics of array creation and manipulation is crucial for data science and machine learning.

Make sure to explore the NumPy documentation for more advanced features and functionalities.

Quiz
----
.. raw:: html
    :file: ../_static/TWP66/TWP66_1_en.html