====================================
NumPy: Advanced Topics and Exercises
====================================

Overview
--------
In this lecture, we'll dive deeper into NumPy, exploring advanced topics and providing exercises to help reinforce your understanding.

Part 1: Advanced NumPy Operations
---------------------------------

Broadcasting
~~~~~~~~~~~~
Broadcasting in NumPy allows universal functions to work with arrays of different shapes. For example:

.. activecode:: ac_l66_2a
   :nocodelens:
   :language: python3
   :python3_interpreter: pyscript

   import numpy as np

   a = np.array([1, 2, 3])
   b = np.array([10, 20, 30])
   c = a[:, np.newaxis] + b
   print(c)

Exercise 1: Broadcasting
~~~~~~~~~~~~~~~~~~~~~~~~
1. Create a NumPy array `x` of shape (3, 4) with random integers.
2. Create a NumPy array `y` of shape (3, 1) with random integers.
3. Perform broadcasting to add `y` to `x` element-wise.

Indexing and Slicing
~~~~~~~~~~~~~~~~~~~~
NumPy arrays support powerful indexing and slicing operations:

.. activecode:: ac_l66_2b
   :nocodelens:
   :language: python3
   :python3_interpreter: pyscript

   import numpy as np

   arr = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
   slice = arr[:2, 1:]
   print(slice)

Exercise 2: Indexing and Slicing
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
1. Create a NumPy array `z` of shape (5, 5) with sequential integers starting from 1.
2. Extract the bottom-right 3x3 sub-array using slicing.

Conclusion
----------
In this lecture, we've covered advanced NumPy operations and exercises to reinforce your learning. Practice these concepts to deepen your understanding of NumPy arrays and their functionalities.

.. note::
   Ensure you have NumPy installed (`pip install numpy`) to run the code examples.

