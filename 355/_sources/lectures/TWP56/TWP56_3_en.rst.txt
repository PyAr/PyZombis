It looks great, now let's add some volume!
===========================================

.. image:: ../img/TWP56_008.jpg
   :height: 11.357cm
   :width: 12cm
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

   def terminate():
      track.stop()
      app.destroy()
   def toggle_play():
      if playing.get() == 1:
         track.play(loops = -1)
      else:
         track.stop()
   def change_volume(v):
      track.set_volume(volume.get())

   track = mixer.Sound(som)
   playing = IntVar()
   toggle = Checkbutton(app, variable=playing, command=toggle_play, text=som)
   toggle.pack(side=LEFT)
   volume = DoubleVar()
   volume.set(track.get_volume())
   scale = Scale(variable=volume, from_=0.0, to=1.0, resolution=0.1, command=change_volume, label='Volume', orient=HORIZONTAL)

   scale.pack(side=RIGHT)
   app.protocol('WM_DELETE_WINDOW', terminate)
   app.mainloop()


.. image:: ../img/TWP56_010.jpg
   :height: 15.024cm
   :width: 19.401cm
   :align: center
   :alt: 


Remember
--------

+ app.destroy()
+ DoubleVar()
+ Checkbutton()
+ Scale()

.. poll:: TWP56E
   :scale: 3
   :allowcomment:

   On a scale from 1 (needs improvement) to 3 (excellent),
   how would you rate this chapter?
