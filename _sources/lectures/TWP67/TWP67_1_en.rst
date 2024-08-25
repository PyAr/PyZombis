===================
Introduction to LTK
===================

What is LTK?
------------

LTK, or Layout Toolkit, is a powerful library designed to work with PyScript. PyScript allows developers to run Python code directly in the browser, leveraging web technologies to build dynamic and responsive web applications. LTK builds on this by providing a set of tools and components that make it easy to manipulate the DOM, create layouts, and add interactive elements without needing to write JavaScript.

What Can LTK Do?
----------------

LTK provides a variety of components and utilities that simplify common web development tasks. Some of the key features of LTK include:

- **DOM Manipulation**: Create and modify HTML elements using Python.
- **Layout Components**: Use components like `Div`, `Span`, `VBox`, and `HBox` to structure your web pages.
- **Event Handling**: Attach event listeners to elements and handle user interactions with Python functions.
- **Styling**: Apply CSS styles to elements directly from Python code.
- **Integration with Other Libraries**: Easily integrate with libraries like CodeMirror to add rich features like code editing.

Creating a UI in the Browser
----------------------------

Using LTK, you can create user interfaces (UI) directly in the browser with Python. This approach allows you to leverage Python's simplicity and readability to build complex web applications. Let's start with a basic "Hello, World!" example to see how LTK works.

Basic "Hello, World!" Example
-----------------------------

Here's a brief overview of a simple "Hello, World!" example using LTK:

- **Import LTK Components**: Start by importing the necessary LTK components.
- **Create a Layout**: Use `VBox` to create a vertical layout.
- **Add Elements**: Add a `Span` to display text and a `Button` to handle user interaction.
- **Run the Code**: When the button is clicked, an alert box will display "Hello, World!".

Example Code
------------

.. note::
    The current interpreter already handles the import statements and append for us.

.. code-block:: python

    ltk.VBox(
        ltk.Span("Change me!")
            .css("padding", 10),
        
        ltk.Button("Hello World", lambda event: ltk.window.alert("Hello World!"))
            .css("margin", 10),
        
        ltk.Span("Delete me!")
            .css("padding", 10)  
    )


Example: Interactive Editor
---------------------------

This interactive example demonstrates how to use LTK to create and manipulate HTML elements, handle user input, and dynamically update the interface. 

.. raw:: html

    <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
        <iframe src="/_static/ltk_mini_editor/ltk.html" width="100%" height="600px" frameborder="0"></iframe>
    </div>

The code behind this example uses LTK components such as `Div`, `VBox`, and `Button`, as well as integration with the CodeMirror library for the editor. By interacting with the editor, you can see how changes in the Python code immediately reflect in the web interface.