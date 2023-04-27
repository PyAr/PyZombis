Sounds and Sprites
==================


.. image:: ../img/TWP60_022.png
   :height: 6.164cm
   :width: 13.202cm
   :align: center
   :alt: 


.. image:: ../img/TWP60_023.png
   :height: 11.561cm
   :width: 13.546cm
   :align: center
   :alt: 


.. activecode:: ac_l60_5
    :language: python3
    :python3_interpreter: brython

    from browser import load, timer
    load('../../_static/game.js')
    load('../../_static/pygame.brython.js')

    ^^^^

    # Sprites

    import pygame
    import random
    
    # GLOBAL VARIABLES
    COLOR = pygame.color.Color(255, 100, 98)
    SURFACE_COLOR = pygame.color.Color(167, 255, 100)
    WIDTH = 500
    HEIGHT = 300
    
    # Object class
    class Sprite(pygame.sprite.Sprite):
       def __init__(self, color, height, width):
          super().__init__()
    
          self.image = pygame.Surface([width, height])
          self.image.fill(SURFACE_COLOR)
          self.image.set_colorkey(COLOR)
    
          pygame.draw.rect(self.image,color,pygame.Rect(0, 0, width, height))
    
          self.rect = self.image.get_rect()
    
    
    pygame.init()
    
    RED = pygame.color.Color(255, 0, 0)
    
    size = (WIDTH, HEIGHT)
    screen = pygame.display.set_mode(size)    
    all_sprites_list = pygame.sprite.Group()
    
    object_ = Sprite(RED, 50, 30)
    object_.rect.x = 50
    object_.rect.y = 50
    
    all_sprites_list.add(object_)
 
 
    
    def func():
       all_sprites_list.update()
       screen.fill(SURFACE_COLOR)
       all_sprites_list.draw(screen)
       pygame.display.flip()
       
       
    timer.set_interval(func,60)



.. activecode:: ac_l60_51
    :language: python3
    :python3_interpreter: brython

    from browser import load, timer
    load('../../_static/game.js')
    load('../../_static/pygame.brython.js')
    
    ^^^^

    # Sounds
    from pygame import mixer
    
    # Starting the mixer
    mixer.init()
    
    # Loading the song
    mixer.music.load("../../audio/Example04_Tour01_Line01.wav")
    
    # Setting the volume
    mixer.music.set_volume(0.7)
    
    # Start playing the song
    mixer.music.play()
  



.. code-block:: python


   # set up the block data structure
   player = pygame.Rect(300,100,40,40)
   playerImage = pygame.image.load('player.png')
   plyaerStretchedImage = pygame.transform.scale(playerImage(40,40))
   foodImage = pygame.image.load('cherry.png')
   foods = []
   for i in range(20):
      foods.append(pygame.Rect(random.randint(0,WINDOWWIDTH - 20),random.randint(0,WINDOWHEIGHT - 20),20,20))


+ Player.png appears in the desired scale
+ Generate 20 initial cherries randomly


.. code-block:: python

   # set up music

   pickUpSound = pygame.mixer.Sound('pickup.wav')
   pygame.mixer.music.load('background.mid')
   pygame.mixer.music.play(-1,0.0)
   musicPlaying = True


+ Use two channels, one for background music and one for each
  picked cherry


.. code-block:: python

   if event.key == ord('m'):
      if musicPlaying:
         pygame.mixer.music.stop()
      else:
         pygame.mixer.music.play(-1,0,0)
      musicPlaying = not musicPlaying

   if event.type == MOUSEBUTTONUP:
      foods.append(pygame.Rect(event.pos[0]-10,event.pos[1] - 10,20,20))



+ Key 'm' pauses or resumes background music and mouse click plants a
  cherry at clicked position


.. code-block:: python
   
   foodCounter += 1
   if foodCounter >= NEWFOOD:
      #add new food
      foodCounter = 0
      foods.append(pygame.Rect(random.randint(0,WINDOWWIDTH-20),random.randint(0,WINDOWHEIGHT - 20),20,20))


+ Cherries are randomly generated with each pass in the main loop.
  principal


.. code-block:: python

   # check if the block has intersected with any food squares.
   for food in foods[:]:
      if player.colliderect(food):
         foods.remove(food)
         player = pygame.Rect(player.left,player.top,player.right,player.down)
         playerStretchedImage = pygame.transform.scale(player.left,player.top,player.right,player.down)
         if musicPlaying:
            pickUpSound.play()

   # draw the food
   for food in foods:
      windowSurface.blit(foodImage,food)



+ Remove "eaten" cherries, of course bulking up!
+ All blits appear in the update
+ FPS == Frames Per Second
+ Variable that controls the mainClock.tick()
+ The monsters have a minimum and maximum size and their speed is
  controlled

.. code-block:: python

   if baddieAddCounter == ADDNEWBADDIERATE:
      baddieAddCounter = 0
      baddieSize = random.randint(BADDIEMINSIZE,BADDIEMAXSIZE)
      newBaddie = {'rect':pygame.Rect(random.randint(0,WINDOWWIDTH-baddieSize),0-baddieSize,baddieSize,baddieSize),'speed':random.randint(BADDIEMINSPEED,BADDIEMAXSPEED),'surface':pygame.transform.scale(baddieImage,(baddieSize,baddieSize))}

      baddies.append(newBaddie)