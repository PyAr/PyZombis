Pygame Collision Detection
==========================

.. image:: ../img/TWP60_014.png
   :height: 3.327in
   :width: 4.772in
   :align: center
   :alt:

.. image:: ../img/TWP60_015.png
   :height: 2.904in
   :width: 4.427in
   :align: center
   :alt:

.. code-block:: python

   def doRectsOverlap(rect1,rect2):
      for a,b in [(rect1,rect2),(rect2,rect1)]:
         # Check if a's corners are inside b
         if ((isPointInsideRect(a.left,a.top,b)) or (isPointInsideRect(a.left,a.bottom,b)) or (isPointInsideRect(a.right,a.top,b)) or (isPointInsideRect(a.right,a.bottom,b))):
            return True

      return False

   def isPointInsideRect(x,y,rect):
      if (x > rect.left) and (x < rect.right) and (y > rect.top) and (y < rect.bottom):
         return True
      else:
         return False


.. activecode:: ac_l60_3_en
    :language: python3
    :python3_interpreter: brython

    from browser import load, document,timer
    load('../../_static/game.js')
    load('../../_static/pygame.brython.js')

    ^^^^
    import pygame, sys , time
    from pygame.locals import *
    from pygame.color import *
    import random
 
    #set up the colors
    BLACK = Color(0,0,0)
    WHITE = Color(255,255,255)
    RED = Color(255,0,0)
    GREEN = Color(0,255,0)
    BLUE = Color(0,0,255)
    LIGHT_BLUE= Color(153,255,255)
    # set up pygame
    pygame.init()
 
    #set up fonts
    rectFont = pygame.font.SysFont('timesnewroman',10)
    pointFont = pygame.font.SysFont('timesnewroman',10)
 
    # set up the window
    WINDOWWIDTH = 560
    WINDOWHEIGHT = 350
    windowSurface = pygame.display.set_mode((WINDOWWIDTH,WINDOWHEIGHT),0,32)
 
    def doRectsOverlap(rect1,rect2):
       for a,b in [(rect1,rect2),(rect2,rect1)]:
          # Check if a's corners are inside b
          if ((isPointInsideRect(a.left,a.top,b)) or (isPointInsideRect(a.left,a.bottom,b)) or (isPointInsideRect(a.right,a.top,b)) or (isPointInsideRect(a.right,a.bottom,b))):
             return True
 
       return False
 
    def isPointInsideRect(x,y,rect):
       if (x > rect.left) and (x < rect.right) and (y > rect.top) and (y < rect.bottom):
          return True
       else:
          return False
          
          
    #define 4 rectangles
    r1 = {'rect':pygame.Rect(300,80,50,50),'name':"Rect1",'color':RED}
    r2 = {'rect':pygame.Rect(250,200,60,60),'name':"Rect2",'color':GREEN}
    r3 = {'rect':pygame.Rect(100,150,80,40),'name':"Rect3",'color':BLUE}
    r4 = {'rect':pygame.Rect(200,150,60,70),'name':"Rect4",'color':LIGHT_BLUE}
    rects = [r1,r2,r3,r4]
 
    windowSurface.fill(BLACK)
    #draw rectangles
    for r in rects:
       pygame.draw.rect(windowSurface, r['color'], r['rect'])
       text = rectFont.render(r['name'], False, BLACK, r['color'])
       textRect = text.get_rect()
       textRect.centerx = r['rect'].left + (r['rect'].width)//2
       textRect.centery = r['rect'].top + (r['rect'].height)//2   
       windowSurface.blit(text, textRect)
 
    #draw random points
    point_size = 5
    num_points = 10
    points = []
    for i in range(num_points):
       points.append({'pos':(random.randint(0,WINDOWWIDTH - point_size*10),random.randint(0,WINDOWHEIGHT - point_size*10)),'name':("P"+str(i))})
       
    for p in points:
       pygame.draw.circle(windowSurface, WHITE, p['pos'], point_size, 0)
       text = pointFont.render(p['name'], False, WHITE, BLACK)
       textRect = text.get_rect()
       textRect.centerx = p['pos'][0]
       textRect.centery =  p['pos'][1] - (point_size +5)
       windowSurface.blit(text, textRect)
       
    #check overlap between rectangles
    rects_copy = rects.copy()
    for rect1 in rects:
       for rect2 in rects_copy:
          if(rect1['name']!=rect2['name']):
                if(doRectsOverlap(rect1['rect'],rect2['rect'])):
                   print("{} and {} are overlapping.\n".format(rect1['name'],rect2['name']))
       rects_copy.remove(rect1)
                   
    # check if any point is inside a rectangles
    for p in points:
       for rect in rects:
          if(isPointInsideRect(p['pos'][0], p['pos'][1], rect['rect'])):
                print("Point {} is inside rectangle {}".format(p['name'], rect['name']))