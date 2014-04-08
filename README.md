Expressions
	A meaningful combination of values and operators that EVALUATES TO A SINGLE VALUE.  
		Operator
		Operand
		Binary/Unary
	
			Calling a function is a valid expression.
			3+b+c+d
			If 'Sunny' && haveBike || ...
			str.length !==0
			true


	STATEMENTS - NOT expressions
		Variable Declarations
			var area= function (w,h) {
				return w * h;
			};
		IF ELSE
		FOR LOOPS
		WHILE LOOPS

		FUNCTION EXPRESSIONS
			var square = function(x) {
				return x * x;
			}

			This is the FUNCTION EXPRESSION this evaluates to a FUNCTION OBJECT: 
				function(x) {
				return x * x;
				}
					This is what the computer/browser stores in memory.

	FUNCTION CALL - is an EXPRESSION that evaluates to its return value.  
		Function definition (expression) evaluates to a function object. 

		A function call is an expression, but we need to store the return value to access it.  

	FUNCTION STACK - i.e. "The Stack"
		Last in, First Out (LIFO)
		The Stack is space in memory allocated to function calls using LIFO

	



