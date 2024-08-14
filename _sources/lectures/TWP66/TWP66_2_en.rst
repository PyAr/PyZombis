======================
Introduction to Pandas
======================

.. image:: ../img/TWP66_002.png
    :align: center
    :alt:


Introduction
------------
This lecture focuses on Pandas, a powerful Python library for data manipulation and analysis. We'll explore its capabilities in handling structured data effectively.

Understanding Pandas Basics
---------------------------
Pandas provides data structures like Series and DataFrame. It is built on top of NumPy, making it easy to work with structured data.

.. code-block:: python
   :caption: Importing Pandas and Loading Dummy Data

   import pandas as pd

   # Dummy data
   data = {
       'Name': ['John', 'Anna', 'Peter', 'Linda', 'Jack'],
       'Age': [28, 23, 25, 24, 30],
       'City': ['New York', 'Paris', 'Berlin', 'London', 'Tokyo']
   }

   # Creating a DataFrame
   df = pd.DataFrame(data)

   # Displaying the DataFrame
   print(df)

Exploratory Data Analysis (EDA) with Pandas
-------------------------------------------
Check data dimensions and examine its structure:

.. code-block:: python
   :caption: Checking Data Dimensions and Info

   # Shape of the DataFrame
   print(df.shape)
   
   # Information about the DataFrame
   print(df.info())

Data Cleaning and Transformation
--------------------------------
Rename columns:

.. code-block:: python
   :caption: Cleaning and Transforming Data

   # Rename columns
   df.rename(columns={'Name': 'Full Name', 'City': 'Location'}, inplace=True)
   

Data Manipulation and Aggregation
---------------------------------
Select, filter, group, and aggregate data:

.. code-block:: python
   :caption: Data Manipulation and Aggregation

   # Selecting columns
   print(df[['Name', 'Age']])
   
   # Filtering data
   filtered_data = df[df['Age'] > 25]
   print(filtered_data)
   
   # Grouping and aggregating data
   age_group_stats = df.groupby('Age').size()
   print(age_group_stats)

Data Visualization with Pandas and Matplotlib
----------------------------------------------
Utilize Matplotlib for visualizations:

.. code-block:: python
   :caption: Data Visualization

   import matplotlib.pyplot as plt

   # Plotting example
   df['Age'].plot(kind='hist', bins=5)
   plt.title('Age Distribution')
   plt.xlabel('Age')
   plt.ylabel('Frequency')
   display(plt)

.. note::
   We are using PyScript to run NumPy and Matplotlib in the browser. 
   Use `plt.show()` instead of `display(plt)` to show the plots if you are running code locally.

Interactive Example
--------------------
Here's an interactive example where you can filter the DataFrame based on age and visualize the results:

.. activecode:: ac_l66_2_1
   :nocodelens:
   :language: python3
   :python3_interpreter: pyscript

   import pandas as pd
   import matplotlib.pyplot as plt

   # Dummy data
   data = {
       'Name': ['John', 'Anna', 'Peter', 'Linda', 'Jack'],
       'Age': [28, 23, 25, 24, 30],
       'City': ['New York', 'Paris', 'Berlin', 'London', 'Tokyo']
   }

   # Create DataFrame
   df = pd.DataFrame(data)

   # Filter DataFrame by age
   filtered_df = df[df['Age'] > 25]

   # Plotting filtered data
   filtered_df.plot(kind='bar', x='Name', y='Age', color='skyblue')
   plt.title('Age Distribution for Individuals Older than 25')
   plt.xlabel('Name')
   plt.ylabel('Age')
   display(plt)

.. note::
    Ensure you run all the code blocks provided to see the complete results and understand the functionalities demonstrated.

Exercise
--------
Write code to calculate the average age of the individuals in the DataFrame.