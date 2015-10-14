#!/usr/bin/python2
# coding: utf-8

"""
Sea la declaracion sobre la diversidad: 
“The Python Software Foundation and the global Python community welcome and encourage participation by everyone. 
Our community is based on mutual respect, tolerance, and encouragement, and we are working to help each other live up to these principles. 
We want our community to be more diverse: whoever you are, and whatever your background, we welcome you.”
Se debe generar una lista de palabras con el texto utilizando split(), a continuacion se debe crear una lista con las palabras
que comiencen o terminan con una de las letras "python". Imprimir la lista resultante
No olvidar remover los caracteres especiales y cuidado con las mayusculas y las minusculas
"""

def main():
	p = "The Python Software Foundation and the global Python community welcome and encourage participation by everyone. "\
		"Our community is based on mutual respect, tolerance, and encouragement, and we are working to help each other live up to these principles. "\
		"We want our community to be more diverse: whoever you are, and whatever your background, we welcome you."
	lista = p.split()
	caracteres = [':', ',', '.']
	letras = ('P', 'Y', 'T', 'H', 'O', 'N')
	
	palabras = []
	for x in lista:
		print x
		palabra = x.upper().translate(None, ''.join(caracteres))
		if palabra.startswith(letras) or palabra.endswith(letras):
			palabras.append(palabra)
	
	return palabras
		
if __name__ == "__main__":
	p = main()
	print "La lista resultante es {}".format(p)
