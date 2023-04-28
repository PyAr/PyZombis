=========
Quiz - 12
=========

.. |br| raw:: html

    <br />


.. tabbed:: quiz12

    .. tab:: Exercise 1

        .. activecode:: q12_1
            :nocodelens:

            Develop the function ``ends_equal`` that, given a list of strings ``words``, returns the number of strings
            with length >= 2 where the first and last character are the same. |br| |br|
            Example: |br|
            ``ends_equal(["aba", "xyz", "aa", "x", "bbb"])`` -> ``3`` |br|
                
            ~~~~
            def ends_equal(words):

                
            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
                
                    self.assertEqual(ends_equal(["aba", "xyz", "aa", "x", "bbb"]), 3, "Expected: 3")
                    self.assertEqual(ends_equal(["", "x", "xy", "xyx", "xx"]), 2, "Expected: 2")
                    self.assertEqual(ends_equal(["aaa", "be", "abc", "hello"]), 1, "Expected: 1")
                
                
            myTests().main()


    .. tab:: Exercise 2

        .. activecode:: q12_2
            :nocodelens:

            Develop the function ``x_before`` that, given a list of strings ``words``, returns 
            another list in which all strings that start with the ``'x'`` character are the first elements of the list. 
            Then, the rest of the words will be arranged according to their alphabetical order. **Note**: Remember 
            that ``sorted(list)`` returns a sorted list. |br| |br|
            Examples: |br|
            ``x_before(["bbb", "ccc", "axx", "xzz", "xaa"])`` -> ``["xaa", "xzz", "axx", "bbb", "ccc"]`` |br|
            ``x_before(["ccc", "bbb", "aaa", "xcc", "xaa"])`` -> ``["xaa", "xcc", "aaa", "bbb", "ccc"]`` |br|

            ~~~~
            def x_before(words):

                
            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
            
                    self.assertEqual(
                        x_before(["bbb", "ccc", "axx", "xzz", "xaa"]),
                        ["xaa", "xzz", "axx", "bbb", "ccc"],
                        "Expected: ['xaa', 'xzz', 'axx', 'bbb', 'ccc']",
                    )
                    self.assertEqual(
                        x_before(["ccc", "bbb", "aaa", "xcc", "xaa"]),
                        ["xaa", "xcc", "aaa", "bbb", "ccc"],
                        "Expected: ['xaa', 'xcc', 'aaa', 'bbb', 'ccc']",
                    )
                    self.assertEqual(
                        x_before(["mix", "xyz", "apple", "xanadu", "aardvark"]),
                        ["xanadu", "xyz", "aardvark", "apple", "mix"],
                        "Expected: ['xanadu', 'xyz', 'aardvark', 'apple', 'mix']",
                    )
            
            
            myTests().main()


    .. tab:: Exercise 3

        .. activecode:: q12_3
            :nocodelens:

            Develop the function ``sort_tuples`` that, given a non-empty list of tuples, returns another list 
            of tuples sorted in ascending order taking into account the last element of each tuple. |br| |br|
            Examples: |br|
            ``sort_tuples([(1, 3), (3, 2), (2, 1)])`` -> ``[(2, 1), (3, 2), (1, 3)]`` |br|
            ``sort_tuples([(2, 3), (1, 2), (3, 1)])`` -> ``[(3, 1), (1, 2), (2, 3)]`` |br|
            


            ~~~~
            def sort_tuples(tuples):

                

            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
            
                    self.assertEqual(
                        sort_tuples([(1, 3), (3, 2), (2, 1)]), [(2, 1), (3, 2), (1, 3)], "Expected: [(2, 1), (3, 2), (1, 3)]"
                    )
                    self.assertEqual(
                        sort_tuples([(2, 3), (1, 2), (3, 1)]), [(3, 1), (1, 2), (2, 3)], "Expected: [(3, 1), (1, 2), (2, 3)]"
                    )
                    self.assertEqual(
                        sort_tuples([(1, 7), (1, 3), (3, 4, 5), (2, 2)]),
                        [(2, 2), (1, 3), (3, 4, 5), (1, 7)],
                        "Expected: [(2, 2), (1, 3), (3, 4, 5), (1, 7)]",
                    )
            
            
            myTests().main()