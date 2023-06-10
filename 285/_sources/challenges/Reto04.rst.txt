======
PyMaze
======

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

    # game which has a maze and a player
    # player has to reach the end of the maze
    class Maze:

        def __init__(self):
            self.maze = [
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
        def update_maze(self,newmaze):
            self.maze=newmaze

        def draw(self,screen):
            for i in range(11):
                for j in range(11):
                    if self.maze[i][j]==1:
                        pygame.draw.rect(screen,Color(0,0,0),pygame.Rect(j*50,i*50,50,50))
                    else:
                        if self.maze[i][j]==2:
                            # draw zombie transformed to 50x50
                            zomb = pygame.image.load('../_static/zomb.png')
                            zomb = pygame.transform.scale(zomb,(50,50))
                            screen.blit(zomb,(j*50,i*50))
                        else:
                            if self.maze[i][j]==3:
                                # draw destination transformed to 50x50
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
            if x<0 or x>10 or y<0 or y>10:
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

    maze = Maze()
    #maze.draw(scr)
    player=Player()
    player.draw(scr,maze)

    def run():

        for event in pygame.event.get():
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_LEFT:
                    player.move(-1,0,scr,maze)
                if event.key == pygame.K_RIGHT:
                    player.move(1,0,scr,maze)
                if event.key == pygame.K_UP:
                    player.move(0,-1,scr,maze)
                if event.key == pygame.K_DOWN:
                    player.move(0,1,scr,maze)
        
        pygame.display.update()

    pygame.init()

    #timer1 = timer.set_interval(run, 100)

    def solveMaze( maze ):
        
        return solveMazeUtil(maze, 0, 0)
        
    # A recursive utility function to solve Maze problem
    def solveMazeUtil(maze, x, y):
        
        # if (x, y is goal) return True
        if maze.maze[x][y]==3:
            return True
            
        # Check if maze[x][y] is valid
        if maze.isSafe(x, y) == True:
            # mark x, y as part of solution path
            
            # Move forward in x direction
            if solveMazeUtil(maze, x + 1, y) == True:
                return True
                
            # If moving in x direction doesn't give solution
            # then Move down in y direction
            if solveMazeUtil(maze, x, y + 1) == True:
                return True
            
            # If none of the above movements work then
            # BACKTRACK: unmark x, y as part of solution path
            return False

    solveMaze(maze)

    ====

            

