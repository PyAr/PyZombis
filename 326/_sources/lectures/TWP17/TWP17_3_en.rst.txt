Syntax of a List
================

+ An empty list

..  codelens:: cl_l17_3a_en

    lista = []

+ A list with three grades.

..  codelens:: cl_l17_3b_en

    grades = [7.5, 9, 8.3]

+ Accessing a grade.

..  codelens:: cl_l17_3c_en

    grades = [7.5, 9, 8.3]
    print(grades[0])

+ Changing the first grade.

..  codelens:: cl_l17_3d_en
         
    grades = [7.5, 9, 8.3]
    grades[0] = 8.7
    print(grades[0])

+ Average of 5 grades.

..  codelens:: cl_l17_3e_en

    grades = [6, 7, 5, 8, 9]
    sum = 0
    x = 0
    while x < 5:
        sum += grades[x]
        x += 1
    print("Average: %5.2f" % (sum / x))

+ **Note:** ``x += 1`` is the same as ``x = x + 1``.