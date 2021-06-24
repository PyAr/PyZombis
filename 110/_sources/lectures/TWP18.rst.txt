=======
Strings
=======


.. image:: img/TWP10_001.jpeg
   :height: 14.925cm
   :width: 9.258cm
   :align: center
   :alt: 

Comillas de varios tipos.
=========================



+ ¿Puedo usar comillas simples, dobles o triples?




.. codelens:: Example5_1
         
        x = "aguacate"
        print(x)
        y = "McDonald's"
        print(y)
        form = '''
        <html>
               <head>
                  <title> Teste </title>
               </head>
               <body>
                  <p>Testando</p>
               </body>
         <html>'''



Rebanar
=======



+ Rebanada del primer índice al anterior del segundo


.. codelens:: Example5_2
         
   x = "0123456789"
   print(x[0:2])
   print(x[1:2])
   print(x[2:4])
   print(x[0:5])
   print(x[1:8])


Rebanar
========



+ Podemos omitir índices, sustituyendo el extremo correspondiente y
  también podemos tener índices negativos: -1 último, -2 penúltimo


.. codelens:: Example5_3
         
   x = "0123456789"
   print(x[:2])
   print(x[4:])
   print(x[4:-1])
   print(x[-4:-1])
   print(x[:])



Incremento en el corte
=======================



+ Puedo usar un incremento al cortar el string



.. codelens:: Example5_4
       
   texto = "papa cuando nace"
   print(texto[::2])
   print(texto[::-1])


Incremento en el corte
=======================


+ Comprobar si una palabra es palíndrome

.. activecode:: Example5_5
   :nocodelens:
   :stdin:

   palabra = input('Palabra: ')
   if palabra == palabra[::-1]:
       print('%s es palíndrome' %palabra)
   else:
       print('%s no es un palíndrome' %palabra)

String no se puede modificar
============================


.. activecode:: Example5_6
   :nocodelens:
   :stdin:

   texto = " Hola mundo!"
   texto[0] = '@'


Puedo crear nuevos strings
==========================



+ Usando la concatenación resolvemos este problema


.. activecode:: Example5_7
   :nocodelens:
   :stdin:

   texto = "Hola mundo"
   texto = '@' + texto[1:]
   print(texto)



Concentración
=============



+ Ejemplo de un programa que lee una palabra y reemplaza las vocales con "*"


.. activecode:: Example5_8
   :nocodelens:
   :stdin:

   palabra = input('Palabra: ')
   k = 0
   intercambio = ""
   while k < len(palabra):
       if palabra[k] in 'aeiou':
           intercambio = intercambio + '*'
       else:
           intercambio = intercambio + palabra[k]
       k+=1
   print("Nueva palabra %s" %intercambio)



.. activecode:: Example5_9
   :nocodelens:
   :stdin:
   
   Ahora haga un programa que lea una palabra, la guarde en la variable ``palabra``, y reemplace las consonantes con '*'. Guardar el resultado en la variable ``intercambio``. Puede apoyarse en el programa anterior.|br|
   
   ~~~~
   #Utilice la función input para leer la palabra del usuario.
   
   
   
   ====
   from unittest.gui import TestCaseGui
   
   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(intercambio, ''.join(['*' if c not in 'aeiou' else c for c in palabra]), "Probando que intercambio esté asignado correctamente")


   myTests().main()
   
   

Verificación parcial de strings
===============================


.. codelens:: Example5_10
         
   archivo = 'prog.py'
   print(archivo.startswith('p'))
   print(archivo.endswith('p'))
   contestar = "Si"
   print(contestar.lower())
   print(contestar.upper())
   print(contestar.lower() in 'si no yes no')


find and replace
================


.. codelens:: Example5_11
         
   s = 'un tigre, dos tigres, tres tigres'
   print(s.find('tigre'))
   print(s.find('tigre',4))
   print(s.find('tigre',16))
   print(s.replace('tigre','gato'))
   s = s.replace('tigre','gato')
   print(s)


split and join
==============


.. codelens:: Example5_12
         
   txt = 'papa cuando nace'
   print(txt.split())
   data = '21/02/2011'
   print(data.split('/'))
   ip = '198.188.10.144'
   print(ip.split('.'))
   times = ['Palmeiras', 'Santos', 'Corintios']
   print('/'.join(times))

Ejercicio
=========


.. activecode:: Example5_13
   :nocodelens:
   :stdin:
   
   Haga un programa que solicite la fecha de nacimiento en formato "dd/mm/aaaa" y convierta esta fecha a formato "<día> de <mes> de <año>" usando la lista ``meses`` que ya está escrita. Guardar el resultado en la variable ``fecha_de_nacimiento`` e imprimir esta variable. Recordar que ``.split()`` regresa una lista y se le puede pasar como argumento el caracter con el cual separar un string. Guardar el día, mes y el año en las variables ``dia``, ``mes`` y ``anio``.|br|
   
   ~~~~
   data = input('data (dd/mm/aaaa): ').split('/')
   meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
   
   
   
   ====
   from unittest.gui import TestCaseGui
   
   class myTests(TestCaseGui):
   
       def testOne(self):
           self.assertEqual(fecha_de_nacimiento, '{} de {} de {}'.format(dia, meses[int(mes)-1], anio), "Probando que fecha_de_nacimiento esté asignada correctamente")
           self.assertEqual(dia, data[0], "Probando que dia esté asignada correctamente")
           self.assertEqual(mes, data[1], "Probando que mes esté asignado correctamente")
           self.assertEqual(anio, data[2], "Probando que anio esté asignado correctamente")
         
         
   myTests().main()



Dojo de codificación
====================


.. image:: img/TWP18_015.jpeg
   :height: 14.251cm
   :width: 19.001cm
   :align: center
   :alt: 


Dojo de codificación
=====================



+ Desarrollo basado en pruebas
+ Pasos de bebé
+ Programación de pares



Desarrollo basado en pruebas
============================


.. image:: img/TWP18_016.png
   :height: 11.032cm
   :width: 17.726cm
   :align: center
   :alt: 


Pasos de bebé
=============


.. image:: img/TWP18_017.jpeg
   :height: 12.624cm
   :width: 17.704cm
   :align: center
   :alt: 


Programación en pareja
======================


.. image:: img/TWP18_018.png
   :height: 13.711cm
   :width: 18.201cm
   :align: center
   :alt: 


