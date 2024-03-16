===============
Poder de Pandas
===============

.. image:: ../img/TWP10_001.jpeg
    :height: 14.925cm
    :width: 9.258cm
    :align: center
    :alt:
    
Introducción
------------
Esta conferencia trata sobre una de las herramientas más poderosas en el ecosistema de Python para análisis de datos: Pandas. En esta conferencia, nos embarcaremos en un viaje para explorar los entresijos de Pandas, comprendiendo sus capacidades para manejar, manipular y analizar datos de manera efectiva.

Entendiendo los Conceptos Básicos de Pandas
--------------------------------------------
- Pandas, construido sobre NumPy, proporciona estructuras de datos y funciones para trabajar con datos estructurados.
- Componentes clave: Serie (arreglo unidimensional etiquetado) y DataFrame (estructura de datos etiquetada bidimensional).
- Importando Pandas y cargando datos: ``import pandas as pd`` y ``pd.read_csv()``.

Análisis Exploratorio de Datos (EDA) con Pandas
-----------------------------------------------
- Verificando las dimensiones de los datos: ``df.shape``.
- Obteniendo estadísticas resumidas: ``df.describe()``.
- Examinando tipos de datos y valores faltantes: ``df.info()``.

Limpieza y Transformación de Datos
----------------------------------
- Renombrando columnas para mayor claridad: ``df.rename(columns={'old_name': 'new_name'}, inplace=True)``.
- Manejando datos faltantes: ``df.dropna()``, ``df.fillna()``.
- Conversión de tipos de datos: ``df.astype()``.

Manipulación y Agregación de Datos
-----------------------------------
- Seleccionando columnas y filas: ``df['column_name']``, ``df.loc[]``, ``df.iloc[]``.
- Filtrando datos: ``df.query()``.
- Agrupación y agregación de datos: ``df.groupby().agg()``.

Visualización de Datos con Pandas
---------------------------------
- Utilizando la integración de Matplotlib y Seaborn para visualizaciones.
- Gráficos básicos: ``df.plot()``.
- Gráficos de barras, histogramas, diagramas de caja: ``df.plot(kind='bar')``, ``df.plot(kind='hist')``, ``df.plot(kind='box')``.

Técnicas Avanzadas de Análisis de Datos
----------------------------------------
- Análisis de series temporales: Manejo de datos de fecha y hora con Pandas.
- Fusión y unión de conjuntos de datos: ``pd.merge()``, ``pd.concat()``.
- Manejo de duplicados: ``df.drop_duplicates()``.

Aplicaciones del Mundo Real y Estudios de Caso
----------------------------------------------
- Análisis de datos de atención médica: Exploración de tiempos de espera de pacientes, distribución de servicios y tendencias geográficas.
- Análisis de datos financieros: Análisis del mercado de valores, gestión de carteras.
- Análisis de datos en redes sociales: Análisis de sentimientos, detección de tendencias.

Mejores Prácticas y Optimización del Rendimiento
------------------------------------------------
- Carga y almacenamiento eficientes de datos: Utilización de fragmentación, optimización de tipos de datos.
- Operaciones vectorizadas: Aprovechamiento de operaciones vectorizadas de Pandas para cálculos más rápidos.
- Gestión de memoria: Reducción del uso de memoria para conjuntos de datos grandes.

Ejemplo
-------

- Aquí hay algo que puedes desarrollar usando Pandas. Este ejemplo utiliza datos de productos de helado de Beijing. Los datos se leen de un archivo CSV y luego se visualizan usando matplotlib. El usuario puede seleccionar un sabor de helado y el gráfico mostrará la calificación del sabor seleccionado.

.. code:: python

    import js
    import pandas as pd
    import matplotlib.pyplot as plt

    from pyodide.http import open_url
    from pyodide.ffi import create_proxy

    url = (
        "https://raw.githubusercontent.com/Cheukting/pyscript-ice-cream/main/bj-products.csv"
    )
    ice_data = pd.read_csv(open_url(url))

    current_selected = []
    flavour_elements = js.document.getElementsByName("flavour")

    def plot(data):
        plt.rcParams["figure.figsize"] = (22,20)
        fig, ax = plt.subplots()
        bars = ax.barh(data["name"], data["rating"], height=0.7)
        ax.bar_label(bars)
        plt.title("Rating of ice cream flavours of your choice")
        display(fig, target="graph-area", append=False)

    def select_flavour(event):
        for ele in flavour_elements:
            if ele.checked:
                current_selected = ele.value
                break
        if current_selected == "ALL":
            plot(ice_data)
        else:
            filter = ice_data.apply(lambda x: ele.value in x["ingredients"], axis=1)
            plot(ice_data[filter])

    ele_proxy = create_proxy(select_flavour)

    for ele in flavour_elements:
        if ele.value == "ALL":
            ele.checked = True
            current_selected = ele.value
        ele.addEventListener("change", ele_proxy)

    plot(ice_data)


.. raw:: html

    <br>
    <html>
      <head>
        <title>Selector de Helado</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="https://pyscript.net/latest/pyscript.css" />
        <script defer src="https://pyscript.net/latest/pyscript.js"></script>
      </head>
      <body>

        <py-config>
          packages = ["matplotlib", "pandas"]
        </py-config>

        <py-script>

        import js
        import pandas as pd
        import matplotlib.pyplot as plt

        from pyodide.http import open_url
        from pyodide.ffi import create_proxy

        url = (
            "https://raw.githubusercontent.com/Cheukting/pyscript-ice-cream/main/bj-products.csv"
        )
        ice_data = pd.read_csv(open_url(url))

        current_selected = []
        flavour_elements = js.document.getElementsByName("flavour")

        def plot(data):
            plt.rcParams["figure.figsize"] = (22,20)
            fig, ax = plt.subplots()
            bars = ax.barh(data["name"], data["rating"], height=0.7)
            ax.bar_label(bars)
            plt.title("Rating of ice cream flavours of your choice")
            display(fig, target="graph-area", append=False)

        def select_flavour(event):
            for ele in flavour_elements:
                if ele.checked:
                    current_selected = ele.value
                    break
            if current_selected == "ALL":
                plot(ice_data)
            else:
                filter = ice_data.apply(lambda x: ele.value in x["ingredients"], axis=1)
                plot(ice_data[filter])

        ele_proxy = create_proxy(select_flavour)

        for ele in flavour_elements:
            if ele.value == "ALL":
                ele.checked = True
                current_selected = ele.value
            ele.addEventListener("change", ele_proxy)

        plot(ice_data)

        </py-script>

        <div id="input" style="margin-left: 250px;">
            Seleccione su sabor de 🍨: <br/>
            <input type="radio" id="all" name="flavour" value="ALL">
            <label for="all"> Todos 🍧</label>
            <input type="radio" id="chocolate" name="flavour" value="COCOA">
            <label for="chocolate"> Chocolate 🍫</label>
            <input type="radio" id="cherrie" name="flavour" value="CHERRIES">
            <label for="cherrie"> Cerezas 🍒</label>
            <input type="radio" id="berries" name="flavour" value="BERRY">
            <label for="berries"> Bayas 🍓</label>
            <input type="radio" id="cheese" name="flavour" value="CHEESE">
            <label for="cheese"> Queso 🧀</label>
            <input type="radio" id="peanut" name="flavour" value="PEANUT">
            <label for="peanut"> Cacahuate 🥜</label>
        </div>

        <div id="graph-area" style="width: 1000px; height: 600px;"></div>

      </body>
    </html>
