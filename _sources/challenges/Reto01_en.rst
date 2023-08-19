=================
Hangman Challenge
=================

This challenge consists in creating the **hangman** game from Python code.

.. tabbed:: hangman

    .. tab:: Exercise 1

        First, we'll make the different hangman drawings with text strings.

        .. activecode:: ac_r01_1_en
            :nocodelens:

            In the ``drawings`` list we will place the text strings that represent
            the hangman drawings.

            ~~~~
            drawings = [
                """
              +------+
                     |
                     |
                     |
                     |
                     |
            +--------+ """,
                """
              +------+
              |      |
                     |
                     |
                     |
                     |
            +--------+ """,
                """
              +------+
              |      |
              o      |
                     |
                     |
                     |
            +--------+ """,
                """
              +------+
              |      |
              o      |
              |      |
                     |
                     |
            +--------+ """,
                """
              +------+
              |      |
              o      |
             /|      |
                     |
                     |
            +--------+ """,
                """
              +------+
              |      |
              o      |
             /|\\     |
                     |
                     |
            +--------+ """,
                """
              +------+
              |      |
              o      |
             /|\\     |
             /       |
                     |
            +--------+ """,
                """
              +------+
              |      |
              o      |
             /|\\     |
             / \\     |
                     |
            +--------+ """,
            ]


    .. tab:: Exercise 2

        We will solve the challenge progressively.

        .. activecode:: ac_r01_2_en
            :nocodelens:

            Create two variables, one called "correct" and the other "incorrect". Both should be assigned to
            an empty string.

            ~~~~

            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(correct, "", "Testing that correct is assigned correctly")
                    self.assertEqual(incorrect, "", "Testing that incorrect is assigned correctly")


            myTests().main()


    .. tab:: Exercise 3

        Do you remember the lesson on APIs? Let's apply what we learned from that lesson.

        .. activecode:: ac_r01_3_en
            :nocodelens:

            To play hangman we need words to guess. In this case we will retrieve those words from the University Domains API. 
            These words will be world cities. 
            Use the ``requests`` library to access the University Domains API. The url is the following
            http://universities.hipolabs.com/search 
            Develop the ``choose`` function that will **randomly** choose a city within the cities of the 
            ``cities`` list. This city will be returned by the function. It should be noted that the name of each city 
            is given in English.

            ~~~~
            import requests
            import json
            from random import choice

            api_url = "http://universities.hipolabs.com/search"

            solicitation = requests.get(api_url)
            data = json.loads(solicitation.text)

            cities = []
            for university in data:
                if university["country"] not in cities:
                    cities.append(university["country"].lower().replace(" ", ""))

            def choose(cities):
                # Develop the function
                # It can be achieved with a single line of code


            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(str(type(choose)), "<class 'function'>", "Testing that choose has been defined")
                    self.assertEqual(choose(["Mexico"]), "Mexico", "Testing that the function works")
                    self.assertEqual(choice([2]), 2, "Testing that choice has been imported")


            myTests().main()


    .. tab:: Exercise 4

        Let's define another function to print the hangman.

        .. activecode:: ac_r01_4_en
            :nocodelens:
            :include: ac_r01_1_en, ac_r01_2_en, ac_r01_3_en

            The ``print_hangman`` function prints the corresponding hangman drawing according to 
            the number of correct and incorrect letters so far. It takes a single parameter
            ``p_aleatoria`` which represents the word to guess.

            ~~~~
            p_aleatoria = choose(cities)
            def print_hangman(p_aleatoria):
                print(drawings[len(incorrect)])
                for c in p_aleatoria:
                    print(c if c in correct else "_", end=" ")
                print()

    
    .. tab:: Exercise 5

        It's time to create the main function of our program, which asks the user for a 
        letter to guess.

        .. activecode:: ac_r01_5_en
            :nocodelens:
        
            Develop the ``guess`` function. It receives a string as a parameter (``letters``) with all the letters already
            tested (correct + incorrect). It returns a lowercase letter that has not been tested before. 
            If the user enters more than one letter or another special character, a message should be printed 
            alerting the user of their error. For example: ``"Invalid character"``
            This function will have a loop that will make sure that all the data is coherent and will only pass
            to the main program the lowercase letter that has not been already tested. Save what the user enters in the 
            variable ``x``. **Note**: The function will be run once and will ask for a letter to verify if the unit tests pass.

            ~~~~
            from string import digits, punctuation
            import time

            def guess(letters):
                while True:
                    x =      # Start here

                    # All your code must go inside this while loop

                    # Wait before asking for input again
                    # Do not remove this line of code
                    time.sleep(2)


            ====
            from unittest.gui import TestCaseGui
            import string


            class myTests(TestCaseGui):
                def testOne(self):
                    x = guess("aeiou")
                    self.assertEqual(x in string.ascii_lowercase, True, "Testing that x has been returned correctly")


            myTests().main()

    
    .. tab:: Exercise 6

        Let's make it possible for the user to decide whether or not they want to play again.

        .. activecode:: ac_r01_6_en
            :nocodelens:

            Develop the ``play_again`` function that asks the user if they want to play again. The answer should be *s* or *n* (S/N). 
            Regardless of whether the user enters the response in uppercase or lowercase, the program should transform it to lowercase. 
            The function returns ``True`` or ``False`` depending on the response. **Note**: The function will be run twice to check if it passes the unit tests.
            In the console, you will see instructions on what to enter for each test.

            ~~~~
            def play_again():
                
                return 

            
            ====
            from unittest.gui import TestCaseGui
            import time


            class myTests(TestCaseGui):
                def testOne(self):
                    print("Enter 'S'")
                    time.sleep(2)
                    r = play_again()
                    self.assertEqual(r, True, "Testing that the lower method has been used")

                
                def testTwo(self):
                    print("Enter 'n'")
                    time.sleep(2)
                    r = play_again()
                    self.assertEqual(r, False, "Testing that it returns False when entering 'n'")


            myTests().main()


    .. tab:: Exercise 7

        .. activecode:: ac_r01_7_en
            :nocodelens:

            Now develop the ``win`` function. It takes two parameters: ``p_aleatoria``, which represents the word to be guessed, and ``letras_adivinadas``. It should return ``True`` if all the letters of ``p_aleatoria`` are in the ``letras_adivinadas`` string. Otherwise, it returns False.

            ~~~~
            def win(p_aleatoria, letras_adivinadas):
            
            
            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
                    self.assertEqual(win("argentina", "anitnegra"), True, "Testing function")
                    self.assertEqual(win("argentina", "argent"), False, "Testing function")


            myTests().main()

    .. tab:: Exercise 8
            
        You have already defined all the necessary functions and variables for the program. If you have made it this far, you should have completed everything and passed all the unit tests. If so, you can run the following program to test your game. You have 5 minutes to play.

        .. activecode:: ac_r01_8_en
            :nocodelens:
            :include: ac_r01_1_en, ac_r01_2_en, ac_r01_3_en, ac_r01_4_en, ac_r01_5_en, ac_r01_6_en, ac_r01_7_en

            # This helps to increase the program duration to 5 minutes
            import sys
            sys.setExecutionLimit(300000)

            p_aleatoria = choose(cities)

            while True:
                print_hangman(p_aleatoria)
                time.sleep(2)
                x = guess(correct + incorrect)
                if x in p_aleatoria:
                    correct = correct + x
                else:
                    incorrect = incorrect + x
                if len(incorrect) == len(drawings):
                    print(f"You were hanged, the word was {p_aleatoria}")
                    time.sleep(1)
                    if play_again():
                        correct = incorrect = ""
                        p_aleatoria = choose(cities)
                    else:
                        break
                elif win(p_aleatoria, correct):
                    print(f"You guessed the word: {p_aleatoria}")
                    time.sleep(1)
                    if play_again():
                        correct = incorrect = ""
                        p_aleatoria = choose(cities)
                    else:
                        break

            ====