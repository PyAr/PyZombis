But the song never ends...
===========================

.. image:: ../img/TWP56_003.jpg
   :height: 12.571cm
   :width: 19.957cm
   :align: center
   :alt: 


.. code-block :: python

   from tkinter import *
   import pygame.mixer

   app = Tk()
   app.title('DJ Mix')
   app.geometry('250x100+200+100')

   sound = '50459_M_RED_Nephlimizer.wav'
   mixer = pygame.mixer
   mixer.init()

   def start():
      track.play(loops = -1)
   def stop():
      track.stop()
   def terminate():
      track.stop()
      app.destroy()

   track = mixer.Sound(sound)
   start_button = Button(app, command = start, text = 'Start')
   start_button.pack(side = LEFT)
   stop_button = Button(app, command = stop, text = 'Stop')
   stop_button.pack(side = RIGHT)

   app.protocol('WM_DELETE_WINDOW',terminate)
   app.mainloop()


One button only
---------------

.. image:: ../img/TWP56_005.jpg
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

   sound = '50459_M_RED_Nephlimizer.wav'
   mixer = pygame.mixer
   mixer.init()

   def terminate():
      track.stop()
      app.destroy()
   def switch():
      if playing.get() == 1:
         track.play(loops = -1)
      else:
         track.stop()

   track = mixer.Sound(sound)
   playing = IntVar()
   play_button = Checkbutton(app, variable = playing, command = switch, text = sound)
   play_button.pack()

   app.protocol('WM_DELETE_WINDOW',terminate)
   app.mainloop()