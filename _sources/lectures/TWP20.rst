====================
For Funções e Random
====================


.. image:: img/TWP10_001.jpeg
   :height: 14.925cm
   :width: 9.258cm
   :align: center
   :alt: 


for == while enrustido
======================

+ Códigos equivalentes : for durante o dia vira while á noite.


.. codelens:: Example6_1
         
        for letra in 'aeiou':
         print(letra)

.. codelens:: Example6_2
         
        texto = 'aeiou'
        k = 0
        while k < len(texto):
         letra = texto[k]
         print(letra)
         k = k+1


for == while enrustido
======================

+ Códigos equivalentes :

.. codelens:: Example6_3
         
        for i in range(5):
         print(i)


.. codelens:: Example6_4
         
         lista = list(range(5))
         k = 0
         while k < len(lista):
            i = lista[k]
            print(i)
            k = k + 1


for == while enrustido
======================

+ Códigos equivalentes :


.. codelens:: Example6_5
         
        for x in ['cpbr6',42,3.14]:
         print(x)

.. codelens:: Example6_6
         
        lista = ['cpbr6',42,3.14]
        k = 0
        while k < len(lista):
         x = lista[k]
         print(x)
         k = k + 1


def functions
=============

+ Aprendemos algumas funções do Python: len, int, float, print e input
+ Agora iremos criar as nossas próprias funções
+ Utilizo def para definir a função e return para devolver algum valor
+ Existem funções que não retornam nada


.. codelens:: Example6_7
         
  def epar(x):
    return (x%2 == 0)

  print(epar(13))
  print(epar(12))


+ Esta função retorna se o parâmetro x é par
+ Observe que diferentemente do que já vimos até agora, essas linhas
  não serão executadas imediatamente
+ Preciso chamar a função para executá-la



Funções
=======


+ Defina uma função fatorial


.. codelens:: Example6_8
         
        def fat(n):
         f = 1
         while n > 0:
            f = f*n
            n = n - 1
         return f

        for i in range(5):
         print(fat(i))

 

Variáveis locais e globais
==========================

+ Nota: O escopo de a é diferente nos dois casos. Em outras palavras, as duas variáveis ​​'a' são diferentes.


.. codelens:: Example6_9
         
        a = 5 
        def muda_e_imprime():
         a = 7
         print('a dentro da função : %d' %a)
        print('a antes de mudar: %d' %a)
        muda_e_imprime()
        print('a depois de mudar: %d' %a)



Variáveis locais e globais
==========================

+ Nesse caso, usamos a palavra-chave global. Então, a variável 'a' dentro da função é a mesma que a variável definida acima, ou seja, é a variável global.

.. codelens:: Example6_10
         
        a = 5 
        def muda_e_imprime():
         a = 7
         print('a dentro da função : %d' %a)
        print('a antes de mudar: %d' %a)
        muda_e_imprime()
        print('a depois de mudar: %d' %a)



+ Observe a diferença nas saídas dos Exemplos 9 e 10.


Números aleatórios
==================


.. codelens:: Example6_11
         
        import random

        print(random.randint(1,100))
        print(random.randint(1,100))
        alunos = ['José','João','Pedro','Lucas','Tiago']
        print(random.choice(alunos))
        print(random.choice(alunos))
        random.shuffle(alunos)
        print(alunos)
        random.shuffle(alunos)
        print(alunos)


Números aleatórios
==================



+ Defina uma função “embaralha” que retorne as letras de uma string
  misturadas. Dica: utilize list( ) para converter sua string em lista.


.. codelens:: Example6_12
         
        def embaralha(s):

         import random
         lista = list(s)
         random.shuffle(lista)
         return ''.join(lista)

        print(embaralha('palmeiras'))
        print(embaralha('palmeiras'))



Números aleatórios
==================



+ Gere uma lista de 15 inteiros aleatórios entre 10 e 100


.. codelens:: Example6_13
         
        import random
        lista = []
        for k in range(15):
         lista.append(random.randint(10,100))
        print(lista)


Números aleatórios
==================



+ Gere uma lista de 15 inteiros aleatórios entre 10 e 100 que sejam
  distintos entre si




.. codelens:: Example6_14
         
        import random
        lista = []
        while len(lista) < 15:
         x = random.randint(10,100)
         if x not in lista:
            lista.append(x)
        lista.sort()
        print(lista)



Lista 5
=======


.. image:: img/TWP05_041.jpeg
   :height: 12.571cm
   :width: 9.411cm
   :align: center
   :alt: 

+ “A vida é como andar de bicicleta. Para manter o equilíbrio, é preciso se manter em movimento”. - Einstein.

Links de Palestras em Vídeo:
============================

.. youtube:: SWz-TDaVOjU
      :height: 315
      :width: 560
      :align: center

.. youtube:: hkmTg3ambZA
      :height: 315
      :width: 560
      :align: center

.. youtube:: MtTqwE7xFeA
      :height: 315
      :width: 560
      :align: center

.. youtube:: lkF7fwwdn74
      :height: 315
      :width: 560
      :align: center

.. youtube:: nWgRu1S0T4s
      :height: 315
      :width: 560
      :align: center

.. youtube:: HhwANFfzIMk
      :height: 315
      :width: 560
      :align: center

.. youtube:: m-JiN6pMY34
      :height: 315
      :width: 560
      :align: center

.. youtube:: -dapAyrls9o
      :height: 315
      :width: 560
      :align: center

.. youtube:: EetzrvvQIKQ
      :height: 315
      :width: 560
      :align: center

.. disqus::
   :shortname: pyzombis
   :identifier: lecture6



