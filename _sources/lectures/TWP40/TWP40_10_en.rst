Exercise
=========

+ We want to develop a program that determines the future value of an investment, given the initial value and the interest rate
+ We follow the steps for development.


+ Analysis:
    + The initial money generates an annual interest rate
    + How much will it be worth in 10 years?
    + Input: initial amount, interest rate
    + Output: value in 10 years

+ Specification:
    + The user enters the initial amount invested
    + The user enters the annual interest rate
    + Value of the financial mathematical formula * (1 + interest)

+ Design:
    + Enter the initial investment amount.
    + Enter the interest rate.
    + Repeat 10 times:
        + initial value = initial value * (1 + interest rate)
    + Print the updated value.

+ Implementation:
    + Test values:
        + 1000 dollars investment and 3% annual interest rate
        + 1000 dollars investment and 10% annual interest rate

.. activecode:: ac_l40_10_en
    :nocodelens:
    :stdin:

    value = float(input("Initial amount invested: "))
    rate = float(input("Annual interest rate: "))
    for i in range(10):
        value = value * (1 + rate / 100)
    print("Value after 10 years:  %5.2f" % value)


FAQs
--------------------
.. mchoice:: feedback_l40_10_1
    :random:
    :answer_a: Helps us build the correct product without waste or redundancy
    :feedback_a: It often makes sense to write the test first and then write as much code as necessary to allow the test to pass.
    :answer_b: Makes the code run faster.
    :feedback_b: This is incorrect because defining tests doesn't directly affect the speed of the code.
    :answer_c: Allows the programmer to write less code.
    :feedback_c: This is incorrect because writing tests actually requires writing more code.
    :answer_d: Not necessary for good programming.
    :feedback_d: This is incorrect because defining tests is an important aspect of good programming practices.
    :correct: a

    Why is defining some tests before implementation a good programming practice?

.. mchoice:: feedback_l40_10_2
    :random:
    :answer_a: Allows testing of the program's logical flow before coding it.
    :feedback_a: Writing pseudocode in the design stage provides several benefits, including the ability to test the logic and structure of the program before writing any actual code.
    :answer_b: Saves time and effort in later coding.
    :feedback_b: This is incorrect because writing pseudocode requires time and effort, but it's an investment that's worth it in the design stage.
    :answer_c: Helps identify syntax errors in the code.
    :feedback_c: This helps identify logical errors, gaps, and loopholes in the program design, which saves time and effort in the long run.
    :answer_d: Facilitates code debugging.
    :feedback_d: This helps identify logical errors, gaps, and loopholes in the program design, which saves time and effort in the long run.
    :correct: a

    What is the advantage of writing pseudocode in the design stage?