
======================
Arquivos e Dicionários
======================


.. image:: img/TWP10_001.jpeg
   :height: 14.925cm
   :width: 9.258cm
   :align: center
   :alt: 


Arquivos
========

+ Até agora nossos dados desapareciam ao sair do IDLE

+ Arquivos servem para armazenamento permanente

+ Um arquivo é uma área em disco onde podemos ler ou gravar
  informações

+ Acessamos o arquivo pelo seu nome

+ Para acessar um arquivo é preciso abri-lo

+ Ao abrir o arquivo informamos seu nome, diretório onde fica (se
  necessário) e que operações iremos executar: leitura e/ou escrita

+ A função que abre os arquivo é open e os modos são: r – leitura, w –
  escrita, a – append, b – binário, + (atualização)

+ Os métodos para ler ou escrever são read e write

+ Os arquivos devem ser fechados com close


.. code-block:: python

   arquivo = open('numeros.txt','w')
   for linha in range(1,101):
       arquivo.write('%d\n' %linha)
   arquivo.close()



.. .. datafile:: numeros.txt
..    :edit: 
..    :hide: 

.. .. activecode:: Example7_1
..    :nocodelens:
..    :datafile: numeros.txt
..    :enabledownload:
..    :stdin:

..    arquivo = open('numeros.txt','w')
..    for linha in range(1,101):
..        arquivo.write('%d\n' %linha)
..    arquivo.close()


+ Caso você execute este programa nada aparecerá na tela
+ Procure no diretório c:\Python3x o arquivo números.txt
+ O modo w cria o arquivo se ele não existir, caso exista ele será
  apagado e reescrito

.. code-block:: python

   arquivo = open('numeros.txt','w')
   for linha in arquivo.readlines():
       print(linha)
   arquivo.close()


.. .. activecode:: Example7_2
..    :nocodelens:
..    :datafile: numeros.txt
..    :enabledownload:
..    :stdin:

..    arquivo = open('numeros.txt','w')
..    for linha in arquivo.readlines():
..        print(linha)
..    arquivo.close()


+ readlines gera uma lista onde cada elemento é uma linha lida
+ Arquivos textos são simples e possuem um caracter de controle no
  final para pular linha
+ Se quisermos tirar esse caracter do final podemos usar
  print(linha.rstrip())


Pythonic way
============


.. code-block:: python

   with open('numeros.txt','r') as f:
    print(f.read())

.. .. activecode:: Example7_3
..    :nocodelens:
..    :datafile: numeros.txt
..    :enabledownload:
..    :stdin:

..    with open('numeros.txt','r') as f:
..     print(f.read())


+ O código acima faz o mesmo da forma pythônica.
+ No slide anterior vimos como programadores normais fazem a leitura
+ Python é legal, pois sempre você pode se aprofundar mais
+ Python é simples, mas difícil de esgotar


Cripto
======


+ Leia mensagem.txt e grave cripto.txt com todas as vogais trocadas
  por ‘*’


.. code-block:: python

    texto = open('mensagem.txt')
    saida = open('cripto.txt','w')
    for linha in texto.readlines():
      for letra in linha:
        if letra in 'aeiou':
          saida.write('*')
        else:
          saida.write(letra)
    texto.close()
    saida.close()


Validate IP address
===================


.. .. datafile:: IPS.txt
..    :edit: 
..    :hide: 

..    200.135.80.9
..    192.168.1.1
..    8.35.67.74
..    257.32.4.5
..    85.345.1.2
..    1.2.3.4
..    9.8.284.5
..    192.168.0.256


.. .. datafile:: Válidos.txt
..    Válidos



.. .. datafile:: Inválidos.txt
..    Inválidos 

.. code-block:: python

    def ip_ok(ip):
      ip = ip.split('.')
      for byte in ip:
        if int(byte) > 255:
          return False
      return True

    arq = open('IPS.txt')
    validos = open('Válidos.txt','w')
    invalidos = open('Inválidos.txt','w')
    for linha in arq.readlines():
      if ip_ok(linha):
        validos.write(linha)
      else:
        invalidos.write(linha)
    arq.close()
    validos.close()
    invalidos.close()


HTML
====


+ Páginas web são escritas em HTML (Hypertext Mark-up Language)
+ Tags HTML começam com < e terminam com >
+ A página web é escrita entre <html> e </html> que é a tag de maior
  nível
+ Normalmente inserimos código javascript
+ Javascript não é um subconjunto de Java


.. code-block:: python

    arquivo = open('ola.html','w',encoding = 'utf-8')
    arquivo.write('''<!DOCTYPE html>
    <html lang="pt-BR">
    <head>
    <meta charset = "utf-8">
    <title>Título da Página</title>
    </head>
    <body>
    Olá!
    </body>
    </html>''')
    arquivo.close()


+ Note o parâmetro de codifição utf-8 ; Sem ele os ascentos não sairão


Dictionaries
============


+ O dicionário em si consiste em relacionar uma chave a um valor
  específico
+ Diferentemente das listas, onde o índice é um número, dicionários
  utilizam suas chaves como índice
+ Para adicionar novos elementos não preciso de append, basta fazer a
  atribuição

    + Se a chave já existe: o valor associado é alterado
    + Se a chave não existe: a nova chave é adicionada

.. codelens:: Example7_4
         
        d = {}
        d['a'] = 'alpha'
        d['o'] = 'omega'
        d['g'] = 'gama'
        print(d)
        print(d['a'])


.. activecode:: Example7_5
   :nocodelens:
   :stdin:

   d = {}
   d['a'] = 'alpha'
   d['o'] = 'omega'
   d['g'] = 'gama'
   print(d)
   print(d['x'])


.. codelens:: Example7_6
         
        d = {}
        d['a'] = 'alpha'
        d['o'] = 'omega'
        d['g'] = 'gama'
        print(d.keys())
        print(d.values())
        print('g' in d)
        print('x' in d)
        for chave in d:
          print(chave)

+ Faça um programa que leia o arquivo alice.txt e conte o número de
  ocorrências de cada palavra no texto. Obs.: para saber os caracteres
  especiais use import string e utilize string.punctuation
+ `http://www.gutenberg.org/cache/epub/11/pg11.txt`_


.. code-block:: python

    arq = open('alice.txt')
    texto = arq.read()
    texto = texto.lower()
    import string
    for c in string.punctuation:
        texto = texto.replace(c, ' ')
    texto = texto.split()

    dic = {}
    for p in texto:
        if p not in dic:
            dic[p] = 1
        else:
            dic[p] += 1
    print ('Alice aparece %s vezes' %dic['alice'])
    arq.close()



Exercício Programa 1
====================


.. image:: img/TWP05_041.jpeg
   :height: 12.571cm
   :width: 9.411cm
   :align: center
   :alt: 


+ “A vida é como andar de bicicleta. Para manter o equilíbrio, é preciso se manter em movimento”. - Einstein.

Links de Palestras em Vídeo:
============================

.. youtube:: C9_DTR1lCIs
      :height: 315
      :width: 560
      :align: center

.. youtube:: 5z6zqyeLxjg
      :height: 315
      :width: 560
      :align: center

.. youtube:: iy6lC_n-C8Y
      :height: 315
      :width: 560
      :align: center

.. youtube:: 8LPKBWfGgEM
      :height: 315
      :width: 560
      :align: center

.. youtube:: 6Bez4QcGtak
      :height: 315
      :width: 560
      :align: center

.. youtube:: 9no41i9UDRI
      :height: 315
      :width: 560
      :align: center

.. youtube:: ZhDQIL5bgEU
      :height: 315
      :width: 560
      :align: center

.. youtube:: vvfc3BAbmo0
      :height: 315
      :width: 560
      :align: center


.. disqus::
   :shortname: pyzombis
   :identifier: lecture7
