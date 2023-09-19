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