Partial verification of strings
===============================


.. codelens:: cl_l18_4
     
    file = "prog.py"
    print(file.startswith("p"))
    print(file.endswith("p"))
    answer = "Yes"
    print(answer.lower())
    print(answer.upper())
    print(answer.lower() in "yes no")