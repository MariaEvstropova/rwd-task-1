(function() {
  document.addEventListener("DOMContentLoaded", function() {
    var galeryItems = document.querySelectorAll(".galery__item");
    galeryItems.forEach(function(item) {
      item.addEventListener("click", openImageFullScreen.bind(item));
    })
  });

  function openImageFullScreen() {
    var image = this.querySelector(".galery__image");
    launchFullScreen(image);
  }

  function launchFullScreen(element) {
    if(element.requestFullScreen) {
      element.requestFullScreen();
    } else if(element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if(element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen();
    }
  }
})()
