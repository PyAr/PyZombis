More SQL concepts
==================


.. raw:: html

   <script src='https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.5.0/sql-wasm.js'></script>

   <script type="module">

      const sqlPromise = initSqlJs({
      locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.5.0/sql-wasm.wasm`
      });

      const dataPromise = fetch("../../_static/Chinook_Sqlite.sqlite").then(res => res.arrayBuffer());
      const [SQL, buf] = await Promise.all([sqlPromise, dataPromise])
      window.Database = new SQL.Database(new Uint8Array(buf));  
   </script>

Chinook database schema
-----------------------   

+ The Chinook data model represents a digital media store, including tables for artists, albums, media tracks, invoices, and customers.   

.. image:: ../img/TWP42_009.png
   :height: 20.0cm
   :width: 15.0cm
   :align: center
   :alt:

Selecting different tables from databases
----------------------------------
.. activecode:: ac_42_3a
   :language: python3
   :python3_interpreter: brython

   
   ~~~~
   import sys
   sys.path.append("../../_static")

   ^^^^
   from sqlite3 import connect

   # connecting to the chinook database
   database = connect('Chinook_Sqlite.sqlite')
   cursor = database.cursor()

   # choose a specific column from a table
   # limit the results to the first 30 rows
   query = 'select * from Track limit 30;'
   
   cursor.execute(query)
   # get the data
   rows = cursor.fetchall()
   # print the data
   if rows:
      for i in range(len(rows)):
         for k in rows[i].keys():
               print(k,":",rows[i][k])
         print()
  
   # close the cursor
   cursor.close()



Sorting rows
-------------
.. activecode:: ac_42_3b
   :language: python3
   :python3_interpreter: brython

   The ``ORDER BY`` clause is used to sort a set of results in a query. SQLite stores data in tables in
   an unspecified order. This means that the rows in the table may or may not be in the order they were inserted. If you use the
   ``SELECT`` statement to query data from a table, the order of the rows in the result set is not specified. To 
   sort the result set, add the ``ORDER BY`` clause to the ``SELECT`` statement like this:

   ``ORDER BY column_name [ASC | DESC]``
   ~~~~
   import sys
   sys.path.append("../../_static")

   ^^^^
   from sqlite3 import connect

   # connecting to the chinook database
   database = connect('Chinook_Sqlite.sqlite')
   cursor = database.cursor()

   # sort rows according to the milliseconds column
   query = '''select name, milliseconds, albumid from Track 
   ORDER BY milliseconds ASC limit 30;'''
   
   cursor.execute(query)
   # get the data
   rows = cursor.fetchall()
   # print the data
   if rows:
      for i in range(len(rows)):
         for k in rows[i].keys():
               print(k,":",rows[i][k])
         print()
  
   # close the cursor
   cursor.close()    



Filtering data
--------------

+ We have already seen some ways of archiving data, such as the LIMIT clause.
+ In the following section, we will see some more ways to filter data, specifically the WHERE, IN, BETWEEN, and LIKE clauses.

.. activecode:: ac_42_3c1
   :language: python3
   :python3_interpreter: brython

   In this section, we will learn how to use the ``WHERE`` clause. The ``WHERE`` clause is an optional clause of the ``SELECT`` statement.
   It appears after the ``FROM`` clause as the following statement:

   ``WHERE column_name [= | != | < | <= | > | >=] value``
   ~~~~
   import sys
   sys.path.append("../../_static")

   ^^^^
   from sqlite3 import connect

   # connecting to the chinook database
   database = connect('Chinook_Sqlite.sqlite')
   cursor = database.cursor()

   query = '''select name, milliseconds, bytes, albumid 
   from Track WHERE albumid=1 limit 30;'''
   
   cursor.execute(query)
   # get the data
   rows = cursor.fetchall()
   # print the data
   if rows:
      for i in range(len(rows)):
         for k in rows[i].keys():
               print(k,":",rows[i][k])
         print()
  
   # close the cursor
   cursor.close()    


.. activecode:: ac_42_3c2
   :language: python3
   :python3_interpreter: brython

   In this section, we will learn how to use the ``BETWEEN`` operator. The ``BETWEEN`` operator is a logical operator that checks
   whether a value is within a range of values. If the value is in the specified range, the ``BETWEEN`` operator returns
   true. The ``BETWEEN`` operator can be used in the ``WHERE`` clause of ``SELECT``, ``DELETE``, ``UPDATE``, and ``REPLACE`` statements.
   The following statement shows an example of the ``BETWEEN`` clause:
   
   ``BETWEEN value1 AND value2``
   ~~~~
   import sys
   sys.path.append("../../_static")

   ^^^^
   from sqlite3 import connect

   # connecting to