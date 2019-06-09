=======
Strings
=======


.. image:: img/TWP10_001.jpeg
   :height: 14.925cm
   :width: 9.258cm
   :align: center
   :alt: 

Aspas de vários tipos
=====================



+ Posso usar aspas simples, duplas ou triplas




.. codelens:: Example5_1
         
        x = "abacate"
        print(x)
        y = "MacDonald's"
        print(y)
        form = '''
        <html>
               <head>
                  <title> Teste </title>
               </head>
               <body>
                  <p>Testando</p>
               </body>
         <html>'''



Fatiamento
==========



+ Fatia do primeiro índice até o anterior do segundo


.. codelens:: Example5_2
         
        x = "0123456789"
        print(x[0:2])
        print(x[1:2])
        print(x[2:4])
        print(x[0:5])
        print(x[1:8])


Fatiamento
==========



+ Podemos omitir índices, substituindo pelo extremo correspondente e
  também podemos ter índices negativos: -1 último, -2 penúltimo


.. codelens:: Example5_3
         
        x = "0123456789"
        print(x[:2])
        print(x[4:])
        print(x[4:-1])
        print(x[-4:-1])
        print(x[:])



Incremento no fatiamento
========================



+ Posso usar um incremento ao fatiar a string



.. codelens:: Example5_4
         
        texto = "batatinha quando nasce"
        print(texto[::2])
        print(texto[::-1])


Incremento no fatiamento
========================



+ Verifique se uma palavra é palíndrome

.. activecode:: Example5_5
   :nocodelens:
   :stdin:

   palavra  =input('Palavra: ')
   if palavra == palavra[::-1]:
    print('%s é palíndrome' %palavra)
   else:
     print('%s não é palíndrome' %palavra)

Strings são imutáveis
=====================


.. activecode:: Example5_6
   :nocodelens:
   :stdin:

   texto = "Alô Mundo"
   texto[0] = '@'


Posso criar novas strings
=========================



+ Usando concatenação resolvemos esse problema


.. activecode:: Example5_7
   :nocodelens:
   :stdin:

   texto = "Alô Mundo"
   texto = '@' + texto[1:]
   print(texto)



Concatenação
============



+ Faça um programa que leia uma palavra e troque as vogais por “*”


.. activecode:: Example5_8
   :nocodelens:
   :stdin:

   palavra  =input('Palavra: ')
   k = 0
   troca = ""
   while k < len(palavra):
      if palavra[k] in 'aeiou:
       troca = troca + '*'
      else:
       troca = troca + palavra[k]
      k+=1
   print("Nova palavra %s" %troca)


Verificação parcial de strings
==============================


.. codelens:: Example5_9
         
        arquivo = 'prog.py'
        print(arquivo.startswith('p'))
        print(arquivo.endswith('p'))
        reposta = "Sim"
        print(reposta.lower())
        print(reposta.upper())
        print(reposta.lower() in 'sim não yes no')


find and replace
================


.. codelens:: Example5_10
         
        s = 'um tigre, dois tigres, três tigres'
        print(s.find('tigre'))
        print(s.find('tigre',4))
        print(s.find('tigre',16))
        print(s.replace('tigre','gato'))
        s = s.replace('tigre','gato')
        print(s)


split and join
==============


.. codelens:: Example5_11
         
        txt = 'batatinha quando nasce'
        print(txt.split())
        data = '21/02/2011'
        print(data.split('/'))
        ip = '198.188.10.144'
        print(ip.split('.'))
        times = ['Palmeiras','Santos','Corintians']
        print('/'.join(times))

Exercício
=========



+ Faça um programa que solicite a data de nascimento (dd/mm/aaaa) e
  imprima com o nome do mês por extenso


.. activecode:: Example5_12
   :nocodelens:
   :stdin:

   dia, mês , ano = input('Data (dd/mm/aaaa): ').split('/')
   meses = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro']
   print('Você nascem em: ')
   print('%s de %s de %s' %(dia,meses[int(mês)-1],ano))



Coding Dojo
===========


.. image:: img/TWP18_015.jpeg
   :height: 14.251cm
   :width: 19.001cm
   :align: center
   :alt: 


Coding Dojo
===========



+ Desenvolvimento guiado por testes
+ Passos de bebê
+ Pair programming




Desenvolvimento guiado por testes
=================================


.. image:: img/TWP18_016.png
   :height: 11.032cm
   :width: 17.726cm
   :align: center
   :alt: 


Baby Steps
==========


.. image:: img/TWP18_017.jpeg
   :height: 12.624cm
   :width: 17.704cm
   :align: center
   :alt: 


Pair Programming
================


.. image:: img/TWP18_018.png
   :height: 13.711cm
   :width: 18.201cm
   :align: center
   :alt: 

Links de Palestras em Vídeo:
============================

.. youtube:: t5sE9ruRHHM
      :height: 315
      :width: 560
      :align: center

.. youtube:: TQkvGiwXhdQ
      :height: 315
      :width: 560
      :align: center

.. youtube:: __OGe-uUBmg
      :height: 315
      :width: 560
      :align: center

.. youtube:: OInhmFfmNXE
      :height: 315
      :width: 560
      :align: center

.. youtube:: zOp-YBp3yzI
      :height: 315
      :width: 560
      :align: center

.. youtube:: DR4CuztiMpY
      :height: 315
      :width: 560
      :align: center

.. disqus::
   :shortname: pyzombis
   :identifier: lecture5


