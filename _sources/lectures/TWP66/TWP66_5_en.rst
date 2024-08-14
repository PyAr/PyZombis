==========================================
Interactive Data Visualization with Python
==========================================

In this lesson, we will explore the use of Python libraries for creating interactive data visualizations. You will learn how to generate various types of plots, including line plots, bar charts, and pie charts. We will also cover how to interact with these plots dynamically. By the end of this lesson, you'll have a solid understanding of how to create and manipulate visual data representations in Python.

.. contents:: Table of Contents
   :depth: 2
   :local:

.. note::
   Ensure you have all the necessary Python libraries installed. This lesson assumes you are already familiar with NumPy and Matplotlib.

Line Plots
----------

Let's start with a simple line plot to compare the average temperatures in Argentina between the years 1991 and 2020.

.. code-block:: python

   import matplotlib.pyplot as plt

   temp_1991 = [20.5, 20.0, 18.9, 14.8, 11.9, 8.2, 7.3, 8.9, 12.4, 13.8, 17.3, 18.6]
   temp_2020 = [21.5, 20.1, 20.0, 14.9, 11.0, 8.3, 6.4, 9.7, 12.5, 15.5, 19.0, 20.3]

   plt.plot(temp_1991, linewidth=3, label='1991')
   plt.plot(temp_2020, linestyle='dashed', linewidth=3, label='2020')

   plt.ylabel('Temperaturas')
   plt.title('Comparativa de 1991 y 2020')
   plt.xlabel('Mes')
   plt.legend()
   plt.grid(True)
   display(plt)  # Replace plt.show() if running locally

.. note::
    Replace `display(plt)` with `plt.show()` if running the code locally.

Now, let's label the months on the x-axis:

.. code-block:: python

   meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 
            'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']

   plt.plot(meses, temp_1991, linewidth=3, label='1991')
   plt.plot(meses, temp_2020, linestyle='dashed', linewidth=3, label='2020')

   plt.ylabel('Temperaturas')
   plt.title('Comparativa de 1991 y 2020')
   plt.xlabel('Mes')
   plt.legend()
   plt.grid(True)
   display(plt)  # Replace plt.show() if running locally

Bar Charts
----------

Let's compare the temperatures using a bar chart:

.. code-block:: python

   import numpy as np

   ancho = 0.35
   x = np.arange(len(temp_1991))
   fig, ax = plt.subplots()
   rects1 = ax.bar(x - ancho/2, temp_1991, ancho, color='b', label='1991')
   rects2 = ax.bar(x + ancho/2, temp_2020, ancho, color='g', label='2020')

   ax.set_ylabel('Temperaturas')
   ax.set_title('Comparativa')
   ax.set_xticks(x)
   ax.set_xticklabels(meses)
   ax.legend()

   display(plt)  # Replace plt.show() if running locally

Pie Charts
----------

Visualize the distribution of female students across different study areas in 2018 using a pie chart:

.. code-block:: python

   est_mujeres = [10512, 4774, 16232, 22904, 36700]
   etiquetas = ['Ciencias Aplicadas', 'Ciencias Básicas', 
                'Ciencias de la Salud', 'Ciencias Humanas', 
                'Ciencias Sociales']

   fig1, ax = plt.subplots()
   ax.set_title('Estudiantes 2018 según área de estudio')
   ax.axis('equal')
   ax.pie(est_mujeres, labels=etiquetas, autopct='%1.2f%%')

   display(plt)   # Replace plt.show() if running locally

.. Interactive Widgets
.. --------------------

.. Add interactivity to your plots using widgets. For example, dynamically change the degree of a polynomial:

.. .. code-block:: python

..    import numpy as np
..    import matplotlib.pyplot as plt
..    import ipywidgets as widgets
..    from IPython.display import display

..    @widgets.interact(grado=(0, 9), N_puntos=(5, 35))
..    def mi_plot(grado=3, N_puntos=5):    
..        x = np.linspace(-10, 10, N_puntos)
..        y = x**grado
..        plt.figure(figsize=(12,8))
..        plt.plot(x, y, 'ro-')
..        plt.grid(True)
..        display(plt)  # Replace plt.show() if running locally

Exercise: Create Your Own Visualization
---------------------------------------

**Task:** Create a bar chart that compares the average temperatures in Argentina across three different years: 1991, 2000, and 2020.

**Hint:** You can use the data for 2000 as follows:

.. code-block:: python

   temp_2000 = [21.2, 19.4, 17.0, 14.5, 10.1, 8.1, 5.6, 8.9, 10.8, 14.9, 16.3, 19.6]

Follow the steps from the previous examples to create and display your chart.

Interactive Editor
------------------

.. note::
   Use this editor to run the codes, practice, and do exercises to see the results.

.. activecode:: ac_l66_5_1a
   :nocodelens:
   :language: python3
   :python3_interpreter: pyscript

   # You can start practicing here by copying and pasting the code examples from above,
   # or by writing your own code to explore different visualizations.