window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  var navbar = document.getElementById("nav");
  var logo = document.getElementById("logo");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    nav.style.backgroundColor = "#555";
    logo.style.maxWidth = "150px"; /* Adjust the size when scrolling */
  } else {
    navstyle.backgroundColor = "#333";
    logo.style.maxWidth = "200px"; /* Adjust the size when not scrolling */
  }
}