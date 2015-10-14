#!/usr/bin/python3
# coding: utf-8

"Ejecutar el ejercicio del alumno en un entorno con la variables requeridas"

__author__ = "Mariano Reingart <reingart@gmail.com>"
__license__ = "GPLv3+"

import codecs
import sys

if sys.stdout.encoding == "ANSI_X3.4-1968" and sys.version_info[0] >= 3:
    # ajustar codificación de caracteres en python 3 (siendo redirigidos)
    sys.stdout = codecs.getwriter("utf-8")(sys.stdout.detach())
    
filename = "ejercicio.py" #sys.argv[1]

# compilar para detectar errores de sintaxis previos a la ejecución:

try:
    with open(filename) as script:
        compile(script.read(), script.name, "exec")
except SyntaxError as ex:
    # print the exception in the gcc output format: (for VPL)
    #test.c:6:1: error: expected ‘;’ before ‘}’ token
    sys.stderr.write("%s:%s:%s:%s:%s\n" % (ex.filename, ex.lineno, ex.offset, 
                              ex.__class__.__name__, ex)) 
    exit(1)

