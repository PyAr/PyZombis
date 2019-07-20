==============
Revisão Listas
==============


.. image:: img/TWP10_001.jpeg
   :height: 14.925cm
   :width: 9.258cm
   :align: center
   :alt:



.. youtube:: uEImp8vMMKE
      :height: 315
      :width: 560
      :align: center




Campeonato de Surf em Codeville
===============================


.. image:: img/TWP37_001.jpeg
   :height: 12.571cm
   :width: 9.428cm
   :align: center
   :alt: 


Campeonato de Surf em Codeville
===============================


.. image:: img/TWP37_002.jpeg
   :height: 11.923cm
   :width: 17.85cm
   :align: center
   :alt: 


Campeonato de Surf em Codeville
===============================


.. image:: img/TWP37_003.jpeg
   :height: 12.571cm
   :width: 16.762cm
   :align: center
   :alt: 


Encontre a pontuação mais alta
==============================



+ As pontuações estão no arquivo surf.txt
+ Selecione a pontuação mais alta para saber o vencedor!


.. image:: img/TWP37_004.jpg
   :height: 8.566cm
   :width: 10.55cm
   :align: center
   :alt: 


Lendo o arquivo surf.txt
========================

.. .. datafile:: surf.txt
..    :hide: 
      
      Johny 8.65
      Juan 9.12
      Joseph 8.45
      Stacey 7.81
      Aideen 8.05
      Zack 7.21
      Aaron 8.3

.. .. activecode:: Example12_1
..    :nocodelens:
..    :datafile: surf.txt
..    :enabledownload:
..    :stdin:

      f = open('surf.txt')
      for linha in f:
         print(linha.strip())
      f.close()

.. code-block:: python
   
   f = open('surf.txt')
   for linha in f:
      print(linha.strip())
   f.close()

Fragmentador for
================


.. image:: img/TWP37_007.jpg
   :height: 12.627cm
   :width: 13cm
   :align: center
   :alt: 


Descubra quem obteve a maior nota
=================================


.. image:: img/TWP37_008.jpg
   :height: 14.824cm
   :width: 11cm
   :align: center
   :alt: 


O método split corta a string
=============================



.. image:: img/TWP37_010.jpg
   :height: 12.571cm
   :width: 21.839cm
   :align: center
   :alt: 


O método split corta a string
=============================


.. image:: img/TWP37_011.jpg
   :height: 12.571cm
   :width: 21.839cm
   :align: center
   :alt: 


Encontrando o 1º lugar
======================


.. code-block:: python
   
   f = open('surf.txt')
   maior = 0
   for linha in f:
      nome, pontos = linha.split()
      if float(pontos) > maior:
         maior = float(pontos)
   f.close()
   print(maior)


Sai o placar...
===============


.. image:: img/TWP37_014.jpg
   :height: 10.906cm
   :width: 21.021cm
   :align: center
   :alt: 


Controlar 3 pontuações é complicado
===================================


.. code-block:: python
   
   f = open('surf.txt')
   primeiro = 0
   segundo = 0
   terceiro = 0
   for linha in f:
      nome, pontos = linha.split()
      if float(pontos) > primeiro:
         terceiro = segundo
         segundo = primeiro
         primeiro = float(pontos)
      elif float(pontos) > segundo:
         terceiro = segundo
         segundo = float(pontos)
      elif float(pontos) > terceiro:
         terceiro = float(pontos)
   f.close()

   print(primeiro)
   print(segundo)
   print(terceiro)


Ordenar a lista seria melhor
============================


.. image:: img/TWP37_016.jpg
   :height: 12.09cm
   :width: 20.531cm
   :align: center
   :alt: 


Ordenação é mais fácil na memória
=================================



+ Dados em disco são persistentes: se você puxar o fio da tomada, o
  computador não esquecerá as informações gravadas no disco

+ Dados na memória são muito mais rápidos, porém não são persistentes:
  os dados na memória desaparecem quando seu programa sai ou quando o
  computador é desligado

+ Design Tradeoff: persistência x rapidez


Primeiro: ler os dados para a memória
=====================================


.. image:: img/TWP37_017.jpg
   :height: 9.55cm
   :width: 21.457cm
   :align: center
   :alt: 


Uai, vamô usar um trem de dados
===============================

+ Array, lista, vetor são nomes comuns para um lote inteiro de dados

+ Preciso de apenas uma única variável para todo o trem de dados


.. image:: img/TWP37_018.jpg
   :height: 7.4cm
   :width: 9.632cm
   :align: center
   :alt: 


Voltando ao surf...
===================



+ Podemos criar uma lista de notas
+ Para inserir cada nova nota use append
+ Os melhores colocados serão notas[0], notas[1] e notas[2]


Nova classificação
==================


.. youtube:: xAHvvU4N0NY
      :height: 315
      :width: 560
      :align: center



.. code-block:: python
   
   f = open('surf.txt')
   notas = []
   for linha in f:
      nome, pontos = linha.split()
      notas.append(float(pontos))
   f.close()
   print(notas[0])
   print(notas[1])
   print(notas[2])

.. image:: img/TWP37_021.jpg
   :height: 10.006cm
   :width: 12.699cm
   :align: center
   :alt: 


Classificar em ordem descrescente
=================================


.. image:: img/TWP37_022.jpg
   :height: 12.571cm
   :width: 22.825cm
   :align: center
   :alt: 


Métodos sort e reverse
======================



+ O método sort ordena os dados
+ Utilizo reverse para que fiquem em ordem descrescente
+ O nerd pode utilizar notas.sort(reverse = True)


Finalmente a classificação correta
==================================


.. code-block:: python
   
   f = open('surf.txt')
   notas = []
   for linha in f:
      nome, pontos = linha.split()
      notas.append(float(pontos))
   f.close()
   notas.sort()
   notas.reverse()
   print(notas[0])
   print(notas[1])
   print(notas[2])


.. image:: img/TWP37_025.jpg
   :height: 7.724cm
   :width: 16.645cm
   :align: center
   :alt: 



.. youtube:: MRSLnv8jnWU
      :height: 315
      :width: 560
      :align: center




.. disqus::
   :shortname: pyzombis
   :identifier: lecture12