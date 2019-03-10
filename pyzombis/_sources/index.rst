=========================
My First PyZombis project
=========================

.. Here is were you specify the content and order of your new book.

.. Each section heading (e.g. "SECTION 1: A Random Section") will be
   a heading in the table of contents. Source files that should be
   generated and included in that section should be placed on individual
   lines, with one line separating the first source filename and the
   :maxdepth: line.

.. Sources can also be included from subfolders of this directory.
   (e.g. "DataStructures/queues.rst").

SECTION 1: Introduction
:::::::::::::::::::::::

Hi! I'm Kaushik Reddy. I had brought few python lecture into the Runestone layout. 

::


   .. toctree::
      :maxdepth: 2

      some/path/myfile.rst


Section 2: Links
::::::::::::::::

Runestone uses the ``restructuredText`` (rst) markup language.  We chose this over markdown largely because rst is extensible.  Nearly all of the basic markup tasks are already handled by restructuredText.  You should check out the docs for the basics of restructuredText (link below). Our extensions are all for the interactive elements.  One key hint about restructuredText:  Its like **Python** -- *indentation matters!*

* `restructuredText Docs <http://docutils.sourceforge.net/rst.html>`_
* `Runestone Docs <http://runestoneinteractive.org/build/html/index.html>`_
* Join the discussion on our `Google Group <https://groups.google.com/forum/#!forum/runestone_instructors>`_
* Tell us about problems on `Github <https://github.com/RunestoneInteractive/RunestoneComponents>`_



SECTION 3: Sample Directives
::::::::::::::::::::::::::::

ActiveCode
----------

.. activecode:: codeexample1
   :coach:
   :caption: List addtion

   print("My first program adds a list of numbers")
   myList = [2, 4, 6, 8, 10]
   total = 0
   for num in myList:
       total = total + num
   print(total)

Multiple Choice
---------------

.. mchoice:: question1_2
    :multiple_answers:
    :correct: a,b,d
    :answer_a: red
    :answer_b: yellow
    :answer_c: black
    :answer_d: green
    :feedback_a: Red is a definitely on of the colors.
    :feedback_b: Yes, yellow is correct.
    :feedback_c: Remember the acronym...ROY G BIV.  B stands for blue.
    :feedback_d: Yes, green is one of the colors.

    Which colors might be found in a rainbow? (choose all that are correct)

User input Choice
-----------------

.. activecode:: codeexample2
   :coach:
   :caption: Code sample to determine whether a number is Even/Odd
   
   num=int((input("Enter a number:"))
   if num%2==0:
	print(num + " " + "is Even")
   else:
	print(num + " " + "is Odd")
	


String operations
-----------------

.. activecode:: codeexample3
   :coach:
   :caption: String concatenation

   str1="Hello"
   str2="World"
   str3=str1+str2
   print(str3)	
   




