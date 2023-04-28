.. role:: black
.. role:: blue
.. role:: red
.. role:: green
.. role:: purple
.. role:: yellow

The parts of your program
=========================

Guessing numbers
------------------

.. activecode:: ac_l30_2_en
    :nocodelens:
    :stdin:

    print("Welcome!")
    g = input("Enter a number: ")
    number = int(g)
    if number == 42:
        print("You won!")
    else:
        print("You lost!")
    print("End of the game!")
    

The parts of the program
-----------------------

Now let's analyze the parts of the previous code

.. raw:: html

   <div>
        <style>
            div.code-example {border: 1px ; border: 1.5px solid #b3b3b3; padding: 15px;
                border-radius: 4px; background-color:rgb(226, 226, 226)}
            code.code-example {font-size: 20px;background-color:transparent}
            .black {color:black}
            .blue {color:#3300AA}
            .red {color:#AA1111}
            .green {color:#116644}
            .purple {color:#770088}
            .yellow {background:yellow}
        </style>
        <div class="code-example">
            <code class="code-example">
                <text class="blue">print</text><text class="black">(</text><text class="red">"Welcome!"</text><text class="black">)</text><br/>
                <text class="black">g = </text><text class="blue">input</text><text class="black">(</text><text class="red">"Enter a number: "</text><text class="black">)</text><br/>
                <text class="black">number = </text><text class="blue">int</text><text class="black">(g)</text><br/>
                <text class="purple">if</text> <text class="black">number == </text><text class="green">42</text><text class="black">:</text><br/>
                <text class="yellow">&nbsp;&nbsp;&nbsp;&nbsp;</text><text class="blue">print</text><text class="black">(</text><text class="red">"You won!"</text><text class="black">)</text><br/>
                <text class="purple">else</text><text class="black">:</text><br/>
                <text class="yellow">&nbsp;&nbsp;&nbsp;&nbsp;</text><text class="blue">print</text><text class="black">(</text><text class="red">"You lost!"</text><text class="black">)</text><br/>
                <text class="blue">print</text><text class="black">(</text><text class="red">"End of the game!"</text><text class="black">)</text><br/>
            </code>
        </div>
    </div>

Note that in the following program:

+ The parts in blue are :blue:`functions` (ex: **print()**) 
+ The parts in red are :red:`strings` (ex: **"Welcome!"**)
+ The parts in green are :green:`numbers` (ex: **42**)
+ The parts in purple are :purple:`directives` (ex: **if** and **else**)
+ The parts in yellow are :yellow:`indentations` ("Each in their own block")
+ The parts in black are :black:`variables` (ex: **g** and **number**)
+ The equal sign (``=``) is the assignment operator and is used to assign values to variables (ex: ``number = int(g)`` The variable 'number' receives an integer from g))
+ The double equal sign (``==``) is the comparison operator and is used to compare two variables or values (ex: ``number == 42`` Is the number equal to 42?)
+ The colon (``:``) is the operator that opens an indentation block. It goes after the directives (ex: ``if number == 42:`` and ``else:``) 

**Note:** These are the colors of the code blocks that you have seen during the course, but these colors may vary depending on the programming tool used.

.. parsonsprob:: ac_l30_2a
    :adaptive:
    :numbered: left

    Build the previous code using this drag and drop exercise. (Use the hint function if you get stuck)
    -----
    print("Welcome!")
    g = input("Enter a number: ")
    number = int(g)
    if number == 42:
       print("You won!")
    else:
       print("You lost!")
    print("End of the game!")