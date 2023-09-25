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


Looping an array : one way to to loop through an array, is using for loop: for e.g const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

JavaScript Array Methods
<li>
Array length
Array toString()
Array pop() --it removes the last element from an array
Array push() -- it will add the element at the end
Array shift()
Array unshift()
Array join()
Array delete()
Array concat()
Array flat()
Array splice()
Array slice()
</li>..
Splicing and Slicing Arrays
The splice() method adds new items to an array.

The slice() method slices out a piece of an array.
in Splice() The first parameter (0) defines the position where new elements should be added (spliced in).

The second parameter (1) defines how many elements should be removed.

The rest of the parameters are omitted. No new elements will be added.

Array Sorting uses the keyword sort()
Reversing an Array
The reverse() method reverses the elements in an array.

You can use it to sort an array in descending order

// find the lowest and higest value in an array