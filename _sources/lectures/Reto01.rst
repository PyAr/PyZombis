========
Ahorcado
========

Este reto consiste en crear el juego de **ahorcado** a partir de código Python.

.. tabbed:: ahorcado

    .. tab:: ac_1

        Primero haremos los distintos dibujos del ahorcado con cadenas de texto.

        .. activecode:: ac_r01_1
            :nocodelens:

            En la lista ``dibujos`` colocaremos las cadenas de texto que representan
            los dibujos del ahorcado.

            ~~~~
            dibujos = [
                """     +------+
                        |     |
                        O     |
                              |
                              |
                              |
                    ...........""",
                """     +------+
                        |     |
                        O     |
                        |     |
                              |
                              |
                    ...........""",
                """     +------+
                        |     |
                        O     |
                        |\    |
                              |
                              |
                    ...........""",
                """     +------+
                        |     |
                        O     |
                       /|\    |
                              |
                              |
                    ...........""",
                """     +------+
                        |     |
                        O     |
                       /|\    |
                       /      |
                              |
                    ...........""",
                """     +------+
                        |     |
                        O     |
                       /|\    |
                       / \    |
                              |
                    ...........""",
            ]


    .. tab:: ac_2

        Va a resolver el reto de manera progresiva.

        .. activecode:: ac_r01_2
            :nocodelens:

            Cree dos variables, una llamada ``correctas`` y la otra ``incorrectas``. Ambas asígnelas a 
            una cadena vacía.

            ~~~~

            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(correctas, "", "Probando que correctas esté asignada correctamente")
                    self.assertEqual(incorrectas, "", "Probando que incorrectas esté asignada correctamente")


            myTests().main()


    .. tab:: ac_3

        ¿Recuerda la lección de las APIs? Vamos a aplicar lo aprendido de esa lección.

        .. activecode:: ac_r01_3
            :nocodelens:

            Para poder jugar ahorcado necesitamos palabras para adivinar. En este caso vamos a 
            recuperar esas palabras de la API de University Domains. Estas palabras serán ciudades
            del mundo. 
            Con la librería ``requests`` acceda a la API de University Domains. La url es la siguiente 
            http://universities.hipolabs.com/search 
            Desarrolle la función ``escoger`` que escoja de manera **aleatoria** una ciudad dentro de las ciudades de la 
            lista ``ciudades``. Esta ciudad será devuelta por la función.

            ~~~~
            import requests
            import json
            # Debe importar otra librería

            api_url = "http://universities.hipolabs.com/search"

            solicitud = requests.get(api_url)
            datos = json.loads(solicitud.text)

            ciudades = []
            for universidad in datos:
                if universidad["country"] not in ciudades:
                    ciudades.append(universidad["country"])

            def escoger(ciudades):
                # Desarrolle la función
                # Se puede lograr con una sola línea de código
                pass

            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(str(type(escoger)), "<class 'function'>", "Probando que escoger haya sido definida")
                    self.assertEqual(escoger(["Mexico"]), "Mexico", "Probando que la función sirva")
                    self.assertEqual(choice([2]), 2, "Probando que choice haya sido importado")


            myTests().main()


    .. tab:: ac_4

        Ahora definamos otra función para imprimir el ahorcado.

        .. activecode:: ac_r01_4
            :nocodelens:
            :include: ac_r01_1, ac_r01_2, ac_r01_3

            La función ``imprimir_ahorcado`` imprime el dibujo del ahorcado correspondiente al 
            número de letras incorrectas y correctas hasta el momento.

            ~~~~
            p_aleatoria = escoger(ciudades)
            def imprimir_ahorcado():
                print(dibujos[len(incorrectas)])
                for c in p_aleatoria:
                    print(c if c in correctas else "_", end=" ")
                print()

    
    .. tab:: ac_5

        Es momento de crear la función principal de nuestro programa, la cuál pide al usuario una 
        letra para adivinar.

        .. activecode:: ac_r01_5
            :nocodelens:
        
            Desarrole la función ``adivinar``. Recibe como parámetro una cadena (``letras``) con todas las letras ya 
            probadas (correctas + incorrectas). Devuelve una letra minúscula que no se ha probado antes. 
            Si el usuario ingresa más de una letra u otro carácter especial, se debe imprimir un mensaje 
            alertando al usuario de su error. Por ejemplo: ``"Caracter inválido"``
            Esta función tendrá un bucle que hará que todos los datos sean coherentes y solo pasará 
            a tu programa principal la letra minúscula que no se probó antes. Guarde lo ingresado por el usuario en la
            variable ``x``. **Nota**: La función se va a ejecutar una vez para verificar si pasa las pruebas unitarias.

            ~~~~
            from string import digits, punctuation
            import time

            def adivinar(letras):
                while True:
                    x =      # Empiece aquí

                    # Todod su código debe ir dentro de este ciclo while

                    # Esperar antes de preguntar por un input de nuevo
                    # No remover esta línea de código
                    time.sleep(2)


            ====
            from unittest.gui import TestCaseGui
            import string


            class myTests(TestCaseGui):
                def testOne(self):
                    x = adivinar("aeiou")
                    self.assertEqual(x in string.ascii_lowercase, True, "Probando que x haya sido devuelto correctamente")


            myTests().main()
