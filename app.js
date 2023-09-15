
function myClick(){
   document.getElementById('h').innerHTML = "My Camle"
}
const box = document.getElementById('h');

box.addEventListener('click', () => {
  box.remove();
});
/*-------------------------------------------*/
box = document.getElementById('demo');
box.addEventListener('click',() =>{
   document.getElementById('h').innerHTML = "Hi there i got clicked"
})
setTimeout(function(){
   document.getElementById('h').style.display = 'none'
}, 4000);










