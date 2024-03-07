Surf Championship in Codeville
===============================

..  image:: ../img/TWP37_001.jpeg
    :height: 12.571cm
    :width: 9.428cm
    :align: center
    :alt:

..  image:: ../img/TWP37_002.jpeg
    :height: 11.923cm
    :width: 17.85cm
    :align: center
    :alt:

..  image:: ../img/TWP37_003.jpeg
    :height: 12.571cm
    :width: 16.762cm
    :align: center
    :alt:


Find the highest score
----------------------

+ The scores are in the ``surf.txt`` file
+ Choose the highest score to find out the winner!

..  image:: ../img/TWP37_004.jpg
    :height: 8.566cm
    :width: 10.55cm
    :align: center
    :alt:

Python code:

.. code-block:: python

   with open('surf.txt') as f:
       scores = [int(line.strip()) for line in f]
   highest_score = max(scores)
   print(f'The winner scored {highest_score} points!')