=======================================
Ejercicio de nombres de bebés de Google
=======================================

.. datafile:: baby1990.html
    :fromfile: ./_static/baby1990.html
    :hide:

.. datafile:: baby1996.html
    :fromfile: ./_static/baby1996.html
    :hide:

.. datafile:: baby2002.html
    :fromfile: ./_static/baby2002.html
    :hide:


.. activecode:: ret04
    :nocodelens:

    
    Dado un nombre de archivo para baby.html, devuelve una lista que comienza
    con la cadena del año
    seguido de las cadenas de rango de nombre en orden alfabético.
    ['2006', 'Aaliyah 91', Aarón 57', 'Abagail 895', '...]

    Así es como se ve el html en los archivos baby.html:

    <h3 align="center">Popularity in 1990</h3>

    <tr align="right"><td>1</td><td>Michael</td><td>Jessica</td>

    <tr align="right"><td>2</td><td>Christopher</td><td>Ashley</td>

    <tr align="right"><td>3</td><td>Matthew</td><td>Brittany</td>


    ~~~~
    import re

    def extraer_nombres(filename):

        nombres = []

        # abre y lee el archivo
        # Code 


        # encontrar año
        # Code


        # encontrar nombres y rango
        # Code



        return nanombresmes

    def main():
        print (extraer_nombres('baby1990.html'))

    main()

    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):

            answer1996 = ['1996', 'Aaron 34', 'Abigail 32', 'Adam 39', 'Adrian 92', 'Alex 54', 'Alexa 100', 'Alexander 22', 'Alexandra 26', 'Alexandria 76', 'Alexis 8', 'Alicia 91', 'Allison 38', 'Alyssa 23', 'Amanda 13', 'Amber 27', 'Amy 88', 'Andrea 61', 'Andrew 10', 'Angela 90', 'Angelica 97', 'Anna 33', 'Anthony 19', 'Antonio 80', 'Ashley 3', 'Austin 9', 'Bailey 85', 'Benjamin 29', 'Blake 84', 'Bradley 83', 'Brandon 8', 'Breanna 74', 'Brian 36', 'Briana 72', 'Brianna 17', 'Brittany 14', 'Brooke 45', 'Bryan 66', 'Caitlin 84', 'Caleb 48', 'Cameron 49', 'Carlos 67', 'Caroline 78', 'Cassandra 89', 'Catherine 94', 'Charles 43', 'Chase 76', 'Chelsea 55', 'Cheyenne 69', 'Christian 24', 'Christina 57', 'Christopher 4', 'Cody 31', 'Connor 53', 'Corey 94', 'Courtney 21', 'Crystal 92', 'Dakota 58', 'Dalton 99', 'Daniel 11', 'Danielle 29', 'David 13', 'Destiny 56', 'Devin 59', 'Dustin 78', 'Dylan 33', 'Edward 95', 'Elijah 81', 'Elizabeth 10', 'Emily 1', 'Emma 53', 'Eric 35', 'Erica 79', 'Erin 51', 'Ethan 62', 'Evan 65', 'Gabriel 61', 'Gabrielle 54', 'Garrett 85', 'Grace 95', 'Gregory 98', 'Hailey 93', 'Haley 30', 'Hannah 7', 'Heather 71', 'Hunter 47', 'Ian 70', 'Isaac 86', 'Isaiah 71', 'Jack 89', 'Jacob 3', 'Jacqueline 68', 'James 17', 'Jamie 96', 'Jared 64', 'Jasmine 28', 'Jason 41', 'Jeffrey 72', 'Jenna 83', 'Jennifer 19', 'Jeremy 56', 'Jesse 51', 'Jessica 2', 'Jesus 74', 'John 15', 'Jonathan 21', 'Jordan 27', 'Jose 32', 'Joseph 12', 'Joshua 5', 'Juan 52', 'Julia 48', 'Justin 20', 'Kaitlyn 40', 'Katelyn 64', 'Katherine 31', 'Kathryn 87', 'Katie 82', 'Kayla 11', 'Kelly 73', 'Kelsey 36', 'Kenneth 77', 'Kevin 26', 'Kimberly 41', 'Kristen 70', 'Kyle 25', 'Laura 66', 'Lauren 16', 'Leah 98', 'Lindsey 86', 'Logan 42', 'Lucas 93', 'Luis 57', 'Luke 75', 'Mackenzie 75', 'Madeline 67', 'Madison 15', 'Malik 97', 'Marcus 87', 'Maria 37', 'Mariah 63', 'Marissa 59', 'Mark 55', 'Mary 44', 'Matthew 2', 'Megan 12', 'Melissa 42', 'Michael 1', 'Michelle 47', 'Miguel 91', 'Miranda 77', 'Mitchell 88', 'Molly 99', 'Monica 81', 'Morgan 25', 'Natalie 46', 'Nathan 37', 'Nathaniel 69', 'Nicholas 6', 'Nicole 22', 'Noah 50', 'Olivia 34', 'Paige 65', 'Patrick 44', 'Paul 79', 'Peter 96', 'Rachel 9', 'Rebecca 24', 'Richard 45', 'Robert 23', 'Ryan 16', 'Sabrina 58', 'Samantha 5', 'Samuel 30', 'Sara 50', 'Sarah 4', 'Savannah 43', 'Sean 46', 'Shannon 80', 'Shelby 35', 'Sierra 62', 'Stephanie 20', 'Stephen 60', 'Steven 38', 'Sydney 39', 'Tanner 90', 'Taylor 6', 'Thomas 28', 'Tiffany 52', 'Timothy 40', 'Travis 73', 'Trevor 63', 'Tristan 68', 'Tyler 7', 'Vanessa 60', 'Victor 100', 'Victoria 18', 'William 18', 'Zachary 14']
            self.assertEqual(extraer_nombres('baby1996.html'),answer1996)

        def testTwo(self):
            
            answer2002 = ['2002', 'Aaliyah 64', 'Aaron 44', 'Abigail 7', 'Adam 55', 'Adrian 73', 'Aidan 60', 'Alejandro 92', 'Alex 62', 'Alexa 69', 'Alexander 15', 'Alexandra 38', 'Alexis 5', 'Allison 44', 'Alyssa 12', 'Amanda 46', 'Amber 65', 'Andrea 56', 'Andrew 6', 'Angel 49', 'Angela 83', 'Angelina 75', 'Anna 20', 'Anthony 12', 'Antonio 85', 'Ariana 93', 'Ashley 6', 'Audrey 100', 'Austin 26', 'Autumn 73', 'Ava 82', 'Bailey 84', 'Benjamin 27', 'Blake 76', 'Brandon 20', 'Brian 51', 'Brianna 17', 'Brooke 52', 'Bryan 64', 'Bryce 97', 'Caleb 35', 'Cameron 39', 'Carlos 65', 'Caroline 67', 'Charles 58', 'Chase 82', 'Chloe 25', 'Christian 24', 'Christina 97', 'Christopher 8', 'Claire 95', 'Cody 71', 'Cole 69', 'Connor 47', 'Courtney 88', 'Daniel 10', 'Danielle 71', 'David 13', 'Destiny 34', 'Devin 74', 'Diego 98', 'Dominic 83', 'Dylan 23', 'Elijah 41', 'Elizabeth 11', 'Ella 89', 'Emily 1', 'Emma 4', 'Eric 52', 'Erin 72', 'Ethan 5', 'Evan 56', 'Evelyn 98', 'Faith 48', 'Gabriel 32', 'Gabriella 77', 'Gabrielle 66', 'Garrett 91', 'Gavin 61', 'Grace 15', 'Hailey 32', 'Haley 35', 'Hannah 3', 'Hayden 96', 'Hunter 38', 'Ian 67', 'Isaac 48', 'Isabel 85', 'Isabella 14', 'Isaiah 45', 'Jack 43', 'Jackson 50', 'Jacob 1', 'Jacqueline 81', 'Jada 78', 'Jade 86', 'Jaden 87', 'James 18', 'Jared 84', 'Jasmine 26', 'Jason 42', 'Jenna 47', 'Jennifer 28', 'Jeremiah 86', 'Jeremy 95', 'Jesse 90', 'Jessica 16', 'Jesus 66', 'Jocelyn 92', 'John 17', 'Jonathan 21', 'Jordan 37', 'Jose 30', 'Joseph 7', 'Joshua 3', 'Juan 54', 'Julia 33', 'Julian 78', 'Justin 22', 'Kaitlyn 31', 'Katelyn 53', 'Katherine 36', 'Kayla 19', 'Kaylee 57', 'Kevin 33', 'Kimberly 63', 'Kyle 40', 'Kylie 61', 'Lauren 13', 'Leah 87', 'Leslie 91', 'Lillian 96', 'Lily 79', 'Logan 29', 'Lucas 75', 'Luis 57', 'Luke 46', 'Mackenzie 42', 'Madeline 55', 'Madison 2', 'Makayla 49', 'Maria 40', 'Marissa 99', 'Mark 93', 'Mary 51', 'Mason 53', 'Matthew 4', 'Maya 90', 'Megan 22', 'Melanie 94', 'Melissa 80', 'Mia 43', 'Michael 2', 'Michelle 58', 'Miguel 88', 'Morgan 29', 'Natalie 30', 'Nathan 28', 'Nathaniel 63', 'Nicholas 9', 'Nicole 37', 'Noah 31', 'Olivia 10', 'Owen 94', 'Paige 50', 'Patrick 79', 'Rachel 24', 'Rebecca 54', 'Richard 77', 'Riley 76', 'Robert 34', 'Ryan 16', 'Samantha 9', 'Samuel 25', 'Sara 59', 'Sarah 8', 'Savannah 39', 'Sean 59', 'Sebastian 80', 'Seth 72', 'Shelby 74', 'Sierra 62', 'Sophia 27', 'Stephanie 41', 'Steven 68', 'Sydney 23', 'Taylor 18', 'Thomas 36', 'Timothy 70', 'Trevor 81', 'Trinity 70', 'Tyler 14', 'Vanessa 68', 'Victor 100', 'Victoria 21', 'William 11', 'Xavier 89', 'Zachary 19', 'Zoe 60']
            self.assertEqual(extraer_nombres('baby2002.html'),answer2002)

    myTests().main()


