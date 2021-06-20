=================
Clases y objetos
=================


..  image:: img/TWP10_001.jpeg
    :height: 14.925cm
    :width: 9.258cm
    :align: center
    :alt:


Descargue los códigos de abajo
==============================
+ tv*.py
+ tatu*.py
+ teste*.py

Clases y objetos
=================

+ Las clases asocian datos (atributos) y operaciones (métodos) en una estructura.
+ Un objeto es una variable cuyo tipo es una clase, es decir, un objeto es una instancia de una clase.
+ Solo veremos los conceptos básicos de la programación orientada a objetos.

Clases y objetos
=================

..  codelens:: Example8_1
         
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


Clases y objetos
================

+ Cuando declaramos una clase, estamos creando un nuevo tipo de datos.
+ Al igual que cuando creamos una lista o una cadena, estamos creando instancias o creando una instancia de estas clases.
+ Es lo mismo hacer ``list = []`` o ``list = list ()``
+ El método ``__init__`` se llama constructor y se llama al crear el objeto.

Clases y objetos
================

+ El parámetro propio significa el objeto de televisión en sí.
+ self.linked es un valor de ``self``, es decir, del objeto de televisión.
+ Siempre que creamos atributos del objeto, debemos asociarlos con uno mismo.
+ De lo contrario, si escribimos solo vinculado = Falso, vinculado sería solo una variable de método local y no un atributo.

Clases y objetos
================

..  codelens:: Example8_2
         
    class Television:
        def __init__(self):
            self.conectada = False
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

+ Informatizarás el banco Tatú, controlando el saldo de la cuenta corriente
+ Cada cuenta corriente puede tener uno o más clientes como titular
+ El banco controla solo el nombre y el número de teléfono
+ La cuenta corriente muestra un saldo y un estado de cuenta de las operaciones de retiro y depósito.
+ No hay cuentas especiales, por lo que el cliente no puede retirar más de tener en equilibrio.

Archivo tatu.py
===============

..  activecode:: Example8_3
    :nocodelens:
    :stdin:

    class Cliente:
        def __init__(self, nombre, telefono):
            self.nombre = nombre
            self.telefono = telefono

    class Cuenta:
        def __init__(self, Clientes, numero, saldo=0):
            self.saldo = saldo
            self.Clientes = Clientes
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


Archivo Test.py, salida de prueba
=================================


..  activecode:: Example8_4
    :nocodelens:
    :stdin:
    :include: Example8_3

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

+ Cambie el método de resumen de la clase ``Cuenta`` a un estado de cuenta, ahora imprima una lista de las operaciones de retiro y depósito realizadas
+ Cambie el método ``__init__`` para usar el método ``depositar`` para inicializar el saldo.

Arquivo tatu2.py (apenas Conta)
===============================

..  activecode:: Example8_5
    :nocodelens:
    :stdin:

    class Cliente:
        def __init__(self, nombre, telefono):
            self.nombre = nombre
            self.telefono = telefono


    class Cuenta:
        def __init__(self, Clientes, numero, saldo=0):
            self.saldo = saldo
            self.Clientes = Clientes
            self.numero = numero
            self.operaciones = []
            self.depositar(saldo)

        def resumen(self):
            print("CC numero: %s saldo: %10.2f" % (self.numero, self.saldo))

        def retirar(self, monto):
            if self.saldo >= monto:
                self.saldo -= monto
                self.operaciones.append(["Retiro"], monto)
            else:
                print("Saldo insuficiente para retirar")

        def depositar(self, monto):
            self.saldo += monto
            self.operaciones.append(["Deposito", monto])

        def extracto_de_operaciones(self):
            print("extracto CC N %s" % self.numero)
            for op in self.operaciones:
                print("%10s %10.2f" % (op[0], op[1]))
            print("%10s %10.2f\n" % ("Saldo=", self.saldo))


Archivo teste2.py, salida teste2
=================================

..  activecode:: Example8_6
    :nocodelens:
    :stdin:
    :include: Example8_5

    juan = Cliente("Juan de Silva", "777-1234")
    maria = Cliente("Maria de Silva", "555-4321")
    cuenta_1 = Cuenta([juan], 1, 1000)
    cuenta_2 = Cuenta([maria, juan], 2, 500)
    cuenta_1.retirar(50)
    cuenta_2.depositar(300)
    cuenta_1.retirar(190)
    cuenta_2.depositar(95.15)
    cuenta_2.retirar(250)
    cuenta_1.extracto_de_operaciones()
    cuenta_2.extracto_de_operaciones()

Herencia
========

+ La orientación a objetos le permite modificar nuestras clases, agregando o modificando atributos y métodos, basados en la clase anterior.
+ Crearemos cuentas especiales, donde podemos retirar más dinero que equilibrio, hasta cierto límite.
+ Las operaciones de depósito, extracto y resumen continúan como una cuenta normal.


Añadir Cuenta Especial tatu3 tatu3.py
=====================================

..  activecode:: Example8_7
    :nocodelens:
    :stdin:

    class Cliente:
        def __init__(self, nombre, telefono):
            self.nombre = nombre
            self.telefono = telefono


    class Cuenta:
        def __init__(self, Clientes, numero, saldo=0):
            self.saldo = saldo
            self.Clientes = Clientes
            self.numero = numero
            self.operaciones = []
            self.depositar(saldo)

        def resumen(self):
            print("CC numero: %s saldo: %10.2f" % (self.numero, self.saldo))

        def retirar(self, monto):
            if self.saldo >= monto:
                self.saldo -= monto
                self.operaciones.append(["Retiro"], monto)
            else:
                print("Saldo insuficiente para retirar")

        def depositar(self, monto):
            self.saldo += monto
            self.operaciones.append(["Deposito", monto])

        def extracto_de_operaciones(self):
            print("extracto CC N %s" % self.numero)
            for op in self.operaciones:
                print("%10s %10.2f" % (op[0], op[1]))
            print("%10s %10.2f\n" % ("Saldo=", self.saldo))

    class CuentaEspecial(Cuenta):
        def __init__(self, cliente, numero, saldo = 0):
            Cuenta.__init__(self,cliente,numero, saldo)
            self.limite = limite

        def retirar(self, monto):
            if self.saldo + self.limite >= monto:
                self.saldo -= monto
                self.operaciones.append(["Retiro"], monto)
            else:
                print("Saldo insuficiente para retirar")

Cuenta Especial
===============

+ Tenga en cuenta que escribimos Cuenta entre paréntesis
+ ContaEspecial hereda los métodos y atributos de la cuenta
+ self.limite se creará solo para clases de tipo ContaEspecial
+ Tenga en cuenta que estamos reemplazando completamente el método de retiro en
  Cuenta especial

Archivo teste3.py, salida test3
=================================

..  activecode:: Example8_8
    :nocodelens:
    :stdin:
    :include: Example8_7

    juan = Cliente('Juan de Silva','777-1234')
    maria = Cliente('Maria de Silva','555-4321')
    conta1 = Cuenta([juan],1,1000)
    conta2 = Cuenta([maria,juan],2,500,1000)
    conta1.retirar(50)
    conta2.deposito(300)
    conta1.retirar(190)
    conta2.deposito(95.15)
    conta2.retirar(250)
    conta1.extrato()
    conta2.extrato()

Ventajas de la herencia
=======================

+ Hemos modificado muy poco nuestro programa, manteniendo la funcionalidad anterior y agregando nuevas características.
+ Fue posible reutilizar los métodos de la cuenta.
+ Por lo tanto, la definición de la clase ContaEspecial fue mucho más baja, incluyendo solo el comportamiento diferente.

Otro ejemplo de POO
===================

..  codelens:: Example8_9
         
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

