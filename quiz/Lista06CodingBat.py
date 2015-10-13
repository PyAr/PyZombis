#!/usr/bin/python -tt
# encoding: utf-8
# Ejercicios by Nick Parlante (CodingBat)
# Traducido al español: Jose Oscar Vogel (2015)

# A. dormir
# dia_semana es True para dias de semana
# feriado es True los dias feriados
# podes quedar durmiendo cuando es feriado o no es un dia de entresemana
# retorna True o False dependiendo si vas a dormir o no
def dormir(dia_semana, feriado):
  return not dia_semana or feriado

# B. alumnos_problema
# tenemos dos alumnos a y b
# a_sonrrie y b_sonrrie indican si a y b sonrrien
# tenemos problemas cuando ambos estan sonriendo o cuando ambos no estan sonriendo
# retorne True cuando hay problemas
def alumnos_problema(a_sonrrie, b_sonrrie):
  return a_sonrrie == b_sonrrie

# C. suma_doble
# dado dos enteros retorna su suma
# pero si los numeros son iguales devuelve el doble de la suma
# suma_doble(1, 2) -> 3
# suma_doble(2, 2) -> 8
def suma_doble(a, b):

    return a + b  if a != b else (a + a) * 2

# D. diff21
# dado un entero n retornar la diferencia absoluta entre n y 21
# pero si el numero es mayor que 21 retornar el doble de la diferencia absoluta
# diff21(19) -> 2
# diff21(25) -> 8
# tip: abs(x) retorna el valor absoluto de x
def diff21(n):
  return 21 - abs(n) if n <= 21 else (abs(n) - 21) * 2

# El. papagayo
# tenemos un papagayo que habla alto
# hora es un parametro entre 0 y 23
# tenemos problemas si el papagayo esta hablando
# antes de las 7 o despues de las 20
def papagayo(hablando, hora):
  return hablando and (hora < 7 or hora > 20)

# F. diez
# dados dos enteros a y b
# retornar True si uno de los dos es 10 o la suma es 10
def diez(a, b):
  return True if a == 10 or b == 10 or a + b == 10 else False

# G. dista10
# sea un entero n
# retornar True si la diferencia absoluta entre n y 100 o n y 200
# fuera menor o igual a 10
# dista10(93) -> True
# dista10(90) -> True
# dista10(89) -> False
def dista10(n):
  return True if abs( 100 - n ) <= 10 or abs( 200 - n ) <= 10 else False

# H. apaga
# sea un string s y un entero n
# retornar un nuevo string sin la posicion n 
# apaga('kitten', 1) -> 'ktten'
# apaga('kitten', 4) -> 'kittn'
def apaga(s, n):
  return s[:n] + s[n+1:]

# I. cambia
# sea un string s
# si s tiene tamaño <= 1 se retorna el mismo string
# caso contrario se cambia la primer y la ultima letra
# cambia('code') -> 'eodc'
# cambia('a') -> 'a'
# cambia('ab') -> 'ba'
def cambia(s):
  return s if len(s) <= 1 else s[-1] + s[1:-1] + s[0]

#Provee un funcion test() usado en main() para imprimir
#que retorna cada funcion vs que es lo que se espera que retorne 


def test(obtenido, esperado):
  if obtenido == esperado:
    prefijo = ' Excelente!'
  else:
    prefijo = ' Ahora no'
  print ('%s obtenido: %s esperado: %s'
         % (prefijo, repr(obtenido), repr(esperado)))

def main():
  print ('Oh si! Hoy voy a quedar durmiendo!')
  test(dormir(False, False), True)
  test(dormir(True, False), False)
  test(dormir(False, True), True)
  test(dormir(True, True), True)

  print ()
  print ('Alumnos con problema')
  test(alumnos_problema(True, True), True)
  test(alumnos_problema(False, False), True)
  test(alumnos_problema(True, False), False)
  test(alumnos_problema(False, True), False)

  print ()
  print ('Suma doble')
  test(suma_doble(1, 2), 3)
  test(suma_doble(3, 2), 5)
  test(suma_doble(2, 2), 8)
  test(suma_doble(-1, 0), -1)
  test(suma_doble(0, 0), 0)
  test(suma_doble(0, 1), 1)

  print ()
  print ('Diff21')
  test(diff21(19), 2)
  test(diff21(10), 11)
  test(diff21(21), 0)
  test(diff21(22), 2)
  test(diff21(25), 8)
  test(diff21(30), 18)

  print ()
  print ('Papagayo')
  test(papagayo(True, 6), True)
  test(papagayo(True, 7), False)
  test(papagayo(False, 6), False)
  test(papagayo(True, 21), True)
  test(papagayo(False, 21), False)
  test(papagayo(True, 23), True)
  test(papagayo(True, 20), False)

  print ()
  print ('Diez')
  test(diez(9, 10), True)
  test(diez(9, 9), False)
  test(diez(1, 9), True)
  test(diez(10, 1), True)
  test(diez(10, 10), True)
  test(diez(8, 2), True)
  test(diez(8, 3), False)
  test(diez(10, 42), True)
  test(diez(12, -2), True)

  print ()
  print ('Dista 10')
  test(dista10(93), True)
  test(dista10(90), True)
  test(dista10(89), False)
  test(dista10(110), True)
  test(dista10(111), False)
  test(dista10(121), False)
  test(dista10(0), False)
  test(dista10(5), False)
  test(dista10(191), True)
  test(dista10(189), False)
  test(dista10(190), True)
  test(dista10(200), True)
  test(dista10(210), True)
  test(dista10(211), False)
  test(dista10(290), False)

  print ()
  print ('Apaga')
  test(apaga('kitten', 1), 'ktten')
  test(apaga('kitten', 0), 'itten')
  test(apaga('kitten', 4), 'kittn')
  test(apaga('Hi', 0), 'i')
  test(apaga('Hi', 1), 'H')
  test(apaga('code', 0), 'ode')
  test(apaga('code', 1), 'cde')
  test(apaga('code', 2), 'coe')
  test(apaga('code', 3), 'cod')
  test(apaga('chocolate', 8), 'chocolat')

  print ()
  print ('Cambia letras')
  test(cambia('code'), 'eodc')
  test(cambia('a'), 'a')
  test(cambia('ab'), 'ba')
  test(cambia('abc'), 'cba')
  test(cambia(''), '')
  test(cambia('Chocolate'), 'ehocolatC')
  test(cambia('nythoP'), 'Python')
  test(cambia('hello'), 'oellh')

if __name__ == '__main__':
  main()

