var menu = document.getElementById('menu');
var backgroundDark = document.getElementById('background-dark');
var active = 0;

function switchMenu () {
  if (active == 0) {
    stylesMenu(0,1);
    active = 1;
  } else {
    stylesMenu(100,0);
    active = 0;
  }
}

function stylesMenu(traslateX, scale) {
  menu.style.transform = "translateX(-" + traslateX + "%)";
  backgroundDark.style.transform = "scale(" + scale + ")";

}
