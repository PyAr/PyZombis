#! usr/env/python
# coding:utf-8

"""
Calculo del Valor de PI segun la formular
pi = 4/1 - 4/3 + 4/5 - 4/7 + ......

Se pasa por parametro la cantidad de iteraciones que se desea realizar.-
"""

def main(n = 4):
	ret = 0. #defino la variable de retorno
	div = 1. #defino el divisor que se va a ir incrementando de a dos
	for i in range(n): #se hace el recorridog
		if i % 2 == 0: #si me devuelve 0 el modulo quiere decir que es par y debo sumar el resultado
			ret += 4 / div
		else: #caso que sea impar debo restar el resultado
			ret -= 4 / div
		
		div += 2 #incremento el divisor
	return ret #retorno el valor
	
if __name__ == "__main__":
	print main(50000000)
