=======
Módulos
=======


.. image:: img/TWP10_001.jpeg
   :height: 14.925cm
   :width: 9.258cm
   :align: center
   :alt: 


.. youtube:: E_IIrwtag_c
      :height: 315
      :width: 560
      :align: center



Programação Modular
===================


.. image:: img/TWP47_001.png
   :height: 11.865cm
   :width: 21.001cm
   :align: center
   :alt: 


Arquivo transações.txt
======================


.. image:: img/TWP47_002.png
   :height: 9.515cm
   :width: 22.859cm
   :align: center
   :alt: 


Venda Salgados
==============


.. youtube:: GWqpH_o8-54
      :height: 315
      :width: 560
      :align: center



.. code-block:: python

   def salva_transacao(preco, cartao_credito, descricao):
      file = open('transacoes.txt',"a")
      file.write("%16s%07d%16s\n" %(cartao_credito,preco*100,descricao))
      file.close()

   itens = ["Esfiha","Coxinha","Pastel","Pao de Queijo"]
   precos = [1.50,2.20,1.80,1.20]
   rodando = True

   while rodando:
      opcao = 1
      for escolha in itens:
         print(str(opcao) + "." + escolha)
         opcao += 1
      print(str(opcao) + ".Finalizar")
      escolha = int(input("Escolha uma opcao: "))
      if escolha == opcao:
         #escolheu a ultima opcao Finalizar
         rodando = False
      else:
         cartao = input("Numero do cartao de credito: ")
         salva_transacao(precos[escolha-1],cartao,itens[escolha-1]) 




Venda Salgados
==============


.. image:: img/TWP47_004.jpg
   :height: 11.112cm
   :width: 15.768cm
   :align: center
   :alt: 


Venda Salgados
==============



+ Problemas: o banco rejeitou todo o arquivo de transações do período
  da manhã!
+ Todos os cartões estavam inválidos
+ Os preços estavam altos demais: rosquinha vendida por R$ 50.791,42!
+ Nos outros períodos não houve problema. O que será que aconteceu?

.. image:: img/TWP47_005.png
   :height: 5.952cm
   :width: 10.08cm
   :align: center
   :alt: 


Venda Salgados
==============


.. image:: img/TWP47_006.png
   :height: 11.945cm
   :width: 22.859cm
   :align: center
   :alt: 


Venda Salgados
==============

+ O banco mudou a ordem dos dados! [Preço / Cartão / Item]

.. image:: img/TWP47_007.png
   :height: 4.001cm
   :width: 22.802cm
   :align: center
   :alt: 


Venda Salgados
==============


.. image:: img/TWP47_008.jpg
   :height: 12.571cm
   :width: 19.998cm
   :align: center
   :alt: 


Venda Salgados Tarde/Noite
==========================


.. code-block:: python
   
   def salva_transacao(preco, cartao_credito, descricao):
      file = open('transacoes.txt',"a")
      file.write("%16s%07d%16s\n" %(cartao_credito,preco*100,descricao))
      file.close()

   itens = ["Esfiha","Coxinha","Pastel","Pao de Queijo"]
   precos = [1.50,2.20,1.80,1.20]
   rodando = True

   while rodando:
      opcao = 1
      for escolha in itens:
         print(str(opcao) + "." + escolha)
         opcao += 1
      print(str(opcao) + ".Finalizar")
      escolha = int(input("Escolha uma opcao: "))
      if escolha == opcao:
         #escolheu a ultima opcao Finalizar
         rodando = False
      else:
         cartao = input("Numero do cartao de credito: ")
         salva_transacao(precos[escolha-1],cartao,itens[escolha-1]) 



+ Formatação corrigida por aluno!


Venda Salgados Manhã
====================


.. code-block:: python
   
   def salva_transacao(preco, cartao_credito, descricao):
      file = open('transacoes.txt',"a")
      file.write("%16s%07d%16s\n" %(cartao_credito,preco*100,descricao))
      file.close()

   itens = ["Esfiha","Coxinha","Pastel","Pao de Queijo"]
   precos = [1.50,2.20,1.80,1.20]
   rodando = True

   while rodando:
      opcao = 1
      for escolha in itens:
         print(str(opcao) + "." + escolha)
         opcao += 1
      print(str(opcao) + ".Finalizar")
      escolha = int(input("Escolha uma opcao: "))
      if escolha == opcao:
         #escolheu a ultima opcao Finalizar
         rodando = False
      else:
         cartao = input("Numero do cartao de credito: ")
         salva_transacao(precos[escolha-1],cartao,itens[escolha-1]) 

+ Produtos alterados, mas esqueceram a formatação!



Módulo banco.py
===============


.. image:: img/TWP47_011.jpg
   :height: 12.571cm
   :width: 18.267cm
   :align: center
   :alt: 


Módulo banco.py
===============


.. code-block:: python
   
   def salva_transacao(preco, cartao_credito, descricao):
      file = open('transacoes.txt',"a")
      file.write("%16s%07d%16s\n" %(cartao_credito,preco*100,descricao))
      file.close()



+ Obs.: deixar no mesmo diretório dos programas manhã e tarde/noite

Novo programa da manhã
======================


.. code-block:: python
   
   from banco import *

   itens = ["Bauru","X Salada","Calafrango"]
   precos = [2.50,3.0,2.20]
   rodando = True

   while rodando:
      opcao = 1
      for escolha in itens:
         print(str(opcao) + "." + escolha)
         opcao += 1
      print(str(opcao) + ".Finalizar")
      escolha = int(input("Escolha uma opcao: "))
      if escolha == opcao:
         #escolheu a ultima opcao Finalizar
         rodando = False
      else:
         cartao = input("Numero do cartao de credito: ")
         salva_transacao(precos[escolha-1],cartao,itens[escolha-1]) 



Novo programa tarde/noite
=========================


.. code-block:: python
   
   from banco import *

   itens = ["Esfiha","Coxinha","Pastel","Pao de Queijo"]
   precos = [1.50,2.20,1.80,1.20]
   rodando = True

   while rodando:
      opcao = 1
      for escolha in itens:
         print(str(opcao) + "." + escolha)
         opcao += 1
      print(str(opcao) + ".Finalizar")
      escolha = int(input("Escolha uma opcao: "))
      if escolha == opcao:
         #escolheu a ultima opcao Finalizar
         rodando = False
      else:
         cartao = input("Numero do cartao de credito: ")
         salva_transacao(precos[escolha-1],cartao,itens[escolha-1]) 


Descontos
=========



.. youtube:: 5C35LCcrUVs
      :height: 315
      :width: 560
      :align: center




+ Agora sob nova direção os salgados na FATEC terão 10% de desconto!
+ Para isso será criado um módulo fatec.py
+ Inicialmente o desconto será de 10% para todos os salgados


.. image:: img/TWP47_015.png
   :height: 1.799cm
   :width: 9.524cm
   :align: center
   :alt: 


Descontos
=========


.. code-block:: python
   
   from banco import *
   from fatec import *

   itens = ["Esfiha","Coxinha","Pastel","Pao de Queijo"]
   precos = [1.50,2.20,1.80,1.20]
   rodando = True

   while rodando:
      opcao = 1
      for escolha in itens:
         print(str(opcao) + "." + escolha)
         opcao += 1
      print(str(opcao) + ".Finalizar")
      escolha = int(input("Escolha uma opcao: "))
      if escolha == opcao:
         #escolheu a ultima opcao Finalizar
         rodando = False
      else:
         cartao = input("Numero do cartao de credito: ")
         preco = desconto(precos[escolha-1]) 
         salva_transacao(preco,cartao,itens[escolha-1])


Descontos
=========



+ Teremos um desconto adicional de 50% para pastéis por conta da
  colônia japonesa
+ Novo módulo japa.py


.. image:: img/TWP47_017.png
   :height: 2.199cm
   :width: 12.158cm
   :align: center
   :alt: 


Os nomes são iguais! E agora?
=============================


.. image:: img/TWP47_018.png
   :height: 10.722cm
   :width: 19.917cm
   :alt: 


Nomes Completos
===============

+ A solução é adotar os nomes completos


.. code-block:: python
   
   from banco import *
   import fatec
   import japa

   itens = ["Esfiha","Coxinha","Pastel","Pao de Queijo"]
   precos = [1.50,2.20,1.80,1.20]
   rodando = True

   while rodando:
      opcao = 1
      for escolha in itens:
         print(str(opcao) + "." + escolha)
         opcao += 1
      print(str(opcao) + ".Finalizar")
      escolha = int(input("Escolha uma opcao: "))
      if escolha == opcao:
         #escolheu a ultima opcao Finalizar
         rodando = False
      else:
         cartao = input("Numero do cartao de credito: ")
         preco = fatec.descento(precos[escolha - 1])
         if itens[escolha - 1] == "Pastel":
            preco = japa.descento(preco)
         salva_transacao(preco,cartao,itens[escolha-1])

Nomes Completos
===============

+ Resultado - 


.. image:: img/TWP47_020.png
   :height: 11.324cm
   :width: 22.859cm
   :align: center
   :alt: 

.. image:: img/TWP47_021.png
   :height: 11.324cm
   :width: 22.859cm
   :align: center
   :alt: 


dis Module
==========


.. youtube:: CCxrF5usWwo
      :height: 315
      :width: 560
      :align: center



.. disqus::
   :shortname: pyzombis
   :identifier: lecture17
