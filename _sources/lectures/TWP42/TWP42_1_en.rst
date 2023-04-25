Usando SQL
==========

Notas de surfistas
------------------

+ La Federación de Surf tiene los siguientes datos: número del surfista,
  name, country, grado promedio, Style, Age.
+ ¿Cómo usar estos datos?
+ Por ejemplo, quiero conocer a todos los surfistas mayores de 25
+ ¡Usando una base de datos! En este caso, SQL.

.. raw:: html

   <script src='https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.5.0/sql-wasm.js'></script>

   <script type="module">

      const sqlPromise = initSqlJs({
      locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.5.0/sql-wasm.wasm`
      });

      const dataPromise = fetch("../../_static/surfers_en.db").then(res => res.arrayBuffer());
      const [SQL, buf] = await Promise.all([sqlPromise, dataPromise])
      window.Database = new SQL.Database(new Uint8Array(buf));  
   </script>


+ Previamente fue creada una base de datos con una tabla llamada ``surfers``.
+ Esta tabla tiene la información de los participantes del torneo de surf organizada en las siguientes columnas: ``id``, ``name``, ``country``, ``media``, ``style``, ``age``.
+ ``id`` es un número entero que identifica al concursante.
+ ``name`` es una string con su name y su apodo (si tiene uno).
+ ``country`` muestra el country que está representando en el torneo.
+ ``media`` es el promedio de puntos obtenidos en el torneo.
+ ``style`` es el Style que tiene su tabla de surf.
+ ``age`` es un número entero que muestra la Age del concursante.
      

.. activecode:: ac_42_1_en
   :language: python3
   :python3_interpreter: brython

   En este ejercicio leeremos los datos de la tabla ``surfers`` y mostraremos
   solo los mayores a 25 con una instrucción SQL (conocidas como query). 
   Actualmente, la consulta devuelve todos los datos en la tabla ``surfers``.
   
   ~~~~
   import sys
   sys.path.append("../../_static")

   ^^^^
   # el método de conexión de sqlite3 se ha importado para su uso
   # uno puede hacer esto por la declaración
   from sqlite3 import connect

   # inicie la conexión y conéctese a la tabla de surfers predefinida
   base_datos = connect('surfers_en.db')

   
   # crear un cursor y ejecutar la consulta
   cursor = base_datos.cursor()
   query = 'SELECT * FROM surfers'
   
   cursor.execute(query)
   # obtener los datos
   linhas = cursor.fetchall()
   # imprimir los datos
   if(linhas!=None):
      for linha in linhas:
         print("ID    :",linha['id'])
         print("Name :",linha['name'])
         print("Country  :",linha['country'])
         print("Media  :",linha['media'])
         print("Style :",linha['style'])
         print("Age  :",linha['age'])
         print()
  
   # cerrar el cursor
   cursor.close()



    

