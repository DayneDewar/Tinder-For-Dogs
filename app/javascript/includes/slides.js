$(function() {
  var $activeSlide = $('#slides .slide:first-child');

  $activeSlide.addClass("showing")

  $("#decline").on("click", function() {
      nextSlide('decline')
  })

  $("#approve").on("click", function() {
    nextSlide('approve')
  })

  function nextSlide(action) {
      $activeSlide.removeClass("showing");
      $activeSlide = $activeSlide.next(".slide")

      if (action == "approve") {

      } else {

      }

      $activeSlide.addClass("showing")
        // slides[currentSlide].className = 'slide';
        // currentSlide = (currentSlide+1)%slides.length;
        // slides[currentSlide].className = 'slide showing';
  }
}); 