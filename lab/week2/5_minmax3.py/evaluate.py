#!/usr/bin/python2
# coding: utf-8

"Programa para probar y evaluar a mediante entradas/salidas" 

import subprocess
import select
import random

def vpl_comment(s):
    "Formatea un string para crear comentarios VPL"
    print ("Comment :=>> %s" %s)

def vpl_grade(num):
    "Formatea un número para indicar una nota en VPL"
    print ("Grade :=>> %s" % num)

# Mejorar este programa para que:
# * no falle si el programa del alumno no compila/ejecuta
# * no falle si no se muestra las leyendas correctas
# * salga por tiempo de espera agotado
# * contemple si se solicitan más números o se imprimen más resultados

# lanzar un proceso secundario (vía pipas, -u sin buffer)
proceso = subprocess.Popen(
    ['python2', "-u", "ejercicio.py"],
    stdin=subprocess.PIPE,
    stdout=subprocess.PIPE,
    stderr=subprocess.PIPE)

error = mensaje = ''
x = 0
numeros = []

grade = 0

while True:
    disp = select.select([proceso.stdout, proceso.stderr], [], [], 0)[0]
    if proceso.stdout in disp:
        mensaje += proceso.stdout.read(1)
        print("*%s*" % mensaje)
    if proceso.stderr in disp:
        error += proceso.stderr.read(1)
        #print("ERROR: *%s*" % error)
    if mensaje.lower().startswith('ingrese un numero: '):
        x = random.randint(-100, 100)
        proceso.stdin.write('%d\n' % x)
        numeros.append(x)
        mensaje = ''
        grade += 10
    elif mensaje.lower().startswith('el mayor es') and mensaje.lower().endswith("\n"):
        # mensaje == "El mayor es 3\n"
        y = mensaje[12:-1]
        if int(y) == max(numeros):
            vpl_comment("ok el mayor!!! %s de %s" % (y, numeros))
        else:
            vpl_comment("no es el menor!!! %s de %s" % (y, numeros))
        mensaje = ''
        grade += 30
    elif mensaje.lower().startswith('el menor es') and mensaje.lower().endswith("\n"):
        # mensaje == "El menor es 3\n"
        y = mensaje[12:-1]
        if int(y) == min(numeros):
            vpl_comment("ok el menor!!! %s de %s" % (y, numeros))
        else:
            vpl_comment("no es el menor!!! %s de %s" % (y, numeros))
        mensaje = ''
        grade += 30
        break


vpl_comment("MENSAJE: *%s*" % mensaje)
vpl_comment("ERROR: *%s*" % error)

# enviar la nota a VPL (moodle)
vpl_grade(grade)

