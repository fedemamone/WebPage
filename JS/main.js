window.onscroll = function() {stick()};

var navbar = document.getElementById("navbar");
var sticky = 40

function stick() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}