===============
Pandas Exercise
===============

Introduction
------------
Pandas is a Python library for data manipulation and analysis, offering:

1. ``DataFrame``: Two-dimensional labeled data structure resembling a spreadsheet.
2. ``Series``: One-dimensional labeled arrays, the building blocks of DataFrames.
3. ``Data Manipulation``: Functions for reading, writing, filtering, and transforming data.
4. ``Integration``: Seamless integration with other Python libraries.
5. ``Performance``: Built on NumPy for fast array operations, optimized for large datasets.

Exercise
--------
This exercise will cover the basics of Pandas

This is a sample code for plotting a graph using Pandas

.. code:: python 

      import js
      import pandas as pd

      # Dataset of programming languages and their popularity ratings
      languages_data = {
          "Language": ["Python", "JavaScript", "Java", "C++", "C#", "PHP"],
          "Popularity": [5, 4.8, 4.5, 4.2, 4, 3.8],
      }

      languages_df = pd.DataFrame(languages_data)

      current_selected = []
      flavour_elements = js.document.getElementsByName("flavour")

      def plot(data):
          # Calculate plot dimensions
          width = 400
          height = 300
          margin = 50
          plot_width = width - 2 * margin
          plot_height = height - 2 * margin

          # Calculate scale for y-axis
          max_rating = max(data["Popularity"])
          y_scale = plot_height / max_rating

          # Generate SVG for the plot
          svg = f'<svg width="{width}" height="{height}" viewBox="0 0 {width} {height}" xmlns="http://www.w3.org/2000/svg">'
          
          # Draw y-axis
          svg += f'<line x1="{margin}" y1="{margin}" x2="{margin}" y2="{height - margin}" stroke="black" />'
          svg += f'<text x="{margin - 10}" y="{margin - 10}" fill="black" font-size="10" text-anchor="end">Popularity</text>'
          
          # Draw y-axis scale
          for i in range(1, int(max_rating) + 1):
              y = height - margin - (i * plot_height / max_rating)
              svg += f'<line x1="{margin - 5}" y1="{y}" x2="{margin}" y2="{y}" stroke="black" stroke-dasharray="2"/>'
              svg += f'<text x="{margin - 10}" y="{y}" fill="black" font-size="8" text-anchor="end">{i}</text>'

          # Draw x-axis
          svg += f'<line x1="{margin}" y1="{height - margin}" x2="{width - margin}" y2="{height - margin}" stroke="black" />'
          svg += f'<text x="{width - margin + 10}" y="{height - margin + 10}" fill="black" font-size="10">Language</text>'

          # Calculate bar width and spacing
          num_bars = len(data)
          bar_width = plot_width / num_bars * 0.6
          spacing = plot_width / num_bars * 0.4

          # Draw bars
          for idx, (language, popularity) in enumerate(zip(data["Language"], data["Popularity"])):
              x = margin + idx * (bar_width + spacing)
              y = height - margin - (popularity * y_scale)
              svg += f'<rect x="{x}" y="{y}" width="{bar_width}" height="{popularity * y_scale}" fill="skyblue" />'
              svg += f'<text x="{x + bar_width / 2}" y="{height - margin + 20}" fill="black" font-size="8" text-anchor="middle">{language}</text>'

          svg += '</svg>'

          # Display SVG in the graph area
          js.document.getElementById("graph-area").innerHTML = svg

      def select_language(event):
          for ele in flavour_elements:
              if ele.checked:
                  current_selected = ele.value
                  break
          if current_selected == "ALL":
              plot(languages_df)
          else:
              filter = languages_df.apply(lambda x: ele.value.lower() in x["Language"].lower(), axis=1)
              plot(languages_df[filter])

      ele_proxy = select_language

      for ele in flavour_elements:
          if ele.value == "ALL":
            ele.checked = True
            current_selected = ele.value
          ele.addEventListener("change", ele_proxy)

      plot(languages_df)

Instructions
------------
Press ``SHIFT + ENTER`` to run the code

.. raw:: html

    <br>
    <html>
    <head>
        <title>Programming Language Ratings</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="https://pyscript.net/latest/pyscript.css" />
        <script defer src="https://pyscript.net/latest/pyscript.js"></script>
    </head>
    <body>

        <py-config>
        packages = ["pandas"]
        </py-config>

        <py-script>
        import js
        import pandas as pd

        # Dataset of programming languages and their popularity ratings
        languages_data = {
            "Language": ["Python", "JavaScript", "Java", "C++", "C#", "PHP"],
            "Popularity": [5, 4.8, 4.5, 4.2, 4, 3.8],
        }

        languages_df = pd.DataFrame(languages_data)

        current_selected = []
        flavour_elements = js.document.getElementsByName("flavour")

        def plot(data):
            # Calculate plot dimensions
            width = 400
            height = 300
            margin = 50
            plot_width = width - 2 * margin
            plot_height = height - 2 * margin

            # Calculate scale for y-axis
            max_rating = max(data["Popularity"])
            y_scale = plot_height / max_rating

            # Generate SVG for the plot
            svg = f'<svg width="{width}" height="{height}" viewBox="0 0 {width} {height}" xmlns="http://www.w3.org/2000/svg">'
            
            # Draw y-axis
            svg += f'<line x1="{margin}" y1="{margin}" x2="{margin}" y2="{height - margin}" stroke="black" />'
            svg += f'<text x="{margin - 10}" y="{margin - 10}" fill="black" font-size="10" text-anchor="end">Popularity</text>'
            
            # Draw y-axis scale
            for i in range(1, int(max_rating) + 1):
                y = height - margin - (i * plot_height / max_rating)
                svg += f'<line x1="{margin - 5}" y1="{y}" x2="{margin}" y2="{y}" stroke="black" stroke-dasharray="2"/>'
                svg += f'<text x="{margin - 10}" y="{y}" fill="black" font-size="8" text-anchor="end">{i}</text>'

            # Draw x-axis
            svg += f'<line x1="{margin}" y1="{height - margin}" x2="{width - margin}" y2="{height - margin}" stroke="black" />'
            svg += f'<text x="{width - margin + 10}" y="{height - margin + 10}" fill="black" font-size="10">Language</text>'

            # Calculate bar width and spacing
            num_bars = len(data)
            bar_width = plot_width / num_bars * 0.6
            spacing = plot_width / num_bars * 0.4

            # Draw bars
            for idx, (language, popularity) in enumerate(zip(data["Language"], data["Popularity"])):
                x = margin + idx * (bar_width + spacing)
                y = height - margin - (popularity * y_scale)
                svg += f'<rect x="{x}" y="{y}" width="{bar_width}" height="{popularity * y_scale}" fill="skyblue" />'
                svg += f'<text x="{x + bar_width / 2}" y="{height - margin + 20}" fill="black" font-size="8" text-anchor="middle">{language}</text>'

            svg += '</svg>'

            # Display SVG in the graph area
            js.document.getElementById("graph-area").innerHTML = svg

        def select_language(event):
            for ele in flavour_elements:
                if ele.checked:
                    current_selected = ele.value
                    break
            if current_selected == "ALL":
                plot(languages_df)
            else:
                filter = languages_df.apply(lambda x: ele.value.lower() in x["Language"].lower(), axis=1)
                plot(languages_df[filter])

        ele_proxy = select_language

        for ele in flavour_elements:
            if ele.value == "ALL":
                ele.checked = True
                current_selected = ele.value
            ele.addEventListener("change", ele_proxy)

        plot(languages_df)

        </py-script>

        <py-repl>
        languages_df
        </py-repl>

        <div id="graph-area"></div>
    </body>
    </html>


