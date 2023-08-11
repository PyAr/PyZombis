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

.. activecode:: ac_l60_6_1_en
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

        
MOUSEMOTION is an event type that is fired when the mouse is moved.

MOUSEBUTTONDOWN is an event type that is fired when a mouse button is pressed down.

MOUSEBUTTONUP is an event type that is fired when a mouse button is released.

.. activecode:: ac_l60_6_2_en
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

    # Pygame to show mouse events
    # If mouse is moving, we will display the text "Mouse is moving"
    # If mouse is clicked, we will display the text "Mouse is clicked"
    # If mouse is released, we will display the text "Mouse is released"
    # We will also display the mouse position and which button is clicked

    BLACK = pygame.color.Color('black')
    WHITE = pygame.color.Color('white')
    GREEN = pygame.color.Color('green')
    
    screen = pygame.display.set_mode((800,800))
    screen.fill(GREEN)

    font=pygame.font.SysFont('timesnewroman',30)
    left_key = font.render('Left mouse button clicked',True,BLACK)
    right_key = font.render('Right mouse button clicked',True,BLACK)
    mouse = font.render('Mouse is moving',True,BLACK)
    button_down = font.render('Mouse button is pressed down',True,BLACK)
    mouse_pos = font.render('Mouse position is : ',True,BLACK)

    def main():

        # mouse event loop
        for event in pygame.event.get():
            screen.fill(GREEN)
            if event.type == pygame.MOUSEMOTION:
                screen.blit(mouse,(100,100))
                mouse_position = pygame.mouse.get_pos()
                screen.blit(mouse_pos,(100,200))
                screen.blit(font.render(str(mouse_position),True,BLACK),(400,200))
            if event.type == pygame.MOUSEBUTTONUP:
                mouse_keys = pygame.mouse.get_pressed()
                if mouse_keys[0]:
                    screen.blit(left_key,(100,100))
                if mouse_keys[2]:
                    screen.blit(right_key,(100,100))
            else :
                if event.type == pygame.MOUSEBUTTONDOWN:
                    screen.blit(button_down,(100,100))
            
            pygame.display.update()

    pygame.init()

    timer1 = timer.set_interval(main,80)

