=================
Classes e Objetos
=================


.. image:: img/TWP10_001.jpeg
   :height: 14.925cm
   :width: 9.258cm
   :align: center
   :alt: 



.. youtube:: Zr_FiKbgRbU
      :height: 315
      :width: 560
      :align: center



Baixar os códigos abaixo
========================



+ tv*.py
+ tatu*.py
+ teste*.py




Classes e objetos
=================



+ Classes associam dados (atributos) e operações (métodos) em uma só
  estrutura
+ Um objeto é uma variável cujo tipo é uma classe, ou seja, um objeto
  é uma instância de uma classe
+ Veremos apenas o básico da orientação à objetos


Classes e objetos
=================


.. codelens:: Example8_1
         
        class Televisao:
          def __init__ (self):
            self.ligada = False
            self.canal = 2

        tv_quarto = Televisao() 
        tv_sala = Televisao()
        print(tv_quarto.ligada) 
        print(tv_quarto.canal)
        tv_sala.ligada = True
        tv_sala.canal = 5 


Classes e objetos
=================



+ Quando declaramos uma classe, estamos criando um novo tipo de dados
+ Da mesma forma que quando criamos uma lista ou uma string, estamos
  instanciando ou criando uma instância dessas classes
+ É a mesma coisa fazer lista = [] ou lista = list()
+ O método __init__ é chamado construtor e é chamado na criação do
  objeto


Classes e objetos
=================



+ O parâmetro self significa o objeto televisão em si
+ self.ligada é um valor de self, ou seja, do objeto televisão
+ Sempre que criamos atributos do objeto, devemos associá-los a self.
+ Caso contrário, se escrevêssemos apenas ligada = False, ligada seria
  apenas uma variável local do método e não um atributo


.. youtube:: l5YK0Y1QF1w
      :height: 315
      :width: 560
      :align: center

      

Classes e objetos
=================


.. codelens:: Example8_2
         
        class Televisao:
          def __init__ (self):
            self.ligada = False
            self.canal = 2
          def muda_canal_para_baixo(self):
            self.canal -= 1
          def muda_canal_para_cima(self):
            self.canal += 1

        tv = Televisao()
        tv.muda_canal_para_cima() 
        tv.muda_canal_para_cima()
        print(tv.canal)
        tv.muda_canal_para_baixo()
        print(tv.canal) 


Classes e objetos
=================



.. youtube:: 3MTDybCeMQE
      :height: 315
      :width: 560
      :align: center



+ Você irá informatizar o banco Tatú, controlando o saldo das contas
  correntes
+ Cada conta corrente pode ter um ou mais clientes como titular
+ O banco controla apenas o nome e telefone
+ A conta corrente apresenta um saldo e um extrato de operações de
  saques e depósitos
+ Não há contas especiais, logo o cliente não pode sacar mais do que
  têm no saldo


Arquivo tatu.py
===============


.. activecode:: Example8_3
   :nocodelens:
   :stdin:

   class Cliente:
    def __init__ (self,nome,telefone):
      self.nome = nome
      self.telefone = telefone
   class Conta:
    def __init__(self, clientes, numero, saldo = 0):
      self.saldo = saldo
      self.clientes = clientes
      self.numero = numero
    def resumo(self):
      print('CC Numero: %s Saldo: %10.2f' %(self.numero,self.saldo))
    def saque(self,valor):
      if self.saldo >= valor:
        self.saldo -= valor
    def deposito(self, valor):
      self.sado += valor


Arquivo teste.py, Saída de teste
================================


.. activecode:: Example8_4
   :nocodelens:
   :stdin:
   :include: Example8_3

   joao = Cliente('Joao da Silva','777-1234')
   maria = Cliente('Maria da Silva','555-4321')
   print('Nome : %s. Telefone: %s' %(joao.nome,joao.telefone))
   print('Nome : %s. Telefone: %s' %(maria.nome,maria.telefone))
   conta1 = Conta([joao],1,1000)
   conta2 = Conta([maria,joao],2,500)
   conta1.resumo()
   conta2.resumo()

    

Extrato de operações
====================


.. youtube:: d34q8zBje0I
      :height: 315
      :width: 560
      :align: center


+ Altere o método resumo da classe Conta para extrato, imprimindo
  agora uma lista de operações de saques e depósitos feitas
+ Altere o método __init__ para que utilize o método depósito para
  inicializar o saldo


Arquivo tatu2.py (apenas Conta)
===============================


.. activecode:: Example8_5
   :nocodelens:
   :stdin:

   class Cliente:
    def __init__ (self,nome,telefone):
      self.nome = nome
      self.telefone = telefone
   class Conta:
    def __init__(self, clientes, numero, saldo = 0):
      self.saldo = saldo
      self.clientes = clientes
      self.numero = numero
      self.operacoes = []
      self.deposito(saldo)
    def resumo(self):
      print('CC N: %s Saldo: %10.2f' %(self.numero,self.saldo))
    def saque(self,valor):
      if self.saldo >= valor:
        self.saldo -= valor
        self.operacoes.append(['Saque',valor])
    def deposito(self, valor):
      self.sado += valor
      self.operacoes.append(['Depósito',valor])
    def extrato(self):
      print('Extrato CC N %s' %self.numero)
      for op in self.operacoes:
        print("%10s %10.2f" %(op[0],op[1]))
      print('%10s %10.2f\n' %('Saldo=',self.saldo))

Arquivo teste2.py, Saída de teste2
==================================


.. activecode:: Example8_6
   :nocodelens:
   :stdin:
   :include: Example8_5

   joao = Cliente('Joao da Silva','777-1234')
   maria = Cliente('Maria da Silva','555-4321')
   conta1 = Conta([joao],1,1000)
   conta2 = Conta([maria,joao],2,500)
   conta1.saque(50)
   conta2.deposito(300)
   conta1.saque(190)
   conta2.deposito(95.15)
   conta2.saque(250)
   conta1.extrato()
   conta2.extrato()


Herança
=======



.. youtube:: dtvjm7_PCiU
      :height: 315
      :width: 560
      :align: center



+ A orientação a objetos permite modificar nossas classes, adicionando
  ou modificando atributos e métodos, tendo como base a classe anterior
+ Vamos criar contas especiais, onde podemos sacar mais dinheiro que o
  saldo, até um determinado limite
+ As operações depósito, extrato e resumo continuam como uma conta
  normal




Adicionar ContaEspecial tatu3.py
================================


.. activecode:: Example8_7
   :nocodelens:
   :stdin:

   class Cliente:
    def __init__ (self,nome,telefone):
      self.nome = nome
      self.telefone = telefone

   class Conta:
    def __init__(self, clientes, numero, saldo = 0):
      self.saldo = saldo
      self.clientes = clientes
      self.numero = numero
      self.operacoes = []
      self.deposito(saldo)
    def resumo(self):
      print('CC N: %s Saldo: %10.2f' %(self.numero,self.saldo))
    def saque(self,valor):
      if self.saldo >= valor:
        self.saldo -= valor
        self.operacoes.append(['Saque',valor])
    def deposito(self, valor):
      self.sado += valor
      self.operacoes.append(['Depósito',valor])
    def extrato(self):
      print('Extrato CC N %s' %self.numero)
      for op in self.operacoes:
        print("%10s %10.2f" %(op[0],op[1]))
      print('%10s %10.2f\n' %('Saldo=',self.saldo))

   class ContaEspecial(Conta):
    def __init__(self, clientes, numero, saldo = 0):
      Conta.__init__(self,clientes,numero, saldo)
      self.limite = limite
    def saque(self,valor):
      if self.saldo + self.limite >= valor:
        self.saldo -= valor
        self.operacoes.append(['Saque',valor])


ContaEspecial
=============



+ Observe que escrevemos Conta entre parênteses
+ ContaEspecial herda os métodos e atributos de Conta
+ self.limite será criado apenas para classes do tipo ContaEspecial
+ Observe que estamos substituindo completamente o método saque em
  ContaEspecial


Arquivo teste3.py, Saída teste 3
================================


.. activecode:: Example8_8
   :nocodelens:
   :stdin:
   :include: Example8_7

   joao = Cliente('Joao da Silva','777-1234')
   maria = Cliente('Maria da Silva','555-4321')
   conta1 = Conta([joao],1,1000)
   conta2 = Conta([maria,joao],2,500,1000)
   conta1.saque(50)
   conta2.deposito(300)
   conta1.saque(190)
   conta2.deposito(95.15)
   conta2.saque(250)
   conta1.extrato()
   conta2.extrato()




Vantagens da herança
====================



+ Modificamos muito pouco o nosso programa, mantendo a funcionalidade
  anterior e adicionando novos recursos
+ Foi possível fazer o reuso dos métodos de Conta
+ Assim a definição da classe ContaEspecial foi bem menor, incluindo
  apenas o comportamento diferente


Outro exemplo OOP
=================



.. youtube:: eIZCUlC29Yw
      :height: 315
      :width: 560
      :align: center



.. codelens:: Example8_9
         
        import datetime

        class Pessoa():
          def __init__ (self,nome,nascimento):
            self.nome = nome
            self.nascimento = nascimento

          def idade(self):
            delta = datetime.date.today() - self.nascimento
            return int(delta.days/365)

          def __str__ (self):
            return '%s,%d anos' %(self.nome,self.idade())

        masanori = Pessoa('Fernando Masanori', datetime.date(1980,9,1))
        print(masanori.idade())
        print(masanori)




.. youtube:: wrMj5CwGeBY
      :height: 315
      :width: 560
      :align: center




.. disqus::
   :shortname: pyzombis
   :identifier: lecture8


