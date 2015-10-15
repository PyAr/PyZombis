Pygame
======


.. image:: img/TWP58_001.jpeg
   :height: 12.501cm
   :width: 7.754cm
   :alt: 


<número>

Bibliografia
============


.. image:: img/TWP60_001.jpeg
   :height: 11.25cm
   :width: 9cm
   :alt: 


.. image:: img/TWP60_002.jpeg
   :height: 6cm
   :width: 5.97cm
   :alt: 


Pygame Hello World
==================



+ Não temos entrada com input()
+ Entrada pelo mouse e teclado via eventos
+ Pygame usa tuplas ao invés de listas
+ Tuplas são listas imutáveis, por isso seu processamento é mais
  eficiente
+ Tuplas são listas com parentêses no lugar de colchetes
+ Ex.: (255, 255, 255)




Pygame Hello World
==================


.. image:: img/TWP60_003.png
   :height: 12.571cm
   :width: 19.702cm
   :alt: 


Pygame Hello World
==================



+ pygame.locals inclui constantes como QUIT ou K_ESCAPE
+ Utilizamos sys.exit() para sair “suavemente” do programa




Pygame Hello World
==================


.. image:: img/TWP60_004.png
   :height: 11.495cm
   :width: 22.859cm
   :alt: 


Pygame Hello World
==================


.. image:: img/TWP60_005.png
   :height: 9.727cm
   :width: 10.2cm
   :alt: 


Pygame Hello World
==================


.. image:: img/TWP60_006.png
   :height: 12.571cm
   :width: 17.06cm
   :alt: 


Pygame Hello World
==================



+ Se eu não apagar o pixArray ele ficará no estado locked
+ Apago o pixArray para poder manusear o objeto Surface via método
  blit()
+ O blit() apenas modifica a memória, mas para atualizar a tela devo
  dar display.update()
+ Não esqueça de dar pygame.quit()


Pygame Animação
===============


.. image:: img/TWP60_007.png
   :height: 11.826cm
   :width: 11.217cm
   :alt: 


Pygame Animação
===============


.. image:: img/TWP60_008.png
   :height: 11.747cm
   :width: 10.503cm
   :alt: 


Pygame Animação
===============


.. image:: img/TWP60_009.png
   :height: 12.571cm
   :width: 18.123cm
   :alt: 


Pygame Animação
===============









+ Note que nos dicionários b1, b2 e b3 tenho objetos e direções
  embutidos
+ Monto uma lista blocks com os três dicionários


.. image:: img/TWP60_010.png
   :height: 3.199cm
   :width: 23.804cm
   :alt: 


Pygame Animação
===============


.. image:: img/TWP60_011.png
   :height: 12.571cm
   :width: 18.03cm
   :alt: 


Pygame Animação
===============


.. image:: img/TWP60_012.png
   :height: 12.571cm
   :width: 17.166cm
   :alt: 


Pygame Animação
===============


.. image:: img/TWP60_013.png
   :height: 9.623cm
   :width: 22.859cm
   :alt: 


Pygame Collision Detection
==========================


.. image:: img/TWP60_014.png
   :height: 8.492cm
   :width: 12.117cm
   :alt: 


Pygame Collision Detection
==========================


.. image:: img/TWP60_015.png
   :height: 7.381cm
   :width: 11.244cm
   :alt: 


Pygame Collision Detection
==========================


.. image:: img/TWP60_016.png
   :height: 12.571cm
   :width: 21.284cm
   :alt: 


Pygame Input
============


.. image:: img/TWP60_017.png
   :height: 11.614cm
   :width: 11.085cm
   :alt: 


Pygame Input
============


.. image:: img/TWP60_018.png
   :height: 10.252cm
   :width: 22.859cm
   :alt: 


Pygame Input
============


.. image:: img/TWP60_019.png
   :height: 12.571cm
   :width: 17.591cm
   :alt: 


Pygame Input
============


.. image:: img/TWP60_020.png
   :height: 12.122cm
   :width: 22.859cm
   :alt: 


Pygame Input
============


.. image:: img/TWP60_021.png
   :height: 11.27cm
   :width: 22.859cm
   :alt: 


Sounds and Sprites
==================


.. image:: img/TWP60_022.png
   :height: 6.164cm
   :width: 13.202cm
   :alt: 


Sounds and Sprites
==================


.. image:: img/TWP60_023.png
   :height: 11.561cm
   :width: 13.546cm
   :alt: 


Sounds and Sprites
==================











+ Player.png aparece na escala desejada
+ Gero randomicamente 20 cerejas iniciais


.. image:: img/TWP60_024.png
   :height: 6cm
   :width: 23.915cm
   :alt: 


Sounds and Sprites
==================









+ Utilizo dois canais, um para a música de fundo e outro para cada
  cereja apanhada


.. image:: img/TWP60_025.png
   :height: 4.55cm
   :width: 20.187cm
   :alt: 


Sounds and Sprites
==================













+ Tecla ‘m’ pausa o fundo musical e o click do mouse planta uma
  cerejinha na posição clicada


.. image:: img/TWP60_026.png
   :height: 8.04cm
   :width: 23.05cm
   :alt: 


Sounds and Sprites
==================









+ As cerejas são geradas aleatoriamente a cada passagem no looping
  principal


.. image:: img/TWP60_027.png
   :height: 5.189cm
   :width: 22.9cm
   :alt: 


Sounds and Sprites
==================















+ Removo cerejas “comidas”, claro engordando!
+ Todas as “blitadas” aparecem no update


.. image:: img/TWP60_028.png
   :height: 9.223cm
   :width: 22.602cm
   :alt: 


Sounds and Sprites
==================



+ FPS == Frames Per Second
+ Variável que controla o mainClock.tick()
+ Os monstrinhos possuem um tamanho mínimo e máximo e sua velocidade é
  controlada




Sounds and Sprites
==================
















.. image:: img/TWP60_029.png
   :height: 8.761cm
   :width: 22.91cm
   :alt: 




