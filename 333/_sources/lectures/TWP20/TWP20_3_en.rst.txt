Local and Global Variables
============================

+ **Note**: The scope of ``a`` in the example below is different in the two cases. In other words, the two variables ``a`` are different.

.. codelens:: cl_l20_3a_en

    a = 5

    def change_and_print():
        a = 7
        print("Value of 'a' inside the function: %d" % a)


    print("Value of 'a' before changing: %d" % a)
    change_and_print()
    print("Value of 'a' after changing: %d" % a)

+ In this case, we use the keyword global. So, the variable ``a`` inside the function is the same as the variable defined earlier, that is, it is the global variable.

.. codelens:: cl_l20_3b_en

    a = 5

    def change_and_print():
        global a
        a = 7
        print("Value of a inside the function: %d" % a)


    print("Value of a before changing: %d" % a)
    change_and_print()
    print("Value of a after changing: %d" % a)

+ Observe the difference in the outputs in examples 9 and 10.