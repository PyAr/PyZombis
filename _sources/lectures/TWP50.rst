=================
Interface Gráfica
=================


.. image:: img/TWP10_001.jpeg
   :height: 14.925cm
   :width: 9.258cm
   :align: center
   :alt: 


.. youtube:: IZyaz4x0Ql4
      :height: 315
      :width: 560
      :align: center



Interface Gráfica
=================


+ Não basta funcionar, deve ser bonito também
+ Interface texto funciona, mas é pobre
+ GUI – Graphical User Interface
+ Show de Calouros


Show de Calouros
================


.. youtube:: Wi_N0S48tOs
      :height: 315
      :width: 560
      :align: center



+ Opção 1 para resposta correta e 2 para errada
+ Teremos um efeito sonoro para cada resposta
+ O programa deve contar quantas respostas certas e erradas houve
+ Finalmente apertamos 0 para finalizar


Show de Calouros
================


.. image:: img/TWP50_001.png
   :height: 12.571cm
   :width: 7.165cm
   :align: center
   :alt: 


+Atenção: instalar Pygame e baixar os arquivos de áudio para continuar a lição


Show de Calouros
================


.. code-block :: python

   import pygame.mixer
   sounds = pygame.mixer
   sounds.init()

   def espera_tocar(canal):
      while canal.get_busy():
         pass

   s = sounds.Sound("heartbeat.wav")
   espera_tocar(s.play())
   s2 = sounds.Sound("buzz.wav")
   espera_tocar(s2.play())
   s3 = sounds.Sound("ohno.wav")
   espera_tocar(s3.play())
   s4 = sounds.Sound("carhorn.wav")
   espera_tocar(s4.play())


Show de Calouros
================


.. image:: img/TWP50_003.png
   :height: 7.01cm
   :width: 6.825cm
   :align: center
   :alt: 


.. image:: img/TWP50_004.png
   :height: 9.626cm
   :width: 6.118cm
   :align: center
   :alt: 

+ Agora que o áudio está funcionando vamos fazer o programa do Show de Calouros!


Show de Calouros
================


.. code-block :: python

   import pygame.mixer
   sounds = pygame.mixer
   sounds.init()

   def espera_tocar(canal):
      while canal.get_busy():
         pass

   certos = 0
   errados = 0
   opcao = int(input("Aperte 1)Certo 2)Errado e 0) Finalizar"))

   while opcao != 0:
      if opcao == 1:
         s = sounds.Sound("correct.wav")
         espera_tocar(s.play())
         certos = certos + 1
      if opcao == 2"
         s2 = sounds.Sound("wrong.wav")
         espera_tocar(s2.play())
         errados = errados + 1
      opcao = int(input("Aperte 1)Certo 2)Errado e 0) Finalizar"))

   print("Certos:",certos,"Errados:",errados)



Show de Calouros
================

+ Resultado -


.. image:: img/TWP50_006.png
   :height: 7.989cm
   :width: 15.027cm
   :align: center
   :alt: 


.. image:: img/TWP50_007.jpg
   :height: 7.487cm
   :width: 10.688cm
   :align: center
   :alt: 


Show de Calouros
================


.. image:: img/TWP50_008.jpg
   :height: 13.801cm
   :width: 9.79cm
   :align: center
   :alt: 


Janela básica
=============


.. code-block :: python

   from tkinter import *
   app = Tk()
   app.title("Show de calouros")
   app.geometry('300x100+200+100')

   b1 = Button(app,text = "Certo!", width = 10)
   b1.pack(side = "left",padx = 10,pady = 10)

   b2 = Button(app,text = "Errado!", width = 10)
   b2.pack(side = "right",padx = 10,pady = 10)


.. image:: img/TWP50_010.jpg
   :height: 5.344cm
   :width: 10.397cm
   :align: center
   :alt: 


Capturando um evento
====================


.. image:: img/TWP50_011.jpg
   :height: 7.775cm
   :width: 22.859cm
   :align: center
   :alt: 


Show de Calouros
================


.. code-block :: python

   from tkinter import *

   app = Tk()
   app.title("Show de calouros")
   app.geometry('300x100+200+100')

   import pygame.mixer

   sounds = pygame.mixer
   sounds.init()
   certos = 0
   errados = 0

   def espera_tacor(canal):
      while canal.get_busy():
         pass

   def musica_certa():
      global certos
      s = sounds.Sound("correct.wav")
      espera_tocar(s.play())
      certos += 1

   def musica errados():
      global errados
      s = sounds.Sound("wrong.wav")
      espera_tocar(s.play())
      errados += 1

   b1 = Button(app,text = "Certo!", width = 10)
   b1.pack(side = "left",padx = 10,pady = 10)

   b2 = Button(app,text = "Errado!", width = 10)
   b2.pack(side = "right",padx = 10,pady = 10)

   app.mainloop()



Show de Calouros
================


.. image:: img/TWP50_013.jpg
   :height: 15.793cm
   :width: 11.6cm
   :align: center
   :alt: 


Adicionando Label´s
===================


.. code-block :: python

   from tkinter import *
   app = Tk()
   app.title("Show de calouros")
   app.geometry('300x100+200+100')

   import pygame.mixer
   sounds = pygame.mixer
   sounds.init()
   certos = IntVar()
   certos.set(0)
   errados = IntVar()
   errados.set(0)

   def espera_tacor(canal):
      while canal.get_busy():
         pass

   def musica_certa():
      s = sounds.Sound("correct.wav")
      espera_tocar(s.play())
      certos.set(certos.get() + 1)

   def musica errados():
      s = sounds.Sound("wrong.wav")
      espera_tocar(s.play())
      errados.set(errados.get() + 1)




Adicionando Label´s
===================


.. code-block :: python

   lab = Label(app,text = 'Aperte os botoes!',height = 3)
   lab.pack()

   lab1 = Label(app, textvariable = certos)
   lab1.pack(side = 'left')
   lab1 = Label(app, textvariable = errados)
   lab1.pack(side = 'right')

   b1 = Button(app,text = "Certo!", width = 10, command = musica_certa)
   b1.pack(side = "left",padx = 10,pady = 10)

   b2 = Button(app,text = "Errado!", width = 10, command = musica_certa)
   b2.pack(side = "right",padx = 10,pady = 10)

   app.mainloop




.. image:: img/TWP50_016.png
   :height: 4.629cm
   :width: 9.736cm
   :align: center
   :alt: 


Show de Calouros
================


.. image:: img/TWP50_017.jpg
   :height: 14.861cm
   :width: 15.801cm
   :align: center
   :alt: 


.. youtube:: lN3kerQfLkE
      :height: 315
      :width: 560
      :align: center



Revisão
=======



+ Usando biblioteca de terceiros: pygame
+ Loop de evento: responde apenas quando o evento ocorre
+ Tratador do evento: rotina que é executada quando o evento ocorre
+ pass – código python para não fazer nada
+ Tkinter: biblioteca para interface gráfica




.. disqus::
   :shortname: pyzombis
   :identifier: lecture18