=========================
Google babynames exercise
=========================

.. datafile:: baby1990.html
    :fromfile: ./_static/baby1990.html
    :hide:

.. datafile:: baby1996.html
    :fromfile: ./_static/baby1996.html
    :hide:

.. datafile:: baby2002.html
    :fromfile: ./_static/baby2002.html
    :hide:


    Given a file name for baby.html, returns a list starting 
    with the year string
    followed by the name-rank strings in alphabetical order.
    ['2006', 'Aaliyah 91', Aaron 57', 'Abagail 895', ' ...]

    Here's what the html looks like in the baby.html files:

    ...

    <h3 align="center">Popularity in 1990</h3>

    ...

    <tr align="right"><td>1</td><td>Michael</td><td>Jessica</td>

    <tr align="right"><td>2</td><td>Christopher</td><td>Ashley</td>

    <tr align="right"><td>3</td><td>Matthew</td><td>Brittany</td>

    ... 


.. activecode:: ret04
    :nocodelens:

    ^^^^
    import re

    def extract_names(filename):

        names = []

        # Open and read the file.
        # Code 


        # Find year
        # Code


        # Find names and rank
        # Code



        return names

    def main():
        print (extract_names('baby1990.html'))

    main()

    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):

            answer1996 = ['1996', 'Aaron 34', 'Abby 208', 'Abigail 32', 'Abraham 227', 'Adam 39', 'Adrian 92', 'Adriana 153', 'Adrianna 277', 'Aidan 258', 'Alan 144', 'Alana 242', 'Albert 231', 'Alberto 236', 'Alec 117', 'Alejandra 160', 'Alejandro 107', 'Alex 54', 'Alexa 100', 'Alexander 22', 'Alexandra 26', 'Alexandria 76', 'Alexia 266', 'Alexis 8', 'Alexus 178', 'Alfredo 273', 'Alicia 91', 'Alisha 240', 'Alison 166', 'Alissa 267', 'Allen 212', 'Allison 38', 'Allyson 232', 'Alondra 157', 'Alyssa 23', 'Amanda 13', 'Amber 27', 'Amelia 222', 'Amy 88', 'Ana 141', 'Andre 172', 'Andrea 61', 'Andres 161', 'Andrew 10', 'Andy 235', 'Angel 102', 'Angela 90', 'Angelica 97', 'Anna 33', 'Anne 219', 'Annie 292', 'Anthony 19', 'Antonio 80', 'April 177', 'Ariana 156', 'Arianna 214', 'Ariel 163', 'Armando 222', 'Arthur 276', 'Arturo 265', 'Ashlee 202', 'Ashleigh 238', 'Ashley 3', 'Ashlyn 227', 'Asia 200', 'Aubrey 258', 'Audrey 164', 'Austin 9', 'Autumn 104', 'Avery 251', 'Bailey 85', 'Benjamin 29', 'Bethany 117', 'Bianca 123', 'Billy 286', 'Blake 84', 'Bobby 289', 'Braden 277', 'Bradley 83', 'Brady 176', 'Branden 288', 'Brandi 161', 'Brandon 8', 'Brandy 215', 'Breanna 74', 'Brenda 132', 'Brendan 131', 'Brenden 293', 'Brenna 247', 'Brennan 297', 'Brent 226', 'Brett 110', 'Brian 36', 'Briana 72', 'Brianna 17', 'Bridget 192', 'Brittany 14', 'Brittney 115', 'Brock 299', 'Brooke 45', 'Brooklyn 286', 'Bryan 66', 'Bryce 120', 'Caitlin 84', 'Caitlyn 138', 'Caleb 48', 'Calvin 183', 'Cameron 49', 'Camille 300', 'Carl 250', 'Carlos 67', 'Carly 124', 'Carolina 275', 'Caroline 78', 'Carolyn 233', 'Carson 275', 'Carter 243', 'Casey 121', 'Cassandra 89', 'Cassidy 109', 'Catherine 94', 'Cecilia 269', 'Celeste 243', 'Cesar 170', 'Chad 160', 'Chance 154', 'Chandler 157', 'Charles 43', 'Chase 76', 'Chelsea 55', 'Chelsey 224', 'Cheyenne 69', 'Chloe 112', 'Christian 24', 'Christina 57', 'Christine 135', 'Christopher 4', 'Ciara 205', 'Cierra 187', 'Cindy 195', 'Claire 116', 'Clarissa 244', 'Claudia 173', 'Clayton 149', 'Cody 31', 'Colby 225', 'Cole 106', 'Colin 126', 'Colleen 272', 'Collin 115', 'Colton 105', 'Conner 199', 'Connor 53', 'Corey 94', 'Cory 143', 'Courtney 21', 'Craig 247', 'Cristian 130', 'Cristina 246', 'Crystal 92', 'Curtis 191', 'Cynthia 101', 'Daisy 125', 'Dakota 58', 'Dallas 233', 'Dalton 99', 'Damian 214', 'Damon 279', 'Dana 174', 'Daniel 11', 'Daniela 253', 'Danielle 29', 'Danny 245', 'Dante 283', 'Darius 182', 'Darren 253', 'David 13', 'Deandre 269', 'Deanna 210', 'Deja 182', 'Delaney 264', 'Denise 230', 'Dennis 203', 'Derek 101', 'Derrick 169', 'Desiree 144', 'Destiny 56', 'Devin 59', 'Devon 127', 'Diamond 179', 'Diana 107', 'Diego 218', 'Dillon 121', 'Dominic 135', 'Dominick 290', 'Dominique 122', 'Donald 158', 'Donovan 246', 'Douglas 181', 'Drew 163', 'Dustin 78', 'Dylan 33', 'Edgar 148', 'Eduardo 123', 'Edward 95', 'Edwin 196', 'Elias 292', 'Elijah 81', 'Elizabeth 10', 'Ellen 245', 'Emily 1', 'Emma 53', 'Emmanuel 211', 'Enrique 228', 'Eric 35', 'Erica 79', 'Erick 188', 'Erik 122', 'Erika 106', 'Erin 51', 'Ethan 62', 'Evan 65', 'Evelyn 188', 'Faith 149', 'Felicia 265', 'Fernando 178', 'Francisco 132', 'Frank 162', 'Gabriel 61', 'Gabriela 131', 'Gabriella 139', 'Gabrielle 54', 'Gage 201', 'Garrett 85', 'Gary 202', 'Gavin 192', 'Genesis 282', 'George 118', 'Gerardo 205', 'Gina 235', 'Giovanni 237', 'Grace 95', 'Grant 119', 'Gregory 98', 'Griffin 281', 'Guadalupe 218', 'Gustavo 296', 'Hailey 93', 'Haley 30', 'Hanna 206', 'Hannah 7', 'Harrison 209', 'Hayden 168', 'Hayley 120', 'Heather 71', 'Hector 173', 'Heidi 290', 'Henry 139', 'Holly 130', 'Hope 186', 'Hunter 47', 'Ian 70', 'Imani 239', 'Isaac 86', 'Isabel 197', 'Isabella 152', 'Isaiah 71', 'Israel 264', 'Ivan 166', 'Jack 89', 'Jackson 136', 'Jacob 3', 'Jacqueline 68', 'Jada 225', 'Jade 145', 'Jaime 230', 'Jake 114', 'Jalen 221', 'Jamal 282', 'James 17', 'Jamie 96', 'Jared 64', 'Jasmin 189', 'Jasmine 28', 'Jason 41', 'Javier 153', 'Jay 287', 'Jazmin 216', 'Jazmine 228', 'Jeffery 255', 'Jeffrey 72', 'Jenna 83', 'Jennifer 19', 'Jenny 285', 'Jeremiah 164', 'Jeremy 56', 'Jerry 194', 'Jesse 51', 'Jessica 2', 'Jessie 296', 'Jesus 74', 'Jillian 199', 'Jimmy 223', 'Joanna 209', 'Jocelyn 127', 'Joe 267', 'Joel 124', 'John 15', 'Johnathan 138', 'Johnny 193', 'Jonah 197', 'Jonathan 21', 'Jonathon 171', 'Jordan 27', 'Jordyn 254', 'Jorge 113', 'Jose 32', 'Joseph 12', 'Joshua 5', 'Josiah 240', 'Josue 254', 'Juan 52', 'Julia 48', 'Julian 129', 'Julie 150', 'Julio 213', 'Justin 20', 'Justine 259', 'Kaitlin 103', 'Kaitlyn 40', 'Kaleb 186', 'Kara 165', 'Karen 134', 'Karina 108', 'Karla 204', 'Kasey 252', 'Kassandra 203', 'Katelyn 64', 'Katelynn 223', 'Katherine 31', 'Kathleen 151', 'Kathryn 87', 'Katie 82', 'Katlyn 236', 'Katrina 191', 'Kayla 11', 'Kaylee 110', 'Keith 159', 'Kelly 73', 'Kelsey 36', 'Kelsie 283', 'Kendall 198', 'Kendra 136', 'Kennedy 207', 'Kenneth 77', 'Kevin 26', 'Kiana 190', 'Kiara 211', 'Kimberly 41', 'Kirsten 176', 'Kody 270', 'Krista 221', 'Kristen 70', 'Kristin 147', 'Kristina 148', 'Kristopher 239', 'Krystal 217', 'Kyla 288', 'Kyle 25', 'Kylee 281', 'Kylie 111', 'Kyra 262', 'Lacey 274', 'Lance 268', 'Landon 216', 'Lane 261', 'Larry 219', 'Laura 66', 'Lauren 16', 'Lawrence 256', 'Leah 98', 'Leslie 118', 'Levi 165', 'Liam 184', 'Lillian 251', 'Lily 260', 'Linda 294', 'Lindsay 133', 'Lindsey 86', 'Lisa 168', 'Logan 42', 'Lorenzo 274', 'Louis 234', 'Lucas 93', 'Luis 57', 'Luke 75', 'Lydia 175', 'Mackenzie 75', 'Madeleine 263', 'Madeline 67', 'Madison 15', 'Maggie 256', 'Makayla 129', 'Malik 97', 'Mallory 183', 'Manuel 145', 'Marc 232', 'Marco 174', 'Marcos 224', 'Marcus 87', 'Margaret 105', 'Maria 37', 'Mariah 63', 'Marina 268', 'Mario 147', 'Marisa 169', 'Marisol 234', 'Marissa 59', 'Mark 55', 'Marquis 295', 'Martin 152', 'Mary 44', 'Mason 104', 'Mathew 204', 'Matthew 2', 'Max 208', 'Maxwell 177', 'Maya 201', 'Mckenna 229', 'Mckenzie 158', 'Meagan 193', 'Megan 12', 'Meghan 113', 'Melanie 119', 'Melissa 42', 'Mercedes 212', 'Meredith 237', 'Mia 180', 'Micah 210', 'Michael 1', 'Michaela 102', 'Micheal 262', 'Michelle 47', 'Miguel 91', 'Mikaela 280', 'Mikayla 143', 'Miranda 77', 'Miriam 289', 'Mitchell 88', 'Molly 99', 'Monica 81', 'Monique 196', 'Morgan 25', 'Nancy 172', 'Naomi 213', 'Natalie 46', 'Natasha 170', 'Nathan 37', 'Nathaniel 69', 'Nicholas 6', 'Nickolas 263', 'Nicolas 151', 'Nicole 22', 'Nina 241', 'Noah 50', 'Nolan 257', 'Olivia 34', 'Omar 140', 'Oscar 125', 'Owen 278', 'Paige 65', 'Parker 179', 'Patricia 159', 'Patrick 44', 'Paul 79', 'Payton 284', 'Pedro 198', 'Peter 96', 'Peyton 255', 'Philip 185', 'Phillip 150', 'Preston 189', 'Priscilla 261', 'Quentin 284', 'Rachael 128', 'Rachel 9', 'Rafael 215', 'Ramon 280', 'Randy 206', 'Raquel 279', 'Raul 207', 'Raven 184', 'Raymond 133', 'Rebecca 24', 'Rebekah 146', 'Renee 298', 'Ricardo 128', 'Richard 45', 'Ricky 248', 'Riley 146', 'Robert 23', 'Roberto 175', 'Rodney 266', 'Roger 285', 'Ronald 156', 'Rosa 291', 'Ross 271', 'Ruben 190', 'Ruby 295', 'Russell 260', 'Ryan 16', 'Sabrina 58', 'Sadie 278', 'Samantha 5', 'Samuel 30', 'Sandra 181', 'Sara 50', 'Sarah 4', 'Savanna 250', 'Savannah 43', 'Scott 108', 'Sean 46', 'Sebastian 195', 'Selena 142', 'Sergio 167', 'Seth 103', 'Shane 112', 'Shania 171', 'Shannon 80', 'Shawn 111', 'Shayla 276', 'Shelby 35', 'Sierra 62', 'Skyler 217', 'Sophia 126', 'Spencer 109', 'Stephanie 20', 'Stephen 60', 'Steven 38', 'Summer 137', 'Susan 299', 'Sydney 39', 'Tabitha 231', 'Tamara 287', 'Tanner 90', 'Tara 167', 'Tatiana 220', 'Taylor 6', 'Teresa 270', 'Terry 259', 'Tessa 226', 'Theodore 294', 'Thomas 28', 'Tia 271', 'Tiara 249', 'Tiffany 52', 'Timothy 40', 'Todd 298', 'Tony 229', 'Tori 185', 'Travis 73', 'Trent 252', 'Trenton 187', 'Trevor 63', 'Trey 238', 'Tristan 68', 'Tristen 249', 'Troy 155', 'Ty 242', 'Tyler 7', 'Valerie 154', 'Vanessa 60', 'Veronica 114', 'Victor 100', 'Victoria 18', 'Vincent 116', 'Virginia 293', 'Walter 272', 'Wendy 297', 'Wesley 137', 'Whitney 140', 'William 18', 'Wyatt 134', 'Xavier 141', 'Yesenia 194', 'Zachary 14', 'Zachery 220', 'Zackary 241', 'Zane 291', 'Zoe 155']

            self.assertEqual(extract_names('baby1996.html'),answer1996)

        def testTwo(self):
            
            answer2002 = ['2002', 'Aaliyah 64', 'Aaron 44', 'Abigail 7', 'Adam 55', 'Adrian 73', 'Adriana 142', 'Aidan 60', 'Aiden 135', 'Alan 150', 'Alejandro 92', 'Alex 62', 'Alexa 69', 'Alexander 15', 'Alexandra 38', 'Alexandria 105', 'Alexia 128', 'Alexis 5', 'Alicia 121', 'Allison 44', 'Alyssa 12', 'Amanda 46', 'Amber 65', 'Amelia 139', 'Amy 109', 'Ana 134', 'Andrea 56', 'Andrew 6', 'Angel 49', 'Angela 83', 'Angelica 146', 'Angelina 75', 'Anna 20', 'Anthony 12', 'Antonio 85', 'Ariana 93', 'Arianna 114', 'Ashanti 115', 'Ashley 6', 'Audrey 100', 'Austin 26', 'Autumn 73', 'Ava 82', 'Avery 132', 'Bailey 84', 'Benjamin 27', 'Blake 76', 'Bradley 149', 'Brady 147', 'Brandon 20', 'Brayden 138', 'Breanna 104', 'Brendan 124', 'Brian 51', 'Briana 102', 'Brianna 17', 'Brooke 52', 'Bryan 64', 'Bryce 97', 'Caitlin 123', 'Caitlyn 148', 'Caleb 35', 'Cameron 39', 'Carlos 65', 'Caroline 67', 'Carson 105', 'Carter 107', 'Cassandra 126', 'Cassidy 131', 'Catherine 101', 'Charles 58', 'Chase 82', 'Cheyenne 127', 'Chloe 25', 'Christian 24', 'Christina 97', 'Christopher 8', 'Claire 95', 'Cody 71', 'Colby 125', 'Cole 69', 'Colin 116', 'Collin 148', 'Colton 128', 'Connor 47', 'Courtney 88', 'Cristian 145', 'Daisy 138', 'Dakota 108', 'Dalton 117', 'Daniel 10', 'Daniela 113', 'Danielle 71', 'David 13', 'Derek 139', 'Destiny 34', 'Devin 74', 'Diana 117', 'Diego 98', 'Dominic 83', 'Dylan 23', 'Eduardo 133', 'Edward 120', 'Elijah 41', 'Elizabeth 11', 'Ella 89', 'Emily 1', 'Emma 4', 'Eric 52', 'Erica 144', 'Erin 72', 'Ethan 5', 'Evan 56', 'Evelyn 98', 'Faith 48', 'Francisco 141', 'Gabriel 32', 'Gabriela 116', 'Gabriella 77', 'Gabrielle 66', 'Gage 140', 'Garrett 91', 'Gavin 61', 'George 131', 'Grace 15', 'Grant 127', 'Hailey 32', 'Haley 35', 'Hannah 3', 'Hayden 96', 'Henry 115', 'Hunter 38', 'Ian 67', 'Isaac 48', 'Isabel 85', 'Isabella 14', 'Isabelle 111', 'Isaiah 45', 'Ivan 136', 'Jack 43', 'Jackson 50', 'Jacob 1', 'Jacqueline 81', 'Jada 78', 'Jade 86', 'Jaden 87', 'Jake 102', 'Jalen 146', 'James 18', 'Jared 84', 'Jasmine 26', 'Jason 42', 'Jayden 101', 'Jeffrey 132', 'Jenna 47', 'Jennifer 28', 'Jeremiah 86', 'Jeremy 95', 'Jesse 90', 'Jessica 16', 'Jesus 66', 'Jillian 124', 'Jocelyn 92', 'Joel 123', 'John 17', 'Jonathan 21', 'Jordan 37', 'Jorge 109', 'Jose 30', 'Joseph 7', 'Joshua 3', 'Juan 54', 'Julia 33', 'Julian 78', 'Justin 22', 'Kaitlyn 31', 'Kaleb 112', 'Karen 150', 'Katelyn 53', 'Katherine 36', 'Kathryn 108', 'Katie 103', 'Kayla 19', 'Kaylee 57', 'Kelly 119', 'Kelsey 118', 'Kennedy 136', 'Kenneth 104', 'Kevin 33', 'Kimberly 63', 'Kyle 40', 'Kylie 61', 'Landon 142', 'Laura 106', 'Lauren 13', 'Leah 87', 'Leslie 91', 'Liam 113', 'Lillian 96', 'Lily 79', 'Lindsey 122', 'Lizbeth 133', 'Logan 29', 'Lucas 75', 'Luis 57', 'Luke 46', 'Lydia 137', 'Mackenzie 42', 'Madeline 55', 'Madelyn 120', 'Madison 2', 'Makayla 49', 'Marcus 106', 'Margaret 129', 'Maria 40', 'Mariah 130', 'Marissa 99', 'Mark 93', 'Mary 51', 'Mason 53', 'Matthew 4', 'Maxwell 129', 'Maya 90', 'Mckenzie 143', 'Megan 22', 'Melanie 94', 'Melissa 80', 'Mia 43', 'Michael 2', 'Michelle 58', 'Miguel 88', 'Mikayla 125', 'Miranda 147', 'Molly 107', 'Morgan 29', 'Mya 145', 'Natalie 30', 'Nathan 28', 'Nathaniel 63', 'Nicholas 9', 'Nicolas 137', 'Nicole 37', 'Noah 31', 'Olivia 10', 'Oscar 121', 'Owen 94', 'Paige 50', 'Parker 126', 'Patrick 79', 'Paul 118', 'Peter 134', 'Rachel 24', 'Rebecca 54', 'Ricardo 143', 'Richard 77', 'Riley 76', 'Robert 34', 'Ryan 16', 'Sabrina 135', 'Samantha 9', 'Samuel 25', 'Sara 59', 'Sarah 8', 'Savannah 39', 'Sean 59', 'Sebastian 80', 'Seth 72', 'Shane 130', 'Shelby 74', 'Sierra 62', 'Skylar 140', 'Sofia 112', 'Sophia 27', 'Sophie 149', 'Spencer 110', 'Stephanie 41', 'Stephen 114', 'Steven 68', 'Sydney 23', 'Tanner 111', 'Taylor 18', 'Thomas 36', 'Tiffany 141', 'Timothy 70', 'Travis 144', 'Trevor 81', 'Trinity 70', 'Tristan 103', 'Tyler 14', 'Vanessa 68', 'Victor 100', 'Victoria 21', 'Vincent 122', 'William 11', 'Wyatt 119', 'Xavier 89', 'Zachary 19', 'Zoe 60']
            self.assertEqual(extract_names('baby2002.html'),answer2002)

    myTests().main()


