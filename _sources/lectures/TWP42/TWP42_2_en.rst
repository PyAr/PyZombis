Basic concepts of SQL
========================

.. raw:: html

   <script src = 'https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.5.0/sql-wasm.js'></script>

   <script id ="create-db">

      config = {
         locateFile: filename => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.5.0/sql-wasm.wasm`
      }

      function getData(config){
         return initSqlJs(config).then(function(SQL){

         window.Database = new SQL.Database(); 
         });
      }

      getData(config);
   </script>

.. image:: ../img/TWP42_003.jpeg
   :height: 12.571cm
   :width: 10.861cm
   :align: center
   :alt: 


Notions of databases
--------------------------


.. image:: ../img/TWP42_004.jpeg
   :height: 14.001cm
   :width: 14.001cm
   :align: center
   :alt: 


.. image:: ../img/TWP42_005.jpeg
   :height: 13.953cm
   :width: 17.401cm
   :align: center
   :alt: 


Creating a student database
----------------------------

.. activecode :: ac_42_2_1
   :language: python3
   :python3_interpreter: brython

   ~~~~
   import sys
   sys.path.append("../../_static")

   ^^^^
   # the following code creates a table
   # called students in the database students.bd
   from sqlite3 import connect
   con = connect('students.bd')
   cur = con.cursor()

   # the table has two columns: login_id and pass
   cur.execute('''create table students(login_id varchar(8),pass integer)''')
   cur.close()
   con.close()


Accessing the students.bd database
----------------------------------

.. activecode :: ac_42_2_2
   :language: python3
   :python3_interpreter: brython
   
   ~~~~
   import sys
   sys.path.append("../../_static")

   ^^^^
   from sqlite3 import connect
   con = connect('students.bd')
   cur = con.cursor()

   # insert values into the students table
   cur.execute('insert into students values("masanori",421)')
   cur.execute('insert into students values("emengarda",666)')

   # select all the contents of the students table
   cur.execute('select * from students')

   result = cur.fetchall()

   if(result!=None):
      for res in result:
         print("login    :",res['login_id'])
         print("ra :",res['pass'])

   cur.close()
   con.close()