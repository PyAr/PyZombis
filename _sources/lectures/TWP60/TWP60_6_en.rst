Keyboard Events
================

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

    from browser import load, timer
    load('../../_static/game.js')
    load('../../_static/pygame.brython.js')

    ^^^^
    import pygame
    from pygame.locals import *

    # Pygame to show keyevents
    # green box moves with arrow keys

    # set up the colors
    BLACK = pygame.color.Color('black')
    WHITE = pygame.color.Color('white')
    GREEN = pygame.color.Color('green')
    
    screen = pygame.display.set_mode((250, 250))
    screen.fill(WHITE)

    def main():
        # set up the block
        block = pygame.Rect(100, 100, 50, 50)

        # draw the white background onto the surface
        

        # draw a green box onto the surface
        pygame.draw.rect(screen, GREEN, block)

        # keyboard event loop
        for event in pygame.event.get():
            if event.type == pygame.KEYDOWN:
                print('key down')
                if event.key == pygame.K_LEFT:
                    print('left arrow pressed')
                    block.left -= 10
                if event.key == pygame.K_RIGHT:
                    print('right arrow pressed')
                    block.left += 10
                if event.key == pygame.K_UP:
                    print('up arrow pressed')
                    block.top -= 10
                if event.key == pygame.K_DOWN:
                    print('down arrow pressed')
                    block.top += 10
                
            

            # draw the window onto the screen
            pygame.display.update()

    pygame.init()

    timer1 = timer.set_interval(main,80)

        

