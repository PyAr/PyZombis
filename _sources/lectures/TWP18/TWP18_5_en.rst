Functions ``find`` and ``replace``
==================================


.. codelens:: cl_l18_5
    
    s = "one tiger, two tigers, three tigers"
    print(s.find("tiger"))
    print(s.find("tiger", 4))
    print(s.find("tiger", 16))
    print(s.replace("tiger", "cat"))
    s = s.replace("tiger", "cat")
    print(s)