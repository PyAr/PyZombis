Class = object factory
==========================


.. image:: ../img/TWP58_006.jpg
   :height: 12.514cm
   :width: 22.7cm
   :align: center
   :alt: 


.. image:: ../img/TWP58_007.jpg
   :height: 9.471cm
   :width: 22.647cm
   :align: center
   :alt: 


Class SoundPanel
----------------

.. activecode:: lect_58_2_en
   :nocodelens:
   :language: python3
   :python3_interpreter: brython

   from browser import document, html

   class SoundPanel:
      def __init__(self, sound_file):
        self.sound_file = sound_file  # Add this line
        self.track = html.AUDIO(src=sound_file)
        self.track_playing = False
        self.volume = 1.0

      def track_toggle(self, ev):
         if self.track_playing:
            self.track.pause()
            print("Stopping:", self.sound_file)
         else:
            self.track.play()
            print("Playing:", self.sound_file)
         self.track_playing = not self.track_playing

      def change_volume(self, ev):
         self.volume = float(ev.target.value)
         self.track.volume = self.volume
         print("Volume changed to:", self.volume)

   app_div = html.DIV(id='app')

   sound_panel = SoundPanel('https://bigsoundbank.com/UPLOAD/mp3/0751.mp3')

   track_button = html.INPUT(type='checkbox')
   track_button.bind('change', sound_panel.track_toggle)

   track_label = html.LABEL('Play Sound')
   track_label <= track_button

   volume_slider = html.INPUT(type='range', min='0', max='1', step='0.1')
   volume_slider.bind('input', sound_panel.change_volume)

   volume_label = html.LABEL('Volume')
   volume_label <= volume_slider

   app_div <= sound_panel.track
   app_div <= track_label
   app_div <= volume_label

   document <= app_div


Main program
------------------

+ Try running this code in your PC and see the code dynamically generate soundpanels for wav files in your directory.

.. code-block :: python

   from tkinter import *
   from sound_panel import *
   import pygame.mixer
   import os

   app = Tk()
   app.title("Head First Mix")

   mixer = pygame.mixer
   mixer.init()

   dirList = os.listdir(".")
   for fname in dirList:
      if fname.endswith(".wav") and fname[0] in '345':
         SoundPanel(app,mixer,fname).pack()

   def shutdown():
      mixer.stop()
      app.destroy()

   app.protocol("WM_DELETE_WINDOW",shutdown)
   app.mainloop()


+ Congratulations! Now you know how to create complex programs with little code.


.. image:: ../img/TWP58_010.png
   :height: 14.125cm
   :width: 19.746cm
   :align: center
   :alt: 


.. image:: ../img/TWP58_011.png
   :height: 5.45cm
   :width: 3.91cm
   :align: center
   :alt: 


Remember
--------

+ Classes are object factories
+ Class = methods + data
+ Create objects = instantiate a class
+ class - begins the definition of a class
+ self - assigned to the current object
+ __init__() - called when the object is created