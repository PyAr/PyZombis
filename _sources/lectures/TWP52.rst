===
MVC
===


.. image:: img/TWP10_001.jpeg
   :height: 14.925cm
   :width: 9.258cm
   :align: center
   :alt: 



HEAD-Ex Logística y Transporte
==============================



.. image:: img/TWP52_001.jpg
   :height: 11.207cm
   :width: 15.193cm
   :align: center
   :alt: 



HEAD-Ex Logística y Transporte
==============================


.. code-block :: python

   
   def salvar_dados():
      fileD = open('encomendas.txt','a')
      fileD.write('Destino: ')
      fileD.write('%s\n' %destino.get())
      fileD.write('Descripcion: ')
      fileD.write('%s\n' %descricao.get())
      fileD.write('Habla a: ')
      fileD.write('%s\n' %endereco.get('1.0',END))
      destino.delete(0,END)
      descricao.delete(0,END)
      endereco.delete('1.0',END)



HEAD-Ex Logística y Transporte
==============================


.. code-block :: python

   from tkinter import *

   app = Tk()
   app.title('HEAD-Ex Logística y Transporte')
   app.geometry("250x180+200+100")

   Label(app,text = "Destino: ").pack()
   destino = Entry(app)
   destino.pack()

   Label(app,text = "Descripcion: ").pack()
   descricao = Entry(app)
   descricao.pack()

   Label(app,text = "Habla a: ").pack()
   endereco = Entry(app)
   endereco.pack()

   Button(app, text = "Salvar" , command = salvar_dados).pack()
   app.mainloop()


HEAD-Ex Logística e Transporte
==============================


.. image:: img/TWP52_005.jpg
   :height: 12.571cm
   :width: 19.302cm
   :align: center
   :alt: 


HEAD-Ex Logística y Transporte
==============================


.. image:: img/TWP52_006.jpg
   :height: 15.565cm
   :width: 17.401cm
   :align: center
   :alt: 


HEAD-Ex Logística y Transporte
==============================

+ Radio Buttons


.. image:: img/TWP52_007.png
   :height: 13.973cm
   :width: 15.801cm
   :align: center
   :alt: 


HEAD-Ex Logística y Transporte
==============================


.. image:: img/TWP52_008.jpg
   :height: 8.254cm
   :width: 7.831cm
   :align: center
   :alt: 


HEAD-Ex Logística y Transporte
==============================


.. image:: img/TWP52_009.jpg
   :height: 12.571cm
   :width: 15.212cm
   :align: center
   :alt: 


HEAD-Ex Logística y Transporte
==============================


.. image:: img/TWP52_013.jpg
   :height: 9.048cm
   :width: 18.123cm
   :align: center
   :alt: 


HEAD-Ex Logística y Transporte
==============================

.. image:: img/TWP52_014.png
   :height: 4.176cm
   :width: 13cm
   :align: center
   :alt:

+ Modelo son los datos almacenados
+ Vision es el botón de radio presentado
+ Control es el código tkinter que gestiona todo esto

.. code-block :: python

   Label(app, text = 'Destino: ').pack()
   destino = StringVar()
   destino.set(None)
   Radiobutton(app, variable = destino , text = 'Cambridge , MA', value = 'Cambridge , MA').pack()
   Radiobutton(app, variable = destino , text = 'Cambridge , UK', value = 'Cambridge , UK').pack()
   Radiobutton(app, variable = destino , text = 'Seattle, WA', value = 'Seattle , WA').pack()


HEAD-Ex Logística e Transporte
==============================


.. image:: img/TWP52_016.jpg
   :height: 14.578cm
   :width: 20.401cm
   :align: center
   :alt: 


HEAD-Ex Logística e Transporte
==============================


.. image:: img/TWP52_017.png
   :height: 12.571cm
   :width: 18.208cm
   :align: center
   :alt: 

+ Y ahora??


HEAD-Ex Logística e Transporte
==============================


.. code-block :: python

   
   def salvar_dados():
      fileD = open('encomendas.txt','a')
      fileD.write('Destino: ')
      fileD.write('%s\n' %destino.get())
      fileD.write('Descricao: ')
      fileD.write('%s\n' %descricao.get())
      fileD.write('Endereco: ')
      fileD.write('%s\n' %endereco.get('1.0',END))
      destino.delete(0,END)
      descricao.delete(0,END)
      endereco.delete('1.0',END)

   def ler_destinos(archivo):
      destinos = []
      f = open(archivo)
      for linha in f:
         destinos.append(linha.rstrip())
      return destinos


HEAD-Ex Logística e Transporte
==============================


.. code-block :: python

   from tkinter import *

   app = Tk()
   app.title('HEAD-Ex Logística e Transporte')
   Label(app,text = "Destino: ").pack()
   destino = StringVar()
   destino.set(None)

   opcoes = ler_destinos("cidades.txt")
   OptionMenu(app,destino,*opcoes).pack()

   Label(app,text = "Descripcion: ").pack()
   descricao = Entry(app)
   descricao.pack()
   Label(app,text = "Habla a: ").pack()
   endereco = Entry(app)
   endereco.pack()
   Button(app, text = "Ahorrar" , command = salvar_dados).pack()
   app.mainloop()



HEAD-Ex Logística y Transporte
==============================


.. image:: img/TWP52_020.jpg
   :height: 12.571cm
   :width: 17.025cm
   :align: center
   :alt: 


revisión
========



+ MVC - Modelo, Visión, Control
+ Entry()
+ Texto()
+ StringVar()
+ RadioButton()
+ OptionMenu()




.. disqus::
   :shortname: pyzombis
   :identifier: lecture19
