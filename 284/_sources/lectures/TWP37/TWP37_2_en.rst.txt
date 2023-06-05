Reading the file ``surf.txt``
=============================

..  datafile:: surf.txt
    :hide: 
      
    Johny 8.65
    Juan 9.12
    Joseph 8.45
    Stacey 7.81
    Aideen 8.05
    Zack 7.21
    Aaron 8.31

..  activecode:: ac_l37_2a_en
    :nocodelens:
    :datafile: surf.txt
    :stdin:

    file = open("surf.txt")
    for line in file:
        print(line.strip())
    file.close()


For loop breakdown
------------------

..  image:: ../img/TWP37_007.jpg
    :height: 12.627cm
    :width: 13cm
    :align: center
    :alt:


Find out who got the highest score
-----------------------------------

..  image:: ../img/TWP37_008.jpg
    :height: 14.824cm
    :width: 11cm
    :align: center
    :alt:


The ``split`` method breaks up the string
-----------------------------------------

..  image:: ../img/TWP37_010.jpg
    :height: 12.571cm
    :width: 21.839cm
    :align: center
    :alt:

..  image:: ../img/TWP37_011.jpg
    :height: 12.571cm
    :width: 21.839cm
    :align: center
    :alt:


Finding the 1st place
---------------------

..  activecode:: ac_l37_2b_en
    :nocodelens:
    :datafile: surf.txt
    :stdin:
   
    file = open("surf.txt")
    highest_score = 0
    for line in file:
        name, score = line.split()
        if float(score) > highest_score:
            highest_score = float(score)
    file.close()
    print(highest_score)