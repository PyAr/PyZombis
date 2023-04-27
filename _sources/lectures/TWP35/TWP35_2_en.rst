New program suggestion
============================

Starbuzz has no beans
------------------------

+ The director of Starbuzz wants an option to quickly buy without waiting
  for the price to drop
+ When running the program, it will ask you if you want to buy now or not
+ If the user answers yes, it will take the current price and buy it
+ If not, it will wait until it drops below 4.74

New program suggestion
----------------------------

.. activecode:: ac_l35_2
    :nocodelens:
    :stdin:

    import urllib.request
    
    def buy():
        pagina = urllib.request.urlopen("https://cors.bridged.cc/http://beans.itcarlow.ie/prices-loyalty.html")
        texto = pagina.read()
        donde = texto.find("$")
        inicio = donde + 1
        fin = inicio + 4
        precio = float(texto[inicio:fin])
        return precio
    
    opcion = input("Do you want to buy now? (Y/N)")
    if opcion.lower() == "y":
        precio = buy()
        print("Buy now! Price: %5.2f" % precio)
    else:
        precio = 99.99
        while precio >= 4.74:
            precio = buy()
        print("Buy now! Price: %5.2f" % precio)


Ugly program...
----------------

+ Don't duplicate your code...
+ This leads to code bloat, making the maintenance of your code difficult
+ Try to reuse your code
+ By defining functions we will reuse code
+ What's the difference?
+ If I have to change something, I'll change it in one place.