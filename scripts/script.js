

var menu = document.querySelector("#hetmenu");
var closemenu = document.getElementById('closemenu');

menu.addEventListener("click", hamburger);
closemenu.addEventListener("click", hamburger);

var expandednav = document.getElementById('expandednav');

function hamburger(){
  expandednav.classList.toggle("showexpandednav");
}
