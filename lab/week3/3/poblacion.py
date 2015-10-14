#!/usr/bin/python2
# coding: utf-8
"""
Enunciado:
Suponiendo que la poblacion de un pais A se del orden de 80000 habitantes
con una tasa anual de crecimiento de 3% y que la poblacion de B sea de 200000
con una tasa de crecimiento de 1.5%
Se debe hacer un programa que calcule y escriba el numero de años necesarios
para que la poblacion del pais A sobrepase o iguale a la poblacion del pais B,
manteniendo las tasas de crecimiento
"""
	
def main():

	A = 80000.  #poblacion de A
	B = 200000. #poblacion de B
	TA = 3. #tasa crecimiento A
	TB = 1.5 #tasa crecimiento B
	anios = 0
	
	while A < B:
		A += A * TA / 100 #se incrementa la poblacion de A
		B += B * TB / 100 #se incrementa la poblacion de B
		anios += 1
	
	print "A tardo {} años en pasar a B".format(anios)
	
if __name__ == "__main__":
	main()
