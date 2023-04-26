Logical expressions
===================

+ We can combine logical operators to form complex logical expressions
+ The evaluation order is: ``not`` > ``and`` > ``or``. This means that in an expression, the ``not`` logical operator is evaluated first, then ``and``, and finally ``or``.

Let's see an example:

.. codelens:: cl_l05_10a_en

   print(not False or False and True)
   print(False or True and True)
   print(not False and True or False)

Example
-------

+ The conditions for granting a motorcycle purchase loan are: having a salary greater than $1,000.00 and being over 18 years old. Check if José can get the loan:

.. codelens:: cl_l05_10b_en
    
    salary = 500.0
    age = 20
    print(salary > 1000 and age > 18)

Example
-------

+ Check if a student passed given that they obtained an average score of 5.8 in the exercise program and obtained an average score of 7 in the tests:

.. codelens:: cl_l05_10c_en
    
    ep = 5.8
    p = 7
    passed = ep >= 6 and p >= 6
    print(passed)