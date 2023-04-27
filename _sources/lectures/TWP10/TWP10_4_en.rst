``if`` / ``else``
=================

+ What to do when the ``if`` condition is false?.
+ The ``else`` clause means otherwise.
+ It is usually used to indicate complementary conditions.
+ The if / else conditions can be seen as a car arriving at a fork in the road.
+ Depending on the result of a condition, the car can take the upper or lower road.

.. image:: ../img/TWP10_009.jpg
    :height: 9.754cm
    :width: 22.859cm
    :align: center
    :alt:

+ The two codes below do the same thing but one uses if / else conditions.

.. codelens:: cl_l10_4a

    creation_year = 1
    if creation_year <= 3:
        print("Your car is new")
    if creation_year > 3:
        print("Your car is old")

.. codelens:: cl_l10_4b

    creation_year = 1
    if creation_year <= 3:
        print("Your car is new")
    else:
        print("Your car is old")