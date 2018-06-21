window.setTimeout(menubar, 7500);
{
window.onscroll = menuBar;
console.log("entered into the function");
function menuBar() {
console.log("working");
var menubar = document.getElementById('menubar');
var sticky = menubar.offsetTop;
 if (window.pageYOffset >= sticky) {
  	console.log("running if");
    menubar.classList.add('sticky')
  } else {
  	console.log("else");
    menubar.classList.remove('sticky');
  }
}