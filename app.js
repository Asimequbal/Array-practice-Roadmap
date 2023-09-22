
// function myClick(){
//    document.getElementById('h').innerHTML = "My Camle"
// }
// const box = document.getElementById('h');

// box.addEventListener('click', () => {
//   box.remove();
// });
/*-------------------------------------------*/
// box = document.getElementById('demo');
// box.addEventListener('click',() =>{
//    document.getElementById('h').innerHTML = "Hi there i got clicked"
// })
// setTimeout(function(){
//    document.getElementById('h').style.display = 'none'
// }, 4000);
/*-------------------------------------------*/
//  let text1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//  document.getElementsByTagName("p")[0].innerHTML = text1.length;
// let myName ='Arif'
// console.log(myName.length)
// console.log(myName.toUpperCase())
// console.log(myName.toLowerCase())
// console.log(myName.slice(2 , 23))
// console.log(myName.replace( 'if', 'mx'))
// let friend = "     Md Shamim     "
// console.log(friend.trim())
// let Mytext = document.getElementById('h').innerHTML;

// let Mybtn = document.getElementById('btn')
// Mybtn.addEventListener('click', function(){
//     document.getElementById('h').innerHTML = Mytext.replace( 'Asim', "Ariz");
// } )
/* Jvascript String Serch*/
/*JavaScript String indexOf()*/
// let text = "hghjj Please lk where 'locate' occurs!"
// let index = text.indexOf('lk');
// document.getElementById("h").innerHTML = index;
// let My1stName = "Asim";
// let My2ndName =  "Equbal";

// let text = `${My1stName}+${My2ndName}`
// document.getElementById('h').innerHTML = text;
// creating an array 
// let fruits = ['banana','apple', 'grapes', 'cherry']
// // alert(fruits[2]);
// document.getElementById('h').innerHTML = fruits.length;
// let arr = ['apple',{name:'asim'},true,function (){alert('hello')}];

// document.getElementById('h').innerHTML = arr[3]();
/* converts  array to strings

const cars = ['Maruti 800', 'Wagon R', 'Folks Wagon', 'Tyota'];
document.getElementById('h').innerHTML = cars.toString(); */

/*Arrays are Objects 
const cars = ['Maruti 800', 'Wagon R', 'Folks Wagon', 65];
const person = {firstName:"John", lastName:"Doe", age:46};
object uses name to access value and names 
But the array uses the index to acces the value and the names
*/
// const fruits = ['Maruti 800', 'Wagon R', 'Folks Wagon', 65];
 
// document.getElementById('h').innerHTML =  fruits[fruits.length - 1];

/* Looping an array 
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLength = fruits.length;
let text = "<div>";
for(let i = 0; i < fLength; i++){
    text += "<li>" + fruits[i] + "</li>";
    text += "</div>"
}
document.getElementById('h').innerHTML = text;
document.getElementById('h').innerHTML = text;*/
/* the pop() method
The pop() removes the last element from an array*/
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("h").innerHTML = fruits;
// fruits.pop();
document.getElementById('h').innerHTML = fruits;
const x = '9999'
// fruits.push(x);
document.getElementById('h').innerHTML = fruits;
fruits.shift(); //it remove the 1st element from array
document.getElementById('h').innerHTML = fruits;
fruits.unshift('Lemaon');// add an element in starting of an array
document.getElementById('h').innerHTML = fruits;
//Merging (Concatenating) Arrays
const fr1 = [ 'adaf',56, 'ksafml',8];
const fr2 = ['asim', 5 , " amfkd" ];
const fr3 = [54,544,454, 'asom'];
const newArr =fr1.concat(fr2 , fr3) ;
document.getElementById('h').innerHTML = newArr;
//Flattening an Array => Flattening an array is the process of reducing the dimensionality of an array.

//The flat() method creates a new array with sub-array elements concatenated to a specified depth.
const mtnew = [ [54,54],['aksjkns','asim', 5], ['akd','ksj']];
const neeArr1 = mtnew.flat();
document.getElementById('h').innerHTML = neeArr1;
/* JavaScript Splice method splice(); The first parameter (0) defines the position where new elements should be added (spliced in).

The second parameter (1) defines how many elements should be removed.

The rest of the parameters ("ariz", 5 , 9, "as") define the new elements to be added..*/
/*const newa = [ 1,2,1,156,656,98,'Asim'];
let ad = newa.splice(6 , 1, "ariz", 5 , 9, "as");
document.getElementById('h').innerHTML = newa;*/

//array sorting
/*const fruits01 = ["Banana", "Orange", "Apple", "Mango"];
fruits01.sort();
document.getElementById('h').innerHTML = fruits01; //in this alphabetical sorting
fruits01.reverse();
document.querySelector('span').innerHTML = fruits01; */ // reversing the sort 
//Numeric array sorting => By default array sort number as string
// const numbers1 = [4,56,76,5,11,45,100,1000,999];
// function compare(x,y){
//     return x-y;

// }
// numbers1.sort(compare);
// console.log(numbers1)
/*const numbers1 = [4,56,76,5,11,45,100,1000,999];
 document.getElementById('h').innerHTML = numbers1;
 numbers1.sort( function(a,b){
    return a-b;
 })
 document.querySelector('span').innerHTML = numbers1;
 */
/* we can sort numeric value by providing function thats why it is called higher order function , otherwise it will sort by default method  like in string order*/
const numbers1 = [4, 56, 76, 5, 11, 45, 100, 1000, 999];
mybtn1 = document.getElementById('btn1');
mybtn1.addEventListener('click', function () {
    numbers1.sort();
document.getElementById('h').innerHTML = numbers1;
})
mybtn2 = document.getElementById('btn2')
mybtn2.addEventListener('click',function(){
 numbers1.sort(function(a,b){
    return a-b;
 })
document.getElementById('h').innerHTML = numbers1;
})

















