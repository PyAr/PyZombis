============================
Variáveis e Entrada de Dados
============================


.. image:: img/TWP05_001.jpeg
   :height: 14.832cm
   :width: 9.2cm
   :align: center
   :alt: 

Primeiro programa
=================


+ Este programa possui apenas uma linha de código
+ Observe que as aspas não aparecem na saída
+ Precisamos marcar ou limitar o início e o fim de nossas mensagens
  com um símbolo, nesse caso, as aspas

.. code-block:: python

    >>> print ("hola mundo!")
    hola mundo!

.. codelens:: Example_1
    
    print("Primeria mensagem")


Primeira mensagem de erro
=========================

+ Letras maiúsculas e minúsculas são diferentes
+ Você reparou que Print não está na cor roxa?

.. code-block:: python

    >>> Print ("hola mundo!")
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    NameError: name 'Print' is not defined

Primeira mensagem de erro
=========================

+ Se não utilizarmos aspas, o computador interpretará nossa mensagem
  como um comando da linguagem Python, gerando um erro de sintaxe
+ Você reparou que a mensagem não está na cor verde?

.. code-block:: python

    >>> print (hola mundo)
      File "<stdin>", line 1
        print (hola mundo)
                        ^
    SyntaxError: invalid syntax

Primeira mensagem de erro
=========================

+ Na versão do Python que usamos os parênteses não são opcionais no
  print

.. code-block:: python

    >>> print "hola mundo"
      File "<stdin>", line 1
        print "hola mundo"
              ^
    SyntaxError: invalid syntax

Primeira mensagem de erro
=========================

+ Os espaços iniciais possuem um significado em Python que veremos
  mais adiante


.. code-block:: python

    >>>   print("Primeira mensagem!")
      File "<stdin>", line 1
        print "hola mundo"
      ^      
    SyntaxError: unexpected indent


Interpretador Python
====================



+ O interpretador é um programa que aceita comandos escritos em Python
  e os executa, linha a linha
+ Sem o interpretador, nossos programas não podem ser executados,
  sendo considerados apenas um texto
+ O interpretador verifica se escrevemos corretamente o programa,
  mostrando mensagens de erro caso haja algum problema


Interpretador Python
====================



+ Existem dois modos do interpretador Python: modo interativo e modo
  de edição
+ Usamos nos exemplos anteriores o modo interativo
+ Uma vantagem do modo interativo é poder testar comandos e obter a
  resposta instantaneamente


Modo edição
===========


.. image:: img/TWP05_007.png
   :height: 11.961cm
   :width: 22.859cm
   :align: center
   :alt: 


Rodar o programa
================


.. image:: img/TWP05_008.png
   :height: 12.435cm
   :width: 22.859cm
   :align: center
   :alt: 


Salvar o programa
=================


.. image:: img/TWP05_009.png
   :height: 12.033cm
   :width: 22.859cm
   :align: center
   :alt: 


Mesmo resultado!
================


.. image:: img/TWP05_010.png
   :height: 13.843cm
   :width: 19.844cm
   :align: center
   :alt: 


Cuidados ao digitar programas
=============================



+ Letras maiúsculas e minúsculas são diferentes
+ Aspas são muito importantes e não devem ser esquecidas. Todas vez
  que você abrir aspas, não esqueça de fechá-las
+ Parênteses não são opcionais em Python. Todo parênteses aberto deve
  ser fechado.
+ Espaços são muito importantes. A linguagem Python se baseia na
  quantidade de espaços em branco antes do início de cada linha para
  realizar diferentes operações.


Calculadora no interpretador
============================


.. codelens:: Example_Calculator
    
    print(2+3)
    print(5-3)
    print(10-4+2)
    print(2*10)
    print(10/4)
    print(2**3)
    print(10%3)
    print(16%7)


Conceitos de variáveis e atribuição
===================================



+ Variáveis são utilizadas para armazenar valores e para dar nome a
  uma área da memória do computador
+ O símbolo para atribuição é o igual (=)




.. codelens:: Example_6_1
    
    a = 2
    b = 3
    print(a+b)

Conceitos de variáveis e atribuição
===================================



+ Como em matemática, passamos parâmetros ou valores para uma função
  usando parênteses
+ Função f(x), onde f é o nome da função e x um parâmetro
+ No exemplo anterior print é o nome da função e a + b, o valor
  passado como parâmetro


Conceitos de variáveis e atribuição
===================================



+ Podemos usar o modo interativo também

+ As duas primeiras linhas não enviam nada para a tela, por isso,
  apenas o resultado da terceira linha é mostrado

.. codelens:: Example_6_2
    
    a = 2
    b = 3
    print(a+b)

Conceitos de variáveis e atribuição
===================================



+ Você pode estar se perguntando por que criamos duas variáveis, a e
  b, para somar dois números?
+ Poderíamos ter obtido o mesmo resultado de diversas formas




.. codelens:: Example_Calculation
    
    print(2+3)
    print(5)


Conceitos de variáveis e atribuição
===================================



+ Qual é a diferença entre o primeiro modo e os dois últimos?
+ No primeiro caso está incluído a lógica que usamos para obter o
  resultado
+ Deixamos assim explícito o algoritmo que usamos mentalmente para
  resolver esse problema
+ Nos dois últimos casos apenas ordenamos que o computador imprima
  algo concreto, sem deixar claro a lógica para chegar naquele resultado


Conceitos de variáveis e atribuição
===================================



#. 1.Seu salário atual é de R$ 6500 reais. Faça um programa que
   calcule o novo salário com um aumento de 5%
#. 2.Escreva um programa que exiba seu nome na tela
#. 3.Calcule a soma de três variáveis
#. 4.O que acontece se eu colocar textos nas três variáveis
   anteriores?


Nomes de variáveis
==================



+ Em Python, nomes de variáveis devem iniciar obrigatoriamente com uma
  letra ou caracter sublinhado (_)
+ Acentos são permitidos!
+ Exemplo de nomes válidos: preço, ação, salário, _x, ano_2011,
  salário_médio
+ Exemplo de nomes inválidos: salário médio, 3x, 1ª, @, $




Tipos de variáveis
==================


.. image:: img/TWP05_015.png
   :height: 8.507cm
   :width: 16.595cm
   :align: center
   :alt: 


Tipos de variáveis
==================



+ O conteúdo de uma variável possui um tipo
+ O tipo define a natureza dos dados que a variável armazena
+ Os tipos mais comuns são inteiros, números em ponto flutuante e
  strings (texto)
+ Além de poder armazenar números e letras, as variáveis em Python
  também armazenam valores como True e False


Variáveis numéricas
===================



+ Inteiros não possuem casas decimais: 42, -7
+ O tipo inteiro em Python é chamado int
+ Números em ponto flutuante possuem casa decimal: 1.0, 3.1415,
  1234.56
+ Note que 1.0, mesmo tendo zero na parte decimal, é um número em
  ponto flutuante
+ O tipo ponto flutuante em Python é chamado float




Exercícios
==========



#. 5.Indique o tipo dos seguintes valores: 5, 5.0, 4.3, -2, 100,
   1.333, “10”
#. 6.Experimente digitar type(x) onde x é cada um dos valores acima no
   Python interativo
#. 7.É possível calcular 2 elevado a um milhão?






Representação de valores numéricos
==================================



+ Internamente todos os números são representados no sistema binário
+ Esse sistema permite apenas os dígitos 0 e 1
+ Números em ponto flutuante podem não ter representação exata no
  sistema binário
+ Ex.: Digitando no interpretador 3*0.1 teremos como resposta
  0.30000000000000004




Variáveis do tipo lógico
========================



+ Podemos armazenar verdadeiro e falso
+ A variável se chama lógica ou booleana
+ Em Python escrevemos True e False
+ Observe que T e F são escritos em maiúsculas




Operadores relacionais
======================

.. table:: **Operadores relacionais**
   :widths: auto

   ======== ============== ==================
   Operador Operação       Símbolo matemático
   ======== ============== ==================
   ==       igual          =
   >        maior que      >
   <        menor que      <
   !=       diferente      <>
   >=       maior ou igual >=
   <=       menor ou igual <=
   ======== ============== ==================


Exemplos: 
=========


.. codelens:: Example_7
    
    a = 1
    b = 5
    c = 2
    d = 1
    print(a == b)
    print(b>a)
    print(a<b)
    print(a == d)
    print(b >= a)
    print(c <= b)
    print(d != a)
    print(d != b)

Exemplo importante
==================



+ >= ou <= para valores iguais




.. codelens:: Example_8
    
    print(5 >= 5)
    print(5 <= 5)


Exemplo
=======



+ Podemos usar operadores relacionais para inicializar variáveis do
  tipo lógico




.. codelens:: Example_9
    
    nota = 8
    média = 6
    aprovado = nota > média
    print(aprovado)


Operadores Lógicos
==================



+ Temos três operadores básicos: not, and e or
+ Operador not

.. codelens:: Example_10
    
    print(not True)
    print(not False)


Operadores Lógicos
==================



+ Operador and

.. codelens:: Example_11
    
    print(True and True)
    print(True and False)
    print(False and True)
    print(False and False)


Operadores Lógicos
==================



+ Operador or

.. codelens:: Example_12
    
    print(True or True)
    print(True or False)
    print(False or True)
    print(False or False)


Expressões Lógicas
==================



+ Podemos combinar os operadores lógicos em expressões lógicas
+ A ordem de avaliação é not > and > or




Exemplo
=======



+ A condição para empréstimo de compra de uma moto é salário maior que
  R$ 1.000,00 e idade acima de 18 anos. Verificar se o José pode pegar o
  empréstimo


.. codelens:: Example_13
    
    salário = 500.0
    idade = 20
    print(salário > 1000 and idade > 18)


Exemplo
=======



+ Verifique se um aluno que tirou média para exercícios programa 5.8 e
  média de provas 7 passou




.. codelens:: Example_14
    
    ep = 5.8
    p = 7
    aprovado = ep >= 6 and p >= 6
    print(aprovado)


Variáveis String
================



+ Armazenam cadeias de caracteres como nomes e textos em geral
+ Chamamos cadeias de caracteres uma sequência de símbolos como
  letras, números, sinais de pontuação, etc
+ Para diferenciar seus comandos de uma string utilizamos aspas no
  início e no final


.. codelens:: Example_15
    
    texto = "Joao e Maria comem pão"
    print(texto)



Variáveis String
================



+ Note que não há problema de utilizarmos espaços para separar as
  palavras
+ Uma string tem um tamanho associado
+ Podemos obter o tamanho através da função embutida len




.. codelens:: Example_16
    
    texto = "Joao e Maria comem pão"
    print(len(texto))

Variáveis String
================



+ Podemos acessar os caracteres da string utilizando um número inteiro
  para representar sua posição
+ Este número é chamado de índice e começamos a contar de zero
+ Acessamos o caracter fornecendo o índice entre colchetes ([ ])


.. codelens:: Example_17
    
    texto = "Joao e Maria comem pão"
    print(texto[0])


Variáveis String
================



+ Cuidado: não podemos acessar um índice maior que a quantidade de
  caracteres da string

.. codelens:: Example_18
    
    texto = "Joao e Maria comem pão"
    print(texto[22])


Operações com strings
=====================



+ As operações básicas são fatiamento, concatenação e composição
+ O fatiamento permite utilizar parte da string e a concatenação nada
  mais é do que juntar duas ou mais strings
+ A composição é muito utilizada em mensagens que enviamos para a tela
  e consiste em utilizar strings como modelos onde podemos inserir dados


Concatenação
============


.. codelens:: Example_19
    
    a = "Batatinha"
    b = "quando nasce"
    print(a+b)
    print(a*3)


Composição
==========



+ Juntar várias strings nem sempre é prático
+ Podemos usar marcadores para substituir valores dentro de strings




.. codelens:: Example_20
    
    idade = 20
    print("Joã tem %d anos"%idade)


Composição
==========



+ Os principais marcadores são %d para números inteiros, %s para
  strings e %f para números em ponto flutuante
+ %03d completa com zeros adicionais
+ %3d significa três posições sem zeros adicionais




.. codelens:: Example_21
    
    idade = 20
    print("[%03d]"%idade)
    print("[%3d]"%idade)


Composição
==========



+ %5.2f significa 5 caracteres no total e 2 casas decimais




.. codelens:: Example_22
    
    print("R$ %5.2f reais" %23)


Fatiamento
==========



+ Fatia do primeiro índice até o anterior do segundo


.. codelens:: Example_23
    
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


.. codelens:: Example_24
    
    x = "0123456789"
    print(x[:2])
    print(x[4:])
    print(x[4:-1])
    print(x[-4:-1])
    print(x[:])


Alteração de variáveis com o tempo
==================================



+ Um programa é executado linha por linha
+ Assim, as variáveis podem mudar com o tempo de execução do seu
  programa




.. codelens:: Example_25
    
    dívida = 0 
    compra = 100
    dívida = dívida + compra
    compra = 200
    dívida = dívida + compra
    compra = 300
    dívida = dívida + compra
    print(dívida)


Teste de mesa ou simulação
==========================



+ Entender que o valor das variáveis pode mudar durante a execução de
  um programa não é tão natural, mas é fundamental para a programação
+ Um programa não pode ser lido como um texto, mas cuidadosamente
  analisado linha a linha
+ Você pode treinar com lápis, borracha e papel


Teste de mesa ou simulação
==========================

.. table:: **Teste de mesa ou simulação**
   :widths: auto

   ====== ====== ====
   dívida compra Tela
   ====== ====== ====
   -0-    -100-    600
   -100-  -200-
   -300-    300
   600
   ====== ====== ====

Não tenha pressa para o teste de mesa
=====================================

.. image:: img/TWP05_035.jpeg
   :height: 13.6cm
   :width: 20.42cm
   :align: center
   :alt: 

Entrada de Dados
================



+ Até agora nossos programas trabalharam com valores conhecidos
+ Vamos começar a pegar os valores durante a execução dos programas e
  usar mais o modo de edição

.. activecode:: Input_Example_1
   :nocodelens:
   :stdin:

   nome = input("Digite o seu nome: ")
   print("Olá %s!" %nome)


Conversão da entrada de dados
=============================



+ A função input retorna apenas strings
+ Usamos int( ) para converter um valor para inteiro e float( ) para
  ponto flutuante


.. activecode:: Input_Example_2
   :nocodelens:
   :stdin:

   valor_unitario = float(input("Valor de uma rosquinha: "))
   n = int(input("Número de rosquinha: "))
   print("Valor total = %5.2f" %(n*valor_unitario))


Erro comum
==========



+ Esquecer algum parênteses. O erro vai dar na linha de baixo.


.. image:: img/TWP05_040.png
   :height: 6.846cm
   :width: 20.801cm
   :align: center
   :alt: 

Lista de Exercícios
===================


.. image:: img/TWP05_041.jpeg
   :height: 12.571cm
   :width: 9.411cm
   :align: center
   :alt: 

Links de Palestras em Vídeo:
============================

.. youtube:: 6La690qlH5w
      :height: 315
      :width: 560
      :align: center

.. youtube:: GpbkVHV8_64
      :height: 315
      :width: 560
      :align: center

.. youtube:: 9srd0tYvqv8
      :height: 315
      :width: 560
      :align: center

.. youtube:: d6XyTLkTYJo
      :height: 315
      :width: 560
      :align: center

.. youtube:: dhtEDVw5EFM
      :height: 315
      :width: 560
      :align: center

.. youtube:: WqiKtAynpI0
      :height: 315
      :width: 560
      :align: center

.. youtube:: nvuWPGKiVtU
      :height: 315
      :width: 560
      :align: center

.. youtube:: mubJU5dHyP8
      :height: 315
      :width: 560
      :align: center

.. youtube:: Bogfujj2jtk
      :height: 315
      :width: 560
      :align: center

.. disqus::
   :shortname: pyzombis
   :identifier: lecture1


