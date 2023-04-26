Boolean Variables
=================

+ We can store true and false
+ Variables of this type are called logical or boolean
+ In Python, we can initialize variables of this type with ``True`` or ``False``
+ Note that the T and F are capitalized, any other form generates a syntax error

Relational Operators
-----------------------

.. table:: **Relational Operators**
   :widths: auto

   ======== ============== ==============================
   Operator Operation      Mathematical equivalent symbol
   ======== ============== ==============================
   ==       equal          =
   >        greater than   >
   <        less than      <
   !=       not equal      <>
   >=       greater or equal  >=
   <=       less or equal  <=
   ======== ============== ==============================
 
+ Note that the equality operator is two equals (``==``)

Examples:
---------

.. codelens:: cl_l05_8a_en
    
    a = 1
    b = 5   
    c = 2  
    d = 1    
    print(a == b)   
    print(b > a)   
    print(a < b)   
    print(a == d)   
    print(b >= a)   
    print(c <= b)   
    print(d != a)   
    print(d != b)  

Important Example
------------------

+ >= or <= for equal values

.. codelens:: cl_l05_8b_en
    
    print(5 >= 5)   
    print(5 <= 5)  

Example
-------

+ We can use relational operators to initialize logical variables

.. codelens:: cl_l05_8c_en
    
    grade = 8   
    average = 6   
    passed = grade > average   
    print(passed)