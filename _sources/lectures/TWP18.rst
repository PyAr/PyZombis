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



Fatiamento
==========



+ Fatia do primeiro índice até o anterior do segundo


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

   palabra  =input('Palabra: ')
   if palabra == palabra[::-1]:
    print('%s é palíndrome' %palabra)
   else:
     print('%s no es un palíndrome' %palabra


String no se puede modificar
============================


.. activecode:: Example5_6
   :nocodelens:
   :stdin:

   texto = "Hola mundo!"
   texto[0] = '@'


Puedo crear nuevos strings
==========================



+ Usando la concatenación resolvemos este problema


.. activecode:: Example5_7
   :nocodelens:
   :stdin:

   texto = "Alô Mundo"
   texto = '@' + texto[1:]
   print(texto)



Concentración
=============



+ Haga un programa que lea una palabra y reemplace las vocales con "*"


.. activecode:: Example5_8
   :nocodelens:
   :stdin:

   palabra  =input('Palabra: ')
   k = 0
   intercambio = ""
   while k < len(palabra):
      if palabra[k] in 'aeiou:
       intercambio = intercambio + '*'
      else:
       intercambio = intercambio + palabra[k]
      k+=1
   print("Nueva palabra %s" %intercambio)


Verificacion parcial de strings
===============================


.. codelens:: Example5_9
         
        archivo = 'prog.py'
        print(archivo.startswith('p'))
        print(archivo.endswith('p'))
        contestar = "Si"
        print(contestar.lower())
        print(contestar.upper())
        print(contestar.lower() en 'si no si no')


find and replace
================


.. codelens:: Example5_10
         
        s = 'un tigre, dos tigres, tres tigres'
        print(s.find('tigre'))
        print(s.find('tigre',4))
        print(s.find('tigre',16))
        print(s.replace('tigre','gato'))
        s = s.replace('tigre','gato')
        print(s)


split and join
==============


.. codelens:: Example5_11
         
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



+ Haga un programa que solicite la fecha de nacimiento (dd / mm / aaaa) y
  imprimir con el nombre del mes completo


.. activecode:: Example5_12
   :nocodelens:
   :stdin:

   dia, mes , año = input('Data (dd/mm/aaaa): ').split('/')
   meses = ['Enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
   print('Tu naces en: ')
   print('%s de %s de %s' %(dia,meses[int(mês)-1],ano))



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

Enlaces de conferencias de video:
=================================

.. youtube:: t5sE9ruRHHM
      :height: 315
      :width: 560
      :align: center

.. youtube:: TQkvGiwXhdQ
      :height: 315
      :width: 560
      :align: center

.. youtube:: __OGe-uUBmg
      :height: 315
      :width: 560
      :align: center

.. youtube:: OInhmFfmNXE
      :height: 315
      :width: 560
      :align: center

.. youtube:: zOp-YBp3yzI
      :height: 315
      :width: 560
      :align: center

.. youtube:: DR4CuztiMpY
      :height: 315
      :width: 560
      :align: center

.. disqus::
   :shortname: pyzombis
   :identifier: lecture5


