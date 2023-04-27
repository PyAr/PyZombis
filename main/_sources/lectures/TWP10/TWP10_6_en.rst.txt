``elif``
========

+ The ``elif`` clause replaces both ``else`` and ``if``.

.. codelens:: cl_l10_6

    minutes = 1000
    if minutes < 200:
        price = 0.2
    elif minutes <= 400:
        price = 0.18
    elif minutes <= 800:
        price = 0.15
    else:
        price = 0.08
    print("Phone bill: $%6.2f" % (minutes * price))