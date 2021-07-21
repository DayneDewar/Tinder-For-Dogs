$(function() {
  var $activeSlide = $('#slides .slide:first-child');
//   $activeSlide.addClass("showing")

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
          console.log(action)
      } else {
        console.log(action)
      }

      $activeSlide.addClass("showing")
  }
}); 