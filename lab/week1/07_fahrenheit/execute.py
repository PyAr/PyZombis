#!/usr/bin/python3
# coding: utf-8

"Ejecutar el ejercicio del alumno en un entorno con la variables requeridas"

__author__ = "Mariano Reingart <reingart@gmail.com>"
__license__ = "GPLv3+"

import sys

filename = "ejercicio.py" #sys.argv[1]

if sys.version_info > (3, ):
    raw_input = input
    
# definir la variable de entrada que usará el programa del alumno:

c = int(raw_input("Ingrese los grados celsius: "))

# ejecutar el programa del alumno (simil execfile, compatible con python 3)
with open(filename) as script:
   code = compile(script.read(), script.name, 'exec')
   exec(code)

# al ejecutar se usa el entorno global actual, se modifica con las variables 
# creadas en el programa  del alumno

print ("Valor calculado en grados farhrenheit: ", f)

