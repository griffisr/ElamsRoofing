
  

  $(document).ready(function(){
    "use strict";

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        // code to run on mobile devices
        

    var swiper = new Swiper(".mySwiper", {
      autoHeight: true,
      loop: true,
      loopAdditionalSlides: 10,
      initialSlide: 1,
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      nextButton: ".swiper-button-next",
      prevButton: ".swiper-button-prev",
      slidesPerView: 1,
      });




      } else {
        // code to run on non-mobile devices
       
    var swiper = new Swiper(".mySwiper", {
      centeredSlides: true,
      autoHeight: true,
      loop: true,
      loopAdditionalSlides: 10,
      initialSlide: 1,
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      nextButton: ".swiper-button-next",
      prevButton: ".swiper-button-prev",
      slidesPerView: 1,
      
      });
      }
            

  });







  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    // code to run on mobile devices
    var menuImages = document.getElementsByClassName('menu-img');
    for (var i = 0; i < menuImages.length; i++) {
      menuImages[i].removeEventListener('mouseover', function() {
          new Drift(this, {
              inlinePane: false,
          });
      });
    }
  } else {
    // code to run on non-mobile devices
    var menuImages = document.getElementsByClassName('menu-img');
    for (var i = 0; i < menuImages.length; i++) {
      menuImages[i].addEventListener('mouseover', function() {
          new Drift(this, {
              zoomFactor: 1.15,
              inlinePane: false,
          });
      });
    }
  }
  







  var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

