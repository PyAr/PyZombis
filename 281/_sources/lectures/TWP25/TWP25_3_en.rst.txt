Operations declaration and inheritance
=====================================

+ Add the method ``statement`` to the ``Account`` class that prints a list of deposit and withdrawal operations.
+ Change the ``__init__`` method to use the ``deposit`` method to initialize the balance.


Client Class and Improved Account Class
---------------------------------------

..  activecode:: ac_l25_3a_en
    :nocodelens:
    :stdin:

    class Client:
        def __init__(self, name, phone):
            self.name = name
            self.phone = phone


    class Account:
        def __init__(self, clients, number, balance=0):
            self.balance = 0
            self.clients = clients
            self.number = number
            self.operations = []
            self.deposit(balance)

        def summary(self):
            print("Account number: %s \nBalance: %10.2f" % (self.number, self.balance))

        def withdraw(self, amount):
            if self.balance >= amount:
                self.balance -= amount
                self.operations.append(["Withdrawal", amount])
            else:
                print("Not enough funds for withdrawal")

        def deposit(self, amount):
            self.balance += amount
            self.operations.append(["Deposit", amount])

        def statement(self):
            print("Account Statement %s" % self.number)
            for op in self.operations:
                print("%10s %10.2f" % (op[0], op[1]))
            print("%10s %10.2f\n" % ("Balance", self.balance))


Using the Client and Improved Account Classes
*************************************************

..  activecode:: ac_l25_3b_en
    :nocodelens:
    :stdin:
    :include: ac_l25_3a

    juan = Client("Juan de Silva", "777-1234")
    maria = Client("Maria de Silva", "555-4321")
    account_1 = Account([juan], 1, 1000)
    account_2 = Account([maria, juan], 2, 500)

    account_1.withdraw(50)
    account_2.deposit(300)
    account_1.withdraw(190)
    account_2.deposit(95.15)
    account_2.withdraw(250)

    account_1.statement()
    account_2.statement()

Inheritance
--------

+ Object inheritance allows us to modify our classes by adding or modifying attributes and methods based on the previous class.
+ We will create special accounts where we can withdraw more money than the balance, up to a certain limit.
+ Deposit, withdrawal, and summary operations continue as a regular account.


Special Account Class
---------------------

..  activecode:: ac_l25_3c_en
    :nocodelens:
    :stdin:
    :include: ac_l25_3a

    class SpecialAccount(Account):
        def __init__(self, clients, number, balance=0, limit=0):
            Account.__init__(self, clients, number, balance)
            self.limit = limit

        def withdraw(self, amount):
            if self.balance + self.limit >= amount:
                self.balance -= amount
                self.operations.append(["Withdrawal", amount])
            else:
                print("Not enough funds for withdrawal")


+ Note that we wrote ``Account`` in parentheses.
+ ``SpecialAccount`` inherits the methods and attributes of ``Account``.
+ ``self.limit`` will only be created for classes of type ``SpecialAccount``.
+ Note that we are completely overriding the ``withdraw`` method in ``SpecialAccount``.

Advantages of Inheritance
-----------------------

+ We have made minimal changes to our program, maintaining previous functionality and adding new features.
+ It was possible to reuse account methods.
+ Therefore, the definition of the ``SpecialAccount`` class was much simpler, including only the different behavior.

Using all classes
---------------------------

..  activecode:: ac_l25_3d_en
    :nocodelens:
    :stdin:
    :include: ac_l25_3a, ac_l25_3c

    juan = Client("Juan de Silva", "777-1234")
    maria = Client("Maria de Silva", "555-4321")
    account_1 = Account([juan], 1, 1000)
    account_2 = SpecialAccount([maria, juan], 2, 500, 1000)

    account_1.withdraw(50)
    account_2.deposit(300)
    account_1.withdraw(190)
    account_2.deposit(95.15)
    account_2.withdraw(1500)

    account_1.statement()
    account_2.statement()