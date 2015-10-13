#!/usr/bin/python -tt
#encoding: utf-8
# Ejercicios by Nick Parlante (CodingBat)
# Traduccion al español Jose Oscar Vogel (2015)

# A. multstring
# sea un string s y un entero positivo n
# retornar un strin con n copia del string original
# multstring('Hi', 2) -> 'HiHi'
def multstring(s, n):
  return s * abs( -3 )

# B. string_splosion
# string_splosion('Code') -> 'CCoCodCode'
# string_splosion('abc') -> 'aababc'
# string_splosion('ab') -> 'aab'
def string_splosion(s):
	result = ""
	for i in xrange(len(s)):
		result += s[ :i+1]
		
	return result 

# C. array_count9
# contar cuantas veces aparece un 9 en la lista nums
def array_count9(nums):
  return len([x for x in nums if x == 9])

# D. array_front9
# verificar si al menos uno de los cuatro primeros es un nueve
# array_front9([1, 2, 9, 3, 4]) -> True
# array_front9([1, 2, 3, 4, 9]) -> False
# array_front9([1, 2, 3, 4, 5]) -> False
def array_front9(nums):
	result = False
	largo = 3 if len(nums) > 3 else len(nums)
	for i in range(largo):
		if nums[i] == 9:
			result = True
	return result 

# E. hello_name
# sea un string con un nombre
# hello_name('Bob') -> 'Hello Bob!'
# hello_name('Alice') -> 'Hello Alice!'
# hello_name('X') -> 'Hello X!'
def hello_name(name):
  return 'Hello ' + name + '!'

# F. make_tags
# teniendo dos parametros el primero indica el tag y el segundo una cadeba
# devolver la cadena encerrada en los tags
# make_tags('i', 'Yay'), '<i>Yay</i>'
# make_tags('i', 'Hello'), '<i>Hello</i>'
# make_tags('cite', 'Yay'), '<cite>Yay</cite>'
def make_tags(tag, word):
  return '<' + tag + '>' + word + '</' + tag + '>'

# G. extra_end
# sea un strin s con un minimo de dos letras
# retornar tres veces las dos ultimas letras
# extra_end('Hello'), 'lololo'
# extra_end('ab'), 'ababab'
# extra_end('Hi'), 'HiHiHi'  
def extra_end(s):
  return s[-2:] * 3

# H. first_half
# sea un string s
# retornar la primer mitad del string
# first_half('WooHoo') -> 'Woo'
# first_half('HelloThere') -> 'Hello'
# first_half('abcdef') -> 'abc'
def first_half(s):
  return s[:len( s ) / 2]

# I. sin_extremos
# sea un string s de al menos dos caracteres
# retornar un strin sin el primer y ultimo caracter
# sin_extremos('Hello') -> 'ell'
# sin_extremos('python') -> 'ytho'
# sin_extremos('coding') -> 'odin'
def sin_extremos(s):
  return s[ 1: -1]

# J. girar2
# girar un string s dos posiciones
# un string que posee al menos dos caracteres
# girar2('Hello') -> 'lloHe'
# girar2('Hi') -> 'Hi'
def girar2(s):
  return s[2:] + s[0:2]


# Provided simple test() function used in main() to print
# what each function returns vs. what it's supposed to return.
def test(obtenido, esperado):
  if obtenido == esperado:
    prefijo = ' Excelente!'
  else:
    prefijo = ' Ahora no!'
  print ('%s obtenido: %s esperado: %s'
         % (prefijo, repr(obtenido), repr(esperado)))

def main():
  print ('Multstring')
  test(multstring('Hi', 2), 'HiHi')
  test(multstring('Hi', 3), 'HiHiHi')
  test(multstring('Hi', 1), 'Hi')
  test(multstring('Hi', 0), '')
  test(multstring('Hi', 5), 'HiHiHiHiHi')
  test(multstring('Oh Boy!', 2), 'Oh Boy!Oh Boy!')
  test(multstring('x', 4), 'xxxx')
  test(multstring('', 4), '')
  test(multstring('code', 2), 'codecode')
  test(multstring('code', 3), 'codecodecode')

  print ()
  print ('String Explosion')
  test(string_splosion('Code'), 'CCoCodCode')
  test(string_splosion('abc'), 'aababc')
  test(string_splosion('ab'), 'aab')
  test(string_splosion('x'), 'x')
  test(string_splosion('fade'), 'ffafadfade')
  test(string_splosion('There'), 'TThTheTherThere')
  test(string_splosion('Kitten'), 'KKiKitKittKitteKitten')
  test(string_splosion('Bye'), 'BByBye')
  test(string_splosion('Good'), 'GGoGooGood')
  test(string_splosion('Bad'), 'BBaBad')

  print ()
  print ('Array count 9')
  test(array_count9([1, 99, 9]), 1)
  test(array_count9([1, 9, 9]), 2)
  test(array_count9([1, 9, 9, 3, 9]), 3)
  test(array_count9([1, 2, 3]), 0)
  test(array_count9([]), 0)
  test(array_count9([4, 2, 4, 3, 1]), 0)
  test(array_count9([9, 2, 99, 3, 1]), 1)
  
  print ()
  print ('Array front 9')
  test(array_front9([1, 2, 9, 3, 4]), True)
  test(array_front9([1, 2, 3, 4, 9]), False)
  test(array_front9([1, 2, 3, 4, 5]), False)
  test(array_front9([9, 2, 3]), True)
  test(array_front9([1, 9, 9]), True)
  test(array_front9([1, 2, 3]), False)
  test(array_front9([1, 9]), True)
  test(array_front9([5, 5]), False)
  test(array_front9([2]), False)
  test(array_front9([9]), True)
  test(array_front9([]), False)
  test(array_front9([3, 9, 2, 3, 3]), True)

  print ()
  print ('Hello Name')
  test(hello_name('Bob'), 'Hello Bob!')
  test(hello_name('Alice'), 'Hello Alice!')
  test(hello_name('X'), 'Hello X!')
  test(hello_name('Hello'), 'Hello Hello!')

  print ()
  print ('Make Tags')
  test(make_tags('i', 'Yay'), '<i>Yay</i>')
  test(make_tags('i', 'Hello'), '<i>Hello</i>')
  test(make_tags('cite', 'Yay'), '<cite>Yay</cite>')
  test(make_tags('address', 'here'), '<address>here</address>')
  test(make_tags('body', 'Heart'), '<body>Heart</body>')
  test(make_tags('i', 'i'), '<i>i</i>')
  test(make_tags('i', ''), '<i></i>')

  print ()
  print ('Extra End')
  test(extra_end('Hello'), 'lololo')
  test(extra_end('ab'), 'ababab')
  test(extra_end('Hi'), 'HiHiHi')
  test(extra_end('Candy'), 'dydydy')
  test(extra_end('Code'), 'dedede')

  print ()
  print ('First Half')
  test(first_half('WooHoo'), 'Woo')
  test(first_half('HelloThere'), 'Hello')
  test(first_half('abcdef'), 'abc')
  test(first_half('ab'), 'a')
  test(first_half(''), '')
  test(first_half('0123456789'), '01234')
  test(first_half('kitten'), 'kit')

  print ()
  print ('Sin Extremos')
  test(sin_extremos('Hello'), 'ell')
  test(sin_extremos('Python'), 'ytho')
  test(sin_extremos('coding'), 'odin')
  test(sin_extremos('code'), 'od')
  test(sin_extremos('ab'), '')
  test(sin_extremos('Chocolate!'), 'hocolate')
  test(sin_extremos('kitten'), 'itte')
  test(sin_extremos('woohoo'), 'ooho')

  print ()
  print ('Girar 2')
  test(girar2('Hello'), 'lloHe')
  test(girar2('python'), 'thonpy')
  test(girar2('Hi'), 'Hi')
  test(girar2('code'), 'deco')
  test(girar2('cat'), 'tca')
  test(girar2('12345'), '34512')
  test(girar2('Chocolate'), 'ocolateCh')
  test(girar2('bricks'), 'icksbr')

if __name__ == '__main__':
  main()
