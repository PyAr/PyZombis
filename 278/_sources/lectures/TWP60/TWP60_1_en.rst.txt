Pygame Hello World
==================

Bibliography
------------

.. image:: ../img/TWP60_001.jpeg
   :height: 11.25cm
   :width: 9cm
   :align: center
   :alt: 

+ `Book Link <http://inventwithpython.com/>`_ 


.. image:: ../img/TWP60_002.jpeg
   :height: 6cm
   :width: 5.97cm
   :align: center
   :alt: 

Pygame Hello World
------------------

.. activecode:: ac_l60_1
    :language: python3
    :python3_interpreter: brython

    from browser import load
    load('../../_static/game.js')
    load('../../_static/pygame.brython.js')

    ^^^^
    
    import pygame, sys
    from pygame.locals import *
    from pygame.color import *

    # set up pygame
    pygame.init()
 
    # set up the window
    windowSurface = pygame.display.set_mode((500,400))
 
    # set up the colors
    BLACK = Color(0,0,0)
    WHITE = Color(255,255,255)
    RED = Color(255,0,0)
    GREEN = Color(0,255,0)
    BLUE = Color(0,0,255)
 
    # set up fonts
    basicFont = pygame.font.SysFont('timesnewroman',30)

    # set up the text
    text = basicFont.render("Hello world!",False,BLACK,WHITE)
    textRect = text.get_rect()
 
    textRect.centerx = windowSurface.get_rect().centerx
    textRect.centery = windowSurface.get_rect().centery
 
    # draw the white background onto the surface
    windowSurface.fill(WHITE)
 
    # draw a green polygon onto the surface
    pygame.draw.polygon(windowSurface,GREEN,((146,0),(291,106),(236,277)))
 
    # draw some blue lines onto the surface
    pygame.draw.line(windowSurface,BLUE,(60,60),(120,60),4)
    pygame.draw.line(windowSurface,BLUE,(120,60),(60,120))
    pygame.draw.line(windowSurface,BLUE,(60,120),(120,120),4)
 
    # draw a blue circle onto the surface
    pygame.draw.circle(windowSurface,BLUE,(300,50),20,0)
    windowSurface.blit(text, textRect)


.. code-block:: python

   import pygame, sys
   from pygame.locals import *

   # set up pygame
   pygame.init()

   # set up the window
   windowSurface = pygame.display.set_mode((500,400),0,32)
   pygame.display.set_caption('Hello world!')

   # set up the colors
   BLACK = (0,0,0)
   WHITE = (255,255,255)
   RED = (255,0,0)
   GREEN = (0,255,0)
   BLUE = (0,0,255)

   # set up fonts
   basicFont = pygame.font.SysFont(None,48)

   # set up the text
   text = basicFont.render('Hello world!',True,WHITE,BLUE)
   textRect = text.get_rect()
   textRect.centerx = windowSurface.get_rect().centerx
   textRect.centery = windowSurface.get_rect().centery

   # draw the white background onto the surface
   windowSurface.fill(WHITE)

   # draw a green polygon onto the surface
   pygame.draw.polygon(windowSurface,GREEN,((146,0),(291,106),(236,277)))

   # draw some blue lines onto the surface
   pygame.draw.line(windowSurface,BLUE,(60,60),(120,60),4)
   pygame.draw.line(windowSurface,BLUE,(120,60),(60,120))
   pygame.draw.line(windowSurface,BLUE,(60,120),(120,120),4)

   # draw a blue circle onto the surface
   pygame.draw.circle(windowSurface,BLUE,(300,50),20,0)


.. image:: ../img/TWP60_005.png
   :height: 9.727cm
   :width: 10.2cm
   :align: center
   :alt: 


.. code-block:: python

   # get a pixel array of the surface
   pixArray = pygame.PixelArray(windowSurface)
   pixArray[480][380] = BLACK
   del pixArray

   # draw the text onto the surface 
   windowSurface.blit(text, textRect)

   # draw the window onto the screen 
   pygame.display.update()

   # run the game loop
   while True:
      for event in pygame.event.get():
         if event.type == QUIT:
            pygame.quit()
            sys.exit()

+ If I don't delete pixArray, it will remain in a blocked state
+ I delete pixArray to be able to handle the Surface object through the blit() method
+ The blit() only modifies the memory, but to update the screen I must call display.update()
+ Don't forget to call pygame.quit()