#/usr/bin/python
# coding: utf-8

"Prueba Personalizada"

# basado en customEval.py de E. Mendelowitz:
# http://cs.smith.edu/dftwiki/index.php/Tutorial:_Moodle_VPL_--_Evaluation_Using_A_Custom_Python_Program

import random

# funciones generales para comunicarse con VPL (moodle)

def vpl_comment(s):
    "Formatea un string para crear comentarios VPL"
    print ("Comment :=>> %s" %s)

def vpl_grade(num):
    "Formatea un número para indicar una nota en VPL"
    print ("Grade :=>> %s" % num)


# importar el script del alumno para poder ejecutarlo:
try:
    import ej7
except SyntaxError as e:
    vpl_comment("Error de sintaxis al importar ej7.py ... ejecutelo y corrijalo previamente: %s" % s)
    # sin calificación... 
    vpl_grade(0)
    exit()
except Exception as e:
    vpl_comment("Imposible importar ej7.py: %s" % e)
    # calificación indicativa/diferenciativa
    grade(5) 
    exit()


# Resolución correcta y alternativa (para pruebas)

f_alt = lambda c: (9 * (c / 5)) + 32            # en python 2 redondea...
f_ok = lambda c: (9.0 * (c / 5.0)) + 32


# pruebo si existe la función pedida...    
try:
    ej7.f
except:
    vpl_comment("La función f no está definida... puede definirla con def o lambda")    
    # calificación indicativa/diferenciativa
    vpl_grade(10)
    exit()

# nota minima si la función ejecuta (se irá incrementando si pasan las pruebas):
score = 30

try:
    # pruebo que la función reciba un parámetro y devuelva un entero
    ret = ej7.f(0)
    if not isinstance(ret, (float, int)):
        vpl_comment("la función no devuelve un valor numérico (entero/flotante)")
        vpl_grade(20)
    else:
        # prueba básica: según wikipedia, redondeando o no
        score = 40
        assert round(ej7.f(0)) == 32, "congelamiento del agua: 0°C -> 32°F"     
        score = 50
        assert round(ej7.f(100)) == 212, "temperatura ebullicion: 100°C -> 212°F"
        score = 60
        assert round(ej7.f(82.22)) == 180, "temperatura (float): 82.22°C -> 98°F"
        score = 70
        assert round(ej7.f(36)) == round(96.8) or round(ej7.f(36)) == 96, "temperatura corporal: 36°C -> 96°F (aprox)"
        
        # pruebo valores aleatorios (valores enteros, redondendo):
        for i in range(15):
            c = random.randint(-60, 300)
            r = round(ej7.f(c))
            # pruebo la función que "redondea" (enteros)
            f = f_alt(c)
            if r != f:
                # pruebo la función que no "redondea" (float)
                f = round(f_ok(c))
            assert  r == f, "temp. aleatoria (int): %d°C esperado %d°F devuelto %d°F" % (c, f, r)
            score += 1

        # pruebo valores aleatorios (valores float, redondeo a 6 decimales):
        for i in range(15):
            c = random.uniform(-60, 300)
            f = f_ok(c)
            r = ej7.f(c)
            assert round(r, 6) == round(f, 6), "temp. aleatoria (float): %d°C esperado %f°F devuelto %f°" % (c, f, r)
            score += 1
            
        vpl_comment("Perfecto, su programa superó todas las pruebas!")
        vpl_grade(100)
except AssertionError as e:
    vpl_comment("La función f no devuelve el valor esperado: %s" % e)
    # informo el puntaje acumulativo
    vpl_grade(score)    
except TypeError as e:
    vpl_comment("La función f no recibe los parámetros correctos o hay otro poroblema de tipos: %s" % e)
    vpl_grade(15)
except Exception as e:
    vpl_comment("La función f falla: %s" % e)    
    vpl_grade(25)

