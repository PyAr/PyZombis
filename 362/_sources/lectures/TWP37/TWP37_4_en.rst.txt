Sorting the List would be Better
=================================

..  image:: ../img/TWP37_016.jpg
    :height: 12.09cm
    :width: 20.531cm
    :align: center
    :alt:


Sorting is Easier in Memory
----------------------------

+ Disk data is persistent: if you pull the power cord, the computer won't forget the information saved on the disk.
+ Data in memory is much faster, but not persistent: data in memory disappears when you exit your program or when the computer is turned off.
+ Design trade-off: persistence x speed.


First: Read Data into Memory
----------------------------

..  image:: ../img/TWP37_017.jpg
    :height: 9.55cm
    :width: 21.457cm
    :align: center
    :alt:


Wow, Let's Use a Data Train
----------------------------

+ Array, list, vector are common names for a complete set of data.
+ I only need a single variable for the entire data train.


..  image:: ../img/TWP37_018.jpg
    :height: 7.4cm
    :width: 9.632cm
    :align: center
    :alt:


Back to Surfing ...
-------------------

+ We can create a list ``scores``.
+ To insert each new score, use ``.append()``.
+ The top positions will be ``scores[0]``, ``scores[1]``, and ``scores[2]``.