def test_l42_1(page):
    page.goto("lectures/TWP42/TWP42_1.html")
    # Click button:has-text("Run")
    page.click("#ac_42_1 >> *css=button >> text=Run")

    iframe = page.query_selector(
        '//*[@id="ac_42_1"]/div/div[5]/iframe').content_frame()
    output = iframe.text_content('code')

    res = '''ID    : 101
Nombre : Johnny 'wave-boy' Jones
Pais  : USA
Media  : 8.32
Estilo : Fish
Edad  : 21

ID    : 102
Nombre : Juan Martino
Pais  : Spain
Media  : 9.01
Estilo : Gun
Edad  : 36

ID    : 103
Nombre : Joseph 'smitty' Smyth
Pais  : USA
Media  : 8.85
Estilo : Cruizer
Edad  : 18

ID    : 104
Nombre : Stacey O'Neill
Pais  : Ireland
Media  : 8.91
Estilo : Malibu
Edad  : 22

ID    : 105
Nombre : Aideen 'board babe' Wu
Pais  : Japan
Media  : 8.65
Estilo : Fish
Edad  : 24

ID    : 106
Nombre : Zack 'bonnie-lad' MacFadden
Pais  : Scotland
Media  : 7.82
Estilo : Thruster
Edad  : 26

ID    : 107
Nombre : Aaron Valentino
Pais  : Italy
Media  : 8.98
Estilo : Gun
Edad  : 19

'''

    assert output == res


def test_l42_2(page):
    page.goto("lectures/TWP42/TWP42_2.html")

    page.click("text=4​ >> pre[role=\"presentation\"]")
    page.fill("text=RunResetLoad History21 1from sqlite3 import connect2con = connect('alumnos.bd')3cur = >> textarea",
              "cur.execute('''create table alumnos(login_id varchar(8),pass integer)''')")
    # Click button:has-text("Run")
    page.click("#ac_42_2_2 >> *css=button >> text=Run")

    iframe = page.query_selector(
        '//*[@id="ac_42_2_2"]/div/div[4]/iframe').content_frame()
    output = iframe.text_content('code')

    res = '''login    : masanori
ra : 421
login    : emengarda
ra : 666
'''

    assert output == res


def test_l42_3_1(page):
    page.goto("lectures/TWP42/TWP42_3.html")
    page.click(
        "pre[role=\"presentation\"]:has-text(\"query = 'select * from Track limit 30;'\")")
    page.keyboard.press("ArrowDown")
    page.keyboard.press("Control+Shift+ArrowUp")
    page.keyboard.press("Backspace")
    page.fill("textarea", " 1'")
    page.keyboard.press("Enter")
    # Click button:has-text("Run")
    page.click("#ac_42_3a >> *css=button >> text=Run")
    iframe = page.query_selector(
        '//*[@id="ac_42_3a"]/div/div[4]/iframe').content_frame()
    output = iframe.text_content('code')

    res = '''TrackId : 1
Name : For Those About To Rock (We Salute You)
AlbumId : 1
MediaTypeId : 1
GenreId : 1
Composer : Angus Young, Malcolm Young, Brian Johnson
Milliseconds : 343719
Bytes : 11170334
UnitPrice : 0.99

'''

    assert output == res


def test_l42_3_2(page):
    page.goto("lectures/TWP42/TWP42_3.html")
    page.click("#ordenar-filas >> text=10​ >> pre[role=\"presentation\"]")
    # Press ArrowUp with modifiers
    page.press("text=3.3. Ordenar filas¶ La cláusula ORDER BY se utiliza para ordenar un conjunto de  >> textarea",
               "Control+Shift+ArrowUp")
    # Press ArrowUp with modifiers
    page.press("text=3.3. Ordenar filas¶ La cláusula ORDER BY se utiliza para ordenar un conjunto de  >> textarea",
               "Control+Shift+ArrowUp")
    page.keyboard.press("Backspace")
    page.fill("text=3.3. Ordenar filas¶ La cláusula ORDER BY se utiliza para ordenar un conjunto de  >> textarea",
              "query = '''select name, milliseconds, albumid from Track ORDER BY milliseconds ASC limit 1 ;'''")

    page.keyboard.press("Enter")
    # Click button:has-text("Run")
    page.click("#ac_42_3b >> *css=button >> text=Run")
    iframe = page.query_selector(
        '//*[@id="ac_42_3b"]/div/div[5]/iframe').content_frame()
    output = iframe.text_content('code')

    res = '''Name : É Uma Partida De Futebol
Milliseconds : 1071
AlbumId : 200

'''

    assert output == res


def test_l42_3_3(page):
    page.goto("lectures/TWP42/TWP42_3.html")
    page.click("text=9​ >> pre[role=\"presentation\"]")
    # Press ArrowUp with modifiers
    page.press("text=3.4. Filtrado de datos¶ Ya hemos visto algunas formas de archivar datos, por ej. >> textarea",
               "Control+Shift+ArrowUp")
    # Press ArrowUp with modifiers
    page.press("text=3.4. Filtrado de datos¶ Ya hemos visto algunas formas de archivar datos, por ej. >> textarea",
               "Control+Shift+ArrowUp")
    page.keyboard.press("Backspace")
    page.fill("text=3.4. Filtrado de datos¶ Ya hemos visto algunas formas de archivar datos, por ej. >> textarea",
              "query = '''select name, milliseconds, bytes, albumid from Track WHERE albumid=1 limit 1;'''")

    page.keyboard.press("Enter")
    # Click button:has-text("Run")
    page.click("#ac_42_3c1 >> *css=button >> text=Run")
    iframe = page.query_selector(
        '//*[@id="ac_42_3c1"]/div/div[5]/iframe').content_frame()
    output = iframe.text_content('code')

    res = '''Name : For Those About To Rock (We Salute You)
Milliseconds : 343719
Bytes : 11170334
AlbumId : 1

'''

    assert output == res


def test_l42_3_4(page):
    page.goto("lectures/TWP42/TWP42_3.html")
    # Click button:has-text("Run")
    page.click("#ac_42_3c4 >> *css=button >> text=Run")
    iframe = page.query_selector(
        '//*[@id="ac_42_3c4"]/div/div[5]/iframe').content_frame()
    output = iframe.text_content('code')

    res = '''TrackId : 1245
Name : Wildest Dreams

TrackId : 1973
Name : Wild Side

TrackId : 2627
Name : Wild Hearted Son

TrackId : 2633
Name : Wild Flower

TrackId : 2944
Name : Wild Honey

'''

    assert output == res


def test_l42_1_en(page):
    page.goto("lectures/TWP42/TWP42_1_en.html")

    page.click("#ac_42_1_en >> *css=button >> text=Run")
    iframe = page.query_selector(
        '//*[@id="ac_42_1_en"]/div/div[5]/iframe').content_frame()
    output = iframe.text_content('code')

    res = '''ID    : 101
Name : Johnny 'wave-boy' Jones
Country  : USA
Average  : 8.32
Style : Fish
Age  : 21

ID    : 102
Name : Juan Martino
Country  : Spain
Average  : 9.01
Style : Gun
Age  : 36

ID    : 103
Name : Joseph 'smitty' Smyth
Country  : USA
Average  : 8.85
Style : Cruizer
Age  : 18

ID    : 104
Name : Stacey O'Neill
Country  : Ireland
Average  : 8.91
Style : Malibu
Age  : 22

ID    : 105
Name : Aideen 'board babe' Wu
Country  : Japan
Average  : 8.65
Style : Fish
Age  : 24

ID    : 106
Name : Zack 'bonnie-lad' MacFadden
Country  : Scotland
Average  : 7.82
Style : Thruster
Age  : 26

ID    : 107
Name : Aaron Valentino
Country  : Italy
Average  : 8.98
Style : Gun
Age  : 19

'''

    assert output == res


def test_l42_2_en(page):
    page.goto("lectures/TWP42/TWP42_2_en.html")

    page.click("text=2.3. Accessing the students.bd database¶")
    page.click("text=3cur = con.cursor() >> pre[role=\"presentation\"]")
    page.keyboard.press("ArrowDown")
    page.type("text=3cur = con.cursor() >> pre[role=\"presentation\"]",
              "cur.execute('''create table students(login_id varchar(8),pass integer)''')")
    # Click #ac_42_2_2_en >> text=Run
    page.click("#ac_42_2_2_en >> text=Run")

    iframe = page.query_selector(
        '//*[@id="ac_42_2_2_en"]/div/div[4]/iframe').content_frame()
    output = iframe.text_content('code')

    res = '''login    : masanori
ra : 421
login    : emengarda
ra : 666
'''

    assert output == res


def test_l42_3_1_en(page):
    page.goto("lectures/TWP42/TWP42_3_en.html")
    page.click(
        "pre[role=\"presentation\"]:has-text(\"query = 'select * from Track limit 30;'\")")
    page.keyboard.press("ArrowDown")
    page.keyboard.press("Control+Shift+ArrowUp")
    page.keyboard.press("Backspace")
    page.fill("textarea", " 1'")
    page.keyboard.press("Enter")
    # Click button:has-text("Run")
    page.click("#ac_42_3a_en >> *css=button >> text=Run")
    iframe = page.query_selector(
        '//*[@id="ac_42_3a_en"]/div/div[4]/iframe').content_frame()
    output = iframe.text_content('code')

    res = '''TrackId : 1
Name : For Those About To Rock (We Salute You)
AlbumId : 1
MediaTypeId : 1
GenreId : 1
Composer : Angus Young, Malcolm Young, Brian Johnson
Milliseconds : 343719
Bytes : 11170334
UnitPrice : 0.99

'''

    assert output == res


def test_l42_3_2_en(page):
    page.goto("lectures/TWP42/TWP42_3_en.html")

    page.click("text=3.3. Sorting rows¶")
    # Click #ac_42_3b_en >> text=Run
    page.click("#ac_42_3b_en >> text=Run")

    iframe = page.query_selector(
        '//*[@id="ac_42_3b_en"]/div/div[5]/iframe').content_frame()
    output = iframe.text_content('code')

    res = '''Name : É Uma Partida De Futebol
Milliseconds : 1071
AlbumId : 200

Name : Now Sports
Milliseconds : 4884
AlbumId : 18

Name : A Statistic
Milliseconds : 6373
AlbumId : 18

Name : Oprah
Milliseconds : 6635
AlbumId : 18

Name : Commercial 1
Milliseconds : 7941
AlbumId : 258

Name : The Real Problem
Milliseconds : 11650
AlbumId : 18

Name : Commercial 2
Milliseconds : 21211
AlbumId : 258

Name : Bossa
Milliseconds : 29048
AlbumId : 184

Name : Casinha Feliz
Milliseconds : 32287
AlbumId : 85

Name : Mateus Enter
Milliseconds : 33149
AlbumId : 24

Name : Deixa Entrar
Milliseconds : 33619
AlbumId : 78

Name : Homem Primata (Vinheta)
Milliseconds : 34168
AlbumId : 224

Name : Cabeça Dinossauro
Milliseconds : 37120
AlbumId : 224

Name : Freedom For My People
Milliseconds : 38164
AlbumId : 237

Name : Demorou!
Milliseconds : 39131
AlbumId : 161

Name : The Hellion
Milliseconds : 41900
AlbumId : 125

Name : Little Guitars (Intro)
Milliseconds : 42240
AlbumId : 242

Name : The Star Spangled Banner
Milliseconds : 43232
AlbumId : 237

Name : Blanco
Milliseconds : 45191
AlbumId : 145

Name : Smoked Pork
Milliseconds : 47333
AlbumId : 18

Name : Intro- Churchill S Speech
Milliseconds : 48013
AlbumId : 102

Name : Intro
Milliseconds : 49737
AlbumId : 217

Name : Étude 1, In C Major - Preludio (Presto) - Liszt
Milliseconds : 51780
AlbumId : 340

Name : Intro
Milliseconds : 52218
AlbumId : 163

Name : Wasted Reprise
Milliseconds : 53733
AlbumId : 179

Name : Cotidiano N 2
Milliseconds : 55902
AlbumId : 247

Name : Polícia (Vinheta)
Milliseconds : 56111
AlbumId : 224

Name : Soldier Side - Intro
Milliseconds : 63764
AlbumId : 207

Name : Happy Trails
Milliseconds : 65488
AlbumId : 242

Name : Arc
Milliseconds : 65593
AlbumId : 180

'''

    assert output == res


def test_l42_3_3_en(page):
    page.goto("lectures/TWP42/TWP42_3_en.html")
    page.click("text=9​ >> pre[role=\"presentation\"]")
    # Press ArrowUp with modifiers
    page.press("text=3.4. Data filtering¶ We have already seen some ways of archiving data, e.g. >> textarea",
               "Control+Shift+ArrowUp")
    # Press ArrowUp with modifiers
    page.press("text=3.4. Data filtering¶ We have already seen some ways of archiving data, e.g. >> textarea",
               "Control+Shift+ArrowUp")
    page.keyboard.press("Backspace")
    page.fill("text=3.4. Data filtering¶ We have already seen some ways of archiving data, e.g. >> textarea",
              "query = '''select name, milliseconds, bytes, albumid from Track WHERE albumid=1 limit 1;'''")

    page.keyboard.press("Enter")
    # Click button:has-text("Run")
    page.click("#ac_42_3c1_en >> *css=button >> text=Run")
    iframe = page.query_selector(
        '//*[@id="ac_42_3c1_en"]/div/div[5]/iframe').content_frame()
    output = iframe.text_content('code')

    res = '''Name : For Those About To Rock (We Salute You)
Milliseconds : 343719
Bytes : 11170334
AlbumId : 1

'''

    assert output == res


def test_l42_3_4_en(page):
    page.goto("lectures/TWP42/TWP42_3_en.html")
    # Click button:has-text("Run")
    page.click("#ac_42_3c4_en >> *css=button >> text=Run")
    iframe = page.query_selector(
        '//*[@id="ac_42_3c4_en"]/div/div[5]/iframe').content_frame()
    output = iframe.text_content('code')

    res = '''TrackId : 1245
Name : Wildest Dreams

TrackId : 1973
Name : Wild Side

TrackId : 2627
Name : Wild Hearted Son

TrackId : 2633
Name : Wild Flower

TrackId : 2944
Name : Wild Honey

'''

    assert output == res
