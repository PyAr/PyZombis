================================
Reto Pygame -Tirador de zombies
================================

Este reto consiste en modificar el siguiente programa en Python para hacerlo más realista:

#. los zombis no caen del cielo, deberían moverse de derecha a izquierda
#. los zombis en general caminan en linea recta
#. los disparos deberían ir de izquierda a derecha
#. se debería poder disparar repetidas veces (mas seguido)

Cuando este terminado comparta el código con otros mentores y compañeros para una evaluación grupal.

.. raw:: html

   <script src='../_static/game.js'></script>

   <script type="module">
      window.gamejs.init();
      window.gamejs.image.preload(["../_static/zomb.png", "../_static/bg2.jpg", '../_static/human.png', '../_static/BlueBar1.jpg',
 '../_static/bullet.png', '../_static/blast.png',  "../_static/bg1.jpg"]);
   </script>


.. activecode:: ac_r03_1
    :language: python3
    :python3_interpreter: brython

    from browser import load, timer, window
    load('../_static/game.js')
    load('../_static/pygame.brython.js')
    gjs = window.gamejs
    gjs.image.preload(["../_static/zomb.png", "../_static/bg2.jpg", '../_static/human.png', '../_static/BlueBar1.jpg',\
    '../_static/bullet.png', '../_static/blast.png',  "../_static/bg1.jpg"])
    gjs.ready()

    ^^^^
    import pygame
    from pygame.color import *
    from pygame.locals import *
    import random
    import math

    timer1=None

    class Chaser:
        def __init__(self):
            
            self.running=True
            #----shooter----<
            self.shooterX = 235
            self.shooterY = 500
            self.shooterX1 = 0
            self.shooterY1 = 0
            #----Enemy-------<
            self.enemyImg = []
            self.enemyX = [] 
            self.enemyY = []
            self.enemyX1 = []
            self.enemyY1 = []
            self.enemyBullet = []
            self.enemyBulY=0
            self.bulY1=[]
            self.enemybulX=0
            #---bullet----<
            self.bulletY = 500
            self.bulletX = 0
            self.bulletX1 = 0
            self.bulletY1 = 30
            self.bulletState = 'Ready'
            #-----score----<
            self.score_value=0
            self.j=0


        def score(self, scr):
            font=pygame.font.SysFont('timesnewroman',30)
            score=font.render('Score: '+ str(self.score_value),True, Color(255,255,255),Color(200,100,100))
            scr.blit(score,(10,10))      
        
    
        def shooter(self, x, y, scr):
            if x <= 0:
                x = 0
            elif x >= 500:
                x = 500
            elif y <= 400:
                y=400
            elif y >= 550:
                y=550
            scr.blit(pygame.image.load('../_static/human.png'), (x, y))

        def enemy(self):
            for i in range(8):
                self.enemyImg.append(pygame.image.load('../_static/zomb.png'))
                self.enemyX.append(random.randint(0, 500))
                self.enemyY.append(random.randint(5, 60))
                self.enemyX1.append(10)
                self.enemyY1.append(40)
                self.bulY1.append(2)
                self.enemyBullet.append(pygame.image.load('../_static/BlueBar1.jpg')) 

        def bullet(self, x, y, scr):
            self.bulletState='fire'
            scr.blit(pygame.image.load('../_static/bullet.png'), (x+8, y))

        def collision_e_b(self, X, Y, i):
            dist=math.sqrt((self.enemyX[i]-X)**2+(self.enemyY[i]-Y)**2)
            if dist <=30: return True
            else: return False

        def collision_E_S(self, x, y, i):
            dist = math.sqrt((x-self.enemyX[i])**2+(y-self.enemyY[i])**2)
            if dist <= 35: return True
            else: return False
        
        def collision_enemyBul_S(self,enemybulX,enemyBulY,shooterX,shooterY):
            dist=math.sqrt((enemybulX-shooterX)**2+(enemyBulY-shooterY)**2)
            if dist <=24 : 
                scr.blit(pygame.image.load('../_static/blast.png'),(self.shooterX,self.shooterY))
                return True
            else: return False


    def over():
        scr.blit(pygame.image.load('../_static/bg2.jpg'),(0,0))
        scr.blit(game,(50,int(600/2)))                      
        pygame.display.update()

    def over_helper():
        global timer1
        timer.clear_interval(timer1)
        timer1 = None
        over() 



    scr = pygame.display.set_mode((550, 600))
    font=pygame.font.SysFont('timesnewroman',30)
    game=font.render('Game Over -\n Press run to Play Again',True, Color(230,220,170))
    p1= Chaser()
    p1.enemy()
    p1.enemybulX=p1.enemyX[random.randint(0,7)]


    def func():    
        scr.blit(pygame.image.load('../_static/bg2.jpg'),(0,0))
        scr.blit(pygame.image.load('../_static/BlueBar1.jpg'),(p1.enemybulX+15,p1.enemyBulY+12))
        p1.enemyBulY+=24

        if p1.enemyBulY>=600:
            p1.enemyBulY=p1.enemyY[random.randint(0,7)]  
            p1.enemybulX=p1.enemyX[random.randint(0,7)]

        for event in pygame.event.get():        
            #---Shooter Movement------<
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_LEFT:
                    p1.shooterX1 -= 15
                if event.key == pygame.K_RIGHT:
                    p1.shooterX1 += 15
                if event.key == pygame.K_UP:
                    p1.shooterY1-=15
                if event.key == pygame.K_DOWN:
                    p1.shooterY1+=15
                if event.key == pygame.K_SPACE:
                    if p1.bulletState == 'Ready':
                        p1.bulletX = p1.shooterX
                        p1.bulletY = p1.shooterY
                        p1.bullet(p1.bulletX, p1.bulletY, scr)
            if event.type == pygame.KEYUP:
                p1.shooterX1 = 0
                p1.shooterY1 = 0 
        p1.shooterX += p1.shooterX1
        p1.shooterY += p1.shooterY1
        p1.shooter(p1.shooterX, p1.shooterY, scr)

        # ------Enemy-----<
        for i in range(8):
            p1.enemyX[i] += p1.enemyX1[i]
            if p1.enemyX[i] <= 0:
                p1.enemyX1[i] = 14
                p1.enemyY[i] += p1.enemyY1[i]
            elif p1.enemyX[i] >= 500:
                p1.enemyX1[i] =- 14
                p1.enemyY[i] += p1.enemyY1[i]
            scr.blit(p1.enemyImg[i], (p1.enemyX[i], p1.enemyY[i]))

            #-------collision of bullet and enemy--------<
            col = p1.collision_e_b(p1.bulletX, p1.bulletY, i)
            if p1.bulletState == 'fire':
                if col:
                    scr.blit(pygame.image.load('../_static/blast.png'),(p1.bulletX,p1.bulletY))
                    p1.score_value += 1
                    p1.bulletY = 500
                    p1.bulletState='Ready'
                    p1.enemyX[i] = random.randint(0,500)
                    p1.enemyY[i] = random.randint(5,60)

            #-------collision of Shooter and enemy--------<
            col2 = p1.collision_E_S(p1.shooterX, p1.shooterY, i)
            if col2:
                # scr.blit(pygame.image.load('Icons\\bgover.png'),(550,600))
                scr.blit(pygame.image.load('../_static/blast.png'),(p1.shooterX,p1.shooterY))
                over_helper()


                

            #------Collision of Bottom and Enemy--------<
            if p1.enemyY[i] >= 600:
                p1.enemyX[i] = random.randint(0,500)
                p1.enemyY[i] = random.randint(5,60)

            #-------Collision of EnemyBul and Shooter-------<
            col3= p1.collision_enemyBul_S(p1.enemybulX,p1.enemyBulY,p1.shooterX,p1.shooterY) 
            if col3:
                scr.blit(pygame.image.load('../_static/bg2.jpg'),(550,600))
                scr.blit(pygame.image.load('../_static/blast.png'),(p1.shooterX,p1.shooterY))
                over_helper()
                # break
        
        #--------Shooter Bullet------<
        if p1.bulletY <= 0:
            p1.bulletY = 480
            p1.bulletState = 'Ready'
        if p1.bulletState == 'fire':
            p1.bullet(p1.bulletX, p1.bulletY, scr)
            p1.bulletY -= p1.bulletY1

        p1.score(scr)
        p1.j+=1
        pygame.display.update()

        

    pygame.init()

    timer1 = timer.set_interval(func,80)





