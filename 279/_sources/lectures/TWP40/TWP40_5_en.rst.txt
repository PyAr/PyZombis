Exit Commands 
==================

+ The command or instruction ``print`` serves to display information to the user.

End-of-line character
------------------------ 

+ The ``print`` command adds a line break as a character by default.
+ The end-of-line character can be replaced using ``end`` in the ``print`` command.

.. codelens:: cl_l40_5
         
    for x in "avocado":
        if x in "ae":
            print(x, end=" ")
        else:
            print("*", end=" ")