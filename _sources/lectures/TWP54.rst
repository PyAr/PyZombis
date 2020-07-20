===========
Excepciones
===========


.. image:: img/TWP10_001.jpeg
   :height: 14.925cm
   :width: 9.258cm
   :align: center
   :alt: 



Excepciones 
===========


.. image:: img/TWP54_001.jpg
   :height: 14.249cm
   :width: 17.401cm
   :align: center
   :alt: 


Excepciones
===========



+ A veces las cosas salen mal. Y necesitas tratarlos.

+ Siempre hay cosas que están fuera de tu control. Las redes fallan.
  Los archivos desaparecen.

+ Los códigos inteligentes aprenden a lidiar con estos errores y hacen que
  programa para recuperarse sin problemas.


¡Qué mal olor!
==============


.. image:: img/TWP54_002.jpg
   :height: 14.477cm
   :width: 12.6cm
   :align: center
   :alt: 


Excepciones
===========


.. image:: img/TWP54_003.jpg
   :height: 14.219cm
   :width: 20.601cm
   :align: center
   :alt: 


Se lanza una excepción
======================


.. image:: img/TWP54_004.jpg
   :height: 11.211cm
   :width: 22.859cm
   :align: center
   :alt: 


Atrapando la excepción
======================


.. image:: img/TWP54_005.jpg
   :height: 14.432cm
   :width: 22.771cm
   :align: center
   :alt: 


Manejo de excepciones
=====================


.. code-block :: python

   def salvar_dados():
      try:
         fileD = open("encomendas.txt","a")
         fileD.write("Destino:\n")
         fileD.write("%s\n" %destino.get())
         fileD.write("Descripcion:\n")
         fileD.write("%s\n" %descripcion.get())
         fileD.write("Habla:\n")
         fileD.write("%s\n" %Habla.get("1.0",END))
         destino.set(None)
         descricao.delete(0,END)
         endereco.delete("1.0",END)
      except Excepción como excepciones:
         app.title('archivo de grabación %s' %excepcion)



+ Obs.: para você testar a exceção deverá alterar as propriedades do arquivo


Tratando Exceções
=================


.. image:: img/TWP54_007.jpg
   :height: 7.611cm
   :width: 22.859cm
   :align: center
   :alt: 


Usando uma messagebox
=====================


.. code-block :: python

   def salvar_dados():
      try:
         fileD = open("encomendas.txt","a")
         fileD.write("Destino:\n")
         fileD.write("%s\n" %destino.get())
         fileD.write("Descricao:\n")
         fileD.write("%s\n" %descricao.get())
         fileD.write("Endereco:\n")
         fileD.write("%s\n" %endereco.get("1.0",END))
         destino.set(None)
         descricao.delete(0,END)
         endereco.delete("1.0",END)
      except Exception as excecao:
         app.title('Erro de gravacao no arquivo %s' %excecao)


Manejo de excepciones
=====================


.. image:: img/TWP54_009.jpg
   :height: 8.042cm
   :width: 18.335cm
   :align: center
   :alt: 


Manejo de excepciones
=====================


.. image:: img/TWP54_010.jpg
   :height: 15.573cm
   :width: 13.348cm
   :align: center
   :alt: 


Enlaces de conferencias de video:
=================================


.. disqus::
   :shortname: pyzombis
   :identifier: lecture20
