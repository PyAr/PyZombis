It looks great, now let's add some volume!
===========================================

.. image:: ../img/TWP56_008.jpg
   :height: 11.357cm
   :width: 12cm
   :align: center
   :alt: 


.. activecode:: lecture_56_3_en
   :nocodelens:
   :language: python3
   :python3_interpreter: brython

   from browser import document, html

   def toggle_play(ev):
      if ev.target.checked:
         document['audio_player'].play()
      else:
         document['audio_player'].pause()

   def change_volume(ev):
      document['audio_player'].volume = float(ev.target.value)

   audio_src = 'https://bigsoundbank.com/UPLOAD/mp3/0751.mp3'

   audio_player = html.AUDIO(src=audio_src, id='audio_player')

   toggle_button = html.INPUT(type='checkbox', id='toggle_play')
   toggle_button.bind('change', toggle_play)
   toggle_label = html.LABEL('Play Sound')
   toggle_label <= toggle_button

   volume_slider = html.INPUT(type='range', id='volume', min='0', max='1', step='0.1')
   volume_slider.bind('input', change_volume)
   volume_label = html.LABEL('Volume')
   volume_label <= volume_slider

   app_div = html.DIV(id='app')
   app_div <= audio_player
   app_div <= toggle_label
   app_div <= volume_label

   document <= app_div

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
