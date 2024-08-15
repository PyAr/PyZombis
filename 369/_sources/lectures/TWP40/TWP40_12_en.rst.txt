Integer division in old programming languages
=====================================================

+ Oldest programming languages produce a complete result in integer division.
+ ``10/3`` equals 3
+ When calculating Fahrenheit to Celsius, I will need to modify my program a bit if I use C or Java.


Converting degrees using C
---------------------------

.. code-block:: c

    #include <stdio.h>

        int main(void){
            float F, C;
            printf("Fahrenheit: ");
            scanf("%f", &F);
            C = 5.0 * (F - 32.0) / 9.0;
            printf("Celsius: %2.1f\n", C);
        }

.. poll:: TWP40E
   :scale: 3
   :allowcomment:

   On a scale from 1 (needs improvement) to 3 (excellent),
   how would you rate this chapter?
