Using SQL
=========

Surfer Notes
-------------

+ The Surf Federation has the following data: surfer's number, name, country, average grade, style, age.
+ How to use this information?
+ For example, I want to know all surfers over 25.
+ Using a database! In this case, SQL.

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


+ Previously, a database was created with a table called ``surfers``.
+ This table has the information of the surf tournament participants organized in the following columns: ``id``, ``name``, ``country``, ``average``, ``style``, ``age``.
+ ``id`` is an integer that identifies the contestant.
+ ``name`` is a string with his/her name and nickname (if any).
+ ``country`` shows the country he/she is representing in the tournament.
+ ``average`` is the average score obtained in the tournament.
+ ``style`` is the style of his/her surfboard.
+ ``age`` is an integer that shows the contestant's age.
      

.. activecode:: ac_42_1_en
   :language: python3
   :python3_interpreter: brython

   In this exercise we will read the data from the table ``surfers`` and display
   only those over 25 with an SQL statement (known as a query). 
   Currently, the query returns all the data in the ``surfers`` table.
   
   ~~~~
   import sys
   sys.path.append("../../_static")

   ^^^^
   # the connection method of sqlite3 has been imported for use
   # one can do this by the statement
   from sqlite3 import connect

   # initiate the connection and connect to the predefined surfers table
   database = connect('surfers_en.db')

   
   # create a cursor and execute the query
   cursor = database.cursor()
   query = 'SELECT * FROM surfers'
   
   cursor.execute(query)
   # fetch the data
   rows = cursor.fetchall()
   # print the data
   if(rows!=None):
      for row in rows:
         print("ID    :",row['id'])
         print("Name :",row['name'])
         print("Country  :",row['country'])
         print("Average  :",row['media'])
         print("Style :",row['style'])
         print("Age  :",row['age'])
         print()
  
   # close the cursor
   cursor.close()