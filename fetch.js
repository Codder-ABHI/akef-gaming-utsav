var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("accor");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

$(document).ready(function () {
  // Initialize the image carousel
  $("#image-carousel").owlCarousel({
      items: 4,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      margin: 10,
      rtl: true,
      direction: 'left',
  });
});