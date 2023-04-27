Ways to iterate
===============

+ There are various ways to iterate.
+ All of them follow the pattern ``for <var> in <sequence>``.


.. activecode:: python
    :nocodelens:
    :stdin:

    print(list(range(10)))

    for k in range(10):
        print(k, end=" ")

    for k in [0, 1, 2, 3]:
        print(k, end=" ")

    for k in "avocado":
        print(k + k, end=" ")