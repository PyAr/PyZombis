===============
Revisão Geral 2
===============


.. image:: img/TWP10_001.jpeg
   :height: 14.925cm
   :width: 9.258cm
   :align: center
   :alt: 

O que é um programa?
====================



+ Um conjunto detalhado de instruções, passo a passo, dizendo o que o
  computador fará

+ Se mudamos o programa, o computador fará uma outra coisa diferente

+ O computador permanece o mesmo, mas o programa mudou

+ Programas são executados


O que é um programa?
====================



+ Software (programas) comandam o hardware

+ O processo de criar software chama-se programação

+ Um algoritmo é a receita, passo a passo, que resolve um problema
  computacional


Linguagens de Programação
=========================



+ Linguagens de baixo nível são as mais próximas da máquina

+ Assembler:

  + Carregue o número da variável A na CPU
  + Carregue o número da variável B na CPU
  + Adicione os dois números na CPU
  + Armazene o resultado na variável C


Linguagens de Programação
=========================



+ Comando original em linguagem de alto nível: C = A + B

+ Compiladores convertem a linguagem de alto nível para a linguagem de
  máquina específica de um computador

+ Interpretadores analisam e executam o programa instrução por
  instrução na linguagem de máquina


Python
======



+ O sinal “>>>” indica que o Python está “pronto” para receber
  comandos




.. codelens:: Example13_1
         
        print('Alo mundo!')
        print(2+3)
        print('2 + 3 = ',2+3)

Python
======



+ Normalmente queremos repetir uma série de comandos várias vezes

+ Uma forma de fazer isso é utilizar uma função


.. codelens:: Example13_2
         
        def amodoispontos():
          print('Eu amo :!')
          print('Dois pontos == ":"')
        
        amodoispontos()



+ Não esqueça dos parênteses ao chamar a função!

+ Se você esquecer dos parênteses, o python devolverá o endereço na
  memória onde está o código da função


.. codelens:: Example13_3
         
        def amodoispontos():
          print('Eu amo :!')
          print('Dois pontos == ":"')
        
        print(amodoispontos)
        print(print)


Python
======



+ Podemos colocar parâmetros numa função




.. codelens:: Example13_4
         
        def soma(a,b):
          return a+b

        print(soma('abacate','jabuticaba'))
        print(soma(2,3))
        print(soma(3.14,2.71))


Python
======



+ As funções deixam de existir assim que você sair do interpretador
  Python

+ Por isso, os programas são normalmente compostos de módulos, que são
  arquivos salvos em disco

+ Um módulo é um arquivo texto que contêm um programa python

+ Você pode editar os módulos em uma ambiente de desenvolvimento, que
  realça palavras reservadas, faz identação automática, etc...


Python
======



+ Salvamos um programa chamado caos.py

+ Não esqueça a extenção .py

+ Podemos rodar o programa com a tecla F5


.. activecode:: Example13_5
   :nocodelens:
   :stdin:

    print('Este progroma ilustra um comportamento caotico')
    x = eval(input('Entre com um numero entre 0 e 1:'))
    for i in range(10):
      x = 3.9*x*(1-x)
      print("2.3f" %x)

Python
======



+ Linhas que começam com “#” são chamadas de comentários

+ Servem para serem lidas por humanos e são ignoradas pelo Python

+ O Python pula todo o texto do “#” até o fim da linha


.. image:: img/TWP38_008.png
   :height: 2.173cm
   :width: 23.602cm
   :align: center
   :alt: 


Python
======


+ x é um exemplo de variável

+ Em x atribuiremos um valor que poderá ser referenciado depois

+ A mensagem entre aspas será apresentada e a resposta armazenada em x


.. image:: img/TWP38_009.png
   :height: 0.799cm
   :width: 23.316cm
   :align: center
   :alt: 


Python
======



+ Existem comandos de loop como o for

+ Um loop serve para repetir várias vezes um bloco de comandos

+ Neste exemplo o bloco seguinte irá ser repetido 10 vezes


.. image:: img/TWP38_010.png
   :height: 1.399cm
   :width: 13.067cm
   :align: center
   :alt: 


Python
======



+ Chamamos de identação os espaços no início da linha

+ No Python a identação delimita o bloco que será executado

+ O cálculo 3.9*x*(1-x) será executado na CPU e atribuído na variável
  x


.. image:: img/TWP38_011.png
   :height: 3.599cm
   :width: 13.694cm
   :align: center
   :alt: 


Python
======



+ A função caos devolve valores bem diferentes, mesmo quando a entrada
  é parecida



Exercício
=========



+ Altere o programa anterior de forma que leia um valor inteiro n e
  execute o for n vezes no lugar do valor fixo 10


Resumo
======



+ A descrição de uma seqüência de passos para resolver um problema
  computacional é chamada de algoritmo

+ Algoritmos são programas (software) que determinam o que o
  computador (hardware) fará

+ O processo de criar software é chamado de programação


Recordação
==========



+ Linguagens de programação possuem uma sintaxe formal

+ Computadores entendem apenas a linguagem de máquina

+ Python é uma linguagem interpretada de alto nível

+ O interpretador Python converte os comandos instrução por instrução
  para a linguagem de máquina


.. disqus::
   :shortname: pyzombis
   :identifier: lecture13

