Pygame Animation
================

.. image:: ../img/TWP60_007.png
   :height: 11.826cm
   :width: 11.217cm
   :align: center
   :alt:

.. image:: ../img/TWP60_008.png
   :height: 11.747cm
   :width: 10.503cm
   :align: center
   :alt:

.. activecode:: ac_l60_2
    :language: python3
    :python3_interpreter: brython

    from browser import load, document,timer
    load('../../_static/game.js')
    load('../../_static/pygame.brython.js')

    ^^^^

    import pygame, sys, time
    from pygame.locals import *
    from pygame.color import *

    # set up the colors
    BLACK = Color(0,0,0)
    WHITE = Color(255,255,255)
    RED = Color(255,0,0)
    GREEN = Color(0,255,0)
    BLUE = Color(0,0,255)

    # set up pygame
    pygame.init()

    # set up the window
    WINDOWWIDTH = 500
    WINDOWHEIGHT = 300
    windowSurface = pygame.display.set_mode((WINDOWWIDTH,WINDOWHEIGHT),0,32)

    # set up the direction variables
    DOWNLEFT = 1
    DOWNRIGHT = 3
    UPLEFT = 7
    UPRIGHT = 9

    MOVESPEED = 4

    # set up the block data structure
    b1 = {'rect':pygame.Rect(300,80,50,100),'color':RED,'dir':UPRIGHT}
    b2 = {'rect':pygame.Rect(200,200,20,20),'color':BLUE,'dir':UPLEFT}
    b3 = {'rect':pygame.Rect(100,150,60,60),'color':GREEN,'dir':DOWNLEFT}
    blocks = [b1,b2,b3]

    def draw():
       # draw the black background onto the surface
       windowSurface.fill(BLACK)

       for b in blocks:
          # move the block data structure
          if b['dir'] == DOWNLEFT:
             b['rect'].left -= MOVESPEED
             b['rect'].top += MOVESPEED

          if b['dir'] == DOWNRIGHT:
             b['rect'].left += MOVESPEED
             b['rect'].top += MOVESPEED

          if b['dir'] == UPLEFT:
             b['rect'].left -= MOVESPEED
             b['rect'].top -= MOVESPEED

          if b['dir'] == UPRIGHT:
             b['rect'].left += MOVESPEED
             b['rect'].top -= MOVESPEED

          # check if the block has moved out of the window
          if b['rect'].top < 0:
             # block has moved past the top
             if b['dir'] == UPLEFT:
                b['dir'] = DOWNLEFT
                b['color'] = RED
             if b['dir'] == UPRIGHT:
                b['dir'] = DOWNRIGHT
                b['color'] = RED

          if b['rect'].bottom > WINDOWHEIGHT:
             # block has moved past the bottom
             if b['dir'] == DOWNLEFT:
                b['dir'] = UPLEFT
                b['color'] = WHITE
             if b['dir'] == DOWNRIGHT:
                b['dir'] = UPRIGHT
                b['color'] = WHITE

          if b['rect'].left < 0:
             # block has moved past the left side
             if b['dir'] == DOWNLEFT:
                b['dir'] = DOWNRIGHT
                b['color'] = GREEN
             if b['dir'] == UPLEFT:
                b['dir'] = UPRIGHT
                b['color'] = GREEN

          if b['rect'].right > WINDOWWIDTH:
             # block has moved past the right side
             if b['dir'] == DOWNRIGHT:
                b['dir'] = DOWNLEFT
                b['color'] = BLUE
             if b['dir'] == UPRIGHT:
                b['dir'] = UPLEFT
                b['color'] = BLUE

          # draw the block onto the surface
          pygame.draw.rect(windowSurface, b['color'],b['rect'])

       # draw the window onto the screen
       pygame.display.update()

    timer.set_interval(draw,50)


.. code-block:: python

   import pygame, sys , time
   from pygame.locals import *

   # set up pygame
   pygame.init()

   # set up the window
   WINDOWWIDTH = 400
   WINDOWHEIGHT = 400
   windowSurface = pygame.display.set_mode((WINDOWWIDNTH,WINDOWHEIGHT),0,32)
   pygame.display.set_caption('Animation')

   # set up the direction variables
   DOWNLEFT = 1
   DOWNRIGHT = 3
   UPLEFT = 7
   UPRIGHT = 9

   MOVESPEED = 4


.. code-block:: python

   # set up the block data structure
   b1 = {'rect':pygame.Rect(300,80,50,100),'color':RED,'dir':UPRIGHT}
   b2 = {'rect':pygame.Rect(200,200,20,20),'color':BLUE,'dir':UPLEFT}
   b3 = {'rect':pygame.Rect(100,150,60,60),'color':GREEN,'dir':DOWNLEFT}
   blocks = [b1,b2,b3]

+ Note that in the b1, b2, and b3 dictionaries I have embedded objects and directions
+ Create a list of blocks with the three dictionaries

.. code-block:: python

   while True:
      # check for the QUIT event
      for event in pygame.event.get():
         if event.type == QUIT:
            pygame.quit()
            sys.exit()

      # draw the black background onto the surface
      windowSurface.fill(BLACK)

      for b in blocks:
         # move the block data structure
         if b['dir'] == DOWNLEFT:
            b['rect'].left -= MOVESPEED
            b['rect'].top += MOVESPEED

         if b['dir'] == DOWNRIGHT:
            b['rect'].left += MOVESPEED
            b['rect'].top += MOVESPEED

         # check if the block has moved out of the window
         if b['rect'].top < 0:
            # block has moved past the top
            if b['dir'] == UPLEFT:
               b['dir'] = DOWNLEFT
            if b['dir'] == UPRIGHT:
               b['dir'] = DOWNRIGHT

         if b['rect'].bottom > WINDOWHEIGHT:
            # block has moved past the bottom
            if b['dir'] == DOWNLEFT:
               b['dir'] = UPLEFT
            if b['dir'] == DOWNRIGHT:
               b['dir'] = UPRIGHT

         if b['rect'].left < 0:
            # block has moved past the left side
            if b['dir'] == DOWNLEFT:
               b['dir'] = DOWNRIGHT
            if b['dir'] == UPLEFT:
               b['dir'] = UPRIGHT

         if b['rect'].right > WINDOWWIDTH:
            # block has moved past the right side
            if b['dir'] == DOWNRIGHT:
               b['dir'] = DOWNLEFT
            if b['dir'] == UPRIGHT:
               b['dir'] = UPLEFT

         # draw the block onto the surface
         pygame.draw.rect(windowSurface, b['color'],b['rect'])

      # draw the window onto the screen
      pygame.display.update()
      time.sleep(0.02)