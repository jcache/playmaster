$(document.body).ready(function() {
  $('select').material_select();
});
$("#ApplicationBody").scroll(function () {
  //
  var sc = $("#ApplicationBody").scrollTop();
  //
  if (sc > 100) {
    $(".header-sroll").addClass("small")
  } else {
    $(".header-sroll").removeClass("small")
  }
  //
});
