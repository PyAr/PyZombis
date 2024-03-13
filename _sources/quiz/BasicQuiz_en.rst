======================
Basic Python Exercises
======================

+ This is collection of basic python exercises from Google's Python Class

.. |br| raw:: html

    <br />

.. tabbed:: Basic Python Exercises 

    .. tab:: Exercise 1
        
        .. activecode:: fdss
            :nocodelens:

            Given a list of strings, return a list with the strings in sorted order, except group all the strings that begin with 'x' first. For example: ['mix', 'xyz', 'apple', 'xanadu', 'aardvark'] yields ['xanadu', 'xyz', 'aardvark', 'apple', 'mix'] |br|

            ~~~~
            def front_x(words):


            ====
            from unittest.gui import TestCaseGui

            class MyTests(TestCaseGui):
                    def testOne(self):

                    self.assertEqual(front_x(['bbb', 'ccc', 'axx', 'xzz', 'xaa']), ['xaa', 'xzz', 'axx', 'bbb', 'ccc'], "Expected: ['xaa', 'xzz', 'axx', 'bbb', 'ccc']")
                    self.assertEqual(front_x(['ccc', 'bbb', 'aaa', 'xcc', 'xaa']), ['xaa', 'xcc', 'aaa', 'bbb', 'ccc'], "Expected: ['xaa', 'xcc', 'aaa', 'bbb', 'ccc']")
                    self.assertEqual(front_x(['mix', 'xyz', 'apple', 'xanadu', 'aardvark']), ['xanadu', 'xyz', 'aardvark', 'apple', 'mix'], "Expected: ['xanadu', 'xyz', 'aardvark', 'apple', 'mix']")

            MyTests().main()




 