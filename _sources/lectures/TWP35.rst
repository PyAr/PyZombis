===============
Revisão Funções
===============


.. image:: img/TWP10_001.jpeg
   :height: 14.925cm
   :width: 9.258cm
   :align: center
   :alt: 

Sejamos mais organizados
========================


.. image:: img/TWP35_001.jpeg
   :height: 13.35cm
   :width: 17.801cm
   :align: center
   :alt: 


Sejamos mais organizados
========================


.. image:: img/TWP35_002.jpeg
   :height: 14.064cm
   :width: 16.601cm
   :align: center
   :alt: 


Sejamos organizados
===================



+ Quando os programas crescem, geralmente o código fica mais complexo
+ Uma forma de gerenciar essa complexidade é usar funções
+ Elas permitem separar ações comuns, assim seu código fica mais fácil
  de ler e mais fácil de manter


O Starbuzz está sem grãos
=========================



+ O diretor da Starbuzz quer uma opção para compra rápida, sem esperar
  abaixar o preço
+ Ao rodar o programa irei perguntar se quer comprar já ou não
+ Se o usuário responder sim, então irei pegar o preço atual e comprar
+ Caso negativo, irei esperar abaixar para menos que 4.74


Sugestão de novo programa
=========================


.. code-block:: python

   import urllib.request
   import time
   opcao = input('Deseja comprar ja? (S/N)')
   if opcao == 'S':
      pagina = urllib.request.urlopen('http://beans.itcarlow.ie/prices-loyalty.html')
      texto = pagina.read().decode('utf8')
      onde = texto.find('>$')
      inicio = onde + 2
      fim = inicio + 4
      preco = float(texto[inicio:fim])
      print('Comprar! Preco: %5.2f' %preco)
   else:
      preco = 99.99
      while preco >= 4.74:
        pagina = urllib.request.urlopen('http://beans.itcarlow.ie/prices-loyalty.html')
        texto = pagina.read().decode('utf8')
        onde = texto.find('>$')
        inicio = onde + 2
        fim = inicio + 4
        preco = float(texto[inicio:fim])
        if preco >= 4.74:
          time.sleep(600)
      print('Comprar! Preco: 5.2%f' %preco)


Programa feio...
================



+ Não duplique seu código...
+ Isso leva ao excesso de código, tornando a manutenção do seu código
  difícil
+ Procure reutilizar seu código
+ Definindo funções faremos reuso de código
+ Qual é a diferença?
+ Se eu tiver que mudar algo, irei alterar em apenas um lugar




Funções
=======



+ Funções são códigos compartilháveis
+ Defino um nome e chamo a função ao longo do programa
+ A função deve ser definida antes de você chamá-la
+ Se você quiser retornar um valor para quem chamou a função deverá
  utilizar o comando return


.. code-block:: python

   import urllib.request
   import time

   def pega_preco():
      pagina = urllib.request.urlopen('http://beans.itcarlow.ie/prices-loyalty.html')
      texto = pagina.read().decode('utf8')
      onde = texto.find('>$')
      inicio = onde + 2
      fim = inicio + 4
      return float(texto[inicio:fim])

   opcao = input('Deseja comprar ja? (S/N)')
   if opcao == 'S':
      preco = pega_preco()
      print('Comprar! Preco: %5.2f' %preco)
   else:
      preco = 99.99
      while preco >= 4.74:
        preco = pega_preco()
        if preco >= 4.74:
          time.sleep(600)
      print('Comprar! Preco: 5.2%f' %preco)



Não existem perguntas idiotas
=============================



+ O comando return é igual ao print? Não, print exibe algo na tela,
  enquanto return devolve um valor para quem chamou a função.
+ Se eu não der return dentro da função, o que ela retorna? None
+ Return sempre deve vir no final da função? Nem sempre, depende da
  lógica da função
+ Uma função pode devolver mais de um valor? Sim, inclusive listas ou
  dicionários.


.. image:: img/TWP35_005.jpeg
   :height: 16.402cm
   :width: 25.442cm
   :align: center
   :alt: 



+ `JSON <http://json.org>`_
+ Independente de linguagem
+ Pares nome/valor
+ Lista ordenada
+ Muito adotado atualmente
+ Alternativa para o XML

  + XML mais verbosa
  + XML menor legibilidade




.. code-block:: python 

   
    import urllib.request
    import json

    url = "http://api.icndb.com/jokes/random?limitTo=[nerdy]"
    resp = urrlib.request.urlopen(url).read()
    data = json.loads(resp.decode('utf-8'))
    print(data['value']['joke'])


Links de Palestras em Vídeo:
============================


.. youtube:: VxQBUPE6HbA
      :height: 315
      :width: 560
      :align: center

.. youtube:: EKCo0qcVYQU
      :height: 315
      :width: 560
      :align: center

.. youtube:: V7c168XpfQ4
      :height: 315
      :width: 560
      :align: center



.. disqus::
   :shortname: pyzombis
   :identifier: lecture11
