Classes and objects
===================

+ Classes combine data (attributes) and operations (methods) in a structure.
+ An object is a variable whose type is a class, that is, an object is an instance of a class.
+ We will only see the basic concepts of object-oriented programming.

..  codelens:: cl_l25_1a_en
    
    class Television:
        def __init__(self):
            self.connected = False
            self.channel = 2


    room_tv = Television()
    living_room_tv = Television()
    print(room_tv.connected)
    print(room_tv.channel)
    living_room_tv.connected = True
    living_room_tv.channel = 5
    print(living_room_tv.connected)
    print(living_room_tv.channel)

+ When we declare a class, we are creating a new data type.
+ Just like when we create a list or a string, we are creating instances or creating an instance of these classes.
+ It is the same to do ``list = []`` or ``list = list()``.
+ The ``__init__`` method is called constructor and is called when creating the object.
+ The parameter ``self`` means the television object itself.
+ ``self.connected`` is a value of the ``television`` object.
+ Whenever we want to create attributes of an object, we must associate them with itself using ``self``.
+ Otherwise, if we only write ``connected = False``, ``connected`` would be just a local variable of the method and not an attribute.

..  codelens:: cl_l25_1b_en
    
    class Television:
        def __init__(self):
            self.connected = False
            self.channel = 2

        def change_channel_down(self):
            self.channel -= 1

        def change_channel_up(self):
            self.channel += 1


    tv = Television()
    tv.change_channel_up()
    tv.change_channel_up()
    print(tv.channel)
    tv.change_channel_down()
    print(tv.channel)