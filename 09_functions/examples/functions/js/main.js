// sayHello, which accepts one parameter, called name;
// it should print a greeting to a person with that name, i.e. "Hello, name".
function sayHello (name) {
	var greeting = "Hello " + name;

	$('.greeting').html(greeting);
}

sayHello("Ashlei");


// hotOrNot, which accepts one parameter, temp;
// it should print "Hot!'" if temp is above 75, but should return "Not hot!" otherwise.
function hotOrNot (temp) {
	if (temp > 75) {
		$('.temperature').html('Hot!');
	} else {
		$('.temperature').html('Not hot!');
	}
}

hotOrNot(76);


//greatest, which accepts three parameters (x, y, and z), and returns the one with the greatest value. For example, greatest(5, 10, 1) would evaluate to 10.
function compare (num1, num2, num3) {
	if (num1 > num2 && num1 > num3) {
		$('.greatest').html(num1);
	} else if (num2 > num1 && num2 > num3) {
		$('.greatest').html(num2);
	} else {
		$('.greatest').html(num3)
	}
}

compare(4, 11, 15);