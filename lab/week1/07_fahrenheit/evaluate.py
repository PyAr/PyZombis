#!/usr/bin/python3
# coding: utf-8

"Prueba Personalizada para el ejercicio 7 guia 3 (sin funcion)"

__author__ = "Mariano Reingart <reingart@gmail.com>"
__license__ = "GPLv3+"


# basado en customEval.py de E. Mendelowitz:
# http://cs.smith.edu/dftwiki/index.php/Tutorial:_Moodle_VPL_--_Evaluation_Using_A_Custom_Python_Program

# modulos auxiliares:

import codecs
import random
import sys

if sys.stdout.encoding == "ANSI_X3.4-1968" and sys.version_info[0] >= 3:
    # ajustar codificación de caracteres en python 3 (siendo redirigidos)
    sys.stdout = codecs.getwriter("utf-8")(sys.stdout.detach())

# funciones generales para comunicarse con VPL (moodle)

def vpl_comment(s):
    "Formatea un string para crear comentarios VPL"
    print ("Comment :=>> %s" %s)

def vpl_grade(num):
    "Formatea un número para indicar una nota en VPL"
    print ("Grade :=>> %s" % num)


# Resolución correcta y alternativa (para pruebas)

f_alt = lambda c: (9 * (c / 5)) + 32            # en python 2 redondea...
f_ok = lambda c: (9.0 * (c / 5.0)) + 32


def f_ej(valor):
    "Ejecutar el ejercicio del alumno en un entorno con la variables requeridas"
    # cargar la variable de entrada:
    c = valor
    # guardo las variables locales en un diccionario que se pueda actulaizar
    vars = locals()
    # equivalente a execfile("ejercicio.py", vars) en python 3
    with open("ejercicio.py") as script:
       code = compile(script.read(), script.name, 'exec')
       exec(code, vars)
    # devolver la variable de salida (con el resultado):
    return vars['f']


# nota minima si la función ejecuta (se irá incrementando si pasan las pruebas):
score = 30

try:
    # pruebo que la función reciba un parámetro y devuelva un entero
    ret = f_ej(0)
    if not isinstance(ret, (float, int)):
        vpl_comment("la variable no contiene un valor numérico (entero/flotante)")
        vpl_grade(20)
    else:
        # prueba básica: según wikipedia, redondeando o no
        score = 40
        assert round(f_ej(0)) == 32, "congelamiento del agua: 0°C -> 32°F"     
        score = 50
        assert round(f_ej(100)) == 212, "temperatura ebullicion: 100°C -> 212°F"
        score = 60
        assert round(f_ej(82.22)) == 180, "temperatura (float): 82.22°C -> 98°F"
        score = 70
        assert round(f_ej(36)) == round(96.8) or round(f_ej(36)) == 96, "temperatura corporal: 36°C -> 96°F (aprox)"
        
        # pruebo valores aleatorios (valores enteros, redondendo):
        for i in range(15):
            c = random.randint(-60, 300)
            r = round(f_ej(c))
            # pruebo la función que "redondea" (enteros)
            f = f_alt(c)
            if r != f:
                # pruebo la función que no "redondea" (float)
                f = round(f_ok(c))
            assert  r == f, "temp. aleatoria (int): %d°C esperado %d°F devuelto %d°F" % (c, f, r)
            score += 1

        # pruebo valores aleatorios (valores float, redondendo a 6 decimales):
        for i in range(15):
            c = random.uniform(-60, 300)
            f = f_ok(c)
            r = f_ej(c)
            assert round(r, 6) == round(f, 6), "temp. aleatoria (float): %d°C esperado %f°F devuelto %f°" % (c, f, r)
            score += 1
            
        vpl_comment("Perfecto, su programa superó todas las pruebas!")
        vpl_grade(100)
except AssertionError as e:
    vpl_comment("La variable f no contiene el valor esperado: %s" % e)
    # informo el puntaje acumulativo
    vpl_grade(score)    
except TypeError as e:
    vpl_comment("La variable f no tiene el tipo correcto: %s" % e)
    vpl_grade(15)
except (NameError,KeyError) as e:
    vpl_comment("La variable f no está definida...: %s" % e)    
    # calificación indicativa/diferenciativa
    vpl_grade(10)
    exit()
except SyntaxError as e:
    vpl_comment("Error de sintaxis al importar ej7.py ... ejecutelo y corrijalo previamente: %s" % s)
    # sin calificación... 
    vpl_grade(0)
    exit()
except Exception as e:
    vpl_comment("Imposible ejecutar ejemplo.py: %s" % e)
    # calificación indicativa/diferenciativa
    grade(5) 
    exit()

