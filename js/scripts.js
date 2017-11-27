function conversion() {
  liters = parseFloat(prompt("How many liters do you have?"));
  liters = liters / 3.79;
  alert(liters);
};

conversion();

function tspToTbsp() {
  teaspoon = parseFloat(prompt("How many teaspoons are you converting?"));
  teaspoon = teaspoon * 3;
  alert(teaspoon);
};

tspToTbsp();

function pintToCups() {
  pint = parseFloat(prompt("How many pints do you have?"));
  pint = pint * 2;
  alert(pint);
};

pintToCups();

/*function conversion(liters) {
  parseFloat(prompt("How many liters do you have?"));
  alert(liters);
};

conversion(liters);

/*
alert(BMI(73, 200));

function Question(height, weight) {
 height = parseInt(prompt("How tall are you?"));
 weight = parseInt(prompt("How much do you weigh?"));
 alert("Your BMI is " + BMI(height, weight));
};

Question();

function Convert(celsius) {
	celsius = parseInt(prompt("What is the Temperature in Celsius?"));
  celsius = (celsius * (9/5) + 32);
  alert("The conerted temperature from celsius to fahrenheit is " + celsius);
}*/
