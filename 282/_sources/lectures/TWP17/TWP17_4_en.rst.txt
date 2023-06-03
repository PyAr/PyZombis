Some examples
=============

+ Make a program that reads a vector of 5 integers and displays the vector.

..  activecode:: ac_l17_4a_en
    :nocodelens:
    :stdin:

    vector = []
    i = 1
    while i <= 5:
        n = int(input("Enter a number: "))
        vector.append(n)
        i = i + 1
    print("Read vector:", vector)


+ Make a program that reads a vector of ten real numbers and displays them in reverse order.

..  activecode:: ac_l17_4b_en
    :nocodelens:
    :stdin:

    vector = []
    i = 1
    while i <= 10:
        n = float(input("Enter a number: "))
        vector.append(n)
        i += 1
    i = 9
    while i >= 0:
        print(vector[i])
        i -= 1

+ Make a program that reads four grades, displays the grades, and the average on the screen.

..  activecode:: ac_l17_4c_en
    :nocodelens:
    :stdin:

    grades = []
    i = 1
    while i <= 4:
        n = float(input("Grade: "))
        grades.append(n)
        i += 1
    suma = 0
    i = 0
    while i <= 3:
        suma += grades[i]
        i += 1
    print("Grades:", grades)
    print("Average: %4.2f" % (suma / 4))

+ Another way of doing the same thing.

.. activecode:: ac_l17_4d_en
   :nocodelens:
   :stdin:

    grades = []
    i = 1
    suma = 0
    while i <= 4:
        n = float(input("Grade: "))
        grades.append(n)
        suma += n
        i += 1
    print("Grades:", grades)
    print("Average: %4.2f" % (suma / 4))


+ Make a program that reads a vector of 10 lowercase characters, and tells how many consonants were read.

..  activecode:: ac_l17_4e_en
    :nocodelens:
    :stdin:

    letters = []
    i = 1
    while i <= 10:
        letters.append(input("Letter: "))
        i += 1
    i = 0
    cont = 0
    while i <= 9:
        if letters[i] not in "aeiou":
            cont += 1
        i += 1
    print("%d consonants were read" % cont)