=========================
My First PyZombis project
=========================

SECTION 1: Introduction
:::::::::::::::::::::::

Hi ! I'm Kaushik Reddy. I had brought few python lectures into the Runestone layout. 

Try out these interesting python puzzels to boost your basics.

Happy Learning !





SECTION 2: Sample Code snippets
:::::::::::::::::::::::::::::::


FirstCode
----------

.. activecode:: code_snippet1
   :coach:
   :caption: Integer addition

   print("Hello World ! ")
   print("I love PyZombis !")
   
Quize 1
---------------

.. mchoice:: question_1
    :multiple_answers:
    :correct: b
    :answer_a: List
    :answer_b: Dictionary
    :answer_c: Tuple
    :answer_d: All of the above
    :feedback_a: No, List doesn't have "key:value" concept.
    :feedback_b: Yes, Dictionary is correct.
    :feedback_c: Tuple acts merely like a List, hence nope.
    :feedback_d: Nope, all of them doesn't have "key:value" relations.

    Which python data structure/(s) uses the concept of "Key:value" ? (choose the appropriate option)


Arithmetic Operations
---------------------

.. activecode:: code_snippet2
   :coach:
   :caption: Code sample to determine whether a number is Even/Odd
   
   numbr = int(input("Enter a number: "))
   if (numbr % 2) == 0:
   	print("{0} is Even".format(numbr))
   else:
   	print("{0} is Odd".format(numbr))


String operations-1.0
---------------------

.. activecode:: codeexample3
   :coach:
   :caption: String concatenation

   str1="Hello"
   str2="World"
   str3=str1+str2
   print(str3)	
   

String operations-1.1
---------------------

.. activecode:: codeexample3.1
   :coach:
   :caption: Parsing Strings !

   strg="Argentina"
   print(strg[0:])
   print(strg[1:6])
   print(strg[:])	
   

Quize 2
---------------

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

    Which of the following will produce "tina" from the string_sample = "Argentina" ? (choose the appropriate option)

