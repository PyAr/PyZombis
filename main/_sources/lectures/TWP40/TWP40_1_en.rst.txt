The Software Development Process
================================

+ Running programs created by others is relatively simple
+ The hard part is starting to create your own programs
+ Computers are very strict and there are many details
+ So it is necessary to be very systematic

Steps in the Software Development Process
------------------------------------------

+ Analyze the problem:
    + Understand exactly what is the problem to solve?
    + Well-defined problem, halfway solved problem.

+ Specification of what the program will do:
    + Describe exactly what your program will do.
    + At this stage, I shouldn't worry about how I'm going to make my program? but more decide exactly what it will do?
    + What are the inputs and outputs of the program?

+ Design the program:
    + Formulate the general structure of the program.
    + We can use pseudocode at this step.

+ Implement the program:
    + Design some tests to validate your program.
    + Translate the project to any programming language.
    + In this course we will use Python.

Example: Fahrenheit to Celsius temperature converter
----------------------------------------------------

+ Problem analysis:
    + Given a temperature in *Fahrenheit*, obtain the conversion in Celsius.

+ Specification of what the program will do:
    + Input: temperature in Fahrenheit
    + Output: temperature in degrees Celsius
    + Output: 5 * (F-32) / 9

+ Design of how the program will work:
    + Read the value of temperature in Fahrenheit.
    + Convert the value using the formula ``5 * (F-32) / 9``
    + Print the converted value.

+ Implementation of the problem:
    + Tests: 32F = 0C and 100F = 37.8C

.. activecode:: ac_l40_1_en
    :nocodelens:
    :stdin:

    F = float(input("Fahrenheit: "))
    C = 5 * (F - 32) / 9
    print("Celsius: %2.1f" % C)