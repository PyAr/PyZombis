New Score
=========

..  datafile:: surf3.txt
    :hide: 
      
    Johny 8.65
    Juan 9.12
    Joseph 8.45
    Stacey 7.81
    Aideen 8.05
    Zack 7.21
    Aaron 8.31

..  activecode:: ac_l37_5a_en
    :nocodelens:
    :datafile: surf3.txt
    :stdin:
   
    file = open("surf3.txt")
    scores = []

    for line in file:
        name, points = line.split()
        scores.append(float(points))
    file.close()

    print(f"1. {scores[0]:.2f}")
    print(f"2. {scores[1]:.2f}")
    print(f"3. {scores[2]:.2f}")


.. image:: ../img/TWP37_021.jpg
   :height: 10.006cm
   :width: 12.699cm
   :align: center
   :alt:


Sorting in decreasing order
----------------------------

..  image:: ../img/TWP37_022.jpg
    :height: 12.571cm
    :width: 22.825cm
    :align: center
    :alt:


``sort`` and ``reverse`` methods
------------------------------

+ The ``sort`` method sorts the data.
+ The use of ``reverse`` keeps them in descending order.
+ It is smarter to use ``scores.sort(reverse=True)``


Finally the correct positions
-----------------------------

..  activecode:: ac_l37_5b_en
    :nocodelens:
    :datafile: surf3.txt
    :stdin:
   
    file = open("surf3.txt")
    scores = []

    for line in file:
        name, points = line.split()
        scores.append(float(points))
    file.close()

    scores.sort(reverse=True)

    print(f"1. {scores[0]:.2f}")
    print(f"2. {scores[1]:.2f}")
    print(f"3. {scores[2]:.2f}")

..  image:: ../img/TWP37_025.jpg
    :height: 7.724cm
    :width: 16.645cm
    :align: center
    :alt: