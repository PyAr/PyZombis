#!/usr/bin/python
# coding: latin


"""
Programa para calcular la reduccion de tiempo de vida de un fumador

Se pregunta la cantidad de cigarrillos fumados por dia y cuantos años ya fumo.
Se considera que un fumador pierda 10 minutos de vida por cada cigarrillo,
se calculará cuantos dias de vida perderá el fumador.
Se exibe el total en dias
"""
 
def main():
	
	cant_cig = raw_input("Cantidad de cigarrillos que fuma por dia ")
	anios_fum = raw_input("Cuantos años ya ha fumado ")
	
	"""Calculo la cantidad de dias en que ha fumado segun los años ingresados
		se toma como base el año tiene 365.25 dias de promedio
	"""
	dias_fum = float(anios_fum) * 365.25
	
	"""Calculo los dias perdidos segun los siguientes parametros
		dias_fum son los dias en que ha fumado
		cant_cig es la cantidad de cigarrillos por dia
		los multiplico a ambos para para saber cuantos cigarrillos ha fumado
		luego los multiplico por 10, que representa la perdida en minutos por cada cigarrillo
		y por ultimo todo lo divido por 1440 que son los minutos que hay en un dia de 24hrs
		para de esa forma obtener la cantidad de dias que ha perdido por la cantidad de años que ha fumado
	"""
	dias_per = dias_fum * float(cant_cig) * 10. / 1440.
	
	print "Ud ha perdido {:6.2f} dias".format(dias_per)

if __name__ == "__main__":
	main()
