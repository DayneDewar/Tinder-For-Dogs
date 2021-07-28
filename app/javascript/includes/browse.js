$(function() {
  var $activeSlide = $('#slides .slide:first-child');
//   $activeSlide.addClass("showing")

  $(".match-tile").on("click", function(){
        var account_id = $(this).data("id")
        console.log(account_id);
  })
  $("#decline").on("click", function() {
      nextSlide('decline')
  })
  
  $("#approve").on("click", function() {
    var user_id = $activeSlide.data("id");

    $.ajax({
      method: "POST",
      url: "/approve/" + user_id,
      dataType: "ajax"
    })
    console.log(user_id)
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