======
PyMaze
======

Goals:
------

- **Complete the solveMaze function**

    Description:

    - This function takes maze object as input and determines if there is a path from start(0,0) to end(3)
    - 1 is a wall
    - 2 is a Zombie 
    - 3 is destination
    - 0 is all the free path

- **Complete the run function which handles key events to move player in maze**

- Complete the `playMusic` function which takes audio from file `solveMaze.ogg` and plays on running the code
    - file path for solveMusic is `../../audio/solveMaze.ogg`

.. raw:: html

   <script src='../_static/game.js'></script>
    <script src="https://cdn.jsdelivr.net/npm/brython@3/brython.min.js">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/brython@3/brython_stdlib.js">
    </script>
   <script type="module">
      window.gamejs.init();
      window.gamejs.image.preload(["../_static/zomb.png", '../_static/human.png', '../_static/dest.png']);
   </script>



.. activecode:: ac_l66
    :language: python3
    :python3_interpreter: brython

    
    ~~~~
    from browser import load, timer, window
    load('../_static/game.js')
    load('../_static/pygame.brython.js')
    gjs = window.gamejs
    gjs.image.preload(["../_static/zomb.png", '../_static/human.png', '../_static/dest.png'])
    gjs.ready()

    ^^^^
    import pygame
    from pygame.color import *
    from pygame.locals import *
    from pygame import mixer


    # game which has a maze and a player
    # player has to reach the end of the maze
    class Maze:

        def __init__(self,maze=None):
            self.maze = maze
            self.rows = self.maze.__len__()
            self.cols = self.maze[0].__len__()


        def draw(self,screen):

            rows = self.rows
            cols = self.cols
            for i in range(rows):
                for j in range(cols):

                    if self.maze[i][j]==1:
                        pygame.draw.rect(screen,Color(0,0,0),pygame.Rect(j*50,i*50,50,50))

                    else:

                        if self.maze[i][j]==2:

                            zomb = pygame.image.load('../_static/zomb.png')
                            zomb = pygame.transform.scale(zomb,(50,50))
                            screen.blit(zomb,(j*50,i*50))

                        else:

                            if self.maze[i][j]==3:
                            
                                dest = pygame.image.load('../_static/dest.png')
                                dest = pygame.transform.scale(dest,(50,50))
                                screen.blit(dest,(j*50,i*50))

                            else:

                                pygame.draw.rect(screen,Color(255,255,255),pygame.Rect(j*50,i*50,50,50))


        def isWall(self,x,y):

            if self.maze[y][x]==1:
                return True
            else:
                return False
        

        def isZombie(self,x,y):

            if self.maze[y][x]==2:
                return True
            else:
                return False
        

        def isDest(self,x,y):

            if self.maze[y][x]==3:
                return True
            else:
                return False
        

        def isOut(self,x,y):
        
            if x<0 or x>=self.cols or y<0 or y>=self.rows:
                return True
            else:
                return False
        

        def isSafe(self,x,y):

            if self.maze[x][y]==0 or self.maze[x][y]==3:
                return True
            else:
                return False


    class Player:

        def __init__(self):
            self.x=0
            self.y=0
            self.image=pygame.image.load('../_static/human.png')
            self.image=pygame.transform.scale(self.image,(50,50))
            self.startx=0
            self.starty=0
            self.endx=10
            self.endy=10


        def draw(self,screen,maze):
            maze.draw(screen)
            screen.blit(self.image,(self.x*50,self.y*50))


        def move(self,x,y,screen,maze):

            newX=self.x+x
            newY=self.y+y

            if maze.isOut(newX,newY):
                return
            elif maze.isWall(newX,newY):
                return
            elif maze.isZombie(newX,newY):
                over()
                timer.clear_interval(timer1)
            elif maze.isDest(newX,newY):
                over()
                timer.clear_interval(timer1)
            else:
                self.x=newX
                self.y=newY
                maze.draw(screen)
                screen.blit(self.image,(self.x*50,self.y*50))
                return
            

    scr = pygame.display.set_mode((550, 550))
    font=pygame.font.SysFont('timesnewroman',30)
    game=font.render('Game Over -\n Press run to Play Again',True, Color(0,0,0))

    def over():
        scr.blit(game,(0,0))
        pygame.display.update()


    playerMaze =    [
        [0,0,0,0,0,0,0,0,1,0,1],
        [1,1,0,1,1,1,1,1,1,0,1],
        [0,1,0,0,0,0,0,0,1,0,1],
        [0,1,0,1,1,1,1,0,2,0,1],
        [0,1,0,2,0,0,1,0,1,0,1],
        [0,1,0,0,0,0,1,0,1,0,1],
        [0,1,1,1,1,0,1,0,0,0,1],
        [0,1,0,0,0,0,0,0,0,1,1],
        [0,1,1,0,1,1,1,1,0,1,1],
        [0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,3,1]];

    maze = Maze(playerMaze)
    player=Player()
    player.draw(scr,maze)

    def run():
        # Event handlers for Key events here
        

        pygame.display.update()



    def playMusic():
        # Play music here using pygame.mixer



    pygame.init()
    
    

    timer1 = timer.set_interval(run, 100)

    def solveMaze( maze ):
    
    
    
    ====
    
    import unittest
    
    class gradeMaze(unittest.TestCase):

        # This testcase has a solution, so it should return true
        def testOne(self): 
            newMaze = [
                        [0,0,0,0,0,0,1,0,0,0,1],
                        [1,1,2,1,1,0,1,1,1,1,0],
                        [0,1,0,0,0,0,0,0,0,1,0],
                        [0,1,0,1,1,2,1,1,0,1,0],
                        [0,1,0,1,0,0,0,1,0,1,0],
                        [0,1,0,1,0,1,0,1,0,0,3],
                        [0,1,0,1,0,1,0,1,1,1,0],
                        [0,1,0,1,0,1,0,1,0,1,0],
                        [0,1,0,1,0,1,0,1,0,1,0],
                        [0,1,0,1,0,1,0,1,0,1,0],
                        [0,1,1,1,0,1,0,1,1,1,0]];
            testMaze = Maze(newMaze)

            self.assertEqual(solveMaze(testMaze),True)
        
        # This testcase has no solution, so it should return false
        def testTwo(self): 
            newMaze = [
                        [0,0,0,0,0,0,1,0,0,0,1],
                        [0,1,1,1,1,0,1,1,1,1,0],
                        [0,1,0,0,0,0,0,0,0,1,0],
                        [0,1,0,1,1,1,1,1,0,1,0],
                        [0,1,0,1,0,0,0,1,0,1,0],
                        [0,1,0,1,0,1,0,1,0,0,1],
                        [1,1,0,1,0,1,0,1,1,1,0],
                        [0,1,0,1,0,1,0,1,0,1,0],
                        [0,1,0,1,0,1,0,1,0,1,0],
                        [0,1,0,1,0,1,0,1,0,1,0],
                        [0,1,1,1,0,1,0,1,1,1,3]];
            testMaze = Maze(newMaze)

            self.assertEqual(solveMaze(testMaze),False)


    suite = unittest.TestLoader().loadTestsFromTestCase(gradeMaze)
    unittest.TextTestRunner(verbosity=0).run(suite) 

            

