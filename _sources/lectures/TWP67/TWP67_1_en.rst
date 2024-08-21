===
PoC
===

Try These
---------


.. code-block:: python

    import numpy as np
    import matplotlib.pyplot as plt
    from pyscript import display

    # Define the domain
    N = 55
    X = np.linspace(-5, 5, N)
    Y = np.sin(X)

    # Plotting the values
    plt.plot(X, Y, 'b-')
    plt.grid(True)

    # Display a message
    print("The plot is displayed below:")

    # Display the plot on the webpage
    display(plt, target="output", append=False)

.. code-block:: python

    import ltk

    # Clear the output div before adding new content
    ltk.find("#output").empty()

    # Create and append new elements to the output div
    (
        ltk.VBox(
            ltk.HBox(
                ltk.Text("Hello"),
                ltk.Button(
                    "World", 
                    lambda event: 
                        ltk.find(".ltk-button, a")
                            .css("color", "red")
                )
                .css("color", "blue")
            )
        )
        .appendTo(ltk.find("#output"))  # Append to the output div
    )

.. raw:: html
    :file: ../_static/index1.html
