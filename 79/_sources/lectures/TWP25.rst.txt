=================
Clases y objetos
=================


.. image:: img/TWP10_001.jpeg
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



+ Las clases asocian datos (atributos) y operaciones (métodos) en uno
   estructura
+ Un objeto es una variable cuyo tipo es una clase, es decir, un objeto
   es una instancia de una clase
+ Solo veremos los conceptos básicos de la orientación a objetos

Clases y objetos
=================


.. codelens:: Example8_1
         
        class Television:
          def __init__ (self):
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



+ Cuando declaramos una clase, estamos creando un nuevo tipo de datos
+ Al igual que cuando creamos una lista o una cadena, estamos creando instancias o creando una instancia de estas clases
+ Es lo mismo hacer list = [] o list = list ()
+ El método __init__ se llama constructor y se llama al crear el objeto


Clases y objetos
================



+ El parámetro propio significa el objeto de televisión en sí
+ self.linked es un valor de self, es decir, del objeto de televisión
+ Siempre que creamos atributos del objeto, debemos asociarlos con uno mismo.
+ De lo contrario, si escribimos solo vinculado = Falso, vinculado sería
  solo una variable de método local y no un atributo


Classes e objetos
=================


.. codelens:: Example8_2
         
        class Television:
          def __init__ (self):
            self.conectada = False
            self.canal = 2
          def cambia_el_canal_hacia_abajo(self):
            self.canal -= 1
          def cambia_el_canal_para_arriba(self):
            self.canal += 1

        tv = Television()
        tv.cambia_el_canal_para_arriba() 
        tv.cambia_el_canal_para_arriba()
        print(tv.canal)
        tv.cambia_el_canal_hacia_abajo()
        print(tv.canal) 


Classes e objetos
=================



+ Informatizarás el banco Tatú, controlando el saldo de la cuenta corriente
+ Cada cuenta corriente puede tener uno o más clientes como titular
+ El banco controla solo el nombre y el número de teléfono
+ La cuenta corriente muestra un saldo y un estado de cuenta de las operaciones de retiro y depósito.
+ No hay cuentas especiales, por lo que el cliente no puede retirar más de
  tener en equilibrio


Archivo tatu.py
===============


.. activecode:: Example8_3
   :nocodelens:
   :stdin:

   class Cliente:
    def __init__ (self,nombre,telefono):
      self.nombre = nombre
      self.telefono = telefono
   class cuenta:
    def __init__(self, Clientes, numero, saldo = 0):
      self.saldo = saldo
      self.Clientes = Clientes
      self.numero = numero
    def resumen(self):
      print('CC numero: %s saldo: %10.2f' %(self.numero,self.saldo))
    def extracto(self,valor):
      if self.saldo >= valor:
        self.saldo -= valor
    def deposito(self, valor):
      self.sado += valor


Archivo Test.py, salida de prueba
=================================


.. activecode:: Example8_4
   :nocodelens:
   :stdin:
   :include: Example8_3

   juan = Cliente('Juan de Silva','777-1234')
   maria = Cliente('Maria de Silva','555-4321')
   print('nombre : %s. telefono: %s' %(juan.nombre,juan.telefono))
   print('nombre : %s. telefono: %s' %(maria.nombre,maria.telefono))
   conta1 = conta([Juan],1,1000)
   conta2 = conta([maria,Juan],2,500)
   conta1.resumen()
   conta1.resumen()

    

Declaración de operaciones
==========================



+ Cambie el método de resumen de la clase Cuenta a un estado de cuenta, ahora imprima una lista de las operaciones de retiro y depósito realizadas
+ Cambie el método __init__ para usar el método de depósito para inicializar el saldo



Arquivo tatu2.py (apenas Conta)
===============================


.. activecode:: Example8_5
   :nocodelens:
   :stdin:

   class Cliente:
    def __init__ (self,nombre,telefone):
      self.nombre = nombre
      self.telefono = telefono
   class conta:
    def __init__(self, Clientes, numero, saldo = 0):
      self.saldo = saldo
      self.Clientes = Clientes
      self.numero = numero
      self.operaciones = []
      self.deposito(saldo)
    def resumen(self):
      print('CC N: %s saldo: %10.2f' %(self.numero,self.saldo))
    def saque(self,valor):
      if self.saldo >= valor:
        self.saldo -= valor
        self.operacoes.append(['Retirar',valor])
    def deposito(self, valor):
      self.sado += valor
      self.operacoes.append(['Deposito',valor])
    def extracto(self):
      print('extracto CC N %s' %self.numero)
      for op in self.operaciones:
        print("%10s %10.2f" %(op[0],op[1]))
      print('%10s %10.2f\n' %('Saldo=',self.saldo))

Archivo teste2.py, salida teste2
=================================


.. activecode:: Example8_6
   :nocodelens:
   :stdin:
   :include: Example8_5

   juan = Cliente('Juan de Silva','777-1234')
   maria = Cliente('Maria de Silva','555-4321')
   conta1 = Cuenta([juan],1,1000)
   conta2 = centa([maria,juan],2,500)
   conta1.extracto(50)
   conta2.deposito(300)
   conta1.extracto(190)
   conta2.deposito(95.15)
   conta2.extracto(250)
   conta1.extracto()
   conta2.extracto()


Herencia
========



+ La orientación a objetos le permite modificar nuestras clases, agregando
  o modificando atributos y métodos, basados en la clase anterior
+ Crearemos cuentas especiales, donde podemos retirar más dinero que
  equilibrio, hasta cierto límite
+ Las operaciones de depósito, extracto y resumen continúan como una cuenta
  normal




Añadir Cuenta Especial tatu3 tatu3.py
=====================================


.. activecode:: Example8_7
   :nocodelens:
   :stdin:

   class Cliente:
    def __init__ (self,nome,telefono):
      self.nombre = nombre
      self.telefono = telefono

   class Conta:
    def __init__(self, Clientes, numero, saldo = 0):
      self.saldo = saldo
      self.Clientes = Clientes
      self.numero = numero
      self.operaciones = []
      self.deposito(saldo)
    def resumo(self):
      print('CC N: %s Saldo: %10.2f' %(self.numero,self.saldo))
    def saque(self,valor):
      if self.saldo >= valor:
        self.saldo -= valor
        self.operaciones.append(['Retirar',valor])
    def deposito(self, valor):
      self.sado += valor
      self.operacoes.append(['Depósito',valor])
    def extrato(self):
      print('extracto CC N %s' %self.numero)
      for op in self.operaciones:
        print("%10s %10.2f" %(op[0],op[1]))
      print('%10s %10.2f\n' %('Saldo=',self.saldo))

   class ContaEspecial(Conta):
    def __init__(self, Clientes, numero, saldo = 0):
      Conta.__init__(self,Clientes,numero, saldo)
      self.limite = limite
    def saque(self,valor):
      if self.saldo + self.limite >= valor:
        self.saldo -= valor
        self.operacoes.append(['Saque',valor])


ContaEspecial
=============



+ Tenga en cuenta que escribimos Cuenta entre paréntesis
+ ContaEspecial hereda los métodos y atributos de la cuenta
+ self.limite se creará solo para clases de tipo ContaEspecial
+ Tenga en cuenta que estamos reemplazando completamente el método de retiro en
  Cuenta especial


Archivo teste3.py, salida test3
=================================


.. activecode:: Example8_8
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



+ Hemos modificado muy poco nuestro programa, manteniendo la funcionalidad anterior y agregando nuevas  características
+ Fue posible reutilizar los métodos de la cuenta
+ Por lo tanto, la definición de la clase ContaEspecial fue mucho más baja, incluyendo solo el comportamiento diferente


Otro ejemplo de OOP
===================


.. codelens:: Example8_9
         
        import datetime

        class Persona():
          def __init__ (self,Nombre,nacimento):
            self.Nombre = Nombre
            self.nacimiento = nacimento

          def edad(self):
            delta = datetime.date.today() - self.nacimento
            return int(delta.days/365)

          def __str__ (self):
            return '%s,%d años' %(self.Nombre,self.edad())

        masanori = Persona('Fernando Masanori', datetime.date(1980,9,1))
        print(masanori.edad())
        print(masanori)

