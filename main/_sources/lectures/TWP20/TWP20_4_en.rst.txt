Random numbers
==============

.. codelens:: cl_l20_4a_en
         
    import random

    print(random.randint(1, 100))
    print(random.randint(1, 100))
    students = ["Jose",
                "Juan",
                "Pedro",
                "Lucas",
                "Thiago"]
    print(random.choice(students))
    print(random.choice(students))
    random.shuffle(students)
    print(students)
    random.shuffle(students)
    print(students)


+ A "codification" function is defined which returns the letters in a string shuffled.
+ **Note:** the ``list()`` function is used to convert a string into a list.

.. codelens:: cl_l20_4b_en
         
    import random


    def codification(s):

        lst = list(s)
        random.shuffle(lst)
        return "".join(lst)


    print(codification("palmeras"))
    print(codification("palmeras"))


+ Generate a list of 15 random integers between 10 and 100.

.. codelens:: cl_l20_4c_en
         
    import random

    lst = []
    for k in range(15):
        lst.append(
            random.randint(10, 100)
            )
    print(lst)


+ Generate a list of 15 distinct random integers between 10 and 100.

.. codelens:: cl_l20_4d_en
         
    import random

    lst = []
    while len(lst) < 15:
        x = random.randint(10, 100)
        if x not in lst:
            lst.append(x)
    lst.sort()
    print(lst)