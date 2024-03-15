DJ Mix
======


.. image:: ../img/TWP56_001.jpg
   :height: 12.571cm
   :width: 14.997cm
   :align: center
   :alt: 

.. activecode:: lecture_56_1_en
   :nocodelens:
   :language: python3
   :python3_interpreter: brython

   from browser import document, html

   audio_url = 'https://bigsoundbank.com/UPLOAD/mp3/0751.mp3'

   def start():
      document['track'].play()
      print("Audio started")

   def stop():
      document['track'].pause()
      document['track'].currentTime = 0
      print("Audio stopped")

   audio_element = html.AUDIO(id='track', src=audio_url)
   document <= audio_element

   start_button = html.BUTTON('Start')
   start_button.bind('click', lambda ev: start())

   stop_button = html.BUTTON('Stop')
   stop_button.bind('click', lambda ev: stop())

   document <= start_button
   document <= stop_button
   