//1

function Person(name, age, from) {
	this.name = name;
	this.age = age;
	this.from = from;
}

var person1 = new Person('Christian', 27, 'Norway');
var person2 = new Person('Thomas', 23, 'England');
var person3 = new Person('Jack', 29, 'USA');

//2,3

var array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var num5 = array.slice(4, 5);
array.pop();
console.log(array);
console.log(num5);
console.log(array);

//4

var paragraph =
	'Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.';

var sToB = paragraph.replace(/Strawberries/gi, 'Bananas');

//5

var myArray = [ 'Manchester United', 'Liverpool', 'Arsenal', 'Manchester City' ];

var newMyArray = myArray
	.map(function(array) {
		return (string = [ 'Mercedes', 'Audi', 'BMW', 'Mustang' ]);
	})
	.map(function(array) {
		return string[(0, 1, 2, 3)];
	});

console.log(myArray);
console.log(newMyArray);

//6

var people = [
	{ person: 'Jack', lastName: 'Anderson' },
	{ person: 'Taylor', lastName: 'Cooper' },
	{ person: 'Alexander', lastName: 'Jackson' }
];

var person = people.filter(function(person) {
	return person.lastName === 'Cooper';
});

console.log(person);

//7

new Date();
