def test_l42_1(page):
    page.goto("lectures/TWP42/TWP42_1.html")
    # Click button:has-text("Run")
    page.click("#ac_42_1 >> *css=button >> text=Run")

    iframe = page.query_selector('//*[@id="ac_42_1"]/div/div[5]/iframe').content_frame()
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
    page.fill("text=RunLoad History21 1from sqlite3 import connect2con = connect('alumnos.bd')3cur = >> textarea", "cur.execute('''create table alumnos(login_id varchar(8),pass integer)''')")
    # Click button:has-text("Run")
    page.click("#ac_42_2_2 >> *css=button >> text=Run")

    iframe = page.query_selector('//*[@id="ac_42_2_2"]/div/div[4]/iframe').content_frame()
    output = iframe.text_content('code')

    res = '''login    : masanori
ra : 421
login    : emengarda
ra : 666
'''

    assert output == res

def test_l42_3_1(page):
    page.goto("lectures/TWP42/TWP42_3.html")
    page.click("pre[role=\"presentation\"]:has-text(\"query = 'select * from Track limit 30;'\")")
    page.keyboard.press("ArrowDown")
    page.keyboard.press("Control+Shift+ArrowUp")
    page.keyboard.press("Backspace")
    page.fill("textarea", " 1'")
    page.keyboard.press("Enter")
    # Click button:has-text("Run")
    page.click("#ac_42_3a >> *css=button >> text=Run")    
    iframe = page.query_selector('//*[@id="ac_42_3a"]/div/div[4]/iframe').content_frame()
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
    page.press("text=3.3. Ordenar filas¶ La cláusula ORDER BY se utiliza para ordenar un conjunto de  >> textarea", "Control+Shift+ArrowUp")
    # Press ArrowUp with modifiers
    page.press("text=3.3. Ordenar filas¶ La cláusula ORDER BY se utiliza para ordenar un conjunto de  >> textarea", "Control+Shift+ArrowUp")
    page.keyboard.press("Backspace")
    page.fill("text=3.3. Ordenar filas¶ La cláusula ORDER BY se utiliza para ordenar un conjunto de  >> textarea", "query = '''select name, milliseconds, albumid from Track ORDER BY milliseconds ASC limit 1 ;'''")

    page.keyboard.press("Enter")
    # Click button:has-text("Run")
    page.click("#ac_42_3b >> *css=button >> text=Run")    
    iframe = page.query_selector('//*[@id="ac_42_3b"]/div/div[5]/iframe').content_frame()
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
    page.press("text=3.4. Filtrado de datos¶ Ya hemos visto algunas formas de archivar datos, por ej. >> textarea", "Control+Shift+ArrowUp")
    # Press ArrowUp with modifiers
    page.press("text=3.4. Filtrado de datos¶ Ya hemos visto algunas formas de archivar datos, por ej. >> textarea", "Control+Shift+ArrowUp")
    page.keyboard.press("Backspace")
    page.fill("text=3.4. Filtrado de datos¶ Ya hemos visto algunas formas de archivar datos, por ej. >> textarea", "query = '''select name, milliseconds, bytes, albumid from Track WHERE albumid=1 limit 1;'''")

    page.keyboard.press("Enter")
    # Click button:has-text("Run")
    page.click("#ac_42_3c1 >> *css=button >> text=Run")    
    iframe = page.query_selector('//*[@id="ac_42_3c1"]/div/div[5]/iframe').content_frame()
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
    iframe = page.query_selector('//*[@id="ac_42_3c4"]/div/div[5]/iframe').content_frame()
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