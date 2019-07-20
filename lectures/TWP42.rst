==============
Banco de Dados
==============


.. image:: img/TWP10_001.jpeg
   :height: 14.925cm
   :width: 9.258cm
   :align: center
   :alt: 


Notas de Surfistas
==================


.. youtube:: 9gKN5n6mymk
      :height: 315
      :width: 560
      :align: center



+ A Federação de Surf possui os seguintes dados: número do surfista,
  nome, país, nota média, estilo, idade.

+ Como usar estes dados?

+ Por exemplo, quero saber todos os surfistas com mais de 25 anos

+ Usando um Banco de Dados! No caso o sqlite3

+ Obs.: copie surfersDB.sdb para o seu diretório


Usando sqlite3
==============


.. code-block :: python

   import sqlite3
   banco = sqlite3.connect("surfersDB.sdb")
   banco.row_factory = sqlite3.Row
   cursor = banco.cursor()
   cursor.execute("select * from surfers where age > 25")
   linhas = cursor.fetchall()
   for linha in linhas:
      print("Nome  :",linha['name'])
      print("Pais  :",linha['country'])
      print("Media  :",linha['average'])
      print("Estilo :",linha['board'])
      print("Idade  :",linha['age'])
      print()
   cursor.close()



+ Obs.: não salve seu programa com o nome sqlite3.py (mesmo nome da lib)


Usando sqlite3
==============


.. image:: img/TWP42_002.png
   :height: 10.741cm
   :width: 16.879cm
   :align: center
   :alt: 


Noções de SQL
=============


.. image:: img/TWP42_003.jpeg
   :height: 12.571cm
   :width: 10.861cm
   :align: center
   :alt: 


Noções de Banco de Dados
========================


.. image:: img/TWP42_004.jpeg
   :height: 14.001cm
   :width: 14.001cm
   :align: center
   :alt: 


Noções de Banco de Dados
========================


.. image:: img/TWP42_005.jpeg
   :height: 13.953cm
   :width: 17.401cm
   :align: center
   :alt: 


Criando um Banco de Alunos
==========================


.. code-block :: python

   import sqlite3
   con = sqlite3.connect('alunos.bd')
   cur = con.cursor()
   cur.execute('''create table alunos(login varchar(8),ra integer)''')
   cur.close()
   con.close() 


Acessando o banco alunos.bd
===========================


.. code-block :: python

   import sqlite3
   con = sqlite3.connect('alunos.bd')
   cur = con.cursor()
   cur.execute('insert into alunos values("masanori",42)')
   cur.execute('insert into alunos values("emengarda",666)')
   cur.execute('select * from alunos')
   cur.close()
   con.commit()
   con.close() 



+ Resultado:

.. image:: img/TWP42_008.png
   :height: 2.724cm
   :width: 10.212cm
   :align: center
   :alt: 



.. disqus::
   :shortname: pyzombis
   :identifier: lecture15