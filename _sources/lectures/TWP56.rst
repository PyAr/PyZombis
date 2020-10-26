========
DJ Mix 1
========


.. image:: img/TWP10_001.jpeg
   :height: 14.925cm
   :width: 9.258cm
   :align: center
   :alt: 


DJ Mix
======


.. image:: img/TWP56_001.jpg
   :height: 12.571cm
   :width: 14.997cm
   :align: center
   :alt: 


DJ Mix
======


.. code-block :: python

   from tkinter import *
   import pygame.mixer

   app = Tk()
   app.title('DJ Mix')
   app.geometry('250x100+200+100')

   som = '50459_M_RED_Nephlimizer.wav'
   mixer = pygame.mixer
   mixer.init()

   def start():
      track.play(loops = -1)
   def stop():
      track.stop()

   track = mixer.Sound(som)
   start_botao = Button(app, command = start, text = 'Start')
   start_botao.pack(side = LEFT)
   stop_botao = Button(app, command = stop, text = 'Stop')
   stop_botao.pack(side = RIGHT)
   app.mainloop()




Pero la canción no termina ...
==============================


.. image:: img/TWP56_003.jpg
   :height: 12.571cm
   :width: 19.957cm
   :align: center
   :alt: 


DJ Mix
======


.. code-block :: python

   from tkinter import *
   import pygame.mixer

   app = Tk()
   app.title('DJ Mix')
   app.geometry('250x100+200+100')

   som = '50459_M_RED_Nephlimizer.wav'
   mixer = pygame.mixer
   mixer.init()

   def start():
      track.play(loops = -1)
   def stop():
      track.stop()
   def termina():
      track.stop()
      app.destroy()

   track = mixer.Sound(som)
   start_botao = Button(app, command = start, text = 'Start')
   start_botao.pack(side = LEFT)
   stop_botao = Button(app, command = stop, text = 'Stop')
   stop_botao.pack(side = RIGHT)

   app.protocol('WM_DELETE_WINDOW',terminal)
   app.mainloop()



DJ Mix
======


.. image:: img/TWP56_005.jpg
   :height: 15.578cm
   :width: 12.183cm
   :align: center
   :alt: 


.. code-block :: python

   from tkinter import *
   import pygame.mixer

   app = Tk()
   app.title('DJ Mix')
   app.geometry('250x100+200+100')

   som = '50459_M_RED_Nephlimizer.wav'
   mixer = pygame.mixer
   mixer.init()

   def termina():
      track.stop()
      app.destroy()
   def muda():
      if tocando.get() == 1:
         track.play(loops = -1)
      else:
         track.stop()

   track = mixer.Sound(som)
   tocando = IntVar()
   tocar = Checkbutton(app,variable = tocando, command = muda, text = som)
   tocar.pack()

   app.protocol('WM_DELETE_WINDOW',terminal)
   app.mainloop()



DJ Mix
======


+ Se ve genial, ¡ahora agreguemos un volumen!


.. image:: img/TWP56_008.jpg
   :height: 11.357cm
   :width: 12cm
   :align: center
   :alt: 


DJ Mix
======


.. code-block :: python

   from tkinter import *
   import pygame.mixer

   app = Tk()
   app.title('DJ Mix')
   app.geometry('250x100+200+100')

   som = '50459_M_RED_Nephlimizer.wav'
   mixer = pygame.mixer
   mixer.init()

   def termina():
      track.stop()
      app.destroy()
   def muda():
      if tocando.get() == 1:
         track.play(loops = -1)
      else:
         track.stop()
   def muda_volume(v):
      track.set_volume(volume.get())

   track = mixer.Sound(som)
   tocando = IntVar()
   tocar = Checkbutton(app,variable = tocando, command = muda, text = som)
   tocar.pack(side = LEFT)
   volume = DoubleVar()
   volume.set(track.get_volume())
   escala = Scale(variable = volume , from = 0.0 , to = 1.0 , resolution = 0.1, command = muda_volume, label = 'Volume',orient = HORIZONTAL)

   escala.pack(side = RIGHT)
   app.protocol('WM_DELETE_WINDOW',terminal)
   app.mainloop()


.. image:: img/TWP56_010.jpg
   :height: 15.024cm
   :width: 19.401cm
   :align: center
   :alt: 


Recuerdo
========



+ app.destroy()
+ DoubleVar()
+ Checkbutton()
+ Scale()


.. disqus::
   :shortname: pyzombis
   :identifier: lecture21
