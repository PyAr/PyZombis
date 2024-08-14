=================
SymPy with Graphs
=================

Introduction
------------
In this exercise, we will use Python's SymPy library to create and visualize mathematical expressions using both 2D and 3D plots.

Code Example: 2D Plots
-----------------------
We will use the SymPy library to define symbolic expressions and visualize them using 2D plots.

**Define the Symbolic Variable**

.. code-block:: python

    from sympy import Symbol
    from sympy.plotting import plot
    
    # Define the symbolic variable
    x = Symbol('x')
    
    # Display the symbolic variable
    print(x)

**Plot the Expressions**

.. code-block:: python

    # Plot the quadratic function x^2 with a custom color
    plot(x**2, line_color='fuchsia')

    # Plot the quadratic function x^2 with a different color code
    plot(x**2, line_color='#e30052')

    # Plot the quadratic function x^2 with the default color
    plot(x**2)

    # Plot the sine and cosine functions over a specific interval
    plot(sin(x), cos(x), (x, -pi, pi))

    # Plot multiple functions with different intervals and a custom title
    plot((sin(x), (x, -2*pi, 2*pi)), (cos(x), (x, -pi, pi)), 
         line_color='green', title='Graph Example with SymPy')

.. note:: 
   Use these plots to explore the behavior of functions within specified intervals.

Code Example: 3D Plots
-----------------------
We can also create 3D surface plots using SymPy.

**3D Surface Plot**

.. code-block:: python

    from sympy.plotting import plot3d
    from sympy import Symbol

    # Define symbolic variables for 3D plotting
    x = Symbol('x')
    y = Symbol('y')

    # Display the symbolic variables
    print(x, y)

    # Plot a 3D surface for the expression x * y
    plot3d(x * y, (x, -10, 10), (y, -10, 10))

    # Plot multiple 3D surfaces
    plot3d(x * y, x / y, (x, -5, 5), (y, -5, 5))

    # Plot surfaces with more complex expressions
    plot3d((x**2 + y**2, (x, -5, 5), (y, -5, 5)), 
           (x * y, (x, -3, 3), (y, -3, 3)))

**3D Parametric Plots**

.. code-block:: python

    from sympy.plotting import plot3d_parametric_line
    from sympy import cos, sin

    # Plot a 3D parametric line
    plot3d_parametric_line(cos(x), sin(x), x, (x, -5, 5))

    # Plot a 3D parametric surface
    from sympy.plotting import plot3d_parametric_surface
    u, v = symbols('u v')
    plot3d_parametric_surface(cos(u + v), sin(u - v), u - v, 
                              (u, -5, 5), (v, -5, 5))

**Implicit Plots**

.. code-block:: python

    from sympy import plot_implicit, Eq, And
    from sympy import symbols
    
    # Define the symbolic variables
    x, y = symbols('x y')
    
    # Plot an implicit equation
    p1 = plot_implicit(Eq(x**2 + y**2, 5), 
                       (x, -5, 5), (y, -2, 2), 
                       adaptive=False, points=400)

    # Plot a region defined by an inequality
    p2 = plot_implicit(y > x**2)

    # Plot using boolean conjunctions
    p3 = plot_implicit(And(y > x, y > -x))

.. note:: 
   Experiment with these plots to understand how SymPy handles symbolic math and visualization.

Interactive Code Editor
-----------------------
To experiment with the code interactively, use the provided interactive code blocks below. Run all the code blocks to see the results and explore different functionalities.

.. activecode:: ac_l66_5_en_1
   :nocodelens:
   :language: python3
   :python3_interpreter: pyscript

   from sympy import Symbol, sin, cos, pi
   from sympy.plotting import plot

   # Define the symbolic variable
   x = Symbol('x')

   # Plotting the sine and cosine functions
   plot(sin(x), cos(x), (x, -pi, pi))

.. note::
    Ensure you run all the code blocks provided to see the complete results and understand the functionalities demonstrated.
