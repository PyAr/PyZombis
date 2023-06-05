What are the names of the winners?
==================================

..  image:: ../img/TWP37_026.png
    :height: 7.724cm
    :width: 16.645cm
    :align: center
    :alt:


Using another list
------------------

+ We can use two lists to find out.
+ The ``names`` and ``scores`` lists to save the names and scores obtained by the participants respectively.

..  datafile:: surf4_en.txt
    :hide: 
      
    Johny 8.65
    Juan 9.12
    Joseph 8.45
    Stacey 7.81
    Aideen 8.05
    Zack 7.21
    Aaron 8.31

..  activecode:: ac_l37_6a_en
    :nocodelens:
    :datafile: surf4_en.txt
    :stdin:

    file = open("surf4_en.txt")
    scores = []
    names = []

    for line in file:
        name, points = line.split()
        scores.append(float(points))
        names.append(name)
    file.close()

    scores.sort(reverse=True)
    names.sort(reverse=True)

    print(f"1. {names[0]} {scores[0]:.2f}")
    print(f"2. {names[1]} {scores[1]:.2f}")
    print(f"3. {names[2]} {scores[2]:.2f}")


But these data are incorrect!
-----------------------------

+ There must be a problem because Zack is really bad!
+ What happened?
+ By sorting the ``names`` list in decreasing order, the character ``'Z'`` ends up being the first.
+ The correspondence between scores and the names of the participants is lost.
+ Another data structure is needed to avoid losing the correspondence.


We need to join the lists
-------------------------

..  image:: ../img/TWP37_027.png
    :height: 11.724cm
    :width: 17.645cm
    :align: center
    :alt:


Using and sorting a dictionary
-------------------------------

+ Using a dictionary and seeing all its elements iteratively.

..  codelens:: cl_l37_6_en

    scores = {}
    scores[9.12] = "Juan"
    scores[7.21] = "Zack"

    for participant in sorted(scores, reverse=True):
        print(f"{scores[participant]} {participant:.2f}")


+ Using a dictionary for the championship.

..  activecode:: ac_l37_6b_en
    :nocodelens:
    :datafile: surf4_en.txt
    :stdin:

    file = open("surf4_en.txt")
    scores = {}

    for line in file:
        name, points = line.split()
        scores[float(points)] = name
    file.close()

    for participant in sorted(scores, reverse=True):
        print(f"{scores[participant]} obtained a score of {participant:.2f}")