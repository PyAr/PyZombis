Events
================

.. raw:: html

   <script src='../_static/game.js'></script>

   <script type="module">
      window.gamejs.init();
   </script>

Event in pygame are handled through the pygame.event module.
The pygame.event.get() method gets all the events from the event queue. 
The event queue is a list of event objects that are sent to the program by the window manager 
or by the pygame program itself.
The pygame.event.get() method returns a list of pygame.event.Event objects.
Each Event object has an event type stored in the type attribute. 
The type attribute can be compared to the constants defined in the pygame.locals module.
The pygame.locals module defines constants for the event types.
The event types are used to determine what type of event has occurred. 
The event types are listed below:

+ KEYDOWN
+ KEYUP
+ MOUSEMOTION
+ MOUSEBUTTONDOWN
+ MOUSEBUTTONUP

KEYDOWN is an event type that is fired when a key is pressed down. like when you press a key on the keyboard.

KEYUP is an event type that is fired when a key is released. like when you lift your finger off a key.

.. activecode:: ac_l60_6_en
    :language: python3
    :python3_interpreter: brython

    from browser import load, timer, window
    load('../../_static/game.js')
    load('../../_static/pygame.brython.js')
    gjs = window.gamejs
    gjs.ready()

    ^^^^
    import pygame
    from pygame.locals import *

    # Pygame to show keyevents
    # green box moves with arrow keys

    # set up the colors
    BLACK = pygame.color.Color('black')
    WHITE = pygame.color.Color('white')
    GREEN = pygame.color.Color('green')
    
    screen = pygame.display.set_mode((400,300))
    screen.fill(WHITE)
    pygame.draw.rect(screen, GREEN, pygame.Rect(100, 100, 50, 50))

    blockX = 100
    blockY = 100

    def main():


        # keyboard event loop
        for event in pygame.event.get():
            if event.type == pygame.KEYDOWN:
                global blockX
                global blockY
                if event.key == pygame.K_LEFT:
                    blockX -= 10
                if event.key == pygame.K_RIGHT:
                    blockX += 10
                if event.key == pygame.K_UP:
                    blockY -= 10
                if event.key == pygame.K_DOWN:
                    blockY += 10
                
            
            screen.fill(WHITE)
            pygame.draw.rect(screen, GREEN, pygame.Rect(blockX, blockY, 50, 50))

            # draw the window onto the screen
            pygame.display.update()
                
            


    pygame.init()

    timer1 = timer.set_interval(main,80)

        

