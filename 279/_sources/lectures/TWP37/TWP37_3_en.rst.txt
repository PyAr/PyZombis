The marker...
===============


..  image:: ../img/TWP37_014.jpg
    :height: 10.906cm
    :width: 21.021cm
    :align: center
    :alt:


Tracking 3 scores is complicated
------------------------------------------

..  datafile:: surf2.txt
    :hide: 
      
    Johny 8.65
    Juan 9.12
    Joseph 8.45
    Stacey 7.81
    Aideen 8.05
    Zack 7.21
    Aaron 8.31

..  activecode:: ac_l37_3_en
    :nocodelens:
    :datafile: surf2.txt
    :stdin:
   
    file = open("surf2.txt")
    first = 0
    second = 0
    third = 0
    for line in file:
        name, points = line.split()
        if float(points) > first:
            third = second
            second = first
            first = float(points)
        elif float(points) > second:
            third = second
            second = float(points)
        elif float(points) > third:
            third = float(points)
    file.close()

    print("%.2f" % first)
    print("%.2f" % second)
    print("%.2f" % third)