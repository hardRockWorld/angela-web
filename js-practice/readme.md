This is my practice for JavaScript. All the practice exercise that I did will be
pushed on to this. Concepts mostly the ECMA standard will be present here.

This is a very good exercise for beginners who want to learn modern JavaScript using code.

1. Scope: JavaScript has 2 kinds of Scope. a) Global Scope b) Function Scope


        - If the variable statement occurs inside a Function Declaration, the variables are defined with function-local scope   
          in that function.
        - What that means is if you create a variable with , that variable is “scoped” to the function it was created in and is
          only accessible inside of that function or, any nested functions

-> see the example code in function_local_scope_1.js file.
(fix) :
        -> see the code for function_local_scope_1_fix.js file.


        . function_inside_function.js file: check this code for learning more about scope when the scenario is of function inside a function.

        for Block scope:

            - check out the example of 'array operation' for prices and discounted price which takes in prices and the rate of the discount and return an array of  
              discounted prices. check out the file: array_for_price_discount.js file
            - variables declared using the "var" keyword has => function scope. that is why in the program array_for_price_discount.js file -> you can access the 'i'     
              variable outside of the for loop as well.
