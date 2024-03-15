===============================================
Ejercicio de rompecabezas de registro de Google
===============================================

.. datafile:: animal_code.google.com
    :fromfile: ./_static/animal_code.google.com
    :hide:




.. activecode:: reto06
    :nocodelens:

    Dado un archivo de registro de Apache, busque las URL del rompecabezas.

    Así es como se ve una URL de rompecabezas:
    10.254.254.28 - - [06/Aug/2007:00:13:48 -0700] "GET /~foo/puzzle-bar-aaab.jpg HTTP/1.0" 302 528 "-" "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.6) Gecko/20070725 Firefox/2.0.0.6"

    La salida de la función debe ser una lista de URL del formulario:
    ['http://languages/edu/languages/google-python-class/images/puzzle/a-baaa.jpg', 'http://languages/edu/languages/google-python-class/images/puzzle/a-baab.jpg', 'http://languages/edu/languages/google-python-class/images/puzzle/a-baac.jpg', ...]


    ~~~~
    import re

    def read_urls(filename):
       """Lee el texto de registro del archivo proporcionado y devuelve una lista de URL de rompecabezas en el orden ordenado."""
        url_dict = {}
        # +++tu código aquí+++
        

    def main():
        img_urls = read_urls('animal_code.google.com')
        return img_urls

    img_urls= main()

    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            answerAnimal= ['http://languages/edu/languages/google-python-class/images/puzzle/a-baaa.jpg', 'http://languages/edu/languages/google-python-class/images/puzzle/a-baab.jpg', 'http://languages/edu/languages/google-python-class/images/puzzle/a-baac.jpg', 'http://languages/edu/languages/google-python-class/images/puzzle/a-baad.jpg', 'http://languages/edu/languages/google-python-class/images/puzzle/a-baae.jpg', 'http://languages/edu/languages/google-python-class/images/puzzle/a-baaf.jpg', 'http://languages/edu/languages/google-python-class/images/puzzle/a-baag.jpg', 'http://languages/edu/languages/google-python-class/images/puzzle/a-baah.jpg', 'http://languages/edu/languages/google-python-class/images/puzzle/a-baai.jpg', 'http://languages/edu/languages/google-python-class/images/puzzle/a-baaj.jpg', 'http://languages/edu/languages/google-python-class/images/puzzle/a-baba.jpg', 'http://languages/edu/languages/google-python-class/images/puzzle/a-babb.jpg', 'http://languages/edu/languages/google-python-class/images/puzzle/a-babc.jpg', 'http://languages/edu/languages/google-python-class/images/puzzle/a-babd.jpg', 'http://languages/edu/languages/google-python-class/images/puzzle/a-babe.jpg', 'http://languages/edu/languages/google-python-class/images/puzzle/a-babf.jpg', 'http://languages/edu/languages/google-python-class/images/puzzle/a-babg.jpg', 'http://languages/edu/languages/google-python-class/images/puzzle/a-babh.jpg', 'http://languages/edu/languages/google-python-class/images/puzzle/a-babi.jpg', 'http://languages/edu/languages/google-python-class/images/puzzle/a-babj.jpg']
            self.assertEqual(answerAnimal, img_urls)

    myTests().main()


|Licencia Creative Commons|
Este trabajo tiene licencia `Creative Commons Attribution 4.0
International License <http://creativecommons.org/licenses/by/4.0/>`__.

.. |Licencia Creative Commons| image:: https://i.creativecommons.org/l/by/4.0/88x31.png
   :target: http://creativecommons.org/licenses/by/4.0/



El ejercicio original se puede encontrar en `Google Log Puzzle Exercise <https://developers.google.com/edu/python/exercises/log-puzzle?hl=en>`__.


.. Código correcto para fines de prueba:
.. import re

..     def read_urls(filename):
..         """Lee el texto de registro del archivo proporcionado y devuelve una lista de URL de rompecabezas en el orden ordenado."""
..         url_dict = {}
..         with open(filename, 'r') as file:
..             log_text = file.read()

..         lines = log_text.split('\n')
..         for line in lines:
..             match = re.search(r'"GET (\S+)', line)
..             if match:
..                 path = match.group(1)
..                 if 'puzzle' in path:
..                     host = path.split('/')[2]
..                     url_dict['http://' + host + path] = 1
                    
..         return sorted(url_dict.keys(), key=lambda url: re.search(r'-(\w+)-(\w+)\.\w+', url).group(2) if re.search(r'-(\w+)-(\w+)\.\w+', url) else url)

..     def main():
..         # Read URLs from log texts
..         img_urls = read_urls('animal_code.google.com')
..         print(img_urls)
..         return img_urls

..     # Run the main function
..     img_urls= main()
