import pygame
import asyncio
successes, failures = pygame.init()
print("{0} successes and {1} failures".format(successes, failures))


screen = pygame.display.set_mode((720, 480))
clock = pygame.time.Clock()
FPS = 60 

BLACK = (0, 0, 0)
WHITE = (255, 255, 255)

rect = pygame.Rect((0, 0), (32, 32))
image = pygame.Surface((32, 32))
image .fill(WHITE)  
async def main():
    while True:
        clock.tick(FPS)

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                quit()
            elif event.type == pygame.KEYDOWN:
                if event.key == pygame.K_w:
                    rect.move_ip(0, -2)
                elif event.key == pygame.K_s:
                    rect.move_ip(0, 2)
                elif event.key == pygame.K_a:
                    rect.move_ip(-2, 0)
                elif event.key == pygame.K_d:
                    rect.move_ip(2, 0)

        screen.fill(BLACK)
        screen.blit(image, rect)
        pygame.display.update() 
        await asyncio.sleep(0.0)

asyncio.run(main())