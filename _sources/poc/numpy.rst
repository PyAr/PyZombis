==============
Numpy Exercise
==============

Introduction to Numpy
---------------------
NumPy is a Python library that provides support for large, multi-dimensional arrays and matrices, along with a collection of mathematical functions to operate on these arrays efficiently.
It is widely used in scientific computing, data analysis, and machine learning due to its powerful array manipulation capabilities and efficient numerical operations.

Numpy functions
---------------
1. Mean ``(np.mean())`` : Calculates the arithmetic mean (average) of elements along a specified axis in an array. It computes the sum of all elements and divides it by the number of elements.
2. Median ``(np.median())``: Computes the median, which is the middle value of a sorted array. If the array has an odd number of elements, the median is the middle value. If it has an even number, it's the average of the two middle values.
3. Standard Deviation ``(np.std())``: Calculates the standard deviation, which measures the spread of data around the mean. It's the square root of the variance, where variance is the average of the squared differences from the mean.
4. Sort ``(np.sort())``: Sorts the elements of an array along a specified axis. By default, it sorts the array in ascending order along the last axis. You can specify the axis along which to sort and whether to return a sorted copy or sort the array in place.

See the code below to understand how these functions work.

.. raw:: html 

    <br>
    <html>
    <head>
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="https://pyscript.net/latest/pyscript.css" />
        <script defer src="https://pyscript.net/latest/pyscript.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>NumPy Quiz</title>
        <style>
        body {
            font-family: Arial, sans-serif;
        }
        .question {
            margin-bottom: 20px;
        }
        .submit-btn {
            margin-top: 10px;
        }
        </style>
    </head>
    <body>
        <py-config>
            packages = ["numpy"]
            terminal = false
        </py-config>
        <div class="question">
        <p>Match the NumPy function with its description:</p>
        <ol>
            <li>
            <label for="func1">numpy.mean()</label>
            <select id="func1" name="func1">
                <option value="1">Calculates the median of elements</option>
                <option value="2">
                Calculates the arithmetic mean along the specified axis
                </option>
                <option value="3">
                Sorts the elements of an array along a specified axis
                </option>
                <option value="4">
                Computes the standard deviation along the specified axis
                </option>
            </select>
            </li>
            <li>
            <label for="func2">numpy.median()</label>
            <select id="func2" name="func2">
                <option value="1">Calculates the median of elements</option>
                <option value="2">
                Calculates the arithmetic mean along the specified axis
                </option>
                <option value="3">
                Sorts the elements of an array along a specified axis
                </option>
                <option value="4">
                Computes the standard deviation along the specified axis
                </option>
            </select>
            </li>
            <li>
            <label for="func3">numpy.sort()</label>
            <select id="func3" name="func3">
                <option value="1">Calculates the median of elements</option>
                <option value="2">
                Calculates the arithmetic mean along the specified axis
                </option>
                <option value="3">
                Sorts the elements of an array along a specified axis
                </option>
                <option value="4">
                Computes the standard deviation along the specified axis
                </option>
            </select>
            </li>
            <li>
            <label for="func4">numpy.std()</label>
            <select id="func4" name="func4">
                <option value="1">Calculates the median of elements</option>
                <option value="2">
                Calculates the arithmetic mean along the specified axis
                </option>
                <option value="3">
                Sorts the elements of an array along a specified axis
                </option>
                <option value="4">
                Computes the standard deviation along the specified axis
                </option>
            </select>
            </li>
        </ol>
        <button class="submit-btn" onclick="checkAnswers()">Submit</button>
        </div>

        <div id="result"></div>

        <p> Try numpy functions in the Python REPL below:</p>

        <div>
        <py-repl>
        import numpy as np

        # Create a NumPy array
        arr = np.array([1, 2, 3, 4, 5])

        # Calculate mean
        mean = np.mean(arr)
        print("Mean of the array:", mean)

        # Calculate median
        median = np.median(arr)
        print("Median of the array:", median)

        # Sort the array
        sorted_arr = np.sort(arr)
        print("Sorted array:", sorted_arr)

        # Calculate standard deviation
        std_dev = np.std(arr)
        print("Standard deviation of the array:", std_dev)
        </py-repl>
    </div>

        <script>
        function checkAnswers() {
            var func1 = document.getElementById("func1").value;
            var func2 = document.getElementById("func2").value;
            var func3 = document.getElementById("func3").value;
            var func4 = document.getElementById("func4").value;

            var resultDiv = document.getElementById("result");
            resultDiv.innerHTML = "";

            if (func1 === "2" && func2 === "1" && func3 === "3" && func4 === "4") {
            resultDiv.textContent = "Congratulations! All answers are correct!";
            resultDiv.style.color = "green";
            } else {
            resultDiv.textContent = "Incorrect answers. Please try again.";
            resultDiv.style.color = "red";
            }
        }
        </script>
    </body>
    </html>

Instructions
------------
``SHIFT + ENTER`` on the code cell below to see the quiz. Match the NumPy functions with their descriptions and click on the "Submit" button to check your answers.

