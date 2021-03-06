(function() {
  document.addEventListener("DOMContentLoaded", function() {
    //Инициализация полифила для object-fit
    objectFitImages();

    var galleryItems = document.querySelectorAll(".gallery__item");
    var overlay = document.querySelector(".overlay");
    var overlayImage = overlay.querySelector(".overlay__image");

    //Добавить обработчики событий увеличения изображений
    for (var i = 0; i < galleryItems.length; i++) {
      var item = galleryItems[i];
      item.addEventListener("click", function(event) {
        var target = event.target;
        while (target !== document && !/gallery__item/.test(target.className)) {
          target = target.parentNode;
        }

        var index = target.getAttribute("data-index");
        var width = target.getAttribute("data-width");

        if (!!index) {
          var base = "https://res.cloudinary.com/mariaevstropova/image/upload/";
          var srcSet = base + "f_auto,q_75,w_256/img-" + index + ".jpg 256w,"
              + base + "f_auto,q_75,w_512/img-" + index + ".jpg 512w,"
              + base + "f_auto,q_75,w_1024/img-" + index + ".jpg 1024w,"
              + base + "f_auto,q_75/img-" + index + ".jpg " + width + "w" ;
          var src =  base + "img-" + index + ".jpg";

          overlayImage.setAttribute("srcset", srcSet);
          overlayImage.setAttribute("sizes", "100vw");
          overlayImage.setAttribute("src", src);

          overlay.className = removeClassName(overlay, "overlay_closed");
        }
      });
    }

    //Добавить обработчики событий закрытия увеличенного изображения
    var overlayCloseBtn = document.querySelector(".overlay__close-button");
    overlayCloseBtn.addEventListener("click", function() {
      overlay.className = addClassName(overlay, "overlay_closed");

      setTimeout(function() {
        overlayImage.removeAttribute("srcset");
        overlayImage.removeAttribute("sizes");
        overlayImage.removeAttribute("src");
      }, 500);
    });

    function addClassName(element, name) {
      return element.className + " " + name;
    }

    function removeClassName(element, name) {
      return element.className.replace(name, "").trim();
    }
  });
})();
