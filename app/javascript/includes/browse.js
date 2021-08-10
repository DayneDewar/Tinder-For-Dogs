$(function() {
  var $activeSlide = $('#slides .slide:first-child');
//   $activeSlide.addClass("showing")

  $(".match-tile").on("click", function() {
        var account_id = $(this).data("id")

        $.ajax({
          url: "/get/conversation/" + account_id,
          method: "POST",
          dataType: "script"
        })
        // $("#conversation").show()
  })

  $("#close-convo").on("click", function() {
    $("#conversation").hide()
  })
  $("#decline").on("click", function() {
      nextSlide('decline')
  })
  
  $("#approve").on("click", function() {
    var user_id = $activeSlide.data("id");

    $.ajax({
      url: "/approve/" + user_id,
      method: "POST",
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