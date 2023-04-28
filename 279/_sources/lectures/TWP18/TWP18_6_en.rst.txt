Functions ``split`` and ``join``
=================================

.. codelens:: cl_l18_6_en

    text = "potato when born"
    print(text.split())
    date = "02/21/2011"
    print(date.split("/"))
    ip = "198.188.10.144"
    print(ip.split("."))
    places = ["Palmeiras", "Santos", "Corinthians"]
    print("/".join(places))


Exercise
--------

.. activecode:: ac_l18_6_en
    :nocodelens:
    :stdin:

    Write a program that asks for a birth date in the format "dd/mm/yyyy" and
    converts this date to the format "<day> of <month> of <year>" using the pre-written list
    ``months``. Save the result in the variable ``birth_date`` and print this variable. Remember
    that ``.split()`` returns a list and you can pass the character to separate a string as an argument.
    Save the day, month and year in string format in the variables ``day``, ``month`` and ``year``.

    ~~~~
    date = input("date (dd/mm/yyyy): ").split("/")
    months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]

    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(
                birth_date,
                "{} of {} of {}".format(day, months[int(month) - 1], year),
                "Testing that birth_date is assigned correctly",
            )
            self.assertEqual(day, date[0], "Testing that day is assigned correctly")
            self.assertEqual(month, date[1], "Testing that month is assigned correctly")
            self.assertEqual(year, date[2], "Testing that year is assigned correctly")


    myTests().main()