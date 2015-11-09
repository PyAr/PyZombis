#!/usr/bin/python
# coding: utf-8

"Haga un programa que lea tres números e imprima el mayor y el menor de ellos"

# para solicitar un numero, muestre la leyenda "Ingrese un numero: "
# para mostrar el resultado, imprima "El mayor es" y a continuación el número
# variante: no usar min/max

n1 = int(raw_input("Ingrese un numero: "))
n2 = int(raw_input("Ingrese un numero: "))
n3 = int(raw_input("Ingrese un numero: "))

print "El mayor es", max(n1, n2, n3)
print "El menor es", min(n1, n2, n3)

