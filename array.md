There are two methods to create array
let arr = new Array();
let arr = ["Apple", "Orange", "Plum"]
but most of the time we used second method to create the array
array elements are enumarated , starting with 0 , 1, 3 and so on.
However, what if you want to loop through the fruits and find a specific one? And what if you had not 3 fruits, but 300?

The solution is an array!

An array can hold many values under a single name, and you can access the values by referring to an index number.
we can check length of an array by array.lenght
an array can store any types of elements
for an instance mix value; let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];
/*Arrays are Objects 
const cars = ['Maruti 800', 'Wagon R', 'Folks Wagon', 65];
const person = {firstName:"John", lastName:"Doe", age:46};
object uses name to access value and names 
But the array uses the index to acces the value and the names
*/
Array Properties and Methods
cars.length   // Returns the number of elements
cars.sort()   // Sorts the array