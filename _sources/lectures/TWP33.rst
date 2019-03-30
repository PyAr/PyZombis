===============
Revisão Strings
===============


.. image:: img/TWP10_001.jpeg
   :height: 14.925cm
   :width: 9.258cm
   :alt: 


<número>

Texto
=====



+ É difícil comunicar-se sem palavras
+ Entre os vários tipos de dados, um dos mais importantes é o texto ou
  string



  +

    + –Obs.: não é tão fácil manipular strings em algumas linguagens

+ Vamos procurar onde estão as informações num texto == scraping
+ E iremos aprender um dos conceitos mais importantes de orientação à
  objetos: métodos




Starbuzz Café
=============


.. image:: img/TWP33_001.png
   :height: 15.427cm
   :width: 14.801cm
   :alt: 


Código Starbuzz atual
=====================










.. image:: img/TWP33_002.png
   :height: 5.607cm
   :width: 23.5cm
   :alt: 


.. image:: img/TWP33_003.png
   :height: 4.8cm
   :width: 23.544cm
   :alt: 


O CEO quer apenas o preço
=========================


.. image:: img/TWP33_004.png
   :height: 6.719cm
   :width: 12.699cm
   :alt: 


.. image:: img/TWP33_002.png
   :height: 5.727cm
   :width: 24.005cm
   :alt: 


O preço está embutido no HTML
=============================



+ Este é um texto HTML “bruto”, que é o formato das páginas Web
+ O preço está embutido no HTML


Strings
=======



+ Strings são seqüências de caracteres









+ Como obter apenas o preço?










.. image:: img/TWP33_005.png
   :height: 2.112cm
   :width: 23.745cm
   :alt: 


.. image:: img/TWP33_006.png
   :height: 3.436cm
   :width: 22.621cm
   :alt: 


Strings
=======


.. image:: img/TWP33_007.png
   :height: 5cm
   :width: 16.051cm
   :alt: 


.. image:: img/TWP33_008.png
   :height: 6.323cm
   :width: 16.483cm
   :alt: 


Strings
=======


.. image:: img/TWP33_009.png
   :height: 5.317cm
   :width: 17.805cm
   :alt: 


.. image:: img/TWP33_010.png
   :height: 1.276cm
   :width: 6.547cm
   :alt: 


Fatiamento
==========














Fatia do primeiro número até antes do segundo

Não inclui o segundo número!

.. image:: img/TWP33_011.png
   :height: 8.552cm
   :width: 12.699cm
   :alt: 


Fatiamento
==========


.. image:: img/TWP33_012.png
   :height: 6.111cm
   :width: 13.943cm
   :alt: 


Fatiamento
==========


.. image:: img/TWP33_013.png
   :height: 1.799cm
   :width: 3.471cm
   :alt: 


.. image:: img/TWP33_014.png
   :height: 6.19cm
   :width: 23.97cm
   :alt: 


O CEO está feliz!
=================


.. image:: img/TWP33_015.png
   :height: 6.402cm
   :width: 14.922cm
   :alt: 


Não existem perguntas idiotas
=============================



+ Posso colocar qualquer página web neste código?



  +

    + –Sim. Fique à vontade, mas não esqueça o decode
    + –Por exemplo, o site abaixo usa iso8859
    + –`http://www.ime.usp.br/~pf/algoritmos/dicios/br`_

+ O que urllib.request faz?

    + –Permite conversar com a internet

+ Posso acessar uma página diretamente no navegador?

    + –Sim. Digite no modo interativo “import antigravity”



Descontos para clientes fiéis
=============================


.. image:: img/TWP33_016.png
   :height: 12.571cm
   :width: 17.458cm
   :alt: 


Programa de fidelidade
======================












Não deu certo! Apareceu “bean” no lugar do preço. Por quê será?

.. image:: img/TWP33_017.png
   :height: 1.798cm
   :width: 4.047cm
   :alt: 


.. image:: img/TWP33_018.png
   :height: 6.8cm
   :width: 16.081cm
   :alt: 


.. image:: img/TWP33_019.png
   :height: 5.416cm
   :width: 16.122cm
   :alt: 


O preço se moveu
================



+ As páginas são diferentes e o preço muda de posição na string




Os dados do Python são 
=======================
espertos


+ As linguagens de programação fornecem uma funcionalidade embutida
  nos dados para ajudá-lo
+ Os dados do Python são espertos: eles podem fazer coisas








.. image:: img/TWP33_020.png
   :height: 3.544cm
   :width: 16.641cm
   :alt: 


Método find
===========



+ Métodos find para strings




.. image:: img/TWP33_021.png
   :height: 6.201cm
   :width: 13.89cm
   :alt: 


.. image:: img/TWP33_022.png
   :height: 8.392cm
   :width: 24.338cm
   :alt: 


Método find
===========


.. image:: img/TWP33_023.png
   :height: 1.772cm
   :width: 2.486cm
   :alt: 


.. image:: img/TWP33_024.png
   :height: 9.762cm
   :width: 11.561cm
   :alt: 


Só quando for menos que 4.74
============================


.. image:: img/TWP33_025.png
   :height: 15.444cm
   :width: 8.6cm
   :alt: 


Só quando for menos que 4.74
============================


.. image:: img/TWP33_026.png
   :height: 4.316cm
   :width: 23.483cm
   :alt: 


.. image:: img/TWP33_027.png
   :height: 8.81cm
   :width: 22.991cm
   :alt: 


Strings são diferentes de números
=================================


.. image:: img/TWP33_028.png
   :height: 9.324cm
   :width: 17.401cm
   :alt: 


.. image:: img/TWP33_029.png
   :height: 8.81cm
   :width: 23.071cm
   :alt: 


Convertendo para float
======================


Ele pode ficar testando o preço?
================================


.. image:: img/TWP33_025.png
   :height: 15.444cm
   :width: 8.6cm
   :alt: 


Ele pode ficar tentando?
========================


.. image:: img/TWP33_030.png
   :height: 1.878cm
   :width: 9.894cm
   :alt: 


.. image:: img/TWP33_031.png
   :height: 10.2cm
   :width: 24.033cm
   :alt: 


O CEO está muito feliz!
=======================


.. image:: img/TWP33_024.png
   :height: 9.762cm
   :width: 11.561cm
   :alt: 


Aconteceu algum problema
========================


.. image:: img/TWP33_032.png
   :height: 15.268cm
   :width: 15.201cm
   :alt: 


Acusação de DDoS
================



+ DDoS – Distributed Denial of Service


.. image:: img/TWP33_033.png
   :height: 13.596cm
   :width: 15.201cm
   :alt: 


Recebemos uma mensagem
======================


.. image:: img/TWP33_034.png
   :height: 13.191cm
   :width: 22.685cm
   :alt: 


Biblioteca time
===============



+ Hora atual em segundos time.clock()
+ Estou no horário de verão? time.daylight()
+ Dormir alguns segundos time.sleep(secs)
+ Fuso horário time.timezone()


10 minutos entre cada acesso
============================


.. image:: img/TWP33_035.png
   :height: 1.851cm
   :width: 10.133cm
   :alt: 


.. image:: img/TWP33_036.png
   :height: 12.382cm
   :width: 22.885cm
   :alt: 


Resumo
======



+ Strings são seqüências de caracteres
+ Acessamos os caracteres individuais pelo índice, que começa com zero
+ Métodos são funções embutidas nas variáveis
+ Existem bibliotecas de programação com código pronto
+ Os dados possuem um tipo, como int ou string




Ferramentas Python
==================



+ texto[4] acessa o 5º caracter
+ texto[4:9] acessa do 5º ao 9º caracter
+ O método texto.find() procura um substring
+ float() converte algo para ponto flutuante
+ Bibliotecas: urllib.request e time








.. _http://www.ime.usp.br/~pf/algoritmos/dicios/br: http://www.ime.usp.br/~pf/algoritmos/dicios/br


