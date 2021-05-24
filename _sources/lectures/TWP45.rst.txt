=============================
Hackeando Facebook con Python
=============================


.. image:: img/TWP10_001.jpeg
   :height: 14.925cm
   :width: 9.258cm
   :align: center
   :alt:


Facebook Hacking
================



.. image:: img/TWP45_001.jpeg
   :height: 10.225cm
   :width: 14.801cm
   :align: center
   :alt: 


.. image:: img/TWP45_002.jpeg
   :height: 11.747cm
   :width: 17.638cm
   :align: center
   :alt: 

+ Los hackers no son "malvados"?

Facebook Profile Photo
======================

.. code-block :: python


   import urllib.request
   import json

   user = 'fmasanori'
   url = 'https://graph.facebook.com/'+user+'/picture?type=large'
   figura = urllib.request.urlopen(url).read()

   arquivo = user + '.jpg'
   f = open (archivo, 'wb')
   f.write(figura)
   f.close()

   print (archivo, 'gravado no seu diretório...')


+ Resultado

.. image:: img/TWP45_003.png
   :height: 6.465cm
   :width: 14.28cm
   :align: center
   :alt: 


.. image:: img/TWP45_005.jpeg
   :height: 4.735cm
   :width: 4.762cm
   :align: center
   :alt: 



+ `Link <https://developers.facebook.com/docs/reference/api/examples/>`_
+ Objetos JSON
+ Enlaces autenticados
+ Obs.: access_token caduca
+ Autenticar nuevamente en este caso


.. image:: img/TWP45_006.png
   :height: 11.2cm
   :width: 23.578cm
   :align: center
   :alt: 


.. code-block :: python


   import urllib.request
   import json

   url = 'copie aqui o link Connections Friends'
   resp = urllib.request.urlopen(url).read()
   data = json.loads(resp.decode('utf-8'))
   for amigo in data['data']:
      print(amigo['name'])



.. code-block :: python


   import urllib.request
   import json

   def grava_imagem(amigo):
      size = '/picture?width=200&height=200'
      url = 'https://graph.facebook.com/' + amigo['id']+size
      figura = urllib.request.urlopen(url).read()
      f = open(amigo['name']+'.jpg','wb')
      f.write(figura)
      f.close()
      print(amigo['name']+'.jpg impresso')

   url = 'copie aqui o link Connections Friends'
   resp = urllib.request.urlopen(url).read()
   dados = json.loads(resp.decode('utf-8'))

   for amigo in dados['data']:
      grava_imagem(amigo)



Android Wallpaper
=================

.. image:: img/TWP45_009.png
   :height: 17.668cm
   :width: 10.6cm
   :align: center
   :alt: 

.. image:: img/TWP45_010.png
   :height: 17.668cm
   :width: 10.6cm
   :align: center
   :alt: 


.. code-block:: python

   
   import urllib.request
   import json

   def search(texto):
      url = 'https://graph.facebook.com/search?q='
      tail = '&type=post&access_token=<copie aqui o access_token>'
      resp = urllib.request.urlopen(url+texto+tail).read()
      data = json.loads(resp.decode('utf-8'))
      return data['data']

   for resp in seach('cpbr6'):
      if 'message' in resp:
         print(resp['from']['name']+':'+resp['message']+'\n')



.. image:: img/TWP45_012.png
   :height: 9.6cm
   :width: 24.029cm
   :align: center
   :alt: 



+ ¿Sabes lo que se siente despertarse temprano el domingo para estudiar?
+ Bueno, tampoco sé cómo explicarlo, pero eso es lo que siento en el
  momento .-.
+ Bora Casdinho!
+ Hackear participantes del evento creado en Facebook
+ Insertar enlace a perfil personal en Facebook
+ Obs .: solo algunos participantes y con la foto en la fecha del evento



.. image:: img/TWP45_013.jpeg
   :height: 3.756cm
   :width: 4.762cm
   :align: center
   :alt: 


.. image:: img/TWP45_014.jpeg
   :height: 3.756cm
   :width: 3.635cm
   :align: center
   :alt: 


.. image:: img/TWP45_015.jpeg
   :height: 3.756cm
   :width: 4.419cm
   :align: center
   :alt: 


.. image:: img/TWP45_016.jpeg
   :height: 3.756cm
   :width: 3.756cm
   :align: center
   :alt: 


.. image:: img/TWP45_017.jpeg
   :height: 3.756cm
   :width: 2.817cm
   :align: center
   :alt: 


.. image:: img/TWP45_018.jpeg
   :height: 3.756cm
   :width: 4.129cm
   :align: center
   :alt: 


.. image:: img/TWP45_019.jpeg
   :height: 3.756cm
   :width: 2.551cm
   :align: center
   :alt: 


.. image:: img/TWP45_020.jpeg
   :height: 3.749cm
   :width: 5cm
   :align: center
   :alt: 


.. image:: img/TWP45_021.jpeg
   :height: 3.749cm
   :width: 3.749cm
   :align: center
   :alt: 


.. image:: img/TWP45_022.jpeg
   :height: 3.751cm
   :width: 4.823cm
   :align: center
   :alt: 


.. image:: img/TWP45_023.jpeg
   :height: 3.749cm
   :width: 3.406cm
   :align: center
   :alt: 


.. image:: img/TWP45_024.jpeg
   :height: 3.749cm
   :width: 3.749cm
   :align: center
   :alt: 


.. image:: img/TWP45_025.jpeg
   :height: 3.749cm
   :align: center
   :width: 5cm
   :alt: 


.. image:: img/TWP45_026.jpeg
   :height: 3.749cm
   :width: 3.749cm
   :align: center
   :alt: 


.. image:: img/TWP45_027.jpeg
   :height: 3.751cm
   :width: 2.825cm
   :align: center
   :alt: 


.. image:: img/TWP45_028.jpeg
   :height: 3.749cm
   :width: 2.184cm
   :align: center
   :alt: 


.. image:: img/TWP45_029.jpeg
   :height: 3.751cm
   :width: 5.138cm
   :align: center
   :alt: 


.. image:: img/TWP45_030.jpeg
   :height: 3.751cm
   :width: 4.399cm
   :align: center
   :alt: 


.. image:: img/TWP45_031.jpeg
   :height: 3.803cm
   :width: 3.749cm
   :align: center
   :alt: 


.. image:: img/TWP45_032.jpeg
   :height: 3.804cm
   :width: 4.152cm
   :align: center
   :alt: 


.. image:: img/TWP45_033.jpeg
   :height: 3.751cm
   :width: 2.825cm
   :align: center
   :alt: 


.. image:: img/TWP45_034.jpeg
   :height: 3.751cm
   :width: 4.462cm
   :align: center
   :alt: 


.. image:: img/TWP45_035.jpeg
   :height: 3.749cm
   :width: 4.43cm
   :align: center
   :alt: 


.. image:: img/TWP45_036.jpeg
   :height: 3.769cm
   :width: 3.787cm
   :align: center
   :alt: 


.. image:: img/TWP45_037.jpeg
   :height: 3.749cm
   :width: 1.944cm
   :align: center
   :alt: 


.. image:: img/TWP45_038.jpeg
   :height: 3.749cm
   :width: 4.305cm
   :align: center
   :alt: 


.. image:: img/TWP45_039.jpeg
   :height: 3.749cm
   :width: 4.6cm
   :align: center
   :alt: 


.. image:: img/TWP45_040.jpeg
   :height: 3.783cm
   :width: 3.576cm
   :align: center
   :alt: 


.. image:: img/TWP45_041.jpeg
   :height: 3.783cm
   :width: 3.716cm
   :align: center
   :alt: 


.. image:: img/TWP45_042.jpeg
   :height: 3.783cm
   :width: 4.366cm
   :align: center
   :alt: 


.. image:: img/TWP45_043.jpeg
   :height: 3.783cm
   :width: 3.749cm
   :align: center
   :alt: 


.. image:: img/TWP45_044.jpeg
   :height: 3.783cm
   :width: 2.592cm
   :align: center
   :alt: 


.. image:: img/TWP45_045.jpeg
   :height: 3.851cm
   :width: 3.492cm
   :align: center
   :alt: 


.. image:: img/TWP45_046.jpeg
   :height: 3.783cm
   :width: 4.381cm
   :align: center
   :alt: 


.. image:: img/TWP45_047.jpeg
   :height: 3.895cm
   :width: 11cm
   :align: center
   :alt: 


.. image:: img/TWP45_048.png
   :height: 5.286cm
   :width: 12.2cm
   :align: center
   :alt: 


.. code-block:: python

   
   import urllib.request
   import json

   url = 'http://www.reddit.com/r/Python/.json'
   resp = urllib.request.urlopen(url).read()

   parsed = json.loads(resp.decode('utf-8'))

   for item in parsed['data']['children']:
      doc = item['data']
      print(doc['title'])
      print('#comments: %d' %doc['num_comments'])
      print(doc['url'])
      print()


.. image:: img/TWP45_050.png
   :height: 9.39cm
   :width: 23.344cm
   :align: center
   :alt: 


.. image:: img/TWP45_051.jpeg
   :height: 10.932cm
   :width: 13.784cm
   :align: center
   :alt: 


.. image:: img/TWP45_052.jpeg
   :height: 13.4cm
   :width: 23.824cm
   :align: center
   :alt: 

.. code-block:: python

   
   import json
   import pymongo
   import urllib.request

   connection = pymongo.Connection('mongo://localhost',safe = True)

   db = connection.reddit
   stories = db.stories

   url = 'http://www.reddit.com/r/Python/.json'
   reddit_page = urrlib.request.urlopen(url)

   parsed = json.loads(reddit_page.read().decode('utf-8'))

   for item in parsed['data']['children']:
      print(item['data'])
      stories.insert(item['data'])



.. image:: img/TWP45_054.png
   :height: 12.117cm
   :width: 21.483cm
   :align: center
   :alt: 

.. disqus::
   :shortname: pyzombis
   :identifier: lecture16
