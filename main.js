//FUNCTIONS - Reusable blocks of code with inputs and statements
	//1) Defining the Function

var area = function(w, h) {
	return w * h
};
//semicolon to end body

	//2) Calling the function	
var result = area (3, 4);
alert(result);

//var result is the variable to store a return value
//area is the function name
//(3,4) are argument values

if (area(3,4) === 12) {
	console.log('Yes!');
};
//prints Yes! 

//SHORT BREAK

var square = function(x) {
	return x * x;
};
//square is storing a function object
	//function(x) {
	//return x * x;
	//};

var cube = function (x) {
	return x * square(x);
};
//cube is storing a function object
	//function (x) {
	//return x * square(x);
	//};

var result = cube(3); 
//result stores the return value
alert(result);
//prints 27

//Write a function 'cake' that takes a separate parameter for each ingredient  (flour, egg...)


var cake = function(flour, egg, sugar) {
	console.log ("You have " + (flour + egg + sugar) + " ingredients.");
}

cake(2,3,4);
//logs "You have 9 ingredients."

//

var cake = function(flour, egg, sugar) {
	var total = flour + egg + sugar;
	console.log ("You have " + total + " ingredients.");
}

cake(2,3,4);

//  

//example below of an order of operations error
var cake = function(flour, egg, sugar) {
	console.log ("You have " + flour + egg + sugar + " ingredients.");
}
cake(2,3,4);
//logs "You have 234 ingredients."

//
var cake = function(flour, egg, sugar) {
	var total = flour + egg + sugar;
	var servings = total/9+4;
	console.log ("You have " + total + " ingredients.");
	console.log("This will serve " + servings + " people.");
}

cake(4,3,8);
//logs You have 15 ingredients.
//logs This will serve 5.666667 people


//Use of Math.Floor() to round.  

var cake = function(flour, egg, sugar) {
	var total = flour + egg + sugar;
	var servings = Math.floor(total/9+4);
	console.log ("You have " + total + " ingredients.");
	console.log("This will serve " + servings + " people.");
}

cake(4,3,8);
//logs You have 15 ingredients.
//logs This will serve 5 people.