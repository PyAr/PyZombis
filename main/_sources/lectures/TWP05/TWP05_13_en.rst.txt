Changing variables over time
=============================

+ A program is executed line by line.
+ Therefore, the variables can change throughout the execution of your program.

.. codelens:: cl_l05_13_en
    
    debt = 0 
    purchase = 100
    debt = debt + purchase
    purchase = 200
    debt = debt + purchase
    purchase = 300
    debt = debt + purchase
    print(debt)