=========================
My First PyZombis project
=========================

INTRODUCTION
::::::::::::

Hi ! I'm Kaushik Reddy. I had brought few python lectures into the Runestone layout. 

Try out these interesting python puzzels to boost your basics.

Happy Learning !


Contents:

.. toctree::
   :glob:

   lectures/*   

CHAPTER 1:  
::::::::::


Data and simple structures 
--------------------------

.. activecode:: code_snippet1
   :coach:
   :caption: Integer addition

   print("Hello World ! ")
   print("I love PyZombis !")


.. youtube:: GpbkVHV8_64
    :height: 315
    :width: 560
    :align: left

   
Quize 1
---------------

.. mchoice:: question_1
    :multiple_answers:
    :correct: b
    :answer_a: integer only
    :answer_b: float and integer
    :answer_c: float only
    :answer_d: None of the above
    :feedback_a: No, 5.0 is a float value and 5, an integer
    :feedback_b: Yes, that's correct!
    :feedback_c: Both are not float, 5 is an integer here
    :feedback_d: No, 5.0 is a float value and 5, an integer

    What kind of a datatypes are  5.0 and 5 respectively ?

Numerical Operations
--------------------

.. activecode:: code_snippet2
   :coach:
   :caption: Code sample to determine whether a number is Even/Odd
   
   numbr = int(input("Enter a number: "))
   if (numbr % 2) == 0:
   	print("{0} is Even".format(numbr))
   else:
   	print("{0} is Odd".format(numbr))

.. youtube:: mubJU5dHyP8
    :height: 315
    :width: 560
    :align: left



String operations-1.0
---------------------

.. activecode:: code_snippet3
   :coach:
   :caption: String concatenation

   str1="Hello"
   str2="World"
   str3=str1+str2
   print(str3)	
   
.. youtube:: t5sE9ruRHHM
    :height: 315
    :width: 560
    :align: left


String operations-1.1
---------------------

.. activecode:: code_snippet3.1
   :coach:
   :caption: Parsing Strings !

   strg="Argentina"
   print(strg[0:])
   print(strg[1:6])
   print(strg[:])	
   

.. youtube:: OInhmFfmNXE
    :height: 315
    :width: 560
    :align: left

Quize 2
-------

.. mchoice:: question_2
    :multiple_answers:
    :correct: d
    :answer_a: string_sample[5:9]
    :answer_b: string_sample[0:4]
    :answer_c: string_sample[5:]
    :answer_d: Both 'a' & 'c'
    :feedback_a: Yes, but even option 'c' is also cool with it.
    :feedback_b: Nope, check again.
    :feedback_c: Yes, but even option 'a' is also cool with it.
    :feedback_d: Yes, both 'a' and 'c' are true!

    Which of the following will produce "tina" from the string_sample = "Argentina" ? (choose the appropriate option).



.. activecode:: code_snippet4
   :coach:
   :caption: Conditions

   num =int(input('Enter any integer'))
   if num >0:
	print("{0} is Positive".format(num))
   elif num <0:
	print("{0} is Negative".format(num))
   else:
	print("The integer is  zero")

.. youtube:: vyRXFoZEaJw 
    :height: 315
    :width:  560
    :align:  left
   
.. youtube:: wuX0ImNSWWQ 
    :height: 315
    :width: 560
    :align: left

.. youtube:: pjOJYIzvh3w 
    :height: 315
    :width: 560
    :align: left

   
Quize 3
-------

.. mchoice:: question_3
    :multiple_answers:
    :correct: a
    :answer_a: <,> ==
    :answer_b: and, or
    :answer_c: <,>,=,==
    :answer_d: Both 'a' & 'c'
    :feedback_a: Yes, these are called the conditional operators
    :feedback_b: Nope, these are called the logical operators
    :feedback_c: Nope, '=' is not a conditional operator 
    :feedback_d: Here '=' is is not a conditional operator

    Which of the following are not conditional operators (choose the appropriate option).
   

   
.. activecode:: code_snippet5
   :coach:
   :caption: Booleans
    
   boolval=False   
   print(boolval)
   print(not (boolval))
   print(type(boolval))
   print(True or False and True)

   

