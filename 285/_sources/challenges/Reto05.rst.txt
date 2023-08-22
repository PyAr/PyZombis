===========
Reto PyMaze
===========

Objetivos:
----------

- **Completa la función solve_maze**

     Descripción:

     - Esta función toma el objeto laberinto como entrada y determina si hay una ruta desde el inicio (0,0) hasta el final (3)
     - 1 es una pared
     - 2 es un zombi
     - 3 es el destino/fin
     - 0 es todo el camino libre

- **Completa la función de ejecución, que maneja eventos clave para mover a un jugador en el laberinto**

- Complete la función `play_music`, que toma el audio del archivo `solve_maze.ogg` y lo reproduce al ejecutar el código
     - la ruta del archivo para solveMusic es `../../audio/solve_maze.ogg`

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



.. activecode:: ac_r04
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

        def __init__(self, maze=None):
            self.maze = maze
            self.rows = self.maze.__len__()
            self.cols = self.maze[0].__len__()


        def draw(self, screen):

            rows = self.rows
            cols = self.cols
            for i in range(rows):
                for j in range(cols):

                    if self.maze[i][j] == 1:

                        pygame.draw.rect(screen, Color(
                            0, 0, 0), pygame.Rect(j*50, i*50, 50, 50))

                    elif self.maze[i][j] == 2:

                        zomb = pygame.image.load('../_static/zomb.png')
                        zomb = pygame.transform.scale(zomb, (50, 50))
                        screen.blit(zomb, (j*50, i*50))
                    
                    elif self.maze[i][j] == 3:

                        dest = pygame.image.load('../_static/dest.png')
                        dest = pygame.transform.scale(dest, (50, 50))
                        screen.blit(dest, (j*50, i*50))

                    else:

                        pygame.draw.rect(screen, Color(
                            255, 255, 255), pygame.Rect(j*50, i*50, 50, 50))
                        

        def is_wall(self, x, y):

            if self.maze[y][x] == 1:
                return True
            else:
                return False


        def is_zombie(self, x, y):

            if self.maze[y][x] == 2:
                return True
            else:
                return False


        def is_destination(self, x, y):

            if self.maze[y][x] == 3:
                return True
            else:
                return False


        def is_out(self, x, y):

            if x < 0 or x >= self.cols or y < 0 or y >= self.rows:
                return True
            else:
                return False


        def is_safe(self, x, y):

            if self.maze[x][y] == 0 or self.maze[x][y] == 3:
                return True
            else:
                return False


    class Player:

        def __init__(self):
            self.x = 0
            self.y = 0
            self.image = pygame.image.load('../_static/human.png')
            self.image = pygame.transform.scale(self.image, (50, 50))
            self.startx = 0
            self.starty = 0
            self.endx = 10
            self.endy = 10


        def draw(self, screen, maze):
            maze.draw(screen)
            screen.blit(self.image, (self.x*50, self.y*50))


        def move(self, x, y, screen, maze):

            newX = self.x+x
            newY = self.y+y

            if maze.is_out(newX, newY):
                return
            elif maze.is_wall(newX, newY):
                return
            elif maze.is_zombie(newX, newY):
                over()
                timer.clear_interval(timer1)
            elif maze.is_destination(newX, newY):
                over()
                timer.clear_interval(timer1)
            else:
                self.x = newX
                self.y = newY
                maze.draw(screen)
                screen.blit(self.image, (self.x*50, self.y*50))
                return


    scr = pygame.display.set_mode((550, 550))
    font = pygame.font.SysFont('timesnewroman', 30)
    game = font.render('Game Over -\n Press run to Play Again', True, Color(0, 0, 0))

    def over():
        scr.blit(game, (0, 0))
        pygame.display.update()


    playerMaze = [
        [0, 0, 0, 0, 0,0,0,0,1,0,1],
        [1, 1, 0, 1, 1,1,1,1,1,0,1],
        [0, 1, 0, 0, 0,0,0,0,1,0,1],
        [0, 1, 0, 1, 1,1,1,0,2,0,1],
        [0, 1, 0, 2, 0,0,1,0,1,0,1],
        [0, 1, 0, 0, 0,0,1,0,1,0,1],
        [0, 1, 1, 1, 1,0,1,0,0,0,1],
        [0, 1, 0, 0, 0,0,0,0,0,1,1],
        [0, 1, 1, 0, 1,1,1,1,0,1,1],
        [0, 0, 0, 0, 0,0,0,0,0,0,1],
        [1, 1, 1, 1, 1,1,1,1,1,3,1]];

    maze = Maze(playerMaze)
    player = Player()
    player.draw(scr, maze)

    def run():
    # Controladores de eventos para eventos clave aquí

        pygame.display.update()


    def play_music():
        # Reproduce música aquí usando pygame.mixer


    pygame.init()

    timer1 = timer.set_interval(run, 100)

    def solve_maze(maze):


    ====

    import unittest

    class GradeMaze(unittest.TestCase):

        # This testcase has a solution, so it should return true
        def test_one(self): 
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

            self.assertEqual(solve_maze(testMaze),True)
        
        # This testcase has no solution, so it should return false
        def test_two(self): 
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

            self.assertEqual(solve_maze(testMaze),False)            


    suite = unittest.TestLoader().loadTestsFromTestCase(GradeMaze)
    unittest.TextTestRunner(verbosity=0).run(suite) 

            

