Class Client and Class Account
==============================

+ You will automate the TATU bank, controlling the balance of checking accounts.
+ Each checking account can have one or more clients as holders.
+ The bank only controls the name and phone number.
+ The checking account shows a balance and a statement of withdrawal and deposit operations.
+ There are no special accounts, so the client cannot withdraw more than they have in balance.

..  activecode:: ac_l25_2a_en
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
            print("CC number: %s balance: %10.2f" % (self.numero, self.saldo))

        def retirar(self, monto):
            if self.saldo >= monto:
                self.saldo -= monto
            else:
                print("Insufficient balance to withdraw")

        def depositar(self, monto):
            self.saldo += monto


Using the Client and Account classes
------------------------------------

..  activecode:: ac_l25_2b_en
    :nocodelens:
    :stdin:
    :include: ac_l25_2a

    juan = Cliente("Juan de Silva", "777-1234")
    maria = Cliente("Maria de Silva", "555-4321")
    print("name: %s. phone: %s" % (juan.nombre, juan.telefono))
    print("name: %s. phone: %s" % (maria.nombre, maria.telefono))

    account_1 = Cuenta([juan], 1, 1000)
    account_2 = Cuenta([maria, juan], 2, 500)
    account_1.resumen()
    account_2.resumen()