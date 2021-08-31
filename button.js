//Get the button:
thebutton = document.getElementById("button");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollfun()};

function scrollfun() {
  if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
    thebutton.style.display = "block";
  } else {
    thebutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function gotoTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}