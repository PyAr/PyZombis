More SQL Concepts
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

Chinook Database schema
------------------------

+ The Chinook data model represents a digital media store, including tables for artists, albums, media tracks, invoices, and customers.   

.. image:: ../img/TWP42_009.png
   :height: 20.0cm
   :width: 15.0cm
   :align: center
   :alt:

Selecting different tables from the databases
-----------------------------------------------
.. activecode:: ac_42_3a
   :language: python3
   :python3_interpreter: brython

   
   ~~~~
   import sys
   sys.path.append("../../_static")

   ^^^^
   from sqlite3 import connect

   # connect to the Chinook database
   database = connect('Chinook_Sqlite.sqlite')
   cursor = database.cursor()

   # choose a particular column from a table
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

   The ``ORDER BY`` clause is used to sort a set of results from a query. SQLite stores data in tables in 
   an unspecified order. It means that table rows may or may not be in the order they were inserted into the table. If you use the 
   ``SELECT`` statement to query data from a table, the order of the rows in the result set is unspecified. To sort the result set, add 
   the ``ORDER BY`` clause to the ``SELECT`` statement like this:

   ``ORDER BY column_name [ASC | DESC]``
   ~~~~
   import sys
   sys.path.append("../../_static")

   ^^^^
   from sqlite3 import connect

   # connect to the Chinook database
   database = connect('Chinook_Sqlite.sqlite')
   cursor = database.cursor()

   # sort the rows according to the miliseconds column
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



Data filtering
------------

+ We have already seen some ways of archiving data, e.g., the `LIMIT` clause.
+ In the following section, we will see some more ways to filter data, specifically the `WHERE`, `IN`, `BETWEEN`, and `LIKE` clauses.

.. activecode:: ac_42_3c1
   :language: python3
   :python3_interpreter: brython

   This block teaches us how to use the `WHERE` clause. The `WHERE` clause is an optional clause of the `SELECT` statement.
   It appears after the `FROM` clause as the following statement:

   ``WHERE column_name [= | != | < | <= | > | >=] value``
   ~~~~
   import sys
   sys.path.append("../../_static")

   ^^^^
   from sqlite3 import connect

   # connect to the Chinook database
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

   In this block, we will learn how to use the ``BETWEEN`` clause. The ``BETWEEN`` operator is a logical operator that checks 
   whether a value is within a range of values. If the value is in the specified range, the ``BETWEEN`` operator returns true. The 
   ``BETWEEN`` operator can be used in the ``WHERE`` clause of ``SELECT``, ``DELETE``, ``UPDATE``, and ``REPLACE`` statements. The 
   following statement shows an example of the ``BETWEEN`` clause:
   
   ``BETWEEN value1 AND value2``
   ~~~~
   import sys
   sys.path.append("../../_static")

   ^^^^
   from sqlite3 import connect

   # Connect to Chinook database
   database = connect('Chinook_Sqlite.sqlite')
   cursor = database.cursor()

   query = '''select InvoiceId, BillingAddress, Total from
   Invoice WHERE Total BETWEEN 14.91 and 18.86 ORDER BY Total;'''
   
   cursor.execute(query)
   # Get the data
   rows = cursor.fetchall()
   # Print the data
   if rows:
      for i in range(len(rows)):
         for k in rows[i].keys():
               print(k, ":", rows[i][k])
         print()
  
   # Close the cursor
   cursor.close()


.. activecode:: ac_42_3c3
   :language: python3
   :python3_interpreter: brython
   
   In this block, we will learn how to use the SQLite IN operator to determine whether a value matches any value in a list 
   of values or the result of a subquery. The SQLite IN operator determines whether a value matches any value in a 
   list or a subquery result. The syntax of the IN operator is as follows:

   ``IN (value1, value2, ..., valueN)``
   ~~~~
   import sys
   sys.path.append("../../_static")

   ^^^^
   from sqlite3 import connect

   # Connect to Chinook database
   database = connect('Chinook_Sqlite.sqlite')
   cursor = database.cursor()

   query = '''select TrackId, Name, AlbumId from Track 
   WHERE AlbumId IN (16, 17, 18) ORDER BY AlbumId;'''
   
   cursor.execute(query)
   # Get the data
   rows = cursor.fetchall()
   # Print the data
   if rows:
      for i in range(len(rows)):
         for k in rows[i].keys():
               print(k, ":", rows[i][k])
         print()
  
   # Close the cursor
   cursor.close() 

.. activecode:: ac_42_3c4
   :language: python3
   :python3_interpreter: brython
   
   In this section, we will learn about the LIKE clause. The LIKE clause is a search operator that allows you to search for a character string 
   within another character string. The syntax of the LIKE clause is as follows:

   ``LIKE '%value%'``
   ~~~~
   import sys
   sys.path.append("../../_static")

   ^^^^
   from sqlite3 import connect

   # Connect to Chinook database
   database = connect('Chinook_Sqlite.sqlite')
   cursor = database.cursor()

   query = '''select TrackId, Name from Track WHERE name LIKE 'Wild%';'''
   
   cursor.execute(query)
   # Get the data
   rows = cursor.fetchall()
   # Print the data
   if rows:
      for i in range(len(rows)):
         for k in rows[i].keys():
               print(k, ":", rows[i][k])
         print()
  
   # Close the cursor
   cursor.close()

   Grouping of data
----------------

.. activecode:: ac_42_4a
   :language: python3
   :python3_interpreter: brython
   
   In this section, we will learn how to use the ``GROUP BY`` clause of SQLite to create a summary row set from a row set.
   The ``GROUP BY`` clause is an optional clause of the ``SELECT`` statement. The ``GROUP BY`` clause groups a selected set of rows into summary rows
   by values of one or more columns. The ``GROUP BY`` clause returns one row for each group. For each group, you can apply an aggregate function such as
   ``MIN``, ``MAX``, ``SUM``, ``COUNT``, or ``AVG`` to provide more information about each group. The following statement illustrates the syntax of the ``GROUP BY`` clause of SQLite:

   ``GROUP BY column1, column2, ...``
   ~~~~
   import sys
   sys.path.append("../../_static")

   ^^^^
   from sqlite3 import connect

   # connect to the chinook database
   database = connect('Chinook_Sqlite.sqlite')
   cursor = database.cursor()

   query = 'select albumid, COUNT(trackid) FROM Track GROUP BY albumid;'
   
   cursor.execute(query)
   # get the data
   lines = cursor.fetchall()
   # print the data
   if lines:
      for i in range(len(lines)):
         for k in lines[i].keys():
               print(k,":",lines[i][k])
         print()
  
   # close the cursor
   cursor.close() 


.. activecode:: ac_42_4b
   :language: python3
   :python3_interpreter: brython
   
   Here we will learn how to use the SQLite ``HAVING`` clause to specify a filter condition for a group or aggregate. 
   The SQLite ``HAVING`` clause is an optional clause of the ``SELECT`` statement. The ``HAVING`` clause specifies a search condition for a group. 
   We often use the ``HAVING`` clause with the ``GROUP BY`` clause. The ``GROUP BY`` clause groups a set of rows into a set of summary rows or groups. 
   Then, the ``HAVING`` clause filters groups based on a specific condition. If we use the HAVING clause, we must include the ``GROUP BY`` clause; otherwise, an error will occur.

   The following illustrates the syntax of the ``HAVING`` clause:

   ``HAVING condition``
   ~~~~
   import sys
   sys.path.append("../../_static")

   ^^^^
   from sqlite3 import connect

   # connect to the chinook database
   database = connect('Chinook_Sqlite.sqlite')
   cursor = database.cursor()

   query = '''select albumid, COUNT(trackid) FROM Track GROUP BY albumid 
   HAVING COUNT(albumid) BETWEEN 18 AND 20;'''
   
   cursor.execute(query)
   # get the data
   lines = cursor.fetchall()
   # print the data
   if lines:
      for i in range(len(lines)):
         for k in lines[i].keys():
               print(k,":",lines[i][k])
         print()
  
   # close the cursor
   cursor.close()