Other examples of OOP
=====================

+ We can create a class ``Person`` with basic attributes.

..  activecode:: ac_l25_4a_en
    :nocodelens:
    :stdin:
         
    import datetime


    class Person:
        def __init__(self, name, birthdate):
            self.name = name
            self.birthdate = birthdate

        def age(self):
            delta = datetime.date.today() - self.birthdate
            return int(delta.days / 365)

        def __str__(self):
            return "%s, %d years old" % (self.name, self.age())


    masanori = Person("Fernando Masanori", datetime.date(1980, 9, 1))
    print(masanori.age())
    print(masanori)

+ You can use the implementation of the class ``Person`` to create an object with your name.

..  activecode:: ac_l25_4b_en
    :nocodelens:
    :stdin:
    :include: ac_l25_4a

    # Create an object with your name