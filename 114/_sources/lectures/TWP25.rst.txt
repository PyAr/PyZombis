=================
Clases y objetos
=================


..  image:: img/TWP10_001.jpeg
    :height: 14.925cm
    :width: 9.258cm
    :align: center
    :alt:

Clases y objetos
=================

+ Las clases asocian datos (atributos) y operaciones (métodos) en una estructura.
+ Un objeto es una variable cuyo tipo es una clase, es decir, un objeto es una instancia de una clase.
+ Solo veremos los conceptos básicos de la programación orientada a objetos.

Clases y objetos
=================

..  codelens:: cl_l25_1
         
    class Television:
        def __init__(self):
            self.conectado = False
            self.canal = 2


    tv_cuarto = Television()
    tv_sala = Television()
    print(tv_cuarto.conectado)
    print(tv_cuarto.canal)
    tv_sala.conectado = True
    tv_sala.canal = 5
    print(tv_sala.conectado)
    print(tv_sala.canal)

Clases y objetos
================

+ Cuando declaramos una clase, estamos creando un nuevo tipo de datos.
+ Al igual que cuando creamos una lista o una cadena, estamos creando instancias o creando una instancia de estas clases.
+ Es lo mismo hacer ``list = []`` o ``list = list ()``
+ El método ``__init__`` se llama constructor y se llama al crear el objeto.

Clases y objetos
================

+ El parámetro ``self`` significa el objeto de televisión en sí.
+ ``self.conectado`` es un valor del objeto ``television``.
+ Siempre que queramos crear atributos de un objeto, debemos asociarlos con uno mismo utilizando ``self``.
+ De lo contrario, si escribimos solamente ``conectado = False``, ``conectado`` sería solo una variable local del método y no un atributo.

Clases y objetos
================

..  codelens:: cl_l25_2
         
    class Television:
        def __init__(self):
            self.conectado = False
            self.canal = 2

        def cambiar_canal_hacia_abajo(self):
            self.canal -= 1

        def cambiar_canal_hacia_arriba(self):
            self.canal += 1


    tv = Television()
    tv.cambiar_canal_hacia_arriba()
    tv.cambiar_canal_hacia_arriba()
    print(tv.canal)
    tv.cambiar_canal_hacia_abajo()
    print(tv.canal)

Clases y objetos
================

+ Automatizaras el banco TATU, controlando el saldo de las cuentas corriente.
+ Cada cuenta corriente puede tener uno o más clientes como titular.
+ El banco controla solo el nombre y el número de teléfono.
+ La cuenta corriente muestra un saldo y un estado de cuenta de las operaciones de retiro y depósito.
+ No hay cuentas especiales, por lo que el cliente no puede retirar más de lo que tiene de saldo.

Clase Cliente y Clase Cuenta
============================

..  activecode:: ac_l25_1
    :nocodelens:
    :stdin:

    class Cliente:
        def __init__(self, nombre, telefono):
            self.nombre = nombre
            self.telefono = telefono

    class Cuenta:
        def __init__(self, clientes, numero, saldo=0):
            self.saldo = saldo
            self.clientes = clientes
            self.numero = numero

        def resumen(self):
            print("CC numero: %s saldo: %10.2f" % (self.numero, self.saldo))

        def retirar(self, monto):
            if self.saldo >= monto:
                self.saldo -= monto
            else:
                print("Saldo insuficiente para retirar")

        def depositar(self, monto):
            self.saldo += monto


Utilizando las clases Cliente y Cuenta
======================================


..  activecode:: ac_l25_2
    :nocodelens:
    :stdin:
    :include: ac_l25_1

    juan = Cliente("Juan de Silva", "777-1234")
    maria = Cliente("Maria de Silva", "555-4321")
    print("nombre : %s. telefono: %s" % (juan.nombre, juan.telefono))
    print("nombre : %s. telefono: %s" % (maria.nombre, maria.telefono))

    cuenta_1 = Cuenta([juan], 1, 1000)
    cuenta_2 = Cuenta([maria, juan], 2, 500)
    cuenta_1.resumen()
    cuenta_2.resumen()

Declaración de operaciones
==========================

+ Agregue el método ``estado_de_cuenta`` a la clase ``Cuenta`` el cual imprime una lista de las operaciones de retiro y depósito realizadas.
+ Cambie el método ``__init__`` para usar el método ``depositar`` para inicializar el saldo.

Clase Cliente y Clase Cuenta (Mejorada)
=======================================

..  activecode:: ac_l25_3
    :nocodelens:
    :stdin:

    class Cliente:
        def __init__(self, nombre, telefono):
            self.nombre = nombre
            self.telefono = telefono


    class Cuenta:
        def __init__(self, clientes, numero, saldo=0):
            self.saldo = 0
            self.clientes = clientes
            self.numero = numero
            self.operaciones = []
            self.depositar(saldo)

        def resumen(self):
            print("CC numero: %s saldo: %10.2f" % (self.numero, self.saldo))

        def retirar(self, monto):
            if self.saldo >= monto:
                self.saldo -= monto
                self.operaciones.append(["Retiro", monto])
            else:
                print("Saldo insuficiente para retirar")

        def depositar(self, monto):
            self.saldo += monto
            self.operaciones.append(["Depósito", monto])

        def estado_de_cuenta(self):
            print("extracto CC N %s" % self.numero)
            for op in self.operaciones:
                print("%10s %10.2f" % (op[0], op[1]))
            print("%10s %10.2f\n" % ("Saldo", self.saldo))


Utilizando las clases Cliente y Cuenta (Mejorada)
=================================================

..  activecode:: ac_l25_4
    :nocodelens:
    :stdin:
    :include: ac_l25_3

    juan = Cliente("Juan de Silva", "777-1234")
    maria = Cliente("Maria de Silva", "555-4321")
    cuenta_1 = Cuenta([juan], 1, 1000)
    cuenta_2 = Cuenta([maria, juan], 2, 500)

    cuenta_1.retirar(50)
    cuenta_2.depositar(300)
    cuenta_1.retirar(190)
    cuenta_2.depositar(95.15)
    cuenta_2.retirar(250)

    cuenta_1.estado_de_cuenta()
    cuenta_2.estado_de_cuenta()

Herencia
========

+ La herencia en objetos permite modificar nuestras clases, agregando o modificando atributos y métodos, basados en la clase anterior.
+ Vamos a crear cuentas especiales, donde podemos retirar más dinero que el saldo, hasta cierto límite.
+ Las operaciones de depósito, retiro y resumen continúan como una cuenta normal.


Clase Cuenta Especial
=====================

..  activecode:: ac_l25_5
    :nocodelens:
    :stdin:
    :include: ac_l25_3

    class CuentaEspecial(Cuenta):
        def __init__(self, clientes, numero, saldo=0, limite=0):
            Cuenta.__init__(self, clientes, numero, saldo)
            self.limite = limite

        def retirar(self, monto):
            if self.saldo + self.limite >= monto:
                self.saldo -= monto
                self.operaciones.append(["Retiro", monto])
            else:
                print("Saldo insuficiente para retirar")

Clase Cuenta Especial
=====================

+ Tenga en cuenta que escribimos ``Cuenta`` entre paréntesis.
+ ``CuentaEspecial`` hereda los métodos y atributos de ``Cuenta``.
+ ``self.limite`` se creará solo para clases de tipo ``CuentaEspecial``.
+ Tenga en cuenta que estamos sobre escribiendo completamente el método ``retirar`` en ``CuentaEspecial``.

Utilizando todas las clases
===========================

..  activecode:: ac_l25_6
    :nocodelens:
    :stdin:
    :include: ac_l25_3, ac_l25_5

    juan = Cliente("Juan de Silva", "777-1234")
    maria = Cliente("Maria de Silva", "555-4321")
    cuenta_1 = Cuenta([juan], 1, 1000)
    cuenta_2 = CuentaEspecial([maria, juan], 2, 500, 1000)

    cuenta_1.retirar(50)
    cuenta_2.depositar(300)
    cuenta_1.retirar(190)
    cuenta_2.depositar(95.15)
    cuenta_2.retirar(1500)

    cuenta_1.estado_de_cuenta()
    cuenta_2.estado_de_cuenta()

Ventajas de la herencia
=======================

+ Hemos modificado muy poco nuestro programa, manteniendo la funcionalidad anterior y agregando nuevas características.
+ Fue posible reutilizar los métodos de la cuenta.
+ Por lo tanto, la definición de la clase ``CuentaEspecial`` fue mucho más simple, incluyendo solo el comportamiento diferente.

Otros ejemplos de POO
=====================

+ Podemos crear una clase ``Persona`` con los atributos básicos.

..  activecode:: ac_l25_7
    :nocodelens:
    :stdin:
         
    import datetime


    class Persona:
        def __init__(self, nombre, nacimiento):
            self.nombre = nombre
            self.nacimiento = nacimiento

        def edad(self):
            delta = datetime.date.today() - self.nacimiento
            return int(delta.days / 365)

        def __str__(self):
            return "%s, %d años" % (self.nombre, self.edad())


    masanori = Persona("Fernando Masanori", datetime.date(1980, 9, 1))
    print(masanori.edad())
    print(masanori)

+ Puedes utilizar la implementación de la clase ``Persona`` para crear un objeto con tu nombre.

..  activecode:: ac_l25_8
    :nocodelens:
    :stdin:
    :include: ac_l25_7

    # Crea un objeto con tu nombre

Múltiple herencia y ¿Qué objeto es?
===================================

+ Se puede heredar de varias clases.
+ Pueden existir momentos en que quieras verificar el tipo de una instancia.
+ En Python existe la función ``isinstance``.
+ Permite verificar si una instancia de una clase es realmente de una clase dada.

..  codelens:: cl_l25_3

    class Ethernet:
        def __init__(self, nombre, direccion_mac):
            self.nombre = nombre
            self.direccion_mac = direccion_mac


    class Wireless(Ethernet):
        def __init__(self, nombre, direccion_mac):
            Ethernet.__init__(self, nombre, direccion_mac)


    class PCI:
        def __init__(self, bus, fabricante):
            self.bus = bus
            self.fabricante = fabricante


    class USB:
        def __init__(self, dispositivo):
            self.dispositivo = dispositivo


    class PCIEthernet(PCI, Ethernet):
        def __init__(self, bus, fabricante, nombre, direccion_mac):
            PCI.__init__(self, bus, fabricante)
            Ethernet.__init__(self, nombre, direccion_mac)


    class USBWireless(USB, Wireless):
        def __init__(self, dispotivo, nombre, direccion_mac):
            USB.__init__(self, dispotivo)
            Wireless.__init__(self, nombre, direccion_mac)


    wlan0 = USBWireless("usb0", "wlan0", "00:33:44:55:66")
    eth0 = PCIEthernet("pci :0:0:1", "realtek", "eth0", "00:11:22:33:44")


    print(isinstance(wlan0, Ethernet))
    print(isinstance(eth0, PCI))
    print(isinstance(eth0, USB))